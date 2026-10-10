/**
 * /cases — teksten letterlijk van www.weareboldproductions.com/cases.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../lib/sections';
import { caseGrid } from '../../data/cases';
import { teamTiles } from '../../data/team';
import bold56 from '../../assets/images/cases/bold-56.jpg';

export const page: PageData = {
  slug: 'cases',
  title: 'Cases',
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Videografie & Fotografie Portfolio',
      catalog: { name: 'Bold Productions Portfolio', items: ['Event Cases', 'Artiesten Cases', 'Zakelijke Cases'] },
    },
    title: 'Videografie & fotografie cases | Bold Productions',
    description:
      'Niet vertellen, maar laten zien. Bekijk ons werk voor artiesten, events en zakelijke klanten. Ontdek Bold.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Show,',
        titleAccent: "don't tell",
        eyebrow: 'Doen we voor je',
        primaryCta: {
          label: 'Boek Bold',
          href: '/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Dik werk',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: bold56,
          alt: 'Een zanger tijdens Legends of Rock. Foto door Bold Productions contentspecialist voor Events & Artiesten.',
        },
        accent: 'yellow',
      },
    },
    {
      type: 'breadcrumbs',
    },
    {
      type: 'richText',
      props: {
        id: 'first-section',
        content: [
          {
            h: ['Werk waar we trots op zijn.'],
            level: 2,
          },
          {
            p: [
              'Praten over wat je kunt is makkelijk. Laten zien wat je hebt gemaakt is eerlijker. Hieronder vind je een selectie van ',
              {
                text: 'events',
                strong: true,
              },
              ', ',
              {
                text: 'artiesten',
                strong: true,
              },
              ' en ',
              {
                text: 'zakelijke opdrachtgevers',
                strong: true,
              },
              ' waarvoor we hebben gewerkt. Elk project is anders. Elke opdrachtgever heeft andere doelstellingen. Maar het vertrekpunt is altijd hetzelfde: wat wil je bereiken, en hoe zorgen we dat onze content daaraan bijdraagt?',
              {
                br: true,
              },
              {
                text: 'Scrollen maar. Je bent er toch al.',
                em: true,
              },
            ],
          },
        ],
      },
    },
    {
      type: 'caseGrid',
      props: caseGrid,
    },
    {
      type: 'serviceTiles',
      props: {
        title: 'De mensen achter Bold.',
        gradient: 'yellow',
        variant: 'team',
        items: teamTiles(),
      },
    },
  ],
};
