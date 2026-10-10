# Sanity CMS

Branch: `feature/sanity-cms`.
Zolang `PUBLIC_SANITY_PROJECT_ID` niet gezet is, gebruikt de site gewoon
`src/data/` en worden er geen CMS-pagina's gebouwd — lokaal werken zonder
Sanity-account blijft dus werken.

Alle pagina's van de live site staan in Sanity (gevuld met `npm run sanity:seed`
vanuit `src/data/`). Wat de klant in Studio kan:

- **Homepage** aanpassen (vaste opbouw, alle teksten en beelden).
- **Pagina's** (alle doelgroep-, dienst-, SEO-, contact- en juridische pagina's)
  bewerken, en nieuwe pagina's toevoegen uit de bestaande secties: Hero,
  kruimelpad, logostrip, introtekst, tekst, tekst + beeld/video of formulier,
  tijdlijn, testimonials, polaroids, uitgelichte case, brede foto/video,
  beeldtegels, team, FAQ, contactblok, kaart, casesoverzicht en linkoverzicht
  (sitemap, met optioneel een automatische groep met alle cases). Volgorde slepen,
  secties toevoegen/verwijderen, alle inhoud bewerken. Header, menu, footer en
  WhatsApp-knop staan er automatisch omheen. De pagina met URL-pad `404` is de
  foutpagina (wordt `404.html`, die Cloudflare Pages bij onbekende paden toont).
- **Cases** beheren: kaartgegevens (titel, intro, foto, doelgroepen, diensten,
  klant, datum) en de inhoud van de casepagina (`/cases/<slug>`): introtekst en
  vrije secties. Kop, kruimelpad en feitenbalk komen automatisch uit de
  kaartgegevens. Het casesoverzicht en "Uitgelichte case" lezen dezelfde cases.
- **Testimonials, klantlogo's en teamleden** beheren; secties kiezen daaruit.

## Hoe het werkt

- `studio/` — losse Sanity Studio-app (eigen `package.json`). Schema in
  `studio/schemaTypes/`:
  - `documents/homepage` — singleton met de homepage-secties.
  - `documents/page` — vrije pagina: naam, URL-pad, accentkleur, SEO en een
    lijst `sections`.
  - `sections/` — één bloktype per sectiecomponent (`heroSection`,
    `textMediaSection`, …). Velden = props van het component.
  - `documents/caseStudy` — case: kaartgegevens + inhoud van de casepagina.
  - `documents/testimonial`, `clientLogo`, `teamMember` — herbruikbare inhoud.
  - `objects/richText` — Portable Text, beperkt tot wat `src/lib/rich.ts` kan
    renderen (paragrafen, tussenkoppen, opsommingen, citaat, vet/cursief,
    links, Vimeo-video).
- `src/lib/sanity/`:
  - `client.ts` — client alleen met project-ID; **zonder API-CDN** zodat een
    build direct na "Publiceren" de nieuwste inhoud ziet.
  - `sections.ts` — GROQ-projectie + mapper per bloktype → props van de
    bestaande componenten. Blok met ontbrekende verplichte inhoud (bijv.
    verwijderde testimonial) wordt overgeslagen met een waarschuwing in de
    build-log; de build faalt er niet op.
  - `pages.ts` — haalt alle `page`- en `caseStudy`-documenten op (één query).
    `src/lib/pages.ts` voegt kruimelpad en deelafbeelding toe (eigen keuze of
    hero-foto) en valt terug op `src/data/` als Sanity niet geconfigureerd of
    leeg is.
  - `homepage.ts`, `portableText.ts`, `image.ts` — zie de commentaren.
- `src/pages/[...slug].astro` — bouwt elke pagina en elke case statisch, via
  `components/sections/PageSections.astro`. Vaste pagina's in `src/pages/`
  (alleen nog `styleguide`; de homepage heeft een eigen document) gaan voor;
  Studio weigert die paden ook (`RESERVED_SLUGS` in `page.ts` ↔ `STATIC_PAGES`
  in `pages.ts`, gelijk houden).
- Afbeeldingen uit Sanity lopen via Sanity's CDN (`?w=&auto=format`), niet via
  astro:assets: Astro schrijft verwerkte externe beelden naar een pad dat de
  URL naspiegelt (`dist/https:/…`), wat op Windows breekt. De CDN serveert zelf
  AVIF/WebP. Zie `src/lib/sanity/image.ts` en `CmsPicture.astro`.
- `scripts/sanity-seed.ts` (`npm run sanity:seed`) — zet de inhoud uit
  `src/data/` over naar Sanity: homepage, pagina's, cases, teamleden,
  testimonials, logo's, inclusief upload van beelden en team-video's. Leest de
  TypeScript-data rechtstreeks (Node-loader in `scripts/sanity/`, Node ≥ 22.18).
  Maakt alleen aan wat nog niet bestaat en vult lege velden aan (aanpassingen
  van de klant blijven staan); `--force` overschrijft, `--dry-run` controleert
  alles zonder te schrijven, `--only=<id>[,<id>]` beperkt het tot die documenten
  (bijv. `--force --only=page-sitemap` om één pagina opnieuw te zetten).

### Nieuw bloktype toevoegen

1. Component bestaat al (of eerst bouwen + op `/styleguide`).
2. Schema in `studio/schemaTypes/sections/` + opnemen in `sections/index.ts`.
3. Projectie + mapper in `src/lib/sanity/sections.ts`, regel in
   `PageSections.astro`.
