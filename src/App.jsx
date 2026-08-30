import { Route, Routes } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { PurposePage } from './pages/PurposePage';
import { JobsPage } from './pages/JobsPage';
import { ProcessPage } from './pages/ProcessPage';
import { TeamPage } from './pages/TeamPage';
import { ClientsPage } from './pages/ClientsPage';
import { LicencesPage } from './pages/LicencesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ROUTES } from './data/pagesData';
import { usePageMeta } from './hooks/useDocumentMeta';

export default function App() {
  // Keeps <title>, description and Open Graph tags in step with the route.
  usePageMeta();

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.purpose} element={<PurposePage />} />
        <Route path={ROUTES.jobs} element={<JobsPage />} />
        <Route path={ROUTES.process} element={<ProcessPage />} />
        <Route path={ROUTES.team} element={<TeamPage />} />
        <Route path={ROUTES.clients} element={<ClientsPage />} />
        <Route path={ROUTES.licences} element={<LicencesPage />} />
        <Route path={ROUTES.contact} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
