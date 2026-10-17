/**
 * Sanity is optioneel: zonder PUBLIC_SANITY_PROJECT_ID blijft de site draaien op
 * src/data (zie src/lib/sanity/homepage.ts). In de gewone build alleen build-time gebruikt
 * (geen runtime-fetch in de browser; static output blijft static).
 *
 * Preview-build (lib/preview.ts): concepten per verzoek, met stega — onzichtbare tekens in
 * zichtbare teksten die naar het veld in Studio verwijzen (klikbare overlays in Presentation).
 */
import { createClient, type SanityClient } from '@sanity/client';
import { isPreview } from '../preview';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const isSanityConfigured = Boolean(projectId);

/**
 * Alleen deze velden krijgen stega: tekst die op de pagina staat. Alles wat code als waarde
 * gebruikt (accentkleur, uitlijning, anker-ID, formulier, Vimeo-ID, links) blijft schoon.
 * Laatste stuk van het pad; `text` is ook de tekst in rich text (Portable Text-spans). De
 * Events-homepage heeft voorvoegsels (heroTitle, backstageEyebrow, …); SEO-velden (meta…) niet.
 */
const STEGA_FIELDS = new Set([
  'title',
  'titleAccent',
  'eyebrow',
  'text',
  'intro',
  'label',
  'shortLabel',
  'ctaLabel',
  'quote',
  'name',
  'organisation',
  'role',
  'question',
  'client',
  'casesGroupTitle',
]);
const isVisibleText = (field: string) => STEGA_FIELDS.has(field) || (/[a-z](Title|TitleAccent|Eyebrow)$/.test(field) && !field.startsWith('meta'));

export const sanityClient: SanityClient | null = !isSanityConfigured
  ? null
  : isPreview
    ? createClient({
        projectId,
        dataset,
        apiVersion: '2025-02-19',
        useCdn: false,
        // Viewer-token (alleen lezen), nodig voor concepten. Staat alleen in de server-bundel.
        // Lokaal mag het schrijf-token uit .env ook.
        token: import.meta.env.SANITY_API_READ_TOKEN || import.meta.env.SANITY_API_WRITE_TOKEN,
        perspective: 'drafts',
        stega: {
          enabled: true,
          studioUrl: import.meta.env.PUBLIC_SANITY_STUDIO_URL || 'https://bold-productions.sanity.studio',
          filter: (props) => isVisibleText(String(props.sourcePath.at(-1))) && props.filterDefault(props),
        },
      })
    : createClient({
        projectId,
        dataset,
        apiVersion: '2025-01-01',
        // Geen API-CDN: een build die direct na "Publiceren" start (webhook) moet de
        // nieuwste inhoud zien; de CDN kan dan nog even de vorige versie geven.
        useCdn: false,
        // Alleen gezet als er een token in de omgeving staat (bv. tijdens deploy
        // met concepten inbegrepen); zonder token worden alleen published documents opgehaald.
        token: import.meta.env.SANITY_API_WRITE_TOKEN || undefined,
        perspective: 'published',
      });
