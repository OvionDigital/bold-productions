/**
 * /business/fotografie — teksten letterlijk van boldproductions.webflow.io/business/fotografie (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../lib/sections';
import { trustedByTitle, clientLogos } from '../../../data/logos';
import { testimonialCarousel, pickTestimonials } from '../../../data/testimonials';
import crewDuoImg from '../../../assets/images/over/rhbfoto-8.jpg';
import ralphImg from '../../../assets/images/team/ralph-buisman.jpg';
import netwerkenImg from '../../../assets/images/cases/superminds/240920182309-esprit-ict-jitskeseckel.jpg';
import portretVrouwImg from '../../../assets/images/cases/doetinchemse-kade-feesten/spot-seq-00-40-03-01-still001.jpg';
import gerechtImg from '../../../assets/images/zakelijke-events/promovideo/rhbfoto-135.jpg';
import bouwImg from '../../../assets/images/zakelijke-events/fotografie/mike-waterschap-huisfeestje-38.jpg';
import bioscoopImg from '../../../assets/images/events/bioscoop.jpg';
import formImg from '../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/fotografie',
  title: 'Fotografie',
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Zakelijke Fotografie',
    },
    title: 'Zakelijke fotografie | Een fotograaf voor je hele bedrijf | Bold Productions',
    description: 'Bedrijfsfotografie, productfotografie, portretten en projectfotografie. Bold legt vast wie jullie zijn en wat jullie maken, in één stijl.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Eén fotograaf voor',
        titleAccent: 'alles wat je nodig hebt.',
        eyebrow: 'Mensen, werkvloer, product en project.',
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
          src: crewDuoImg,
          alt: 'Fotograaf en videograaf van Bold Productions op weg naar een opname.',
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
        logos: clientLogos,
      },
    },
    {
      type: 'textMedia',
      props: {
        id: 'first-section',
        title: 'Je hebt geen fotoshoot nodig. Je hebt beeld nodig.',
        gradient: 'orange',
        body: [
          {
            p: [
              'Dat klinkt als hetzelfde, maar dat is het niet.',
            ],
          },
          {
            p: [
              'Een fotoshoot is een dag in je agenda. Beeld is wat er daarna op je website staat, in je offertes, op LinkedIn, in je vacatures en op je beursstand. Als dat niet klopt, merk je dat overal een beetje.',
            ],
          },
          {
            p: [
              'Het probleem bij de meeste bedrijven is niet dat er geen foto’s zijn. Het is dat ze uit vier verschillende jaren komen, in drie verschillende stijlen, met hier en daar een plaatje dat is gekocht bij een stockbureau. En dat zie je.',
            ],
          },
          {
            p: [
              'Wij fotograferen alles wat je nodig hebt, in één stijl, zodat het eruitziet alsof het bij elkaar hoort.',
            ],
          },
        ],
        cta: {
          label: 'Maak het waar(d)',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: ralphImg,
          alt: 'Ralph Buisman, fotograaf voor Bold Productions.',
        },
        triangles: true,
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'We schieten geen\nlosse flodders',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'We schieten gericht wie jullie zijn en wat jullie maken.',
            ],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Bedrijfsfotografie',
            text: [
              {
                p: [
                  'Je mensen aan het werk, je pand, je proces, de sfeer op de vloer. Geen geposeerde handdrukken, maar beeld waarin het eruitziet alsof er gewerkt wordt.',
                ],
              },
            ],
            image: {
              src: netwerkenImg,
              alt: 'Collega’s in gesprek tijdens een bedrijfsevent van Esprit ICT.',
            },
            cta: {
              label: 'Meer over bedrijfsfotografie',
              href: '/business/fotografie/bedrijfsfotografie',
            },
          },
          {
            number: '02',
            title: 'Portret- en teamfoto’s',
            text: [
              {
                p: [
                  'De foto die aan elk gesprek voorafgaat. Op je website, op LinkedIn, in offertes. Tien minuten per persoon, en dan ben je er weer jaren vanaf.',
                ],
              },
            ],
            image: {
              src: portretVrouwImg,
              alt: 'Lachende vrouw aan het water, still uit een video van Bold Productions.',
            },
            cta: {
              label: 'Meer over zakelijke portretten',
              href: '/business/fotografie/zakelijk-portret',
            },
          },
          {
            number: '03',
            title: 'Productfotografie',
            text: [
              {
                p: [
                  'Packshots die voldoen aan de eisen van je webshop of marketplace, plus beeld dat mensen doet kopen. Je hebt ze allebei nodig.',
                ],
              },
            ],
            image: {
              src: gerechtImg,
              alt: 'Opgemaakt gerecht op een bord, gefotografeerd door Bold Productions.',
            },
            cta: {
              label: 'Meer over productfotografie',
              href: '/business/fotografie/productfotografie',
            },
          },
          {
            number: '04',
            title: 'Projectfotografie',
            text: [
              {
                p: [
                  'Je volgende opdracht verkoop je met je vorige. Opgeleverde keukens, badkamers, woningen, tuinen of bouwprojecten, vastgelegd op het moment dat het nog op zijn mooist is.',
                ],
              },
            ],
            image: {
              src: bouwImg,
              alt: 'Bezoekers bekijken een bouwproject van Waterschap Rijn en IJssel.',
            },
            cta: {
              label: 'Meer over projectfotografie',
              href: '/business/fotografie/projectfotografie',
            },
          },
        ],
        cta: {
          label: 'Let\'s talk strategy',
          href: '/business/offerte-aanvragen',
          accent: 'yellow',
        },
      },
    },
    {
      type: 'caseSpotlight',
      props: {
        title: 'Uitgelichte case',
        gradient: 'green',
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
      type: 'imageFeature',
      props: {
        title: 'Meelopen in plaats van (te veel)\nregisseren.',
        text: 'De meeste zakelijke fotografie gaat mis op hetzelfde punt: er wordt te veel geregisseerd. Vier collega’s rond een laptop die ergens naar wijzen. Twee mensen die elkaar een hand schudden voor een glazen wand. Iemand die veel te hard lacht om iets op een scherm. Niemand gelooft het, en beeld dat nep voelt maakt alles eromheen ook ongeloofwaardig.\nWij werken andersom. We lopen mee terwijl het werk doorgaat, we vragen niemand om te poseren en we nemen de tijd die nodig is. Na een kwartier is iedereen ons meestal vergeten, en dan beginnen de goede foto’s. Dat klinkt passief. Het is het tegenovergestelde: je moet precies weten waar je moet staan en wanneer je af moet drukken.',
        image: {
          src: bioscoopImg,
          alt: 'Klanten tijdens een videopresentatie in de mini-bioscoop van Bold Productions.',
        },
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        items: [
          {
            question: 'Kunnen jullie alles in één dag doen?',
            answer: [
              {
                p: [
                  'Portretten, teamfoto’s en bedrijfsfotografie meestal wel, en dat is ook de slimste manier. Productfotografie en projectfotografie plannen we vaak apart, omdat die op een andere locatie plaatsvinden. We stemmen het af op wat je nodig hebt.',
                ],
              },
            ],
          },
          {
            question: 'Wat kost zakelijke fotografie?',
            answer: [
              {
                p: [
                  'Dat verschilt per dienst. We werken doorgaans per dagdeel of dag. Combineer je meerdere dingen op één dag, dan ligt de prijs per onderdeel lager. Vraag een offerte aan voor een onderbouwd bedrag.',
                ],
              },
            ],
          },
          {
            question: 'Wat is het verschil tussen een promovideo, een eventvideo en een aftermovie?',
            answer: [
              {
                p: [
                  'Een promovideo maak je vóór je event om FOMO te creëren en tickets te verkopen. Een eventvideo leg je vast tijdens het event zelf — soms same-day, om live FOMO te creëren. Een aftermovie is een bewerkter stuk content dat het gevoel van je event samenvat en naspeelt, en de basis vormt voor promotie van je volgende editie.',
                ],
              },
            ],
          },
          {
            question: 'Hoe zorgen jullie dat alles dezelfde stijl heeft?',
            answer: [
              {
                p: [
                  'Door het vooraf vast te leggen en het liefst door het in dezelfde dagen te schieten. Komen er later nieuwe collega’s of nieuwe producten bij, dan gebruiken we dezelfde opzet, belichting en achtergrond zodat het naadloos aansluit.',
                ],
              },
            ],
          },
          {
            question: 'Onze medewerkers vinden het ongemakkelijk om gefotografeerd te worden.',
            answer: [
              {
                p: [
                  'Heel normaal, en daarom regisseren we niet te veel. We beginnen met een praatje in plaats van met de camera. In de praktijk is dat binnen een paar minuten opgelost.',
                ],
              },
            ],
          },
          {
            question: 'Mogen we de foto’s overal gebruiken?',
            answer: [
              {
                p: [
                  'Wat je waar en hoe lang mag inzetten, staat vooraf in de offerte. Deel je beelden met leveranciers, partners of een opdrachtgever, zeg dat dan meteen, dan nemen we het daarin mee.',
                ],
              },
            ],
          },
          {
            question: 'Hoe snel krijgen we de foto’s?',
            answer: [
              {
                p: [
                  'Een eerste selectie binnen enkele dagen, de volledige bewerkte set binnen de afgesproken termijn. Heb je snel iets nodig voor een persbericht of een post, zeg dat vooraf.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie foto en video tegelijk doen?',
            answer: [
              {
                p: [
                  'Ja, en dat is vaak de slimste keuze. De voorbereiding is hetzelfde en je mensen zijn er toch. Twee losse shoots kosten twee keer zoveel tijd van je team en zien er aan het eind niet uit alsof ze bij elkaar horen.',
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
          title: 'Gauw even praten?',
          text: [
            {
              p: [
                'We helpen je graag van stockfoto\'s af.',
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
