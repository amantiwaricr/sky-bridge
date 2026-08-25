import { useState } from 'react';
import { company, hero, stats } from '../../data/companyData';
import { getMissingSections } from '../../data/sectionRegistry';
import { Container } from '../ui/Container';
import styles from './ContentChecklist.module.css';

/**
 * DEVELOPMENT ONLY -- tree-shaken out of production builds by the
 * `import.meta.env.DEV` guard in Home.jsx.
 *
 * Lists what still needs to come out of the company profile PDF. Delete this
 * component (and its render in Home.jsx) once companyData.js is fully
 * populated.
 */
export function ContentChecklist() {
  const [open, setOpen] = useState(true);

  const coreGaps = [
    !company.name && 'Company name',
    !company.tagline && 'Tagline',
    !company.logo && 'Logo asset',
    !hero.headline && 'Hero headline',
    !hero.image && 'Hero image',
    stats.length === 0 && 'Company statistics',
  ].filter(Boolean);

  const missingSections = getMissingSections();

  if (coreGaps.length === 0 && missingSections.length === 0) return null;

  return (
    <aside className={styles.panel} aria-label="Content status (development only)">
      <Container>
        <div className={styles.head}>
          <h2 className={styles.title}>Awaiting content from the company profile PDF</h2>
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
          >
            {open ? 'Hide' : 'Show'}
          </button>
        </div>

        {open && (
          <div className={styles.body}>
            <p className={styles.note}>
              This panel renders in development only. Fill in{' '}
              <code>src/data/companyData.js</code> and each section below appears
              automatically — no component changes needed.
            </p>

            <div className={styles.columns}>
              {coreGaps.length > 0 && (
                <div>
                  <h3 className={styles.subTitle}>Core identity</h3>
                  <ul className={styles.list}>
                    {coreGaps.map((gap) => (
                      <li key={gap}>{gap}</li>
                    ))}
                  </ul>
                </div>
              )}

              {missingSections.length > 0 && (
                <div>
                  <h3 className={styles.subTitle}>Sections not yet rendering</h3>
                  <ul className={styles.list}>
                    {missingSections.map((section) => (
                      <li key={section.id}>{section.label}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </aside>
  );
}
