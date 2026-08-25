# Sky Bridge Overseas Pvt. Ltd. — corporate website

A React + Vite single-page website for Sky Bridge Overseas Pvt. Ltd., a
government-licensed manpower recruitment agency based in Tokha-10, Kathmandu,
Nepal.

All content, imagery, and brand colours are taken from the company's own
profile document. Nothing is invented — see
[CONTENT-GUIDE.md](./CONTENT-GUIDE.md) for the page-by-page mapping, the list
of source-document typos that were corrected, and the few items still
outstanding.

## Getting started

```bash
npm install
npm run dev      # development server
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # eslint
```

Node 18+ is required.

## How it works

Content is fully separated from presentation. `src/data/companyData.js` is the
single source of truth; every component reads its slice and returns `null` when
that slice is empty. `src/data/sectionRegistry.js` derives which sections will
render, and the navbar and footer read it so they never link to a section that
is not on the page.

Editing the site is therefore a one-file job: change `companyData.js`, and the
page follows.

## Sections

Hero · Statistics · About · Mission, Vision & Values · Job Categories ·
Recruitment Process (with documents required) · Leadership and organisational
structure · Valued Clients · Licences & Certificates · About Nepal ·
Call to action · Contact (form + map) · Footer

## Structure

```
src/
├── components/
│   ├── layout/     Navbar, Footer, Logo, ScrollToTop
│   ├── sections/   One component per page section
│   ├── ui/         Button, Card, Grid, Section, SectionHeading, Figure, Icon, Reveal
│   └── dev/        Development-only content checklist (hides itself when complete)
├── data/
│   ├── companyData.js      All site content — the file to edit
│   └── sectionRegistry.js  Which sections have content
├── hooks/          Reveal, count-up, active section, scroll lock, meta, hash scroll
├── pages/Home.jsx  Section running order
├── styles/
│   ├── tokens.css  Design system — brand colours sampled from the profile PDF
│   └── base.css    Reset, base elements, focus, utilities
├── assets/         Logo, photography, client logos and certificates from the PDF
├── App.jsx
└── main.jsx
```

Styling is plain CSS Modules — no CSS framework. All design decisions route
through the custom properties in `tokens.css`.

## Design and accessibility notes

- Brand palette is sampled directly from the profile document: `#0071A7`
  (section banners), `#00A8CD` (footer bars), `#05527A` (cover navy), `#F5821F`
  (the orange in the company-profile page), `#D4EEFC` (panel tint).
- Fluid type scale and spacing; verified free of horizontal overflow at 1440,
  1280, 1024, 834, 768, 430, 390, 375 and 360px.
- Semantic landmarks, one `h1`, no skipped heading levels, labelled form
  controls, visible focus rings, a skip link, and a keyboard-operable mobile
  menu that closes on Escape and locks background scroll.
- Scroll-reveal animations honour `prefers-reduced-motion` and are designed so
  content can never be left invisible — see the comment at the top of
  `src/hooks/revealRegistry.js` for why this does not use IntersectionObserver.
- The contact form validates on the client and does not pretend to send
  anything until an endpoint is configured; until then it hands the visitor a
  pre-filled `mailto:` link.
