import { Check } from 'lucide-react';
import { about, primaryCta } from '../../data/companyData';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { Figure } from '../ui/Figure';
import styles from './About.module.css';

export function About() {
  const hasContent = about.heading || about.body.length > 0;
  if (!hasContent) return null;

  return (
    <Section id="about" tone="default">
      <div className={styles.layout}>
        <Reveal className={styles.mediaCol}>
          <Figure
            image={about.image}
            ratio="portrait"
            placeholder="About image — a facility, team or project photo from the PDF"
          />
        </Reveal>

        <Reveal className={styles.textCol} delay={80}>
          {about.eyebrow && <p className={styles.eyebrow}>{about.eyebrow}</p>}
          {about.heading && <h2 className={styles.heading}>{about.heading}</h2>}

          {about.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}

          {about.points.length > 0 && (
            <ul className={styles.points}>
              {about.points.map((point) => (
                <li key={point} className={styles.point}>
                  <Check size={18} aria-hidden="true" className={styles.pointIcon} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          {primaryCta.label && (
            <Button href={primaryCta.href} className={styles.cta}>
              {primaryCta.label}
            </Button>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
