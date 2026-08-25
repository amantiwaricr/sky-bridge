import { stats } from '../../data/companyData';
import { useReveal } from '../../hooks/useReveal';
import { useCountUp } from '../../hooks/useCountUp';
import { Container } from '../ui/Container';
import styles from './Stats.module.css';

function Stat({ value, suffix = '', label, delay }) {
  const [ref, visible] = useReveal();
  const count = useCountUp(value, visible);

  return (
    <li
      ref={ref}
      className={[styles.item, visible ? styles.visible : ''].join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {/* The animated number is hidden from AT; the full value is announced once. */}
      <span className={styles.value} aria-hidden="true">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="visually-hidden">
        {value.toLocaleString()}
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
