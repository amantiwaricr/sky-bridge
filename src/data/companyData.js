/**
 * ============================================================================
 * SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ============================================================================
 *
 * Every value here is transcribed from the Sky Bridge Overseas company profile
 * PDF. Nothing is invented. Where the source had an unambiguous typo it has
 * been corrected -- those corrections are listed in CONTENT-GUIDE.md so they
 * can be reviewed or reverted.
 *
 * Each section component reads its slice and renders `null` when that slice is
 * empty, so content changes never require component changes.
 * ============================================================================
 */

import logoFull from '../assets/logo/logo-full.png';
import logoMark from '../assets/logo/logo-mark.png';
import heroCollage from '../assets/hero/hero-collage.jpg';
import nepalMap from '../assets/about/nepal-map.jpg';
import aboutDeparture from '../assets/about/departure-hall.jpg';

import chairmanPhoto from '../assets/leadership/chairman.jpg';
import mdPhoto from '../assets/leadership/managing-director.jpg';
import directorGurungPhoto from '../assets/leadership/director-gurung.jpg';

import imgScaffolding from '../assets/categories/scaffolding.jpg';
import imgMechanical from '../assets/categories/mechanical.jpg';
import imgEngineering from '../assets/categories/engineering.jpg';
import imgCivil from '../assets/categories/civil-construction.jpg';
import imgConstruction from '../assets/categories/construction.jpg';
import imgTechnician from '../assets/categories/technician.jpg';
import imgHotel from '../assets/categories/hotel-restaurant.jpg';
import imgSales from '../assets/categories/sales-supermarket.jpg';
import imgOffice from '../assets/categories/office-staff.jpg';
import imgSecurity from '../assets/categories/security.jpg';
import imgSports from '../assets/categories/sports.jpg';
import imgMedical from '../assets/categories/medical.jpg';

import certIncorporation from '../assets/certifications/certificate-of-incorporation.jpg';
import certDofe from '../assets/certifications/dofe-licence-1166.jpg';
import certLicenceNp from '../assets/certifications/foreign-employment-licence-np.jpg';
import certPan from '../assets/certifications/pan-registration.jpg';

import logoAg from '../assets/partners/ag.jpg';
import logoAgman from '../assets/partners/agman.jpg';
import logoCleaningMaster from '../assets/partners/cleaning-master.jpg';
import logoExperd from '../assets/partners/experd.jpg';
import logoFuku from '../assets/partners/fuku.jpg';
import logoHightech from '../assets/partners/hightech-cleaning.jpg';
import logoImageSecurity from '../assets/partners/image-security-consultancy.jpg';
import logoKemasjernih from '../assets/partners/kemasjernih.jpg';
import logoKh from '../assets/partners/kh.jpg';
import logoLky from '../assets/partners/lky.jpg';
import logoMaskargo from '../assets/partners/maskargo-logistics.jpg';
import logoMegaFortris from '../assets/partners/mega-fortris.jpg';
import logoMetro from '../assets/partners/metro-interise.jpg';
import logoMingZhang from '../assets/partners/ming-zhang-sofa.jpg';
import logoNzCommercial from '../assets/partners/nz-commercial.jpg';
import logoPh from '../assets/partners/ph.jpg';
import logoPlatinumPhase from '../assets/partners/platinum-phase.jpg';
import logoSaiCond from '../assets/partners/sai-cond.jpg';
import logoSerbaWangi from '../assets/partners/serba-wangi.jpg';
import logoSinarTm from '../assets/partners/sinar-tm.jpg';
import logoTmGoldsmith from '../assets/partners/tm-goldsmith.jpg';
import logoWecan from '../assets/partners/wecan-industries.jpg';
import logoYcsg from '../assets/partners/ycsg-industrail.jpg';

export const company = {
  name: 'Sky Bridge Overseas Pvt. Ltd.',
  shortName: 'Sky Bridge Overseas',
  tagline: 'Workforce solutions and services',
  logo: { src: logoFull, alt: 'Sky Bridge Overseas Manpower Agency' },
  logoMark: { src: logoMark, alt: '' },
  founded: '2017',
  website: 'http://www.sbo.com.np',
  /** Statutory registrations printed on the cover and company profile page. */
  licenceNumber: '1166/073/074',
  registrationNumber: '164997/073/074',
  serviceType: 'Manpower Supply',
};

