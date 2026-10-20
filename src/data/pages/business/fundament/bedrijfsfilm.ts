/**
 * /business/fundament/bedrijfsfilm — teksten letterlijk van boldproductions.webflow.io/business/fundament/bedrijfsfilm (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import sprekerImg from '../../../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-63.jpg';
import polaroid1Img from '../../../../assets/images/polaroids/polaroid-1.jpg';
import montageImg from '../../../../assets/images/over/f7ab9527-e17b-4f6d-8e7f-bd8d80c6a87a.jpg';
import dijkImg from '../../../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-43.jpg';
import editenImg from '../../../../assets/images/events/tijdlijn-post-productie.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/fundament/bedrijfsfilm',
  title: 'Bedrijfsfilm',
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Bedrijfsfilm Productie',
    },
    title: 'Bedrijfsfilm laten maken | Een die mensen afkijken | Bold Productions',
    description: 'De meeste bedrijfsfilms worden weggeklikt. Bold maakt bedrijfsfilms die uitleggen wie je bent zonder dat iemand afhaakt. Bekijk onze aanpak.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Een bedrijfsfilm laten maken',
        titleAccent: 'die mensen afkijken.',
        eyebrow: 'Ja, dat is de lat. Nee, dat is niet vanzelfsprekend.',
        primaryCta: {
          label: 'Daag ons uit',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Ontdek hoe',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: sprekerImg,
          alt: 'Spreker tijdens het personeelsfeest van Waterschap Rijn en IJssel.',
        },
        accent: 'yellow',
      },
    },
    {
      type: 'breadcrumbs',
    },
    {
      type: 'textMedia',
      props: {
        id: 'first-section',
        title: 'Je wilt een\nbedrijfsfilm.\nIs dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Vaak wel. Een bedrijfsfilm lost een reëel probleem op: mensen snappen niet in één keer wat je doet, en jij bent het zat om het elke keer opnieuw uit te leggen.',
            ],
          },
          {
            p: [
              'Maar de vraag erachter is zelden “we hebben een film nodig”. Die is meestal: onze website legt het niet goed uit, onze sales moet te veel praten, of nieuwe klanten snappen pas na drie gesprekken waar ze mee te maken hebben. Dat bepaalt wat de film moet doen. En dus hoe hij eruitziet.',
            ],
          },
        ],
        cta: {
          label: 'Dat wil ik',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: polaroid1Img,
          alt: 'Cameraman van Bold Productions filmt backstage in roze licht.',
        },
        triangles: true,
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: [
              'Wat een bedrijfsfilm is',
            ],
            level: 3,
          },
          {
            p: [
              'Een bedrijfsfilm legt uit. Wie jullie zijn, wat jullie maken of doen, hoe het werkt en waarom het slim is om met jullie in zee te gaan.',
            ],
          },
          {
            p: [
              'Dat is iets anders dan een brandfilm. Die draait om gevoel en identiteit, en vertelt niet per se wat je verkoopt. Een bedrijfsfilm is concreter. Hij informeert, en als het goed is overtuigt hij onderweg.',
            ],
          },
          {
            p: [
              'Allebei fundament. Ze doen alleen iets anders.',
            ],
          },
          {
            h: [
              'Waarom zoveel bedrijfsfilms niet werken',
            ],
            level: 4,
          },
          {
            p: [
              'Omdat ze gemaakt worden als verplichting. Er moet er een zijn, dus komt er een.',
              {
                br: true,
              },
              'Je kent het resultaat. Drone over het pand. Iemand die een hand schudt bij de receptie. Een directeur die vertelt dat de mens centraal staat. Allemaal waar, allemaal keurig, en na twintig seconden kijkt niemand meer.',
              {
                br: true,
              },
              'Het probleem is niet de camera. Het probleem is dat er niets op het spel staat. Een bedrijfsfilm die het wel doet, vertelt iets wat de kijker nog niet wist, of laat iets zien waar hij normaal nooit komt. Daar begint ons werk.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert een bedrijfsfilm laten maken op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Je verhaal één keer goed, in plaats van vijftig keer half',
                  strong: true,
                },
                {
                  br: true,
                },
                'Het verhaal dat je in elk eerste gesprek vertelt, staat vanaf nu vast. Je sales hoeft niet meer bij nul te beginnen en iedereen vertelt hetzelfde.',
              ],
            ],
            spaced: true,
          },
          {
            ul: [
              [
                {
                  text: 'Vertrouwen bij mensen die je nog niet kennen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Zeker bij een groot of complex project wil een opdrachtgever weten of jullie het aankunnen. Mensen aan het woord laten die het werk doen, overtuigt anders dan een offerte dat kan.',
              ],
              [
                {
                  text: 'Minder uitleggen op je website',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een bezoeker leest je dienstenpagina niet helemaal. Een film van twee minuten kijkt hij wel af, als hij goed is.',
              ],
              [
                {
                  text: 'Nieuwe medewerkers die sneller snappen hoe het zit',
                  strong: true,
                },
                {
                  br: true,
                },
                'Onboarding, interne presentaties, beurzen. Je gebruikt dezelfde film op plekken waar je hem niet voor maakte.',
              ],
              [
                {
                  text: 'Jaren meegaan in plaats van weken',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een bedrijfsfilm is geen campagne. Hij staat op dezelfde pagina tot je bedrijf verandert.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Eerst schrappen. Dan filmen.',
            text: [
              {
                p: [
                  'De grootste valkuil bij een bedrijfsfilm is dat alles erin moet. Elke afdeling, elke dienst, elke vestiging. Dat is precies hoe je een film maakt die niemand afkijkt.',
                ],
              },
              {
                p: [
                  'Dus beginnen we bij de vraag wat eruit kan.',
                ],
              },
            ],
            image: {
              src: montageImg,
              alt: 'Montageplek van Bold Productions met een interview op het scherm.',
            },
          },
          {
            number: '02',
            title: 'Kennismaking en doel',
            text: [
              {
                p: [
                  'Wie moet dit zien? Wat weet die persoon nog niet? En wat moet hij daarna doen? Zonder dat antwoord wordt het een film over jullie in plaats van voor hen.',
                ],
              },
            ],
            image: {
              src: dijkImg,
              alt: 'Medewerkers van Waterschap Rijn en IJssel op locatie.',
            },
          },
          {
            number: '03',
            title: 'De rode draad',
            text: [
              {
                p: [
                  'We kiezen één verhaal en bouwen daaromheen. Liever één ding dat blijft hangen dan zeven dingen die langskomen. Wat afvalt, krijgt desgewenst een eigen korte video. Dat werkt beter dan alles in één film persen.',
                ],
              },
            ],
            image: {
              src: editenImg,
              alt: 'Mike Ampting, eigenaar van Bold Productions, tijdens het editen van videobeelden.',
            },
          },
        ],
        cta: {
          label: 'Dat wil ik',
          href: '/business/offerte-aanvragen',
          accent: 'yellow',
        },
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        items: [
          {
            question: 'Wat is het verschil tussen een brandfilm en een bedrijfsfilm?',
            answer: [
              {
                p: [
                  'Een bedrijfsfilm legt uit wie jullie zijn, wat jullie doen en hoe het werkt. Een brandfilm laat voelen waar jullie voor staan. De eerste informeert, de tweede maakt iets los. Weet je niet welke je nodig hebt? Dat is precies het gesprek dat we willen voeren.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang moet een bedrijfsfilm zijn?',
            answer: [
              {
                p: [
                  'Twee tot drie minuten werkt in de meeste gevallen. Langer kan als er echt iets te vertellen valt, maar dan leveren we er ook een korte versie bij. Want de plek waar de film staat bepaalt hoeveel geduld de kijker heeft.',
                ],
              },
            ],
          },
          {
            question: 'Moet onze directeur erin?',
            answer: [
              {
                p: [
                  'Niet per se. Soms is dat sterk, vaak niet. De mensen die het werk uitvoeren zijn meestal overtuigender, omdat ze vertellen hoe het echt gaat in plaats van hoe het bedoeld is. We bespreken vooraf wie het beste past bij het verhaal.',
                ],
              },
            ],
          },
          {
            question: 'Onze medewerkers vinden het eng om voor de camera te staan.',
            answer: [
              {
                p: [
                  'Dat is normaal en dat lossen we op. We werken zonder script, stellen vragen in plaats van teksten op te laten dreunen en nemen de tijd. Negen van de tien keer vergeet iemand na vijf minuten dat de camera er staat.',
                ],
              },
            ],
          },
          {
            question: 'Wij hebben al een bedrijfsfilm, maar die is verouderd. Kunnen jullie hem opfrissen?',
            answer: [
              {
                p: [
                  'Soms wel, vaak is opnieuw maken verstandiger. Oud beeld hergebruiken kan, maar als de reden dat hij niet werkt in de opzet zit, los je dat niet op met een nieuwe montage. We kijken er eerlijk naar en zeggen het als het zonde van je geld is.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang duurt het traject?',
            answer: [
              {
                p: [
                  'Reken op zes tot acht weken van eerste gesprek tot oplevering, afhankelijk van het aantal draaidagen en locaties. Zit je aan een deadline vast, zeg dat in het eerste gesprek, dan plannen we erop.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ook de fotografie verzorgen?',
            answer: [
              {
                p: [
                  'Ja. We fotograferen op dezelfde draaidagen, zodat beeld en film dezelfde stijl hebben. Scheelt een shoot en scheelt gedoe.',
                ],
              },
            ],
          },
        ],
        gradient: 'green',
      },
    },
    {
      type: 'textMedia',
      props: {
        intro: {
          title: 'Een bedrijfsfilm laten maken die mensen afkijken.',
          text: [
            {
              p: [
                'Klinkt als een lage lat. Toch halen de meeste films hem niet.',
                {
                  br: true,
                },
                'Daag jij ons uit?',
              ],
            },
          ],
          gradient: 'orange',
        },
        media: {
          type: 'image',
          src: formImg,
          alt: 'Mike Ampting, eigenaar van Bold Productions, tijdens het opnemen van een aftermovie.',
        },
        triangles: true,
        spacing: 'section',
        animate: false,
      },
      form: {
        name: 'contact',
      },
    },
  ],
};
