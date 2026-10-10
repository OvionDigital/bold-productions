/**
 * /artiesten — teksten letterlijk van www.weareboldproductions.com/artiesten.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../lib/sections';
import { trustedByTitle, artistLogos } from '../../data/logos';
import { testimonialCarousel, pickTestimonials } from '../../data/testimonials';
import mikeDoorgedraaidLogo1230 from '../../assets/images/artiesten/mike-doorgedraaid-logo-1-230.jpg';
import dennisDrumd from '../../assets/images/artiesten/dennis-drumd.jpg';
import spotPleinpopAlphen00145503Still033 from '../../assets/images/aftermovie-laten-maken/spot-pleinpop-alphen-00-14-55-03-still033.jpg';
import bold92 from '../../assets/images/aftermovie-laten-maken/bold-92.jpg';
import mikeDoorgedraaidLogo1217 from '../../assets/images/artiesten/mike-doorgedraaid-logo-1-217.jpg';
import bioscoop from '../../assets/images/events/bioscoop.jpg';
import mikeDorpsfeestwehlzaterdag258 from '../../assets/images/artiesten/mike-dorpsfeestwehlzaterdag-258.jpg';
import mikeDorpsfeestwehlzaterdag224 from '../../assets/images/artiesten/mike-dorpsfeestwehlzaterdag-224.jpg';
import boldProductions73 from '../../assets/images/artiesten/bold-productions-73.jpg';
import mikeDorpsfeestwehlvrijdag28 from '../../assets/images/artiesten/mike-dorpsfeestwehlvrijdag-28.jpg';
import mikeDoorgedraaidLogo1134 from '../../assets/images/artiesten/mike-doorgedraaid-logo-1-134.jpg';
import mikeAftermovie from '../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'artiesten',
  title: 'Artiesten',
  meta: {
    title: 'Band & artiestenpromo laten maken? | Bold Productions',
    description:
      'Overtuig boekers en vergroot je fanbase. De filmende roadie voor vette bandpromo’s, fotografie en social content. Ontdek Bold.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'VIA VETTE BEELDEN NAAR',
        titleAccent: 'MEER BOEKINGEN',
        eyebrow: 'BOLD IS JE FILMENDE ROADIE',
        primaryCta: {
          label: 'Boek Bold',
          href: '/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Hoe werkt dat?',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: mikeDoorgedraaidLogo1230,
          alt: 'DJ Rejecta tijdens zijn liveset op het Doorgedraaid Feestival. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        video: {
          id: '1053028749',
          hash: '2fa6fd18b8',
          title: 'Sfeervideo Artiesten – Bold Productions',
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
        title: 'Jouw act verdient een podium',
        gradient: 'yellow',
        body: [
          {
            p: ['Maar niet alleen als planken onder je voeten. Je verdient een podium dat de zaal of tent overstijgt. '],
          },
          {
            p: [
              'Een plek waar de ',
              {
                text: 'energie van je act',
                strong: true,
              },
              ' blijft echoën. Op schermen, feeds en tijdlijnen. Op trommel- en netvliezen. In harten en hoofden.',
            ],
          },
          {
            p: ['Dat podium bouwen wij voor je. Want dan..'],
          },
          {
            ul: [
              ['Overtuig je programmeurs en boekers.'],
              ['Onderscheid je je in een concurrerende markt. '],
              ['Versterk je de binding met je fanbase.'],
            ],
          },
          {
            p: [
              'Bold Productions is je visuele ',
              {
                text: 'contentpartner',
                strong: true,
              },
              '. Je ',
              {
                text: 'bandfotograaf',
                strong: true,
              },
              '. Je ',
              {
                text: 'filmende roadie',
                strong: true,
              },
              '.',
            ],
          },
        ],
        cta: {
          label: 'Ik wil dat',
          href: '/offerte-aanvragen',
          accent: 'yellow',
        },
        media: {
          type: 'image',
          src: dennisDrumd,
          alt: 'Een drummer tijdens een live-optreden. Vastgelegd door Bold Productions contentspecialist voor Events & Artiesten.',
        },
        reverse: true,
        triangles: true,
        spacing: 'section',
        animate: false,
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Jouw signature sound\nin beeld',
        gradient: 'yellow',
        intro: [
          {
            p: [
              {
                text: 'Events en festivals',
                strong: true,
              },
              ' zijn onze wereld. We hadden onze camera’s overal op kunnen richten, maar we kozen voor deze wereld. ',
            ],
          },
          {
            p: ['Want in deze cultuur voelen we ons thuis. We volgen nooit een vast format. We willen je eerst leren kennen. '],
          },
          {
            p: [
              'Daarna maken we een contentplan op maat voor je. En dan gaan we los. Dus eerst praten, dan plannen en tot slot produceren.',
            ],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Praten',
            text: [
              {
                p: [
                  'Wat wil je bereiken met je band of act? Wat móéten mensen zien? Welke ',
                  {
                    text: 'vibe',
                    em: true,
                  },
                  ' probeer je te vangen? Tijdens onze kennismaking stellen we nog veel meer vragen.',
                ],
              },
            ],
            image: {
              src: spotPleinpopAlphen00145503Still033,
              alt: 'PROOST! BAND op de foto door Bold Productions, contentspecialist voor Events & Artiesten.',
            },
          },
          {
            number: '02',
            title: 'Plannen',
            text: [
              {
                p: [
                  'Je wil doorlopend geboekt worden en op de juiste podia terechtkomen. Als we een contentplan voor je maken, houden we dát in ons achterhoofd.',
                ],
              },
            ],
            image: {
              src: bold92,
              alt: 'Team Bold Productions achter de schermen tijdens de opname van een event.',
            },
          },
          {
            number: '03',
            title: 'produceren',
            text: [
              {
                p: [
                  'Op, voor en achter het podium zijn we je vertrouwde gezicht (ondanks dat-ie meestal wordt geblokkeerd door een camera). Als contentpartner schieten we onvermoeibaar volgens het gemaakte plan.',
                ],
              },
            ],
            image: {
              src: mikeDoorgedraaidLogo1217,
              alt: 'Sfeerbeeld van een DJ tijdens het Doorgedraaid Feestival. Vastgelegd door Bold Productions contentspecialist voor Events & Artiesten.',
            },
          },
        ],
        cta: {
          label: 'Bel Bold',
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
        caseSlug: 'proost-band',
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
      type: 'imageFeature',
      props: {
        id: 'cinema',
        title: 'Band in bios',
        gradient: 'green',
        text: 'Soms maken we iets waar je even goed voor wilt gaan zitten. Een bandpromo bijvoorbeeld.\nDat komt goed uit, want we hebben een eigen bioscoop, speciaal voor de première van jullie promo.',
        image: {
          src: bioscoop,
          alt: 'Klanten tijdens een videopresentatie in de mini-bioscoop van Bold Productions.',
        },
      },
    },
    {
      type: 'serviceTiles',
      props: {
        title: 'Wat doet bold voor je act?',
        gradient: 'yellow',
        text: [
          {
            p: [
              'We zorgen dat je ',
              {
                text: 'constant sterk promotiemateriaal',
                strong: true,
              },
              ' hebt. Voor je EPK. Je socials. Je website. Waar je ook maar zichtbaar wilt zijn. Dat kan op verschillende manieren. Hieronder zie je een aantal van die manieren. ',
            ],
          },
        ],
        items: [
          {
            label: 'Bandpromo',
            href: '/artiesten/bandpromo',
            image: {
              src: mikeDorpsfeestwehlzaterdag258,
              alt: 'Foto van een gitarist tijdens een live-optreden.',
            },
          },
          {
            label: 'Artiestenpromo',
            href: '/artiesten/artiestenpromo',
            image: {
              src: mikeDorpsfeestwehlzaterdag224,
              alt: 'Zanger Xander de Buisonjé tijdens een tentfeest. Foto: Bold Productions contentspecialist voor Events & Artiesten.',
            },
          },
          {
            label: 'social-content',
            href: '/artiesten/social-content',
            image: {
              src: boldProductions73,
              alt: 'Foto van een zangeres tijdens een live-optreden. Vastgelegd door Bold Productions contentspecialist voor Events & Artiesten.',
            },
          },
          {
            label: 'Recap',
            href: '/artiesten/recap',
            image: {
              src: mikeDorpsfeestwehlvrijdag28,
              alt: 'DJ Willem de Wijs tijdens een live-optreden. Foto: Bold Productions contentspecialist voor Events & Artiesten.',
            },
          },
          {
            label: 'Fotografie',
            href: '/artiesten/fotografie',
            image: {
              src: mikeDoorgedraaidLogo1134,
              alt: 'Sfeerbeeld tijdens het Doorgedraaid Feestival. Foto: Bold Productions contentspecialist voor Events & Artiesten.',
            },
          },
        ],
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        gradient: 'green',
        items: [
          {
            question: 'Wat is het verschil tussen een bandpromo en een artiestenpromo?',
            answer: [
              {
                p: [
                  'Een bandpromo draait om de groepsdynamiek en de gezamenlijke energie van een band. De chemie, de live sound, het geheel. Een artiestenpromo is meer gericht op jou als individu. Je persoonlijke uitstraling, je verhaal, jouw merk. Twijfel je welke het beste bij jou past? We bespreken het in ons eerste gesprek.',
                ],
              },
            ],
          },
          {
            question: 'Wat heb ik nodig om een goede bandpromo of artiestenpromo te laten maken?',
            answer: [
              {
                p: [
                  'Niet veel meer dan een helder beeld van wie je bent en wat je wil bereiken. Geen duur podium, geen grote productie. We denken mee over het concept en de locatie. Of we live registreren tijdens een optreden, of apart opnames plannen — dat bepalen we samen op basis van wat het beste bij jou past.',
                ],
              },
            ],
          },
          {
            question: 'Hoe helpt een promo mij aan meer boekingen?',
            answer: [
              {
                p: [
                  'Boekers en programmeurs beslissen in seconden. Een sterke promo geeft hen in één oogopslag wat ze nodig hebben om een beslissing te maken. Hij laat niet alleen zien wat je doet, maar voelen hoe je bent op het podium. Dat is het verschil tussen een act die geboekt wordt en een act die dat niet wordt.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ook content maken voor mijn socials en EPK?',
            answer: [
              {
                p: [
                  'Ja. Naast de hoofdpromo leveren we ook kortere cuts op voor Instagram en TikTok. En de promo is direct inzetbaar in je Electronic Press Kit. Eén productie, meerdere toepassingen.',
                ],
              },
            ],
          },
          {
            question: 'Maken jullie ook promos voor artiesten die net beginnen?',
            answer: [
              {
                p: [
                  'Ja. We werken voor artiesten in verschillende fases van hun carrière. Of je nu net begint of al jaren op het podium staat, een sterke promo is altijd een investering die je verder brengt. In ons eerste gesprek kijken we eerlijk naar wat mogelijk is binnen jouw situatie.',
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
          title: 'Laat zien wat je in huis hebt',
          gradient: 'orange',
          text: [
            {
              p: [
                'Als mensen veel keus hebben, wil je een goede eerste indruk maken. Daarna wil je op de radar blijven, bij boekers, programmeurs en bij jouw publiek. ',
                {
                  br: true,
                },
                'Helpen wij je mee, maar laten we eerst eens praten. ',
              ],
            },
            {
              p: [],
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
