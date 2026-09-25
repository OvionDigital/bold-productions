# Inventaris homepage

Bron: https://www.weareboldproductions.com/ (HTML, Webflow-CSS, `reference/webflow-custom-*.html` en de Webflow-interacties uit `webflow.*.js`), doorgelopen van boven naar beneden.

Legenda:

- **Component**: voorgesteld Astro-component (`sections/` tenzij anders vermeld).
- **Props**: alles wat per pagina verschilt. Teksten komen uit `src/data/home.ts`.
- **Media**: te downloaden naar `src/assets/` (afbeeldingen via `astro:assets`) of extern (Vimeo).
- **Gedrag**: JS uit `webflow-custom-footer.html` of Webflow-interacties (IX3), met de nieuwe module in `src/scripts/`.
- **Hergebruik**: waar het blok waarschijnlijk nog meer voorkomt.

Paginavolgorde: Header → Hero → Logostrip → Intro (scroll-highlight) → Tijdlijn → Testimonials → Polaroidgalerij → Tekst + video ("Mike's mic drop") → Footer. Losse elementen: WhatsApp-knop, pagina-achtergrond met B-vormen, popcorn-cursor.

---

## 0. Pagina-achtergrond (layout)

Geen sectie, maar hoort bij de layout (Webflow `.main` en `.bold-b-background`).

- **Component**: `layout/PageBackground.astro` (of stijl + slot in `BaseLayout`).
- **Wat**:
  - Textuur `bold-background.jpg` over de volle breedte, `repeat-y`, met overlay `#130d0bb3` (`--color-page-a70`).
  - Vijf grote B-outlines (`bold-b-green.svg`, `bol-b-orange.svg`), afwisselend links en rechts (±15vw verschoven, 60% breed, 80% op ≤991), rechts gespiegeld. Absoluut vanaf `top: 120vh`, 50vh ertussen, `opacity .3`, `mix-blend-mode: difference`.
- **Props**: `showShapes?: boolean`, `shapes?: ('green'|'orange')[]`.
- **Media**: `bold-background.jpg` (als CSS-achtergrond, via `getImage()` naar AVIF/WebP met `image-set()`), 2× SVG (klein, inline of als asset).
- **Gedrag**: geen.
- **Hergebruik**: alle pagina's.
- **Let op**: de user-prompt noemt de B-vormen bij de hero, maar ze horen bij de pagina-achtergrond en beginnen pas onder de hero.

## 1. Header

- **Component**: `layout/Header.astro` + `layout/MegaMenu.astro` (desktop-dropdowns) + `layout/MenuPanel.astro` (volledig menu).
- **Props**: via `data/navigation.ts` (`mainNav`, `cta`). Header zelf: `currentPath` (voor `aria-current`).
- **Opbouw**:
  - Vaste balk (`position: fixed`, `z-index: 999`), gradient zwart → transparant, padding 24px verticaal, horizontaal 48/36/24/16px.
  - Logo links (`bold-productions-logo.png`, 154×64, 124px breed op ≤767). Linkt naar `/`, `title="Naar home"`.
  - Midden: drie dropdowns **Events / Artiesten / Zakelijke events**, alleen zichtbaar vanaf ≥1280px. Gate, uppercase, padding 16/32, 18px op ≥1920. Hover en huidige pagina oranje.
  - Rechts: `Button` primary small **"Bold to Action"** → `/offerte-aanvragen` (verborgen op ≤479, dan in het menupaneel) en `Button` ghost small **"Menu"** + hamburger (≤767: alleen icoon, 48×48). Open is het een **"Menu" + ×**-knop.
  - Vanaf ≥1440 zijn logo- en rechterblok 350px breed (midden gecentreerd).
