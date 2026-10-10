/**
 * Inhoud van /cases/doorgedraaid-feestival onder de feitenbalk. Teksten letterlijk van de live site.
 * Hero, kruimelpad, intro en feiten komen uit src/data/cases.ts.
 */
import type { PageSection } from '../../lib/sections';
import type { Rich } from '../../lib/rich';
import mikeDoorgedraaidLogo1217 from '../../assets/images/cases/doorgedraaid-feestival/mike-doorgedraaid-logo-1-217.jpg';
import mikeDoorgedraaidLogo1243 from '../../assets/images/cases/doorgedraaid-feestival/mike-doorgedraaid-logo-1-243.jpg';
import mikeDoorgedraaidLogo1238 from '../../assets/images/cases/doorgedraaid-feestival/mike-doorgedraaid-logo-1-238.jpg';
import reinierPeters from '../../assets/images/testimonials/reinier-peters.jpg';
import mikeDoorgedraaidLogo180 from '../../assets/images/cases/doorgedraaid-feestival/mike-doorgedraaid-logo-1-80.jpg';
import mikeDoorgedraaidLogo1115 from '../../assets/images/cases/doorgedraaid-feestival/mike-doorgedraaid-logo-1-115.jpg';
import mikeDoorgedraaidLogo1199 from '../../assets/images/cases/doorgedraaid-feestival/mike-doorgedraaid-logo-1-199.jpg';

export const introText: Rich = [
  {
    p: [
      'Doorgedraaid Feestival is een festival met karakter. Een eigen geluid. Een publiek dat er jaar na jaar op afkomt. Maar de content die dat moest uitstralen? Die deed het festival geen recht. Te verouderd. Te ver van de doelgroep.',
    ],
  },
  {
    p: [
      'Bold Productions werd gevraagd om dat te veranderen. Met een aftermovie en fotografie die de echte energie van Doorgedraaid lieten zien. Voor de mensen die er al bij waren. En voor de mensen die er nog niet bij waren geweest.',
    ],
  },
  {
    h: [],
    level: 2,
  },
];

export const sections: PageSection[] = [
  {
    type: 'richText',
    props: {
      content: [
        {
          h: [
            'Het probleem was niet het festival.',
            {
              br: true,
            },
            'Het was de content.',
          ],
          level: 2,
        },
        {
          p: [
            'Doorgedraaid Feestival heeft energie. Sfeer. Een trouwe fanbase. Maar de bestaande content deed daar geen recht aan. De beelden waren verouderd en sloegen de plank mis bij de jongere doelgroep. Terwijl het festival zelf precies was wat die doelgroep zocht.',
          ],
        },
        {
          p: [
            'Het doel was helder. Content maken die de unieke sfeer en energie van Doorgedraaid écht overbrengt. Niet netjes. Niet braaf. Maar raak.',
          ],
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: mikeDoorgedraaidLogo1217,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Eerst begrijpen. Dan schieten.'],
          level: 2,
        },
        {
          p: [
            'We begonnen niet met een camera. We begonnen met vragen. Wie is de doelgroep? Wat maakt Doorgedraaid uniek? Welk gevoel moet iemand krijgen als hij de aftermovie ziet?',
          ],
        },
        {
          p: [
            'Op basis van die inzichten ontwikkelden we een creatief concept met video en fotografie als kern. Meerdere invalshoeken. Meerdere cameraperspectieven. Drone voor de grootsheid. FPV-drone voor de energie en snelheid. POV voor de beleving van de bezoeker zelf. En standaard camerawerk voor de menselijke momenten die het festival definiëren.',
          ],
        },
        {
          p: ['Geen format. Geen template. Gewoon de aanpak die paste bij dit festival en deze doelgroep.'],
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: mikeDoorgedraaidLogo1243,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Massaal bekeken. Massaal gedeeld.'],
          level: 2,
        },
        {
          p: [
            'De aftermovie werd op de social media kanalen van Doorgedraaid massaal bekeken, geliket en gedeeld. Door bezoekers, door artiesten, door mensen die er niet bij waren maar de volgende keer wel willen zijn.',
          ],
        },
        {
          p: [
            'De fotografie werd breed ingezet in de communicatie van het festival. Doorgedraaid heeft nu content die verkoopt. En reacties die dat bewijzen.',
          ],
        },
        {
          video: {
            id: '1074314358',
            title: 'Doorgedraaid Feestival | Aftermovie',
            ratio: 0.5634,
          },
        },
      ],
    },
  },
  {
    type: 'polaroidStack',
    props: {
      eyebrow: 'Bekijk nog',
      title: 'Een aantal bangers.',
      gradient: 'green',
      photos: [
        {
          src: mikeDoorgedraaidLogo1238,
          alt: '',
        },
        {
          src: reinierPeters,
          alt: '',
        },
        {
          src: mikeDoorgedraaidLogo180,
          alt: '',
        },
        {
          src: mikeDoorgedraaidLogo1115,
          alt: '',
        },
        {
          src: mikeDoorgedraaidLogo1199,
          alt: '',
        },
      ],
    },
  },
];
