/**
 * /business/campagnes/werving — teksten letterlijk van boldproductions.webflow.io/business/campagnes/werving (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import netwerkenImg from '../../../../assets/images/cases/superminds/240920182309-esprit-ict-jitskeseckel.jpg';
import duoZakelijkImg from '../../../../assets/images/zakelijke-events/fotografie/mike-skndag-40.jpg';
import netwerken2Img from '../../../../assets/images/zakelijke-events/mike-skndag-137.jpg';
import collegasImg from '../../../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-88.jpg';
import planningImg from '../../../../assets/images/promotievideo-laten-maken/hf-20260430-185051-34c53542-a978-4ca5-a04f-e7647905bc63.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/campagnes/werving',
  title: 'Werving',
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Wervingsvideo Productie',
    },
    title: 'Wervingsvideo laten maken | Wervingscampagne | Bold Productions',
    description: 'Een wervingscampagne die ook de mensen bereikt die niet aan het zoeken zijn. Bold maakt wervingsvideo’s waarin kandidaten zien hoe het echt is.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Solliciteren is',
        titleAccent: 'een grote stap.',
        eyebrow: 'Kijken naar een video niet.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Hoe dan?',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: netwerkenImg,
          alt: 'Collega’s in gesprek tijdens een bedrijfsevent van Esprit ICT.',
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
        title: 'Je wilt een wervingsvideo. Is dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'De vraag die eronder zit, is meestal: hoe krijgen we deze functie gevuld. En die vraag is interessanter.',
            ],
          },
          {
            p: [
              'Want als je vacature al maanden openstaat, ligt dat zelden aan de zichtbaarheid. Dan ligt het aan wie je probeert te bereiken, of aan wat je ze belooft. Een mooiere video van dezelfde boodschap verandert daar niets aan.',
            ],
          },
          {
            p: [
              'Dus beginnen we met de vraag waar niemand aan denkt: waarom zou iemand die het nu prima heeft, bij jullie willen werken?',
            ],
          },
        ],
        media: {
          type: 'image',
          src: duoZakelijkImg,
          alt: 'Twee gasten lopen binnen bij een zakelijk event.',
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
              'Wat een wervingscampagne is',
            ],
            level: 3,
          },
          {
            p: [
              'Een wervingscampgne is gericht op het vullen van concrete vacatures. Hij heeft een doel, een doelgroep en een einddatum.',
            ],
          },
          {
            p: [
              'Dat is iets anders dan een employer branding film. Die vertelt wie jullie zijn als werkgever en blijft jaren staan. Een wervingscampagne haakt daarop aan en maakt het scherp: deze functie, dit team, nu.',
            ],
          },
          {
            p: [
              'Heb je allebei, dan versterken ze elkaar. Heb je alleen een wervingscampagne, dan moet die harder werken. ',
              {
                text: 'Lees meer over Employer Branding',
                href: '/business/fundament/employer-branding',
              },
            ],
          },
          {
            h: [
              'Waarom de meeste wervingsvideo’s niemand bereiken',
            ],
            level: 4,
          },
          {
            p: [
              'Omdat ze alleen gemaakt zijn voor mensen die al zoeken. Een rondleiding door het pand, een collega die vertelt dat het een fijne club is, een knop naar de vacaturepagina.',
            ],
          },
          {
            p: [
              'Voor wie actief zoekt is dat niet eens verkeerd. Die wil weten waar hij terechtkomt en vergelijkt jou met vier anderen. Dan helpt het enorm als jij de enige bent die laat zien hoe het er echt aan toegaat.',
            ],
          },
          {
            p: [
              'Alleen bereik je met diezelfde video niemand anders. En de groep die nu nergens solliciteert is vele malen groter. Die zoekt niets, die scrollt alleen.',
            ],
          },
          {
            p: [
              'Een goede wervingscampagne werkt dus twee kanten op. Hij overtuigt de mensen die al kijken, en hij onderbreekt de mensen die dat niet doen. Dat laatste lukt alleen als er iets in zit waar je naar blijft kijken zonder dat je een baan wil.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert een wervingsvideo laten maken op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'De mensen overtuigen die al kijken',
                  strong: true,
                },
                {
                  br: true,
                },
                'Wie actief zoekt, vergelijkt jou met anderen. Laat je als enige zien hoe het werk er echt uitziet, dan kies je niet meer op salaris alleen.',
              ],
              [
                {
                  text: 'En de mensen bereiken die niet zoeken',
                  strong: true,
                },
                {
                  br: true,
                },
                'Daar zit de grootste groep, en vaak precies het profiel waar je al maanden naar zoekt. Die bereik je alleen met content die interessant genoeg is om naar te kijken zonder dat iemand iets nodig heeft.',
              ],
            ],
            spaced: true,
          },
          {
            ul: [
              [
                {
                  text: 'Minder afhankelijk van bureaus',
                  strong: true,
                },
                {
                  br: true,
                },
                'Elke kandidaat die rechtstreeks binnenkomt, is een bureaufee die je niet betaalt. Eén aanname terugverdienen is vaak al genoeg om de campagne eruit te halen.',
              ],
              [
                {
                  text: 'Sneller vullen, ook bij moeilijke functies',
                  strong: true,
                },
                {
                  br: true,
                },
                'Hoe schaarser het profiel, hoe minder een standaard vacature oplevert. Dan is opvallen geen luxe maar de enige optie die overblijft.',
              ],
              [
                {
                  text: 'Kandidaten die beter passen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Als je vooraf laat zien wat het werk echt inhoudt, selecteren mensen zichzelf. Dat scheelt gesprekken die nergens heen gaan.',
              ],
              [
                {
                  text: 'Content die je per vacature hergebruikt',
                  strong: true,
                },
                {
                  br: true,
                },
                'We leveren zo op dat je per functie of per team een eigen versie hebt. Volgende vacature, dezelfde basis.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Wie wil je hebben?',
            text: [
              {
                p: [
                  'Niet het functieprofiel, maar de persoon. Wat doet die nu, waar zit die, en wat zou hem aan het twijfelen brengen? Dat antwoord is hetzelfde of iemand nu zoekt of niet. Het bepaalt alleen waar we hem tegenkomen.',
                ],
              },
            ],
            image: {
              src: netwerken2Img,
              alt: 'Gasten in gesprek tijdens een zakelijk event.',
            },
          },
          {
            number: '02',
            title: 'Wat heb je te bieden dat anderen niet hebben?',
            text: [
              {
                p: [
                  'Eerlijk antwoord graag. Hier haakt de actieve zoeker namelijk op af. Die heeft er vijf naast elkaar liggen en ziet vijf keer dezelfde belofte. Als jouw antwoord goede koffie en een informele sfeer is, hebben we een ander probleem dan een videoprobleem. Dat zeggen we dan ook.',
                ],
              },
            ],
            image: {
              src: collegasImg,
              alt: 'Lachende collega’s tijdens het personeelsfeest van Waterschap Rijn en IJssel.',
            },
          },
          {
            number: '03',
            title: 'Creatief concept',
            text: [
              {
                p: [
                  'We werken één concept helemaal uit. Geen rijtje opties waaruit jij moet kiezen, want dan wordt het altijd het veiligste idee en dat is precies het idee dat langs je doelgroep heen scrollt.',
                ],
              },
              {
                p: [
                  'Het concept moet twee dingen tegelijk doen. Mensen die niet zoeken laten blijven kijken, en mensen die wel zoeken genoeg laten zien om te besluiten dat ze dit willen. Dat is één idee, geen twee campagnes.',
                ],
              },
            ],
            image: {
              src: planningImg,
              alt: 'Mike Ampting, eigenaar van Bold Productions, werkt aan de planning van een productie.',
            },
          },
        ],
        cta: {
          label: 'Plan een gesprek',
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
            question: 'Wat is het verschil met employer branding?',
            answer: [
              {
                p: [
                  'Employer branding gaat over wie jullie zijn als werkgever en blijft jaren bruikbaar. Een wervingscampagne is gericht op concrete vacatures en heeft een einddatum. De meeste klanten doen allebei: de film als basis, de campagnes daarop gebouwd. Heb je nog geen employer branding film, dan kan een wervingscampagne prima los, maar moet die meer werk verzetten.',
                ],
              },
            ],
          },
          {
            question: 'Maken jullie één video of meerdere?',
            answer: [
              {
                p: [
                  'Meerdere, en dat is geen upsell maar noodzaak. Een korte versie voor social, waar mensen je tegenkomen zonder erom te vragen. Een langere voor je vacaturepagina, waar iemand landt die al nieuwsgierig is. Plus cutdowns per functiegroep. Allemaal uit één productie en één idee.',
                ],
              },
            ],
          },
          {
            question: 'Wij hebben meerdere functies open. Wordt dat één campagne?',
            answer: [
              {
                p: [
                  'Meestal één idee met meerdere versies. Per functiegroep een eigen variant, want een monteur werf je anders dan een data-analist. Dat is efficiënter dan losse campagnes en het houdt de herkenbaarheid erin.',
                ],
              },
            ],
          },
          {
            question: 'Verzorgen jullie ook de advertenties en de targeting?',
            answer: [
              {
                p: [
                  'Ja en nee. We maken de advertenties maar zetten ze niet online. We werken wel graag samen met je advertentiepartner of je eigen marketingteam, want hun plan bepaalt welke versies en formaten wij opleveren. Zet die partij dus vroeg aan tafel.',
                ],
              },
            ],
          },
          {
            question: 'Hoe eerlijk moeten we zijn over het werk?',
            answer: [
              {
                p: [
                  'Eerlijker dan je gewend bent. Benoemen wat zwaar is of wat je moet kunnen hebben, schrikt mensen af die toch waren afgehaakt na drie maanden. Wie wél reageert, weet waar hij aan begint. Dat scheelt gesprekken, en het scheelt vertrek in het eerste jaar.',
                ],
              },
            ],
          },
          {
            question: 'Werkt dit ook voor functies waar bijna niemand voor te vinden is?',
            answer: [
              {
                p: [
                  'Daar werkt het juist het beste, want bij schaarse profielen levert een gewone vacature sowieso niets op. Wel eerlijk: beeld lost geen arbeidsmarkt op. Als het salaris niet marktconform is of de reistijd te lang, gaat geen enkele video dat goedmaken.',
                ],
              },
            ],
          },
          {
            question: 'Onze medewerkers willen niet voor de camera.',
            answer: [
              {
                p: [
                  'Dat valt in de praktijk mee als je het goed aanpakt. We laten niemand teksten oplezen en filmen tijdens het werk in plaats van in een vergaderruimte. Wie echt niet wil, hoeft niet. Er is altijd een manier om het verhaal te vertellen zonder dat iedereen in beeld komt.',
                ],
              },
            ],
          },
          {
            question: 'Hoe snel kan zoiets live?',
            answer: [
              {
                p: [
                  'Reken op vier tot zes weken van eerste gesprek tot oplevering. Zit je aan een harde deadline, bijvoorbeeld een seizoen of een project dat moet starten, zeg dat meteen, dan plannen we terug vanaf die datum.',
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
          title: 'Staat die vacature al te lang open?',
          text: [
            {
              p: [
                'Helpen we mee.',
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
