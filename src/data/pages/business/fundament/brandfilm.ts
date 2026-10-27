/**
 * /business/fundament/brandfilm — teksten letterlijk van boldproductions.webflow.io/business/fundament/brandfilm (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import kadeImg from '../../../../assets/images/cases/doetinchemse-kade-feesten/spot-seq-00-00-04-23-still002.jpg';
import acteurImg from '../../../../assets/images/promotievideo-laten-maken/spot-seq-00-05-56-23-still006.jpg';
import planningImg from '../../../../assets/images/promotievideo-laten-maken/hf-20260430-185051-34c53542-a978-4ca5-a04f-e7647905bc63.jpg';
import aiLogoImg from '../../../../assets/images/offerte-aanvragen/hf-20260404-141600-f53da6ce-f2c7-4266-9148-fed3481c249c.jpg';
import setImg from '../../../../assets/images/events/tijdlijn-pre-productie.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/fundament/brandfilm',
  title: 'Brandfilm',
  meta: {
    title: 'Brandfilm laten maken | Merkfilm die blijft hangen | Bold Business',
    description: 'Een brandfilm die niet vertelt wat je doet, maar laat voelen waar je voor staat. Bold maakt merkfilms met een invalshoek die je concurrent over het hoofd ziet.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Iedereen in jouw markt',
        titleAccent: 'zegt ongeveer hetzelfde.',
        eyebrow: 'Een brandfilm is je kans om daar vanaf te wijken.',
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
          src: kadeImg,
          alt: 'Zonsopkomst boven het water in Doetinchem, still uit een video van Bold Productions.',
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
        title: 'je wilt een brandfilm.\nIs dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Meestal wel. Soms niet. Daar komen we samen achter.',
            ],
          },
          {
            p: [
              'Want “we willen een brandfilm” betekent zelden dat er een brandfilm ontbreekt. Het betekent bijna altijd iets anders. We worden niet herkend. We trekken de verkeerde mensen aan. We lijken te veel op de rest. Dat zijn drie verschillende problemen, en ze vragen om verschillende content',
              {
                br: true,
              },
              'Dus beginnen we niet met een draaiboek. We beginnen met uitzoeken wat er echt aan de hand is.',
            ],
          },
        ],
        cta: {
          label: 'Dat wil ik',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: acteurImg,
          alt: 'Close-up van een acteur tijdens een opname van Bold Productions.',
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
              'Wat een brandfilm wel is',
            ],
            level: 3,
          },
          {
            p: [
              'Een brandfilm of merkfilm gaat niet over wat je verkoopt. Hij gaat over waar je voor staat.',
            ],
          },
          {
            p: [
              'Geen opsomming van diensten. Geen directeur die zegt dat kwaliteit en klantgerichtheid hoog in het vaandel staan. Maar een film die iets losmaakt, zodat mensen iets voelen bij je merk voordat ze precies weten wat je doet.',
            ],
          },
          {
            p: [
              'Dat is ook het verschil met een bedrijfsfilm. Een bedrijfsfilm legt uit en informeert. Wie zijn jullie, wat doen jullie, hoe werkt het. Nuttig, en vaak precies wat nodig is. Een brandfilm werkt andersom. Die draait om identiteit, om waarden, om het gevoel dat aan je naam blijft hangen.',
            ],
          },
          {
            p: [
              'Allebei goede producten. Ze lossen alleen een ander probleem op.',
            ],
          },
          {
            p: [
              'Een brandfilm laten maken heeft dus pas zin als je weet welk gevoel je wil achterlaten. En bij wie.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert een merkfilm op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Voorkeur in plaats van vergelijking',
                  strong: true,
                },
                {
                  br: true,
                },
                'Zolang klanten je naast anderen leggen op prijs en specificaties, ben je inwisselbaar. Een sterke brandfilm zorgt dat mensen jou willen, niet iets wat op jou lijkt.',
              ],
              [
                {
                  text: 'Mensen die willen komen werken',
                  strong: true,
                },
                {
                  br: true,
                },
                'Vacatureteksten lijken allemaal op elkaar. Een merkfilm laat zien hoe het bij jullie is, in plaats van het te beweren. Voor HR is dat het verschil tussen lezen en solliciteren.',
              ],
              [
                {
                  text: 'Eén verhaal dat overal werkt',
                  strong: true,
                },
                {
                  br: true,
                },
                'Op je website, in je pitch, op beurzen, bij de onboarding van nieuwe mensen. Geen campagne van zes weken, maar de basis onder al je campagnes.',
              ],
              [
                {
                  text: 'Intern net zo hard als extern',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een brandfilm vertelt je eigen mensen wat jullie bij elkaar houdt. Dat klinkt zweverig tot je ziet wat het doet met een team dat zichzelf herkent.',
              ],
              [
                {
                  text: 'Iets wat niemand kan kopiëren',
                  strong: true,
                },
                {
                  br: true,
                },
                'Dezelfde camera’s, dezelfde locaties, dezelfde monteur. Allemaal te koop. Hoe jij je verhaal vertelt niet.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'eerst denken. dan pas filmen.',
            text: [
              {
                p: [
                  'Mooie beelden maken kan iedereen inmiddels. Daar win je het niet meer mee. Het verschil zit in de invalshoek, en die vind je niet achter een camera.',
                ],
              },
            ],
            image: {
              src: planningImg,
              alt: 'Mike Ampting, eigenaar van Bold Productions, werkt aan de planning van een productie.',
            },
          },
          {
            number: '02',
            title: 'Merkgesprek',
            text: [
              {
                p: [
                  'Waar staan jullie voor? Wat geloven jullie dat je concurrent niet gelooft? Wie moet dit zien en wat moet die daarna doen? We vragen door tot er iets ligt dat echt van jullie is. Oncomfortabel soms. Nuttig altijd.',
                ],
              },
            ],
            image: {
              src: aiLogoImg,
              alt: 'Bold Productions in de schijnwerpers.',
            },
          },
          {
            number: '03',
            title: 'creatief concept',
            text: [
              {
                p: [
                  'We zoeken een invalshoek waar je concurrentie nog niet aan gedacht heeft. Geen format uit de la, want dan krijg je de film die iedereen al heeft. Het concept leggen we visueel vast, inclusief de redenering erachter. En dat presenteren we. Aan jou, je team en directie. Zodat jij het plan niet in jeeentje hoeft te verdedigen.',
                ],
              },
            ],
            image: {
              src: setImg,
              alt: 'Team Bold Productions tijdens een opname op een filmset.',
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
            question: 'Wat is het verschil tussen een brandfilm en een bedrijfsfilm?',
            answer: [
              {
                p: [
                  'Een bedrijfsfilm legt uit wie jullie zijn, wat jullie doen en hoe het werkt. Een brandfilm laat voelen waar jullie voor staan. De eerste informeert, de tweede maakt iets los. Weet je niet welke je nodig hebt? Dat is precies het gesprek dat we willen voeren.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang is een brandfilm?',
            answer: [
              {
                p: [
                  'Meestal tussen de één en drie minuten. Korter kan, langer zelden. De lengte volgt uit het concept, niet andersom. We spreken vooraf af welke versies je krijgt, inclusief kortere cuts voor social.',
                ],
              },
            ],
          },
          {
            question: 'Wij weten zelf nog niet goed waar ons merk voor staat. Is het dan te vroeg?',
            answer: [
              {
                p: [
                  'Nee, dat is juist een goed moment. Het merkgesprek dwingt tot keuzes die je anders blijft uitstellen. Veel klanten halen daar los van de film al waarde uit.',
                ],
              },
            ],
          },
          {
            question: 'Hoe betrekken jullie onze medewerkers erbij?',
            answer: [
              {
                p: [
                  'Dat hangt van het concept af. Soms staan je eigen mensen in beeld, soms juist helemaal niet. Wat we altijd doen is intern ophalen wat er leeft. Een merkverhaal dat je eigen team niet herkent, gaat nergens heen.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang duurt het traject?',
            answer: [
              {
                p: [
                  'Reken op zes tot 12 weken van eerste gesprek tot oplevering, afhankelijk van de omvang en het aantal draaidagen. Het concept kost doorgaans meer tijd dan de productie zelf.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ook de fotografie verzorgen?',
            answer: [
              {
                p: [
                  'Ja. We fotograferen op dezelfde draaidagen, zodat beeld en film dezelfde stijl hebben. Dat scheelt een shoot en het scheelt gedoe met twee partijen die elkaar voor de lens lopen.',
                ],
              },
            ],
          },
          {
            question: 'Maken jullie alleen brandfilms voor grote bedrijven?',
            answer: [
              {
                p: [
                  'Nee. Het gaat erom of je iets te zeggen hebt en of je bereid bent dat anders te zeggen dan de rest. Dat staat los van je omvang.',
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
          title: 'Nog geen idee waar jullie brandfilm over gaat?',
          text: [
            {
              p: [
                'Wij ook niet. Na één gesprek allebei een stuk beter.',
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
