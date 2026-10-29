# CLAUDE.md — Bold Productions

## Project

Herbouw van de website van **Bold Productions** (videoproductie voor events, artiesten en zakelijke events) in Astro. De huidige site draait op Webflow en is traag. Het doel is een **pixel-getrouwe, veel snellere** versie.

- Fase 1 (homepage) en fase 2 (alle overige pagina's van de live site, inclusief 13 cases en de juridische pagina's) zijn gebouwd. Elke pagina is een lijst herbruikbare secties; nieuwe pagina's bouw je uit dezelfde secties.
- **Herstructurering oktober 2026:** de site is gesplitst in **Events** (`/events/…`, alles wat er was; "Events" als doelgroep heet nu **Organisatoren**) en **Business** (`/business/…`; doelgroep- en dienstpagina's sinds 20 oktober 2026 gevuld met de teksten van boldproductions.webflow.io/business, `data/pages/business/`, beelden zelf gekozen uit `src/assets`). De homepage (`/`, Webflow `home-new`) kiest tussen de twee; de vorige homepage staat op `/events` (sinds 17 oktober 2026 een gewone pagina uit secties, `data/pages/events-home.ts` / Sanity `page-events-home`). Oude URL's: 301 in `public/_redirects`, mapping in `src/lib/url-migration.ts`.
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
npm run preview:dev     # live voorbeeld voor Sanity (SSR, concepten), http://localhost:4322
npm run preview:deploy  # idem als Cloudflare Worker bold-productions-preview
npm run sanity:section-previews  # plaatjes per sectie voor "Sectie toevoegen" in Studio
```

`?static=1` achter een URL zet Lenis en alle animaties uit (gebruikt door compare).

## Regels

1. **Gebruik altijd bestaande componenten en tokens.** Maak geen nieuw component als een bestaand component met een extra prop of variant volstaat. Twijfel je? Vraag het.
2. **Geen hardcoded kleuren, font-sizes of spacing** buiten `src/styles/tokens.css`. Componenten gebruiken alleen `var(--…)`. Nieuwe waarde nodig? Voeg eerst een token toe.
3. **Eerst de styleguide.** Nieuwe componenten of varianten komen eerst op `/styleguide` (`src/pages/styleguide.astro`), daarna pas op een pagina. Elke sectie staat daar met voorbeeldprops.
4. **Teksten letterlijk** overnemen van de live site (Nederlands). Niets herschrijven, ook geen typfouten "verbeteren" zonder overleg.
5. **Inhoud in `src/data/`** (of later content collections), nooit in componenten. Componenten krijgen alles via props.
6. **URL-structuur**: `/<soort>/<doelgroep>/<dienst>` (bijv. `/events/organisatoren/aftermovie`, `/business/content/ai`), cases op `/<soort>/cases/[slug]`, zonder trailing slash. `build.format: 'file'` + `trailingSlash: 'never'`. URL van een bestaande pagina gewijzigd? 301 toevoegen in `public/_redirects` (nooit een regel op een pad dat nu een pagina is: redirects gaan vóór bestanden).
7. **Performance (harde eisen):**
   - Doel: Lighthouse mobiel 90+.
   - Hero-afbeelding `loading="eager"` + `fetchpriority="high"` (en preload via `BaseLayout` `preloadImage`). Alle andere afbeeldingen `loading="lazy"`.
   - Afbeeldingen via `astro:assets` (`<Image>`/`<Picture>`) met AVIF + WebP en passende `widths`/`sizes`. Bronnen in `src/assets/`.
   - Hero-Vimeo pas na `window.load` inladen. De hero-afbeelding is de poster. Op mobiel alleen op de homepage.
   - Overige Vimeo-iframes `loading="lazy"`. **Geen** Vimeo `player.js`.
   - Rookvideo: `muted loop playsinline preload="none"` + poster, pas laden/afspelen via IntersectionObserver.
   - Geen render-blocking third-party CSS/JS in `<head>`. Geen jQuery, geen reCAPTCHA, geen Font Awesome.
   - **Eén JS-bundel per pagina**: alle interacties via `src/scripts/main.ts`. Modules initialiseren alleen als hun elementen bestaan (`data-*`-hooks). Geen losse `<script>`-blokken in componenten.
   - Respecteer `prefers-reduced-motion` en `?static=1` (`src/scripts/env.ts`). `?static=1` = alles uit. Reduced motion = **minder beweging, niet geen** (iPhones met "Beweging beperken"): `motionEnabled` (smooth scroll, video's, drift, hover-video's) gaat uit, `fadeEnabled` (fade-ins, scroll-highlight, B-lijnen) blijft; in CSS wordt alles wat verschuift of schaalt een fade (global.css "Minder beweging"), de paginaovergang een crossfade. Nieuwe animatie? Bedenk wat er bij reduced motion van overblijft.
   - Elke module in `main.ts` start in een eigen try/catch: één fout stopt de andere animaties niet.
   - Bestanden in `public/fonts/` en `public/video/` worden een jaar immutable gecachet. Vervang je zo'n bestand, **geef het dan een nieuwe naam**.
8. **Na elke sectie:** `npm run build` moet slagen en `npm run compare` draaien. Benoem wat nog afwijkt.
9. **Geen nieuwe dependencies** zonder toestemming.
10. Formulieren: alle posten naar `functions/api/form.ts` (Pages Function, mail via Resend; ontvanger `FORM_TO_EMAIL` in Cloudflare = mike@weareboldproductions.com, zonder variabele simon@), zie README. Tracking (GTM-KCTG3DST, CookieFirst) komt later via `components/layout/Analytics.astro`, alleen als `PUBLIC_ENABLE_TRACKING === 'true'`. Meten bij de livegang (events, telling aanvragen): `TODO.md`.
11. `/styleguide` is `noindex` en hoort niet in een sitemap (als die er komt: uitsluiten).

## SEO

Titels, metabeschrijvingen, h1's en alt-teksten overgenomen van de Webflow-site (SEO-specialist) en
gecontroleerd tegen live. Structured data sinds 27 oktober 2026 volgens de nieuwe specificatie van de
SEO-specialist (Rick). Opbouw:
- `BaseLayout`: canonical (www), OG/Twitter (vaste Bold-afbeelding `assets/seo/og-default.jpg`, cases hun
  casefoto, eigen keuze via `meta.ogImage`), `noindex` zonder nofollow, JSON-LD via `structuredData`
  (één script, één `@graph`; niet op noindex-pagina's en kopieën met een andere canonical).
- `lib/structured-data.ts`: soort pagina uit het URL-pad (`pageKindOf`, niets handmatig per pagina), waarden
  uit titel, metabeschrijving en secties (`pageFacts`). Homepage: Organization (+ Brand Bold Events/
  Bold Business), WebSite, WebPage. Overige pagina's: pagina-node (CollectionPage/WebPage/ContactPage/AboutPage/
  ProfilePage) + BreadcrumbList zoals het zichtbare kruimelpad (onder /events en /business vanaf Events/Business,
  zonder Home; daarbuiten Home › pagina; op /events en /business zelf geen); dienst + Service (naam = paginatitel
  zonder "| Bold Productions", niet de h1-slogan; brand per soort), case + VideoObject (eerste video met bediening,
  alleen met uploaddatum; omschrijving uit Studio-veld "Omschrijving voor zoekmachines", anders Vimeo, anders de
  metabeschrijving), Mike-pagina's + Person. FAQPage uit de Faq-sectie. Juridische pagina's en 404: geen schema;
  `?filter=`-kopieën van het casesoverzicht: schema weg via `case-filter.ts`. Alle URL's op www (Astro.site), ook
  op de testomgeving.
- Redirects: redirectplan van de SEO-specialist in `public/_redirects` (Cloudflare Pages; een query string gaat mee).
- Organisatiegegevens (adres, telefoon, e-mail, KvK, socials) uit Sanity "Menu, footer & contact" (`getContact`,
  `getSocials`), dezelfde bron als de footer.
- `npm run check:schema` (na de build; `-- --base=<url>` tegen een omgeving, `-- --list` typen per pagina) loopt de
  opleverlijst van de spec na.
- `public/_headers`: noindex alleen op `*.pages.dev`; HSTS en andere beveiligingsheaders.

## Conventies

- **Accentkleur per doelgroep** via `data-accent="orange|yellow|green"` op een voorouder (body via `BaseLayout accent`). Componenten gebruiken `--accent`, `--accent-light`, `--accent-gradient`. Dit vervangt de Webflow-`w-variant-*`-klassen.
- **Breakpoints** (Webflow, desktop-first): `max-width: 991px`, `767px`, `479px` en `min-width: 1280px`, `1440px`, `1920px`. Letterlijk in media queries (custom properties werken daar niet).
- **Scoped styles** per component. Wil je een child-component stylen (bijv. `<Icon>` in `<Button>`)? Gebruik `.parent :global(.child-class)`.
- **Sectie-afstand: 192px tussen secties, ≤767px 64px.** Secties zonder eigen achtergrond krijgen `margin-block: var(--section-space)` (marges vallen samen, dus precies 192/64 ertussen, niet 2×); secties mét eigen achtergrond (PolaroidStack) krijgen `padding-block: var(--section-padding)` zodat de achtergrond 192/64 boven/onder de inhoud doorloopt. Uitzonderingen: LogoMarquee 96 boven (direct onder de hero, ook op mobiel), Footer 96 padding (≤767 48), en `--section-space-tight` (96, ≤767 48; regels in global.css): de eerste sectie onder het kruimelpad (boven, en bij een intro — tekst, introtekst, feitenbalk — ook eronder) en bij elkaar horende inhoud na elkaar (tekst, foto, video, introtekst, feitenbalk; casepagina's).
- **Scroll-in-animatie**: zet `data-animate` op een element (Webflow: `.animate-on-scroll`). `data-animate-stagger` op een groep laat de directe kinderen één voor één binnenkomen (`--stagger-step`); `data-animate-skip` sluit een kind uit (bijv. achtergrondlaag). `Container` geeft `data-*`-attributen door.
- **Paginaovergang**: diagonale veeg (linksonder → rechtsboven) met een oranje band tussen oude en nieuwe pagina, via native cross-document View Transitions (`@view-transition` in global.css, tokens `--duration-page-sweep`/`--page-sweep-lag`/`--ease-curtain`). Geen JS, geen dependency; bij prefers-reduced-motion een crossfade.
- **Cursor**: driehoekje via tokens `--cursor-default`/`--cursor-pointer` (alleen `hover: hover` + `pointer: fine`). Zelf `cursor:` zetten? Gebruik die tokens. Cookiepanelen en `[data-native-cursor]` krijgen de systeemcursor.
- Regeleinden in titels: `\n` in de data. `Heading` zet dat om naar `<br>`.
- **Koppen**: kapitalen met merkgradient (`gradient`, ook h2–h4 en rich text; h3 zonder gradient wit, h5–h6 grijs). h3/h4 met gradient zijn `fit-content`, zodat de gradient over de tekst loopt. Schaal h4 `--fs-h4`, h5 `--fs-h5`, h6 klein gespatieerd label. In lopende tekst (`.rich-text`) is h2 kleiner (`--fs-h2-text`) en hebben koppen vaste ruimte erboven/eronder; lege Webflow-witregels naast een kop vallen weg.
- **Regelhoogte**: `--lh-body` (1.5) voor lopende tekst; `--lh-ui` (24px) voor knoppen, labels en kaarten.
- **Willekeurige keuze per bezoek** (`scripts/random-pick.ts`, `[data-random-pick="N"]`): alle kandidaten in de HTML, de eerste N zichtbaar (zonder JS en bij `?static=1`), de browser kiest er N. Logostrip: max. 10 logo's (`max`); uitgelichte case: één uit `spotlightCandidates()`.
- **Automatisch op indeling** (`targetingOfPath(pad)` in `data/taxonomy.ts`): logostrip zonder vaste lijst = logo's van soort + doelgroep van de pagina (`logosForPath`, `data/logos.ts`; klantlogo's hebben meerdere soorten en doelgroepen); uitgelichte case zonder vaste case = cases met soort + doelgroep + dienst van de pagina, anders doelgroep, anders soort (`spotlightCandidates`, `data/cases.ts`).
- **Gedeelde inhoud** staat in eigen databestanden en wordt op id gekozen: `src/data/testimonials.ts` (`pickTestimonials`), `src/data/logos.ts`, `src/data/cases.ts`. Nooit kopiëren per pagina.
- **Cases in meerdere soorten/doelgroepen** (sinds 22 oktober 2026): Studio vinkjes (`caseTargetingFields`), op de site `Case.targets` (`toCaseTargets`); de eerste soort is het hoofdadres. Staat een case in Events én Business, dan bestaat hij op beide adressen (`casePages`, kaarten linken binnen de eigen soort via `caseIn`); de kopie heeft `meta.canonical` naar het hoofdadres en staat niet in de sitemap. Testimonials: ook vinkjes (soorten + doelgroepen, `multiTargetingFields`); een testimonialsectie met lege lijst kiest automatisch (`matchingPath` in data/taxonomy.ts: doelgroep van de pagina, anders soort, anders alles), net als de logostrip.
- **Indeling** (`src/data/taxonomy.ts`): Events óf Business → één doelgroep → diensten per doelgroep (één lijst per doelgroep, met URL-slug). Bron voor menu, menupaneel, footer, casesfilter en het CMS (cases en testimonials: soort + doelgroep + diensten; klantlogo's: soort + doelgroep). Studio-velden in `studio/schemaTypes/taxonomy.ts`, omzetting in `src/lib/sanity/taxonomy.ts` (houd de drie gelijk).
- **Drie delen van de site**, elk met eigen menu, CTA en footer (`navigation[sectionOf(pad)]` in `data/navigation.ts`, gekozen door `BaseLayout`): `events` (/events…), `business` (/business…) en `neutral` (homepage, juridische pagina's, sitemap, 404, landingspagina's; geen menu, alleen knoppen Bold Events/Bold Business; op de homepage pas na de split-hero). Het logo linkt naar de homepage van dat deel.
- Opgemaakte tekst in data: het model uit `src/lib/rich.ts` (geen HTML-strings), renderen met `RichText`.
- Fonts: Gate 400 normal/italic (Webflow-300 → 400), Inter variabel 300–700 (Webflow-400/600/800 → 300/500/700). Gebruik `--fw-light|medium|bold|display`.

## Structuur

```
src/
  layouts/BaseLayout.astro      head/meta, fonts-preload, Header, Footer, main.ts
  components/ui/                basiscomponenten
  components/layout/            Header, Footer, Analytics (en later MegaMenu, MenuPanel)
  components/sections/          één component per sectie, alle inhoud via props
  data/                         home.ts, navigation.ts, cases.ts, team.ts, forms.ts, seo.ts (organisatie, merken, Mike), …
  data/pages/                   één bestand per pagina (PageData), opgesomd in data/pages/index.ts; events/… per URL,
                                business.ts (Business: lijst van business/…, plus kopieën van Cases/Over/Contact), home.ts (/)
  data/taxonomy.ts              soorten, doelgroepen, diensten (+ URL's)
  data/case-pages/              inhoud (introtekst + secties) per case, gekoppeld in data/cases.ts
  lib/                          helpers (text.ts, tokens.ts, rich.ts, vimeo.ts), structured-data.ts (JSON-LD), sections.ts (PageData/PageSection),
                                pages.ts (alle pagina's: Sanity of src/data), cases.ts (casepagina-opbouw),
                                lib/sanity/ (CMS-koppeling, zie hieronder)
  scripts/                      main.ts (entry) + modules
  styles/tokens.css, global.css
  pages/index.astro             homepage = pagina 'home' (Sanity of data/pages/home.ts)
  pages/styleguide.astro
  pages/[...slug].astro         alle overige pagina's (ook /events, met de reviews in de JSON-LD) en cases (Sanity, anders src/data)
  pages/sitemap.xml.ts, robots.txt.ts   sitemap (indexeerbare pagina's, lastmod uit Sanity) en robots
public/fonts, public/video, public/favicons, public/_headers
scripts/compare.mjs             visuele vergelijking
scripts/check-structured-data.mjs  npm run check:schema: JSON-LD controleren (dist/ of --base=<url>)
scripts/sanity-seed.ts          npm run sanity:seed: src/data naar Sanity (vult alleen aan; --force overschrijft,
                                --dry-run controleert zonder te schrijven; bestaande pagina's op URL-pad herkend). Loader: scripts/sanity/
scripts/sanity-migrate-*       eenmalige migraties (taxonomy, urls, 2026-10-17: /events als pagina, logo's, alt-teksten; 2026-10-20: Contentcreatie/zakelijk-portret; 2026-10-22: Business-offerteformulier; 2026-10-26: polaroidfoto's `imageWithAlt`; 2026-10-27: contactgegevens in Sanity, oude schema-velden weg; 2026-10-28: zakelijke-events/promovideos, case-URL's in kleine letters; al gedraaid)
functions/api/form.ts           Pages Function: alle formulieren → mail via Resend (zie README)
scripts/section-previews.mjs    npm run sanity:section-previews: screenshot per sectie → studio/static/sections/
astro.preview.config.mjs        live voorbeeld voor Sanity (SSR, Worker; wrangler.preview.jsonc)
studio/                         Sanity Studio (losse app, eigen package.json; presentation.ts, actions.ts)
.github/workflows/deploy.yml    build + Cloudflare Pages-deploy (na Sanity-publicatie, push of handmatig)
docs/homepage-secties.md        inventaris homepage
docs/sanity.md                  Sanity-opzet, pagina's bouwen, online zetten — branch feature/sanity-cms
```

**CMS (branch `feature/sanity-cms`):** Sanity Studio v6 (React 19). Lokaal werken zonder Sanity blijft
gewoon werken (`PUBLIC_SANITY_PROJECT_ID= npx astro build` bouwt bewust uit src/data). De homepage (`/`, URL-pad
`home`) en `/events` (URL-pad `events`) zijn gewone pagina's; ontbreken ze in Sanity, dan komen ze uit src/data.
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
breedte in de CSS van de sectie en geef bij een vaste uitsnede `aspectRatio` mee. **Alt-tekst** staat op de
afbeelding zelf (Studio-tool Media, `sanity-plugin-media`, `sanity.imageAsset.altText`, geldt overal); het veld
op de plek is een optionele afwijking (`imageProjection`: `coalesce(alt, asset->altText)`).
Menu, footer, social media (één lijst voor de hele site: footer-iconen + sameAs, `getSocials()`) en contactgegevens (footer, WhatsApp-knop, Organization; `getContact()`) komen uit de singleton `siteNavigation` ("Menu, footer & contact") (`src/lib/sanity/navigation.ts`, terugval
per deel op `src/data/navigation.ts`). **Live voorbeeld** (Presentation Tool in Studio): aparte
build `astro.preview.config.mjs` (SSR op een Cloudflare Worker, concepten, stega, overlays uit
`scripts/visual-editing.ts`); `isPreview` (`src/lib/preview.ts`) schakelt caches en animaties uit.
De gewone build blijft statisch en bevat niets van de preview. Een veld dat door code als waarde
wordt gebruikt mag geen stega krijgen: alleen de tekstvelden in `STEGA_FIELDS` (`client.ts`).
Zie `docs/sanity.md` voor opzetstappen.

## Componentenoverzicht

Houd dit bij bij elk nieuw component.

### UI (`src/components/ui/`)

| Component              | Uitleg                                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| `Button.astro`         | Link of knop (of alleen de vorm: `as="span"`, binnen een element dat al klikbaar is). Kapitalen in de body-font (Inter), 2px rand, geen gradients; bij hover veegt een effen vulling in van links naar rechts, of van boven naar onder bij `icon="arrow-down"`. Varianten `primary` (accentvlak → zwart) / `outline` (→ accentvlak) / `ghost` (→ wit), groottes `compact`/`small`/`default`/`large`, `accent`, `icon`, `iconExpanded` (bij aria-expanded), `iconOnlyOnMobile`. |
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
| `VimeoEmbed.astro`     | Vimeo met vaste verhouding, altijd `dnt=1`. Met bediening: gevel (thumbnail + afspeelknop uit oEmbed, `lib/vimeo.ts`), speler laadt pas bij klik (`vimeo-facade.ts`) + VideoObject-JSON-LD. `background`: decoratief lazy iframe, vullend bijgesneden op de eigen verhouding van de video (oEmbed `--video-ratio`, container-units), dus geen zwarte balken. Afspeelknop: glazen ring + witte driehoek, bij hover accentvulling, rustige puls (niet bij reduced motion). |
| `CmsPicture.astro`     | Drop-in i.p.v. astro:assets `<Picture>`: lokaal (`ImageMetadata`) ongewijzigd gedrag; Sanity (`RemoteImage`) srcset via Sanity's CDN (`?auto=format`), zonder `width`/`height`-attributen (Chromium-flexbug, zie image.ts) — `aspect-ratio` reserveert de ruimte. `aspectRatio`-prop om te croppen. |
| `DecoTriangles.astro`  | Zes oranje driehoekjes rond een beeld (structuur exact als Webflow).                                    |
| `CaseCard.astro`       | Casekaart: foto, diagonale gradient, titel + intro, link naar /<soort>/cases/[slug].                              |
| `ContactForm.astro`    | Formulier (velden uit `data/forms.ts`: contact, offerte, offerte-business, trouwfilm; tekst met `hint`, keuzerondjes, keuzelijst, meerkeuze-dropdown met groepen en `required`, "Anders"-veld via `other`), honeypot, verborgen `_formulier`/`_pagina`/`_kop` voor de mail, succes/fout; verzenden via `contact-form.ts` naar `/api/form`. Beweging: velden lichten op met accentlijn onderaan, "Anders"-veld, meerkeuzepaneel en meldingen komen zacht binnen (`reveal-up`), vinkje springt even; na verzenden scrolt de succesmelding in beeld. |
| `VimeoBackground.astro`| Vimeo-achtergrondvideo (cover). Laadt na window.load, fadet in bij 'play' (gedrag: `hero-video.ts`). `playOnHover`: laden/afspelen bij hover (split-hero, `split-hero.ts`). |
| `ContactLinks.astro`   | Lijst bel/mail/WhatsApp-links met icoon (volgt tel:/mailto:/anders WhatsApp). ContactSection en TextMedia `links`. |

### Layout (`src/components/layout/`)

| Component          | Uitleg                                                                      |
| ------------------ | --------------------------------------------------------------------------- |
| `Header.astro`     | Vaste navigatiebalk: logo (`home`), MegaMenu, CTA (optioneel) en menuknop (+ MenuPanel); menu per deel van de site (`navigation.ts`). Leeg `nav` + `buttons` = neutraal: alleen de knoppen Bold Events/Bold Business (≤767 korte labels, compacter), geen menu. `revealAfter`: verborgen tot dat element voorbij is (homepage: split-hero). Verbergt bij scrollen omlaag, verschijnt bij scrollen omhoog (gedrag: `navbar-autohide.ts`). |
| `Breadcrumbs.astro` | Kruimelpad onder de hero: home-icoon = home van het deel (/events, /business, anders /), stappen, huidige pagina (`buildBreadcrumbs` in `lib/sections.ts`). Niet op /events en /business zelf. |
| `MegaMenu.astro`   | Desktop-dropdowns (≥1280px), CSS hover/focus-within; groep zonder kinderen = gewone link. |
| `MenuPanel.astro`  | Volledig menupaneel met overlay en accordeongroepen (gedrag: `menu.ts`); groep zonder kinderen = losse link. Onderaan `switchTo`: knop naar het andere deel (Events ↔ Business, vast in `data/navigation.ts`). |
| `Footer.astro`     | Footer: linkkolommen (data), contact, logo + socials, juridische links, copyright, KvK-nummer. ≤991 onderrij links uitgelijnd onder elkaar; ≤767 extra ruimte onderaan voor de WhatsApp-knop. |
| `PageBackground.astro` | Textuur (AVIF, na window.load) + grote B-outlines (inline SVG met masker) achter de pagina; `shapes` instelbaar. De B-laag is zo hoog als de B's zelf (niet als de pagina, `contain: layout paint`), zodat hij niet meeverandert als de pagina langer/korter wordt; `.page-bg` knipt af met `overflow: clip`. B's worden getekend bij in beeld (`draw-shapes.ts`). |
| `WhatsAppButton.astro` | Zwevende WhatsApp-knop rechtsonder.                                           |
| `Analytics.astro`  | CookieFirst + GTM-KCTG3DST (async, `part="head"`/`"body"` voor de noscript), alleen bij `PUBLIC_ENABLE_TRACKING=true`. |

### Secties (`src/components/sections/`)

| Component    | Uitleg                                                                                              |
| ------------ | --------------------------------------------------------------------------------------------------- |
| `SplitHero.astro` | Homepage: twee schermhoge helften (Events/Business) als link met foto, titel, tekst, knop en driehoekjes; logo = h1. ≥1280 groeit de helft onder de muis, gloeit de naad en speelt Vimeo (`split-hero.ts`). |
| `Hero.astro` | Schermvullende hero: titel + italic accentregel, eyebrow, 2 knoppen, poster-afbeelding (LCP) en optionele Vimeo-video. |
| `LogoMarquee.astro` | Logostrip met kop tussen lijnen en eindeloze CSS-marquee van logo-tegels; meer dan `max` (10) logo's: elke keer `max` willekeurig (`random-pick.ts`). |
| `IntroHighlight.astro` | Gecentreerde Gate-introtekst met groene accenten en scroll-highlight per letter. |
| `Timeline.astro` | Kop (titel + rich text) met genummerde stappen: foto + tekstblok met rookvideo (knop per stap optioneel), CTA; `gradient`. Stappen wisselen af (oneven foto links, even rechts); `reverse` begint rechts. |
| `Testimonials.astro` | Kop + carousel met TestimonialCards over de volle breedte, op de paginatextuur (geen eigen achtergrond). |
| `PolaroidStack.astro` | Sticky kop (onder de navbar, `--polaroids-header-top`) + polaroids die bij scrollen over elkaar schuiven (pure CSS); een polaroid is nooit hoger dan het scherm toelaat (max-breedte uit de schermhoogte). Achtergrond: zwart met rookvideo (50%) en twee B-vormen in een schermhoge laag die blijft staan (sticky), zodat er niets meescrolt achter de stapel. |
| `TextMedia.astro` | Tekst naast beeld (2:3) of Vimeo (1:1); `links` (ContactLinks) onder de tekst; `reverse`, `triangles`, `spacing` (margin/section), `intro` erboven, slot `content` voor bv. een formulier; `id="cinema"` = popcorn-cursor. |
| `CaseSpotlight.astro` | Kop + één grote CaseCard: vaste case (`item`/`caseSlug`) of kandidaten (`items`, standaard `spotlightCandidates` op het pad) waaruit de browser er elke keer één kiest. |
| `ImageFeature.astro` | Brede foto met gecentreerde titel + intro erover (mobiel eronder); `id="cinema"` = popcorn-cursor. |
| `ServiceTiles.astro` | Kop + tekst en staande beeldtegels (2:3) naar dienstpagina's; hover groeit, titel oranje. `variant="team"`: teamleden met rol en hover-video (`teamTiles()` uit `data/team.ts`); bij hover verdwijnen donkere laag en tekst zodat de video helder speelt. |
| `Faq.astro` | Veelgestelde vragen: accordeon (h3 + button, hoogte-animatie in CSS) met FAQPage-structured data. |
| `RichTextSection.astro` | Smalle gecentreerde tekstkolom (rich text met koppen, lijsten, citaat, Vimeo); `align`; `standalone` (eerste sectie zonder hero, zoals de 404). Dienst-, case-, sitemap- en juridische pagina's. |
| `FullWidthImage.astro` | 16:9-foto over de containerbreedte (casepagina's). |
| `VideoFeature.astro` | Vimeo-video (lazy, met bediening) over de containerbreedte; `ratio`. |
| `ContactSection.astro` | Tekst met bel/mail/WhatsApp-links naast een formulier (slot `form`); `formWidth`. ≥1440 scrolt de tekstkolom mee (sticky). Contact, offerte. |
| `MapSection.astro` | Kop + tekst en Google Maps-iframe (lazy). |
| `CaseGrid.astro` | Casesoverzicht: filterknoppen (doelgroep, dienst) + raster CaseCards; props via `caseGridProps(cases, soort)` (alleen cases van die soort) (gedrag: `case-filter.ts`). |
| `LinkGroups.astro` | Kop + raster glazen kaarten met links per groep. `auto: 'site'` (de /sitemap; Studio: "Automatisch alle pagina's") = alle groepen automatisch uit alle indexeerbare pagina's (`lib/sitemap.ts`, ingevuld in `lib/pages.ts`); groep met `auto: 'cases'` = alle cases. |
| `CaseFacts.astro` | Feitenbalk op een casepagina (klant, datum, doelgroep, diensten), direct onder het kruimelpad (`#first-section`); props via `caseFacts()` in `lib/cases.ts`. |
| `PageSections.astro` | Geen eigen opmaak: rendert een lijst `PageSection`s (`lib/sections.ts`, uit src/data of Sanity) met de componenten hierboven; TextMedia/ContactSection + `form` = met ContactForm. |

### Scripts (`src/scripts/`)

| Module                 | Uitleg                                                                     |
| ---------------------- | -------------------------------------------------------------------------- |
| `main.ts`              | Enige entry. Registreert GSAP-plugins en start alle modules.              |
| `env.ts`               | `isStatic`, `prefersReducedMotion`, `motionEnabled` (beweging), `fadeEnabled` (fades, ook bij reduced motion). |
| `random-pick.ts`       | `[data-random-pick="N"]`: elke keer N willekeurige kandidaten (logostrip, uitgelichte case); lijsten met `[data-random-list]` krijgen dezelfde keuze. |
| `lenis.ts`             | Lenis smooth scroll gekoppeld aan GSAP ticker/ScrollTrigger; `scrollToTarget`. |
| `scroll-animations.ts` | `[data-animate]` fade-in-up (top 70%, eenmalig), `[data-animate-stagger]` kinderen na elkaar (top 80%) en anchor-links met offset. |
| `split-hero.ts`        | Split-hero: .is-hovered bij hover/focus (≥1280, muis), Vimeo laden bij eerste hover (na window.load), daarna vanaf 0 afspelen, pauze bij verlaten. |
| `hero-video.ts`        | Zet de Vimeo-src na window.load (mobiel alleen met loadOnMobile), fade-in via postMessage 'play'. |
| `scroll-highlight.ts`  | SplitType + ScrollTrigger scrub: letters van 15% naar 100% met gloed; `stagger` bepaalt de breedte van de gloed.      |
| `background-video.ts`  | IntersectionObserver: video-src zetten en afspelen in beeld, pauzeren erbuiten. |
| `carousel.ts`          | `.is-scrollable` als niet alles past (alleen dan knoppen en slepen); pijlknoppen scrollen één item, disabled aan begin/eind; slepen met de muis (snap bij loslaten). |
| `cinema-cursor.ts`     | Popcorn-cursor + spoor, alleen bij een sectie met id="cinema" en een muis.  |
| `accordion.ts`         | Generiek accordeon: `[data-accordion-trigger]` + aria-controls; zet aria-expanded en `data-open` (animatie in CSS: grid-rows 0fr ↔ 1fr). Houdt de aangeklikte vraag exact op dezelfde plek (scrollcorrectie, ook onder Lenis); `html { overflow-anchor: none }`. |
| `tracking.ts`          | Meetevents naar de GTM-dataLayer: `pushEvent`; `klik_telefoon`/`klik_email`/`klik_whatsapp` bij een klik op tel:/mailto:/WhatsApp-links. `formulier_verzonden` (+ `formulier`, `gevonden_via`) komt uit contact-form.ts. |
| `contact-form.ts`      | Formulier via fetch versturen, knop "Verzenden...", succes- of foutmelding; "Anders"-velden tonen/verplichten, meerkeuze minstens één (paneel opent bij de melding). |
| `multiselect.ts`       | Meerkeuze-dropdown in formulieren (`[data-multiselect]`, `<details>` met checkboxes): samenvatting, sluiten bij klik buiten/Escape. |
| `case-filter.ts`       | Casesoverzicht filteren (`[data-case-grid]`) per doelgroep en dienst; `?filter=` kiest vooraf (en haalt de JSON-LD weg: kopie met canonical naar het overzicht); melding bij geen resultaat. |
| `draw-shapes.ts`       | B-outlines op de achtergrond één keer tekenen zodra ze in beeld komen (masker + stroke-dashoffset, `--duration-draw`). |
| `vimeo-facade.ts`       | Vimeo-gevel: bij klik de thumbnail vervangen door de speler (autoplay) en focus erop. |
| `hover-video.ts`       | Teamtegels: video laadt bij eerste hover en speelt, pauzeert bij verlaten (alleen muis, motion aan). |
| `menu.ts`              | Menupaneel openen/sluiten (GSAP), overlay, Escape, focus-trap, scroll-lock zonder de scrollbalk te verbergen (wiel/touch/toetsen blokkeren), accordeon. |
| `visual-editing.ts`    | Alleen in de preview-build (via astro.preview.config.mjs, niet in main.ts): Sanity-overlays, herladen na een wijziging, navigatie gekoppeld aan Presentation. |
| `hyphenate-headings.ts` | Koppen krijgen alleen afbreekstreepjes (`.is-hyphenated`) als een woord breder is dan de regel (gemeten, opnieuw bij resize); anders `hyphens: manual`. |
| `navbar-autohide.ts`   | Navbar verbergen/tonen op scrollrichting; blijft staan bovenaan, met open menu of bij focus erin. `data-reveal-after`: verborgen tot dat element voorbij is (ook zonder beweging). |
