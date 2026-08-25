import { useMemo } from 'react';
import { services } from '../../data/companyData';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Card } from '../ui/Card';
import { Grid } from '../ui/Grid';
import { Icon } from '../ui/Icon';
import { Figure } from '../ui/Figure';
import styles from './Services.module.css';

function ServiceCard({ service, delay }) {
  return (
    <Reveal delay={delay} className={styles.cardWrap}>
      <Card interactive className={styles.card}>
        {service.image && (
          <Figure
            image={service.image}
            ratio="wide"
            className={styles.cardImage}
            placeholder={`${service.title} image`}
          />
        )}
        <span className={styles.iconWrap}>
          <Icon name={service.icon} size={24} />
        </span>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardBody}>{service.description}</p>
      </Card>
    </Reveal>
  );
}

/**
 * Groups services under their `group` label when one is set, so a long list
 * reads as an organised catalogue instead of a wall of identical cards.
 */
export function Services() {
  const { items } = services;

  const groups = useMemo(() => {
    if (items.length === 0) return [];
    const map = new Map();
    items.forEach((item) => {
      const key = item.group ?? '';
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(item);
    });
    return [...map.entries()].map(([name, groupItems]) => ({ name, items: groupItems }));
  }, [items]);

  if (items.length === 0) return null;

  return (
    <Section id="services" tone="default">
      <SectionHeading
        eyebrow={services.eyebrow}
        heading={services.heading || 'What We Do'}
        intro={services.intro}
      />

      {groups.map((group) => (
        <div key={group.name || 'ungrouped'} className={styles.group}>
          {group.name && <h3 className={styles.groupTitle}>{group.name}</h3>}
          <Grid min="17rem">
            {group.items.map((service, index) => (
              <ServiceCard key={service.title} service={service} delay={index * 60} />
            ))}
          </Grid>
        </div>
      ))}
    </Section>
  );
}