export const seo = {
  title: 'Sky Bridge Overseas Pvt. Ltd. — Manpower Agency in Kathmandu, Nepal',
  description:
    'Government-licensed Nepali manpower recruitment agency supplying skilled, semi-skilled and unskilled workers to employers overseas. Licence No. 1166/073/074.',
  siteUrl: '',
  ogImage: null,
};

/** Single-word labels keep the header on one line down to the mobile breakpoint. */
export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'mission', label: 'Purpose' },
  { id: 'services', label: 'Jobs' },
  { id: 'process', label: 'Process' },
  { id: 'leadership', label: 'Team' },
  { id: 'partners', label: 'Clients' },
  { id: 'certifications', label: 'Licences' },
  { id: 'contact', label: 'Contact' },
];

export const primaryCta = { label: 'Request Manpower', href: '#contact' };

export const hero = {
  eyebrow: 'Government-licensed manpower agency · Kathmandu, Nepal',
  headline: 'People. Knowledge. Innovation.',
  subheadline:
    'Sky Bridge Overseas recruits and deploys skilled, semi-skilled and unskilled Nepali workers for employers worldwide — under full Government of Nepal licence.',
  image: { src: heroCollage, alt: 'Nepali workers across construction, retail, healthcare and hospitality roles' },
  secondaryCta: { label: 'View Job Categories', href: '#services' },
  highlights: [
    'Licence No. 1166/073/074',
    'Established 2017',
    'Skilled, semi-skilled & unskilled',
  ],
};

export const about = {
  eyebrow: 'About the company',
  heading: 'A trusted recruitment partner between Nepal and the world',
  body: [
    'Sky Bridge Overseas Private Limited is a manpower recruitment agency in Nepal, established in 2017 under the Companies Act, 2006 with registration number 164997/073/074, and licensed by the Department of Foreign Employment under the Foreign Employment Act, 2064/2007 with licence number 1166/073/074.',
    'It was established by leading experts and businessmen in the field of recruitment service, and the company management has vast experience in the recruitment field. The company targets to be a business partner to companies requiring skilled, semi-skilled and unskilled manpower.',
    'The company focuses on providing high quality client service in a timely manner, and on establishing long-term business relationships with its clients.',
  ],
  points: [
    'Incorporated 6 March 2017',
    'Licence valid to mid-July 2027',
    'Service type: Manpower Supply',
    'Based in Tokha-10, Kathmandu',
  ],
  image: {
    src: aboutDeparture,
    alt: 'Workers departing from the airport terminal in Kathmandu',
  },
};

/**
 * Figures printed in, or directly countable from, the profile document.
 * No estimated or projected numbers.
 */
export const stats = [
  { value: 2017, suffix: '', label: 'Established', format: 'plain' },
  { value: 12, suffix: '', label: 'Job Categories' },
  { value: 23, suffix: '', label: 'Client Companies' },
  { value: 6, suffix: '', label: 'Step Recruitment Process' },
];

export const missionVision = {
  mission:
    'Our mission is to be the preferred and trusted recruitment partner to both clients and candidates. To achieve this, we are committed to the provision of excellent customer service, quality staffing and competitive pricing. We will continue to work in close consultation with our clients to ensure that their staffing needs are adequately met to their satisfaction.',
  vision:
    'Our vision is to lead in the creation and delivery of innovative workforce solutions and services that enable our clients to win in the changing world of work.',
  values: [
    {
      title: 'People',
      description:
        'We care about people and the role of work in their lives. We respect people as individuals — trusting them, supporting them, enabling them to achieve their aims in work and in life. We help people develop their careers through planning, work, coaching and training.',
    },
    {
      title: 'Knowledge',
      description:
        'We share our knowledge, our expertise and our resources so that everyone understands what is important now and what is happening next in the world of work — and knows how to respond. We actively listen and act upon this information to improve our relationships, solutions and services.',
    },
    {
      title: 'Innovation',
      description:
        'Based on our understanding of the world of work, we actively pursue the development and adoption of the best practices worldwide, so that our solutions and services keep pace with what our clients need.',
    },
  ],
};

