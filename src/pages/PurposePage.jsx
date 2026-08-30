import { Compass, Gem, Target } from 'lucide-react';
import { missionVision } from '../data/companyData';
import { purposePage } from '../data/pagesData';
import { PageHeader } from '../components/layout/PageHeader';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Prose } from '../components/ui/Prose';
import { Reveal } from '../components/ui/Reveal';
import { Card } from '../components/ui/Card';
import { Grid } from '../components/ui/Grid';
import { CTA } from '../components/sections/CTA';
import styles from './Page.module.css';

export function PurposePage() {
  const pillars = [
    missionVision.mission && { key: 'mission', title: 'Our Mission', body: missionVision.mission, Glyph: Target },
    missionVision.vision && { key: 'vision', title: 'Our Vision', body: missionVision.vision, Glyph: Compass },
  ].filter(Boolean);

  return (
    <>
      <PageHeader title={purposePage.title} lead={purposePage.lead} />

      <Section tone="default">
        {purposePage.sections.map((section) => (
          <Prose key={section.heading} heading={section.heading} paragraphs={section.paragraphs} />
        ))}
      </Section>

      {pillars.length > 0 && (
        <Section tone="subtle">
          <div className={styles.pillars}>
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.key} delay={index * 80}>
                <Card className={styles.pillar}>
                  <pillar.Glyph size={26} strokeWidth={1.6} aria-hidden="true" className={styles.pillarIcon} />
                  <h2 className={styles.pillarTitle}>{pillar.title}</h2>
                  <p className={styles.pillarBody}>{pillar.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {missionVision.values.length > 0 && (
        <Section tone="default">
          <SectionHeading
            eyebrow="What we stand for"
            heading="Our values"
            as="h2"
            intro="Quoted from the company profile."
          />
          <Grid min="17rem">
            {missionVision.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 60}>
                <div className={styles.value}>
                  <span className={styles.valueMark} aria-hidden="true">
                    <Gem size={18} strokeWidth={1.7} />
                  </span>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueBody}>{value.description}</p>
                </div>
              </Reveal>
            ))}
          </Grid>
        </Section>
      )}

      {purposePage.commitments.length > 0 && (
        <Section tone="subtle">
          <SectionHeading
            eyebrow="In practice"
            heading="What that asks of us"
            as="h2"
          />
          <Grid min="18rem">
            {purposePage.commitments.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <Card className={styles.commitment}>
                  <h3 className={styles.commitmentTitle}>{item.title}</h3>
                  <p className={styles.commitmentBody}>{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>
      )}

      <CTA />
    </>
  );
}
