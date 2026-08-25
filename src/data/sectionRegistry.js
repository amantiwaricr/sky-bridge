import {
  about, aboutNepal, certifications, contact, leadership, missionVision,
  partners, process, services,
} from './companyData';

/**
 * Which sections have enough content to render.
 *
 * The navbar and footer read this so they never link to a section that is not
 * on the page. Each predicate must match the `return null` guard in its
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
  { id: 'services', label: 'Job Categories', has: () => services.items.length > 0 },
  { id: 'process', label: 'Recruitment Process', has: () => process.steps.length > 0 },
  { id: 'leadership', label: 'Leadership', has: () => leadership.people.length > 0 },
  { id: 'partners', label: 'Clients', has: () => partners.items.length > 0 },
  {
    id: 'certifications',
    label: 'Licences & Certificates',
    has: () => certifications.items.length > 0,
  },
  { id: 'nepal', label: 'About Nepal', has: () => aboutNepal.body.length > 0 },
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

/** Sections still waiting on content, for the dev checklist. */
export function getMissingSections() {
  return SECTION_REGISTRY.filter((section) => !section.has());
}
