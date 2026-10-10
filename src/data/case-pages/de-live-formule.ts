/**
 * Inhoud van /cases/de-live-formule onder de feitenbalk. Teksten letterlijk van de live site.
 * Hero, kruimelpad, intro en feiten komen uit src/data/cases.ts.
 */
import type { PageSection } from '../../lib/sections';
import type { Rich } from '../../lib/rich';
import mikexdeliveformuleFinis100Jaar80 from '../../assets/images/cases/de-live-formule/mikexdeliveformule-finis-100-jaar-80.jpg';
import mikexdeliveformuleFinis100Jaar124 from '../../assets/images/cases/de-live-formule/mikexdeliveformule-finis-100-jaar-124.jpg';
import mikexdeliveformuleFinis100Jaar205 from '../../assets/images/cases/de-live-formule/mikexdeliveformule-finis-100-jaar-205.jpg';
import mikexdeliveformuleFinis100Jaar173 from '../../assets/images/cases/de-live-formule/mikexdeliveformule-finis-100-jaar-173.jpg';
import mikexdeliveformuleFinis100Jaar174 from '../../assets/images/cases/de-live-formule/mikexdeliveformule-finis-100-jaar-174.jpg';
import mikexdeliveformuleFinis100Jaar69 from '../../assets/images/cases/de-live-formule/mikexdeliveformule-finis-100-jaar-69.jpg';
import mikexdeliveformuleFinis100Jaar129 from '../../assets/images/cases/de-live-formule/mikexdeliveformule-finis-100-jaar-129.jpg';

export const introText: Rich = [
  {
    p: [
      'Een jubileum is meer dan een feestje. Het is het moment waarop een organisatie stilstaat bij wat ze heeft opgebouwd  en laat zien waar ze naartoe gaat. Voor ',
      {
        text: 'De Live Formule',
        href: 'https://deliveformule.nl/',
      },
      ' was dit een kans om voor eindklant Finis een avond neer te zetten die dat verhaal volledig recht deed.',
    ],
  },
  {
    p: [
      {
        text: 'Bold Productions',
        strong: true,
      },
      ' verzorgde de volledige contentproductie op die avond. Een ',
      {
        text: 'aftermovie',
        href: '/events/aftermovie',
      },
      ' die de sfeer en energie vastlegt. Een complete ',
      {
        text: 'fotoreportage  ',
        href: '/zakelijke-events/fotografie',
      },
      'voor direct gebruik. En een ',
      {
        text: 'casevideo  ',
        href: '/zakelijke-events/casevideo',
      },
      'waarin Manon van De Live Formule zelf het woord neemt om te vertellen wat ze hebben neergezet en waarom het werkt.',
    ],
  },
];

export const sections: PageSection[] = [
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Een jubileum vieren én bewijzen wat je waard bent.'],
          level: 2,
        },
        {
          p: [
            'De Live Formule wilde meer dan een mooie avond organiseren voor Finis. Ze wilden ook laten zien aan hun eigen netwerk, aan potentiële klanten en aan de markt wat ze als eventbureau in huis hebben.',
          ],
        },
        {
          p: [
            'Dat vraagt om content die twee dingen tegelijk doet. De beleving van de avond vastleggen voor de eindklant. En het verhaal van De Live Formule vertellen voor iedereen die kijkt en denkt: dit is wie wij als partner willen.',
          ],
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: mikexdeliveformuleFinis100Jaar80,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Drie producties. Eén rode draad.'],
          level: 2,
        },
        {
          p: [
            'We werkten die avond met een duidelijk plan. Elk onderdeel van de contentproductie had zijn eigen doel, maar alle drie versterkten ze hetzelfde verhaal.',
          ],
        },
        {
          ul: [
            [
              {
                text: 'De aftermovie ',
                strong: true,
              },
              {
                br: true,
              },
              'De sfeer, de energie en de beleving van het jubileum. Cinematografisch vastgelegd. Emotiegedreven gemonteerd. Zodat Finis en hun gasten de avond kunnen herbeleven en er trots op zijn.',
            ],
            [
              {
                text: 'De fotografie',
                strong: true,
              },
              {
                br: true,
              },
              'Een complete set beelden voor direct gebruik. PR, social media, de website van De Live Formule en toekomstige pitches. Professioneel, sfeerrijk en direct inzetbaar.',
            ],
            [
              {
                text: 'De casevideo ',
                strong: true,
              },
              {
                br: true,
              },
              'Dit was het onderscheidende element. Op de avond zelf namen we De Live Formule voor de camera. Ze vertelden in hun eigen woorden wat ze hebben neergezet. Wat de uitdaging was. Welke keuzes ze hebben gemaakt. En wat het resultaat was voor Finis.',
              {
                br: true,
              },
              'Die verklaring combineerden we met aftermovie beelden  zodat de woorden worden ondersteund door het bewijs. Geen zelfpromotie. Maar een authentiek verhaal, verteld op het moment dat het er nog warm bij zit.',
            ],
          ],
          spaced: true,
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
        src: mikexdeliveformuleFinis100Jaar124,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Een avond om trots op te zijn. En content die dat uitstraalt.'],
          level: 2,
        },
        {
          p: [
            'Finis heeft een jubileum gehad dat zijn naam waardig was. De Live Formule heeft bewijs van wat ze kunnen  in beelden, in woorden en in sfeer.',
          ],
        },
        {
          p: [
            "De casevideo is voor De Live Formule direct inzetbaar als sales- en marketingmateriaal. Hij laat potentiële klanten zien hoe ze werken, wat ze neerzetten en wat dat oplevert. Niet in een brochure. Maar in een video die voelt alsof je er zelf bij was. Check 'm hieronder.",
          ],
        },
        {
          p: [],
        },
        {
          video: {
            id: '1135353183',
            title: 'De Live Formule - Casevideo - Finis 100 jaar',
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
      title: 'Check je hieronder',
      gradient: 'green',
      photos: [
        {
          src: mikexdeliveformuleFinis100Jaar205,
          alt: '',
        },
        {
          src: mikexdeliveformuleFinis100Jaar173,
          alt: '',
        },
        {
          src: mikexdeliveformuleFinis100Jaar174,
          alt: '',
        },
        {
          src: mikexdeliveformuleFinis100Jaar69,
          alt: '',
        },
        {
          src: mikexdeliveformuleFinis100Jaar129,
          alt: '',
        },
      ],
    },
  },
];
