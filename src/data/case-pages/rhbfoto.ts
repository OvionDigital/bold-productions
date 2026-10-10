/**
 * Inhoud van /cases/rhbfoto onder de feitenbalk. Teksten letterlijk van de live site.
 * Hero, kruimelpad, intro en feiten komen uit src/data/cases.ts.
 */
import type { PageSection } from '../../lib/sections';
import type { Rich } from '../../lib/rich';
import zdhFedbal123 from '../../assets/images/cases/rhbfoto/zdh-fedbal-123.jpg';
import zdhFedbal190 from '../../assets/images/cases/rhbfoto/zdh-fedbal-190.jpg';
import zdhFedbal164 from '../../assets/images/cases/rhbfoto/zdh-fedbal-164.jpg';
import zdhFedbal152 from '../../assets/images/cases/rhbfoto/zdh-fedbal-152.jpg';
import zdhFedbal95 from '../../assets/images/cases/rhbfoto/zdh-fedbal-95.jpg';
import zdhFedbal6 from '../../assets/images/cases/rhbfoto/zdh-fedbal-6.jpg';
import zdhFedbal2 from '../../assets/images/cases/rhbfoto/zdh-fedbal-2.jpg';

export const introText: Rich = [
  {
    p: [
      'Het Federatiebal is een jaarlijks terugkerend evenement in Eindhoven waarbij één moment centraal staat: de onthulling van de nieuwe prins, De Neie. Een avond vol spanning, sfeer en saamhorigheid, die voor de vaste bezoekers elk jaar weer het hoogtepunt van het seizoen is.',
      {
        br: true,
      },
      'Bold Productions verzorgde de volledige videoproductie en fotografie voor de editie van 2025. Met als doel: de onthulling vastleggen op een manier die recht doet aan het gewicht van het moment. Voor de aanwezigen die het willen herbeleven. Voor de mensen die er niet bij waren en volgend jaar zeker komen. En voor de organisatie die jaar na jaar een sterker event wil neerzetten.',
    ],
  },
];

export const sections: PageSection[] = [
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['De onthulling van een nieuwe prins. Elk jaar opnieuw het moment.'],
          level: 2,
        },
        {
          p: [
            'Het Federatiebal heeft een vaste kern van bezoekers die weet wat er komen gaat. En toch is de onthulling van De Neie elk jaar weer het moment waarop alles samenkomt. De spanning. De verrassing. De reacties van het publiek op het moment dat de nieuwe prins wordt bekendgemaakt.',
            {
              br: true,
            },
            'Dat moment vastleggen op een manier die de energie écht overbrengt, is geen vanzelfsprekendheid. Te breed en je mist de intimiteit. Te dichtbij en je mist de grootsheid. De content moest beide hebben. En hij moest ook nieuwe mensen nieuwsgierig maken naar wat ze volgend jaar kunnen verwachten.',
          ],
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: zdhFedbal123,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['De spanning opbouwen. Het moment vangen. De avond laten nagalmen.'],
          level: 2,
        },
        {
          p: [
            'We gingen het Federatiebal in met een duidelijk plan en meerdere videografen. Want bij een onthulling weet je van tevoren niet precies waar de magie zit. Dus zorgden we dat we overal tegelijk waren.',
          ],
        },
        {
          p: [
            'De aftermovie werd opgebouwd als een verhaal met één climax: de onthulling van De Neie. De aanloop, de spanning in de zaal, het moment zelf en de reacties die volgden. Dat zijn de beelden die een jaarlijks event groter maken dan de avond alleen.',
          ],
        },
        {
          p: [
            'De fotografie leverde een complete set op, direct inzetbaar voor PR, socials en de promotie van de volgende editie. Beelden die laten zien wat het Federatiebal is. En die mensen die er niet bij waren, doen denken: volgend jaar ben ik erbij.',
          ],
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: zdhFedbal190,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Een avond die dagen voortleefde. En een event dat groter wordt.'],
          level: 2,
        },
        {
          p: [
            "De aftermovie en foto's werden veel gedeeld door bezoekers en niet-aanwezigen. De avond leefde voort op social media. De organisatie had direct sterk promomateriaal in handen voor de volgende editie. En richting partners en sponsors straalde de productie precies het vertrouwen uit dat een jaarlijks terugkerend event nodig heeft om te blijven groeien.",
          ],
        },
        {
          p: ['Het Federatiebal bestaat één avond per jaar. De content zorgt dat die avond het hele jaar blijft bestaan.'],
        },
        {
          video: {
            id: '1062326074',
            title: 'RHBFOTO | DE NEIE - AFTERMOVIE',
            ratio: 0.5634,
          },
        },
      ],
    },
  },
  {
    type: 'polaroidStack',
    props: {
      eyebrow: 'Bekijk hieronder',
      title: "Nog meer foto's",
      gradient: 'green',
      photos: [
        {
          src: zdhFedbal164,
          alt: '',
        },
        {
          src: zdhFedbal152,
          alt: '',
        },
        {
          src: zdhFedbal95,
          alt: '',
        },
        {
          src: zdhFedbal6,
          alt: '',
        },
        {
          src: zdhFedbal2,
          alt: '',
        },
      ],
    },
  },
];
