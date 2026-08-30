import { services } from '../data/companyData';
import { jobsPage } from '../data/pagesData';
import { PageHeader } from '../components/layout/PageHeader';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Grid } from '../components/ui/Grid';
import { Icon } from '../components/ui/Icon';
import { Figure } from '../components/ui/Figure';
import { CTA } from '../components/sections/CTA';
import styles from './Page.module.css';

/**
 * One category in full: the trade note, every role listed for it in the
 * company profile, and what an employer should specify when requesting it.
 */
function CategoryDetail({ category, note, index }) {
  const slug = category.title.toLowerCase().replace(/[^a-z]+/g, '-');

  return (
    <Reveal as="article" className={styles.category} data-flip={index % 2 === 1}>
      <div className={styles.categoryMedia}>
        <Figure image={category.image} ratio="wide" placeholder={category.title} />
      </div>

      <div className={styles.categoryBody}>
        <div className={styles.categoryHead}>
          <span className={styles.categoryIcon}>
            <Icon name={category.icon} size={20} />
          </span>
          <h2 id={slug} className={styles.categoryTitle}>
            {category.title}
          </h2>
        </div>

        {note?.about && <p className={styles.categoryAbout}>{note.about}</p>}

        <h3 className={styles.rolesHeading}>Roles recruited</h3>
        <ul className={styles.roles}>
          {category.roles.map((role) => (
            <li key={role} className={styles.role}>
              {role}
            </li>
          ))}
        </ul>

        {note?.specify && (
          <p className={styles.specify}>
            <span className={styles.specifyLabel}>Specify when requesting:</span> {note.specify}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export function JobsPage() {
  return (
    <>
      <PageHeader title={jobsPage.title} lead={jobsPage.lead} />

      <Section tone="subtle">
        <SectionHeading
          eyebrow="How roles are graded"
          heading="Skill levels"
          as="h2"
          intro="Every category is recruited at one or more of these three levels. Say which you need and the shortlist is screened against it."
        />
        <Grid min="17rem">
          {jobsPage.skillLevels.map((level, index) => (
            <Reveal key={level.title} delay={index * 60}>
              <div className={styles.level}>
                <h3 className={styles.levelTitle}>{level.title}</h3>
                <p className={styles.levelBody}>{level.description}</p>
              </div>
            </Reveal>
          ))}
        </Grid>
      </Section>

      <Section tone="default">
        <SectionHeading
          eyebrow="In detail"
          heading={`All ${services.items.length} categories`}
          as="h2"
        />
        <div className={styles.categories}>
          {services.items.map((category, index) => (
            <CategoryDetail
              key={category.title}
              category={category}
              note={jobsPage.notes[category.title]}
              index={index}
            />
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
