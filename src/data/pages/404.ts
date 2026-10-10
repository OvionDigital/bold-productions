/**
 * /404 — teksten letterlijk van de live 404-pagina (www.weareboldproductions.com/<onbekend pad>).
 * Wordt dist/404.html; Cloudflare Pages serveert die bij elk onbekend pad (met status 404).
 */
import type { PageData } from '../../lib/sections';
import inDeSchijnwerpers from '../../assets/images/404/in-de-schijnwerpers.png';

export const page: PageData = {
  slug: '404',
  title: '404 - Pagina niet gevonden',
  meta: {
    title: 'Bold Productions | 404 - Pagina niet gevonden',
    description: '',
    noindex: true,
  },
  sections: [
    {
      type: 'richText',
      props: {
        align: 'center',
        content: [
          {
            h: ['errorrrr 404 '],
            level: 1,
          },
          {
            p: [],
          },
        ],
      },
    },
    {
      type: 'textMedia',
      props: {
        title: 'Deze pagina bestaat niet',
        gradient: 'none',
        body: [
          {
            p: [
              'Wat er ook is misgegaan — een verkeerde link, een typfout of gewoon pech — dit is niet de plek waar je wilde zijn.',
            ],
          },
          {
            p: ['Geen zorgen. Het overkomt de besten.'],
          },
          {
            p: ['Zelfs ons.'],
          },
        ],
        cta: {
          label: 'Terug naar home',
          href: '/',
          accent: 'orange',
        },
        media: {
          type: 'image',
          src: inDeSchijnwerpers,
          alt: 'In de schijnwerpers: Bold Productions contentspecialist voor Events & Artiesten.',
        },
        triangles: true,
      },
    },
  ],
};
