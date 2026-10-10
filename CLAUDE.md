# CLAUDE.md — Bold Productions

## Project

Herbouw van de website van **Bold Productions** (videoproductie voor events, artiesten en zakelijke events) in Astro. De huidige site draait op Webflow en is traag. Het doel is een **pixel-getrouwe, veel snellere** versie.

- Fase 1 (homepage) en fase 2 (alle overige pagina's van de live site, inclusief 13 cases en de juridische pagina's) zijn gebouwd. Elke pagina is een lijst herbruikbare secties; nieuwe pagina's bouw je uit dezelfde secties.
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
                        #   --against=/events: lokaal tegen lokaal (bijv. Sanity-pagina vs. handgebouwd)
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

## SEO

Overgenomen van de Webflow-site (SEO-specialist) en gecontroleerd tegen live: titels, metabeschrijvingen,
h1's, alt-teksten en alle structured data zijn gelijk. Opbouw:
- `BaseLayout`: canonical (www), OG/Twitter (vaste Bold-afbeelding `assets/seo/og-default.jpg`, cases hun
  casefoto, eigen keuze via `meta.ogImage`), `noindex` zonder nofollow, JSON-LD via `structuredData`.
- `lib/structured-data.ts`: Person (Mike) + ProfessionalService op elke pagina; per pagina `meta.schema`
  (`service` met serviceType/OfferCatalog, `webpage`, `contact`, `profile`); homepage WebSite + Reviews;
  BreadcrumbList. FAQPage zit in `Faq.astro` (uit de zichtbare vragen), VideoObject in `VimeoEmbed`.
- In Sanity: pagina → Instellingen & SEO → "Soort pagina (voor Google)".
- `public/_headers`: noindex alleen op `*.pages.dev`; HSTS en andere beveiligingsheaders.

## Conventies

