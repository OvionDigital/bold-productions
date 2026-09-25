# Performance homepage

Gemeten op 25-09-2026 met Lighthouse 12 (mobiel profiel: gesimuleerde 4G, CPU-vertraging 4×), lokaal via Chrome, tegen https://preview.bold-productions.pages.dev/. Vijf runs op de preview en drie op de live Webflow-site. Hieronder de mediaan.

| Metric      | Nieuw (preview) | Huidig (Webflow) |
| ----------- | --------------- | ---------------- |
| Score       | **96**          | 55               |
| FCP         | 1,54 s          | 4,14 s           |
| LCP         | **2,26 s**      | 18,85 s          |
| TBT         | **23 ms**       | 215 ms           |
| CLS         | **0**           | 0                |
| Speed Index | 3,82 s          | 9,31 s           |
| JS-bestanden (eigen) | 1 bundel: 150 kB, 55 kB gzip | 31 bestanden, 1,48 MB |

Spreiding over de runs op de preview: score 91–97, LCP 2,21–3,06 s. De laagste run viel samen met een koude CDN-cache.

## Wat de winst geeft

- Eén JS-bundel (GSAP + ScrollTrigger, Lenis, SplitType en eigen modules). Geen jQuery, Owl, Vimeo `player.js`, WebFont-loader, reCAPTCHA of dubbele GSAP.
- CSS inline in de HTML (`inlineStylesheets: 'always'`), dus geen render-blokkerende request.
- Fonts self-hosted en gesubset: Gate (2 × ~16 kB, gepreload) en Inter variabel (48 kB). Metrische fallbacks, dus geen layout shift.
- Hero: eigen `<picture>` met AVIF/WebP en `fetchpriority="high"`. Op staande mobiele schermen een centrale 2:3-uitsnede (88 kB in plaats van 170 kB). De Vimeo-video pas na `window.load`.
- Textuurachtergronden (pagina en footer) als AVIF, pas na `window.load`.
- Rookvideo: `preload="none"`, poster als AVIF. Laden en afspelen alleen in beeld.
- Alle beelden onder de vouw `loading="lazy"`.

## Opmerkingen

- Lighthouse kiest het logo als LCP-element (de hero-titel fadet in, de hero-afbeelding ligt onder een overlay).
- De totale overdracht in Lighthouse (~20 MB) bestaat vrijwel helemaal uit de Vimeo-videostream van de hero, die na `window.load` start. Die telt niet mee voor LCP en TBT.
- Resterende Lighthouse-suggestie: "responsive images" (~87 kB), vooral kleine overschattingen bij de tijdlijnfoto's.

## Opnieuw meten

```sh
# PageSpeed Insights (Google-servers, anonieme quota is beperkt)
https://pagespeed.web.dev/analysis?url=https://preview.bold-productions.pages.dev/

# Lokaal (vereist Chrome)
npx lighthouse https://preview.bold-productions.pages.dev/ --only-categories=performance --view
```
