import { whyChooseUs } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Grid } from '../ui/Grid';
import { Icon } from '../ui/Icon';
import styles from './WhyChooseUs.module.css';

export function WhyChooseUs() {
  if (whyChooseUs.items.length === 0) return null;

  return (
    <Section id="why-us" tone="inverse">
      <SectionHeading
        eyebrow={whyChooseUs.eyebrow}
        heading={whyChooseUs.heading || 'Why Choose Us'}
        intro={whyChooseUs.intro}
        tone="inverse"
        align="center"
      />

      <Grid min="16rem">
        {whyChooseUs.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 60} className={styles.wrap}>
            <div className={styles.item}>
              <span className={styles.icon}>
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.description}</p>
            </div>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
