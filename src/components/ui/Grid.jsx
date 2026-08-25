import styles from './Grid.module.css';

/**
 * Auto-fitting responsive grid. `min` is the minimum comfortable card width;
 * columns reflow on their own, so no per-breakpoint column counts are needed.
 */
export function Grid({ min = '17rem', gap = 'var(--space-5)', className = '', children }) {
  return (
    <div
      className={[styles.grid, className].filter(Boolean).join(' ')}
      style={{ '--grid-min': min, '--grid-gap': gap }}
    >
      {children}
    </div>
  );
}
