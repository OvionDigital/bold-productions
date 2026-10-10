/**
 * /artiesten/fotografie — teksten letterlijk van www.weareboldproductions.com/artiesten/fotografie.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../lib/sections';
import { trustedByTitle, artistLogos } from '../../../data/logos';
import { testimonialCarousel, pickTestimonials } from '../../../data/testimonials';
import boldProductions71 from '../../../assets/images/artiesten/fotografie/bold-productions-71.jpg';
import bold18 from '../../../assets/images/artiesten/fotografie/bold-18.jpg';
import boldProductions100 from '../../../assets/images/artiesten/fotografie/bold-productions-100.jpg';
import levilenting28 from '../../../assets/images/artiesten/fotografie/levilenting-28.jpg';
import boldProductionsPiratenCafe162 from '../../../assets/images/artiesten/fotografie/bold-productions-piraten-cafe-162.jpg';
import mikeAftermovie from '../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'artiesten/fotografie',
  title: 'Fotografie',
  meta: {
    schema: { type: 'service', serviceType: 'Artist Photography' },
    title: 'Band- en artiestenfotografie | Bold Productions',
    description:
      'Vang de vibe van je performance. Van dikke live-shots tot high-end portretten voor je EPK en socials. Professionele bandfotografie die boekers overtuigt.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Je sound is uniek.',
        titleAccent: "Je foto's nog niet.",
        eyebrow: 'Dat gaan we veranderen.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/offerte-aanvragen',
        },
        secondaryCta: {
          label: "Let's go",
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: boldProductions71,
          alt: 'DJ Afrojack tijdens een liveset vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
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
        title: 'Wat is artiestenfotografie?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Een boeker opent je EPK. Hij scrolt door je socials. Hij bezoekt je website. En in die eerste paar seconden besluit hij of hij verder kijkt of niet.',
            ],
          },
          {
            p: ['Wat hij ziet, bepaalt alles.'],
          },
          {
            p: [
              "Artiestenfotografie is meer dan een portret of wat livefoto's. Het is de ",
              {
                text: 'visuele vertaling',
                strong: true,
              },
              ' van wie jij bent als artiest. Je energie op het podium. Je uitstraling in de studio. Het gevoel dat mensen krijgen als ze jou voor het eerst zien.',
            ],
          },
          {
            p: ['En dat gevoel moet kloppen. Met je sound. Met je stijl. Met het podium waar je naartoe wil.'],
          },
          {
            p: ['Wij maken drie soorten fotografie voor artiesten:'],
          },
          {
            p: [
              {
                text: 'Live tijdens optredens',
                strong: true,
              },
              ', voor die ruwe, authentieke energie die alleen bestaat als je écht speelt. ',
            ],
          },
          {
            p: [
              {
                text: 'Studiofotografie',
                strong: true,
              },
              ', voor de controle en de scherpte die je wil in je perskit en op je website. ',
            ],
          },
          {
            p: [
              'En ',
              {
                text: 'perskit fotografie',
                strong: true,
              },
              ', het professionele visitekaartje dat boekers en media gebruiken om jou te presenteren. ',
            ],
          },
          {
            p: ['Doen we allemaal voor je bij Bold.'],
          },
        ],
        cta: {
          label: 'Dat wil ik',
          href: '/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: bold18,
          alt: 'Foto van een gitarist tijdens een live-optreden. Fotografie door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        triangles: true,
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: ['Wat levert onze artiestenfotografie je op?'],
            level: 2,
          },
          {
            ul: [
              [
                {
                  text: 'Een EPK die boekers overtuigt',
                  strong: true,
                },
                {
                  br: true,
                },
                "Boekers en programmeurs zien dagelijks tientallen artiesten voorbijkomen. Een sterke perskit met professionele foto's zorgt dat jij blijft hangen. Niet omdat je het hardst schreeuwt, maar omdat jouw beeld klopt bij jouw geluid.",
              ],
              [
                {
                  text: 'Onderscheid in een volle markt',
                  strong: true,
                },
                {
                  br: true,
                },
                'Veel artiesten hebben vergelijkbaar talent. Professionele artiestenfotografie is vaak het zichtbare verschil tussen een act die geboekt wordt en een act die dat niet wordt.',
              ],
              [
                {
                  text: 'Content voor al je kanalen',
                  strong: true,
                },
                {
                  br: true,
                },
                "Livefoto's voor je socials. Studiofoto's voor je website. Persfoto's voor media en festivals. Eén productie levert je een complete set op die je het hele jaar door inzet.",
              ],
              [
                {
                  text: 'Een fanbase die groeit',
                  strong: true,
                },
                {
                  br: true,
                },
                "Fans delen wat hen raakt. Sterke livefoto's die de energie van jouw show vangen, trekken nieuwe fans aan die willen meemaken wat ze zien.",
              ],
              [
                {
                  text: 'Professionele uitstraling richting media',
                  strong: true,
                },
                {
                  br: true,
                },
                "Festivals, tijdschriften en blogs hebben foto's nodig als ze over jou schrijven. Professionele perskit fotografie zorgt dat jij altijd klaar bent voor die kans.",
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
        title: 'Eerst leren kennen. Dan fotograferen.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'We volgen nooit een vast format. Want jij bent ',
              {
                text: 'geen standaard artiest',
                strong: true,
              },
              '. Dus beginnen we altijd met vragen. ',
            ],
          },
          {
            p: [
              'Wat is je sound? Wat is je uitstraling? Voor welke boekers en podia wil je zichtbaar zijn? Wat moet iemand voelen als hij jouw foto ziet? Pas als dat helder is, maken we een plan.',
            ],
          },
          {
            p: [],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Live fotografie',
            text: [
              {
                p: [
                  'We schieten tijdens jouw optreden. Op het podium, in de crowd, achter de schermen. We vangen de momenten die laten zien hoe jij een zaal pakt. Onopvallend, snel en met oog voor het juiste moment.',
                ],
              },
            ],
            image: {
              src: boldProductions100,
              alt: 'Een pianist tijdens een live-optreden, vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '02',
            title: 'Studiofotografie en perskit',
            text: [
              {
                p: [
                  "In een gecontroleerde omgeving werken we aan beelden die jouw uitstraling perfect neerzetten. Scherp, stijlvol en on-brand. Ideaal voor je website, je EPK en promomateriaal. We maken een complete set persfoto's die direct inzetbaar zijn voor festivals, media en boekers. Professioneel, consistent en klaar voor gebruik in elke context.",
                ],
              },
            ],
            image: {
              src: levilenting28,
              alt: 'Zanger Roy van Nuland vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '03',
            title: 'Oplevering',
            text: [
              {
                p: [
                  "We leveren een selectie van bewerkte, direct inzetbare foto's op in de afgesproken termijn. In meerdere formaten, geschikt voor zowel digitaal gebruik als drukwerk.",
                ],
              },
            ],
            image: {
              src: boldProductionsPiratenCafe162,
              alt: 'Sfeerbeeld tijdens een festival vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
        ],
        cta: {
          label: 'Boek Bold',
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
        caseSlug: 'why-go-home',
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
            question: 'Wat is het verschil tussen livefotografie en studiofotografie?',
            answer: [
              {
                p: [
                  'Livefotografie vangt de ruwe, authentieke energie van jouw optreden. Onvoorspelbaar, dynamisch en vol emotie. Studiofotografie geeft je controle over belichting, achtergrond en uitstraling. Beide hebben een ander doel en vullen elkaar perfect aan. Voor een complete perskit adviseren we altijd een combinatie van beide.',
                ],
              },
            ],
          },
          {
            question: 'Wat moet er in een goede perskit zitten?',
            answer: [
              {
                p: [
                  "Een sterke perskit bevat minimaal een set professionele persfoto's in hoge resolutie, een korte biografie en contactgegevens. We fotograferen de beelden die je perskit compleet maken en adviseren je over wat je verder nodig hebt.",
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie zowel foto als video verzorgen op ons optreden?',
            answer: [
              {
                p: [
                  'Ja. We werken regelmatig met een gecombineerde aanpak waarbij foto en video tegelijkertijd worden geproduceerd. Zo hoef je niet met meerdere partijen te schakelen en klopt de stijl van alle content.',
                ],
              },
            ],
          },
          {
            question: "Hoe snel worden de foto's opgeleverd?",
            answer: [
              {
                p: [
                  'We leveren een eerste selectie zo snel mogelijk na de shoot op. De volledige bewerkte set volgt binnen de afgesproken termijn. Heb je snel iets nodig voor een aankondiging of social post? Dan regelen we dat.',
                ],
              },
            ],
          },
          {
            question: 'Wij zijn een nieuwe band zonder veel promomateriaal. Waar beginnen we',
            answer: [
              {
                p: [
                  "Bij een kennismakingsgesprek. We bespreken wie jullie zijn, wat jullie willen uitstralen en welke foto's jullie het meest nodig hebben. Op basis daarvan maken we een plan dat past bij jullie fase en budget.",
                ],
              },
            ],
          },
          {
            question: "Zijn de foto's ook bruikbaar voor festivals en media die hoge resolutie eisen?",
            answer: [
              {
                p: [
                  'Ja. We leveren altijd bestanden op in hoge resolutie, geschikt voor zowel digitaal gebruik als drukwerk. Klaar voor elke context waarin je zichtbaar wil zijn.',
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
          title: "Klaar voor foto's die jouw carrière verder brengen?",
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
