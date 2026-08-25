import { company } from '../../data/companyData';
import styles from './Logo.module.css';

/**
 * Company mark.
 *
 * The full lockup stacks the bridge device over the wordmark, which is too
 * tall for a 76px header, so the navbar pairs the mark with a typeset name and
 * the footer uses the full lockup on its own.
 */
export function Logo({ variant = 'lockup', tone = 'default', className = '' }) {
  const name = company.name;

  if (variant === 'full' && company.logo?.src) {
    return (
      <img
        src={company.logo.src}
        alt={company.logo.alt || name}
        className={[styles.full, className].filter(Boolean).join(' ')}
        width="900"
        height="398"
      />
    );
  }

  return (
    <span className={[styles.lockup, styles[tone], className].filter(Boolean).join(' ')}>
      {company.logoMark?.src && (
        <img src={company.logoMark.src} alt="" className={styles.mark} width="400" height="244" />
      )}
      <span className={styles.text}>
        <span className={styles.name}>{company.shortName || name}</span>
        <span className={styles.sub}>Manpower Agency</span>
      </span>
    </span>
  );
}
