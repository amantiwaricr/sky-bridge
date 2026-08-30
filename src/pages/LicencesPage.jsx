import { ShieldCheck } from 'lucide-react';
import { licencesPage } from '../data/pagesData';
import { PageHeader } from '../components/layout/PageHeader';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Prose } from '../components/ui/Prose';
import { Reveal } from '../components/ui/Reveal';
import { Grid } from '../components/ui/Grid';
import { Card } from '../components/ui/Card';
import { Certifications } from '../components/sections/Certifications';
import { CTA } from '../components/sections/CTA';
import styles from './Page.module.css';

export function LicencesPage() {
  return (
    <>
      <PageHeader title={licencesPage.title} lead={licencesPage.lead} />

      {/* Reuses the certificates gallery so the scans appear identically here
          and on the home page. */}
      <Certifications />

      <Section tone="default">
        <SectionHeading
          eyebrow="What each one is"
          heading="The registrations explained"
          as="h2"
        />
        <Grid min="19rem">
          {licencesPage.explainers.map((item, index) => (
            <Reveal key={item.heading} delay={index * 60}>
              <Card className={styles.explainer}>
                <h3 className={styles.explainerTitle}>{item.heading}</h3>
                <p className={styles.explainerBody}>{item.body}</p>
                {item.detail && <p className={styles.explainerDetail}>{item.detail}</p>}
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      <Section tone="subtle">
        <div className={styles.twoUp}>
          <Reveal>
            <div className={styles.conditions}>
              <h2 className={styles.conditionsTitle}>
                <ShieldCheck size={22} strokeWidth={1.7} aria-hidden="true" />
                {licencesPage.conditions.heading}
              </h2>
              <p className={styles.conditionsIntro}>{licencesPage.conditions.intro}</p>
              <ol className={styles.conditionsList}>
                {licencesPage.conditions.items.map((item) => (
                  <li key={item} className={styles.conditionsItem}>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Prose
              heading={licencesPage.dueDiligence.heading}
              paragraphs={licencesPage.dueDiligence.paragraphs}
            />
          </Reveal>
        </div>
      </Section>

      <CTA />
    </>
  );
}
