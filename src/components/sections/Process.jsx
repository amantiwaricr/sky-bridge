import { FileCheck } from 'lucide-react';
import { process } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import styles from './Process.module.css';

/**
 * The six-step deployment process, plus the paperwork the employer supplies.
 * Rendered as an ordered list so the sequence is conveyed to assistive tech,
 * not only by the visual numbering.
 */
export function Process() {
  if (process.steps.length === 0) return null;

  return (
    <Section id="process" tone="default">
      <SectionHeading
        eyebrow={process.eyebrow}
        heading={process.heading}
        intro={process.intro}
      />

      <ol className={styles.steps}>
        {process.steps.map((step, index) => (
          <Reveal as="li" key={step.title} delay={(index % 2) * 60} className={styles.step}>
            <span className={styles.number} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className={styles.stepBody}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      {process.documents.length > 0 && (
        <Reveal className={styles.docs}>
          <div className={styles.docsHead}>
            <FileCheck size={22} strokeWidth={1.7} aria-hidden="true" className={styles.docsIcon} />
            <h3 className={styles.docsTitle}>Documents required from the employer</h3>
          </div>
          {process.documentsIntro && <p className={styles.docsIntro}>{process.documentsIntro}</p>}

          <dl className={styles.docsList}>
            {process.documents.map((doc) => (
              <div key={doc.title} className={styles.doc}>
                <dt className={styles.docTitle}>{doc.title}</dt>
                <dd className={styles.docText}>{doc.description}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}
    </Section>
  );
}
