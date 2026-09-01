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

### Uploading a build to cPanel

Compress `dist/` as **`.tar.gz`, not `.zip`**:

```bash
npm run build
tar -czf sky-dist.tar.gz -C dist .
```

Upload that and extract it in the File Manager. Many hosts run ClamAV with
the unofficial Sanesecurity "Foxhole" signature set, which rejects any ZIP
containing a `.js` file — `Sanesecurity.Foxhole.JS_Zip_*` — because that is a
common malware-delivery shape. Every JavaScript build trips it. A gzipped tar
carries the same files and is not matched by those signatures. Uploading the
files directly, without an archive, works too.

Extract the archive **into the folder itself**, not into a `dist` subfolder,
and check that the hidden `.htaccess` came across — File Manager hides
dotfiles until you enable "Show Hidden Files" in its settings.

Node 18+ is required.

## How it works

Content is fully separated from presentation. `src/data/companyData.js` is the
single source of truth; every component reads its slice and returns `null` when
that slice is empty. `src/data/sectionRegistry.js` derives which sections will
render, and the navbar and footer read it so they never link to a section that
is not on the page.

Editing the site is therefore a one-file job: change `companyData.js`, and the
page follows.

## Pages

The home page is a single scrolling overview. Each navigation item is its own
route with fuller detail:

| Route | Page |
| --- | --- |
| `/` | Home — hero, statistics, and a summary of every section |
| `/about` | Company background, legal standing, how employer engagements work |
| `/purpose` | Mission, vision, the three values, and what they ask for in practice |
| `/jobs` | All twelve categories in detail, with skill levels and every role |
| `/process` | The six steps, the two government approvals, documents, employer checklist |
| `/team` | The four signatories, their messages, the organisation and its functions |
| `/clients` | The client logos, the sectors they represent, becoming a client |
| `/licences` | Each registration explained, licence conditions, how to verify an agency |
| `/contact` | Enquiry routes, the form, what happens next, practical notes |

Anything not matching a route renders a 404 page listing the others.

Longer-form page copy lives in `src/data/pagesData.js`, separate from
`companyData.js` which holds the facts. That file opens with a note on what is
safe to write there: everything is either taken from the company profile or
generally true independent of the company. No deployment figures, case
studies, testimonials or turnaround times are asserted anywhere, because the
profile does not state them. Search it for `TO CONFIRM` to find the places
where the company needs to supply its own specifics.

## Deploying

This is a single-page app with client-side routing, so the server must return
`index.html` for any path — otherwise a direct hit on `/jobs`, or a refresh,
returns a 404 from the host rather than the app.

- **Netlify** — handled by `public/_redirects`, already in the repo.
- **Vercel** — handled by `vercel.json`, already in the repo.
- **Apache / cPanel** — handled by `public/.htaccess`, which Vite copies into
  `dist/`. It also sets long cache lifetimes for the content-hashed assets and
  `no-cache` on `index.html`, so a returning visitor never keeps loading the
  previous build's asset names. Serving from a subfolder needs `RewriteBase`
  adjusting and a matching `vite build --base=`; the file says how.
- **nginx** — `try_files $uri $uri/ /index.html;`
- **GitHub Pages** — has no rewrite support; copy `index.html` to `404.html`
  after building, or switch to `HashRouter` in `src/main.jsx`.

## Structure

```
src/
├── components/
│   ├── layout/     Navbar, Footer, Logo, ScrollToTop
│   ├── sections/   One component per page section
│   ├── ui/         Button, Card, Grid, Section, SectionHeading, Figure, Icon, Reveal
│   └── dev/        Development-only content checklist (hides itself when complete)
├── data/
│   ├── companyData.js      Company facts — the file to edit first
│   ├── pagesData.js        Long-form copy for the individual pages
│   └── sectionRegistry.js  Which home-page sections have content
├── hooks/          Reveal, count-up, active section, scroll lock, meta, hash scroll
├── pages/          Home plus one component per route
├── styles/
│   ├── tokens.css  Design system — brand colours sampled from the profile PDF
│   └── base.css    Reset, base elements, focus, utilities
├── assets/         Logo, photography, client logos and certificates from the PDF
├── App.jsx
└── main.jsx
```

Routing is React Router. Styling is plain CSS Modules — no CSS framework. All
design decisions route through the custom properties in `tokens.css`.

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
