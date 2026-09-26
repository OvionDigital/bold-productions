// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.weareboldproductions.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
    // CSS inline: geen render-blokkerende request (≈14 kB gzip per pagina)
    inlineStylesheets: 'always',
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true,
    // Sanity-afbeeldingen (proef, alleen homepage): originele URL toestaan zodat
    // astro:assets ze net als lokale bestanden naar AVIF/WebP omzet. Zie src/lib/sanity/image.ts.
    domains: ['cdn.sanity.io'],
  },
});
