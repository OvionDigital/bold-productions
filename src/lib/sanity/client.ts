/**
 * Sanity is optioneel: zonder PUBLIC_SANITY_PROJECT_ID blijft de site draaien op
 * src/data (zie src/lib/sanity/homepage.ts). Alleen build-time gebruikt (geen
 * runtime-fetch in de browser; static output blijft static).
 */
import { createClient, type SanityClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const isSanityConfigured = Boolean(projectId);

export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({
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
    })
  : null;
