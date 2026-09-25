# CLAUDE.md — Bold Productions

## Project

Herbouw van de website van **Bold Productions** (videoproductie voor events, artiesten en zakelijke events) in Astro. De huidige site draait op Webflow en is traag. Het doel is een **pixel-getrouwe, veel snellere** versie.

- Fase 1: alleen de homepage, als proef. Daarna volgen ~40 pagina's die grotendeels dezelfde secties gebruiken met andere inhoud. Bouw daarom alles herbruikbaar.
- Referentie: https://www.weareboldproductions.com/ (live) en https://boldproductions.webflow.io/ (staging, identiek).
- Webflow-HTML wordt **niet** geëxporteerd of gekopieerd. Bouw schone, semantische componenten.
- Bronnen in `reference/`: `webflow-custom-head.html` (custom CSS), `webflow-custom-footer.html` (custom JS), `rook-web.mp4` (rookvideo, in gebruik als `public/video/rook.mp4`).
- Inventaris van de homepage: `docs/homepage-secties.md`.
- Stack: Astro (static), TypeScript strict, gewone CSS (tokens + scoped), `gsap` + ScrollTrigger, `lenis`, `split-type`. Hosting: Cloudflare Pages.

## Commando's

```sh
npm run dev             # dev-server, http://localhost:4321
npm run build           # astro check + astro build → dist/
npm run preview         # dist/ serveren
npm run compare         # screenshots live vs. lokaal (375/768/1440) → compare/index.html
                        #   opties: -- --path=/events --widths=375,1440 --no-build
npm run deploy:preview  # build + wrangler pages deploy (branch preview)
```

`?static=1` achter een URL zet Lenis en alle animaties uit (gebruikt door compare).

## Regels

1. **Gebruik altijd bestaande componenten en tokens.** Maak geen nieuw component als een bestaand component met een extra prop of variant volstaat. Twijfel je? Vraag het.
2. **Geen hardcoded kleuren, font-sizes of spacing** buiten `src/styles/tokens.css`. Componenten gebruiken alleen `var(--…)`. Nieuwe waarde nodig? Voeg eerst een token toe.
3. **Eerst de styleguide.** Nieuwe componenten of varianten komen eerst op `/styleguide` (`src/pages/styleguide.astro`), daarna pas op een pagina. Elke sectie staat daar met voorbeeldprops.
4. **Teksten letterlijk** overnemen van de live site (Nederlands). Niets herschrijven, ook geen typfouten "verbeteren" zonder overleg.
5. **Inhoud in `src/data/`** (of later content collections), nooit in componenten. Componenten krijgen alles via props.
6. **URL-structuur identiek aan de live site**, zonder trailing slash (bijv. `/events/aftermovie`, `/cases/[slug]`). `build.format: 'file'` + `trailingSlash: 'never'`.
7. **Performance (harde eisen):**
   - Doel: Lighthouse mobiel 90+.
   - Hero-afbeelding `loading="eager"` + `fetchpriority="high"` (en preload via `BaseLayout` `preloadImage`). Alle andere afbeeldingen `loading="lazy"`.
   - Afbeeldingen via `astro:assets` (`<Image>`/`<Picture>`) met AVIF + WebP en passende `widths`/`sizes`. Bronnen in `src/assets/`.
   - Hero-Vimeo pas na `window.load` inladen. De hero-afbeelding is de poster. Op mobiel alleen op de homepage.
   - Overige Vimeo-iframes `loading="lazy"`. **Geen** Vimeo `player.js`.
   - Rookvideo: `muted loop playsinline preload="none"` + poster, pas laden/afspelen via IntersectionObserver.
   - Geen render-blocking third-party CSS/JS in `<head>`. Geen jQuery, geen reCAPTCHA, geen Font Awesome.
   - **Eén JS-bundel per pagina**: alle interacties via `src/scripts/main.ts`. Modules initialiseren alleen als hun elementen bestaan (`data-*`-hooks). Geen losse `<script>`-blokken in componenten.
   - Respecteer `prefers-reduced-motion` en `?static=1` (`src/scripts/env.ts` → `motionEnabled`).
   - Bestanden in `public/fonts/` en `public/video/` worden een jaar immutable gecachet. Vervang je zo'n bestand, **geef het dan een nieuwe naam**.
