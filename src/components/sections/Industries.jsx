import { industries } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Grid } from '../ui/Grid';
import { Icon } from '../ui/Icon';
import styles from './Industries.module.css';

export function Industries() {
  if (industries.items.length === 0) return null;

  return (
    <Section id="industries" tone="default">
      <SectionHeading
        eyebrow={industries.eyebrow}
        heading={industries.heading || 'Industries We Serve'}
        intro={industries.intro}
      />

      <Grid min="14rem" gap="var(--space-4)">
        {industries.items.map((industry, index) => (
          <Reveal key={industry.name} delay={index * 50} className={styles.wrap}>
            <div className={styles.panel}>
              <span className={styles.icon}>
                <Icon name={industry.icon} size={26} />
              </span>
              <h3 className={styles.name}>{industry.name}</h3>
              {industry.description && (
                <p className={styles.body}>{industry.description}</p>
              )}
            </div>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
