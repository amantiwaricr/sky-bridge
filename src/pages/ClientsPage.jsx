import { clientsPage } from '../data/pagesData';
import { PageHeader } from '../components/layout/PageHeader';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Prose } from '../components/ui/Prose';
import { Reveal } from '../components/ui/Reveal';
import { Grid } from '../components/ui/Grid';
import { Card } from '../components/ui/Card';
import { Icon } from '../components/ui/Icon';
import { Partners } from '../components/sections/Partners';
import { CTA } from '../components/sections/CTA';
import styles from './Page.module.css';

export function ClientsPage() {
  return (
    <>
      <PageHeader title={clientsPage.title} lead={clientsPage.lead} />

      {/* Reuses the logo wall so the marks are presented identically here and
          on the home page. */}
      <Partners />

      <Section tone="default">
        <SectionHeading
          eyebrow="By line of business"
          heading="The sectors represented"
          as="h2"
          intro="Read from the client names themselves. The profile does not record which roles went to which company, so nothing of that kind is claimed."
        />
        <Grid min="18rem">
          {clientsPage.sectors.map((sector, index) => (
            <Reveal key={sector.name} delay={index * 55}>
              <Card className={styles.audience}>
                <span className={styles.audienceIcon}>
                  <Icon name={sector.icon} size={20} />
                </span>
                <h3 className={styles.audienceTitle}>{sector.name}</h3>
                <p className={styles.audienceBody}>{sector.description}</p>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      <Section tone="subtle">
        <div className={styles.twoUp}>
          <Reveal>
            <Prose
              heading={clientsPage.sectorsNote.heading}
              paragraphs={clientsPage.sectorsNote.paragraphs}
            />
          </Reveal>
          <Reveal delay={80}>
            <Prose
              heading={clientsPage.workWithUs.heading}
              paragraphs={clientsPage.workWithUs.paragraphs}
            />
          </Reveal>
        </div>
      </Section>

      <CTA />
    </>
  );
}