8. **Na elke sectie:** `npm run build` moet slagen en `npm run compare` draaien. Benoem wat nog afwijkt.
9. **Geen nieuwe dependencies** zonder toestemming.
10. Tracking (GTM-KCTG3DST, CookieFirst) komt later via `components/layout/Analytics.astro`, alleen als `PUBLIC_ENABLE_TRACKING === 'true'`.
11. `/styleguide` is `noindex` en hoort niet in een sitemap (als die er komt: uitsluiten).

## Conventies

- **Accentkleur per doelgroep** via `data-accent="orange|yellow|green"` op een voorouder (body via `BaseLayout accent`). Componenten gebruiken `--accent`, `--accent-light`, `--accent-gradient`. Dit vervangt de Webflow-`w-variant-*`-klassen.
- **Breakpoints** (Webflow, desktop-first): `max-width: 991px`, `767px`, `479px` en `min-width: 1280px`, `1440px`, `1920px`. Letterlijk in media queries (custom properties werken daar niet).
- **Scoped styles** per component. Wil je een child-component stylen (bijv. `<Icon>` in `<Button>`)? Gebruik `.parent :global(.child-class)`.
- **Scroll-in-animatie**: zet `data-animate` op een element (Webflow: `.animate-on-scroll`).
- Regeleinden in titels: `\n` in de data. `Heading` zet dat om naar `<br>`.
- Fonts: Gate 400 normal/italic (Webflow-300 → 400), Inter variabel 300–700 (Webflow-400/600/800 → 300/500/700). Gebruik `--fw-light|medium|bold|display`.

## Structuur

```
src/
  layouts/BaseLayout.astro      head/meta, fonts-preload, Header, Footer, main.ts
  components/ui/                basiscomponenten
  components/layout/            Header, Footer, Analytics (en later MegaMenu, MenuPanel)
  components/sections/          één component per sectie, alle inhoud via props
  data/                         home.ts, navigation.ts (inhoud)
  lib/                          helpers (text.ts, tokens.ts)
  scripts/                      main.ts (entry) + modules
  styles/tokens.css, global.css
  pages/index.astro, styleguide.astro
public/fonts, public/video, public/favicons, public/_headers
scripts/compare.mjs             visuele vergelijking
docs/homepage-secties.md        inventaris homepage
```

## Componentenoverzicht

Houd dit bij bij elk nieuw component.

### UI (`src/components/ui/`)

| Component              | Uitleg                                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| `Button.astro`         | Link of knop. Varianten `primary`/`outline`/`ghost`, groottes `small`/`default`/`large`, `accent`, `icon`, `iconOnlyOnMobile`. |
| `Icon.astro`           | Inline SVG-icoon uit het register in `icons.ts` (pijlen, chevron, menu, close, quote, WhatsApp, socials).  |
| `icons.ts`             | Iconenregister (paden + viewBox). Nieuwe iconen hier toevoegen.                                            |
| `Container.astro`      | Horizontale container: `default` (max-breedte per breakpoint) of `wide` (volle breedte, ruime goot).       |
| `Eyebrow.astro`        | Kleine kop in Gate met ruime letterspatiëring (Webflow `.subtitle`).                                       |
| `Heading.astro`        | Displaykop in Gate. `as` (semantiek) los van `size`, optioneel `gradient`, `align`, `flush`.               |
| `SectionHeading.astro` | Gecentreerde eyebrow + h2 met gradient (Webflow `.section-heading`).                                       |

### Layout (`src/components/layout/`)

| Component          | Uitleg                                                                      |
| ------------------ | --------------------------------------------------------------------------- |
| `Header.astro`     | _Placeholder_: navigatiebalk met dropdowns, CTA en menuknop (stap 7).       |
| `Footer.astro`     | _Placeholder_: footer met kolommen, contact, socials, juridisch (stap 7).   |
| `Analytics.astro`  | GTM + CookieFirst, alleen bij `PUBLIC_ENABLE_TRACKING=true` (TODO).         |

### Secties (`src/components/sections/`)

_Nog geen. Zie `docs/homepage-secties.md` voor de geplande secties._

### Scripts (`src/scripts/`)

| Module                 | Uitleg                                                                     |
| ---------------------- | -------------------------------------------------------------------------- |
| `main.ts`              | Enige entry. Registreert GSAP-plugins en start alle modules.              |
| `env.ts`               | `isStatic`, `prefersReducedMotion`, `motionEnabled`.                       |
| `lenis.ts`             | Lenis smooth scroll gekoppeld aan GSAP ticker/ScrollTrigger; `scrollToTarget`. |
| `scroll-animations.ts` | `[data-animate]` fade-in-up (top 70%, eenmalig) en anchor-links met offset. |
