# TODO: meten bij de livegang

Wat nodig is om na de overstap van Webflow naar Astro te kunnen aantonen wat de site
oplevert. Werkwijze: Claude-skill `klantresultaten`, register in
`~/ovion/klantresultaten/` (map `bold-productions`). GA4, GTM en Search Console beheert de
SEO-specialist van Bold; wij leveren de events en tellen de aanvragen. Een kruisje [x]
betekent: geregeld.

## Vóór livegang

- [x] Nulmeting PageSpeed van de Webflow-site (2026-10-21): mobiel 51, LCP 24,9 s;
      desktop 38, LCP 5,2 s
- [ ] Klant laten tellen: Webflow-meldingen van het contactformulier per maand
      (`from:no-reply-forms@webflow.com` in de inbox die ze krijgt), liefst de laatste 6
      tot 12 maanden. Alleen aantallen.
- [ ] SEO-specialist vragen of die klikken uit Google per maand wil delen (voor en na de
      livegang). Niet verplicht.

## In de code

- [x] Backend voor de formulieren: `functions/api/form.ts` (Resend), zie README
- [x] `FORM_TO_EMAIL` = mike@weareboldproductions.com (Cloudflare, preview + production, 2026-10-22)
- [ ] Bij de livegang: weareboldproductions.com in Resend verifiëren en `FORM_FROM_EMAIL` op dat
      domein zetten (nu noreply@oviondigital.nl)
- [ ] `formulier_verzonden` naar de `dataLayer` na een geslaagde verzending, in
      `src/scripts/contact-form.ts` na `response.ok` (niet op de klik op de knop: die telt
      ook fouten en dubbel klikken). Met het soort formulier (contact, offerte,
      trouwfilm) als parameter.
- [ ] `klik_telefoon`, `klik_email` en `klik_whatsapp` naar de `dataLayer` bij een klik op
      `tel:`, `mailto:` en `wa.me`-links (WhatsAppButton, ContactLinks). Eigen module in
      `src/scripts/` via `main.ts`, zoals de rest.
- [ ] Directe telling: in de formulierfunctie per maand en per formulier een teller
      ophogen zonder persoonsgegevens, zodat GA4 niet de enige bron is
- [ ] "Hoe heb je ons gevonden?" staat in beide offerteformulieren (Business: `Gevonden via`);
      waarde ook als `gevonden_via` bij `formulier_verzonden`

## Afstemmen met de SEO-specialist

- [ ] In GTM GA4-event-tags voor de vier events (zelfde namen), en in GA4 als key event
      markeren
- [ ] Consent Mode via CookieFirst in GTM controleren
      (`klantresultaten.mjs consent https://www.weareboldproductions.com/`)

## Bij en na livegang

- [ ] `PUBLIC_ENABLE_TRACKING=true` en de consenttest op het echte domein
- [ ] Livegangdatum in het register (`livegang_zeker` = ja, `status` = live)
- [ ] PageSpeed opnieuw met dezelfde bron (psi), voor de vergelijking met de nulmeting
