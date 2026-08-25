import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';
import { watchForReveal } from './revealRegistry';

/**
 * Reveals an element once it reaches the viewport. Returns a ref to attach and
 * a boolean.
 *
 * Content must never be stuck invisible, so the underlying watcher measures
 * position rather than relying on intersection events -- see revealRegistry.js.
 * Elements also start visible when motion is reduced.
 */
export function useReveal() {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef(null);
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    return watchForReveal(node, () => setVisible(true));
  }, [reducedMotion]);

  return [ref, visible];
}
