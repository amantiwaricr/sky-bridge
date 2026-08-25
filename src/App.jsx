import { useMemo } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Home } from './pages/Home';
import { getAvailableSections } from './data/sectionRegistry';
import { useDocumentMeta } from './hooks/useDocumentMeta';
import { useHashScroll } from './hooks/useHashScroll';

export default function App() {
  useDocumentMeta();
  useHashScroll();

  // Derived from static data, so this is computed once.
  const availableSections = useMemo(() => getAvailableSections(), []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar availableSections={availableSections} />
      <main id="main">
        <Home />
      </main>
      <Footer availableSections={availableSections} />
      <ScrollToTop />
    </>
  );
}
