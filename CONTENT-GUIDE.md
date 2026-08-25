# Content guide

All site content lives in one file: **`src/data/companyData.js`**. No component
contains company facts. Change that file and the site follows — sections appear
when they have content and disappear when they do not.

While `npm run dev` is running, a panel at the top of the page lists anything
still missing. It renders in development only and hides itself once nothing is
outstanding.

---

## 1. Source document → website mapping

The company profile PDF is 14 pages. Everything on the site comes from it:

| PDF page | Content | Where it appears |
| --- | --- | --- |
| 1 (cover) | Logo, tagline, "People / Knowledge / Innovation", licence and registration numbers, address, phone, email, URL | Hero, navbar, footer, contact |
| 2 | Message from Chairman — founding, registration, positioning | About, Leadership |
| 3 | Message from Managing Director | Leadership |
| 4 | Message from Director (Ambika Tamang) | Leadership |
| 5 | Message from Director (Bishnu Bahadur Gurung) | Leadership |
| 6 | Organisational structure chart; company profile table | Leadership, About, Contact |
| 7 | Mission, Vision, Values | Purpose & Principles |
| 8 | Six-step recruitment process | Recruitment Process |
| 9–11 | Twelve job categories and their roles | Job Categories |
| 12 | 23 client logos; documents required | Valued Clients; Documents required |
| 13 | Four certificates and licences | Licences & Certificates |
| 14 | About Nepal; back-cover contact details | About Nepal, Contact, Footer |

## 2. Corrections made to the source text

The profile contains some typographic errors. These were corrected because the
intended word is unambiguous; everything else is transcribed verbatim. Revert
any of these in `companyData.js` if you would rather keep the original.

| PDF | Site |
| --- | --- |
| Ex-Singapur Police | Ex-Singapore Police |
| Helves Rack Organizers | Shelf Rack Organizers |
| Security Personal | Security Personnel |
| Draft-Man | Draftsman |
| Auto Mobile | Automobile |
| Architecture (as a role) | Architect |
| Gulf(Carrier) | Golf (Carrier) |
| ZipsonWorker | Zipson Worker (spacing only — the intended trade is unclear, so the word is left as printed) |

Left exactly as printed because the intended meaning is genuinely uncertain:
**Sit Fitter** and **Sit Fabricator** (possibly "Site"), and **Velocy** under
Scaffolder. Check these against your own terminology.

## 3. Brand

`src/styles/tokens.css` holds the palette, all sampled from the PDF itself:

| Token | Value | Where it came from |
| --- | --- | --- |
| `--brand-700` | `#0071A7` | Section header banners, "Our Mission" labels |
| `--brand-400` | `#00A8CD` | Footer bars, cover tagline strip |
| `--brand-800` | `#05527A` | Cover background navy |
| `--brand-500` | `#00A0E3` | Logo wordmark on the company-profile page |
| `--accent-500` | `#F5821F` | The orange in "SKY" on the company-profile page |
| `--brand-100` | `#D4EEFC` | Pale panel tint |

Typefaces are the closest widely-available equivalents to the document's:
**Oswald** for the condensed all-caps banners, **Source Sans 3** for body text.
If you change them, update the Google Fonts `<link>` in `index.html` to match.

## 4. Assets

Everything in `src/assets/` was extracted from the PDF:

```
src/assets/
├── logo/            logo-full.png (complete lockup), logo-mark.png (bridge device)
├── hero/            hero-collage.jpg — the cover collage
├── about/           departure-hall.jpg, nepal-map.jpg
├── leadership/      three portraits (see the gap noted below)
├── categories/      one photograph per job category
├── certifications/  the four certificates from page 13
└── partners/        the 23 client logos from page 12
```

To replace an image, drop the new file in and update its `import` at the top of
`companyData.js`. Images are referenced by import, not by string path, so Vite
fingerprints and optimises them.

## 5. Still outstanding

- **No photograph for Ambika Tamang (Director).** Page 4 of the PDF has an
  empty image box. The card shows her initials instead of a substitute
  portrait. Drop a photo into `src/assets/leadership/` and wire it to
  `leadership.people[2].photo` when one is available.
- **`seo.siteUrl` and `seo.ogImage` are empty.** Set the deployed URL and a
  1200×630 share image so links preview correctly.
- **The contact form has no backend.** It validates and then offers a
  pre-filled `mailto:` link. Set `contact.formEndpoint` to a URL and the form
  will `POST` `{ name, email, phone, company, message }` as JSON instead.
- **No social media accounts** appear in the profile, so `socials` is empty and
  the footer omits that block.
- **No testimonials** appear in the profile, so there is no testimonials
  section. Do not add invented ones.
- **Business hours** are not stated in the profile; `contact.hours` is empty.
- **The PAN registration certificate** is published because it appears in the
  company's own profile document, but it carries a tax identification number
  and a personal photograph. Consider whether you want it on a public website —
  remove that entry from `certifications.items` if not.

## 6. Map

`contact.offices[0].mapQuery` holds the address string. The map uses Google's
keyless embed, which geocodes from that string, so no coordinates are stored.
To use the official Maps Embed API instead, swap the iframe `src` in
`src/components/sections/MapEmbed.jsx` for
`https://www.google.com/maps/embed/v1/place?key=YOUR_KEY&q=<mapQuery>`.
