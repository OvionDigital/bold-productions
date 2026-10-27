/**
 * /sitemap — overzicht van alle pagina's, zonder hero: kruimelpad, kop en linkgroepen
 * (LinkGroups). De groepen komen automatisch uit alle indexeerbare pagina's en cases
 * (lib/sitemap.ts), dus een nieuwe, gewijzigde of verwijderde pagina klopt vanzelf.
 */
import type { PageData } from '../../lib/sections';

export const page: PageData = {
  slug: 'sitemap',
  title: 'Sitemap',
  meta: {
    title: 'Sitemap',
    description: "Een overzicht van alle pagina's op weareboldproductions.com.",
  },
  sections: [
    { type: 'breadcrumbs' },
    {
      type: 'linkGroups',
      props: {
        eyebrow: 'Zoek & vind een pagina.',
        title: 'Sitemap',
        titleAs: 'h1',
        gradient: 'orange',
        // Automatisch alle pagina's (lib/sitemap.ts, ingevuld in lib/pages.ts)
        auto: 'site',
        groups: [],
      },
    },
  ],
};
