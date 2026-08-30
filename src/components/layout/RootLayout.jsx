import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { RouteScrollToTop } from './RouteScrollToTop';
import { NoticeModal } from '../ui/NoticeModal';

/** Chrome shared by every route: header, footer and the launch notice. */
export function RootLayout() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <RouteScrollToTop />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <NoticeModal />
    </>
  );
}