/**
 * The twelve job categories the agency recruits for, with the roles listed
 * under each in the profile document.
 */
export const services = {
  eyebrow: 'What we recruit for',
  heading: 'Job categories we provide',
  intro:
    'Sky Bridge Overseas supplies workers across twelve categories, from trade and construction crews to hospitality, retail, security and medical staff.',
  items: [
    {
      title: 'Scaffolder',
      icon: 'layers',
      image: { src: imgScaffolding, alt: 'Scaffolder working on a scaffold structure' },
      roles: ['CITB', 'Velocy', 'TUV', 'Basic Training', 'Trainee Helper', 'Helper', 'Other'],
    },
    {
      title: 'Mechanical',
      icon: 'wrench',
      image: { src: imgMechanical, alt: 'Mechanical worker fitting pipework' },
      roles: ['Pipe Fitter', 'Pipe Fabricator', 'Sit Fitter', 'Sit Fabricator', 'Mechanical Helper', 'Insulator'],
    },
    {
      title: 'Engineering Sector',
      icon: 'cpu',
      image: { src: imgEngineering, alt: 'Engineers working at a test bench' },
      roles: ['Project Manager', 'Civil Engineer', 'Electrical Engineer', 'Mechanical Engineer', 'Draftsman', 'Telecom', 'Automobile', 'Computer Engineer'],
    },
    {
      title: 'Civil Construction',
      icon: 'hardhat',
      image: { src: imgCivil, alt: 'Carpenters framing a timber structure' },
      roles: ['Steel Fixer', 'Plumber', 'Shuttering Carpenter', 'Fixing Carpenter', 'Mason', 'Surveyor', 'Foreman', 'Electrician', 'Labour', 'Draftsman', 'Architect'],
    },
    {
      title: 'Construction Section',
      icon: 'building2',
      image: { src: imgConstruction, alt: 'Mason laying blockwork' },
      roles: ['Block Mason', 'Plaster Mason', 'Marble Fixer', 'Tile Mason', 'Zipson Worker', 'Labour'],
    },
    {
      title: 'Technician',
      icon: 'cog',
      image: { src: imgTechnician, alt: 'Technician servicing an electrical panel' },
      roles: ['Plant Technician', 'Chiller Plant Technician', 'A/C Technician', 'Material and Concrete Technician', 'Duct Technician'],
    },
    {
      title: 'Hotel & Restaurant',
      icon: 'package',
      image: { src: imgHotel, alt: 'Chef preparing food in a commercial kitchen' },
      roles: ['Manager', 'Cashier', 'Receptionist', 'Cook', 'Waiter / Waitress', 'Office Boy', 'Cleaner', 'Barman', 'House Keeping'],
    },
    {
      title: 'Sales & Supermarket',
      icon: 'trending',
      image: { src: imgSales, alt: 'Supermarket staff serving a customer at the checkout' },
      roles: ['Sales Manager', 'Sales Executive', 'Sales Supervisor', 'Sales Boy / Girl', 'Cashier', 'Check Out Cashiers', 'Trolley Boys', 'Shelf Rack Organizers', 'Cleaners', 'Store Keepers'],
    },
    {
      title: 'Office Staff',
      icon: 'briefcase',
      image: { src: imgOffice, alt: 'Office administrator at a workstation' },
      roles: ['Office Staff', 'Office Manager', 'Chartered Accountant', 'Accountant', 'Assistant Accountant', 'Computer Operator', 'Office Boy', 'Receptionist', 'Store Keeper'],
    },
    {
      title: 'Security Guard',
      icon: 'shield',
      image: { src: imgSecurity, alt: 'Security officer on duty with a radio' },
      roles: ['Security Personnel', 'Body Guard', 'Commando', 'Civil Security Guard', 'Ex-Army Security Guard', 'Ex-Police Security Guard', 'Ex-British Gorkhas Security Guard', 'Ex-Singapore Police', 'Gatekeeper', 'Watchmen'],
    },
    {
      title: 'Sports',
      icon: 'target',
      image: { src: imgSports, alt: 'Lifeguards on duty at a pool' },
      roles: ['Swimming (Life Guard)', 'Gym (Coach)', 'Golf (Carrier)'],
    },
    {
      title: 'Medical',
      icon: 'health',
      image: { src: imgMedical, alt: 'Nurse reviewing patient notes' },
      roles: ['Pharmacist', 'Nurse', 'Surgeon', 'Medical Doctor', 'Ophthalmologist', 'Optician', 'Pathologist', 'Radiologist'],
    },
  ],
};

