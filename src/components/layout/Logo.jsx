import { company } from '../../data/companyData';
import styles from './Logo.module.css';

/**
 * Company mark. Uses the real logo once it is extracted from the PDF and
 * imported in companyData.js; until then it shows the company name as a
 * wordmark, or a clearly-marked placeholder if the name is not set either.
 */
export function Logo({ tone = 'default', className = '' }) {
  const name = company.name || 'Company name — set in companyData.js';
  const classes = [styles.logo, styles[tone], className].filter(Boolean).join(' ');

  if (company.logo?.src) {
    return (
      <img
        src={company.logo.src}
        alt={company.logo.alt || `${name} logo`}
        className={[styles.image, className].filter(Boolean).join(' ')}
      />
    );
  }

  return <span className={classes}>{company.shortName || name}</span>;
}
