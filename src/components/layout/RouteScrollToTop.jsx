import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Sends the viewport to the top whenever the route changes.
 *
 * Without this a router keeps the previous scroll position, so following a
 * link from halfway down one page lands halfway down the next one. Hash
 * targets are left alone so in-page anchors still work.
 */
export function RouteScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
