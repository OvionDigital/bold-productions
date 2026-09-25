# Bold Productions — website (Astro)

Snelle, pixel-getrouwe herbouw van [weareboldproductions.com](https://www.weareboldproductions.com/) (nu Webflow) in Astro. Statisch gebouwd, gehost op Cloudflare Pages.

Werkafspraken, regels en het componentenoverzicht staan in [CLAUDE.md](CLAUDE.md). De inventaris van de homepage staat in [docs/homepage-secties.md](docs/homepage-secties.md).

## Vereisten

- Node.js ≥ 22.12 (getest met 23.9)
- Eenmalig voor `npm run compare`: `npx playwright install chromium`

## Commando's

| Commando                 | Wat het doet                                                          |
| ------------------------ | --------------------------------------------------------------------- |
| `npm install`            | Dependencies installeren                                              |
| `npm run dev`            | Dev-server op http://localhost:4321                                   |
| `npm run build`          | Typecheck (`astro check`) + productiebuild naar `dist/`               |
| `npm run preview`        | De build lokaal serveren                                              |
| `npm run compare`        | Screenshots live vs. lokaal (375/768/1440) → open `compare/index.html` |
| `npm run deploy:preview` | Bouwen en deployen naar Cloudflare Pages (branch `preview`)           |

Opties voor compare: `npm run compare -- --path=/events --widths=375,1440 --no-build`.

Voeg `?static=1` toe aan een URL om Lenis en alle animaties uit te zetten (zo maakt compare de screenshots).

## Deployen naar Cloudflare Pages

### De eerste keer (handmatig, via wrangler)

1. Inloggen bij Cloudflare (opent de browser):
   ```sh
   npx wrangler login
   ```
2. Project aanmaken (eenmalig):
   ```sh
   npx wrangler pages project create bold-productions --production-branch main --force
   ```
   `--force` is nodig omdat recente wrangler-versies nieuwe Pages-projecten anders naar Workers omleiden. Daarna niet meer gebruiken. (Het project bestaat al: aangemaakt op 25-09-2026.)
3. Deployen:
   ```sh
   npm run deploy:preview
   ```
   Wrangler toont de URL, bijvoorbeeld `https://preview.bold-productions.pages.dev`.

Zolang dit een preview is, stuurt `public/_headers` op alle paden `X-Robots-Tag: noindex` mee. Haal die regel weg bij livegang (er staat een TODO bij).

### Later: GitHub koppelen voor automatische previews

1. Zet de repository op GitHub (`git remote add origin …` en `git push -u origin main`).
2. Ga in het Cloudflare-dashboard naar **Workers & Pages → bold-productions → Settings → Builds**. Kies **Connect to Git** en selecteer de repository.
   - Een project dat met wrangler is gemaakt ("Direct Upload") kan niet altijd achteraf aan Git gekoppeld worden. Lukt het niet, maak dan een nieuw Pages-project via **Create → Pages → Connect to Git** en verwijder het oude.
3. Build-instellingen:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22` (of hoger)
4. Productiebranch: `main`. Elke push naar een andere branch en elke pull request krijgt een eigen preview-URL (`<branch>.bold-productions.pages.dev`).

## Omgevingsvariabelen

| Variabele                | Standaard | Betekenis                                                      |
| ------------------------ | --------- | -------------------------------------------------------------- |
| `PUBLIC_ENABLE_TRACKING` | `false`   | Laadt GTM en CookieFirst (nog niet geïmplementeerd, zie TODO) |

Zie `.env.example`.
