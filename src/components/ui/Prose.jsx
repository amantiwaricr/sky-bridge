import styles from './Prose.module.css';

/**
 * A heading with body paragraphs and optional bullet highlights -- the
 * repeating unit the inner pages are written in.
 */
export function Prose({ heading, paragraphs = [], highlights = [], as: Tag = 'h2', children }) {
  return (
    <div className={styles.block}>
      {heading && <Tag className={styles.heading}>{heading}</Tag>}

      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}

      {highlights.length > 0 && (
        <ul className={styles.highlights}>
          {highlights.map((item) => (
            <li key={item} className={styles.highlight}>
              {item}
            </li>
          ))}
        </ul>
      )}

      {children}
    </div>
  );
}
