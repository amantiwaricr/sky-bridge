import { ArrowUp } from 'lucide-react';
import { useScrolled } from '../../hooks/useScrollPosition';
import styles from './ScrollToTop.module.css';

/** Appears after a meaningful scroll and returns the user to the top. */
export function ScrollToTop() {
  const visible = useScrolled(700);

  return (
    <button
      type="button"
      className={[styles.button, visible ? styles.visible : ''].join(' ')}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
