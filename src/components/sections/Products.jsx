import { Check } from 'lucide-react';
import { products, primaryCta } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { Figure } from '../ui/Figure';
import styles from './Products.module.css';

/** Alternating media/text rows -- gives each product room without a card wall. */
export function Products() {
  if (products.items.length === 0) return null;

  return (
    <Section id="products" tone="subtle">
      <SectionHeading
        eyebrow={products.eyebrow}
        heading={products.heading || 'Our Products'}
        intro={products.intro}
      />

      <div className={styles.list}>
        {products.items.map((product, index) => (
          <Reveal key={product.name} className={styles.row} data-flip={index % 2 === 1}>
            <div className={styles.media}>
              <Figure
                image={product.image}
                ratio="wide"
                placeholder={`${product.name} — product image from the PDF`}
              />
            </div>

            <div className={styles.body}>
              <h3 className={styles.title}>{product.name}</h3>
              {product.description && (
                <p className={styles.description}>{product.description}</p>
              )}

              {product.features?.length > 0 && (
                <ul className={styles.features}>
                  {product.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <Check size={17} aria-hidden="true" className={styles.featureIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {product.specs?.length > 0 && (
                <dl className={styles.specs}>
                  {product.specs.map((spec) => (
                    <div key={spec.label} className={styles.spec}>
                      <dt className={styles.specLabel}>{spec.label}</dt>
                      <dd className={styles.specValue}>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {primaryCta.label && (
                <Button href={primaryCta.href} variant="secondary" className={styles.cta}>
                  {primaryCta.label}
                </Button>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
