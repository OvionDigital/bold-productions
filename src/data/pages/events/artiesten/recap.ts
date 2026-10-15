/**
 * /artiesten/recap — teksten letterlijk van www.weareboldproductions.com/artiesten/recap.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import { trustedByTitle, artistLogos } from '../../../logos';
import { testimonialCarousel, pickTestimonials } from '../../../testimonials';
import heroFestivalOptreden from '../../../../assets/images/home/hero-festival-optreden.jpg';
import mikeDoorgedraaidLogo1216 from '../../../../assets/images/artiesten/recap/mike-doorgedraaid-logo-1-216.jpg';
import mikeDoorgedraaidLogo1230 from '../../../../assets/images/artiesten/mike-doorgedraaid-logo-1-230.jpg';
import boldProductions79 from '../../../../assets/images/artiesten/recap/bold-productions-79.jpg';
import boldProductions106 from '../../../../assets/images/artiesten/recap/bold-productions-106.jpg';
import mikeAftermovie from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'events/artiesten/recap',
  title: 'Recap',
  meta: {
    schema: { type: 'service', serviceType: 'Artist Recap Productie' },
    title: 'Recap laten maken? | Bold Productions',
    description:
      'Vang de energie van je show. Deel scherpe recaps terwijl het publiek nog bruist en overtuig boekers. Ontdek Bold.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Je show was gister.',
        titleAccent: 'vandaag al te zien.',
        eyebrow: 'of eerder. Kunnen we, dus doen we.',
        secondaryCta: {
          label: 'Zo snel zijn we',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: heroFestivalOptreden,
          alt: 'Actiefoto van een live-optreden tijdens een festival. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
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
        logos: artistLogos,
      },
    },
    {
      type: 'textMedia',
      props: {
        id: 'first-section',
        title: 'Wat is een recap?',
        gradient: 'green',
        body: [
          {
            p: [
              'Een recap is een korte, snelle video van jouw optreden. Geen uitgebreide registratie. Geen lange aftermovie. Maar een ',
              {
                text: 'scherpe samenvatting van de beste momenten',
                strong: true,
              },
              ' van jouw show. Klaar om dezelfde avond of de dag erna te delen.',
            ],
          },
          {
            p: ['En dat is precies waarom een recap zo krachtig is.'],
          },
          {
            p: [
              'Social media draait om ',
              {
                text: 'momentum',
                strong: true,
              },
              '. De avond na je optreden is het moment waarop je publiek nog bruist van de energie. Waarop fans willen delen wat ze hebben meegemaakt. Waarop mensen die er niet bij waren zien wat ze hebben gemist.',
            ],
          },
          {
            p: [
              'Een recap vangt dat momentum. Hij laat in ',
              {
                text: '30 tot 60 seconden',
                strong: true,
              },
              ' zien wat jouw show doet met een publiek. Niet vertellen hoe vet het was. Laten zien. En dat is precies het verschil tussen een post die wordt weggescrolld en een post die wordt gedeeld.',
            ],
          },
        ],
        media: {
          type: 'image',
          src: mikeDoorgedraaidLogo1216,
          alt: 'De MC van DJ Rejecta tijdens het Doorgedraaid Feestival. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        triangles: true,
      },
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: ['Wat levert een recap je op?'],
            level: 2,
          },
          {
            ul: [
              [
                {
                  text: 'Momentum vastleggen terwijl het er is',
                  strong: true,
                },
                {
                  br: true,
                },
                'De energie van een goed optreden duurt niet eeuwig. Een recap deelt die energie op het moment dat hij het sterkst is. Direct na je show, terwijl je publiek nog napraat.',
              ],
              [
                {
                  text: 'Content voor je socials zonder gedoe',
                  strong: true,
                },
                {
                  br: true,
                },
                'Na een show heb je weinig zin om uren te wachten op content. Een recap is snel gemaakt, snel opgeleverd en direct klaar voor gebruik. Zo heb je altijd iets sterks te posten na elk optreden.',
              ],
              [
                {
                  text: 'Boekers overtuigen met bewijs',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een boeker wil zien hoe jij een zaal pakt. Niet horen. Een recap van een sterk optreden is het bewijs dat je zoekt. Direct inzetbaar in je EPK en op je socials.',
              ],
              [
                {
                  text: 'Fans die terugkomen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Fans die zichzelf terugzien in een recap herbeleven het gevoel van de avond. Dat versterkt de band met jou als artiest en vergroot de kans dat ze de volgende show ook bijwonen.',
              ],
              [
                {
                  text: 'Een doorlopende stroom content',
                  strong: true,
                },
                {
                  br: true,
                },
                'Speel je regelmatig? Dan heb je na elk optreden nieuwe content. Geen droge periodes op je socials. Geen last-minute paniek voor iets om te posten. Gewoon een doorlopende stroom van beelden die laten zien wat jij doet.',
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
        title: 'Snel. Gericht. Klaar.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'Een recap vraagt om een andere aanpak dan een uitgebreide productie. ',
              {
                text: 'Snelheid',
                strong: true,
              },
              ' is alles. Maar snelheid zonder plan levert niks op.',
            ],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'voorbereiding',
            text: [
              {
                p: [
                  'We bespreken vooraf wat we nodig hebben. Welke momenten van je show zijn cruciaal? Wat moet er zeker in de recap zitten? Zo weten we op de avond zelf precies wat we doen.',
                ],
              },
            ],
            image: {
              src: mikeDoorgedraaidLogo1230,
              alt: 'DJ Rejecta tijdens zijn liveset op het Doorgedraaid Feestival. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '02',
            title: 'productie',
            text: [
              {
                p: [
                  'Op locatie schieten we gericht. We bewegen mee met jouw show en vangen de momenten die het verschil maken. De climax, de crowd, de energie. Snel en onopvallend.',
                ],
              },
            ],
            image: {
              src: boldProductions79,
              alt: 'Een gitarist omringd door vuur tijdens een live-optreden. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '03',
            title: 'montage en oplevering',
            text: [
              {
                p: [
                  'We monteren de recap zo snel mogelijk na je optreden. Klaar om dezelfde avond of de volgende ochtend te delen. Want een recap die drie dagen later online komt, heeft de helft van de impact.',
                ],
              },
            ],
            image: {
              src: boldProductions106,
              alt: 'Queen tribute band Queen Must Go On tijdens een live-optreden.',
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
      type: 'richText',
      props: {
        content: [
          {
            h: ['Zo kan dat eruit zien.'],
            level: 2,
          },
          {
            video: {
              id: '1081500198',
              title: 'Jorieke Sterken | recap Hrieps',
              ratio: 0.8,
            },
          },
          {
            video: {
              id: '1089087890',
              title: 'Proost! 2025 | recap UHOZ',
              ratio: 0.5634,
            },
          },
          {
            video: {
              id: '1213232618',
              title: 'Ian Zwaardski | Recap Matrixx at the Kade',
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
            question: 'Hoe snel wordt de recap opgeleverd?',
            answer: [
              {
                p: [
                  'We streven ernaar de recap dezelfde avond of de volgende ochtend op te leveren. Hoe sneller de recap online gaat, hoe groter de impact. We maken hierover vooraf duidelijke afspraken.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang is een recap?',
            answer: [
              {
                p: [
                  'Een recap is gemiddeld tussen de 30 en 60 seconden. Lang genoeg om de sfeer en energie van je show over te brengen. Kort genoeg om van begin tot eind geboeid te blijven.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ook recaps maken van meerdere shows achter elkaar?',
            answer: [
              {
                p: [
                  'Ja. Speel je meerdere shows in een korte periode? Dan kunnen we een recapstrategie opzetten waarbij je na elk optreden nieuwe content hebt. Zo blijf je doorlopend zichtbaar op social media.',
                ],
              },
            ],
          },
          {
            question: 'Maken jullie ook een langere versie naast de recap?',
            answer: [
              {
                p: [
                  'Ja. Naast de korte recap kunnen we ook een langere video of een volledige live registratie opleveren. We bespreken vooraf wat je nodig hebt zodat we alles in één productie meenemen.',
                ],
              },
            ],
          },
          {
            question:
              'Wij spelen op een event waar Bold Productions al aanwezig is. Kunnen jullie dan ook onze recap maken?',
            answer: [
              {
                p: [
                  'Ja, absoluut. Als we toch al op locatie zijn voor een event, kunnen we tegelijkertijd content maken voor jouw act. Efficiënt voor iedereen. We plannen dit vooraf zodat niets wordt gemist.',
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
          title: 'Jouw volgende show verdient een recap die blijft hangen.',
          gradient: 'orange',
          text: [
            {
              p: ['Vertel ons wanneer je speelt. Dan zorgen wij voor de rest.'],
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
