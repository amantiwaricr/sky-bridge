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

const pending = new Set();
let timerId = 0;
let rafId = 0;
let listening = false;

/** Reveal once the element's top edge rises above 92% of the viewport. */
function shouldReveal(node) {
  return node.getBoundingClientRect().top < window.innerHeight * 0.92;
}

function check() {
  rafId = 0;
  timerId = 0;

  for (const entry of pending) {
    if (shouldReveal(entry.node)) {
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
  if (shouldReveal(node)) {
    reveal();
    return () => {};
  }

  const entry = { node, reveal };
  pending.add(entry);
  setup();
  scheduleCheck();

  return () => {
    pending.delete(entry);
    if (pending.size === 0) teardown();
  };
}
