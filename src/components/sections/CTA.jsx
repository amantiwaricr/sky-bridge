import { ArrowRight } from 'lucide-react';
import { cta, primaryCta } from '../../data/companyData';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import styles from './CTA.module.css';

export function CTA() {
  if (!cta.heading) return null;
  const action = cta.action ?? primaryCta;

  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <Container narrow>
        <Reveal className={styles.inner}>
          <h2 id="cta-heading" className={styles.heading}>
            {cta.heading}
          </h2>
          {cta.body && <p className={styles.body}>{cta.body}</p>}
          {action.label && (
            <Button href={action.href} variant="accent" size="lg" className={styles.button}>
              {action.label}
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
