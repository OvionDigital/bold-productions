/**
 * /events/social-content — teksten letterlijk van www.weareboldproductions.com/events/social-content.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../lib/sections';
import { trustedByTitle, clientLogos } from '../../../data/logos';
import { testimonialCarousel, pickTestimonials } from '../../../data/testimonials';
import mikeWaterschapHuisfeestje221 from '../../../assets/images/events/social-content/mike-waterschap-huisfeestje-221.jpg';
import boldProductions93 from '../../../assets/images/events/social-content/bold-productions-93.jpg';
import reemSprenkeler111 from '../../../assets/images/events/social-content/reem-sprenkeler-111.jpg';
import reemSprenkeler54 from '../../../assets/images/events/social-content/reem-sprenkeler-54.jpg';
import reemSprenkeler55 from '../../../assets/images/events/social-content/reem-sprenkeler-55.jpg';
import mikeAftermovie from '../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'events/social-content',
  title: 'Social content',
  meta: {
    title: 'Social content voor events | Bold Productions',
    description: 'Creëer live FOMO en verkoop meer tickets. Snappy social content voor je event, van plan tot publicatie. Ontdek Bold.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Eén event.',
        titleAccent: 'Heel jaar content.',
        eyebrow: 'als je het goed aanpakt.',
        primaryCta: {
          label: 'Boek Bold',
          href: '#',
        },
        secondaryCta: {
          label: 'Ben je daar klaar voor?',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: mikeWaterschapHuisfeestje221,
          alt: 'Een foto van een bedrijfsfeest. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
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
        title: 'Wat is social content voor je event?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Social content is de brandstof van je eventmarketing. De korte, ',
              {
                text: 'snappy',
                em: true,
              },
              " beelden en video's die je doelgroep triggeren op het moment dat ze door hun feed scrollen en jouw event voorbijkomt. ",
            ],
          },
          {
            p: [
              'Maar social content is meer dan een paar mooie plaatjes. Het is een doorlopende stroom van de ',
              {
                text: 'juiste beelden',
                strong: true,
              },
              ', op de ',
              {
                text: 'juiste momenten',
                strong: true,
              },
              ', voor de ',
              {
                text: 'juiste mensen',
                strong: true,
              },
              '. ',
            ],
          },
          {
            p: [
              'Vóór je event bouw je spanning op en creëer je FOMO. Tijdens je event deel je live wat er gebeurt en laat je thuisblijvers zien wat ze missen. Ná je event houd je de energie levend en warm je alvast op voor de volgende editie.',
            ],
          },
          {
            p: [
              'Dat vraagt om iemand die niet alleen kan filmen en fotograferen. Iemand die ',
              {
                text: 'begrijpt hoe social media werkt',
                strong: true,
              },
              ' in de evenementensector. Die weet welke content deelbaar is. Welke content converteert. En welke content gewoon wordt weggescrolld.',
            ],
          },
          {
            p: [],
          },
        ],
        media: {
          type: 'image',
          src: boldProductions93,
          alt: 'Danseressen tijdens een festival. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        triangles: true,
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: ['Wat levert goede social content je op?'],
            level: 2,
          },
          {
            ul: [
              [
                {
                  text: 'FOMO vóór, tijdens én na je event',
                  strong: true,
                },
                ' ',
                {
                  br: true,
                },
                'De juiste content op het juiste moment zorgt dat mensen beginnen te praten over jouw event. Organisch bereik dat geen advertentiebudget kan kopen.',
              ],
              [
                {
                  text: 'Meer bereik zonder meer budget',
                  strong: true,
                },
                ' ',
                {
                  br: true,
                },
                'Een sterke video of foto die wordt gedeeld bereikt een veelvoud van je eigen following. Social content die aanslaat bij jouw doelgroep verspreidt zichzelf.',
              ],
              [
                {
                  text: 'Live FOMO tijdens je event',
                  strong: true,
                },
                ' ',
                {
                  br: true,
                },
                'Same-day content gedeeld terwijl je event nog bezig is, is één van de krachtigste manieren om kaarten te verkopen voor de volgende dag. Mensen zien wat ze missen. En willen erbij zijn.',
              ],
              [
                {
                  text: 'Een herkenbaar eventmer',
                  strong: true,
                },
                'k ',
                {
                  br: true,
                },
                'Consistente, on-brand social content bouwt jaar na jaar aan je reputatie. Je event wordt niet alleen bekender. Het wordt een merk waar mensen bij willen horen.',
              ],
              [
                {
                  text: 'Content die je het hele jaar inzet',
                  strong: true,
                },
                ' ',
                {
                  br: true,
                },
                'Goed gemaakte social content gebruik je niet alleen in de week na je event. Je zet het in voor je volgende editie, in sponsorpitches, op je website en in je nieuwsbrief.',
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
      type: 'timeline',
      props: {
        title: 'Van contentplan tot klaar-voor-insta.\nof tiktok',
        gradient: 'yellow',
        intro: [
          {
            p: ['Social content werkt alleen als er een plan achter zit. Niet als je op de dag zelf bedenkt wat je gaat posten. '],
          },
          {
            p: [
              'Daarom beginnen we altijd met een ',
              {
                text: 'contentplan',
                strong: true,
              },
              '. Wat posten we wanneer? Op welk kanaal? Met welke boodschap? ',
            ],
          },
          {
            p: [
              'Zo weet je vooraf wat je kunt verwachten en hoef je op de eventdag zelf nergens meer over na te denken. Wij regelen het. Jij focust op je event.',
            ],
          },
          {
            p: [],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'strategie en contentplan',
            text: [
              {
                p: [
                  'We beginnen met de vraag: wat wil je bereiken? Meer volgers? Meer ticketverkoop? Meer naamsbekendheid? Op basis daarvan maken we een contentplan voor vóór, tijdens en na je event.',
                ],
              },
            ],
            image: {
              src: reemSprenkeler111,
              alt: 'Een festivalganger vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '02',
            title: 'productie',
            text: [
              {
                p: [
                  'Op locatie schieten we gericht. Video én foto. We weten welke momenten werken op social media en zorgen dat we die vangen. Onopvallend waar dat moet, op de voorgrond waar dat werkt.',
                ],
              },
            ],
            image: {
              src: reemSprenkeler54,
              alt: 'Foto van een live-optreden op een festival. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '03',
            title: 'snelle levering en advies',
            text: [
              {
                p: [
                  {
                    text: 'Same-day',
                    em: true,
                  },
                  ' content leveren we dezelfde dag op. Klaar om direct te posten. Overige content volgt binnen de afgesproken termijn, inclusief advies over ',
                  {
                    text: 'timing',
                    em: true,
                  },
                  ' en ',
                  {
                    text: 'captions',
                    em: true,
                  },
                  '. ',
                ],
              },
              {
                p: [
                  'We leveren niet alleen de bestanden op. We denken mee over wanneer je wat post, op welk kanaal en met welke boodschap. Want goede content op het verkeerde moment is ook zonde.',
                ],
              },
              {
                p: [],
              },
            ],
            image: {
              src: reemSprenkeler55,
              alt: 'Een sfeerbeeld van een festival. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
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
        caseSlug: 'pluggerz-x-zwarte-cross-2026',
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
            question: 'Wat is het verschil tussen social content en een aftermovie of eventvideo?',
            answer: [
              {
                p: [
                  " Een aftermovie of eventvideo is een op zichzelf staand stuk content, bedoeld om het gevoel van je event samen te vatten. Social content is een doorlopende stroom van kortere beelden en video's die je inzet op verschillende momenten en kanalen. Ze vullen elkaar aan, maar hebben een ander doel en een ander formaat.",
                ],
              },
            ],
          },
          {
            question: 'Voor welke kanalen maken jullie social content?',
            answer: [
              {
                p: [
                  'We maken content geschikt voor Instagram, TikTok, Facebook en YouTube. We houden rekening met de juiste formats en verhoudingen per kanaal, zodat jij niet achteraf zit te knippen en croppen.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ook content maken tijdens het event zelf?',
            answer: [
              {
                p: [
                  'Ja, dat is precies waar we goed in zijn. Same-day content gedeeld terwijl je event nog bezig is, is één van de krachtigste manieren om live FOMO te creëren en extra kaarten te verkopen.',
                ],
              },
            ],
          },
          {
            question: 'Hoeveel content leveren jullie op per event?',
            answer: [
              {
                p: [
                  'Dat hangt af van de grootte van je event en de afspraken die we vooraf maken. We werken altijd met een contentplan zodat je vooraf weet wat je kunt verwachten.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ook helpen met captions en de planning van posts?',
            answer: [
              {
                p: [
                  ' Ja. We adviseren je over timing, captions en de beste manier om de content in te zetten. Wil je dat we dat volledig uit handen nemen? Dan bespreken we dat in ons eerste gesprek.',
                ],
              },
            ],
          },
          {
            question: 'Moeten we zelf een contentplan aanleveren?',
            answer: [
              {
                p: [
                  'Nee. Wij maken het contentplan samen met jou. Jij kent je event en je doelgroep het beste. Wij weten wat werkt op social media in de evenementensector. Samen kom je verder dan apart.',
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
          title: 'Klaar voor social content die je event laat groeien?',
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
