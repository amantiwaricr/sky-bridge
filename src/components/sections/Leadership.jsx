import { leadership } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import styles from './Leadership.module.css';

/** "Ambika Tamang" -> "AT" */
function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/**
 * The four signatories of the company profile, each with a line drawn from
 * their own message, and the organisational structure chart beneath.
 * Where the profile carries no photograph, a neutral placeholder is used
 * rather than a substitute portrait.
 */
export function Leadership() {
  if (leadership.people.length === 0) return null;

  return (
    <Section id="leadership" tone="subtle">
      <SectionHeading
        eyebrow={leadership.eyebrow}
        heading={leadership.heading}
        intro={leadership.intro}
      />

      <div className={styles.grid}>
        {leadership.people.map((person, index) => (
          <Reveal key={person.name} delay={(index % 4) * 60} className={styles.cardWrap}>
            <figure className={styles.card}>
              {person.photo?.src ? (
                <img
                  src={person.photo.src}
                  alt={person.photo.alt}
                  className={styles.photo}
                  loading="lazy"
                  decoding="async"
                  width="480"
                  height="580"
                />
              ) : (
                /* The profile carries no photograph for this director, so
                   initials stand in rather than a substitute portrait. */
                <div className={styles.photoFallback} aria-hidden="true">
                  <span className={styles.initials}>{getInitials(person.name)}</span>
                </div>
              )}

              <figcaption className={styles.caption}>
                <h3 className={styles.name}>{person.name}</h3>
                <p className={styles.role}>{person.role}</p>
                {person.quote && <blockquote className={styles.quote}>{person.quote}</blockquote>}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {leadership.structure.length > 0 && (
        <Reveal className={styles.structure}>
          <h3 className={styles.structureTitle}>{leadership.structureHeading}</h3>
          <ol className={styles.tiers}>
            {leadership.structure.map((tier) => (
              <li key={tier.join('|')} className={styles.tier}>
                {tier.map((role) => (
                  <span key={role} className={styles.node}>
                    {role}
                  </span>
                ))}
              </li>
            ))}
          </ol>
        </Reveal>
      )}
    </Section>
  );
}
