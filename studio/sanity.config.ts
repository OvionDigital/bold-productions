import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

/**
 * Bold Productions — Sanity Studio.
 * Proefopzet: alleen de homepage-inhoud (schemaTypes/documents/homepage.ts) +
 * herbruikbare testimonials en klantlogo's. Later per pagina uit te breiden.
 */
export default defineConfig({
  name: 'bold-productions',
  title: 'Bold Productions',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
