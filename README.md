# Sky Bridge — corporate landing site

A React + Vite single-page corporate website.

> **Status: awaiting company content.**
> This repository contains the complete site architecture, design system and
> every section component. It contains **no company information**, because the
> source PDF (`company-profile.pdf`) was never received in the session that
> built it. Nothing has been invented to fill the gap.
>
> To finish the site, follow **[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)**: fill in
> `src/data/companyData.js`, drop the extracted images into `src/assets/`, and
> set the brand colours in `src/styles/tokens.css`. Sections appear as their
> content arrives — no component changes required.

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

While `npm run dev` is running, a panel at the top of the page lists the content
still outstanding. It is excluded from production builds.

## Structure

```
src/
├── components/
│   ├── layout/     Navbar, Footer, Logo, ScrollToTop
│   ├── sections/   One component per page section
│   ├── ui/         Button, Card, Grid, Section, SectionHeading, Figure, Icon, Reveal
│   └── dev/        Development-only content checklist
├── data/
│   ├── companyData.js      All site content — the file to edit
│   └── sectionRegistry.js  Which sections have content
├── hooks/          Reveal, count-up, active section, scroll lock, meta, hash scroll
├── pages/Home.jsx  Section running order
├── styles/
│   ├── tokens.css  Design system — brand colours, type scale, spacing
│   └── base.css    Reset, base elements, focus, utilities
├── assets/         Images extracted from the PDF
├── App.jsx
└── main.jsx
```

Styling is plain CSS Modules — no CSS framework. All design decisions route
through the custom properties in `tokens.css`.

## Design and accessibility notes

- Fluid type scale and spacing; verified free of horizontal overflow at 1440,
  1280, 1024, 834, 768, 430, 390, 375 and 360px.
- Semantic landmarks, one `h1`, no skipped heading levels, labelled form
  controls, visible focus rings, a skip link, and a keyboard-operable mobile
  menu that closes on Escape and locks background scroll.
- Scroll-reveal animations honour `prefers-reduced-motion` and are designed so
  content can never be left invisible — see the comment at the top of
  `src/hooks/revealRegistry.js` for why this does not use IntersectionObserver.
- The contact form validates on the client and does not pretend to send
  anything until an endpoint is configured.
