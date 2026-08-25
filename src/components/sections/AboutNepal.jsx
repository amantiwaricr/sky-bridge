import { aboutNepal } from '../../data/companyData';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Figure } from '../ui/Figure';
import styles from './AboutNepal.module.css';

/** Country context for employers considering Nepali workers. */
export function AboutNepal() {
  if (aboutNepal.body.length === 0) return null;

  return (
    <Section id="nepal" tone="default">
      <div className={styles.layout}>
        <Reveal className={styles.text}>
          {aboutNepal.eyebrow && <p className={styles.eyebrow}>{aboutNepal.eyebrow}</p>}
          <h2 className={styles.heading}>{aboutNepal.heading}</h2>
          {aboutNepal.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className={styles.media} delay={80}>
          <Figure
            image={aboutNepal.image}
            ratio="auto"
            placeholder="Map of Nepal"
            className={styles.figure}
          />
        </Reveal>
      </div>
    </Section>
  );
}
