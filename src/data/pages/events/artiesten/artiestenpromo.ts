/**
 * /artiesten/artiestenpromo — teksten letterlijk van www.weareboldproductions.com/artiesten/artiestenpromo.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import { trustedByTitle, artistLogos } from '../../../logos';
import { testimonialCarousel, pickTestimonials } from '../../../testimonials';
import mikeDorpsfeestwehlzaterdag43 from '../../../../assets/images/artiesten/artiestenpromo/mike-dorpsfeestwehlzaterdag-43.jpg';
import boldProductions12 from '../../../../assets/images/artiesten/artiestenpromo/bold-productions-12.jpg';
import boldProductions10 from '../../../../assets/images/artiesten/artiestenpromo/bold-productions-10.jpg';
import boldProductions110 from '../../../../assets/images/artiesten/artiestenpromo/bold-productions-110.jpg';
import heroHriepsFestival from '../../../../assets/images/events/hero-hrieps-festival.jpg';
import mikeAftermovie from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'events/artiesten/artiestenpromo',
  title: 'Artiestenpromo',
  meta: {
    schema: { type: 'service', serviceType: 'Artiesten Promovideo Productie' },
    title: 'Artiestenpromo laten maken? | Bold Productions',
    description:
      "Krijg meer boekingen als artiest. Wij maken high-end promo's voor je EPK, socials en website. Eén productie, meerdere toepassingen.",
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'jij bent',
        titleAccent: 'het merk.',
        eyebrow: 'Zorg dat de beelden dat ook uitstralen.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/events/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Helpen we mee',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: mikeDorpsfeestwehlzaterdag43,
          alt: 'Sfeerbeeld van het Dorpsfeest in Wehl. Fotografie door Bold Productions, contentspecialist voor Events & Artiesten.',
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
        logos: artistLogos,
      },
    },
    {
      type: 'textMedia',
      props: {
        id: 'first-section',
        title: 'Wat is een artiestenpromo?',
        gradient: 'yellow',
        body: [
          {
            p: [
              'Een artiestenpromo is meer dan een video. Het is de visuele vertaling van wie jij bent als artiest. Boekers, programmeurs en festivalorganisatoren zien dagelijks tientallen namen voorbijkomen. Ze beslissen in seconden. En wat ze zien bepaalt of ze verder klikken of niet.',
            ],
          },
          {
            p: [
              'Een sterke artiestenpromotiefilm laat niet alleen zien wat je doet. ',
              {
                text: 'Hij laat voelen wie je bent',
                strong: true,
              },
              '. Je energie. Je uitstraling. Het gevoel dat mensen krijgen als ze jou live zien. Dát is wat een boeker overtuigt. Dát is wat een fan doet besluiten naar jouw show te komen.',
            ],
          },
          {
            p: [
              'Een artiestenpromo laten maken vraagt om iemand die jou begrijpt voordat de camera aan gaat. Iemand die de evenementensector kent en weet hoe boekers en programmeurs kijken. ',
            ],
          },
          {
            p: [
              'En iemand die ',
              {
                text: 'jouw persoonlijke stijl',
                strong: true,
              },
              ' vertaalt naar beelden die blijven hangen.',
            ],
          },
        ],
        cta: {
          label: 'Dit wil je',
          href: '/events/offerte-aanvragen',
          accent: 'yellow',
        },
        media: {
          type: 'image',
          src: boldProductions12,
          alt: 'Een DJ tijdens zijn liveset bij het Solexrace Festival.',
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
              'Wat levert een sterke',
              {
                br: true,
              },
              ' artiestenpromo je op?',
            ],
            level: 2,
          },
          {
            ul: [
              [
                {
                  text: 'Meer en betere boekingen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een professionele artiestenpromo geeft boekers en programmeurs precies wat ze nodig hebben om een beslissing te maken. Niet twijfelen. Boeken.',
              ],
              [
                {
                  text: 'Een sterk persoonlijk merk',
                  strong: true,
                },
                {
                  br: true,
                },
                'Als solo-artiest bén jij het merk. Consistente, professionele beelden bouwen aan de perceptie die anderen van jou hebben. Online en offline.',
              ],
              [
                {
                  text: 'Onderscheid in een volle markt',
                  strong: true,
                },
                {
                  br: true,
                },
                'Veel artiesten hebben vergelijkbaar talent. Een sterke artiestenpromotie is vaak het zichtbare verschil dat jou boven de rest uitlicht.',
              ],
              [
                {
                  text: 'Klaar voor je EPK',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een Electronic Press Kit zonder goede video is een gemiste kans. Met een professionele artiestenpromo geef je je EPK de finishing touch die het verdient.',
              ],
              [
                {
                  text: 'Content die voor je werkt',
                  strong: true,
                },
                {
                  br: true,
                },
                'Je artiestenpromo is niet alleen voor boekers. Het is content voor je socials, je website en je fanbase. Eén productie, meerdere toepassingen.',
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
        title: 'Hoe we jouw\nartiestenpromo maken.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'We volgen nooit een vast format. Want jij bent geen standaard artiest. Dus beginnen we altijd met ',
              {
                text: 'leren kennen',
                strong: true,
              },
              '. ',
            ],
          },
          {
            p: [
              'Wie ben jij als artiest? Wat is je sound, je stijl, je uitstraling? Welke podia en boekers wil je bereiken? We stellen de vragen die de meeste videomakers overslaan. Want hoe beter we jou kennen, hoe sterker de promo.',
            ],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'contentplan op maat',
            text: [
              {
                p: [
                  'Op basis van de kennismaking maken we een plan. Wat schieten we? Waar? Live, in de studio of op locatie? Alles wordt afgestemd op jouw stijl en doelstellingen.',
                ],
              },
            ],
            image: {
              src: boldProductions10,
              alt: 'Sfeerbeeld van een festival. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '02',
            title: 'productie',
            text: [
              {
                p: [
                  'Tijdens de opnames zijn we er volledig voor jou. We zorgen dat je je op je gemak voelt, zodat de echte jij in beeld komt. Want de beste artiestenpromos zijn niet gespeeld. Ze zijn gevangen.',
                ],
              },
            ],
            image: {
              src: boldProductions110,
              alt: 'John de Bever tijdens een live-optreden.',
            },
          },
          {
            number: '03',
            title: 'post-productie en oplevering',
            text: [
              {
                p: [
                  'We monteren de artiestenpromo zodat hij voelt zoals jij klinkt. Strak, persoonlijk en klaar voor gebruik in je EPK, op je socials en op je website.',
                ],
              },
            ],
            image: {
              src: heroHriepsFestival,
              alt: 'Sfeerbeeld van het Hrieps Muziekfestival in Grijpskerke. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
        ],
        cta: {
          label: 'Boek Bold',
          href: '/events/offerte-aanvragen',
          accent: 'yellow',
        },
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
              id: '1136921523',
              title: 'Reinier Peters | Promo 2025-2026',
              ratio: 0.5634,
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
            question: 'Wat is het verschil tussen een artiestenpromo en een bandpromo?',
            answer: [
              {
                p: [
                  'Een artiestenpromo draait om jou als individu. Je persoonlijke uitstraling, je energie, jouw verhaal. Een bandpromo richt zich meer op de groepsdynamiek en de gezamenlijke sound van een band. Twijfel je welke het beste bij jou past? We bespreken het in ons eerste gesprek.',
                ],
              },
            ],
          },
          {
            question: 'Schieten jullie ook live optredens?',
            answer: [
              {
                p: [
                  ' Ja. Live beelden zijn vaak het krachtigste materiaal voor een artiestenpromo. We plannen de opnames bij voorkeur op een moment dat je toch al speelt. Op een festival, in een club of op een podium dat past bij jouw stijl.',
                ],
              },
            ],
          },
          {
            question: 'Ik ben net begonnen als artiest. Is dit iets voor mij?',
            answer: [
              {
                p: [
                  'We werken voor artiesten in verschillende fases van hun carrière. Of je nu net begint of al jaren bezig bent, een sterke artiestenpromo is altijd een investering die je verder brengt. In ons eerste gesprek kijken we eerlijk naar wat mogelijk is.',
                ],
              },
            ],
          },
          {
            question: 'Wat krijg ik opgeleverd?',
            answer: [
              {
                p: [
                  'Een artiestenpromo geschikt voor je EPK, je website en social media. Inclusief kortere cuts voor Instagram en TikTok. We bespreken vooraf wat je nodig hebt zodat we dat meenemen in de productie.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ook helpen met de stijl en het concept?',
            answer: [
              {
                p: [
                  'Ja. Als je nog niet precies weet hoe je jezelf visueel wil neerzetten, denken we daar graag over mee. We stellen de juiste vragen om samen tot een concept te komen dat bij jou past.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang duurt de productie?',
            answer: [
              {
                p: [
                  'Dat hangt af van de omvang. Een gerichte live registratie kan snel worden opgepakt. Een uitgebreidere artiestenpromo met meerdere locaties vraagt meer planning. We bespreken de tijdlijn in ons eerste gesprek.',
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
          title: 'Klaar om jouw merk in beeld te brengen?',
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
