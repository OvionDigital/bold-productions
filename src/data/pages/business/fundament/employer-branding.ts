/**
 * /business/fundament/employer-branding — teksten letterlijk van boldproductions.webflow.io/business/fundament/employer-branding (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import collegasImg from '../../../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-88.jpg';
import netwerkenImg from '../../../../assets/images/cases/superminds/240920182309-esprit-ict-jitskeseckel.jpg';
import publiekImg from '../../../../assets/images/zakelijke-events/mike-skndag-65.jpg';
import teamImg from '../../../../assets/images/over/bold-85.jpg';
import cameramanImg from '../../../../assets/images/events/tijdlijn-productie.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/fundament/employer-branding',
  title: 'Employer branding',
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Employer Branding Video Productie',
    },
    title: 'Employer branding video laten maken | Werken bij film | Bold Productions',
    description: 'Een employer branding film die de juiste mensen aantrekt en de verkeerde afschrikt. Bold maakt werken-bij video’s die laten zien hoe het echt is.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Een employer branding film',
        titleAccent: 'jaagt ook mensen weg.',
        eyebrow: 'Dat is geen bijwerking. Dat is het punt.',
        primaryCta: {
          label: 'Daag ons uit',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Ontdek hoe',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: collegasImg,
          alt: 'Lachende collega’s tijdens het personeelsfeest van Waterschap Rijn en IJssel.',
        },
        accent: 'yellow',
      },
    },
    {
      type: 'breadcrumbs',
    },
    {
      type: 'textMedia',
      props: {
        id: 'first-section',
        title: 'Je wilt een employer branding video laten maken.\nIs dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Soms is de echte vraag namelijk een andere. “We krijgen te weinig reacties” is iets anders dan “we krijgen de verkeerde reacties”. En “mensen vertrekken binnen een jaar” is weer iets anders.',
            ],
          },
          {
            p: [
              'Alle drie zijn ze op te lossen met beeld. Maar niet met hetzelfde beeld.',
            ],
          },
        ],
        cta: {
          label: 'Vertel me meer',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: netwerkenImg,
          alt: 'Collega’s in gesprek tijdens een bedrijfsevent van Esprit ICT.',
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
              'Wat een employer branding film is',
            ],
            level: 3,
          },
          {
            p: [
              'Een employer branding film laat zien hoe het is om bij jullie te werken. Niet wat er in de vacature staat, maar wat iemand voelt op zijn eerste maandagochtend.',
            ],
          },
          {
            p: [
              'Dat is iets anders dan een wervingscampagne voor drie openstaande functies. Die heeft een begin- en einddatum. Een employer branding film is fundament: hij staat jaren op je werken-bij pagina, gaat mee in elke vacature, elke beurs en elk gesprek met een recruiter.',
            ],
          },
          {
            h: [
              'Waarom afschrikken goed is',
            ],
            level: 4,
          },
          {
            p: [
              'Elke werkgever belooft ongeveer hetzelfde. Een informele sfeer. Doorgroeimogelijkheden. Collega’s die meer voelen als vrienden. Vrijdagmiddagborrel.',
            ],
          },
          {
            p: [
              'Daar selecteert niemand op, want iedereen zegt het. Het gevolg: je krijgt reacties van mensen die niet weten waar ze aan beginnen, en die er na acht maanden achter komen dat het toch niet past.',
            ],
          },
          {
            p: [
              'Een eerlijke film doet het omgekeerde. Die laat ook zien wat zwaar is, wat je moet kunnen hebben en voor wie het niets is. Dat klinkt riskant. In de praktijk levert het minder sollicitaties op, en betere. Dat is wat je wil, want elk verkeerd gesprek kost jouw team kostbare tijd.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert een employer branding film laten maken op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Sollicitanten die weten waar ze aan beginnen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Mensen reageren op wat ze gezien hebben, niet op wat ze hopen. Dat scheelt gesprekken die nergens toe leiden en vertrek binnen het eerste jaar.',
              ],
            ],
            spaced: true,
          },
          {
            ul: [
              [
                {
                  text: 'Opvallen in een markt waar iedereen hetzelfde belooft',
                  strong: true,
                },
                {
                  br: true,
                },
                'De tekst van je vacature lijkt op die van je concurrent. De film hoeft dat niet te doen.',
              ],
              [
                {
                  text: 'Eén productie, overal inzetbaar',
                  strong: true,
                },
                {
                  br: true,
                },
                'Werken-bij pagina, LinkedIn, vacaturesites, beurzen, open dagen, onboarding. Je maakt hem één keer en gebruikt hem jaren.',
              ],
              [
                {
                  text: 'Je eigen mensen als beste ambassadeurs',
                  strong: true,
                },
                {
                  br: true,
                },
                'Collega’s die vertellen hoe het is, delen de film ook. Dat bereik koop je niet.',
              ],
              [
                {
                  text: 'Minder afhankelijk van bureaus',
                  strong: true,
                },
                {
                  br: true,
                },
                'Elke kandidaat die rechtstreeks bij je binnenkomt, is een bureau dat je niet hoeft te betalen. Eén aanname terugverdienen is vaak al genoeg.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Niet opschrijven wat je wil horen. Ophalen wat er leeft.',
            text: [
              {
                p: [
                  'Het grootste risico bij employer branding is dat HR en directie de film maken, en dat de werkvloer hem niet herkent. Dan werkt hij averechts, want je eigen mensen delen hem niet en nieuwe mensen voelen binnen een week dat het niet klopt.',
                ],
              },
              {
                p: [
                  'Dus halen we het verhaal op waar het zit.',
                ],
              },
            ],
            image: {
              src: publiekImg,
              alt: 'Publiek luistert naar een presentatie tijdens een zakelijk event.',
            },
          },
          {
            number: '02',
            title: 'Gesprekken vooraf',
            text: [
              {
                p: [
                  'We praten met HR, maar ook met mensen op de vloer. Waarom zijn ze gebleven? Wat zeiden ze tegen hun vrienden toen ze hier begonnen? Wat had iemand van tevoren moeten weten? Daar komt het echte materiaal vandaan.',
                ],
              },
            ],
            image: {
              src: teamImg,
              alt: 'Mike Ampting, eigenaar van Bold Productions, met zijn team.',
            },
          },
          {
            number: '03',
            title: 'creatief concept',
            text: [
              {
                p: [
                  'Geen rondleiding door het pand met vrolijke muziek. We zoeken een invalshoek die past bij hoe het bij jullie echt is, en die je concurrent niet gebruikt.',
                ],
              },
            ],
            image: {
              src: cameramanImg,
              alt: 'Cameraman van Bold Productions tijdens een opname.',
            },
          },
        ],
        cta: {
          label: 'Dat wil ik',
          href: '/business/offerte-aanvragen',
          accent: 'yellow',
        },
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        items: [
          {
            question: 'Wat is het verschil met een wervingsvideo voor één vacature?',
            answer: [
              {
                p: [
                  'Een wervingsvideo is gericht op een specifieke functie en heeft een einddatum. Een employer branding film gaat over jullie als werkgever en blijft jaren bruikbaar. Veel klanten doen allebei: de film als basis, de korte video’s per vacature daarop gebouwd.',
                ],
              },
            ],
          },
          {
            question: 'Onze medewerkers willen niet voor de camera.',
            answer: [
              {
                p: [
                  'Vaker wel dan je denkt, als je het goed aanpakt. We vragen niemand om teksten op te lezen en we filmen tijdens het werk in plaats van in een vergaderruimte. Wie echt niet wil, hoeft niet. Er is altijd een manier om het verhaal te vertellen zonder dat iedereen in beeld komt.',
                ],
              },
            ],
          },
          {
            question: 'Moeten we eerlijk zijn over de nadelen van het werk?',
            answer: [
              {
                p: [
                  'Dat raden we aan, en het is ook de reden dat deze films werken. Je hoeft geen vuile was buiten te hangen. Wel helpt het om te benoemen wat zwaar is of wat je moet kunnen hebben. Kandidaten vertrouwen een werkgever die dat durft meer dan een die alleen vrijdagmiddagborrels laat zien.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang moet zo’n film zijn?',
            answer: [
              {
                p: [
                  'Twee minuten voor de hoofdfilm, plus kortere video\'s van dertig tot zestig seconden voor social en vacaturesites. De lange versie bekijkt iemand die al geïnteresseerd is. De korte moet hem daar eerst krijgen.',
                ],
              },
            ],
          },
          {
            question: 'Hoe weten we of het gewerkt heeft?',
            answer: [
              {
                p: [
                  'Kijk niet alleen naar het aantal sollicitaties, maar ook naar de kwaliteit ervan en naar hoeveel mensen na een jaar nog werken. Die cijfers heb jij, wij niet. Spreek vooraf af waar je op gaat letten, anders weet je achteraf niet wat het heeft opgeleverd.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang duurt het traject?',
            answer: [
              {
                p: [
                  'Reken op zes tot acht weken van eerste gesprek tot oplevering, afhankelijk van het aantal draaidagen en locaties. Zit je aan een deadline vast, zeg dat in het eerste gesprek, dan plannen we erop.',
                ],
              },
            ],
          },
          {
            question: 'Wij hebben meerdere vestigingen of afdelingen. Wordt het dan één film?',
            answer: [
              {
                p: [
                  'Meestal één film over de organisatie, met daarnaast korte video’s per locatie of functiegroep. Alles in één film proppen werkt niet, want dan herkent niemand zichzelf er helemaal in.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang duurt het traject?',
            answer: [
              {
                p: [
                  'Reken op zes tot tien weken, afhankelijk van het aantal draaidagen en hoeveel mensen we spreken. De gesprekken en het concept vooraf kosten de meeste tijd.',
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
          title: 'Laat zien hoe het echt is om bij jullie te werken.',
          text: [
            {
              p: [
                'De juiste mensen herkennen zich erin. De rest solliciteert ergens anders.',
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
