/**
 * ============================================================================
 * CONTENT FOR THE INDIVIDUAL NAVIGATION PAGES
 * ============================================================================
 *
 * Kept separate from companyData.js, which holds the facts the whole site is
 * built from. This file holds the longer-form editorial writing for each page.
 *
 * WHAT IS SAFE HERE, AND WHAT IS NOT
 *
 * Everything below is either
 *   (a) taken from the company profile document, or
 *   (b) generally true independent of this company -- what a trade involves,
 *       how Nepal's Foreign Employment Act framework works, what a demand
 *       letter or a power of attorney is for.
 *
 * Nothing here asserts a company-specific achievement. There are deliberately
 * NO deployment figures, retention rates, years-of-experience claims, named
 * projects, case studies, testimonials or turnaround times, because the
 * profile document does not state them and a licensed recruitment agency
 * should not publish numbers it cannot evidence.
 *
 * Anywhere the company must supply its own specifics, the text says so
 * plainly rather than filling the gap with an invented figure. Search this
 * file for "TO CONFIRM" to find those.
 * ============================================================================
 */

export const ROUTES = {
  home: '/',
  about: '/about',
  purpose: '/purpose',
  jobs: '/jobs',
  process: '/process',
  team: '/team',
  clients: '/clients',
  licences: '/licences',
  contact: '/contact',
};

/* -------------------------------------------------------------------------- */

