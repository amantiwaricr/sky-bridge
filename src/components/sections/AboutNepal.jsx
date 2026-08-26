import { aboutNepal } from '../../data/companyData';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import styles from './AboutNepal.module.css';

/**
 * Country context for employers considering Nepali workers.
 *
 * Text-only by design: the prose sets the scene and the facts table carries
 * the details an overseas employer actually needs to hand -- not least the
 * time zone, when arranging interviews across borders.
 */
export function AboutNepal() {
  if (aboutNepal.body.length === 0) return null;

  return (
    <Section id="nepal" tone="default">
      <Reveal className={styles.intro}>
        {aboutNepal.eyebrow && <p className={styles.eyebrow}>{aboutNepal.eyebrow}</p>}
        <h2 className={styles.heading}>{aboutNepal.heading}</h2>
        {aboutNepal.lead && <p className={styles.lead}>{aboutNepal.lead}</p>}
      </Reveal>

      <Reveal className={styles.prose} delay={60}>
        {aboutNepal.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </Reveal>

      {aboutNepal.facts.length > 0 && (
        <Reveal delay={120}>
          <h3 className={styles.factsHeading}>At a glance</h3>
          <dl className={styles.facts}>
            {aboutNepal.facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt className={styles.factLabel}>{fact.label}</dt>
                <dd className={styles.factValue}>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}
    </Section>
  );
}
