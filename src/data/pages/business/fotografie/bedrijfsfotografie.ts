/**
 * /business/fotografie/bedrijfsfotografie — teksten letterlijk van boldproductions.webflow.io/business/fotografie/bedrijfsfotografie (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import kantoorImg from '../../../../assets/images/zakelijke-events/promovideo/rhbfoto-50.jpg';
import duoZakelijkImg from '../../../../assets/images/zakelijke-events/fotografie/mike-skndag-40.jpg';
import collegasImg from '../../../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-88.jpg';
import planningImg from '../../../../assets/images/promotievideo-laten-maken/hf-20260430-185051-34c53542-a978-4ca5-a04f-e7647905bc63.jpg';
import netwerken2Img from '../../../../assets/images/zakelijke-events/mike-skndag-137.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/fotografie/bedrijfsfotografie',
  title: 'Bedrijfsfotografie',
  meta: {
    title: 'Bedrijfsfotografie | Beelden van hoe het er echt aan toegaat | Bold Productions',
    description: 'Bedrijfsfotografie zonder geposeerde handdrukken. Bold fotografeert jullie mensen, werkvloer en product zoals het is. Bekijk de aanpak en de kosten.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Niemand lacht zo',
        titleAccent: 'naar een laptop.',
        eyebrow: 'Bedrijfsfotografie die er wel uitziet alsof er gewerkt wordt.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Doen we voor je',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: kantoorImg,
          alt: 'Medewerker aan het werk achter een buffet.',
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
        title: 'Je wilt bedrijfsfotografie. Is dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Meestal wel. Maar de vraag eronder is interessanter: waarvoor ga je die foto’s gebruiken?',
            ],
          },
          {
            p: [
              'Want beelden voor je werken-bij pagina vragen om iets anders dan beelden voor een offerte, een beursstand of je socials. Dat bepaalt wie er in beeld komt, waar we fotograferen en hoe het eruitziet. Beginnen met “we hebben nieuwe foto’s nodig” levert een map op waar je vervolgens nauwelijks iets uit gebruikt.',
            ],
          },
        ],
        media: {
          type: 'image',
          src: duoZakelijkImg,
          alt: 'Twee gasten lopen binnen bij een zakelijk event.',
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
              'Wat is bedrijfsfotografie?',
            ],
            level: 3,
          },
          {
            p: [
              'Bedrijfsfotografie is alles wat je als bedrijf aan beeld nodig hebt. Je mensen aan het werk, je pand, je machines, je proces, de sfeer op de vloer. Plus portretten en teamfoto’s als die erbij horen.',
            ],
          },
          {
            p: [
              'Niet voor één campagne, maar voor je website, je socials, je presentaties, je persberichten en alles waar je normaal gesproken een stockfoto voor zou pakken.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert bedrijfsfotografie op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Geen stockfoto’s meer',
                  strong: true,
                },
                {
                  br: true,
                },
                'Je eigen mensen en je eigen werkvloer, in plaats van een glimlachend model dat ook op de site van je concurrent staat. Dat verschil ziet iedereen.',
              ],
              [
                {
                  text: 'Eén stijl over al je uitingen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Website, LinkedIn, offertes, beursmateriaal, vacatures. Alles uit dezelfde shoot, dus alles hoort bij elkaar.',
              ],
              [
                {
                  text: 'Sterker verhaal richting sollicitanten',
                  strong: true,
                },
                {
                  br: true,
                },
                'Mensen willen zien waar ze terechtkomen. Eerlijke beelden van de werkvloer zeggen meer dan drie alinea’s over de informele sfeer.',
              ],
              [
                {
                  text: 'Vertrouwen bij klanten die je nog niet kennen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Laten zien hoe je werkt, overtuigt anders dan vertellen dat je goed bent. Zeker als het om vakmanschap of techniek gaat.',
              ],
              [
                {
                  text: 'Materiaal waar je lang mee doet',
                  strong: true,
                },
                {
                  br: true,
                },
                'Goede bedrijfsfotografie veroudert pas als jullie veranderen. Een verbouwing, een nieuwe machine, een ander team. Tot die tijd pak je gewoon uit de map.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Meelopen, niet (te veel) regisseren.',
            text: [
              {
                p: [
                  'De beste bedrijfsfoto is bijna nooit de foto die je van tevoren had bedacht.',
                ],
              },
            ],
            image: {
              src: collegasImg,
              alt: 'Lachende collega’s tijdens het personeelsfeest van Waterschap Rijn en IJssel.',
            },
          },
          {
            number: '02',
            title: 'De beeldlijst',
            text: [
              {
                p: [
                  'We bepalen samen waar je de beelden voor nodig hebt en wat er dus op de lijst moet. Werkvloer, portretten, details, sfeer. Daar rolt een concrete planning uit, afgestemd op jullie rooster en op welke machine wanneer draait.',
                ],
              },
            ],
            image: {
              src: planningImg,
              alt: 'Mike Ampting, eigenaar van Bold Productions, werkt aan de planning van een productie.',
            },
          },
          {
            number: '03',
            title: 'De opnamedag',
            text: [
              {
                p: [
                  'We lopen mee terwijl het werk doorgaat. Geen opstellingen, geen collega’s die moeten doen alsof. Mensen die het spannend vinden, krijgen van ons de tijd in plaats van instructies. Waar we moeten sturen we wat aan.',
                ],
              },
            ],
            image: {
              src: netwerken2Img,
              alt: 'Gasten in gesprek tijdens een zakelijk event.',
            },
          },
        ],
        cta: {
          label: 'Boek bold',
          href: '/business/offerte-aanvragen',
          accent: 'yellow',
        },
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat kost bedrijfsfotografie?',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'Drie dingen bepalen de prijs.',
            ],
          },
          {
            ol: [
              [
                {
                  text: 'Het aantal uren of dagen.',
                  strong: true,
                },
                ' Een halve dag volstaat voor een afdeling of een beperkte lijst. Een heel bedrijf met meerdere locaties vraagt om meer. Hoe meer we per dag kunnen schieten, hoe gunstiger de prijs per foto.',
              ],
              [
                {
                  text: 'Hoeveel beelden je bewerkt wil hebben.',
                  strong: true,
                },
                ' De nabewerking is bij fotografie een grote post. Een selectie van vijftig sterke foto’s kost minder dan tweehonderd, en in de praktijk gebruik je die tweehonderd toch niet.',
              ],
              [
                {
                  text: 'Of er video bij komt.',
                  strong: true,
                },
                ' Draaien we toch, dan kunnen we foto en video in dezelfde dag doen. Dat scheelt een aparte shoot en het houdt de stijl gelijk.',
              ],
            ],
          },
        ],
        steps: [],
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        items: [
          {
            question: 'Wat kost bedrijfsfotografie?',
            answer: [
              {
                p: [
                  'Dat hangt af van het aantal uren of dagen, hoeveel beelden we bewerkt opleveren en of er video bij komt. Een halve dag voor één afdeling is een andere rekensom dan een heel bedrijf met meerdere locaties. Vraag een offerte aan en je krijgt een onderbouwd bedrag.',
                ],
              },
            ],
          },
          {
            question: 'Hoeveel foto’s krijgen we?',
            answer: [
              {
                p: [
                  'We spreken vooraf een minimum af. Liever vijftig sterke beelden dan vijfhonderd waarvan je ze niet allemaal gebruikt. De bewerkte selectie leveren we gesorteerd en klaar voor gebruik op.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang duurt een opnamedag?',
            answer: [
              {
                p: [
                  'Van een paar uur tot een hele dag, afhankelijk van de beeldlijst. We stemmen het af op jullie planning, zodat het werk zo min mogelijk stil komt te liggen.',
                ],
              },
            ],
          },
          {
            question: 'Onze medewerkers vinden het ongemakkelijk om gefotografeerd te worden.',
            answer: [
              {
                p: [
                  'Heel normaal, en daarom regisseren we bijna niet. We lopen mee terwijl mensen hun werk doen en vragen niemand om te poseren. Wie echt niet in beeld wil, hoeft niet.',
                ],
              },
            ],
          },
          {
            question: 'Mogen we de foto’s overal gebruiken?',
            answer: [
              {
                p: [
                  'Jij mag de foto\'s overal gebruiken. Worden de foto\'s met derden gedeeld, maken we daar afspraken over.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ook portretten en teamfoto’s maken?',
            answer: [
              {
                p: [
                  'Ja, dat nemen we mee in dezelfde dag. Scheelt een aparte sessie en de stijl sluit dan aan op de rest van je beeld.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie foto en video tegelijk doen?',
            answer: [
              {
                p: [
                  'Ja, en vaak is dat de slimste keuze. De voorbereiding is hetzelfde, de locatie is hetzelfde en je mensen zijn er toch. Twee losse shoots kosten twee keer zoveel tijd van je team en zien er aan het eind niet uit alsof ze bij elkaar horen.',
                ],
              },
            ],
          },
          {
            question: 'Hoe snel krijgen we de foto’s?',
            answer: [
              {
                p: [
                  'Een eerste selectie leveren we binnen enkele dagen op, de volledige bewerkte set binnen de afgesproken termijn. Heb je snel iets nodig voor een persbericht of een post, zeg dat dan vooraf.',
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
          title: 'Hoeveel stockfoto’s staan er nu op jullie site?',
          text: [
            {
              p: [
                'Tijd om daar verandering in te brengen.',
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
