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
  },
});
