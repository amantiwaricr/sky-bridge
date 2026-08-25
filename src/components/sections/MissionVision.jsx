import { Compass, Gem, Target } from 'lucide-react';
import { missionVision } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Card } from '../ui/Card';
import { Grid } from '../ui/Grid';
import styles from './MissionVision.module.css';

export function MissionVision() {
  const { mission, vision, values } = missionVision;
  if (!mission && !vision && values.length === 0) return null;

  const pillars = [
    mission && { key: 'mission', title: 'Our Mission', body: mission, Glyph: Target },
    vision && { key: 'vision', title: 'Our Vision', body: vision, Glyph: Compass },
  ].filter(Boolean);

  return (
    <Section id="mission" tone="subtle">
      <SectionHeading heading="Purpose & Principles" align="center" />

      {pillars.length > 0 && (
        <div className={styles.pillars} data-count={pillars.length}>
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.key} delay={index * 80}>
              <Card className={styles.pillar}>
                <pillar.Glyph size={26} strokeWidth={1.6} aria-hidden="true" className={styles.pillarIcon} />
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarBody}>{pillar.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      )}

      {values.length > 0 && (
        <div className={styles.values}>
          <h3 className={styles.valuesHeading}>
            <Gem size={20} strokeWidth={1.6} aria-hidden="true" />
            Core Values
          </h3>
          <Grid min="15rem">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 60}>
                <div className={styles.value}>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  {value.description && (
                    <p className={styles.valueBody}>{value.description}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </Grid>
        </div>
      )}
    </Section>
  );
}
