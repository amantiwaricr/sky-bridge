import { Quote } from 'lucide-react';
import { testimonials } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Grid } from '../ui/Grid';
import styles from './Testimonials.module.css';

/** Renders only when the PDF contains real, attributed testimonials. */
export function Testimonials() {
  if (testimonials.items.length === 0) return null;

  return (
    <Section id="testimonials" tone="default">
      <SectionHeading
        eyebrow={testimonials.eyebrow}
        heading={testimonials.heading || 'What Our Clients Say'}
        align="center"
      />

      <Grid min="19rem">
        {testimonials.items.map((item, index) => (
          <Reveal key={item.name} delay={index * 70} className={styles.wrap}>
            <figure className={styles.card}>
              <Quote size={26} aria-hidden="true" className={styles.mark} />
              <blockquote className={styles.quote}>
                <p>{item.quote}</p>
              </blockquote>
              <figcaption className={styles.person}>
                {item.photo?.src && (
                  <img
                    src={item.photo.src}
                    alt=""
                    className={styles.photo}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <span>
                  <span className={styles.name}>{item.name}</span>
                  {(item.role || item.organization) && (
                    <span className={styles.role}>
                      {[item.role, item.organization].filter(Boolean).join(', ')}
                    </span>
                  )}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
