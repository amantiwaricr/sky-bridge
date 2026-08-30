import { Check, FileCheck } from 'lucide-react';
import { process } from '../data/companyData';
import { processPage } from '../data/pagesData';
import { PageHeader } from '../components/layout/PageHeader';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Prose } from '../components/ui/Prose';
import { Reveal } from '../components/ui/Reveal';
import { Grid } from '../components/ui/Grid';
import { Card } from '../components/ui/Card';
import { CTA } from '../components/sections/CTA';
import styles from './Page.module.css';

export function ProcessPage() {
  return (
    <>
      <PageHeader title={processPage.title} lead={processPage.lead} />

      <Section tone="default">
        <ol className={styles.steps}>
          {process.steps.map((step, index) => (
            <Reveal as="li" key={step.title} className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className={styles.stepTitle}>{step.title}</h2>
                <p className={styles.stepText}>{step.description}</p>
                {processPage.stepNotes[index] && (
                  <p className={styles.stepNote}>{processPage.stepNotes[index]}</p>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="subtle">
        <div className={styles.twoUp}>
          <Reveal>
            <Prose
              heading={processPage.approvals.heading}
              paragraphs={processPage.approvals.paragraphs}
            />
          </Reveal>
          <Reveal delay={80}>
            <Prose heading={processPage.timing.heading} paragraphs={processPage.timing.paragraphs} />
          </Reveal>
        </div>
      </Section>

      {process.documents.length > 0 && (
        <Section tone="default">
          <SectionHeading
            eyebrow="Paperwork"
            heading="Documents required from the employer"
            as="h2"
            intro={process.documentsIntro}
          />
          <Grid min="18rem">
            {process.documents.map((doc, index) => (
              <Reveal key={doc.title} delay={index * 60}>
                <Card className={styles.doc}>
                  <FileCheck size={20} strokeWidth={1.7} aria-hidden="true" className={styles.docIcon} />
                  <h3 className={styles.docTitle}>{doc.title}</h3>
                  <p className={styles.docText}>{doc.description}</p>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>
      )}

      <Section tone="subtle">
        <Reveal className={styles.checklist}>
          <h2 className={styles.checklistTitle}>{processPage.employerChecklist.heading}</h2>
          <ul className={styles.checklistItems}>
            {processPage.employerChecklist.items.map((item) => (
              <li key={item} className={styles.checklistItem}>
                <Check size={17} aria-hidden="true" className={styles.checklistIcon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <CTA />
    </>
  );
}
