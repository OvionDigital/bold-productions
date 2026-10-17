import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import { nlNLLocale } from '@sanity/locale-nl-nl';
import { media } from 'sanity-plugin-media';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';
import { presentationOptions } from './presentation';
import { documentActions } from './actions';

/**
 * Bold Productions — Sanity Studio (in het Nederlands).
 * - Inhoud: pagina's uit secties, cases, testimonials, klantlogo's, team, menu & footer.
 * - Voorbeeld (Presentation): de site live met concepten, teksten aanklikbaar (presentation.ts).
 * - Media (sanity-plugin-media): alle afbeeldingen op één plek, met zoeken, mappen, tags en
 *   alt-tekst per afbeelding (geldt overal waar die afbeelding staat). Ook te kiezen bij
 *   "Selecteren" in een afbeeldingsveld.
 * - "Bekijk op de site" in het menu naast Publiceren (actions.ts).
 */
export default defineConfig({
  name: 'bold-productions',
  title: 'Bold Productions',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({ structure, title: 'Inhoud' }),
    presentationTool(presentationOptions),
    media({ creditLine: { enabled: true } }),
    nlNLLocale(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: documentActions,
  },
});
