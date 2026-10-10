/**
 * Inhoud van /cases/waterschap-rijn-ijssel onder de feitenbalk. Teksten letterlijk van de live site.
 * Hero, kruimelpad, intro en feiten komen uit src/data/cases.ts.
 */
import type { PageSection } from '../../lib/sections';
import type { Rich } from '../../lib/rich';
import mikeWaterschapHuisfeestje3 from '../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-3.jpg';
import mikeWaterschapHuisfeestje43 from '../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-43.jpg';
import mikeWaterschapHuisfeestje63 from '../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-63.jpg';
import mikeWaterschapHuisfeestje101 from '../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-101.jpg';
import mikeWaterschapHuisfeestje176 from '../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-176.jpg';
import mikeWaterschapHuisfeestje88 from '../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-88.jpg';
import mikeWaterschapHuisfeestje45 from '../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-45.jpg';

export const introText: Rich = [
  {
    p: [
      'Een bedrijfsfeest voor veel medewerkers organiseer je niet zomaar. Dat vraagt om planning, ambitie en een avond die écht iets teweegbrengt bij de mensen die er dag in dag uit voor je organisatie werken.',
    ],
  },
  {
    p: ["Waterschap Rijn IJssel zette zo'n avond neer. Bold Productions zorgde voor dé aftermovie en fotografie."],
  },
];

export const sections: PageSection[] = [
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Honderden mensen. Één gevoel vangen.'],
          level: 2,
        },
        {
          p: [
            'Een bedrijfsfeest van deze omvang vastleggen is een vak apart. Er gebeurt overal tegelijk iets. Honderden gezichten, honderd momenten, honderd kansen om iets te missen.',
          ],
        },
        {
          p: [
            'De uitdaging was om uit al die drukte precies die beelden te halen die het gevoel van de avond samenvatten. De trots. De verbinding. De energie van een organisatie die samen viert wat ze heeft opgebouwd. En dat te vertalen naar een ',
            {
              text: 'aftermovie ',
              href: '/zakelijke-events/aftermovie',
            },
            'en ',
            {
              text: 'fotoreportage ',
              href: '/zakelijke-events/fotografie',
            },
            'die intern breed inzetbaar zijn, lang na de avond zelf.',
          ],
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: mikeWaterschapHuisfeestje3,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Overal tegelijk. Met een plan.'],
          level: 2,
        },
        {
          p: [
            'We gingen de middag in met een strakke draaiplanning. Welke momenten zijn cruciaal? Waar zit de energie? Wat moeten we sowieso hebben? Zo zorgden we dat we op het juiste moment op de juiste plek stonden, ook in een zaal vol honderden mensen.',
            {
              br: true,
            },
            'Voor de aftermovie werkten we emotiegedreven. Niet zomaar een overzicht van wat er allemaal was. Maar de momenten die laten voelen hoe het was om erbij te zijn. De lach, de verrassing, de saamhorigheid die alleen ontstaat als een hele organisatie samen op één plek is.',
            {
              br: true,
            },
            {
              br: true,
            },
            'Maar we wisten ook dat Waterschap Rijn IJssel niet weken wilde wachten op de eerste beelden. Daarom maakten we naast de volledige aftermovie ook een teaser. Een korte, krachtige mini-aftermovie die snel kon worden gedeeld, terwijl de grote productie nog in post-productie zat. Zo had de organisatie binnen no-time iets in handen om intern te delen en de energie van de avond levend te houden. De fotografie leverde daarnaast een complete set beelden op, direct inzetbaar voor interne communicatie, social media en toekomstige evenementen.',
          ],
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: mikeWaterschapHuisfeestje43,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Precies wat ze hoopten. En dan nog een beetje meer.'],
          level: 2,
        },
        {
          p: [
            'De teaser zorgde voor een directe eerste indruk, nog voordat de volledige aftermovie klaar was. De complete aftermovie en fotografie overtroffen daarna de verwachtingen van de opdrachtgever. De beelden vingen precies het gevoel van de avond, op een manier die intern breed werd gedeeld en met trots werd ontvangen.',
          ],
        },
        {
          p: ['Honderden medewerkers zagen zichzelf terug in de content. En voelden opnieuw wat ze die avond voelden.'],
        },
        {
          video: {
            id: '1099445898',
            title: 'Waterschap Rijn en Ijssel | Aftermovie',
            ratio: 0.5634,
          },
        },
      ],
    },
  },
  {
    type: 'polaroidStack',
    props: {
      eyebrow: "Meer foto's",
      title: 'Scroll verder',
      gradient: 'green',
      photos: [
        {
          src: mikeWaterschapHuisfeestje63,
          alt: '',
        },
        {
          src: mikeWaterschapHuisfeestje101,
          alt: '',
        },
        {
          src: mikeWaterschapHuisfeestje176,
          alt: '',
        },
        {
          src: mikeWaterschapHuisfeestje88,
          alt: '',
        },
        {
          src: mikeWaterschapHuisfeestje45,
          alt: '',
        },
      ],
    },
  },
];
