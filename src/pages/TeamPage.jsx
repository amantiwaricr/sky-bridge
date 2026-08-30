import { leadership } from '../data/companyData';
import { teamFunctions, teamPage } from '../data/pagesData';
import { PageHeader } from '../components/layout/PageHeader';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Prose } from '../components/ui/Prose';
import { Reveal } from '../components/ui/Reveal';
import { Grid } from '../components/ui/Grid';
import { Card } from '../components/ui/Card';
import { Icon } from '../components/ui/Icon';
import { Leadership } from '../components/sections/Leadership';
import { CTA } from '../components/sections/CTA';
import styles from './Page.module.css';

export function TeamPage() {
  return (
    <>
      <PageHeader title={teamPage.title} lead={teamPage.lead} />

      {/* The leadership section already renders the four signatories, their
          messages and the organisational chart, so it is reused whole. */}
      <Leadership />

      {leadership.structure.length > 0 && (
        <Section tone="default">
          <Reveal>
            <Prose
              heading={teamPage.structureNote.heading}
              paragraphs={teamPage.structureNote.paragraphs}
            />
          </Reveal>
        </Section>
      )}

      <Section tone="subtle">
        <SectionHeading
          eyebrow="Who does what"
          heading="The functions in the office"
          as="h2"
        />
        <Grid min="18rem">
          {teamFunctions.map((fn, index) => (
            <Reveal key={fn.name} delay={index * 55}>
              <Card className={styles.audience}>
                <span className={styles.audienceIcon}>
                  <Icon name={fn.icon} size={20} />
                </span>
                <h3 className={styles.audienceTitle}>{fn.name}</h3>
                <p className={styles.audienceBody}>{fn.description}</p>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      <CTA />
    </>
  );
}
