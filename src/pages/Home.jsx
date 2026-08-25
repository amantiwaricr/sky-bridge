import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { About } from '../components/sections/About';
import { MissionVision } from '../components/sections/MissionVision';
import { Services } from '../components/sections/Services';
import { Products } from '../components/sections/Products';
import { Industries } from '../components/sections/Industries';
import { Projects } from '../components/sections/Projects';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Certifications } from '../components/sections/Certifications';
import { Partners } from '../components/sections/Partners';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';
import { Contact } from '../components/sections/Contact';
import { ContentChecklist } from '../components/dev/ContentChecklist';

/**
 * Single-page layout. Every section returns null when companyData.js has no
 * content for it, so the running order stays fixed while the page adapts to
 * whatever the PDF actually provides.
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
      <Products />
      <Industries />
      <Projects />
      <WhyChooseUs />
      <Certifications />
      <Partners />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
