# Sanity CMS — proefopzet (alleen homepage)

Branch: `feature/sanity-cms` (los van `main`, de site verandert daar niet door).
Zolang `PUBLIC_SANITY_PROJECT_ID` niet gezet is, gebruikt de site gewoon
`src/data/home.ts` — lokaal werken zonder Sanity-account blijft dus werken.

## Wat hier staat

- `studio/` — een losse Sanity Studio-app (eigen `package.json`, niet gekoppeld
  aan de Astro-build). Schema in `studio/schemaTypes/`:
  - `homepage` — één document (singleton) met alle homepage-secties.
  - `testimonial`, `clientLogo` — herbruikbare content, met een referentielijst
    per sectie (net als `pickTestimonials()` nu in `src/data/testimonials.ts`).
  - `richText` — Sanity's Portable Text, maar beperkt tot wat de site kan
    renderen: paragrafen, bullet-lijsten, vet/cursief, links.
- `src/lib/sanity/` — Astro-kant:
  - `client.ts` — maakt alleen een client aan als er een project-ID is.
  - `portableText.ts` — zet Portable Text om naar het bestaande Rich-model
    (`src/lib/rich.ts`), zodat `RichText.astro` niet hoeft te weten waar de
    tekst vandaan komt.
  - `image.ts` — geeft Sanity-afbeeldingen door aan `astro:assets`
    (`<Picture>`/`<Image>`), net als een lokale import: AVIF/WebP, `widths`,
    `sizes`. Geen aparte Sanity-beeldpipeline.
  - `homepage.ts` — haalt het `homepage`-document op en zet het om naar
    precies de vorm van `src/data/home.ts`.
- `src/pages/index.astro` — gebruikt Sanity-inhoud als die er is, anders
  `src/data/home.ts`.
- `scripts/sanity-seed.mjs` — zet de huidige homepage-inhoud en -foto's in één
  keer over naar Sanity, zodat Studio niet leeg is.

## Zelf opzetten (eenmalig)

1. **Account en project** (in de browser, kan niet vanuit hier):
   ```
   cd studio
   npx sanity login
   npx sanity init --project-id-only   # of: maak een project aan op sanity.io/manage
   ```
   Dat geeft een project-ID. Kies dataset `production`.

2. **`.env`** in de root van de repo (kopieer `.env.example`):
   ```
   PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
   PUBLIC_SANITY_DATASET=production
   SANITY_API_WRITE_TOKEN=...   # sanity.io/manage → API → Tokens → Editor-rechten
   ```

3. **Bestaande homepage overzetten:**
   ```
   npm run sanity:seed
   ```

4. **Studio lokaal bekijken:**
   ```
   cd studio && npm run dev
   ```
   → `http://localhost:3333`, log in met hetzelfde Sanity-account.

5. **Site met Sanity-inhoud bekijken:** gewone `npm run dev` in de root
   (met `.env` gezet) — de homepage komt dan uit Sanity.

6. **Studio online zetten** (zodat de klant erbij kan zonder lokaal iets te
   draaien):
   ```
   cd studio && npx sanity deploy
   ```
   Kiest een naam, bijv. `bold-productions` → `bold-productions.sanity.studio`.

7. **Klant toegang geven:** sanity.io/manage → project → Members → uitnodigen
   op e-mailadres, rol **Editor** (kan inhoud bewerken, geen schema/instellingen).

## Niet meegenomen in deze proef

- Alleen de homepage. Andere pagina's (bijv. `/events`) blijven op
  `src/data/`.
- Geen automatische rebuild van Cloudflare Pages bij "Publiceren" in Sanity
  (een GitHub Action of Sanity-webhook → Cloudflare Deploy Hook). Nu moet na
  een wijziging in Sanity handmatig `npm run deploy:preview` gedraaid worden.
- Geen live-preview (klikken op de site om te bewerken). Kan later met
  Presentation Tool, vraagt extra opzet.
