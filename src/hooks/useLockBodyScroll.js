import { useEffect } from 'react';

/** Prevents background scrolling while an overlay (the mobile menu) is open. */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    document.body.dataset.scrollLocked = 'true';
    return () => {
      delete document.body.dataset.scrollLocked;
    };
  }, [locked]);
}
