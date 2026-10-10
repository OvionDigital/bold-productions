/**
 * /events/eventvideos — teksten letterlijk van www.weareboldproductions.com/events/eventvideos.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../lib/sections';
import { trustedByTitle, clientLogos } from '../../../data/logos';
import { testimonialCarousel, pickTestimonials } from '../../../data/testimonials';
import mikeDorpsfeestwehlvrijdag117 from '../../../assets/images/artiesten/social-content/mike-dorpsfeestwehlvrijdag-117.jpg';
import doorgedraaid11Jpg from '../../../assets/images/events/eventvideos/doorgedraaid-11-jpg.jpg';
import doorgedraaid14Jpg from '../../../assets/images/events/eventvideos/doorgedraaid-14-jpg.jpg';
import boldDoorgedraaid2 from '../../../assets/images/events/eventvideos/bold-doorgedraaid-2.jpg';
import doorgedraaid12Jpg from '../../../assets/images/events/eventvideos/doorgedraaid-12-jpg.jpg';
import mikeAftermovie from '../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'events/eventvideos',
  title: "Eventvideo's",
  meta: {
    title: 'Event video laten maken? | Bold Productions',
    description: 'Dag 1 is je beste verkoper. Creëer live FOMO met een vette evenementen video of same-day edit. Verkoop meer tickets.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Dag 1 verkoopt',
        titleAccent: 'dag 2.',
        eyebrow: 'Maar alleen als je het goed vastlegt. En snel deelt.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Zo doen we dat',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: mikeDorpsfeestwehlvrijdag117,
          alt: 'Willem de Wijs tijdens een live-optreden. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        video: {
          id: '954510971',
          hash: '2fa6fd18b8',
          title: "Sfeervideo Eventvideo's – Bold Productions",
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
        title: 'wat is een Eventvideo?',
        gradient: 'green',
        body: [
          {
            p: ['Evenementen video. Klinkt simpel. Een camera, een event, een video. Klaar.'],
          },
          {
            p: ['Maar dan mis je het punt volledig.'],
          },
          {
            p: [
              'Een goede eventvideo is geen registratie. Het is een wapen. Ingezet op het ',
              {
                text: 'juiste moment',
                strong: true,
              },
              ', bij de ',
              {
                text: 'juiste mensen',
                strong: true,
              },
              ', met de ',
              {
                text: 'juiste boodschap',
                strong: true,
              },
              '. En bij een meerdaags festival of event is dat moment niet ná het event. Dat moment is nú. Terwijl dag één nog bezig is.',
            ],
          },
          {
            p: [
              'Wij noemen dat ',
              {
                text: 'live FOMO',
                em: true,
              },
              '. Mensen thuis zien wat ze missen. Ze zien de energie, de sfeer, de crowd die volledig opgaat in het moment. En ze besluiten: morgen ga ik. Of dit weekend. Of volgend jaar zeker.',
            ],
          },
          {
            p: ['Dat is geen bijproduct van een eventvideo. Dat is het doel.'],
          },
        ],
        media: {
          type: 'image',
          src: doorgedraaid11Jpg,
          alt: 'SFeerbeeld van het publiek tijdens het Doorgedraaid Feestival. Vastgelegd door Bold Productions contentspecialist voor Events & Artiesten.',
        },
        triangles: true,
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: ['Wat levert een Eventvideo op?'],
            level: 2,
          },
          {
            ul: [
              [
                {
                  text: 'Tickets verkopen terwijl je event nog bezig is',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een same-day edit van dag één is je sterkste verkooptool voor dag twee. Niet een advertentie. Niet een post met tekst. Maar bewijs. Mensen zien wat er gebeurt en willen erbij zijn. Dat is live FOMO en dát werkt.',
              ],
              [
                {
                  text: 'Bezoekers die terugkomen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Mensen die zichzelf terugzien in een eventvideo herbeleven de emotie van de dag. Dat gevoel versterkt de band met jouw event. En vergroot de kans dat ze volgend jaar weer een kaartje kopen.',
              ],
              [
                {
                  text: 'Sponsors die trots zijn',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een professionele eventvideo laat sponsors zien dat hun naam gelinkt wordt aan iets wat telt. Dat maakt het verlengingsgesprek een stuk makkelijker.',
              ],
              [
                {
                  text: 'Content die blijft werken',
                  strong: true,
                },
                {
                  br: true,
                },
                'Lang na je event blijft een goede video zijn werk doen. Op je website, in je nieuwsbrief, in je sponsorpitch voor de volgende editie.',
              ],
            ],
            spaced: true,
          },
          {
            p: [],
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
        title: 'Hoe we jouw\nEventvideo maken.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'We schieten niet lukraak alles wat beweegt. We werken altijd vanuit een plan, zodat de eindmontage klopt en jij niet verrast wordt door iets wat niet aansluit bij je event.',
            ],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'strategie',
            text: [
              {
                p: [
                  'Wat wil je dat mensen voelen als ze jouw eventvideo zien? Wie is de doelgroep? Moeten we ',
                  {
                    text: 'same-day',
                    em: true,
                  },
                  ' edits leveren, of gaat het om een volledige eventregistratie achteraf? We stellen de vragen die de meeste contentmakers overslaan.',
                ],
              },
            ],
            image: {
              src: doorgedraaid14Jpg,
              alt: 'DJ La Fuente tijdens het Doorgedraaid Feestival. Foto door Bold Productions contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '02',
            title: 'draaiplanning',
            text: [
              {
                p: [
                  "Op basis van het programma maken we een draaiplanning. Welke momenten zijn cruciaal? Waar moeten we staan? Hoeveel camera's hebben we nodig? Alles wordt vooraf doorgenomen — zodat we op de dag zelf geen seconde verspillen.",
                ],
              },
            ],
            image: {
              src: boldDoorgedraaid2,
              alt: 'Team Bold Productions, contentspecialist voor Events & Artiesten, tijdens het Doorgedraaid Feestival.',
            },
          },
          {
            number: '03',
            title: 'productie en post-productie',
            text: [
              {
                p: [
                  'Op locatie bewegen we mee met jouw event. We vangen de energie, de emotie en de momenten die het verschil maken. Onopvallend waar dat moet. Op de voorgrond waar dat nodig is.',
                ],
              },
              {
                p: [
                  'Daarna? Monteren we de beelden tot een video die aanslaat bij jouw doelgroep. ',
                  {
                    text: 'Same-day',
                    em: true,
                  },
                  ' edits leveren we nog dezelfde dag op — klaar om te delen terwijl de energie nog vers is. De volledige eventvideo volgt binnen de afgesproken termijn.',
                ],
              },
            ],
            image: {
              src: doorgedraaid12Jpg,
              alt: 'Sfeerbeeld van het Doorgedraaid Feestival. Fotografie door Bold Productions contentspecialist voor Events & Artiesten.',
            },
          },
        ],
        cta: {
          label: 'Plan een gesprek',
          href: '/offerte-aanvragen',
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
            question: 'Wat is een same-day edit precies?',
            answer: [
              {
                p: [
                  ' Een same-day edit is een korte, krachtige montage die we nog op de dag van het event — of dezelfde avond — opleveren. Ideaal om live FOMO te creëren bij mensen die er niet bij zijn. Denk aan dag-één-content die kaarten verkoopt voor dag twee, of weekendcontent die het volgende weekend vult.',
                ],
              },
            ],
          },
          {
            question: 'Hoe snel is een same-day edit klaar?',
            answer: [
              {
                p: [
                  " De naam verklapt het natuurlijk al. Op dezelfde dag. Maar het hangt ook af van de afspraken die we vooraf maken. In de meeste gevallen leveren we een same-day edit 'snachts of de volgende ochtend op. Klaar om direct te delen op social media.",
                ],
              },
            ],
          },
          {
            question: 'Hoeveel videografen zijn er nodig voor mijn event?',
            answer: [
              {
                p: [
                  'Dat hangt af van de grootte van je event en het aantal locaties of podia. We bespreken dit vooraf en stellen een crew samen die past bij jouw event en wensen.',
                ],
              },
            ],
          },
          {
            question: 'Hoe snel krijgen we de volledige video na het event?',
            answer: [
              {
                p: [
                  'We werken met een afgesproken opleverdatum die we vooraf vastleggen. Gemiddeld leveren we een volledige eventvideo op binnen twee tot drie weken na het event.',
                ],
              },
            ],
          },
          {
            question: "Kunnen jullie ook video's maken van meerdaagse events of festivals met meerdere podia?",
            answer: [
              {
                p: [
                  'Ja. We hebben ervaring met meerdaagse events en festivals met meerdere podia. We schalen de crew mee op de omvang van je event.',
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
          title: 'jouw event verdient een video die blijft hangen',
          gradient: 'orange',
          text: [
            {
              p: [
                {
                  text: 'En eentje die live FOMO creëert terwijl hij nog bezig is.',
                  strong: true,
                },
              ],
            },
            {
              p: ['Laat ons weten wat je organiseert. Dan kijken we samen wat we voor je kunnen doen.'],
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
