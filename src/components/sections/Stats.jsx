import { stats } from '../../data/companyData';
import { useReveal } from '../../hooks/useReveal';
import { useCountUp } from '../../hooks/useCountUp';
import { Container } from '../ui/Container';
import styles from './Stats.module.css';

function Stat({ value, suffix = '', label, format, delay }) {
  const [ref, visible] = useReveal();
  // A year is a label, not a quantity: counting up to it reads as nonsense and
  // a thousands separator would render 2017 as "2,017".
  const isPlain = format === 'plain';
  const count = useCountUp(value, visible && !isPlain);
  const shown = isPlain ? String(value) : count.toLocaleString();
  const full = isPlain ? String(value) : value.toLocaleString();

  return (
    <li
      ref={ref}
      className={[styles.item, visible ? styles.visible : ''].join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {/* The animated number is hidden from AT; the full value is announced once. */}
      <span className={styles.value} aria-hidden="true">
        {shown}
        {suffix}
      </span>
      <span className="visually-hidden">
        {full}
        {suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </li>
  );
}

export function Stats() {
  if (stats.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="stats-heading">
      <Container>
        <h2 id="stats-heading" className="visually-hidden">
          Company at a glance
        </h2>
        <ul className={styles.list}>
          {stats.map((stat, index) => (
            <Stat key={stat.label} {...stat} delay={index * 70} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
