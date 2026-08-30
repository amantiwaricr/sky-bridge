import { about, company, contact } from '../data/companyData';
import { aboutPage } from '../data/pagesData';
import { PageHeader } from '../components/layout/PageHeader';
import { Section } from '../components/ui/Section';
import { Prose } from '../components/ui/Prose';
import { Reveal } from '../components/ui/Reveal';
import { Figure } from '../components/ui/Figure';
import { CTA } from '../components/sections/CTA';
import styles from './Page.module.css';

/** The company profile table, exactly as printed in the profile document. */
function ProfileTable() {
  const rows = [
    ['Company name', company.name],
    ['Government licence no.', company.licenceNumber],
    ['Company registration no.', company.registrationNumber],
    ['Type of service', company.serviceType],
    ['Established', company.founded],
    ['Address', contact.offices[0]?.address.join(', ')],
    ['Telephone', contact.phones[0]],
    ['Email', contact.emails[0]],
    ['Website', company.website?.replace(/^https?:\/\//, '')],
  ].filter(([, value]) => Boolean(value));

  return (
    <dl className={styles.specTable}>
      {rows.map(([label, value]) => (
        <div key={label} className={styles.specRow}>
          <dt className={styles.specLabel}>{label}</dt>
          <dd className={styles.specValue}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHeader title={aboutPage.title} lead={aboutPage.lead} />

      <Section tone="default">
        <div className={styles.split}>
          <Reveal className={styles.splitBody}>
            {aboutPage.sections.map((section) => (
              <Prose
                key={section.heading}
                heading={section.heading}
                paragraphs={section.paragraphs}
                highlights={section.highlights ?? []}
              />
            ))}
          </Reveal>

          <Reveal className={styles.splitAside} delay={80}>
            <Figure
              image={about.image}
              ratio="wide"
              placeholder="Company photograph"
              className={styles.asideFigure}
            />
            <h2 className={styles.asideHeading}>Company profile</h2>
            <ProfileTable />
          </Reveal>
        </div>
      </Section>

      <CTA />
    </>
  );
}
