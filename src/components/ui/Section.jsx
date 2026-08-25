import { Container } from './Container';
import styles from './Section.module.css';

/**
 * A page section with consistent vertical rhythm.
 * `tone` alternates the background so adjacent sections stay differentiated.
 */
export function Section({ id, tone = 'default', className = '', narrow, children }) {
  const classes = [styles.section, styles[tone], className].filter(Boolean).join(' ');
  return (
    <section id={id} className={classes}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}
