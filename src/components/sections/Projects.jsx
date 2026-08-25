import { projects } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Grid } from '../ui/Grid';
import { Figure } from '../ui/Figure';
import styles from './Projects.module.css';

function ProjectCard({ project, delay, featured = false }) {
  const meta = [project.industry, project.location, project.year].filter(Boolean);

  return (
    <Reveal delay={delay} className={styles.wrap}>
      <article className={[styles.card, featured ? styles.featured : ''].join(' ')}>
        <Figure
          image={project.image}
          ratio={featured ? 'wide' : 'wide'}
          className={styles.media}
          placeholder={`${project.name} — project image from the PDF`}
        />
        <div className={styles.body}>
          {meta.length > 0 && (
            <p className={styles.meta}>
              {meta.map((entry, index) => (
                <span key={entry}>
                  {index > 0 && <span className={styles.dot} aria-hidden="true" />}
                  {entry}
                </span>
              ))}
            </p>
          )}
          <h3 className={styles.name}>{project.name}</h3>
          {project.description && <p className={styles.desc}>{project.description}</p>}
        </div>
      </article>
    </Reveal>
  );
}

/** Leads with a featured project when there are enough to justify the emphasis. */
export function Projects() {
  const { items } = projects;
  if (items.length === 0) return null;

  const useFeatured = items.length >= 3;
  const [lead, ...rest] = items;

  return (
    <Section id="projects" tone="subtle">
      <SectionHeading
        eyebrow={projects.eyebrow}
        heading={projects.heading || 'Selected Projects'}
        intro={projects.intro}
      />

      {useFeatured && <ProjectCard project={lead} featured />}

      <Grid min="18rem" className={useFeatured ? styles.restGrid : ''}>
        {(useFeatured ? rest : items).map((project, index) => (
          <ProjectCard key={project.name} project={project} delay={index * 60} />
        ))}
      </Grid>
    </Section>
  );
}
