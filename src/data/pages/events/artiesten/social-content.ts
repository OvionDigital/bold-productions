/**
 * /artiesten/social-content — teksten letterlijk van www.weareboldproductions.com/artiesten/social-content.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import { trustedByTitle, artistLogos } from '../../../logos';
import { testimonialCarousel, pickTestimonials } from '../../../testimonials';
import mikeDorpsfeestwehlzaterdag117 from '../../../../assets/images/artiesten/social-content/mike-dorpsfeestwehlzaterdag-117.jpg';
import mikeDorpsfeestwehlzaterdag168 from '../../../../assets/images/artiesten/social-content/mike-dorpsfeestwehlzaterdag-168.jpg';
import mikeDorpsfeestwehlzaterdag255 from '../../../../assets/images/artiesten/social-content/mike-dorpsfeestwehlzaterdag-255.jpg';
import mikeDorpsfeestwehlvrijdag117 from '../../../../assets/images/artiesten/social-content/mike-dorpsfeestwehlvrijdag-117.jpg';
import mikeDorpsfeestwehlvrijdag167 from '../../../../assets/images/artiesten/social-content/mike-dorpsfeestwehlvrijdag-167.jpg';
import mikeAftermovie from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'events/artiesten/social-content',
  title: 'Social content',
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Artist Social Media Content',
      name: 'Social Content laten maken? | Bold Productions',
    },
    title: 'Social Content  laten maken? | Bold Productions',
    description:
      'Blijf zichtbaar tussen de shows door. Overtuig boekers en vergroot de fanbase met snappy clips en teasers. Ontdek Bold.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Talent alléén vult',
        titleAccent: "Geen agenda's.",
        eyebrow: 'Zichtbaarheid wel.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/events/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Boek Bold',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: mikeDorpsfeestwehlzaterdag117,
          alt: 'Zanger Jan Smit tijdens een optreden in een tentfeest. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
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
        logos: artistLogos,
      },
    },
    {
      type: 'textMedia',
      props: {
        id: 'first-section',
        title: 'Wat is social content voor artiesten?',
        gradient: 'orange',
        body: [
          {
            p: ["Je speelt een geweldige show. De zaal staat op z'n kop. En de dag erna?"],
          },
          {
            p: ['Stilte op je socials.'],
          },
          {
            p: [
              'Dat is het probleem van de meeste artiesten. Ze zijn goed op het podium. Maar tussen de optredens door verdwijnen ze van het netvlies van boekers, fans en festivalorganisatoren. ',
            ],
          },
          {
            p: [
              'Want social media stopt niet als de tour stopt. Boekers scrollen door je feed voordat ze je bellen. Fans willen weten wie je bent buiten het podium. En festivalorganisatoren willen zien dat je een actieve, betrokken fanbase hebt voordat ze je boeken.',
            ],
          },
          {
            p: [
              'Social content voor artiesten is de manier om dat voor elkaar te krijgen. Niet door constant te posten wat je gisteren at. Maar door de ',
              {
                text: 'juiste beelden',
                strong: true,
              },
              ', op de ',
              {
                text: 'juiste momenten',
                strong: true,
              },
              ', op de ',
              {
                text: 'juiste kanalen',
                strong: true,
              },
              ' te delen. Content die laat zien wie jij bent. Als artiest. Als persoon. En als live act die mensen willen zien.',
            ],
          },
          {
            p: [
              'Wij maken die content voor je. Van snappy clips van je optredens tot behind-the-scenes moments in de studio. Van korte teasers voor je volgende show tot content die je fanbase laat groeien terwijl jij op het podium staat.',
            ],
          },
        ],
        cta: {
          label: "Let's go BOLD",
          href: '/events/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: mikeDorpsfeestwehlzaterdag168,
          alt: 'Zanger Xander de Buisonjé tijdens het Dorpsfeest in Wehl. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
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
                  text: 'Zichtbaar blijven tussen de shows door',
                  strong: true,
                },
                {
                  br: true,
                },
                'Boekers en fans vergeten snel. Consistente social content zorgt dat jij top-of-mind blijft. Ook als je weken niet op het podium staat.',
              ],
              [
                {
                  text: 'Een fanbase die groeit',
                  strong: true,
                },
                {
                  br: true,
                },
                'Content die aanslaat bij jouw doelgroep trekt nieuwe fans aan. Mensen die jou nog niet kennen, ontdekken je via social media. En worden de bezoekers van je volgende show.',
              ],
              [
                {
                  text: 'Boekers overtuigen zonder uitleggen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een actieve, betrokken social media aanwezigheid laat boekers zien dat jij een publiek hebt. Dat is een van de sterkste argumenten om geboekt te worden.',
              ],
              [
                {
                  text: 'Content die je agenda vult',
                  strong: true,
                },
                {
                  br: true,
                },
                'Teasers voor aankomende shows. Highlights van optredens. Behind-the-scenes in de studio. Elke post is een kans om mensen naar je volgende optreden te trekken.',
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
        title: 'Van contentplan tot\nklaar-voor-insta. of tiktok.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'We beginnen nooit met een camera. We beginnen met vragen. Want content die niet aansluit bij wie jij bent als artiest, werkt niet. Hoe goed het er ook uitziet.',
            ],
          },
          {
            p: [
              'Wie ben jij als artiest? Wat is je sound, je stijl, je uitstraling? Welke boekers en podia wil je bereiken? Wat wil je dat fans van je zien? ',
            ],
          },
          {
            p: [
              'Op basis daarvan maken we een ',
              {
                text: 'contentplan',
                strong: true,
              },
              ' dat past bij jouw fase en doelstellingen.',
            ],
          },
          {
            p: [],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'contentplan op maat',
            text: [
              {
                p: [
                  'We bepalen samen welke content je nodig hebt. Live clips, behind-the-scenes, studiomomenten, teasers voor shows. Alles wordt gepland zodat je altijd iets klaar hebt staan.',
                ],
              },
            ],
            image: {
              src: mikeDorpsfeestwehlzaterdag255,
              alt: 'Sfeerbeeld van het Dorpsfeest in Wel. Foto door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '02',
            title: 'productie',
            text: [
              {
                p: [
                  'Op locatie, in de studio of op het podium. We schieten gericht en zorgen dat we de beelden vangen die werken op social media. Snel, onopvallend en altijd met jouw uitstraling in gedachten.',
                ],
              },
            ],
            image: {
              src: mikeDorpsfeestwehlvrijdag117,
              alt: 'Willem de Wijs tijdens een live-optreden. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '03',
            title: 'oplevering en advies',
            text: [
              {
                p: [
                  'We leveren de content op klaar voor gebruik. Inclusief advies over timing, captions en de beste manier om elke post in te zetten. Want goede content op het verkeerde moment is ook zonde.',
                ],
              },
            ],
            image: {
              src: mikeDorpsfeestwehlvrijdag167,
              alt: 'Sfeerbeeld van het Dorpsfeest in Wehl. Foto door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
        ],
        cta: {
          label: 'Boek Bold',
          href: '/events/offerte-aanvragen',
          accent: 'yellow',
        },
        reverse: true,
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: ['Zo kan dat eruit zien'],
            level: 2,
          },
          {
            p: [],
          },
          {
            video: {
              id: '1188405507',
              title: 'Ian Zwaardski - Kingsnight Liveclip (2)',
              ratio: 1.065,
            },
          },
        ],
        align: 'center',
      },
    },
    {
      type: 'caseSpotlight',
      props: {
        title: 'Uitgelichte case',
        gradient: 'green',
        caseSlug: 'saxypianoshow',
      },
    },
    {
      type: 'testimonials',
      props: {
        eyebrow: 'Dit zeggen de',
        title: 'Artiesten',
        gradient: 'orange',
        carousel: testimonialCarousel,
        items: pickTestimonials(['reinier-peters', 'merijn-peters', 'sam-janssen', 'jeff-straub']),
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        gradient: 'green',
        items: [
          {
            question: 'Hoe vaak moeten we posten om zichtbaar te blijven?',
            answer: [
              {
                p: [
                  'Dat hangt af van je doelstellingen en je fase als artiest. We adviseren je hierover op basis van je contentplan. Kwaliteit gaat altijd voor kwantiteit. Liever drie sterke posts per week dan elke dag iets wat niet aanslaat.',
                ],
              },
            ],
          },
          {
            question: 'Voor welke kanalen maken jullie social content?',
            answer: [
              {
                p: [
                  'We maken content geschikt voor Instagram, TikTok, Facebook en YouTube. We houden rekening met de juiste formats en verhoudingen per kanaal zodat jij niet achteraf zit te knippen en croppen.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ook content maken tijdens onze optredens?',
            answer: [
              {
                p: [
                  'Ja. Live content van optredens is vaak het krachtigste materiaal voor social media. We plannen dit vooraf en zorgen dat we op de juiste momenten op de juiste plek staan.',
                ],
              },
            ],
          },
          {
            question: 'Wij zijn een band. Kunnen jullie content maken voor de hele band én voor individuele leden?',
            answer: [
              {
                p: [
                  'Ja. We maken zowel content voor de band als geheel als voor individuele bandleden. Dat geeft je meer variatie en meer mogelijkheden om verschillende doelgroepen te bereiken.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ook helpen met captions en de planning van posts?',
            answer: [
              {
                p: [
                  'Ja. We adviseren je over timing, captions en de beste manier om de content in te zetten. Wil je dat we dat volledig uit handen nemen? Dan bespreken we dat in ons eerste gesprek.',
                ],
              },
            ],
          },
          {
            question: 'Wij hebben geen tijd om ons bezig te houden met social media. Kunnen jullie dat overnemen?',
            answer: [
              {
                p: [
                  'We kunnen de contentproductie volledig uit handen nemen. Van strategie en productie tot advies over inzet. Zo hoef jij je alleen maar bezig te houden met waar je goed in bent: muziek maken en optreden.',
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
          title: 'Klaar om zichtbaar te blijven tussen de shows door?',
          gradient: 'orange',
          text: [
            {
              p: ['Vertel ons wie je bent. Dan vertellen wij wat we voor je kunnen doen.'],
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