4. `npm run build` en Studio opnieuw deployen (`cd studio && npx sanity deploy`).

### Controleren

Een Sanity-pagina is pixel-gelijk te controleren tegen een handgebouwde:
`npm run compare -- --path=/mijn-pagina --against=/events --no-build`.
(Getest: `/events` volledig nagebouwd uit blokken → 0,05–0,12% verschil,
alleen herschaling van foto's.)

Na de seed is de build uit Sanity vergeleken met de build uit `src/data/`: op
alle pagina's en cases is de tekst identiek en de HTML-structuur gelijk (alleen
`<picture>` lokaal tegenover `<img srcset>` van de Sanity-CDN).

## Online zetten (eenmalig)

Er draait niets op localhost: de klant werkt in de online Studio, en de site
wordt na elke publicatie automatisch opnieuw gebouwd en op Cloudflare Pages
gezet.

```
Klant klikt "Publiceren" in bold-productions.sanity.studio
  → Sanity-webhook → GitHub (repository_dispatch "sanity-publish")
  → .github/workflows/deploy.yml: npm ci, npm run build, wrangler pages deploy
  → site bijgewerkt (± 2 minuten)
```

### 1. Studio online (`bold-productions.sanity.studio`)

```
cd studio
npx sanity login        # browser, met het account dat eigenaar is van het project
npx sanity deploy       # studioHost staat in sanity.cli.ts
```

`studio/.env` moet `SANITY_STUDIO_PROJECT_ID` en `SANITY_STUDIO_DATASET` bevatten
(worden in de build meegenomen). Na een schemawijziging opnieuw `npx sanity deploy`.

**Klant toegang geven:** sanity.io/manage → project → Members → uitnodigen op
e-mailadres, rol **Editor** (inhoud bewerken en publiceren, geen instellingen).

### 2. Code op GitHub

Het Cloudflare-project `bold-productions` is een "Direct Upload"-project; het
deployen gebeurt dus vanuit een GitHub Action met wrangler (geen Git-koppeling
in Cloudflare nodig).

```
git remote add origin git@github.com:<org>/bold-productions.git
git push -u origin main feature/sanity-cms
```

In de repository op GitHub, **Settings → Secrets and variables → Actions**:

| Soort    | Naam                       | Waarde                                                              |
| -------- | -------------------------- | ------------------------------------------------------------------- |
| Secret   | `CLOUDFLARE_API_TOKEN`     | Cloudflare → My Profile → API Tokens → template "Edit Cloudflare Workers" (of custom: Account → Cloudflare Pages → Edit) |
| Secret   | `CLOUDFLARE_ACCOUNT_ID`    | Cloudflare-dashboard, rechterkolom bij Workers & Pages              |
| Variable | `PUBLIC_SANITY_PROJECT_ID` | `6ifqq11f`                                                          |
| Variable | `PUBLIC_SANITY_DATASET`    | `production`                                                        |
| Variable | `DEPLOY_REF`               | branch die gebouwd wordt, bijv. `feature/sanity-cms` (standaard `main`) |
| Variable | `CF_PAGES_BRANCH`          | Pages-branch: `preview` (standaard) of `main` voor productie        |
| Variable | `PUBLIC_CONTACT_ENDPOINT`  | optioneel, zie README                                               |

Testen: **Actions → Deploy → Run workflow**. De site staat daarna op
`https://<CF_PAGES_BRANCH>.bold-productions.pages.dev` (of het productiedomein).

### 3. Sanity-webhook → GitHub

1. GitHub → Settings → Developer settings → **Fine-grained personal access
   token**, alleen voor deze repository, permissie **Contents: Read and write**
   (nodig voor `repository_dispatch`).
2. sanity.io/manage → project → API → **Webhooks → Create webhook**:
   - URL: `https://api.github.com/repos/<org>/bold-productions/dispatches`
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - Filter: `_type in ["homepage", "page", "testimonial", "clientLogo", "caseStudy", "teamMember"]`
   - Projection: `{"event_type": "sanity-publish"}`
   - HTTP method: POST
   - HTTP headers: `Authorization: Bearer <token uit stap 1>`,
     `Accept: application/vnd.github+json`
   - Drafts: **uit** (alleen gepubliceerde wijzigingen)
3. Iets publiceren in Studio → in GitHub → Actions verschijnt een Deploy-run.

Snel achter elkaar publiceren is geen probleem: de workflow annuleert een
lopende build en bouwt alleen de nieuwste.

## Nog niet meegenomen

- Menu en footer zijn niet via Sanity te bewerken (`src/data/navigation.ts`).
  Nieuwe pagina's verschijnen dus niet vanzelf in het menu.
- Formulieren (velden en teksten, `src/data/forms.ts`) zijn niet via Sanity te
  bewerken; per blok kies je wel welk formulier (contact, offerte, trouwfilm)
  en de placeholder van het berichtveld.
- Geen live-preview van concepten (Presentation Tool); de klant ziet het
  resultaat na publiceren (± 2 minuten).
- Een pagina of case die in Studio wordt verwijderd, verdwijnt bij de volgende
  build van de site. Links ernaartoe (menu, footer, tegels) worden niet
  automatisch aangepast.
- SVG-logo's: Sanity schrijft `&lt;` in attributen terug als `<`, waardoor zo'n
  SVG kapotgaat (gebeurde met Bospop: Illustrator-id's als `id="<Group>"`).
  Bij een kapot logo: SVG zonder zulke id's opnieuw uploaden, of een PNG.
