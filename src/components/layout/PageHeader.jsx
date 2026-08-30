import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import styles from './PageHeader.module.css';

/**
 * Banner at the top of every inner page: breadcrumb, title and lead line.
 * Uses the same blue-to-cyan band as the section headers in the company
 * profile document, so the pages sit visually with the rest of the site.
 */
export function PageHeader({ title, lead, eyebrow }) {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link to="/" className={styles.crumbLink}>
            Home
          </Link>
          <ChevronRight size={14} aria-hidden="true" className={styles.crumbIcon} />
          <span aria-current="page">{title}</span>
        </nav>

        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
      </Container>
    </header>
  );
}