export const aboutPage = {
  route: ROUTES.about,
  navLabel: 'About',
  title: 'About Us',
  metaTitle: 'About — Sky Bridge Overseas Pvt. Ltd.',
  metaDescription:
    'Sky Bridge Overseas Pvt. Ltd. is a Government of Nepal licensed manpower recruitment agency in Kathmandu, established 2017, licence 1166/073/074.',
  lead:
    'Sky Bridge Overseas Pvt. Ltd. is a manpower recruitment agency based in Kathmandu, licensed by the Government of Nepal to recruit and deploy Nepali workers to employers abroad.',
  sections: [
    {
      heading: 'Who we are',
      paragraphs: [
        'Sky Bridge Overseas Private Limited was established in 2017 under the Companies Act, 2006 of the Government of Nepal, with registration number 164997/073/074. The company was incorporated on 6 March 2017 by the Office of the Company Registrar, Ministry of Industry.',
        'It operates under licence from the Department of Foreign Employment, granted under the Foreign Employment Act, 2064/2007 and the Foreign Employment Regulation, 2064/2007, with licence number 1166/073/074 issued on 19 May 2017. The licence is current and renewed to mid-July 2027.',
        'The company was established by people already working in recruitment, and its management carries that experience into the business. Its stated aim is to act as a business partner to companies that need skilled, semi-skilled and unskilled manpower, rather than simply to fill vacancies as they arise.',
      ],
    },
    {
      heading: 'What we do',
      paragraphs: [
        'The company supplies manpower across twelve job categories, spanning trade and construction crews, technical and engineering staff, hospitality and retail teams, security personnel, office staff and medical professionals. Every placement runs through the approval process of the Department of Foreign Employment.',
        'Work is carried out at three skill levels. Skilled workers hold a recognised trade qualification or certification and can work without supervision. Semi-skilled workers have practical experience in a trade and work under supervision. Unskilled workers are placed in roles that are learned on the job, with the employer providing task training.',
      ],
      /* Every one of these is stated in the profile document. */
      highlights: [
        'Established 2017, incorporated 6 March 2017',
        'Company registration 164997/073/074',
        'Foreign employment licence 1166/073/074',
        'Licence renewed to mid-July 2027',
        'Service type: manpower supply',
        'Head office: Tokha-10, Kathmandu, Nepal',
      ],
    },
    {
      heading: 'How we work with employers',
      paragraphs: [
        'The company describes its focus as high-quality client service delivered in a timely manner, and the building of long-term business relationships rather than one-off transactions. In practice that means working in close consultation with an employer on what a role actually requires, before candidates are advertised for.',
        'An employer engagement begins with a written requirement — the job description, the number of workers in each category, basic salary, food and accommodation arrangements, air ticket provision, the intended start date and any other terms. That becomes the demand letter, which is the document Nepal\'s regulator works from.',
        'From there the company handles advertising, pre-screening, pre-interview and shortlisting, arranges the employer\'s final interview, and manages visa processing, the mandatory pre-departure orientation, travel and deployment.',
      ],
    },
    {
      heading: 'Working within the rules',
      paragraphs: [
        'Foreign employment from Nepal is a regulated activity. An agency must hold a licence from the Department of Foreign Employment, must obtain pre-approval before advertising a vacancy, and must obtain final approval before a worker departs. Workers must complete a pre-departure orientation covering their job responsibilities, the working environment, and the labour law and culture of the destination country.',
        'The licence carries conditions. No branch office may be opened without approval, work may not be sub-contracted through an agent, and no worker may be sent to a country other than the one permitted for that approval. Directions issued by the Government of Nepal apply in addition to the standing acts and rules.',
        'For an employer, this framework is a due-diligence advantage: the paperwork trail is verifiable, and the licence number can be checked against the Department of Foreign Employment\'s own records.',
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */

export const purposePage = {
  route: ROUTES.purpose,
  navLabel: 'Purpose',
  title: 'Purpose & Principles',
  metaTitle: 'Purpose, Mission and Values — Sky Bridge Overseas',
  metaDescription:
    'The mission, vision and values of Sky Bridge Overseas Pvt. Ltd. — People, Knowledge and Innovation — and what each means in day-to-day recruitment practice.',
  lead:
    'Three words sit on the cover of the company profile: People, Knowledge, Innovation. They are the values the company states for itself, and the rest follows from them.',
  sections: [
    {
      heading: 'What the values mean in practice',
      paragraphs: [
        'A recruitment agency sits between two parties who rarely meet before a contract is signed: an employer who needs work done, and a person who is leaving their country to do it. Values in that position are not decoration — they decide how candidates are screened, what an employer is told before they commit, and what a worker understands before they board a flight.',
        'The three below are quoted from the company profile, followed by what each one asks for in day-to-day practice.',
      ],
    },
  ],
  /* The commitments are readings of the profile's own stated values and
     mission, not additional promises. */
  commitments: [
    {
      title: 'Consultation before advertising',
      description:
        'The mission commits the company to working in close consultation with clients so that staffing needs are met to their satisfaction. That means agreeing the job description, skill level and terms with the employer before a vacancy is advertised, rather than presenting candidates against a vague brief.',
    },
    {
      title: 'Quality staffing over volume',
      description:
        'The stated commitment is to excellent customer service, quality staffing and competitive pricing. Pre-screening and pre-interview exist to put fewer, better-matched candidates in front of an employer, not more of them.',
    },
    {
      title: 'Long-term relationships',
      description:
        'The company describes its target as being a business partner to the companies it supplies, and its focus as establishing long-term business relationships. The measure of a placement is therefore whether the worker is still doing the job well months later.',
    },
    {
      title: 'Candidates told what they are agreeing to',
      description:
        'Pre-departure orientation is a legal requirement, covering job responsibilities, working environment, labour law and the culture of the destination country. It is also the point at which a worker can still ask questions, and it is treated as such.',
    },
  ],
};

/* -------------------------------------------------------------------------- */

/**
 * Trade notes for each job category.
 *
 * These describe what the work involves in general terms -- true of the trade
 * wherever it is practised -- and what an employer should specify when
 * requesting that category. They make no claim about this company's history in
 * any trade. Role lists come from companyData.js, which takes them from the
 * profile document.
 */
export const jobsPage = {
  route: ROUTES.jobs,
  navLabel: 'Jobs',
  title: 'Job Categories',
  metaTitle: 'Job Categories — Sky Bridge Overseas Manpower Agency',
  metaDescription:
    'Twelve job categories recruited from Nepal: scaffolding, mechanical, engineering, civil construction, technicians, hospitality, retail, office, security, sports and medical staff.',
  lead:
    'The company recruits across twelve categories. Each note below describes what the work involves and what to specify when you request that category — the more precise the brief, the closer the shortlist.',
  skillLevels: [
    {
      title: 'Skilled',
      description:
        'Holds a recognised trade qualification or certification and can work without direct supervision. Expect to see certificates and to test them at interview.',
    },
    {
      title: 'Semi-skilled',
      description:
        'Has practical working experience in the trade but may not hold formal certification. Works under supervision and is usually productive quickly.',
    },
    {
      title: 'Unskilled',
      description:
        'Placed into roles learned on the job. The employer provides task training; recruitment screens for fitness for the work, reliability and attitude.',
    },
  ],
  /** Keyed by the category title in companyData.services.items. */
  notes: {
    Scaffolder: {
      about:
        'Scaffolders erect, alter and dismantle the temporary access structures other trades work from, and are responsible for the stability of what they build. The certifications listed here are the recognised training routes an employer may ask for; a trainee helper or helper supports a certificated scaffolder rather than working independently.',
      specify: 'System or tube-and-fitting, working heights, and which certification you require.',
    },
    Mechanical: {
      about:
        'Mechanical trades fabricate and install pipework and structural steel and insulate finished systems. Fitters assemble and align components to drawings; fabricators cut, shape and weld the sections that fitters install. Both are read from isometric or fabrication drawings, so drawing literacy matters as much as tool skill.',
      specify: 'Materials, welding processes and any coding, plus drawing standards used on site.',
    },
    'Engineering Sector': {
      about:
        'Engineering roles cover project management, the civil, electrical and mechanical disciplines, draughting, telecom, automotive and computer engineering. These are qualification-led positions where degree recognition and any local licensing requirement in the destination country need checking before an offer is made.',
      specify: 'Discipline, software used, and whether local registration or licensing is required.',
    },
    'Civil Construction': {
      about:
        'Civil construction covers the trades that put a structure up: steel fixing, shuttering and fixing carpentry, masonry, plumbing and electrical work, with surveyors, draughtsmen and foremen alongside. Foremen are the supervisory layer and are usually recruited against a different brief from the crews they run.',
      specify: 'Structure type, crew sizes per trade, and supervision ratio.',
    },
    'Construction Section': {
      about:
        'Finishing and second-fix trades: block and plaster masonry, marble and tile fixing, and board work. These are measured on speed and finish quality together, so a practical trade test at interview is worth the time it takes.',
      specify: 'Finishes and materials, tolerances expected, and output per worker per day.',
    },
    Technician: {
      about:
        'Plant, chiller plant, air-conditioning, duct, and materials and concrete technicians keep installed systems running and verify that what is built meets specification. Much of this work is maintenance-shift based, so shift patterns and on-call expectations should be stated up front.',
      specify: 'Equipment makes and models, shift pattern, and any testing certification required.',
    },
    'Hotel & Restaurant': {
      about:
        'Hospitality covers front of house, kitchen and housekeeping, from managers and receptionists through cooks, waiting staff and barmen to cleaners and housekeeping teams. Guest-facing roles depend heavily on language, so state the standard you need and it can be tested at interview.',
      specify: 'Property type and star rating, cuisine, language level, and guest-facing or back of house.',
    },
    'Sales & Supermarket': {
      about:
        'Retail roles run from sales management and supervision through sales staff and cashiers to checkout, trolley, shelf-stacking, cleaning and store-keeping positions. Checkout and store-keeping roles carry cash and stock responsibility, which usually changes the screening an employer wants.',
      specify: 'Store format, shift pattern, till or stock-system experience, and language level.',
    },
    'Office Staff': {
      about:
        'Administrative and finance roles, including chartered accountants, accountants and assistants, computer operators, receptionists and store keepers. Accounting positions depend on which standards and software the employer uses, and qualification recognition should be confirmed early.',
      specify: 'Accounting standards and software, language level, and reporting line.',
    },
    'Security Guard': {
      about:
        'Security personnel, including candidates with prior service backgrounds — ex-army, ex-police, ex-British Gurkha and ex-Singapore Police — along with civil security guards, gatekeepers and watchmen. Many destination countries require a local security licence or vetting before deployment, which needs planning into the timeline.',
      specify: 'Armed or unarmed, site type, licensing required locally, and shift pattern.',
    },
    Sports: {
      about:
        'Recreation and leisure staff: pool lifeguards, gym coaching and golf course roles. Lifeguard and coaching positions normally require current certification, and certificates have expiry dates that should be checked against the intended start date.',
      specify: 'Certification required, facility size, and supervision ratio.',
    },
    Medical: {
      about:
        'Clinical and pharmacy roles, including doctors, surgeons, nurses, pharmacists, ophthalmologists, opticians, pathologists and radiologists. These are the most heavily regulated placements: registration with the destination country\'s medical or nursing council, credential verification and licensing examinations usually govern the timeline rather than the recruitment itself.',
      specify: 'Speciality, registration pathway in your country, and who sponsors licensing.',
    },
  },
};

/* -------------------------------------------------------------------------- */

export const processPage = {
  route: ROUTES.process,
  navLabel: 'Process',
  title: 'Recruitment Process',
  metaTitle: 'Recruitment Process — Sky Bridge Overseas',
  metaDescription:
    'The six-step process for recruiting and deploying workers from Nepal, the documents an employer must provide, and how Department of Foreign Employment approval works.',
  lead:
    'Deploying a worker from Nepal is a regulated sequence with two separate government approvals in it. This is what happens at each stage, and what is needed from the employer to keep it moving.',
  /** Each note pairs with the matching step in companyData.process.steps. */
  stepNotes: [
    'What the employer provides: job description, number of workers per category, basic salary, food and accommodation allowances, air ticket arrangements, start date and other terms. This becomes the demand letter, and pre-approval cannot be applied for without it.',
    'What the employer provides: nothing at this stage. Advertising, application handling, pre-screening and pre-interview are carried out by the agency, and only shortlisted candidates go forward.',
    'What the employer provides: an interviewer and a date. The final interview is conducted by the employer\'s own representative, or by the agency\'s recruitment officer where the employer prefers. Video conference is available in place of travel.',
    'What the employer provides: the employment visa, issued by the employer or the destination embassy. Orientation and final Department of Foreign Employment approval follow from it, and requirements vary by destination country.',
    'What the employer provides: confirmation of the arrival date and any joining instructions. Travel is arranged through a dedicated travel agency that assists candidates during the journey.',
    'What the employer provides: readiness to receive. Once the earlier steps and any applicable service charges are cleared, candidates are deployed from Nepal.',
  ],
  approvals: {
    heading: 'The two approvals',
    paragraphs: [
      'Two separate permissions from the Department of Foreign Employment govern every placement, and they sit at different points in the process.',
      'Pre-approval comes first. It permits the vacancy to be advertised and candidates to be recruited against a specific demand letter from a specific employer in a specific country. Nothing can be advertised before it.',
      'Final approval comes last, after the employment visa is issued and the candidate has completed pre-departure orientation. It permits that individual to depart. A worker cannot legally leave for the job without it.',
      'Because both approvals are tied to one employer and one country, a demand letter cannot be reused elsewhere. A change of destination or employer restarts the paperwork.',
    ],
  },
  timing: {
    heading: 'How long it takes',
    paragraphs: [
      'The profile document does not commit to a turnaround, and it would be misleading to publish one here: the timeline is governed by factors outside the agency\'s control — visa processing in the destination country, embassy attestation, licensing or council registration for regulated professions, and the Department of Foreign Employment\'s own processing.',
      'What can be said is where the time usually goes. Regulated professions such as medical and security roles are typically governed by registration and vetting rather than by recruitment. Trade and construction categories usually move at the speed of visa issuance.',
      // TO CONFIRM: replace with the company's own indicative timelines per
      // destination once it is willing to commit to them publicly.
      'Ask for an indicative schedule against your specific country and category when you send your requirement, and it can be given for that case.',
    ],
  },
  employerChecklist: {
    heading: 'Before you send a requirement',
    items: [
      'Job title and a written job description for each role',
      'Number of workers required in each category, and the skill level for each',
      'Basic salary, and how overtime is paid',
      'Food and accommodation: provided, or allowance, and how much',
      'Air ticket: one way or return, and at whose cost',
      'Contract length, working hours and leave entitlement',
      'Intended start date',
      'The country of deployment, and the visa type to be issued',
    ],
  },
};

/* -------------------------------------------------------------------------- */

export const teamPage = {
  route: ROUTES.team,
  navLabel: 'Team',
  title: 'Leadership & Organisation',
  metaTitle: 'Leadership and Organisation — Sky Bridge Overseas',
  metaDescription:
    'The chairman, managing director and directors of Sky Bridge Overseas Pvt. Ltd., their messages from the company profile, and how the office is organised.',
  lead:
    'The four people below signed the company profile. Their messages are reproduced as written, and the organisational structure they set out follows.',
  structureNote: {
    heading: 'How the office is organised',
    paragraphs: [
      'The chart below is the structure published in the company profile. It runs from the chairman through the managing director and business development director to the office manager, and from there across three functions.',
      'Accounting handles company finance. Marketing works with employers on requirements and demand letters. Public relations covers candidate-facing work, with field officers sourcing applicants and documentation staff preparing the paperwork that the Department of Foreign Employment requires.',
      'For an employer, the practical point is that marketing and documentation are separate functions: the person who agrees your requirement is not the person assembling the approval file, and both need the same brief.',
    ],
  },
};

/* -------------------------------------------------------------------------- */

export const teamFunctions = [
  {
    name: 'Marketing',
    description:
      'Works with employers on requirements: agreeing the job description, skill levels and terms, and turning them into the demand letter the process runs on.',
    icon: 'trending',
  },
  {
    name: 'Public relations & field',
    description:
      'Candidate-facing work. Field officers source applicants against approved vacancies; the public relations officer handles enquiries and the candidate relationship.',
    icon: 'users',
  },
  {
    name: 'Documentation',
    description:
      'Assembles the approval files the Department of Foreign Employment requires, at both the pre-approval and final-approval stages, supported by the computer operator.',
    icon: 'filecheck',
  },
  {
    name: 'Accounts',
    description:
      'Company finance, including the service charges that must be cleared before a candidate is deployed.',
    icon: 'wallet',
  },
  {
    name: 'Office & reception',
    description:
      'The office secretary, assistant and receptionist run day-to-day operations and are usually the first point of contact for a visitor or caller.',
    icon: 'headset',
  },
  {
    name: 'Security',
    description:
      'On-site security for the office premises.',
    icon: 'shield',
  },
];

export const clientsPage = {
  route: ROUTES.clients,
  navLabel: 'Clients',
  title: 'Our Valued Clients',
  metaTitle: 'Clients — Sky Bridge Overseas Manpower Agency',
  metaDescription:
    'The employer companies listed in the Sky Bridge Overseas company profile, across manufacturing, engineering, logistics, facilities, retail and security.',
  lead:
    'These are the companies listed as clients in the company profile. Their names and marks are reproduced as published.',
  sectorsNote: {
    heading: 'The sectors represented',
    paragraphs: [
      'Read across the list, the names cover manufacturing and industrial production, engineering and air-conditioning, logistics and cargo handling, facilities management and cleaning services, jewellery and goldsmithing, furniture manufacture, retail and commercial trading, and security and consultancy.',
      'That spread matches the job categories the company recruits for: production and trade crews for the industrial and manufacturing employers, technicians and mechanical trades for engineering, and cleaning, security and retail teams for the facilities and commercial businesses.',
      // TO CONFIRM: the profile does not state which roles were supplied to
      // which client, nor over what period. Nothing of that kind is claimed
      // here. Add specifics only where a client has agreed to be cited.
      'The profile does not set out which roles were supplied to which company, so nothing of that kind is claimed on this page.',
    ],
  },
  /**
   * Read off the published client names themselves -- "Sdn. Bhd." and the
   * trading names indicate the line of business. No claim is made about what
   * was supplied to whom.
   */
  sectors: [
    {
      name: 'Engineering & air-conditioning',
      description: 'Sales, engineering and cooling systems businesses, drawing on mechanical trades and plant technicians.',
      icon: 'cog',
    },
    {
      name: 'Manufacturing & industrial',
      description: 'Production and industrial companies, including furniture manufacture and metal goods.',
      icon: 'factory',
    },
    {
      name: 'Logistics & cargo',
      description: 'Freight and cargo handling operations, where warehouse and loading crews are the usual requirement.',
      icon: 'truck',
    },
    {
      name: 'Facilities & cleaning',
      description: 'Cleaning and maintenance specialists staffing commercial and industrial premises.',
      icon: 'sparkles',
    },
    {
      name: 'Retail & commercial trading',
      description: 'Trading and commercial businesses, alongside jewellery and goldsmithing.',
      icon: 'wallet',
    },
    {
      name: 'Security & consultancy',
      description: 'Security and consultancy firms, a category with its own licensing requirements in most destinations.',
      icon: 'shield',
    },
  ],
  workWithUs: {
    heading: 'Becoming a client',
    paragraphs: [
      'An employer relationship begins with a written requirement and the demand letter that follows from it. From there the documents on the process page — power of attorney, employment agreement, agency agreement and guarantee letter — put the arrangement on a legal footing with the Government of Nepal.',
      'Employers who prefer to select workers themselves can interview a pre-interviewed shortlist directly, in person or by video conference.',
    ],
  },
};

/* -------------------------------------------------------------------------- */

export const licencesPage = {
  route: ROUTES.licences,
  navLabel: 'Licences',
  title: 'Licences & Certificates',
  metaTitle: 'Licences and Certificates — Sky Bridge Overseas',
  metaDescription:
    'Company registration 164997/073/074 and foreign employment licence 1166/073/074, with the certificates as reproduced in the company profile.',
  lead:
    'Recruitment for foreign employment is licensed in Nepal, and the paperwork is checkable. These are the registrations the company holds, reproduced from the company profile.',
  explainers: [
    {
      heading: 'Certificate of Incorporation',
      body:
        'Issued by the Office of the Company Registrar under the Ministry of Industry, this establishes the company as a private limited company under the Companies Act, 2006. It is what gives the business legal existence; on its own it does not permit foreign employment recruitment.',
      detail: 'Registration No. 164997/073/074 · issued 6 March 2017',
    },
    {
      heading: 'Foreign Employment Licence',
      body:
        'Issued by the Department of Foreign Employment under the Ministry of Labour and Employment, this is the permission that allows the company to operate a foreign employment business under the Foreign Employment Act, 2064 (2007) and the Foreign Employment Regulation, 2064 (2007). It is the document an employer should check.',
      detail: 'Licence No. 1166/073/074 · issued 19 May 2017 · renewed to mid-July 2027',
    },
    {
      heading: 'Licence renewal record',
      body:
        'Foreign employment licences are renewed rather than granted once. The Nepali-language original carries the renewal record, showing the licence has been maintained in good standing rather than lapsing between periods.',
      detail: '',
    },
    {
      heading: 'PAN registration',
      body:
        'The Permanent Account Number certificate from the Inland Revenue Department under the Ministry of Finance registers the company for tax. It confirms the business is a registered taxpayer in Nepal.',
      detail: '',
    },
  ],
  conditions: {
    heading: 'Conditions attached to the licence',
    intro: 'The licence is granted subject to terms printed on the document itself:',
    items: [
      'No work may be carried out by opening a branch office without obtaining approval.',
      'No work may be done through an agent.',
      'No worker may be sent to any country other than those permitted.',
      'Directions issued from time to time by the Government of Nepal apply in addition to the provisions of the prevailing acts and rules.',
    ],
  },
  dueDiligence: {
    heading: 'Checking an agency',
    paragraphs: [
      'An employer or a worker can verify a Nepali recruitment agency independently, and should. The licence number is the key: it identifies the agency in the Department of Foreign Employment\'s records, and the department publishes notices concerning licensed agencies — including, for example, notices of a company changing its registered name.',
      'Two things are worth confirming before committing: that the licence is current rather than expired, and that approval has been obtained for your specific country and demand letter. Approvals are tied to one employer and one destination, and are not transferable.',
    ],
  },
};

/* -------------------------------------------------------------------------- */

export const contactPage = {
  route: ROUTES.contact,
  navLabel: 'Contact',
  title: 'Contact Us',
  metaTitle: 'Contact — Sky Bridge Overseas Pvt. Ltd., Kathmandu',
  metaDescription:
    'Contact Sky Bridge Overseas Pvt. Ltd. in Tokha-10, Kathmandu, Nepal. Telephone +977-1-4977511, email skybridgeoverseasp@gmail.com.',
  lead:
    'Employers with a requirement and job seekers looking for work are both welcome to get in touch. The more detail an enquiry carries, the more useful the first reply will be.',
  audiences: [
    {
      title: 'If you are an employer',
      description:
        'Send the job description, the number of workers in each category and skill level, salary, food and accommodation terms, air ticket arrangements, contract length and intended start date. That is enough to begin a demand letter and to give you an indicative schedule for your country.',
      icon: 'briefcase',
    },
    {
      title: 'If you are looking for work',
      description:
        'Say which trade or category you work in, how long you have worked in it, what certifications you hold and which countries you are willing to work in. Applications are only accepted against vacancies that have been pre-approved by the Department of Foreign Employment.',
      icon: 'users',
    },
  ],
  whatHappensNext: {
    heading: 'What happens after you write',
    steps: [
      'Your requirement is read and anything ambiguous is queried — usually skill level, supervision ratio, or how food and accommodation are handled.',
      'A demand letter is drafted from the agreed requirement for you to check and issue.',
      'With the demand letter and supporting documents in hand, pre-approval is applied for from the Department of Foreign Employment.',
      'Once pre-approval is granted the vacancy is advertised, and pre-screening and pre-interviewing begin.',
    ],
  },
  practical: {
    heading: 'Practical notes',
    items: [
      {
        label: 'Time zone',
        value: 'Nepal Time, UTC+05:45 — an unusual offset, so check it before proposing an interview slot.',
      },
      {
        label: 'Language',
        value: 'Correspondence in English is welcome. Nepali is the official language locally.',
      },
      {
        label: 'Interviews',
        value: 'Employers may travel to interview, send a representative, or interview by video conference.',
      },
      {
        label: 'Job seekers',
        value: 'Applications can only be taken against vacancies already pre-approved by the Department of Foreign Employment.',
      },
    ],
  },
  officeNote: {
    heading: 'Visiting the office',
    paragraphs: [
      'The head office is at Tokha-10, in the northern part of the Kathmandu valley. Tribhuvan International Airport is the arrival point for visitors travelling in.',
      // TO CONFIRM: the profile document does not state opening hours. Set
      // contact.hours in companyData.js and they will appear across the site.
      'Opening hours are not published in the company profile. Please call ahead on +977-1-4977511 to confirm someone will be there before travelling.',
    ],
  },
};

/* -------------------------------------------------------------------------- */

/** Page order used by the navbar, the footer and the router. */
export const PAGES = [
  aboutPage,
  purposePage,
  jobsPage,
  processPage,
  teamPage,
  clientsPage,
  licencesPage,
  contactPage,
];
