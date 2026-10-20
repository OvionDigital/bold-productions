/**
 * /business/content/contentcreatie — teksten letterlijk van boldproductions.webflow.io/business/content/contentcreatie (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import cameramanImg from '../../../../assets/images/events/tijdlijn-productie.jpg';
import crewDuoImg from '../../../../assets/images/over/rhbfoto-8.jpg';
import planningImg from '../../../../assets/images/promotievideo-laten-maken/hf-20260430-185051-34c53542-a978-4ca5-a04f-e7647905bc63.jpg';
import montageImg from '../../../../assets/images/over/f7ab9527-e17b-4f6d-8e7f-bd8d80c6a87a.jpg';
import polaroid1Img from '../../../../assets/images/polaroids/polaroid-1.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/content/contentcreatie',
  title: 'Contentcreatie',
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Contentcreatie voor bedrijven',
    },
    title: 'Contentcreatie voor bedrijven | Eén dag schieten, een jaar vooruit | Bold Productions',
    description: 'Eén opnamedag, honderden beelden. Bold maakt foto en video tegelijk, genoeg om je hele jaar mee te vullen. Bekijk onze aanpak.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Contentcreatie voor',
        titleAccent: 'bedrijven',
        eyebrow: 'Eén dag schieten. Een jaar vooruit.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Hoe dan?',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: cameramanImg,
          alt: 'Cameraman van Bold Productions tijdens een opname.',
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
        title: 'Wat is contentcreatie?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Contentcreatie is beeld laten maken in bulk. Een beeldenbank maken. Eén of meerdere opnamedagen waarin we foto en video tegelijk produceren, niet voor één post of één campagne, maar voor alles wat je het komende jaar aan beeld nodig (denkt) te hebben.',
            ],
          },
          {
            p: [
              'Je medewerkers aan het werk. Je product van alle kanten. Je pand, je machines, je proces. Sfeer, details, portretten. Horizontaal en verticaal, lang en kort, foto en bewegend beeld.',
            ],
          },
          {
            p: [
              'Aan het eind heb je geen video en geen fotoreportage. Je hebt een voorraad.',
            ],
          },
        ],
        cta: {
          label: 'Wil ik',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: crewDuoImg,
          alt: 'Fotograaf en videograaf van Bold Productions op weg naar een opname.',
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
              'Elke week weer iets moeten posten, zonder iets te hebben',
            ],
            level: 2,
          },
          {
            p: [
              'Je kent het wel. Er moet een bericht uit, dus iemand loopt met zijn telefoon de werkvloer op. Of je pakt die ene foto er weer bij, voor de vierde keer dit kwartaal. Of je gebruikt Ai, want dat is lekker makkelijk.',
            ],
          },
          {
            p: [
              'Het probleem is niet dat je geen beeld kunt maken. Het probleem is dat het elke keer opnieuw een klusje is, en dat het resultaat daardoor nooit hetzelfde niveau heeft als de rest van je communicatie.',
            ],
          },
          {
            h: [
              'Waarom foto en video tegelijk',
            ],
            level: 3,
          },
          {
            p: [
              'Omdat het zonde is om het apart te doen.',
            ],
          },
          {
            p: [
              'De voorbereiding is hetzelfde, de locatie is hetzelfde en de mensen zijn er toch. Twee losse shoots kosten twee keer zoveel tijd van je team, leveren twee keer zoveel gedoe met plannen op en zien er aan het eind niet uit alsof ze bij elkaar horen.',
            ],
          },
          {
            p: [
              'Eén dag, één crew, één stijl. Dat laatste merk je pas als je het allemaal naast elkaar op je socials en website ziet staan.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert het op contentcreatie?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Nooit meer met lege handen zitten',
                  strong: true,
                },
                {
                  br: true,
                },
                'Er moet iets uit en je hebt niets. Dat probleem is weg. Je pakt gewoon uit de map.',
              ],
              [
                {
                  text: 'Eén herkenbare stijl over al je kanalen',
                  strong: true,
                },
                {
                  br: true,
                },
                'LinkedIn, je website, je nieuwsbrief, een presentatie, een beurs. Alles komt uit dezelfde shoot, dus alles ziet eruit alsof het bij elkaar hoort.',
              ],
              [
                {
                  text: 'Veel goedkoper per beeld',
                  strong: true,
                },
                {
                  br: true,
                },
                'Eén dag met een crew levert tientallen bruikbare clips en honderden foto’s op. Vergelijk dat met wat je per losse shoot kwijt bent.',
              ],
              [
                {
                  text: 'Je team hoeft er maar één keer tijd voor vrij te maken',
                  strong: true,
                },
                {
                  br: true,
                },
                'Dat klinkt simpel. In de praktijk is dat vaak het grootste obstakel om überhaupt beeld te laten maken.',
              ],
              [
                {
                  text: 'Geen stockfoto’s meer',
                  strong: true,
                },
                {
                  br: true,
                },
                'Je eigen mensen, je eigen werkvloer, je eigen product. Dat is geloofwaardiger dan een glimlachende modelfamilie die ook bij je concurrent op de site staat.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Een dag die je niet improviseert.',
            text: [
              {
                p: [
                  'Zonder plan wordt het een rondje lopen met een camera, en dan heb je aan het eind driehonderd beelden waarvan je er vier gebruikt. Dus leggen we vooraf vast wat eruit moet komen.',
                ],
              },
              {
                p: [
                  'We maken samen een lijst van wat je nodig hebt. Waar moet beeld voor komen, welke kanalen vul je, welke onderwerpen komen steeds terug? Daar rolt een concrete schotlijst uit, inclusief welke beelden verticaal moeten en welke niet.',
                ],
              },
            ],
            image: {
              src: planningImg,
              alt: 'Mike Ampting, eigenaar van Bold Productions, werkt aan de planning van een productie.',
            },
          },
          {
            number: '02',
            title: 'Planning van de dag',
            text: [
              {
                p: [
                  'We lopen het rooster met je door. Welke afdeling wanneer, welke machine draait op welk moment, wie er in beeld komt. Zo houden we de verstoring van het werk zo klein mogelijk en halen we toch alles.',
                ],
              },
            ],
            image: {
              src: montageImg,
              alt: 'Montageplek van Bold Productions met een interview op het scherm.',
            },
          },
          {
            number: '03',
            title: 'De opnamedag',
            text: [
              {
                p: [
                  'Foto en video tegelijk. We bewegen mee met het werk in plaats van het stil te leggen. Mensen die zich ongemakkelijk voelen bij een camera krijgen van ons geen instructies maar gewoon even de tijd.',
                ],
              },
            ],
            image: {
              src: polaroid1Img,
              alt: 'Cameraman van Bold Productions filmt backstage in roze licht.',
            },
          },
        ],
        cta: {
          label: 'Plan een gesprek',
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
            question: 'Hoeveel beeld krijgen we uit één dag?',
            answer: [
              {
                p: [
                  'Dat hangt af van hoeveel locaties en onderwerpen er op de planning staan. Reken bij een gemiddelde dag op enkele tientallen bruikbare clips en een paar honderd foto’s, waarvan we een geselecteerde en bewerkte set opleveren.',
                ],
              },
            ],
          },
          {
            question: 'Wat kost contentcreatie voor een bedrijf?',
            answer: [
              {
                p: [
                  'Dat hangt af van het aantal opnamedagen, de omvang van de crew en hoeveel beeld we bewerkt opleveren. Reken het terug per beeld in plaats van per dag: één opnamedag levert tientallen clips en honderden foto’s op. Vraag een offerte aan en je krijgt een onderbouwd bedrag.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang doen we hiermee?',
            answer: [
              {
                p: [
                  'Meestal zes maanden tot een jaar, afhankelijk van hoeveel je post. Het verouderen zit zelden in de beelden zelf, meestal in verandering: een nieuwe machine, een verbouwing of een team dat er anders uitziet. Veel klanten plannen daarom één of twee dagen per jaar in.',
                ],
              },
            ],
          },
          {
            question: 'Wat is het verschil tussen contentcreatie en social content?',
            answer: [
              {
                p: [
                  'Contentcreatie levert de voorraad: één of meerdere opnamedagen met foto en video waar je lang mee vooruit kunt, op al je kanalen. Social content is doorlopend en strategisch: vaste contentpilaren, herkenbare formats en een plan dat je kanalen laat groeien en klanten oplevert. Veel klanten beginnen met contentcreatie en stappen later over of doen allebei.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen we zelf bepalen wat er geschoten wordt?',
            answer: [
              {
                p: [
                  'Ja, en dat is ook de bedoeling. De contentlijst maken we samen. Jij weet wat je mist, wij weten wat werkt op welk kanaal. Daar komt de lijst uit.',
                ],
              },
            ],
          },
          {
            question: 'Wat als onze medewerkers niet in beeld willen?',
            answer: [
              {
                p: [
                  'Dat hoeft niet. Er is altijd een manier om het werk te laten zien zonder dat gezichten herkenbaar in beeld komen. In de praktijk valt het trouwens mee zodra mensen merken dat ze niets hoeven te zeggen.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie dit combineren met een bedrijfsfilm?',
            answer: [
              {
                p: [
                  'Ja, en dat is vaak slim. Als we er toch zijn met een crew, kost het weinig extra om ook te draaien voor een bedrijfsfilm. Als dat past binnen het concept. Die combinatie is per saldo goedkoper dan twee losse trajecten.',
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
          title: 'Hoe vaak zit je zonder beeld?',
          text: [
            {
              p: [
                'Vaker dan je zou willen, waarschijnlijk.',
                {
                  br: true,
                },
                'Daar is iets aan te doen en helpen we je graag mee.',
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
