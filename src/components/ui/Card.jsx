import styles from './Card.module.css';

/** Shared card shell so every grid on the page uses one surface treatment. */
export function Card({ as: Tag = 'article', interactive = false, className = '', children }) {
  const classes = [styles.card, interactive ? styles.interactive : '', className]
    .filter(Boolean)
    .join(' ');
  return <Tag className={classes}>{children}</Tag>;
}
