import { Award } from 'lucide-react';
import { certifications } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Grid } from '../ui/Grid';
import { Figure } from '../ui/Figure';
import styles from './Certifications.module.css';

export function Certifications() {
  if (certifications.items.length === 0) return null;

  return (
    <Section id="certifications" tone="default">
      <SectionHeading
        eyebrow={certifications.eyebrow}
        heading={certifications.heading || 'Certifications & Accreditations'}
        intro={certifications.intro}
        align="center"
      />

      <Grid min="15rem">
        {certifications.items.map((item, index) => (
          <Reveal key={item.name} delay={index * 60} className={styles.wrap}>
            <article className={styles.card}>
              {item.image ? (
                <Figure
                  image={item.image}
                  ratio="portrait"
                  className={styles.media}
                  placeholder={`${item.name} certificate`}
                />
              ) : (
                <span className={styles.badge}>
                  <Award size={28} strokeWidth={1.5} aria-hidden="true" />
                </span>
              )}
              <h3 className={styles.name}>{item.name}</h3>
              {item.issuer && <p className={styles.issuer}>{item.issuer}</p>}
              {item.year && <p className={styles.year}>{item.year}</p>}
            </article>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
