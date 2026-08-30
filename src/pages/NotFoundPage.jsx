import { Link } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { PAGES } from '../data/pagesData';
import styles from './Page.module.css';

export function NotFoundPage() {
  return (
    <>
      <PageHeader
        title="Page not found"
        lead="The page you asked for does not exist. It may have moved, or the address may be mistyped."
      />

      <Section tone="default" narrow>
        <p className={styles.notFoundText}>Try one of these instead:</p>
        <ul className={styles.notFoundLinks}>
          {PAGES.map((page) => (
            <li key={page.route}>
              <Link to={page.route} className={styles.notFoundLink}>
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button href="/" className={styles.notFoundCta}>
          Back to home
        </Button>
      </Section>
    </>
  );
}
