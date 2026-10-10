/**
 * Inhoud van /cases/drift onder de feitenbalk. Teksten letterlijk van de live site.
 * Hero, kruimelpad, intro en feiten komen uit src/data/cases.ts.
 */
import type { PageSection } from '../../lib/sections';
import type { Rich } from '../../lib/rich';
import spotSeq00265515Still011 from '../../assets/images/cases/drift/spot-seq-00-26-55-15-still011.jpg';
import spotSeq00261008Still010 from '../../assets/images/cases/drift/spot-seq-00-26-10-08-still010.jpg';
import spotSeq00000614Still002 from '../../assets/images/cases/drift/spot-seq-00-00-06-14-still002.jpg';
import spotSeq00000614Still001 from '../../assets/images/cases/drift/spot-seq-00-00-06-14-still001.jpg';
import spotSeq00115702Still006 from '../../assets/images/cases/drift/spot-seq-00-11-57-02-still006.jpg';
import spotSeq00122303Still007 from '../../assets/images/cases/drift/spot-seq-00-12-23-03-still007.jpg';
import spotSeq00073014Still005 from '../../assets/images/cases/drift/spot-seq-00-07-30-14-still005.jpg';

export const introText: Rich = [
  {
    p: [
      {
        text: 'Drift op de Boot. ',
        href: 'https://driftomtedansen.nl/',
      },
      'Een event met een eigen karakter, een eigen publiek en een sfeer die je nergens anders vindt. Een boot vol mensen, muziek en energie die je wil vastleggen en delen op het moment dat het gebeurt.',
    ],
  },
  {
    p: [
      "Bold Productions verzorgde de volledige social content productie voor deze middag. Niet een paar losse clips achteraf. Maar meer dan 50 verschillende video's, dezelfde avond nog opgeleverd en direct klaar voor gebruik op social media.",
    ],
  },
];

export const sections: PageSection[] = [
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Eén middag. Alles vastleggen. Dezelfde avond nog opleveren.'],
          level: 2,
        },
        {
          p: [
            'Social content werkt het beste als hij snel is. Een video van een event die drie dagen later online komt, heeft de helft van de impact van eentje die dezelfde avond nog live gaat. Terwijl de sfeer nog vers is. Terwijl mensen nog na zitten te praten. Terwijl de energie nog voelbaar is.',
          ],
        },
        {
          p: [
            "De uitdaging was om de hele avond vast te leggen, van mensen en details tot artiesten en sfeerbeelden, en dat allemaal dezelfde avond nog op te leveren in een bruikbare vorm. Meer dan 50 video's. Klaar om direct te posten.",
          ],
        },
        {
          video: {
            id: '1188618269',
            title: 'MikeAmpting_DRIFT - People 26',
            ratio: 1.775,
            width: 45,
          },
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: spotSeq00265515Still011,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Gericht schieten. Snel monteren. Direct opleveren.'],
          level: 2,
        },
        {
          p: [
            'We gingen Drift op de Boot in met een duidelijk plan. Wat hebben we nodig? Welke momenten zijn cruciaal? Hoe verdelen we de productie zodat we alles vangen zonder iets te missen?',
          ],
        },
        {
          p: [
            'Op locatie schoten we breed en gericht tegelijk. Artiesten op het hoogtepunt van hun set. Bezoekers die volledig opgaan in de avond. Details die de sfeer van een boot vol mensen vangen. De kleine momenten die samen het grote gevoel bepalen.',
          ],
        },
        {
          p: [
            "En terwijl de avond nog bezig was, begon de montage al. We werkten snel, zonder in te leveren op kwaliteit. Het resultaat: meer dan 50 verschillende video's, variërend in lengte en format, direct inzetbaar voor Instagram, TikTok en andere kanalen.",
          ],
        },
        {
          video: {
            id: '1188618250',
            title: 'MikeAmpting_DRIFT - People 24',
            ratio: 1.775,
            width: 45,
          },
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: spotSeq00261008Still010,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ["50+ video's. Dezelfde avond. Direct inzetbaar."],
          level: 2,
        },
        {
          p: [
            'Drift had dezelfde avond nog een complete bibliotheek aan social content in handen. Van korte snappy clips tot langere sfeerbeelden. Van close-ups van artiesten tot brede overzichten van de crowd. Van intieme detailshots tot energieke actiemomenten.',
          ],
        },
        {
          p: [
            'Content die de sfeer van de avond vasthield op het moment dat die het sterkst was. En die de organisatie weken kon inzetten op social media en de volgende editie kon promoten.',
          ],
        },
        {
          video: {
            id: '1188618119',
            title: 'DRIFT - Artist clip 3',
            ratio: 1.775,
            width: 45,
          },
        },
      ],
    },
  },
  {
    type: 'polaroidStack',
    props: {
      eyebrow: 'Check nog wat',
      title: 'Stills',
      gradient: 'green',
      photos: [
        {
          src: spotSeq00000614Still002,
          alt: '',
        },
        {
          src: spotSeq00000614Still001,
          alt: '',
        },
        {
          src: spotSeq00115702Still006,
          alt: '',
        },
        {
          src: spotSeq00122303Still007,
          alt: '',
        },
        {
          src: spotSeq00073014Still005,
          alt: '',
        },
      ],
    },
  },
];
