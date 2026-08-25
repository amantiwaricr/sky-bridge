import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently in view, for highlighting the nav.
 * Watches a band across the upper half of the viewport so the active link
 * changes at a natural reading position rather than at the very top.
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!ids.length) return;

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!nodes.length) return;

    const intersecting = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        // Track every section's state, not just the ones in this batch, so
        // that leaving the last section clears the highlight instead of
        // leaving it stuck on whichever section was seen most recently.
        entries.forEach((entry) => {
          intersecting.set(entry.target.id, entry.isIntersecting);
        });

        const active = ids.find((id) => intersecting.get(id));
        setActiveId(active ?? '');
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