/** The six-step deployment process set out in the profile. */
export const process = {
  eyebrow: 'How we work',
  heading: 'Our recruitment process',
  intro:
    'Sky Bridge Overseas follows this process to deploy workers from Nepal, meeting the requirements of the Department of Foreign Employment at every stage.',
  steps: [
    {
      title: 'Enquiry from Employer',
      description:
        'We receive the enquiry from employers concerning their requirement of workers by email, stating the exact job description, number of workers, basic salary, food and accommodation allowances, air ticket, job starting date and other terms and conditions. We then provide the format documents required to complete the legal process in Nepal — the demand letter. On receiving it we apply to the Department of Foreign Employment (DoFE) for pre-approval of recruitment.',
    },
    {
      title: 'Pre-screening and Selection',
      description:
        'After pre-approval from DoFE we advertise in print media, electronic media (radio, television, SMS) and internet channels to reach potential candidates. Applications arrive by post, fax, mail and through our own application data bank. We pre-screen and pre-interview applicants, and only shortlisted candidates continue.',
    },
    {
      title: 'Final Interview by Employer',
      description:
        'Candidates who succeed at pre-screening are called for a final interview on a set day. The interview is conducted by the representative of the employer, or by the recruitment officer of our company.',
    },
    {
      title: 'Employment Visa and Orientation',
      description:
        'After the employment visa is issued by the employer or embassy, each successful candidate attends orientation classes to be eligible for final approval from DoFE. Candidates are briefed on their job responsibilities, work environment, labour law and the culture of the destination country. Requirements vary by country.',
    },
    {
      title: 'Travel Arrangement',
      description:
        'On receiving final approval we make the travel arrangements. We work with a dedicated travel agency that assists candidates throughout their journey.',
    },
    {
      title: 'Deployment',
      description:
        'Once all of the above steps and any applicable service charges are cleared, candidates are deployed from Nepal.',
    },
  ],
  /** Paperwork the employer supplies, per the "Documents Required" page. */
  documentsIntro:
    'Requirements vary from country to country, but two document types are always needed: a demand letter and an employment contract, together with a power of attorney and inter-party agreement. The following meet the formalities of the Government of Nepal.',
  documents: [
    {
      title: 'Demand Letter',
      description:
        'Addressed to Sky Bridge Overseas Pvt. Ltd., stating the number of workers required in each category with salary, accommodation and other benefits.',
    },
    {
      title: 'Power of Attorney',
      description:
        'Authorising Sky Bridge Overseas Pvt. Ltd., Kathmandu, Nepal to act as true and lawful attorney and agent.',
    },
    {
      title: 'Employment Agreement',
      description: 'One copy each, signed and stamped by the sponsor.',
    },
    {
      title: 'Agency Agreement',
      description:
        'Sky Bridge Overseas Pvt. Ltd. screens the shortlisted candidates by pre-interview. Employers may make their own selection from workers already pre-interviewed, and may interview directly by video conference if preferred.',
    },
    {
      title: 'Guarantee Letter',
      description:
        'Written to the Director General, Department of Labour & Employment Promotion, Government of Nepal, guaranteeing recruitment for the named country and company only.',
    },
  ],
};

