/**
 * /events/fotografie — teksten letterlijk van www.weareboldproductions.com/events/fotografie.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../lib/sections';
import { trustedByTitle, clientLogos } from '../../../data/logos';
import { testimonialCarousel, pickTestimonials } from '../../../data/testimonials';
import boldProductions98 from '../../../assets/images/contact/bold-productions-98.jpg';
import doorgedraaid17Jpg from '../../../assets/images/events/fotografie/doorgedraaid-17-jpg.jpg';
import boldProductions7 from '../../../assets/images/events/fotografie/bold-productions-7.jpg';
import boldProductions128 from '../../../assets/images/events/fotografie/bold-productions-128.jpg';
import dienstEventvideos from '../../../assets/images/events/dienst-eventvideos.avif';
import mikeAftermovie from '../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'events/fotografie',
  title: 'Fotografie',
  meta: {
    title: 'Evenement fotograaf | Bold Productions',
    description: "Leg de energie van je event vast. Professionele foto's, direct inzetbaar voor je socials en sponsoren. Boek Bold.",
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Eén foto zegt meer dan',
        titleAccent: 'een minuut film.',
        eyebrow: 'alleen als hij op het juiste moment is gemaakt.',
        primaryCta: {
          label: 'Boek Bold',
          href: '#',
        },
        secondaryCta: {
          label: 'Kunnen wij',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: boldProductions98,
          alt: 'Actiefoto van PROOST! BAND tijdens een festival. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        accent: 'green',
      },
    },
    {
      type: 'breadcrumbs',
    },
    {
      type: 'logoMarquee',
      props: {
        title: trustedByTitle,
        logos: clientLogos,
      },
    },
    {
      type: 'textMedia',
      props: {
        id: 'first-section',
        title: 'Wat is eventfotografie?',
        gradient: 'orange',
        body: [
          {
            p: ["Eventfotografie. Iedereen denkt dat ie het snapt. Camera, event, foto's. Klaar."],
          },
          {
            p: [
              "Maar de meeste eventfoto's doen precies wat ze niet moeten doen. Ze laten zien dat er mensen waren. Dat er een podium stond. Dat het druk was.",
            ],
          },
          {
            p: [
              'Wat ze niet laten zien? ',
              {
                text: 'Hoe het voelde',
                strong: true,
              },
              '.',
            ],
          },
          {
            p: [
              'En dat is precies het verschil tussen een foto die gescrolld wordt en een foto die gedeeld wordt. Tussen een beeld dat iemand denkt: leuk. En een beeld dat iemand denkt: daar wil ik bij zijn.',
            ],
          },
          {
            p: [
              'Goede eventfotografie vangt het moment vóór het moment voorbij is. De ',
              {
                text: 'artiest',
                strong: true,
              },
              ' op het absolute hoogtepunt. De ',
              {
                text: 'menigte',
                strong: true,
              },
              ' die volledig opgaat in de muziek. Het ',
              {
                text: 'gezicht',
                strong: true,
              },
              ' van iemand die precies ervaart waarom ze een kaartje hebben gekocht.',
            ],
          },
          {
            p: ['Dat zijn de beelden die jouw event verkopen. Niet alleen achteraf. Maar ook voor de volgende editie.'],
          },
          {
            p: [],
          },
          {
            p: [],
          },
        ],
        media: {
          type: 'image',
          src: doorgedraaid17Jpg,
          alt: "DJ's tijdens het Doorgedraai Feestival. Foto door Bold Productions contentspecialist voor Events & Artiesten.",
        },
        triangles: true,
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: ['Wat levert een professionele evenement fotograaf je op?'],
            level: 2,
          },
          {
            ul: [
              [
                {
                  text: 'Beelden die direct inzetbaar zijn',
                  strong: true,
                },
                {
                  br: true,
                },
                "Na je event wil je snel kunnen schakelen. Professionele eventfoto's zijn direct klaar voor gebruik op social media, in je nieuwsbrief en op je website. Geen gedoe met bewerken of bijsnijden.",
              ],
              [
                {
                  text: 'Social content die werkt ',
                  strong: true,
                },
                {
                  br: true,
                },
                "Sterke foto's van je evenement worden gedeeld. Door bezoekers, door artiesten, door media. Elk gedeeld beeld is gratis bereik voor jouw event.",
              ],
              [
                {
                  text: 'Sponsoren overtuigen',
                  strong: true,
                },
                {
                  br: true,
                },
                "Sponsors willen zien dat hun naam gelinkt wordt aan een professioneel, goed bezocht event. Krachtige eventfoto's maken dat verhaal visueel en overtuigend.",
              ],
              [
                {
                  text: 'Promomateriaal voor de volgende editie',
                  strong: true,
                },
                {
                  br: true,
                },
                "De beste foto's van dit jaar zijn de beste promotie voor volgend jaar. Sterke beelden bouwen aan het merk van je event editie na editie.",
              ],
              [
                {
                  text: 'Erkenning voor wat je hebt neergezet ',
                  strong: true,
                },
                {
                  br: true,
                },
                'Veel eventorganisatoren steken maanden in de voorbereiding en zien het harde werk niet terug in de beelden. Goede eventfotografie laat zien wat je écht hebt neergezet.',
              ],
            ],
            spaced: true,
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Hoe onze evenement fotograaf\njouw event aanpakt.',
        gradient: 'yellow',
        intro: [
          {
            p: ['Een evenement fotograaf die op de dag zelf maar wat rondloopt, mist de helft. '],
          },
          {
            p: ['Wij niet.'],
          },
          {
            p: [
              'Daarom beginnen we altijd met een ',
              {
                text: 'fotoplanning',
                strong: true,
              },
              '. Welke momenten zijn cruciaal? Waar moeten we staan? Wat heb je nodig voor social media, voor pers of voor je sponsordossier? ',
            ],
          },
          {
            p: ['Dat leggen we vooraf vast. Zodat we op de dag zelf precies weten wat we doen en jij er niet meer aan hoeft te denken.'],
          },
          {
            p: [],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'strategie',
            text: [
              {
                p: [
                  'Voor we een camera oppakken, stellen we vragen. Wat zijn de sleutelmomenten van je event? Welke beelden heb je nodig? Voor social media, voor pers of voor je sponsordossier? Op basis daarvan maken we een plan.',
                ],
              },
            ],
            image: {
              src: boldProductions7,
              alt: 'Sfeerbeeld Waailand Outdoor festival. Foto door Bold Productions contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '02',
            title: 'draaiplanning',
            text: [
              {
                p: [
                  'We werken met een fotoplanning die aansluit op het programma van je event. Zo weten we precies waar we moeten zijn en wanneer. Geen gemiste momenten, geen verrassingen.',
                ],
              },
            ],
            image: {
              src: boldProductions128,
              alt: 'Sfeerbeeld van Matrixx at the Park tijdens de Nijmeegse Vierdaagse. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '03',
            title: 'productie & oplevering',
            text: [
              {
                p: [
                  "Op locatie bewegen we mee met je event. We vangen de sfeer, de energie en de emotie. Onopvallend waar dat past, aanwezig waar dat nodig is. We leveren een selectie van bewerkte, direct inzetbare foto's op binnen de afgesproken termijn. Snel, want we weten dat je na je event niet wil wachten.",
                ],
              },
            ],
            image: {
              src: dienstEventvideos,
              alt: 'Sfeerbeeld van een tentfeest.',
            },
          },
        ],
        cta: {
          label: 'Plan een gesprek',
          href: '/offerte-aanvragen',
          accent: 'yellow',
        },
      },
    },
    {
      type: 'caseSpotlight',
      props: {
        title: 'Uitgelichte case',
        gradient: 'green',
        caseSlug: 'paella-party',
      },
    },
    {
      type: 'testimonials',
      props: {
        eyebrow: 'Dit zeggen de',
        title: 'Festivals',
        gradient: 'orange',
        carousel: testimonialCarousel,
        items: pickTestimonials(['ralph-buisman', 'dorpsfeest-wehl', 'siemen-peters']),
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        gradient: 'green',
        items: [
          {
            question: "Hoeveel foto's krijgen we opgeleverd?",
            answer: [
              {
                p: [
                  "Dat hangt af van de duur en de grootte van je event. We spreken vooraf een minimum aantal af, maar leveren altijd een kwalitatieve selectie op. Liever honderd sterke foto's dan duizend middelmatige.",
                ],
              },
            ],
          },
          {
            question: "Hoe snel worden de foto's opgeleverd?",
            answer: [
              {
                p: [
                  'We leveren een eerste selectie zo snel mogelijk na je event op. De volledige bewerkte set volgt binnen de afgesproken termijn. Heb je snel beelden nodig voor social media? Dan regelen we dat.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie zowel foto als video verzorgen op ons event?',
            answer: [
              {
                p: [
                  'Ja. We werken regelmatig met een gecombineerde aanpak waarbij we tegelijkertijd foto en video produceren. Zo hoef je niet met meerdere partijen te schakelen en klopt de stijl van alle content.',
                ],
              },
            ],
          },
          {
            question: 'Wat als ons event op meerdere locaties of podia plaatsvindt?',
            answer: [
              {
                p: [
                  'We schalen de crew mee op de omvang van je event. Bij meerdere podia of locaties zorgen we voor voldoende fotografen zodat geen enkel sleutelmoment wordt gemist.',
                ],
              },
            ],
          },
          {
            question: "Maken jullie ook foto's tijdens de opbouw of backstage?",
            answer: [
              {
                p: [
                  ' Ja, als dat past bij de wensen en het contentplan. Backstage en behind-the-scenes beelden zijn vaak krachtige content voor social media en geven je publiek een kijkje achter de schermen.',
                ],
              },
            ],
          },
          {
            question: "Zijn de foto's ook bruikbaar voor drukwerk of advertenties?",
            answer: [
              {
                p: ['Ja. We leveren bestanden op in hoge resolutie, geschikt voor zowel digitaal gebruik als drukwerk.'],
              },
            ],
          },
        ],
      },
    },
    {
      type: 'textMedia',
      props: {
        intro: {
          title: 'Jouw event verdient beelden die blijven hangen',
          gradient: 'orange',
          text: [
            {
              p: ['Vertel ons wat je organiseert. Dan kijken we samen wat we voor je kunnen doen.'],
            },
          ],
        },
        media: {
          type: 'image',
          src: mikeAftermovie,
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
