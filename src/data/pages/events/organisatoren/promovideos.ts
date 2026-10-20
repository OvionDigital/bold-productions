/**
 * /events/promovideos — teksten letterlijk van www.weareboldproductions.com/events/promovideos.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import { trustedByTitle, clientLogos } from '../../../logos';
import { testimonialCarousel, pickTestimonials } from '../../../testimonials';
import spotSeq00400301Still001 from '../../../../assets/images/events/promovideos/spot-seq-00-40-03-01-still001.jpg';
import doorgedraaid8 from '../../../../assets/images/events/promovideos/doorgedraaid-8.jpg';
import boldDoorgedraaid56 from '../../../../assets/images/events/promovideos/bold-doorgedraaid-56.jpg';
import boldDoorgedraaid3 from '../../../../assets/images/events/promovideos/bold-doorgedraaid-3.jpg';
import boldProductionsPiratenCafe162 from '../../../../assets/images/events/promovideos/bold-productions-piraten-cafe-162.jpg';
import mikeAftermovie from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'events/organisatoren/promovideos',
  title: "Promovideo's",
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Event Promovideo Productie',
      name: 'Promovideo laten maken? | Bold Productions',
    },
    title: 'Promotiefilm laten maken ? | Bold Productions',
    description:
      "Trek mensen van de bank af. Wij maken event promo's die overtuigen, FOMO creëren en tickets verkopen. Ontdek Bold.",
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'een promotiefilm',
        titleAccent: 'laten maken',
        eyebrow: 'die mensen doet besluiten.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/events/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Zo doen we dat',
          href: '/events/offerte-aanvragen',
          icon: 'arrow-right',
        },
        image: {
          src: spotSeq00400301Still001,
          alt: 'Een festivalbezoeker op de foto gezet door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        video: {
          id: '1186190540',
          hash: '2fa6fd18b8',
          title: "Sfeervideo Promovideo's – Bold Productions",
        },
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
        title: 'Wat is een promovideo?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Een promovideo of aankondigingsvideo is de aankondiging van jouw event. Het moment waarop je doelgroep voor het eerst ziet wat er aan komt. En beslist of ze erbij willen zijn.',
            ],
          },
          {
            p: [
              'Een goede promotiefilm voor je event laat mensen niet alleen ',
              {
                text: 'zien',
                strong: true,
              },
              ' wat er komt. Hij laat ze ',
              {
                text: 'voelen',
                strong: true,
              },
              ' waarom ze er bij moeten zijn.',
            ],
          },
          {
            p: ['Hij zet de verwachting neer. '],
          },
          {
            p: ['Bouwt spanning op. '],
          },
          {
            p: ['En geeft je doelgroep precies genoeg om te willen weten wat ze missen als ze thuisblijven.'],
          },
          {
            p: [
              'Dat vraagt om meer dan een mooie opmaak met wat tekst en muziek. Het vraagt om ',
              {
                text: 'strategie',
                strong: true,
              },
              '. Om begrip van jouw doelgroep. En om iemand die weet hoe je met beeld een beslissing beïnvloedt.',
            ],
          },
          {
            p: [],
          },
        ],
        media: {
          type: 'image',
          src: doorgedraaid8,
          alt: 'Sfeerbeeld tijdens het Doorgedraaid Feestival. Foto door Bold Productions contentspecialist voor Events & Artiesten.',
        },
        triangles: true,
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: ['Wat levert een sterke promotiefilm je op?'],
            level: 2,
          },
          {
            ul: [
              [
                {
                  text: 'Tickets verkopen vanaf dag één',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een krachtige eventvideo die op het juiste moment wordt gelanceerd zet je ticketverkoop direct in beweging. Mensen besluiten sneller als ze zien en voelen wat er aan komt.',
              ],
              [
                {
                  text: 'FOMO creëren vóór het event',
                  strong: true,
                },
                {
                  br: true,
                },
                'De juiste aankondiging zorgt dat mensen in hun omgeving beginnen te praten over jouw event. Organisch bereik dat geen advertentiebudget kan kopen.',
              ],
              [
                {
                  text: 'Een sterke eerste indruk',
                  strong: true,
                },
                {
                  br: true,
                },
                'De aankondiging van je event is vaak het eerste wat mensen zien. Een professionele, on-brand eventvideo zet de toon voor alles wat volgt.',
              ],
              [
                {
                  text: 'Meer bereik via social media',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een aankondigingsvideo die aanslaat bij jouw doelgroep wordt gedeeld. Door fans, door artiesten, door media. Elk gedeeld beeld is extra bereik voor jouw event.',
              ],
              [
                {
                  text: 'Een sterke basis voor je marketingcampagne',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een goede eventvideo is het vertrekpunt van je marketingcampagne. Hij geeft richting aan al je andere uitingen — van social posts tot advertenties.',
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
        title: 'Van aankondiging tot\nuitverkocht event.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              {
                text: 'Wat kondigen we aan? Wanneer lanceren we de video?',
                em: true,
              },
              ' En hoe past hij in de bredere marketingcampagne rondom je event? We beginnen altijd met de ',
              {
                text: 'strategie',
                strong: true,
              },
              ' voordat we een camera oppakken.',
            ],
          },
          {
            p: [],
          },
          {
            p: [],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'CONCEPT & PLANNING',
            text: [
              {
                p: [
                  'We vertalen de strategie naar een concreet concept. Welke beelden hebben we nodig? Schieten we nieuw materiaal, werken we met bestaand materiaal van vorige edities of combineren we beide? Alles wordt vastgelegd in een duidelijk plan.',
                ],
              },
            ],
            image: {
              src: boldDoorgedraaid56,
              alt: 'Een festivalbezoeker tijdens het Doorgedraaid Feestival. Foto gemaakt door Bold Productions contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '02',
            title: 'PRODUCTIE',
            text: [
              {
                p: [
                  'We schieten gericht en doelgericht. Elk shot heeft een reden. We weten welke beelden werken voor jouw doelgroep en zorgen dat we die vangen.',
                ],
              },
            ],
            image: {
              src: boldDoorgedraaid3,
              alt: 'Mike Ampting, Creative Director van Bold Productions, aan het werk tijdens een festival.',
            },
          },
          {
            number: '03',
            title: 'POST-PRODUCTIE & OPLEVERING',
            text: [
              {
                p: [
                  'We monteren de aankondigingsvideo zodat hij raak is. Op tijd geleverd, klaar om te lanceren op het moment dat het meeste impact maakt.',
                ],
              },
            ],
            image: {
              src: boldProductionsPiratenCafe162,
              alt: 'Foto van een live-optreden tijdens het piraten café. Vastgelegd door Bold Productions contentspecialist voor Events & Artiesten.',
            },
          },
        ],
        cta: {
          label: 'Plan een gesprek',
          href: '/events/offerte-aanvragen',
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
            question: 'Hoe vroeg voor mijn event moet ik beginnen?',
            answer: [
              {
                p: [
                  'Hoe eerder, hoe beter. We adviseren 6 maanden voor je event te starten. Zo heb je genoeg tijd om de video in te zetten in je marketingcampagne en het maximale effect te bereiken.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie beeldmateriaal van vorige edities gebruiken?',
            answer: [
              {
                p: [
                  'Absoluut. Materiaal van eerdere edities is vaak goud waard. Het laat zien wat mensen kunnen verwachten — en dat is precies wat FOMO creëert.',
                ],
              },
            ],
          },
          {
            question: "Maken jullie ook promovideo's voor kleinere events?",
            answer: [
              {
                p: ['Ja. De grootte telt niet, wel wat je er mee doet.'],
              },
            ],
          },
          {
            question: 'Leveren jullie ook kortere versies voor social media?',
            answer: [
              {
                p: [
                  'Wanneer nodig leveren we meerdere versies op — een langere hoofdvideo én kortere cuts voor Instagram, TikTok en andere kanalen.',
                ],
              },
            ],
          },
          {
            question: 'Wat als ik niet goed weet hoe ik de video moet inzetten?',
            answer: [
              {
                p: [
                  'Dan denken we daar samen over na. We adviseren niet alleen over de productie, maar ook over timing en kanalen.',
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
          title: 'Klaar voor een aankondiging die je event op de kaart zet?',
          gradient: 'orange',
          text: [
            {
              p: ['Vertel ons over je event. Dan vertellen wij wat we voor je kunnen doen.'],
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
