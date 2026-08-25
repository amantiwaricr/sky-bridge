import { useReveal } from '../../hooks/useReveal';
import styles from './Reveal.module.css';

/**
 * Fades and lifts its children into view on scroll. `delay` staggers items in
 * a grid; keep it small so a list never feels slow to arrive.
 */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={[styles.reveal, visible ? styles.visible : '', className]
        .filter(Boolean)
        .join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
