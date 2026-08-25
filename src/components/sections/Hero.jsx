import { ArrowRight } from 'lucide-react';
import { company, hero, primaryCta } from '../../data/companyData';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Figure } from '../ui/Figure';
import styles from './Hero.module.css';

export function Hero() {
  const headline = hero.headline || company.tagline;
  if (!headline) return null;

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-heading">
      {/* Decorative background wash; kept subtle and out of the a11y tree. */}
      <div className={styles.backdrop} aria-hidden="true" />

      <Container className={styles.inner}>
        <div className={styles.content}>
          {hero.eyebrow && <p className={styles.eyebrow}>{hero.eyebrow}</p>}

          <h1 id="hero-heading" className={styles.headline}>
            {headline}
          </h1>

          {hero.subheadline && <p className={styles.sub}>{hero.subheadline}</p>}

          {(primaryCta.label || hero.secondaryCta) && (
            <div className={styles.actions}>
              {primaryCta.label && (
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
              )}
              {hero.secondaryCta?.label && (
                <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
                  {hero.secondaryCta.label}
                </Button>
              )}
            </div>
          )}

          {hero.highlights.length > 0 && (
            <ul className={styles.highlights}>
              {hero.highlights.map((item) => (
                <li key={item} className={styles.highlight}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.media}>
          <Figure
            image={hero.image}
            eager
            ratio="portrait"
            placeholder="Hero image — extract the strongest visual from the profile PDF"
            className={styles.figure}
          />
        </div>
      </Container>
    </section>
  );
}
