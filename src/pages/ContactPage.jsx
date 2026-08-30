import { contactPage } from '../data/pagesData';
import { PageHeader } from '../components/layout/PageHeader';
import { Section } from '../components/ui/Section';
import { Prose } from '../components/ui/Prose';
import { Reveal } from '../components/ui/Reveal';
import { Grid } from '../components/ui/Grid';
import { Card } from '../components/ui/Card';
import { Icon } from '../components/ui/Icon';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Contact } from '../components/sections/Contact';
import styles from './Page.module.css';

export function ContactPage() {
  return (
    <>
      <PageHeader title={contactPage.title} lead={contactPage.lead} />

      <Section tone="default">
        <Grid min="20rem">
          {contactPage.audiences.map((audience, index) => (
            <Reveal key={audience.title} delay={index * 70}>
              <Card className={styles.audience}>
                <span className={styles.audienceIcon}>
                  <Icon name={audience.icon} size={22} />
                </span>
                <h2 className={styles.audienceTitle}>{audience.title}</h2>
                <p className={styles.audienceBody}>{audience.description}</p>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* Reuses the contact block: details, enquiry form and map. */}
      <Contact />

      <Section tone="default">
        <SectionHeading
          eyebrow="Next steps"
          heading={contactPage.whatHappensNext.heading}
          as="h2"
        />
        <ol className={styles.steps}>
          {contactPage.whatHappensNext.steps.map((step, index) => (
            <Reveal as="li" key={step.slice(0, 32)} className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className={styles.stepText}>{step}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="subtle">
        <div className={styles.twoUp}>
          <Reveal>
            <h2 className={styles.checklistTitle}>{contactPage.practical.heading}</h2>
            <dl className={styles.specTable}>
              {contactPage.practical.items.map((item) => (
                <div key={item.label} className={styles.specRow}>
                  <dt className={styles.specLabel}>{item.label}</dt>
                  <dd className={styles.specValue}>{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={80}>
            <Prose
              heading={contactPage.officeNote.heading}
              paragraphs={contactPage.officeNote.paragraphs}
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
