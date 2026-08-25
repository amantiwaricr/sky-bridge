# Populating the site from the company profile PDF

All site content lives in **one file**: `src/data/companyData.js`. No component
contains company facts. Fill that file in and the site builds itself — sections
appear as soon as they have content and stay hidden until then.

Run `npm run dev` while you work: a yellow panel at the top of the page lists
everything still missing. It renders in development only.

---

## 1. Extract the assets

Export images from the PDF at the largest available resolution and save them
under `src/assets/`, using the existing folders:

```
src/assets/
├── logo/            logo.svg or logo.png  (also replace public/favicon.svg)
├── hero/            the strongest single visual in the PDF
├── about/           facility, team or context photo
├── services/        optional per-service imagery
├── products/        one image per product
├── projects/        one image per project or case study
├── certifications/  certificate scans (shown uncropped)
├── partners/        client and partner logos, ideally transparent PNG or SVG
└── team/            headshots, only if the PDF has them
```

Import them at the top of `companyData.js` and reference the import — not a
string path — so Vite fingerprints and optimises them:

```js
import heroImage from '../assets/hero/hero.jpg';

export const hero = {
  image: { src: heroImage, alt: 'Describe what the image shows' },
};
```

Every image takes `{ src, alt }`. Write real alt text describing the content;
leave `alt: ''` only for purely decorative images.

Any image slot left as `null` renders a labelled dashed placeholder, so an
unfinished page is obviously unfinished rather than broken.

## 2. Set the brand

In `src/styles/tokens.css`, replace the values in the `BRAND` block — the
`--brand-*` ramp, the `--accent-*` ramp, and the two font families. Sample the
colours directly from the PDF. Everything else in the file derives from those,
and no component hard-codes a colour, so this is the only place to edit.

If you change the fonts, update the Google Fonts `<link>` in `index.html` to
match, and keep a real fallback stack.

The current palette is a neutral navy/bronze placeholder. It is deliberately
restrained, but it is **not** the company's palette — replace it.

## 3. Fill in the content

Work top to bottom through `companyData.js`. Each export maps to one section:

| Data export     | Section                       |
| --------------- | ----------------------------- |
| `company`       | Navbar, footer, meta          |
| `seo`           | `<title>`, description, OG    |
| `hero`          | Hero                          |
| `stats`         | Statistics band               |
| `about`         | About                         |
| `missionVision` | Purpose & Principles          |
| `services`      | Services                      |
| `products`      | Products                      |
| `industries`    | Industries                    |
| `projects`      | Projects                      |
| `whyChooseUs`   | Why Choose Us                 |
| `certifications`| Certifications                |
| `partners`      | Clients & Partners            |
| `testimonials`  | Testimonials                  |
| `cta`           | Closing call to action        |
| `contact`       | Contact, form and map         |
| `socials`       | Footer social links           |
| `footer`        | Footer                        |

Rules that matter:

- **Never invent anything.** If the PDF does not state a figure, a client, a
  certification or a testimonial, leave it out. An empty array simply removes
  that section.
- **`stats` must be real numbers from the PDF.** `value` is numeric, `suffix`
  is the trailing character (`'+'`, `'%'`).
- **Trim the prose.** The PDF's paragraphs are usually too long for the web.
  Keep `about.body` paragraphs to two or three sentences and move concrete
  claims into `about.points`.
- **Icons** are referenced by name, e.g. `icon: 'shield'`. The available names
  are the keys of `ICONS` in `src/components/ui/Icon.jsx` — add more lucide
  imports there if the company's subject matter needs them.
- **`services[].group`** is optional. Set it on every service to render them in
  labelled groups instead of one long grid.
- Remove entries from `navigation` for any section the PDF cannot fill. The
  navbar already hides links whose sections did not render, but keeping the
  list tidy avoids confusion.

## 4. Wire up the contact form

There is no backend. Until one exists, the form validates input and then hands
the visitor a pre-filled `mailto:` link — it never claims to have sent
anything.

To connect a real endpoint, set:

```js
export const contact = { formEndpoint: 'https://your-endpoint.example/contact' };
```

The form then POSTs `{ name, email, phone, company, message }` as JSON and
reports success or failure from the response.

## 5. Map

Add a `mapQuery` to an office in `contact.offices` — the address as a plain
string — and the map renders. It uses OpenStreetMap's keyless embed and
geocodes from that string, so no coordinates are ever guessed.

To switch to Google Maps or Mapbox, replace the iframe `src` in
`src/components/sections/MapEmbed.jsx`; both accept the same address string
plus an API key.

## 6. Finish up

- Replace `public/favicon.svg` with the company mark.
- Set `seo.siteUrl` to the deployed URL and add an `ogImage` (1200×630).
- Update the placeholder `<title>` and `<meta name="description">` in
  `index.html` — those are the no-JavaScript fallbacks for crawlers.
- Delete `src/components/dev/ContentChecklist.jsx` and its render in
  `src/pages/Home.jsx` once the data file is complete.
- Run `npm run build` and `npm run lint` before deploying.
