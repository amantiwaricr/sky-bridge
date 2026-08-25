/**
 * Shared visibility watcher for scroll-reveal animations.
 *
 * Design constraint: content must NEVER be left stuck at opacity 0. That rules
 * out IntersectionObserver on its own -- it reports threshold *crossings*, so a
 * fast scroll or an in-page anchor jump can move an element through the
 * viewport between two samples without crossing a threshold, and the element
 * stays invisible forever. This site jumps to anchors on every nav click, so
 * that is a routine path rather than an edge case.
 *
 * It also rules out relying purely on scroll events, which can be coalesced or
 * dropped under load, and on requestAnimationFrame, which is throttled in
 * background tabs.
 *
 * So this measures position instead of listening for intersection, and keeps a
 * low-frequency poll running for as long as anything is still waiting. Scroll
 * events trigger an immediate check so reveals stay snappy; the poll is the
 * guarantee. Everything detaches once the last element has been revealed, so
 * a fully-revealed page costs nothing.
 */

const POLL_MS = 250;
/** How long the viewport must be still before on-screen content is forced visible. */
const SETTLE_MS = 500;

const pending = new Set();
let lastScrollAt = 0;
let timerId = 0;
let rafId = 0;
let listening = false;

/**
 * While scrolling, hold the reveal until the element is comfortably in view
 * rather than firing the moment it peeks over the bottom edge.
 */
function shouldReveal(node) {
  return node.getBoundingClientRect().top < window.innerHeight * 0.92;
}

/**
 * On arrival, anything already touching the viewport must simply be visible.
 * A deep link lands mid-page, and content the user can see there should never
 * be sitting at opacity 0 waiting for them to scroll.
 */
function isOnScreen(node) {
  const rect = node.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function check() {
  rafId = 0;
  timerId = 0;

  // While the user is scrolling, hold each reveal until the element is
  // comfortably in view. Once the viewport has been still for a moment,
  // anything on screen must be visible -- otherwise landing on a deep link
  // can leave content parked at opacity 0 with no scroll coming to fix it.
  const settled = performance.now() - lastScrollAt > SETTLE_MS;
  const ready = settled ? isOnScreen : shouldReveal;

  for (const entry of pending) {
    if (ready(entry.node)) {
      entry.reveal();
      pending.delete(entry);
    }
  }

  if (pending.size === 0) {
    teardown();
    return;
  }
  // Keep polling: this is what makes a reveal impossible to miss.
  scheduleCheck();
}

function scheduleCheck() {
  if (timerId || rafId) return;
  rafId = requestAnimationFrame(() => {
    cancelTimer();
    check();
  });
  timerId = setTimeout(() => {
    cancelRaf();
    check();
  }, POLL_MS);
}

function cancelRaf() {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }
}

function cancelTimer() {
  if (timerId) {
    clearTimeout(timerId);
    timerId = 0;
  }
}

function onScroll() {
  lastScrollAt = performance.now();
  // Cancel the pending poll so the scroll-driven check runs immediately.
  cancelRaf();
  cancelTimer();
  scheduleCheck();
}

function teardown() {
  cancelRaf();
  cancelTimer();
  if (!listening) return;
  listening = false;
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onScroll);
}

function setup() {
  if (listening) return;
  listening = true;
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
}

/**
 * Watch a node and call `reveal` once it should become visible.
 * Returns an unsubscribe function.
 */
export function watchForReveal(node, reveal) {
  // Check immediately so content already on screen never waits for a tick.
  if (shouldReveal(node) || isOnScreen(node)) {
    reveal();
    return () => {};
  }

  const entry = { node, reveal };
  pending.add(entry);
  setup();
  // Treat registration as activity, so a deep-link scroll that lands right
  // after mount is given its settle window before content is forced visible.
  lastScrollAt = performance.now();
  scheduleCheck();

  return () => {
    pending.delete(entry);
    if (pending.size === 0) teardown();
  };
}
