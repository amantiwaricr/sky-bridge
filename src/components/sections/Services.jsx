import { services } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';
import { Figure } from '../ui/Figure';
import styles from './Services.module.css';

/**
 * The job categories the agency recruits for. Each card carries the roles
 * listed under that category in the company profile, so an employer can see at
 * a glance whether the trade they need is covered.
 */
function CategoryCard({ category, delay }) {
  const headingId = `category-${category.title.toLowerCase().replace(/[^a-z]+/g, '-')}`;

  return (
    <Reveal delay={delay} className={styles.cardWrap}>
      <article className={styles.card} aria-labelledby={headingId}>
        <Figure
          image={category.image}
          ratio="wide"
          className={styles.media}
          placeholder={category.title}
        />

        <div className={styles.body}>
          <div className={styles.head}>
            <span className={styles.iconWrap}>
              <Icon name={category.icon} size={20} />
            </span>
            <h3 id={headingId} className={styles.title}>
              {category.title}
            </h3>
          </div>

          <ul className={styles.roles}>
            {category.roles.map((role) => (
              <li key={role} className={styles.role}>
                {role}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

export function Services() {
  if (services.items.length === 0) return null;

  return (
    <Section id="services" tone="subtle">
      <SectionHeading
        eyebrow={services.eyebrow}
        heading={services.heading}
        intro={services.intro}
      />

      <div className={styles.grid}>
        {services.items.map((category, index) => (
          <CategoryCard key={category.title} category={category} delay={(index % 3) * 60} />
        ))}
      </div>
    </Section>
  );
}