- **Dropdown (MegaMenu)**: paneel met rand `--color-gray-dark`, `blur(8px)`, achtergrond `--color-black-a48`, min. 250px, padding 24/32. Links in Gate uppercase, padding 12px 0, hover oranje.
- **Menupaneel (MenuPanel)**:
  - Vast rechts, 100vh, min. 500px breed (≤767: 100vw, padding 16px), padding `110px 48px 48px`, `blur(8px)`.
  - Achtergrond: `Smoke 1.png` + zwart 80% + `bold-b-green.svg` (`background-attachment: fixed`).
  - Inhoud: CTA-knop (alleen ≤479) en daarna accordeongroepen: Events, Artiesten, Zakelijke events, Cases, Over Bold, Contact (alle zes ook op desktop). Ouderlink in Gate oranje (`--fs-nav-parent`), hover `--color-orange-light`. Chevron-knop van 36×36 klapt de subitems open.
  - Overlay (`--color-black-a70`, blur 8) over de pagina. Klik op de overlay sluit het menu.
- **Gedrag** → `scripts/menu.ts`:
  - Openen: paneel `scale 0→1` + `opacity 0→1` vanuit rechtsboven, ease `back.out(0.6)`, ~0,5 s. Overlay fade-in. Sluiten: omgekeerd (`power2`-achtig).
  - Tijdens open: `lenis.stop()`, body-scroll vergrendeld, paneel zelf scrollbaar (`data-lenis-prevent`). Wheel buiten het paneel geblokkeerd.
  - Accordeon: hoogte `0 → auto` in 0,3 s, chevron 180° gedraaid. Toegankelijk als `<button aria-expanded aria-controls>`.
  - Desktop-dropdown: hover/focus toont het paneel (`opacity 0→1`, 0,4 s), chevron `rotateX(180deg)`. Ook via toetsenbord (`:focus-within`) en Escape.
  - Escape sluit het menu, focus terug naar de menuknop, focus-trap in het paneel.
- **Media**: logo (PNG, → AVIF/WebP), `Smoke 1.png`, `bold-b-green.svg`.
- **Hergebruik**: alle pagina's.

## 2. Hero

- **Component**: `Hero.astro` + `ui/VimeoBackground.astro` (lazy hero-iframe).
- **Props**:
  - `titleLines: string` (regel 1: "Video’s die je event"), `titleAccent: string` ("laten leven", italic, accentkleur)
  - `eyebrow` ("Ervoor. Tijdens. Erna")
  - `primaryCta` { label "Bold to action", href `/offerte-aanvragen` }, `secondaryCta` { label "Waarom zou je?", href `#first-section`, icoon pijl omlaag }
  - `image` { src, alt } (poster/LCP), `vimeo?` { id `1180112930`, hash `2fa6fd18b8` }, `loadVideoOnMobile?: boolean` (true op home)
  - `accent?` (oranje/geel/groen; Webflow-variant "kleur")
- **Opbouw**: `100svh`, min. 550px. Inhoud onderaan (`justify-content: flex-end`), container `wide`. Titel `--fs-hero` (42→114px), accentspan italic in `--accent`. Gap 42px tussen eyebrow en knoppen (24px op ≤479). Knoppen met 24px tussenruimte (16px op ≤767, onder elkaar op ≤479). Onderpadding 48px (24px op ≤767). Radiale overlay `--gradient-hero-overlay`.
- **Media**: `Bold Productions (95).jpg` (hero, `loading="eager"`, `fetchpriority="high"`, preload), Vimeo 1180112930 (achtergrondvideo, `background=1`).
- **Gedrag**:
  - Laadanimatie `fade-in-up` (CSS): titel 0,2 s, accent 0,35 s, eyebrow 0,5 s, knoppen 0,65 s vertraging.
  - `scripts/hero-video.ts`: iframe-`src` pas zetten na `window.load`. Op ≤767 alleen als `loadVideoOnMobile`. Iframe cover-scaling: 177.78vh × 56.25vw (+120px), gecentreerd.
  - **Afwijking t.o.v. live (akkoord)**: live ligt er op de homepage een zwarte loader met spinner óver de hero-afbeelding (`.home .hero .video-hero-loader { display:flex }`), dus de afbeelding is daar niet te zien. Volgens de brief is de afbeelding de poster. Voorstel: afbeelding zichtbaar en de video er pas overheen faden als hij speelt. Geen spinner.
