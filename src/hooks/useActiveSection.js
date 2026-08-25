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

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
