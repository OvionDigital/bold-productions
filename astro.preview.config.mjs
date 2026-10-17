// @ts-check
/**
 * Preview-build voor de Presentation Tool in Sanity Studio (live voorbeeld tijdens het bewerken).
 * Zelfde site, maar per verzoek gerenderd op Cloudflare Workers, met concepten (drafts) en
 * klikbare bewerk-overlays. De gewone site (astro.config.mjs) blijft volledig statisch.
 *
 *   npm run preview:dev      lokaal, http://localhost:4322
 *   npm run preview:build    → dist-preview/ (deploy: npm run preview:deploy)
 *
 * Zie docs/sanity.md → "Live voorbeeld (Presentation)".
 */
import { mergeConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import base from './astro.config.mjs';

// Zichtbaar voor server- én browsercode (src/lib/preview.ts, src/scripts/main.ts)
process.env.PUBLIC_SANITY_PREVIEW = 'true';

export default mergeConfig(base, {
  output: 'server',
  outDir: './dist-preview',
  // Afbeeldingen ongewijzigd serveren: geen Cloudflare Images nodig, voor een voorbeeld goed genoeg
  adapter: cloudflare({ imageService: { build: 'compile', runtime: 'passthrough' }, configPath: './wrangler.preview.jsonc' }),
  integrations: [
    {
      // Bewerk-overlays (src/scripts/visual-editing.ts) op elke pagina, alleen in deze build: zo komt
      // er in de gewone build niets van in dist/ (main.ts blijft de enige bundel daar).
      name: 'sanity-visual-editing',
      hooks: {
        'astro:config:setup': ({ injectScript }) => injectScript('page', "import '/src/scripts/visual-editing.ts';"),
      },
    },
  ],
  // Geen sessies: anders vraagt de adapter een KV-namespace aan
  session: false,
  server: { port: 4322 },
  vite: {
    build: {
      // De bewerk-overlays (React) zitten in één los stuk dat alleen de preview laadt
      chunkSizeWarningLimit: 2000,
      rolldownOptions: {
        /** @param {{ code?: string }} warning @param {(w: any) => void} warn */
        onwarn(warning, warn) {
          // 'use client' e.d. in React-pakketten: onschuldig in een bundel
          if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') warn(warning);
        },
      },
    },
  },
});