- **Accentkleur per doelgroep** via `data-accent="orange|yellow|green"` op een voorouder (body via `BaseLayout accent`). Componenten gebruiken `--accent`, `--accent-light`, `--accent-gradient`. Dit vervangt de Webflow-`w-variant-*`-klassen.
- **Breakpoints** (Webflow, desktop-first): `max-width: 991px`, `767px`, `479px` en `min-width: 1280px`, `1440px`, `1920px`. Letterlijk in media queries (custom properties werken daar niet).
- **Scoped styles** per component. Wil je een child-component stylen (bijv. `<Icon>` in `<Button>`)? Gebruik `.parent :global(.child-class)`.
- **Sectie-afstand: 192px tussen secties, ≤767px 64px.** Secties zonder eigen achtergrond krijgen `margin-block: var(--section-space)` (marges vallen samen, dus precies 192/64 ertussen, niet 2×); secties mét eigen achtergrond (Testimonials) krijgen `padding-block: var(--section-padding)` zodat de achtergrond 192/64 boven/onder de inhoud doorloopt. Uitzonderingen: LogoMarquee 96 boven (direct onder de hero, ook op mobiel), Footer 96 padding (≤767 48).
- **Scroll-in-animatie**: zet `data-animate` op een element (Webflow: `.animate-on-scroll`). `data-animate-stagger` op een groep laat de directe kinderen één voor één binnenkomen (`--stagger-step`); `data-animate-skip` sluit een kind uit (bijv. achtergrondlaag). `Container` geeft `data-*`-attributen door.
- **Paginaovergang**: diagonale veeg (linksonder → rechtsboven) met een oranje band tussen oude en nieuwe pagina, via native cross-document View Transitions (`@view-transition` in global.css, tokens `--duration-page-sweep`/`--page-sweep-lag`/`--ease-curtain`). Geen JS, geen dependency; uit bij prefers-reduced-motion.
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
  data/                         home.ts, navigation.ts, cases.ts, team.ts, forms.ts, seo.ts (organisatie/Mike/reviews), …
  data/pages/                   één bestand per pagina (PageData), opgesomd in data/pages/index.ts
  data/case-pages/              inhoud (introtekst + secties) per case, gekoppeld in data/cases.ts
  lib/                          helpers (text.ts, tokens.ts, rich.ts, vimeo.ts), structured-data.ts (JSON-LD), sections.ts (PageData/PageSection),
                                pages.ts (alle pagina's: Sanity of src/data), cases.ts (casepagina-opbouw),
                                lib/sanity/ (CMS-koppeling, zie hieronder)
  scripts/                      main.ts (entry) + modules
  styles/tokens.css, global.css
  pages/index.astro, styleguide.astro
  pages/[...slug].astro         alle overige pagina's en cases (Sanity, anders src/data)
  pages/sitemap.xml.ts, robots.txt.ts   sitemap (indexeerbare pagina's, lastmod uit Sanity) en robots
public/fonts, public/video, public/favicons, public/_headers
scripts/compare.mjs             visuele vergelijking
scripts/sanity-seed.ts          npm run sanity:seed: src/data naar Sanity (vult alleen aan; --force overschrijft,
                                --dry-run controleert zonder te schrijven). Loader: scripts/sanity/
studio/                         Sanity Studio (losse app, eigen package.json)
.github/workflows/deploy.yml    build + Cloudflare Pages-deploy (na Sanity-publicatie, push of handmatig)
docs/homepage-secties.md        inventaris homepage
docs/sanity.md                  Sanity-opzet, pagina's bouwen, online zetten — branch feature/sanity-cms
```

**CMS (branch `feature/sanity-cms`):** `index.astro` haalt de homepage-inhoud
op uit Sanity via `src/lib/sanity/homepage.ts` en valt terug op `src/data/home.ts`
als `PUBLIC_SANITY_PROJECT_ID` niet gezet is — lokaal werken zonder Sanity blijft dus
gewoon werken (`PUBLIC_SANITY_PROJECT_ID= npx astro build` bouwt bewust uit src/data).
Alle andere pagina's (`page`) en cases (`caseStudy`) komen via `src/lib/pages.ts` uit
Sanity, of uit `src/data/pages` + `src/data/cases.ts` als Sanity niet geconfigureerd of
leeg is. Beide bronnen leveren `PageData` (`src/lib/sections.ts`). Inhoud gewijzigd in
`src/data`? Dan staat Sanity daarna achter: `npm run sanity:seed` vult alleen aan,
`-- --force` vervangt (overschrijft wijzigingen van de klant). Pagina's bestaan uit secties: elk sectiecomponent heeft een bloktype in `studio/schemaTypes/sections/` en
een mapper in `src/lib/sanity/sections.ts`; `[...slug].astro` rendert ze via
`PageSections`. Nieuwe sectie of nieuwe prop die de klant moet kunnen zetten? Ook
schema + mapper bijwerken. Rich text uit Sanity (Portable Text) wordt omgezet naar het
bestaande Rich-model (`src/lib/rich.ts`), dus componenten hoeven niet te weten waar
tekst vandaan komt. Beelden uit Sanity: gebruik `CmsPicture` (niet `<Picture>`), zet de
breedte in de CSS van de sectie en geef bij een vaste uitsnede `aspectRatio` mee.
Zie `docs/sanity.md` voor opzetstappen.

## Componentenoverzicht

Houd dit bij bij elk nieuw component.

### UI (`src/components/ui/`)

| Component              | Uitleg                                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| `Button.astro`         | Link of knop. Kapitalen in de body-font (Inter), 2px rand, geen gradients; bij hover veegt een effen vulling in van links naar rechts, of van boven naar onder bij `icon="arrow-down"`. Varianten `primary` (accentvlak → zwart) / `outline` (→ accentvlak) / `ghost` (→ wit), groottes `compact`/`small`/`default`/`large`, `accent`, `icon`, `iconExpanded` (bij aria-expanded), `iconOnlyOnMobile`. |
| `RichText.astro`       | Rendert rich text uit `lib/rich.ts` (p/ul, strong/em/br); `size="lead"`, `plain`.                        |
| `RichInline.astro`     | Inline-segmenten (strong/em/br) zonder extra witruimte; gebruikt door RichText.                             |
| `Icon.astro`           | Inline SVG-icoon uit het register in `icons.ts` (pijlen, chevron, menu, close, quote, WhatsApp, socials).  |
| `icons.ts`             | Iconenregister (paden + viewBox). Nieuwe iconen hier toevoegen.                                            |
| `Container.astro`      | Horizontale container: `default` (max-breedte per breakpoint), `plain` (idem, maar vol 992–1279) of `wide` (volle breedte, ruime goot). |
| `Eyebrow.astro`        | Kleine kop in Gate met ruime letterspatiëring (Webflow `.subtitle`).                                       |
| `Heading.astro`        | Kop in Gate. `as` (semantiek) los van `size`, `gradient`, `align`, `flush`. `hero` en `h1`: kapitalen met gradient. `h2`–`h6` "rustig & effen": kapitalen, regelafstand 100%, effen kleur — h2 in de kleur van `gradient` (`none`/`accent` = accentkleur), h3 wit, h4–h6 kleine gespatieerde labels (h4 in de kleur, h5–h6 lichtgrijs). Zelfde stijl voor kale h2–h6 en in rich text. |
| `SectionHeading.astro` | Gecentreerde eyebrow + h2 met gradient (Webflow `.section-heading`), optioneel `text` eronder; `spacing` default/compact/none. |
| `BackgroundVideo.astro`| Rookvideo als decoratieve laag: poster (AVIF/WebP) + lazy `<video>` (gedrag: `background-video.ts`).    |
| `Carousel.astro`       | Scroll-snap-carousel met pijlknoppen (Owl-instellingen 1/1/2/3), items lijnen uit op de container. Minder items dan er passen: gecentreerd, zonder knoppen. |
| `TestimonialCard.astro`| Kaart met foto, quote (Gate italic), oranje lijn en naam – organisatie (beide optioneel).             |
| `Polaroid.astro`       | Foto met witte polaroidrand, schaduw, kanteling (`--polaroid-rotate`) en optionele caption.            |
| `VimeoEmbed.astro`     | Vimeo met vaste verhouding, altijd `dnt=1`. Met bediening: gevel (thumbnail + afspeelknop uit oEmbed, `lib/vimeo.ts`), speler laadt pas bij klik (`vimeo-facade.ts`) + VideoObject-JSON-LD. `background`: decoratief lazy iframe. |
| `CmsPicture.astro`     | Drop-in i.p.v. astro:assets `<Picture>`: lokaal (`ImageMetadata`) ongewijzigd gedrag; Sanity (`RemoteImage`) srcset via Sanity's CDN (`?auto=format`), zonder `width`/`height`-attributen (Chromium-flexbug, zie image.ts) — `aspect-ratio` reserveert de ruimte. `aspectRatio`-prop om te croppen. |
| `DecoTriangles.astro`  | Zes oranje driehoekjes rond een beeld (structuur exact als Webflow).                                    |
| `CaseCard.astro`       | Casekaart: foto, diagonale gradient, titel + intro, link naar /cases/[slug].                              |
| `ContactForm.astro`    | Formulier (velden uit `data/forms.ts`: contact, offerte, trouwfilm; tekst, keuzerondjes, meerkeuze-dropdown), honeypot, succes/fout; verzenden via `contact-form.ts` naar `PUBLIC_CONTACT_ENDPOINT`. |
| `VimeoBackground.astro`| Vimeo-achtergrondvideo (cover). Laadt na window.load, fadet in bij 'play' (gedrag: `hero-video.ts`).    |

### Layout (`src/components/layout/`)

| Component          | Uitleg                                                                      |
| ------------------ | --------------------------------------------------------------------------- |
| `Header.astro`     | Vaste navigatiebalk: logo, MegaMenu, CTA en menuknop (+ MenuPanel). Verbergt bij scrollen omlaag, verschijnt bij scrollen omhoog (gedrag: `navbar-autohide.ts`). |
| `Breadcrumbs.astro` | Kruimelpad onder de hero (home-icoon, stappen, huidige pagina).          |
| `MegaMenu.astro`   | Desktop-dropdowns (≥1280px), CSS hover/focus-within.                        |
| `MenuPanel.astro`  | Volledig menupaneel met overlay en accordeongroepen (gedrag: `menu.ts`).     |
| `Footer.astro`     | Footer: linkkolommen (data), contact, logo + socials, juridische links, copyright. |
| `PageBackground.astro` | Textuur (AVIF, na window.load) + grote B-outlines (inline SVG met masker) achter de pagina; `shapes` instelbaar. De B-laag is zo hoog als de B's zelf (niet als de pagina, `contain: layout paint`), zodat hij niet meeverandert als de pagina langer/korter wordt; `.page-bg` knipt af met `overflow: clip`. B's worden getekend bij in beeld (`draw-shapes.ts`). |
| `WhatsAppButton.astro` | Zwevende WhatsApp-knop rechtsonder.                                           |
| `Analytics.astro`  | CookieFirst + GTM-KCTG3DST (async, `part="head"`/`"body"` voor de noscript), alleen bij `PUBLIC_ENABLE_TRACKING=true`. |

### Secties (`src/components/sections/`)

| Component    | Uitleg                                                                                              |
| ------------ | --------------------------------------------------------------------------------------------------- |
| `Hero.astro` | Schermvullende hero: titel + italic accentregel, eyebrow, 2 knoppen, poster-afbeelding (LCP) en optionele Vimeo-video. |
| `LogoMarquee.astro` | Logostrip met kop tussen lijnen en eindeloze CSS-marquee van logo-tegels. |
| `IntroHighlight.astro` | Gecentreerde Gate-introtekst met groene accenten en scroll-highlight per letter. |
| `Timeline.astro` | Kop (titel + rich text) met genummerde stappen: foto + tekstblok met rookvideo (knop per stap optioneel), CTA; `gradient`. Stappen wisselen af (oneven foto links, even rechts); `reverse` begint rechts. |
| `Testimonials.astro` | Kop + carousel met TestimonialCards over de volle breedte, rook- en B-achtergrond. |
| `PolaroidStack.astro` | Sticky kop + polaroids die bij scrollen over elkaar schuiven (pure CSS), gelijk aan live. |
| `TextMedia.astro` | Tekst naast beeld (2:3) of Vimeo (1:1); `reverse`, `triangles`, `spacing` (margin/section), `intro` erboven, slot `content` voor bv. een formulier; `id="cinema"` = popcorn-cursor. |
| `CaseSpotlight.astro` | Kop + één grote CaseCard; case op slug uit `src/data/cases.ts`. |
| `ImageFeature.astro` | Brede foto met gecentreerde titel + intro erover (mobiel eronder); `id="cinema"` = popcorn-cursor. |
| `ServiceTiles.astro` | Kop + tekst en staande beeldtegels (2:3) naar dienstpagina's; hover groeit, titel oranje. `variant="team"`: teamleden met rol en hover-video (`teamTiles()` uit `data/team.ts`). |
| `Faq.astro` | Veelgestelde vragen: accordeon (h3 + button, hoogte-animatie in CSS) met FAQPage-structured data. |
| `RichTextSection.astro` | Smalle gecentreerde tekstkolom (rich text met koppen, lijsten, citaat, Vimeo); `align`; `standalone` (eerste sectie zonder hero, zoals de 404). Dienst-, case-, sitemap- en juridische pagina's. |
| `FullWidthImage.astro` | 16:9-foto over de containerbreedte (casepagina's). |
| `VideoFeature.astro` | Vimeo-video (lazy, met bediening) over de containerbreedte; `ratio`. |
| `ContactSection.astro` | Tekst met bel/mail/WhatsApp-links naast een formulier (slot `form`); `formWidth`. ≥1440 scrolt de tekstkolom mee (sticky). Contact, offerte. |
| `MapSection.astro` | Kop + tekst en Google Maps-iframe (lazy). |
| `CaseGrid.astro` | Casesoverzicht: filterknoppen (doelgroep, dienst) + raster CaseCards; props via `caseGridProps()` (gedrag: `case-filter.ts`). |
| `LinkGroups.astro` | Kop + raster glazen kaarten met links per groep (sitemap); groep met `auto: 'cases'` = alle cases automatisch. |
| `CaseFacts.astro` | Feitenbalk op een casepagina (klant, datum, doelgroep, diensten); props via `caseFacts()` in `lib/cases.ts`. |
| `PageSections.astro` | Geen eigen opmaak: rendert een lijst `PageSection`s (`lib/sections.ts`, uit src/data of Sanity) met de componenten hierboven; TextMedia/ContactSection + `form` = met ContactForm. |

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
| `carousel.ts`          | `.is-scrollable` als niet alles past (alleen dan knoppen en slepen); pijlknoppen scrollen één item, disabled aan begin/eind; slepen met de muis (snap bij loslaten). |
| `cinema-cursor.ts`     | Popcorn-cursor + spoor, alleen bij een sectie met id="cinema" en een muis.  |
| `accordion.ts`         | Generiek accordeon: `[data-accordion-trigger]` + aria-controls; zet aria-expanded en `data-open` (animatie in CSS: grid-rows 0fr ↔ 1fr). Houdt de aangeklikte vraag exact op dezelfde plek (scrollcorrectie, ook onder Lenis); `html { overflow-anchor: none }`. |
| `contact-form.ts`      | Formulier via fetch versturen, knop "Verzenden...", succes- of foutmelding.  |
| `multiselect.ts`       | Meerkeuze-dropdown in formulieren (`[data-multiselect]`, `<details>` met checkboxes): samenvatting, sluiten bij klik buiten/Escape. |
| `case-filter.ts`       | Casesoverzicht filteren (`[data-case-grid]`) per doelgroep en dienst; `?filter=` kiest vooraf; melding bij geen resultaat. |
| `draw-shapes.ts`       | B-outlines op de achtergrond één keer tekenen zodra ze in beeld komen (masker + stroke-dashoffset, `--duration-draw`). |
| `vimeo-facade.ts`       | Vimeo-gevel: bij klik de thumbnail vervangen door de speler (autoplay) en focus erop. |
| `hover-video.ts`       | Teamtegels: video laadt bij eerste hover en speelt, pauzeert bij verlaten (alleen muis, motion aan). |
| `menu.ts`              | Menupaneel openen/sluiten (GSAP), overlay, Escape, focus-trap, scroll-lock zonder de scrollbalk te verbergen (wiel/touch/toetsen blokkeren), accordeon. |
| `navbar-autohide.ts`   | Navbar verbergen/tonen op scrollrichting; blijft staan bovenaan, met open menu of bij focus erin. |
