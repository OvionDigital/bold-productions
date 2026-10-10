/**
 * Inhoud van /cases/why-go-home onder de feitenbalk. Teksten letterlijk van de live site.
 * Hero, kruimelpad, intro en feiten komen uit src/data/cases.ts.
 */
import type { PageSection } from '../../lib/sections';
import type { Rich } from '../../lib/rich';
import boldProductionsWhyGoHomeAhoy97 from '../../assets/images/cases/why-go-home/bold-productions-why-go-home-ahoy-97.jpg';
import boldProductionsWhyGoHomeAhoy103 from '../../assets/images/cases/why-go-home/bold-productions-why-go-home-ahoy-103.jpg';
import bold29 from '../../assets/images/cases/why-go-home/bold-29.jpg';
import boldProductionsWhyGoHomeAhoy82 from '../../assets/images/cases/why-go-home/bold-productions-why-go-home-ahoy-82.jpg';
import boldProductionsWhyGoHomeAhoy107 from '../../assets/images/cases/why-go-home/bold-productions-why-go-home-ahoy-107.jpg';
import bold99 from '../../assets/images/cases/why-go-home/bold-99.jpg';
import boldProductionsWhyGoHomeAhoy90 from '../../assets/images/cases/why-go-home/bold-productions-why-go-home-ahoy-90.jpg';

export const introText: Rich = [
  {
    p: [
      {
        text: 'Why Go Home',
        href: 'https://whygohome.com/',
      },
      ' is geen gewone tributeband. Ze zijn de grootste Pearl Jam tribute van Europa. En dat voel je zodra ze het podium opgaan.',
    ],
  },
  {
    p: [
      'Voor een act van dit formaat had je een locatie nodig die dat uitstraalt. Rotterdam Ahoy was die locatie. Groot, iconisch en precies het decor dat past bij een band die in Europa aan de top staat van zijn genre.',
    ],
  },
  {
    p: ['Bold Productions mocht die productie verzorgen. Een kans die je met beide handen aangrijpt.'],
  },
];

export const sections: PageSection[] = [
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Hoe laat je zien hoe groot een band écht is?'],
          level: 2,
        },
        {
          p: ['Why Go Home heeft de energie, de show en de reputatie. Maar een promo die dat ook uitstraalt, dat is een ander verhaal.'],
        },
        {
          p: [
            'De uitdaging was om de grootsheid van de band te vangen op een manier die recht doet aan wat ze neerzetten. Niet zomaar wat liveopnames achter elkaar plakken. Maar een promo die iemand die Why Go Home nog niet kent, direct begrijpt waarom dit de grootste Pearl Jam tribute van Europa is.',
          ],
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: boldProductionsWhyGoHomeAhoy97,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Ahoy als decor. De band als verhaal.'],
          level: 2,
        },
        {
          p: [
            'We kozen bewust voor Rotterdam Ahoy. Niet alleen vanwege de imposante ruimte, maar ook vanwege wat die locatie uitstraalt. Grootsheid. Klasse. Een podium dat past bij een band die op het hoogste niveau speelt.',
          ],
        },
        {
          p: [
            'Op locatie werkten we met oog voor elk detail. De lichtshow die de zaal vult. De energie van de band op het podium. De kracht van het geluid dat je voelt voordat je het hoort. Elk shot was erop gericht om te laten voelen wat het is om Why Go Home live mee te maken.',
          ],
        },
        {
          p: [
            'Het resultaat is een promo die niet vraagt om uitleg. Die voor zichzelf spreekt. En die boekers, festivalorganisatoren en fans in één keer laat zien waarom Why Go Home de grootste van Europa is.',
          ],
        },
      ],
    },
  },
  {
    type: 'fullWidthImage',
    props: {
      image: {
        src: boldProductionsWhyGoHomeAhoy103,
        alt: '',
      },
    },
  },
  {
    type: 'richText',
    props: {
      content: [
        {
          h: ['Dikke beelden. En een band die nog groter lijkt dan ie al was.'],
          level: 2,
        },
        {
          p: [
            'De promo deed wat een goede bandpromo moet doen. Hij versterkte de uitstraling van Why Go Home naar boekers en organisatoren. Hij gaf de fanbase content om trots op te zijn en massaal te delen. En hij zette de band op een visueel niveau dat past bij hun positie in de markt.',
          ],
        },
        {
          video: {
            id: '1147971416',
            title: 'Bold Productions | Why Go Home | bandpromo',
            ratio: 0.5634,
          },
        },
      ],
    },
  },
  {
    type: 'polaroidStack',
    props: {
      eyebrow: 'Wat meer',
      title: "Foto's",
      gradient: 'green',
      photos: [
        {
          src: bold29,
          alt: '',
        },
        {
          src: boldProductionsWhyGoHomeAhoy82,
          alt: '',
        },
        {
          src: boldProductionsWhyGoHomeAhoy107,
          alt: '',
        },
        {
          src: bold99,
          alt: '',
        },
        {
          src: boldProductionsWhyGoHomeAhoy90,
          alt: '',
        },
      ],
    },
  },
];