- **Hergebruik**: alle dienst- en doelgroeppagina's (met andere tekst, beeld, video en accent). Webflow heeft varianten groen en geel.

## 3. Logostrip "Vertrouwd door"

- **Component**: `LogoMarquee.astro`
- **Props**: `title` ("Vertrouwd door"), `logos: { src, alt }[]` (9 stuks).
- **Opbouw**: kop met lijnen links en rechts (1px `--color-gray-dark`, gap 48px), `Eyebrow as="h2"`. Daaronder de strip in de standaardcontainer met randmasker (6% fade links/rechts). Tegels 220×110 (160×80 op ≤991), padding 24/32, achtergrond `--color-logo-bg`, rand `--color-logo-border`, logo's 150px breed, gap 24px.
- **Media** (9 logo's, CMS): Vunzige Deuntjes, Proost, Zin in de Zomer, Dorpsfeest Wehl, Soenda, Bospop (SVG), Zwarte Cross (SVG), Drift (SVG), Doorgedraaid. PNG/WebP → AVIF/WebP. SVG's als bestand houden.
- **Gedrag**: Webflow-IX: twee kopieën van de lijst, elk `translateX(0 → -100%)`, 14 s lineair, oneindig. → **pure CSS** `@keyframes` (geen JS), gepauzeerd bij reduced motion en `?static=1`. Tweede kopie `aria-hidden`.
- **Animatie**: sectie fade-in (`data-animate`).
- **Hergebruik**: waarschijnlijk op doelgroeppagina's (events, artiesten, zakelijk) met andere logo's.

## 4. Intro met scroll-highlight

- **Component**: `IntroHighlight.astro`
- **Props**: `id` (`first-section`, anchor van de heroknop), `paragraphs` als eenvoudige rich text met `<strong>`/`<em>` (accenttekst). Voorstel: data als kleine markup-string of een array van segmenten `{ text, highlight?, italic? }`.
- **Opbouw**: gecentreerde kolom (83% → 67% op ≥1280, 100% op ≤767), Gate `--fs-highlight` (24→36px), regelhoogte 140%, `strong` in `--color-green` met 0.3em rechtermarge.
- **Tekst** (letterlijk): "Je event moet slagen. … Agenda’s lopen snel vol." / "Daarom is ***zichtbaarheid*** van je event zo belangrijk. Je wil op de juiste **momenten,** op de juiste **plekken** bij de juiste **mensen** op het netvlies komen. Voor, tijdens en na het event."
  - Let op: live ontbreken spaties na de `</strong>` (in de HTML staat "**zichtbaarheid**van"). Door `margin-right: .3em` lijkt dat visueel goed. Ik neem de tekst letterlijk over, mét de marge.
- **Gedrag** → `scripts/scroll-highlight.ts`: SplitType in chars/words. Chars starten op opacity 0,15. ScrollTrigger scrub (`top 80%` → `bottom 30%`), per char opacity 1 met witte glow (0,3) die weer uitdooft (0,7), stagger 0,04. Uit bij reduced motion en static (tekst volledig zichtbaar). `aria-label` of het origineel voor screenreaders behouden.
- **Hergebruik**: introblokken op dienstpagina's.

## 5. Tijdlijn "BOLD IN. SOLD OUT." + 01/02/03

- **Component**: `Timeline.astro` (kop + rijen + CTA), met `ui/BackgroundVideo.astro` voor de rook.
- **Props**:
  - `title` ("BOLD IN.\nSOLD OUT.", gele gradient), `intro` (rich text met `<strong>` en een lijst van 3 items)
  - `steps: { number, title, text (rich), image {src, alt}, cta {label, href} }[]`
    - 01 "Voor je event" → "Bekijk hoe" `/events/promovideos`
    - 02 "Tijdens je event" → `/events/eventvideos` (tekst bevat *‘Waarom ben ik hier niet bij?’*)
    - 03 "Na je event" → `/events/aftermovie`
  - `cta` { "Make it Bold. Sell Tickets" → `/offerte-aanvragen`, geel }
  - `gradient` (geel), `reverse?: boolean` (Webflow-variant met `row-reverse`)
- **Opbouw**:
  - Kop: twee kolommen (h2 links, rich text `--fs-lead` rechts). Onder elkaar op ≤991. Lijsticoon oranje driehoek.
  - Rij: afbeelding 16:9 (cover) links 50%, tekstblok rechts 50% (achtergrond `--color-black-a48`, padding 64/48/32-24). Nummer rechtsboven (Gate `--fs-number`, opacity .24). h3 gele gradient, tekst, ghost-knop. Rijen 96px uit elkaar (48px op ≤991), onder elkaar op ≤991.
  - CTA gecentreerd, 96px (48px) marge.
- **Media**: `BOLD (74).jpg`, `Bold Productions (53).jpg`, `Bold Productions (137).jpg`. Rookvideo (`public/video/rook.mp4`) achter elk tekstblok. Poster: stilstaand frame als AVIF/WebP (maak ik uit `rook-web.mp4`).
- **Gedrag**:
  - Rijen en kop `data-animate`.
  - `scripts/background-video.ts`: `<video muted loop playsinline preload="none" poster>`. `src` zetten en `play()` via IntersectionObserver, pauzeren buiten beeld. Niet afspelen bij reduced motion.
- **Hergebruik**: de doelgroeppagina's (artiesten en zakelijk met eigen teksten en accent). Webflow-component "timeline-events" met variant.

## 6. Testimonials "Dit deden we / En dit vonden ze"

- **Component**: `Testimonials.astro` + `ui/Carousel.astro` (scroll-snap + pijlknoppen) + `ui/TestimonialCard.astro`.
- **Props**: `eyebrow` ("Dit deden we"), `title` ("En dit vonden ze", oranje gradient), `items: { quote, name, organisation, image {src, alt} }[]` (5 stuks, CMS).
- **Opbouw**:
  - Kop gecentreerd (max. 900px, 48px marge, 96px op ≥1920).
  - Carousel: 1 kaart met 24px peek + 16px gap (<480), 1 kaart met 64px peek (480–767), 2 kaarten (768–1439), 3 kaarten (≥1440). Kaarten buiten de container blijven zichtbaar (Owl `overflow: visible`). _Correctie: de custom-CSS-regel "even kaarten 48px lager" wordt live niet toegepast (selector `.testimonial-section` bestaat niet), dus alle kaarten staan op één lijn._
  - Kaarthoogte per breakpoint: 669 / 504 (≤991) / 736.5 (≤767) / 547.5 (≤479) / 819 (≥1280) / 624 (≥1440) / 804 (≥1920).
  - Kaart: foto cover, twee donkere gradient-overlays (`--color-orange-a8` + `--gradient-card-shade`). Bovenaan het quote-icoon (oranje, 24–42px) en de quote in Gate italic `--fs-quote`. Onderaan een oranje lijntje van 200px, naam (Inter 700), "–", organisatie (`--color-gray-light`).
  - Pijlknoppen rond, 48px (64px op ≥1280), wit 50% + blur 4, half buiten de container (op ≤767 binnen, 8px inset). Uitgeschakeld = opacity .5.
  - Sectie-achtergrond: rookvideo (opacity .5) + laag met `--color-black-a70`, twee grote B-SVG's (200% hoog) en zwart.
- **Media**: 5 foto's (`MIKE_Doorgedraaid_Logo-1 (68).jpg`, `ZDH_Fedbal-193.jpg`, `BOLD_Karakter-36.jpg`, `SPOT SEQ.01_16_26_24.Still001.jpg`, `Bold Productions (104).jpg`), `bold-b-green.svg`, `bold-b-svg.svg`, rookvideo.
- **Gedrag**: Owl Carousel → `scripts/carousel.ts`: native horizontale scroll met `scroll-snap`, knoppen scrollen één kaart, disabled-status aan het begin en eind, toetsenbord en swipe werken native. Geen dependency nodig.
- **Tekstbeslissingen** (akkoord klant): kaart 1 toont "Reinier Peters" één keer; kaart 5 toont alleen "Dorpsfeest Wehl".
- **Hergebruik**: vrijwel zeker op doelgroep- en dienstpagina's (mogelijk gefilterd op doelgroep).

## 7. Polaroidgalerij "Bold backstage / We kennen onze plek"

- **Component**: `PolaroidStack.astro` (+ `ui/Polaroid.astro`).
- **Props**: `eyebrow` ("Bold backstage"), `title` ("We kennen onze plek", groene gradient), `photos: { src, alt, caption? }[]` (7 stuks, CMS, captions nu leeg).
- **Opbouw**:
  - Kop sticky (`top: 144px`, 120px op ≤767), 48px marge.
  - Elke foto is een sticky kaart (`top` 290/293/301/306/264px per breakpoint). Bij het scrollen schuiven ze als een stapel over elkaar. Kolom 83% (67% op ≥1440, 100% op ≤991).
  - Polaroid: witte rand (padding 12 / 24 onder), `--shadow-polaroid`, rotaties per positie (-1.5°, 1.2°, -0.8°, 2°, -1.8°, 0.6°, -2.2°, 1.5°). Caption in Courier 13px `--color-ink`.
  - Wrapper 96px marge boven en onder (0 op ≤479, dan 96px padding op ≤767).
- **Media**: `BOLD_Doorgedraaid-3.jpg`, `BOLD_Doorgedraaid-4.jpg`, `Proost2.jpg`, `RHBfoto-8.jpg`, `Proost-1.jpg`, `BOLD (93).jpg`, `BOLD (107).jpg`. Live staan ze allemaal op `loading="eager"`; wij maken ze `lazy`.
- **Gedrag**: pure CSS (`position: sticky`). `data-animate` op de lijst.
- **Hergebruik**: "over"-pagina, cases.

## 8. Tekst + video "Mike's mic drop"

- **Component**: `TextMedia.astro` (tekst + beeld/video, met `reverse` en `accent`) + `ui/VimeoEmbed.astro` + `ui/DecoTriangles.astro`.
- **Props**: `title` ("Mike's mic drop", gele gradient), `body` (rich text: italic quote met `<strong><em>voelen</em></strong>`, afsluiting "- Mike Ampting" vet en "(Creative Director - Bold Productions)"), `cta` { "Mail Mike", `mailto:mike@mikeampting.nl`, geel }, `media` { type `vimeo`, id `1180112439`, hash `5399f03c15`, ratio `1/1` } of { type `image` }, `reverse?`, `accent`, `triangles?: boolean`, `cinemaCursor?: boolean`.
- **Opbouw**: twee kolommen van 50% (41,67% op ≥1920), verticaal gecentreerd. Tekstkolom met gap 48px (32px op ≤991), titel en tekst gap 24px. Mediakolom: vierkant, `calc(100% - 32px)` met 32px marge links (max. 550px op ≥1920). Op ≤991 onder elkaar (media boven, 50% breed, 75% op ≤479). Zes oranje 3D-driehoekjes rond het beeld (vaste posities en rotaties, schaal .75 op ≤991, .5 op ≤479).
- **Media**: Vimeo 1180112439 (`background=1`, autoplay, muted, loop) met `loading="lazy"`. Zes inline SVG-driehoeken.
- **Gedrag**:
  - `scripts/cinema-cursor.ts`: popcorn-cursor 🍿 volgt de muis binnen de sectie, met een popcorn-spoor (elke 80 ms een emoji die omhoog zweeft en vervaagt, 0,9 s). Alleen bij `pointer: fine` en zonder reduced motion.
  - **Let op**: op de live homepage heeft deze sectie **geen** `id="cinema"`. De cursor werkt daar nu dus niet. Zie vraag 1.
- **Hergebruik**: `TextMedia` is het generieke tekst+beeld-blok. Dat komt op vrijwel elke dienstpagina terug (Webflow-component "text-image" met varianten geel/groen/reverse).

## 9. Footer

- **Component**: `layout/Footer.astro`
- **Props**: via `data/navigation.ts` (`footerColumns`, `contact`, `socials`, `legalLinks`, `copyright`).
- **Opbouw**:
  - Witte achtergrond met `Texture black.jpg` onder 80% wit. Padding 96px (48px op ≤767). Tekst `--color-gray-dark`, kolomkoppen Gate uppercase oranje, links Inter 300 16px, hover oranje.
  - Zes kolommen: Voor events, Voor artiesten, Voor zakelijke events, Bold Productions (met "Offerte aanvragen" vet), Contactgegevens (adres, e-mail, telefoon), logo + socials. Breedtes: 33% (<1280), 20% (≥1280), `flex: 1` (≥1920), 47% (≤767), 100% (≤479). Rij-gap 64px (48px op ≤479).
  - Onderrij: Privacyverklaring, Cookiebeleid, Algemene Voorwaarden, Sitemap (extern, nieuw tabblad) + "© Bold Productions 2026". Onder elkaar op ≤991.
  - Socials (LinkedIn, Instagram, Vimeo, TikTok) als inline SVG in vakjes van 36×36.
  - "Dienstkolommen": het zijn er drie plus de kolom "Bold Productions". Samen met contact en logo zes kolommen.
- **Media**: `Bold logo black.svg`, `Texture black.jpg`.
- **Hergebruik**: alle pagina's.

## 10. WhatsApp-knop

- **Component**: `ui/WhatsAppButton.astro` (in `BaseLayout`).
- **Props**: `href` (`https://wa.me/31623328655?text=`), `label` ("Chat via WhatsApp").
- **Opbouw**: vast rechtsonder (28px), 56×56 rond, `--color-whatsapp`, schaduw, hover `scale(1.1)`. Wit WhatsApp-icoon van 28px.
- **Gedrag**: geen JS.
- **Hergebruik**: alle pagina's.

---

## Overzicht nieuwe componenten

| Type   | Component                                                                       |
| ------ | ------------------------------------------------------------------------------- |
| layout | `Header`, `MegaMenu`, `MenuPanel`, `Footer`, `PageBackground`                   |
| ui     | `VimeoBackground`, `VimeoEmbed`, `BackgroundVideo`, `Carousel`, `TestimonialCard`, `Polaroid`, `DecoTriangles`, `WhatsAppButton`, `RichText` (wrapper met `.rich-text`) |
| sectie | `Hero`, `LogoMarquee`, `IntroHighlight`, `Timeline`, `Testimonials`, `PolaroidStack`, `TextMedia` |

## Scripts

| Module                 | Voor                                           | Vervangt                                     |
| ---------------------- | ---------------------------------------------- | -------------------------------------------- |
| `menu.ts`              | Menupaneel, overlay, accordeon, dropdowns      | Webflow-IX + MutationObserver/wheel-lock     |
| `hero-video.ts`        | Lazy Vimeo in de hero, fade-in                 | "Lazy load hero iframe" + mobiel-script      |
| `scroll-highlight.ts`  | SplitType + ScrollTrigger scrub                | idem                                         |
| `carousel.ts`          | Scroll-snap-knoppen                            | jQuery + Owl Carousel                        |
| `background-video.ts`  | Rookvideo via IntersectionObserver             | Webflow background video (autoplay)          |
| `cinema-cursor.ts`     | Popcorn-cursor                                 | idem                                         |
| `lenis.ts`, `scroll-animations.ts` | Al gebouwd                         | idem, plus anchor-links                      |

Niet nodig op de homepage (later): formulier-multiselect, casefilters, team-hover-video, FAQ-accordeon.

## Opmerkingen

- **Owl Carousel → scroll-snap**: geen Embla nodig. Peek, 1/2/3 kaarten, pijlen en disabled-status gaan prima met CSS + ±60 regels TS.
- **Logo-marquee → CSS**: geen GSAP nodig.
- **Afbeeldingen zonder alt**: logo's, testimonialfoto's en polaroids hebben live een lege `alt`. Zie vraag 3.
- **Performance-winst t.o.v. live**: geen jQuery, Owl, Vimeo `player.js`, dubbele GSAP (Webflow laadt GSAP 3.15 én de custom code 3.14), reCAPTCHA of WebFont-loader. Polaroids lazy in plaats van eager. Rookvideo 218 kB en lazy.
