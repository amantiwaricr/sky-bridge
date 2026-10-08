import { company } from '../../data/companyData';
import styles from './Logo.module.css';

/**
 * Company mark.
 *
 * The emblem is circular with its own wordmark inside, which is unreadable at
 * header size, so it is paired with the name typeset beside it. `size` picks
 * the emblem's diameter; `tone` flips the text for dark backgrounds.
 */
export function Logo({ size = 'md', tone = 'default', className = '' }) {
  const classes = [styles.lockup, styles[size], styles[tone], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes}>
      {company.logoMark?.src && (
        <img
          src={company.logoMark.src}
          alt=""
          className={styles.mark}
          width="512"
          height="512"
        />
      )}
      <span className={styles.text}>
        <span className={styles.name}>{company.shortName || company.name}</span>
        <span className={styles.sub}>Pvt. Ltd.</span>
      </span>
    </span>
  );
}
