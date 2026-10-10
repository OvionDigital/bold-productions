/**
 * Inhoud van /cases/superminds onder de feitenbalk. Teksten letterlijk van de live site.
 * Hero, kruimelpad, intro en feiten komen uit src/data/cases.ts.
 */
import type { PageSection } from '../../lib/sections';
import type { Rich } from '../../lib/rich';
import img240920210617EspritIctJitskeseckel from '../../assets/images/cases/superminds/240920210617-esprit-ict-jitskeseckel.jpg';
import img240920163844EspritIctJitskeseckel from '../../assets/images/cases/superminds/240920163844-esprit-ict-jitskeseckel.jpg';
import img240920221127EspritIctJitskeseckel from '../../assets/images/cases/superminds/240920221127-esprit-ict-jitskeseckel.jpg';
import img240920182309EspritIctJitskeseckel from '../../assets/images/cases/superminds/240920182309-esprit-ict-jitskeseckel.jpg';
import img240920201132EspritIctJitskeseckel from '../../assets/images/cases/superminds/240920201132-esprit-ict-jitskeseckel.jpg';
import img240920210618EspritIctJitskeseckel from '../../assets/images/cases/superminds/240920210618-esprit-ict-jitskeseckel.jpg';
import img240920164220EspritIctJitskeseckel from '../../assets/images/cases/superminds/240920164220-esprit-ict-jitskeseckel.jpg';

export const introText: Rich = [
  {
    p: [
      'Een nieuwe naam. Een nieuw logo. Een nieuw hoofdstuk voor een IT-bedrijf dat klaar was om zich opnieuw aan de wereld te presenteren.',
    ],
  },
  {
    p: [
      {
        text: 'SUPERMINDS ',
        href: 'https://www.superminds.nl/',
      },
      'verzorgde het hele rebranding traject: van strategie tot uitvoering. En voor de grote onthulling gingen ze verder dan een PowerPoint en een feestje. ',
      {
        br: true,
      },
      'Ze projecteerden de nieuwe identiteit live op hun eigen gebouw. Een ',
      {
        text: 'projectmapping ',
        strong: true,
      },
      'die de avond onvergetelijk maakte voor iedereen die erbij was.',
    ],
  },
  {
    p: [
      'Bold Productions was er om het vast te leggen. Zodat die avond niet alleen in de herinnering bleef van de aanwezigen. Maar ook ',
      {
        text: 'zichtbaar ',
        strong: true,
      },
      'werd voor de rest van de wereld.',
    ],
  },
];

export const sections: PageSection[] = [
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Een onthulling gebeurt één keer.'],
          level: 2,
        },
        {
          p: [
            'Een rebranding reveal is een eenmalig moment. De spanning die er in de aanloop naartoe zit. De reacties op het moment van de onthulling zelf. En de sfeer van een avond waarop een bedrijf laat zien wie het voortaan is.',
          ],
        },
        {
          p: [
            'Dat alles moest in één aftermovie worden gevangen. Met als absolute climax de projectmapping op het gebouw. Een visueel spektakel dat je niet twee keer kunt draaien. Eén kans om het goed vast te leggen.',
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
        src: img240920210617EspritIctJitskeseckel,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: [
            'De opbouw is net zo ',
            {
              br: true,
            },
            'belangrijk als de climax.',
          ],
          level: 2,
        },
        {
          p: [
            'Een goede reveal-aftermovie werkt als een goed verhaal. Hij begint rustig. Bouwt spanning op. En explodeert op het juiste moment.',
          ],
        },
        {
          p: [
            'We filmden de hele avond met dat ritme in gedachten. De aankomst van de gasten. De eerste hints van wat er komen ging. De gezichten van mensen die nog niet wisten wat ze te zien zouden krijgen.',
          ],
        },
        {
          p: [
            'En dan de onthulling. De projectmapping op het gebouw. Licht, beeld en geluid die samenkwamen tot één moment. Dat filmden we vanuit meerdere perspectieven — wijd voor de grootsheid, dichtbij voor de reacties. Want de beelden op het gebouw zijn indrukwekkend. Maar de gezichten van de mensen die het zien zijn de echte aftermovie.',
          ],
        },
        {
          p: [
            'Het resultaat is een high-end aftermovie die de energie, de scherpte en de magie van die avond vastlegt. Cinematografisch sterk. Maar altijd in dienst van het verhaal.',
          ],
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: img240920163844EspritIctJitskeseckel,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Een avond die blijft hangen. Ook voor mensen die er niet bij waren.'],
          level: 2,
        },
        {
          p: [
            'De aftermovie laat zien wat SUPERMINDS heeft neergezet. Niet alleen als eventorganisator. Maar als creatieve partner die een rebranding omtovert tot een onvergetelijke ervaring.',
          ],
        },
        {
          p: [
            'Voor het IT-bedrijf is het de visuele bevestiging van hun nieuwe identiteit. Voor SUPERMINDS is het het bewijs van wat ze kunnen. En voor iedereen die de aftermovie ziet is het één ding: dit willen we ook.',
          ],
        },
        {
          video: {
            id: '1016064550',
            title: 'SUPERMINDS | Esprit Aftermovie',
            ratio: 0.5023,
          },
        },
      ],
    },
  },
  {
    type: 'polaroidStack',
    props: {
      eyebrow: 'Check meer SUPER',
      title: "foto's",
      gradient: 'green',
      photos: [
        {
          src: img240920221127EspritIctJitskeseckel,
          alt: '',
        },
        {
          src: img240920182309EspritIctJitskeseckel,
          alt: '',
        },
        {
          src: img240920201132EspritIctJitskeseckel,
          alt: '',
        },
        {
          src: img240920210618EspritIctJitskeseckel,
          alt: '',
        },
        {
          src: img240920164220EspritIctJitskeseckel,
          alt: '',
        },
      ],
    },
  },
];
