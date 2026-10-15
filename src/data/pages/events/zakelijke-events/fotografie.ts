/**
 * /zakelijke-events/fotografie — teksten letterlijk van www.weareboldproductions.com/zakelijke-events/fotografie.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import { trustedByTitle, businessLogos } from '../../../logos';
import { testimonialCarousel, pickTestimonials } from '../../../testimonials';
import mikeWaterschapHuisfeestje194 from '../../../../assets/images/zakelijke-events/fotografie/mike-waterschap-huisfeestje-194.jpg';
import mikeSkndag40 from '../../../../assets/images/zakelijke-events/fotografie/mike-skndag-40.jpg';
import mikeWaterschapHuisfeestje2 from '../../../../assets/images/zakelijke-events/fotografie/mike-waterschap-huisfeestje-2.jpg';
import mikeWaterschapHuisfeestje202 from '../../../../assets/images/zakelijke-events/fotografie/mike-waterschap-huisfeestje-202.jpg';
import mikeWaterschapHuisfeestje38 from '../../../../assets/images/zakelijke-events/fotografie/mike-waterschap-huisfeestje-38.jpg';
import mikeAftermovie from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'events/zakelijke-events/fotografie',
  title: 'Fotografie',
  meta: {
    schema: { type: 'service', serviceType: 'Zakelijke Eventfotografie' },
    title: 'Zakelijke eventfotografie? | Bold Productions',
    description:
      "Leg de impact vast. Professionele foto's van je event, direct inzetbaar voor al je marketingkanalen. Ontdek Bold.",
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Jouw zakelijk event',
        titleAccent: 'in één beeld.',
        eyebrow: 'Professioneel. Herkenbaar. Klaar voor gebruik.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/events/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Lees hoe',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: mikeWaterschapHuisfeestje194,
          alt: 'Sfeerbeeld van een bedrijfsfeest vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        accent: 'yellow',
      },
    },
    {
      type: 'breadcrumbs',
    },
    {
      type: 'logoMarquee',
      props: {
        title: trustedByTitle,
        logos: businessLogos,
      },
    },
    {
      type: 'textMedia',
      props: {
        id: 'first-section',
        title: 'Wat is zakelijke eventfotografie?',
        gradient: 'green',
        body: [
          {
            p: [
              'Zakelijke eventfotografie is het vastleggen van de momenten die jouw event definiëren. Niet alles wat er gebeurt. De juiste dingen.',
            ],
          },
          {
            p: [
              'De spreker die de zaal pakt. De deelnemers die volledig opgaan in een sessie. Het netwerkmoment waarbij twee mensen elkaar voor het eerst ontmoeten. De sfeer die je nergens anders vindt. Dat zijn de ',
              {
                text: 'beelden die laten zien wat jouw event heeft opgeleverd',
                strong: true,
              },
              '. Voor deelnemers die de dag herbeleven. Voor management dat wil zien wat er is neergezet. Voor prospects die willen weten of dit iets voor hen is.',
            ],
          },
          {
            p: [
              "Goede foto's van een zakelijk evenement zijn ",
              {
                text: 'direct inzetbaar',
                strong: true,
              },
              '. Op LinkedIn, op je website, in je nieuwsbrief en in je sponsordossier. Ze vertellen het verhaal van je organisatie zonder dat je er een woord bij nodig hebt.',
            ],
          },
          {
            p: [
              'Zakelijke eventfotografie laten maken vraagt om iemand die professioneel en onopvallend werkt in een zakelijke omgeving. Die weet hoe hij de juiste momenten vangt zonder het event te verstoren. En die begrijpt welke beelden jij nodig hebt.',
            ],
          },
        ],
        cta: {
          label: 'Dit wil je',
          href: '/events/offerte-aanvragen',
          accent: 'green',
        },
        media: {
          type: 'image',
          src: mikeSkndag40,
          alt: 'Binnenkomende gasten tijdens een bedrijfsfeest. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        triangles: true,
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: ['Wat levert professionele zakelijke eventfotografie je op?'],
            level: 2,
          },
          {
            ul: [
              [
                {
                  text: 'Direct inzetbare beelden',
                  strong: true,
                },
                {
                  br: true,
                },
                "Na je event wil je snel kunnen schakelen. Professionele eventfoto's zijn direct klaar voor gebruik op LinkedIn, in je nieuwsbrief en op je website. Zonder gedoe.",
                {
                  br: true,
                },
                "Na je event wil je snel kunnen schakelen. Professionele eventfoto's zijn direct klaar voor gebruik op LinkedIn, in je nieuwsbrief en op je website. Zonder gedoe.",
              ],
              [
                {
                  text: 'Intern bewijs van een geslaagd event',
                  strong: true,
                },
                {
                  br: true,
                },
                "Foto's maken het succes van jouw event zichtbaar voor mensen die er niet bij waren. Management, collega's en stakeholders zien in één oogopslag wat je hebt neergezet.",
              ],
            ],
          },
          {
            ul: [
              [
                {
                  text: 'Sterk promomateriaal voor de volgende editie',
                  strong: true,
                },
                {
                  br: true,
                },
                "De beste foto's van dit jaar zijn de beste promotie voor volgend jaar. Sterke beelden bouwen aan het merk van jouw event editie na editie.",
              ],
              [
                {
                  text: 'Employer branding zonder reclamebord',
                  strong: true,
                },
                {
                  br: true,
                },
                "Authentieke foto's van een goed bezocht, professioneel zakelijk event vertellen het verhaal van jouw organisatiecultuur. Zonder dat het als reclame voelt.",
              ],
              [
                {
                  text: 'Content die je het hele jaar inzet',
                  strong: true,
                },
                {
                  br: true,
                },
                "Goede zakelijke eventfoto's gebruik je niet alleen in de week na je event. Ze zijn inzetbaar voor social media, presentaties, persberichten en wervingscommunicatie.",
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
        title: 'Hoe we jouw zakelijke eventfotografie aanpakken.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              "We beginnen met de juiste vragen. Welke momenten zijn cruciaal? Voor welke kanalen zijn de foto's bedoeld? Zijn er specifieke personen, sessies of onderdelen die zeker vastgelegd moeten worden? Op basis daarvan maken we een plan.",
            ],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Fotoplanning',
            text: [
              {
                p: [
                  'We stemmen onze aanpak af op het programma van jouw event. Zo weten we precies waar we moeten zijn en wanneer. Geen gemiste momenten, geen verrassingen.',
                ],
              },
            ],
            image: {
              src: mikeWaterschapHuisfeestje2,
              alt: 'Sfeerbeeld van het bedrijfsfeest van Waterschap Rijn & IJssel in Doetinchem. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '02',
            title: 'Productie',
            text: [
              {
                p: [
                  'Op locatie werken we professioneel en onopvallend. We bewegen mee met het event zonder het te verstoren. We vangen de sfeer, de interactie en de momenten die het succes van jouw zakelijk evenement aantonen.',
                ],
              },
              {
                p: [],
              },
            ],
            image: {
              src: mikeWaterschapHuisfeestje202,
              alt: 'Sfeerbeeld van een bedrijfsfeest. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '03',
            title: 'Oplevering',
            text: [
              {
                p: [
                  "We leveren een selectie van bewerkte, direct inzetbare foto's op binnen de afgesproken termijn. Heb je snel beelden nodig voor social media of een persbericht? Dan regelen we dat.",
                ],
              },
              {
                p: [],
              },
            ],
            image: {
              src: mikeWaterschapHuisfeestje38,
              alt: 'Sfeerbeeld van een bedrijfsfeest vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
        ],
        cta: {
          label: 'Bel Bold',
          href: '/events/offerte-aanvragen',
          accent: 'yellow',
        },
        reverse: true,
      },
    },
    {
      type: 'caseSpotlight',
      props: {
        title: 'Uitgelichte case',
        gradient: 'green',
        caseSlug: 'de-live-formule',
      },
    },
    {
      type: 'testimonials',
      props: {
        eyebrow: 'Dit zeggen de',
        title: 'Evenementenbureas',
        gradient: 'orange',
        carousel: testimonialCarousel,
        items: pickTestimonials(['manon-diks', 'dorpsfeest-wehl']),
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
                  'We spreken vooraf een minimum aantal af, maar leveren altijd een kwalitatieve selectie op. Liever honderd sterke beelden dan duizend middelmatige. Kwaliteit boven kwantiteit.',
                ],
              },
            ],
          },
          {
            question: "Hoe snel worden de foto's opgeleverd?",
            answer: [
              {
                p: [
                  'We leveren een eerste selectie zo snel mogelijk na je event op. De volledige bewerkte set volgt binnen de afgesproken termijn. Heb je snel beelden nodig voor social media of een persbericht? Dan regelen we dat.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie zowel foto als video verzorgen op ons zakelijk event?',
            answer: [
              {
                p: [
                  ' Ja. We werken regelmatig met een gecombineerde aanpak waarbij we tegelijkertijd foto en video produceren. Zo hoef je niet met meerdere partijen te schakelen en klopt de stijl van alle content.',
                ],
              },
            ],
          },
          {
            question: "Hoe zorgen jullie dat de foto's aansluiten bij onze huisstijl?",
            answer: [
              {
                p: [
                  " We nemen je huisstijl en merkrichtlijnen mee in de aanpak. Denk aan kleurgebruik, sfeer en de manier waarop mensen en locaties in beeld worden gebracht. Zodat de foto's naadloos aansluiten bij je andere communicatie.",
                ],
              },
            ],
          },
          {
            question: "Kunnen jullie ook portretfoto's maken van sprekers of deelnemers?",
            answer: [
              {
                p: [
                  ' Ja. Als dat onderdeel is van de wensen, nemen we dat mee in de planning. We bespreken vooraf wat je nodig hebt zodat we niets missen.',
                ],
              },
            ],
          },
          {
            question: 'Wij werken met een eventbureau. Kunnen jullie rechtstreeks met hen samenwerken?',
            answer: [
              {
                p: [
                  'Ja. We werken regelmatig samen met eventbureaus als contentpartner voor hun klanten. Korte lijnen, duidelijke afspraken en één aanspreekpunt voor de fotografie.',
                ],
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
          title: 'Jouw zakelijk event verdient beelden die blijven hangen.',
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