/** Signed messages and titles from the profile document. */
export const leadership = {
  eyebrow: 'Who we are',
  heading: 'Leadership',
  intro: '',
  people: [
    {
      name: 'Laxmi Prasad Bastola',
      role: 'Chairman',
      photo: { src: chairmanPhoto, alt: 'Laxmi Prasad Bastola, Chairman' },
      quote:
        "No matter where we are or what we do, there are fundamental beliefs and behaviours that guide our decisions, focus and actions and unite us as a company. Sky Bridge Overseas's vision and values serve to inspire how we interact, create and deliver on our promise to clients, job seekers and ourselves.",
    },
    {
      name: 'Purna Bahadur Limbu',
      role: 'Managing Director',
      photo: { src: mdPhoto, alt: 'Purna Bahadur Limbu, Managing Director' },
      quote:
        'Our commitment to quality nurtures trust, which in turn takes us to a long lasting business relationship with you. Your trust, recognition and confidence will eventually result in the successful spread of profit to both the workers and their employers.',
    },
    {
      name: 'Ambika Tamang',
      role: 'Director',
      photo: null,
      quote:
        'Human potential should be utilised to the maximum extent for the betterment of the world. Our priority is always to bridge the opportunities and the human resources — in short, we undertake the responsibility to provide the right worker for the right job.',
    },
    {
      name: 'Bishnu Bahadur Gurung',
      role: 'Director',
      photo: { src: directorGurungPhoto, alt: 'Bishnu Bahadur Gurung, Director' },
      quote:
        'We reiterate our commitment to quality for years to come, because we know that only through quality in our work deliveries will we be able to see our future in the brightest spectrum of colours.',
    },
  ],
  /** The organisational structure chart, top to bottom. */
  structureHeading: 'Organisational structure',
  structure: [
    ['Chairman'],
    ['Managing Director'],
    ['Business Development Director'],
    ['Office Manager'],
    ['Accountant', 'Marketing Officer', 'Public Relation Officer'],
    ['Field Officer', 'Office Secretary', 'Documentation'],
    ['Office Assistant', 'Receptionist', 'Computer Operator'],
    ['Office Boy', 'Security Guard'],
  ],
};

export const certifications = {
  eyebrow: 'Registered and licensed',
  heading: 'Licences & certificates',
  intro:
    'Sky Bridge Overseas operates under the Companies Act, 2006 and the Foreign Employment Act, 2064/2007. The originals reproduced here appear in the company profile.',
  items: [
    {
      name: 'Certificate of Incorporation',
      issuer: 'Office of the Company Registrar, Ministry of Industry, Government of Nepal',
      year: '2017',
      detail: 'Registration No. 164997/073/074 · Issued 6 March 2017',
      image: { src: certIncorporation, alt: 'Certificate of incorporation issued by the Office of the Company Registrar' },
    },
    {
      name: 'Foreign Employment Licence',
      issuer: 'Department of Foreign Employment, Ministry of Labour and Employment',
      year: '2017',
      detail: 'Licence No. 1166/073/074 · Issued 19 May 2017 · Renewed to mid-July 2027',
      image: { src: certDofe, alt: 'Foreign employment licence issued by the Department of Foreign Employment' },
    },
    {
      name: 'Licence & Renewal Record',
      issuer: 'Department of Foreign Employment, Government of Nepal',
      year: '',
      detail: 'Original Nepali-language licence with the renewal record',
      image: { src: certLicenceNp, alt: 'Nepali-language foreign employment licence and renewal record' },
    },
    {
      name: 'PAN Registration',
      issuer: 'Inland Revenue Department, Ministry of Finance, Government of Nepal',
      year: '',
      detail: 'Permanent Account Number registration certificate',
      image: { src: certPan, alt: 'Permanent Account Number registration certificate' },
    },
  ],
};

