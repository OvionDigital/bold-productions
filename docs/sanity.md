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
  - `image.ts` — bouwt Sanity CDN-URL's (`?w=&auto=format&q=`) i.p.v.
    `astro:assets`. **Bewuste afwijking van regel 7** (die vraagt om
    astro:assets AVIF/WebP): Astro's build-pipeline schrijft verwerkte
    varianten van een externe URL naar een pad dat die URL naspiegelt
    (`dist/https:/cdn.sanity.io/…`), en dat breekt `astro build` op Windows
    (`:` is geen geldig teken in een pad). Sanity's eigen CDN serveert zelf al
    AVIF/WebP op basis van de `Accept`-header, dus het resultaat is
    gelijkwaardig. Lokale afbeeldingen (`src/data/*.ts`, alle andere
    pagina's) blijven gewoon via `astro:assets` lopen.
  - `homepage.ts` — haalt het `homepage`-document op en zet het om naar
    precies de vorm van `src/data/home.ts`.
- `src/components/ui/CmsPicture.astro` — drop-in i.p.v. `<Picture>` in de
  secties/UI-componenten die Sanity-content kunnen krijgen (Hero heeft zijn
  eigen variant met art-direction). Kiest zelf lokaal (astro:assets) of
  Sanity (handmatige srcset). Zet bewust **geen** `width`/`height`-attributen
  op de `<img>` voor Sanity-bronnen: die triggeren een Chromium-flexbugbug
  waarbij `aspect-ratio` genegeerd wordt in een auto-height flex-kolom
  (zoals bij Timeline) en de afbeelding op zijn volledige, vaak zeer grote
  brongrootte rendert. Een inline `aspect-ratio` reserveert de ruimte
  zonder die bug te triggeren.
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
