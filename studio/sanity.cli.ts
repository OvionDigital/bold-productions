import { defineCliConfig } from 'sanity/cli';

/**
 * Project-ID en dataset komen uit studio/.env (Sanity leest daar alleen SANITY_STUDIO_*-
 * variabelen uit) of uit de omgeving:
 *   SANITY_STUDIO_PROJECT_ID=xxxxxxxx
 *   SANITY_STUDIO_DATASET=production
 *
 * `studioHost`: `npx sanity deploy` zet de Studio online op
 * https://bold-productions.sanity.studio (zie docs/sanity.md).
 */
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production',
  },
  studioHost: 'bold-productions',
});
