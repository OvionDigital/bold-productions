/**
 * /zakelijke-events/casevideo — teksten letterlijk van www.weareboldproductions.com/zakelijke-events/casevideo.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import { trustedByTitle, businessLogos } from '../../../logos';
import { testimonialCarousel, pickTestimonials } from '../../../testimonials';
import rhbfoto131 from '../../../../assets/images/zakelijke-events/casevideo/rhbfoto-131.jpg';
import rhbfoto282 from '../../../../assets/images/zakelijke-events/casevideo/rhbfoto-282.jpg';
import rhbfoto417 from '../../../../assets/images/zakelijke-events/casevideo/rhbfoto-417.jpg';
import mikeWaterschapHuisfeestje14 from '../../../../assets/images/zakelijke-events/casevideo/mike-waterschap-huisfeestje-14.jpg';
import mikeWaterschapHuisfeestje159 from '../../../../assets/images/zakelijke-events/casevideo/mike-waterschap-huisfeestje-159.jpg';
import mikeAftermovie from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'events/zakelijke-events/casevideo',
  title: 'Casevideo',
  meta: {
    schema: { type: 'service', serviceType: 'Zakelijke Casevideo Productie' },
    title: 'Casevideo laten maken? | Bold Productions',
    description:
      'Maak van succesvolle projecten je beste verkoopargument. Overtuig nieuwe klanten met een ijzersterke casevideo.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Jouw verhaal én',
        titleAccent: 'dat van je klant.',
        eyebrow: 'Het sterkste visitekaartje dat een eventbureau kan hebben.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/events/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Hoe dan?',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: rhbfoto131,
          alt: 'Sfeerbeeld van een bedrijfsfeest vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
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
        logos: businessLogos,
      },
    },
    {
      type: 'textMedia',
      props: {
        id: 'first-section',
        title: 'Wat is een casevideo?',
        gradient: 'orange',
        body: [
          {
            p: ['Een casevideo is het meest onderschatte verkoopinstrument dat een eventbureau in handen kan hebben.'],
          },
          {
            p: [
              'Niet een brochure. Niet een ',
              {
                text: 'PowerPoint',
                em: true,
              },
              ' met cijfers. Maar een video waarin jij als eventorganisatie vertelt wat je hebt neergezet, gecombineerd met de woorden van je klant die bevestigt wat het heeft opgeleverd.',
            ],
          },
          {
            p: [
              'Twee stemmen. ',
              {
                text: 'Één sterk verhaal',
                strong: true,
              },
              '.',
            ],
          },
          {
            p: [
              'Want hier zit de kracht. Wat jij over jezelf zegt, is marketing. Wat je klant over jou zegt, is bewijs. En bewijs overtuigt waar marketing dat niet doet.',
            ],
          },
          {
            p: [
              'Een goede casevideo combineert beide. Jij legt uit wat de uitdaging was, welke keuzes je hebt gemaakt en hoe je het event hebt neergezet. Je klant vertelt wat het hem heeft opgeleverd. In zijn eigen woorden, op het moment dat de avond nog vers is. En dat alles wordt ondersteund met beelden van het event zelf.',
            ],
          },
          {
            p: [
              'Het resultaat is een video die potentiële klanten in één keer laat zien ',
              {
                text: 'wie je bent',
                strong: true,
              },
              ', ',
              {
                text: 'hoe je werkt',
                strong: true,
              },
              ' en ',
              {
                text: 'wat je oplevert',
                strong: true,
              },
              '. Zonder dat je het zelf hoeft te vertellen.',
            ],
          },
        ],
        cta: {
          label: 'En dat wil je',
          href: '/events/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: rhbfoto282,
          alt: 'Sfeerbeeld van een live optreden gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        triangles: true,
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: ['Wat levert een casevideo jou op?'],
            level: 2,
          },
          {
            ul: [
              [
                {
                  text: 'Jouw sterkste verkooptool',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een casevideo is het eerste wat je deelt als een potentiële klant vraagt wat je kunt. Hij laat zien hoe je werkt, wat je neerzet en wat dat oplevert. Concreet, authentiek en overtuigend.',
              ],
              [
                {
                  text: 'Bewijs dat zichzelf verkoopt',
                  strong: true,
                },
                {
                  br: true,
                },
                'Potentiële klanten willen weten of je kunt leveren wat je belooft. Een klant die dat in zijn eigen woorden bevestigt, is overtuigender dan welke referentielijst dan ook.',
              ],
              [
                {
                  text: 'Content die je jaar na jaar inzet',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een sterke casevideo gebruik je in je salesgesprekken, op je website, op LinkedIn en in je pitches. Eén productie, langdurige waarde.',
              ],
              [
                {
                  text: 'Twee verhalen in één productie',
                  strong: true,
                },
                {
                  br: true,
                },
                "Jouw expertise en het resultaat voor je klant komen samen in één video. Dat bespaart tijd, geld en moeite. En het resultaat is sterker dan twee losse video's ooit kunnen zijn.",
              ],
              [
                {
                  text: 'Een professionele uitstraling die vertrouwen wekt',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een casevideo laat zien dat jij serieus bezig bent met je vak. Dat je nadenkt over hoe je jezelf presenteert. En dat je klanten bereid zijn dat te bevestigen. Dat wekt vertrouwen bij mensen die jou nog niet kennen.',
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
        title: 'Hoe we jouw casevideo maken.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'Een casevideo vraagt om timing. Het beste moment om te filmen is op de avond van het event zelf, of direct erna. Terwijl de energie nog vers is. Terwijl je klant nog bruist van de avond. Dat is het moment waarop de meest ',
              {
                text: 'authentieke',
                strong: true,
              },
              ' en ',
              {
                text: 'overtuigende',
                strong: true,
              },
              ' ',
              {
                text: 'quotes',
                em: true,
              },
              ' ontstaan.',
            ],
          },
          {
            p: ['Dus plannen we dit vooraf. Altijd.'],
          },
          {
            p: [],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'strategie en briefing',
            text: [
              {
                p: [
                  'Wat wil je laten zien met de casevideo? Welke aspecten van het event en jouw aanpak zijn het meest relevant voor potentiële klanten? We stellen de vragen die bepalen hoe de video eruitziet en wat hij moet opleveren.',
                ],
              },
            ],
            image: {
              src: rhbfoto417,
              alt: 'DJ La Fuente met zangeres EliZe tijdens een optreden. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '02',
            title: 'productie op de eventdag',
            text: [
              {
                p: [
                  'We filmen jou en je klant op de avond zelf. In een rustig moment, maar met de energie van het event nog voelbaar. We stellen de vragen die de juiste antwoorden uitlokken. Geen script. Geen voorbereide teksten. Gewoon een authentiek gesprek dat we vastleggen.',
                ],
              },
            ],
            image: {
              src: mikeWaterschapHuisfeestje14,
              alt: 'Sfeerbeeld van een bedrijsfeest bij de Radstake in Varsseveld. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '03',
            title: 'post-productie en oplevering',
            text: [
              {
                p: [
                  'We combineren de interviews met de eventbeelden tot een casevideo die het verhaal vertelt dat jij wil vertellen. Strak gemonteerd, ',
                  {
                    text: 'on-brand',
                    em: true,
                  },
                  ' en direct inzetbaar voor sales en marketing.',
                ],
              },
            ],
            image: {
              src: mikeWaterschapHuisfeestje159,
              alt: 'Sfeerbeelden van een bedrijfsfeest gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
        ],
        cta: {
          label: 'Bel Bold',
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
            question: 'Wanneer is het beste moment om een casevideo op te nemen?',
            answer: [
              {
                p: [
                  'Op de avond van het event zelf, of direct erna. Terwijl de energie nog vers is en je klant nog bruist van de avond. Dat levert de meest authentieke en overtuigende quotes op. We plannen dit altijd vooraf zodat het naadloos past in de planning van de eventdag.',
                ],
              },
            ],
          },
          {
            question: 'Moeten wij of onze klant zich voorbereiden op de video?',
            answer: [
              {
                p: [
                  "Nee. We stellen de vragen die de juiste antwoorden uitlokken. Geen script, geen voorbereide teksten. Gewoon een authentiek gesprek dat we vastleggen. De beste casevideo's zijn nooit gespeeld.",
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie de casevideo combineren met een aftermovie of eventfotografie?',
            answer: [
              {
                p: [
                  'Ja, en dat is precies hoe we het het liefste doen. Als we toch al op locatie zijn voor de aftermovie of fotografie, nemen we de casevideo in dezelfde productie mee. Efficiënt voor iedereen en het resultaat is sterker doordat alle content dezelfde stijl en sfeer heeft.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang is een casevideo?',
            answer: [
              {
                p: [
                  'Gemiddeld tussen de twee en vier minuten. Lang genoeg om het verhaal te vertellen, kort genoeg om van begin tot eind geboeid te blijven. We bespreken vooraf wat de beste lengte is voor jouw specifieke situatie en doelgroep.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie de casevideo ook geschikt maken voor LinkedIn?',
            answer: [
              {
                p: [
                  'Ja. Naast de volledige casevideo leveren we ook een kortere cut op, geschikt voor LinkedIn en andere sociale kanalen. Zo heb je altijd de juiste versie voor elke context.',
                ],
              },
            ],
          },
          {
            question:
              "Wij willen meerdere casevideo's maken van verschillende events. Kunnen jullie een vaste partner zijn?",
            answer: [
              {
                p: [
                  'Ja, en dat is precies hoe we het liefste werken. Als vaste contentpartner leren we jouw werkwijze en klantenportefeuille steeds beter kennen. Dat maakt elke productie soepeler, sneller en sterker.',
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
          title: 'jouw volgende event is de kans om je sterkste\ncasevideo te maken.',
          gradient: 'orange',
          text: [
            {
              p: ['Vertel ons over het event. Dan vertellen wij wat we voor je kunnen doen.'],
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
