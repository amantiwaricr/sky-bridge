import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { About } from '../components/sections/About';
import { MissionVision } from '../components/sections/MissionVision';
import { Services } from '../components/sections/Services';
import { Process } from '../components/sections/Process';
import { Leadership } from '../components/sections/Leadership';
import { Partners } from '../components/sections/Partners';
import { Certifications } from '../components/sections/Certifications';
import { AboutNepal } from '../components/sections/AboutNepal';
import { CTA } from '../components/sections/CTA';
import { Contact } from '../components/sections/Contact';
import { ContentChecklist } from '../components/dev/ContentChecklist';

/**
 * Single-page layout. Every section returns null when companyData.js has no
 * content for it, so the running order stays fixed while the page adapts to
 * whatever the profile actually provides.
 */
export function Home() {
  return (
    <>
      {import.meta.env.DEV && <ContentChecklist />}
      <Hero />
      <Stats />
      <About />
      <MissionVision />
      <Services />
      <Process />
      <Leadership />
      <Partners />
      <Certifications />
      <AboutNepal />
      <CTA />
      <Contact />
    </>
  );
}
