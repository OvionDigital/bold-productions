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
                        #   diffGedeeld = verschil binnen de hoogte van de kortste pagina
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
10. Contactformulier: backend nog niet gekozen (TODO), zie README. Tracking (GTM-KCTG3DST, CookieFirst) komt later via `components/layout/Analytics.astro`, alleen als `PUBLIC_ENABLE_TRACKING === 'true'`.
11. `/styleguide` is `noindex` en hoort niet in een sitemap (als die er komt: uitsluiten).

## Conventies

- **Accentkleur per doelgroep** via `data-accent="orange|yellow|green"` op een voorouder (body via `BaseLayout accent`). Componenten gebruiken `--accent`, `--accent-light`, `--accent-gradient`. Dit vervangt de Webflow-`w-variant-*`-klassen.
- **Breakpoints** (Webflow, desktop-first): `max-width: 991px`, `767px`, `479px` en `min-width: 1280px`, `1440px`, `1920px`. Letterlijk in media queries (custom properties werken daar niet).
- **Scoped styles** per component. Wil je een child-component stylen (bijv. `<Icon>` in `<Button>`)? Gebruik `.parent :global(.child-class)`.
- **Sectie-afstand: 192px tussen secties.** Secties zonder eigen achtergrond krijgen `margin-block: var(--section-space)` (marges vallen samen, dus precies 192 ertussen, niet 2×192); secties mét eigen achtergrond (Testimonials) krijgen `padding-block: var(--section-padding)` zodat de achtergrond 192 boven/onder de inhoud doorloopt. Uitzonderingen: LogoMarquee 96 boven (direct onder de hero), Footer 96 padding (≤767 48).
- **Scroll-in-animatie**: zet `data-animate` op een element (Webflow: `.animate-on-scroll`). `data-animate-stagger` op een groep laat de directe kinderen één voor één binnenkomen (`--stagger-step`); `data-animate-skip` sluit een kind uit (bijv. achtergrondlaag). `Container` geeft `data-*`-attributen door.
- **Paginaovergang**: zwart gordijn via native cross-document View Transitions (`@view-transition` in global.css, tokens `--duration-curtain`/`--ease-curtain`). Geen JS, geen dependency; uit bij prefers-reduced-motion.
- **Cursor**: driehoekje via tokens `--cursor-default`/`--cursor-pointer` (alleen `hover: hover` + `pointer: fine`). Zelf `cursor:` zetten? Gebruik die tokens. Cookiepanelen en `[data-native-cursor]` krijgen de systeemcursor.
- Regeleinden in titels: `\n` in de data. `Heading` zet dat om naar `<br>`.
- **Gedeelde inhoud** staat in eigen databestanden en wordt op id gekozen: `src/data/testimonials.ts` (`pickTestimonials`), `src/data/logos.ts`, `src/data/cases.ts`. Nooit kopiëren per pagina.
- Opgemaakte tekst in data: het model uit `src/lib/rich.ts` (geen HTML-strings), renderen met `RichText`.
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
| `Button.astro`         | Link of knop. Varianten `primary`/`outline`/`ghost`, groottes `compact`/`small`/`default`/`large`, `accent`, `icon`, `iconExpanded` (bij aria-expanded), `iconOnlyOnMobile`. |
| `RichText.astro`       | Rendert rich text uit `lib/rich.ts` (p/ul, strong/em/br); `size="lead"`, `plain`.                        |
| `RichInline.astro`     | Inline-segmenten (strong/em/br) zonder extra witruimte; gebruikt door RichText.                             |
| `Icon.astro`           | Inline SVG-icoon uit het register in `icons.ts` (pijlen, chevron, menu, close, quote, WhatsApp, socials).  |
| `icons.ts`             | Iconenregister (paden + viewBox). Nieuwe iconen hier toevoegen.                                            |
| `Container.astro`      | Horizontale container: `default` (max-breedte per breakpoint), `plain` (idem, maar vol 992–1279) of `wide` (volle breedte, ruime goot). |
| `Eyebrow.astro`        | Kleine kop in Gate met ruime letterspatiëring (Webflow `.subtitle`).                                       |
| `Heading.astro`        | Displaykop in Gate. `as` (semantiek) los van `size`, optioneel `gradient`, `align`, `flush`.               |
| `SectionHeading.astro` | Gecentreerde eyebrow + h2 met gradient (Webflow `.section-heading`), optioneel `text` eronder; `spacing` default/compact/none. |
| `BackgroundVideo.astro`| Rookvideo als decoratieve laag: poster (AVIF/WebP) + lazy `<video>` (gedrag: `background-video.ts`).    |
| `Carousel.astro`       | Scroll-snap-carousel met pijlknoppen (Owl-instellingen 1/1/2/3), items lijnen uit op de container.     |
| `TestimonialCard.astro`| Kaart met foto, quote (Gate italic), oranje lijn en naam – organisatie (beide optioneel).             |
| `Polaroid.astro`       | Foto met witte polaroidrand, schaduw, kanteling (`--polaroid-rotate`) en optionele caption.            |
| `VimeoEmbed.astro`     | Vimeo-iframe met vaste verhouding, loading=lazy, optioneel background-modus.                            |
| `DecoTriangles.astro`  | Zes oranje driehoekjes rond een beeld (structuur exact als Webflow).                                    |
| `CaseCard.astro`       | Casekaart: foto, diagonale gradient, titel + intro, link naar /cases/[slug].                              |
| `ContactForm.astro`    | Contactformulier (velden uit data), honeypot, succes/fout; verzenden via `contact-form.ts` naar `PUBLIC_CONTACT_ENDPOINT`. |
| `VimeoBackground.astro`| Vimeo-achtergrondvideo (cover). Laadt na window.load, fadet in bij 'play' (gedrag: `hero-video.ts`).    |

