import { defineCliConfig } from 'sanity/cli';

/**
 * Project-ID en dataset komen uit .env (root van de repo, één .env voor site + studio).
 * Zet ze na het aanmaken van het Sanity-project in .env:
 *   PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
 *   PUBLIC_SANITY_DATASET=production
 */
export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  },
});
