import styles from './Container.module.css';

/** Centres content and applies the responsive page gutter. */
export function Container({ narrow = false, className = '', children }) {
  const classes = [styles.container, narrow ? styles.narrow : '', className]
    .filter(Boolean)
    .join(' ');
  return <div className={classes}>{children}</div>;
}
