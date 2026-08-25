import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Counts from 0 to `target` once `active` turns true. Jumps straight to the
 * final value when motion is reduced.
 */
export function useCountUp(target, active, duration = 1400) {
  const reducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!active) return;
    if (reducedMotion || duration === 0) {
      setValue(target);
      return;
    }

    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOut(progress) * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, active, duration, reducedMotion]);

  return value;
}
