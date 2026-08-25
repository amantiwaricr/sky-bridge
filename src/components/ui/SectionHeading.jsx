import { Reveal } from './Reveal';
import styles from './SectionHeading.module.css';

/**
 * Standard section header: optional eyebrow, a heading, optional intro.
 * `as` lets a nested section drop to h3 to keep the heading order valid.
 */
export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = 'left',
  tone = 'default',
  as: Tag = 'h2',
  id,
}) {
  if (!heading) return null;

  return (
    <Reveal className={[styles.wrap, styles[align], styles[tone]].join(' ')}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Tag id={id} className={styles.heading}>
        {heading}
      </Tag>
      {intro && <p className={styles.intro}>{intro}</p>}
    </Reveal>
  );
}
