import { partners } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import styles from './Partners.module.css';

/**
 * Logo wall. Logos are contained rather than cropped so none are distorted,
 * and names render as text when a logo image is not available.
 */
export function Partners() {
  if (partners.items.length === 0) return null;

  return (
    <Section id="partners" tone="subtle">
      <SectionHeading
        eyebrow={partners.eyebrow}
        heading={partners.heading || 'Clients & Partners'}
        align="center"
      />

      <ul className={styles.list}>
        {partners.items.map((partner, index) => {
          const content = partner.logo?.src ? (
            <img
              src={partner.logo.src}
              alt={partner.logo.alt || partner.name}
              className={styles.logo}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className={styles.name}>{partner.name}</span>
          );

          return (
            <Reveal as="li" key={partner.name} delay={index * 40} className={styles.item}>
              {partner.url ? (
                <a
                  href={partner.url}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                  <span className="visually-hidden">{partner.name}</span>
                </a>
              ) : (
                content
              )}
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
