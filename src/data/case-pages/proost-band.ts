/**
 * Inhoud van /cases/proost-band onder de feitenbalk. Teksten letterlijk van de live site.
 * Hero, kruimelpad, intro en feiten komen uit src/data/cases.ts.
 */
import type { PageSection } from '../../lib/sections';
import type { Rich } from '../../lib/rich';
import boldProductions53 from '../../assets/images/cases/proost-band/bold-productions-53.jpg';
import boldProductions52 from '../../assets/images/cases/proost-band/bold-productions-52.jpg';
import polaroid5 from '../../assets/images/polaroids/polaroid-5.jpg';
import mikeProostUdenhout10210 from '../../assets/images/cases/proost-band/mike-proost-udenhout-102-10.jpg';
import polaroid3 from '../../assets/images/polaroids/polaroid-3.jpg';

export const introText: Rich = [
  {
    p: [
      {
        text: 'PROOST',
        href: 'https://www.proost-band.nl/',
      },
      '! is geen gewone band. Ze toveren elke feesttent en elk festival binnen een minuut om tot één grote stamkroeg. Grootste hits. Special effects. Een show die je keer op keer verrast. De energie is er. De fanbase is er. Maar de beelden die dat moesten uitstralen aan boekers en nieuwe fans? Die ontbraken nog.',
    ],
  },
  {
    p: [
      'Bold Productions werd gevraagd om de bandpromo van 2025 te maken. Een video die laat zien wie PROOST! is. Op het podium. In de tent. En in het hoofd van iedereen die ze daarna wil boeken.',
    ],
  },
];

export const sections: PageSection[] = [
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['De band klopte. De beelden nog niet.'],
          level: 2,
        },
        {
          p: [
            'PROOST! heeft alles wat een succesvolle liveband nodig heeft. Energie, humor, een onnavolgbare show en een publiek dat er volledig in meegaat. Maar om door te groeien naar grotere podia en meer festivalboekingen, hadden ze één ding nodig dat ze nog niet hadden.',
          ],
        },
        {
          p: [
            'Beelden die dat allemaal lieten zien. Aan boekers die ze nog niet kenden. Aan festivalorganisatoren die besluiten in seconden. En aan een nieuw publiek dat nog moest ontdekken wat ze misten.',
          ],
        },
        {
          p: [],
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: boldProductions53,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Eerst leren kennen. Dan filmen.'],
          level: 2,
        },
        {
          p: [
            'We begonnen niet met een draaiboek. We begonnen met de band leren kennen. Want een bandpromo die werkt, voelt zoals de band zelf voelt. Niet gespeeld. Niet geregisseerd. Gevangen.',
          ],
        },
        {
          p: [
            'Het concept draaide om drie dingen: crowd, artiesten en avondenergie. We legden vast hoe PROOST! het publiek meeneemt. Hoe de sfeer in de tent verandert zodra ze het podium opgaan. En hoe dat gevoel van samen zijn er achteraf nog steeds in zit.',
          ],
        },
        {
          p: ['Energiek. Emotiegedreven. En deelbaar. Klaar voor socials, voor de website en voor het EPK.'],
        },
        {
          p: [],
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: boldProductions52,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Meer zichtbaarheid. Meer boekingen. Meer PROOST(en)!'],
          level: 2,
        },
        {
          p: [
            'De bandpromo had direct impact. Op de zichtbaarheid van de band online. Op de binding met bestaande fans. En op de kansen die boekers en festivalorganisatoren zagen.',
          ],
        },
        {
          p: [
            'De video werd massaal gedeeld, ook buiten het bestaande fanpubliek. Nieuwe mensen maakten kennis met PROOST!. De professionele uitstraling richting boekers en partners zorgde voor meer optredens en samenwerkingen.',
            {
              text: " Check 'm hieronder.",
              em: true,
            },
          ],
        },
        {
          quote: [
            {
              text: 'We zijn nu al drie jaar vaste videopartner van Proost!',
              strong: true,
            },
          ],
        },
        {
          video: {
            id: '1053028749',
            title: 'PROOST! BAND | BANDPROMO 2025',
            ratio: 0.4554,
          },
        },
      ],
    },
  },
  {
    type: 'polaroidStack',
    props: {
      eyebrow: 'Never seen before',
      title: 'van Proost!',
      gradient: 'green',
      photos: [
        {
          src: polaroid5,
          alt: '',
        },
        {
          src: mikeProostUdenhout10210,
          alt: '',
        },
        {
          src: polaroid3,
          alt: '',
        },
      ],
    },
  },
  {
    type: 'videoFeature',
    props: {
      video: {
        id: '1089675440',
        title: 'Vimeo embed',
      },
      ratio: 0.5625,
    },
  },
];
