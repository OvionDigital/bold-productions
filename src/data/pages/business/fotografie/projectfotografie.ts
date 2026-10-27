/**
 * /business/fotografie/projectfotografie — teksten letterlijk van boldproductions.webflow.io/business/fotografie/projectfotografie (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import bouwImg from '../../../../assets/images/zakelijke-events/fotografie/mike-waterschap-huisfeestje-38.jpg';
import dijkImg from '../../../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-43.jpg';
import rivierImg from '../../../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-45.jpg';
import planningImg from '../../../../assets/images/promotievideo-laten-maken/hf-20260430-185051-34c53542-a978-4ca5-a04f-e7647905bc63.jpg';
import machineImg from '../../../../assets/images/zakelijke-events/fotografie/mike-waterschap-huisfeestje-2.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/fotografie/projectfotografie',
  title: 'Projectfotografie',
  meta: {
    title: 'Projectfotografie | Je volgende opdracht verkoop je met je vorige | Bold Productions',
    description: 'Projectfotografie die laat zien wat jullie neerzetten. Bold fotografeert het hele traject of alleen de oplevering, voor tenders, website, socials en pers.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Je volgende opdracht',
        titleAccent: 'verkoop je met je vorige',
        eyebrow: 'Mits je daar beeld van hebt.',
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
          src: bouwImg,
          alt: 'Bezoekers bekijken een bouwproject van Waterschap Rijn en IJssel.',
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
        title: 'Je wilt projectfotografie. Is dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Bijna altijd wel. Alleen bepaalt het doel wanneer we moeten komen, en dat gaat vaker mis dan je denkt.',
            ],
          },
          {
            p: [
              'Want een opgeleverd project is maar kort op zijn mooist. Daarna gaat er een plant op het aanrecht, komt er een fiets tegen de gevel en groeit de beplanting dicht. Wacht je te lang, dan fotografeer je niet meer wat jij hebt gemaakt maar hoe iemand ermee leeft.',
            ],
          },
        ],
        cta: {
          label: 'Bel Bold',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: dijkImg,
          alt: 'Medewerkers van Waterschap Rijn en IJssel op locatie.',
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
              'Wat is projectfotografie?',
            ],
            level: 3,
          },
          {
            p: [
              'Projectfotografie legt vast wat je hebt gerealiseerd. Een keuken, een badkamer, een verbouwde woning, een tuin, een interieur, een installatie of een compleet bouwproject.',
            ],
          },
          {
            p: [
              'Het gaat om het resultaat, en als het relevant is ook om het traject ernaartoe.',
            ],
          },
          {
            p: [
              'Voor veel bedrijven is dit het belangrijkste beeld dat ze hebben. Niemand koopt een keuken op basis van een productfoto van de fabrikant. Mensen willen zien wat jullie bij iemand anders hebben neergezet, en of dat eruitziet zoals zij het willen.',
            ],
          },
          {
            h: [
              'Je verkoopt je volgende project met je vorige',
            ],
            level: 4,
          },
          {
            p: [
              'Dat is het hele punt.',
            ],
          },
          {
            p: [
              'Een offerte alléén overtuigt niemand. Een showroom helpt, maar die laat één opstelling zien. Beeld van tien gerealiseerde projecten laat zien wat je allemaal kunt, in wat voor soort woningen je werkt en of jouw smaak klopt met die van de klant.',
            ],
          },
          {
            p: [
              'Daarom is projectfotografie geen marketingkostenpost maar verkoopmateriaal.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert projectfotografie op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Een portfolio dat verkoopt',
                  strong: true,
                },
                {
                  br: true,
                },
                'Beeld van gerealiseerd werk is bij veel bedrijven het enige echte verkoopargument. Hoe meer je laat zien, hoe makkelijker iemand ja zegt.',
              ],
              [
                {
                  text: 'Beeld dat bij jouw klant past',
                  strong: true,
                },
                {
                  br: true,
                },
                'Mensen zoeken niet naar de mooiste keuken. Ze zoeken naar een keuken in een huis dat op dat van hen lijkt. Met een gevarieerd portfolio herkent iedereen zichzelf ergens in.',
              ],
              [
                {
                  text: 'Materiaal voor tenders en offertes',
                  strong: true,
                },
                {
                  br: true,
                },
                'Bij zakelijke opdrachten is beeld van vergelijkbare projecten vaak het enige wat je kunt laten zien als iemand twijfelt of je het aankunt.',
              ],
              [
                {
                  text: 'Content zonder dat je iets hoeft te verzinnen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Elk opgeleverd project levert beeld op voor je website, je socials en je advertenties. Je hoeft er niets voor te bedenken, het staat er al.',
              ],
              [
                {
                  text: 'Erkenning voor de mensen die het maakten',
                  strong: true,
                },
                {
                  br: true,
                },
                'Vakmensen zien hun werk zelden goed vastgelegd. Dat is goed voor de trots en het helpt bij het vinden van nieuwe mensen.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Op het juiste moment, niet op de makkelijkste dag.',
            text: [
              {
                p: [
                  'Projectfotografie is vooral een kwestie van timing en toegang. Dat laatste wordt vaak onderschat, want meestal woont er iemand.',
                ],
              },
            ],
            image: {
              src: rivierImg,
              alt: 'Stuw in de rivier, een project van Waterschap Rijn en IJssel.',
            },
          },
          {
            number: '02',
            title: 'Plannen en toestemming',
            text: [
              {
                p: [
                  'We spreken af welke projecten en welke momenten, en waarvoor je de beelden gebruikt. Gaat het om een particuliere opdrachtgever, dan regelen we samen de toestemming en een geschikt tijdstip. Hoe eerder dat bij de oplevering wordt meegenomen, hoe soepeler het gaat.',
                ],
              },
            ],
            image: {
              src: planningImg,
              alt: 'Mike Ampting, eigenaar van Bold Productions, werkt aan de planning van een productie.',
            },
          },
          {
            number: '03',
            title: 'Op locatie',
            text: [
              {
                p: [
                  'Licht is hier alles, dus we plannen het tijdstip van de dag mee in plaats van te komen wanneer het uitkomt. We stylen waar nodig, ruimen op wat afleidt en laten de rest met rust. Bij een bouwplaats werken we volgens jullie veiligheidsregels.',
                ],
              },
            ],
            image: {
              src: machineImg,
              alt: 'Pompinstallatie van Waterschap Rijn en IJssel.',
            },
          },
        ],
        cta: {
          label: 'Plan een afspraak',
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
            question: 'Wat kost projectfotografie?',
            answer: [
              {
                p: [
                  'Meestal rekenen we per project. De prijs hangt af van de omvang, hoeveel projecten we op één dag doen en of er drone of video bij komt. Lever je structureel op, dan werken we met vaste momenten en ligt de prijs per project lager. Vraag een offerte aan voor een onderbouwd bedrag.',
                ],
              },
            ],
          },
          {
            question: 'Wanneer kunnen jullie het beste komen?',
            answer: [
              {
                p: [
                  'Zo snel mogelijk na de oplevering, voordat het project in gebruik is. Een keuken fotografeer je het liefst voordat er een broodrooster staat, een tuin voordat alles is dichtgegroeid. Hoe korter na de oplevering, hoe beter.',
                ],
              },
            ],
          },
          {
            question: 'Onze klant woont er al. Kan het dan nog?',
            answer: [
              {
                p: [
                  'Het makkelijkst is dit meteen bij de opdracht of bij de oplevering te vragen, in plaats van maanden later. En anders plannen we het zo dat het wel past.',
                ],
              },
            ],
          },
          {
            question: 'Doen jullie ook styling?',
            answer: [
              {
                p: [
                  'Beperkt. We ruimen op wat afleidt en verplaatsen dingen voor een beter beeld. Wil je echte styling met gehuurde accessoires en aankleding, dan werken we samen met een stylist. Dat spreken we vooraf af.',
                ],
              },
            ],
          },
          {
            question: 'Maken jullie ook dronebeelden?',
            answer: [
              {
                p: [
                  'Ja, waar dat is toegestaan. Bij tuinen, woningen en grotere projecten voegt een luchtopname veel toe. Vliegen mag niet overal, dus we checken de regels voor de locatie vooraf.',
                ],
              },
            ],
          },
          {
            question: 'Hoe zit het met de rechten op de foto’s?',
            answer: [
              {
                p: [
                  'Jij mag de foto\'s gebruiken zoals en hoelang je wilt. Wil je de beelden met leveranciers, een architect of de opdrachtgever zelf delen, dan maken we daar afspraken over.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ook video maken op dezelfde dag?',
            answer: [
              {
                p: [
                  'Ja. Zijn we er toch, dan kost bewegend beeld relatief weinig extra. Bij interieurs en tuinen werkt een korte rondgang vaak beter dan losse foto’s, zeker op social.',
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
          title: 'Laat maar zien wat je kunt.',
          text: [
            {
              p: [
                'Dan doen wij hetzelfde.',
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