### Layout (`src/components/layout/`)

| Component          | Uitleg                                                                      |
| ------------------ | --------------------------------------------------------------------------- |
| `Header.astro`     | Vaste navigatiebalk: logo, MegaMenu, CTA en menuknop (+ MenuPanel). Verbergt bij scrollen omlaag, verschijnt bij scrollen omhoog (gedrag: `navbar-autohide.ts`). |
| `Breadcrumbs.astro` | Kruimelpad onder de hero (home-icoon, stappen, huidige pagina).          |
| `MegaMenu.astro`   | Desktop-dropdowns (≥1280px), CSS hover/focus-within.                        |
| `MenuPanel.astro`  | Volledig menupaneel met overlay en accordeongroepen (gedrag: `menu.ts`).     |
| `Footer.astro`     | Footer: linkkolommen (data), contact, logo + socials, juridische links, copyright. |
| `PageBackground.astro` | Textuur (AVIF, na window.load) + grote B-outlines achter de pagina; `shapes` instelbaar.   |
| `WhatsAppButton.astro` | Zwevende WhatsApp-knop rechtsonder.                                           |
| `Analytics.astro`  | GTM + CookieFirst, alleen bij `PUBLIC_ENABLE_TRACKING=true` (TODO).         |

### Secties (`src/components/sections/`)

| Component    | Uitleg                                                                                              |
| ------------ | --------------------------------------------------------------------------------------------------- |
| `Hero.astro` | Schermvullende hero: titel + italic accentregel, eyebrow, 2 knoppen, poster-afbeelding (LCP) en optionele Vimeo-video. |
| `LogoMarquee.astro` | Logostrip met kop tussen lijnen en eindeloze CSS-marquee van logo-tegels. |
| `IntroHighlight.astro` | Gecentreerde Gate-introtekst met groene accenten en scroll-highlight per letter. |
| `Timeline.astro` | Kop (titel + rich text) met genummerde stappen: foto + tekstblok met rookvideo (knop per stap optioneel), CTA; `reverse`, `gradient`. |
| `Testimonials.astro` | Kop + carousel met TestimonialCards over de volle breedte, rook- en B-achtergrond. |
| `PolaroidStack.astro` | Sticky kop + polaroids die bij scrollen over elkaar schuiven (pure CSS), gelijk aan live. |
| `TextMedia.astro` | Tekst naast beeld (2:3) of Vimeo (1:1); `reverse`, `triangles`, `spacing` (margin/section), `intro` erboven, slot `content` voor bv. een formulier; `id="cinema"` = popcorn-cursor. |
| `CaseSpotlight.astro` | Kop + één grote CaseCard; case op slug uit `src/data/cases.ts`. |
| `ImageFeature.astro` | Brede foto met gecentreerde titel + intro erover (mobiel eronder); `id="cinema"` = popcorn-cursor. |
| `ServiceTiles.astro` | Kop + tekst en staande beeldtegels (2:3) naar dienstpagina's; hover groeit, titel oranje. |
| `Faq.astro` | Veelgestelde vragen: accordeon (h3 + button) met FAQPage-structured data. |

### Scripts (`src/scripts/`)

| Module                 | Uitleg                                                                     |
| ---------------------- | -------------------------------------------------------------------------- |
| `main.ts`              | Enige entry. Registreert GSAP-plugins en start alle modules.              |
| `env.ts`               | `isStatic`, `prefersReducedMotion`, `motionEnabled`.                       |
| `lenis.ts`             | Lenis smooth scroll gekoppeld aan GSAP ticker/ScrollTrigger; `scrollToTarget`. |
| `scroll-animations.ts` | `[data-animate]` fade-in-up (top 70%, eenmalig), `[data-animate-stagger]` kinderen na elkaar (top 80%) en anchor-links met offset. |
| `hero-video.ts`        | Zet de Vimeo-src na window.load (mobiel alleen met loadOnMobile), fade-in via postMessage 'play'. |
| `scroll-highlight.ts`  | SplitType + ScrollTrigger scrub: letters van 15% naar 100% met gloed; `stagger` bepaalt de breedte van de gloed.      |
| `background-video.ts`  | IntersectionObserver: video-src zetten en afspelen in beeld, pauzeren erbuiten. |
| `carousel.ts`          | Pijlknoppen scrollen één item, disabled aan begin/eind; slepen met de muis (snap bij loslaten). |
| `cinema-cursor.ts`     | Popcorn-cursor + spoor, alleen bij een sectie met id="cinema" en een muis.  |
| `accordion.ts`         | Generiek accordeon: `[data-accordion-trigger]` + aria-controls, hoogte 0 ↔ auto (0,3 s). |
| `contact-form.ts`      | Formulier via fetch versturen, knop "Verzenden...", succes- of foutmelding.  |
| `menu.ts`              | Menupaneel openen/sluiten (GSAP), overlay, Escape, focus-trap, scroll-lock zonder de scrollbalk te verbergen (wiel/touch/toetsen blokkeren), accordeon. |
| `navbar-autohide.ts`   | Navbar verbergen/tonen op scrollrichting; blijft staan bovenaan, met open menu of bij focus erin. |
