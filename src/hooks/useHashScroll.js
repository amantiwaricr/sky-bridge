import { useEffect } from 'react';

/**
 * Scrolls to the element named by the URL hash after mount.
 *
 * The browser tries to honour `/#projects` while parsing index.html, which is
 * before React has rendered anything -- so the target does not exist yet and
 * the jump silently does nothing. Deep links into a section would otherwise
 * always land at the top of the page.
 */
export function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash === '#top') return;

    let id;
    try {
      id = decodeURIComponent(hash.slice(1));
    } catch {
      return; // Malformed hash -- nothing to scroll to.
    }

    // Wait one frame so the section has been laid out before measuring it.
    const raf = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: 'instant', block: 'start' });
    });

    return () => cancelAnimationFrame(raf);
  }, []);
}
