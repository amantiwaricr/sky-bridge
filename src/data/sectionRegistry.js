import {
  about, certifications, contact, industries, missionVision, partners,
  products, projects, services, testimonials, whyChooseUs,
} from './companyData';

/**
 * Which sections have enough PDF content to render.
 *
 * The navbar and footer read this so they never link to a section that is not
 * on the page, and the dev-only checklist reads it to report what is still
 * outstanding. Each predicate must match the `return null` guard in its
 * matching component.
 */
export const SECTION_REGISTRY = [
  {
    id: 'about',
    label: 'About',
    has: () => Boolean(about.heading || about.body.length),
  },
  {
    id: 'mission',
    label: 'Mission, Vision & Values',
    has: () =>
      Boolean(missionVision.mission || missionVision.vision || missionVision.values.length),
  },
  { id: 'services', label: 'Services', has: () => services.items.length > 0 },
  { id: 'products', label: 'Products', has: () => products.items.length > 0 },
  { id: 'industries', label: 'Industries', has: () => industries.items.length > 0 },
  { id: 'projects', label: 'Projects', has: () => projects.items.length > 0 },
  { id: 'why-us', label: 'Why Choose Us', has: () => whyChooseUs.items.length > 0 },
  {
    id: 'certifications',
    label: 'Certifications',
    has: () => certifications.items.length > 0,
  },
  { id: 'partners', label: 'Clients & Partners', has: () => partners.items.length > 0 },
  { id: 'testimonials', label: 'Testimonials', has: () => testimonials.items.length > 0 },
  {
    id: 'contact',
    label: 'Contact',
    has: () =>
      contact.offices.length > 0 ||
      contact.phones.length > 0 ||
      contact.emails.length > 0 ||
      Boolean(contact.heading),
  },
];

/** Ids of sections that will actually render, in page order. */
export function getAvailableSections() {
  return SECTION_REGISTRY.filter((section) => section.has()).map((section) => section.id);
}

/** Sections still waiting on PDF content, for the dev checklist. */
export function getMissingSections() {
  return SECTION_REGISTRY.filter((section) => !section.has());
}
