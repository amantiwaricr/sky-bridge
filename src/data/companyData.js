/**
 * ============================================================================
 * SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ============================================================================
 *
 * Every value below must come from the company profile PDF. Nothing here is
 * invented. Fields are intentionally left empty until the PDF is supplied.
 *
 * HOW SECTIONS BEHAVE
 *   Each section component reads its slice of this object and renders `null`
 *   when that slice is empty. So the site grows as you fill this file in --
 *   you never need to touch a component to add or remove a section.
 *
 * HOW TO POPULATE
 *   1. Fill in the strings/arrays below from the PDF.
 *   2. Drop extracted images into src/assets/<category>/ and import them at
 *      the top of this file, then reference the import (not a string path).
 *   3. Set brand colours + fonts in src/styles/tokens.css.
 *   See CONTENT-GUIDE.md for the full checklist.
 *
 * RULES
 *   - Never fabricate stats, clients, certifications, testimonials or quotes.
 *   - If the PDF does not state something, leave it empty. The UI adapts.
 * ============================================================================
 */

// --- Image imports -----------------------------------------------------------
// Uncomment and point at real files once assets are extracted from the PDF.
// import logo from '../assets/logo/logo.svg';
// import heroImage from '../assets/hero/hero.jpg';
// import aboutImage from '../assets/about/about.jpg';

/** @typedef {{ src: string, alt: string }} Img */

export const company = {
  /** Legal or trading name exactly as written in the PDF. */
  name: '',
  /** Short name for the navbar, if the full name is long. Falls back to `name`. */
  shortName: '',
  /** One-line positioning statement from the PDF cover / header. */
  tagline: '',
  /** Logo image. Set `src` to an imported asset. */
  logo: null, // e.g. { src: logo, alt: 'Sky Bridge logo' }
  /** Year founded, as a string, only if stated in the PDF. */
  founded: '',
  /** Public website URL from the PDF. */
  website: '',
};

/** Browser tab title, meta description and Open Graph data. */
export const seo = {
  title: '',
  description: '',
  /** Absolute URL of the deployed site, used for canonical + og:url. */
  siteUrl: '',
  /** Social share image (1200x630). Import from assets and reference here. */
  ogImage: null,
};

/**
 * Navigation. Each `id` must match a section element's id on the page.
 * Remove entries whose sections have no PDF content.
 */
export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
  { id: 'industries', label: 'Industries' },
  { id: 'projects', label: 'Projects' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'contact', label: 'Contact' },
];

/** The primary button shown in the navbar and hero. */
export const primaryCta = {
  label: '',   // e.g. the PDF's own call to action
  href: '#contact',
};

export const hero = {
  /** Short eyebrow above the headline. Optional. */
  eyebrow: '',
  /** The headline. Prefer the PDF's own positioning language over marketing copy. */
  headline: '',
  /** 1-2 sentences of support. Trim the PDF's prose -- do not paste paragraphs. */
  subheadline: '',
  /** @type {Img|null} */
  image: null,
  /** Optional secondary action, e.g. { label: 'Our Services', href: '#services' }. */
  secondaryCta: null,
  /** Up to 4 short proof points shown beneath the CTAs. Strings only. */
  highlights: [],
};

export const about = {
  eyebrow: '',
  heading: '',
  /** Array of paragraphs. Keep each to 2-3 sentences. */
  body: [],
  /** Short bullet highlights pulled from the About pages. */
  points: [],
  /** @type {Img|null} */
  image: null,
};

/**
 * Numeric achievements. ONLY real figures printed in the PDF.
 * `value` is the number; `suffix` renders after it (e.g. '+', '%', 'k').
 */
export const stats = [
  // { value: 0, suffix: '+', label: '' },
];

/** Mission / Vision / Values. Omit any block the PDF does not contain. */
export const missionVision = {
  mission: '',
  vision: '',
  /** @type {{ title: string, description: string }[]} */
  values: [],
};

/**
 * Services. `icon` is a lucide-react icon name (see ICONS in src/components/ui/Icon.jsx).
 * `group` is optional -- set it on every service to render them in labelled groups.
 */
export const services = {
  eyebrow: '',
  heading: '',
  intro: '',
  /** @type {{ title: string, description: string, icon: string, group?: string, image?: Img }[]} */
  items: [],
};

export const products = {
  eyebrow: '',
  heading: '',
  intro: '',
  /** @type {{ name: string, description: string, features: string[], specs?: {label:string,value:string}[], image?: Img }[]} */
  items: [],
};

export const industries = {
  eyebrow: '',
  heading: '',
  intro: '',
  /** @type {{ name: string, description?: string, icon: string }[]} */
  items: [],
};

export const projects = {
  eyebrow: '',
  heading: '',
  intro: '',
  /** @type {{ name: string, description: string, industry?: string, location?: string, year?: string, image?: Img }[]} */
  items: [],
};

export const whyChooseUs = {
  eyebrow: '',
  heading: '',
  intro: '',
  /** @type {{ title: string, description: string, icon: string }[]} */
  items: [],
};

export const certifications = {
  eyebrow: '',
  heading: '',
  intro: '',
  /** @type {{ name: string, issuer?: string, year?: string, image?: Img }[]} */
  items: [],
};

/** Client and partner logos extracted from the PDF. Never invent these. */
export const partners = {
  eyebrow: '',
  heading: '',
  /** @type {{ name: string, logo?: Img, url?: string }[]} */
  items: [],
};

/** Only populate if the PDF contains real, attributed testimonials. */
export const testimonials = {
  eyebrow: '',
  heading: '',
  /** @type {{ quote: string, name: string, role?: string, organization?: string, photo?: Img }[]} */
  items: [],
};

export const cta = {
  heading: '',
  body: '',
  /** Defaults to `primaryCta` when left null. */
  action: null,
};

export const contact = {
  eyebrow: '',
  heading: '',
  intro: '',
  /** @type {string[]} Phone numbers exactly as printed in the PDF. */
  phones: [],
  /** @type {string[]} Email addresses exactly as printed in the PDF. */
  emails: [],
  /**
   * Office locations. `mapQuery` is the address string handed to the map embed;
   * leave `mapQuery` empty to render the map placeholder instead.
   * @type {{ label: string, address: string[], mapQuery?: string }[]}
   */
  offices: [],
  /** e.g. 'Mon - Fri, 9:00 - 18:00'. Only if stated in the PDF. */
  hours: '',
  /**
   * The contact form posts here. Until an endpoint exists the form validates
   * and then tells the user to email instead -- it never pretends to send.
   * @type {string}
   */
  formEndpoint: '',
};

/** Social profiles. Only links actually printed in the PDF. */
export const socials = [
  // { label: 'LinkedIn', icon: 'linkedin', url: '' },
];

export const footer = {
  /** Short blurb, usually a condensed version of the About opener. */
  description: '',
  /** Legal line. `{year}` is replaced with the current year at render time. */
  copyright: '(c) {year} {company}. All rights reserved.',
  /** @type {{ label: string, href: string }[]} */
  legalLinks: [],
};