/** The employers whose logos appear under "Our Valued Clients". */
export const partners = {
  eyebrow: 'Who we work with',
  heading: 'Our valued clients',
  items: [
    { name: 'Mega Fortris Group', logo: { src: logoMegaFortris, alt: 'Mega Fortris Group' } },
    { name: 'Sai Cond Sales & Engineering Sdn. Bhd.', logo: { src: logoSaiCond, alt: 'Sai Cond Sales & Engineering Sdn. Bhd.' } },
    { name: 'Fuku', logo: { src: logoFuku, alt: 'Fuku' } },
    { name: 'LKY', logo: { src: logoLky, alt: 'LKY' } },
    { name: 'Agman Sendirian Berhad', logo: { src: logoAgman, alt: 'Agman Sendirian Berhad' } },
    { name: 'Wecan Industries Sdn. Bhd.', logo: { src: logoWecan, alt: 'Wecan Industries Sdn. Bhd.' } },
    { name: 'YCSG Industrail Sdn. Bhd.', logo: { src: logoYcsg, alt: 'YCSG Industrail Sdn. Bhd.' } },
    { name: 'T & M Goldsmith & Jeweller Sdn. Bhd.', logo: { src: logoTmGoldsmith, alt: 'T & M Goldsmith & Jeweller Sdn. Bhd.' } },
    { name: 'MASkargo Logistics', logo: { src: logoMaskargo, alt: 'MASkargo Logistics' } },
    { name: 'Hightech Cleaning Services Sdn. Bhd.', logo: { src: logoHightech, alt: 'Hightech Cleaning Services Sdn. Bhd.' } },
    { name: 'NZ Commercial Sdn. Bhd.', logo: { src: logoNzCommercial, alt: 'NZ Commercial Sdn. Bhd.' } },
    { name: 'Serba Wangi (PG) Sdn. Bhd.', logo: { src: logoSerbaWangi, alt: 'Serba Wangi (PG) Sdn. Bhd.' } },
    { name: 'Sinar TM Sdn. Bhd.', logo: { src: logoSinarTm, alt: 'Sinar TM Sdn. Bhd.' } },
    { name: 'AG', logo: { src: logoAg, alt: 'AG' } },
    { name: 'Platinum Phase', logo: { src: logoPlatinumPhase, alt: 'Platinum Phase' } },
    { name: 'Experd', logo: { src: logoExperd, alt: 'Experd' } },
    { name: 'Cleaning Master Sdn. Bhd.', logo: { src: logoCleaningMaster, alt: 'Cleaning Master Sdn. Bhd.' } },
    { name: 'Ming Zhang Sofa Enterprise Sdn. Bhd.', logo: { src: logoMingZhang, alt: 'Ming Zhang Sofa Enterprise Sdn. Bhd.' } },
    { name: 'Kemasjernih Sdn. Bhd.', logo: { src: logoKemasjernih, alt: 'Kemasjernih Sdn. Bhd.' } },
    { name: 'PH', logo: { src: logoPh, alt: 'PH' } },
    { name: 'Image Security & Consultancy Sdn. Bhd.', logo: { src: logoImageSecurity, alt: 'Image Security & Consultancy Sdn. Bhd.' } },
    { name: 'Metro Interise Group of Companies', logo: { src: logoMetro, alt: 'Metro Interise Group of Companies' } },
    { name: 'KH', logo: { src: logoKh, alt: 'KH' } },
  ],
};

/** No testimonials appear in the company profile. */
export const testimonials = { eyebrow: '', heading: '', items: [] };

/** Country context, from the "About Nepal" page of the profile. */
export const aboutNepal = {
  eyebrow: 'Where our workers come from',
  heading: 'About Nepal',
  body: [
    'Nepal is a mountainous and landlocked country situated between two giant neighbours — China to the north and India to the south, east and west.',
    'Nepal boasts the highest peak in the world, Mount Everest, and visitors from all over the world come to climb it and to see the panorama of snow-capped mountains and historic monuments. Nepal is also the second richest country in the world in water resources, with a substantial number of rivers and streams flowing south from the high Himalayas, and Tilicho Lake — the highest lake in the world — lies within its borders.',
  ],
  image: { src: nepalMap, alt: 'Map showing Nepal in relation to the wider world' },
};

export const cta = {
  heading: 'Tell us what your workforce needs',
  body: 'Send your demand letter or an outline of the roles you need filled, and our recruitment team will respond with a plan and timeline.',
  action: null,
};

export const contact = {
  eyebrow: 'Get in touch',
  heading: 'Contact Sky Bridge Overseas',
  intro:
    'Employers and job seekers are welcome to contact our Kathmandu office by phone, email or the form below.',
  phones: ['+977-1-4977511'],
  emails: ['skybridgeoverseasp@gmail.com'],
  offices: [
    {
      label: 'Head Office',
      address: ['Tokha-10', 'Kathmandu', 'Nepal'],
      mapQuery: 'Tokha-10, Kathmandu, Nepal',
    },
  ],
  hours: '',
  formEndpoint: '',
};

/** The profile lists no social media accounts. */
export const socials = [];

export const footer = {
  description:
    'Government-licensed Nepali manpower agency supplying skilled, semi-skilled and unskilled workers to employers overseas.',
  copyright: '© {year} {company}. All rights reserved.',
  legalLinks: [],
};
