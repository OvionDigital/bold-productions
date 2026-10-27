/**
 * /business/content/ai — teksten letterlijk van boldproductions.webflow.io/business/content/ai (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import aiStadImg from '../../../../assets/images/promotievideo-laten-maken/hf-20260413-093547-1fa542f4-6182-490c-bb12-566cdf3338cd.jpg';
import aiLogo2Img from '../../../../assets/images/offerte-aanvragen/hf-20260501-121116-60825268-2b8c-4682-b3b9-fcce2af3e714.jpg';
import planningImg from '../../../../assets/images/promotievideo-laten-maken/hf-20260430-185051-34c53542-a978-4ca5-a04f-e7647905bc63.jpg';
import aiLogoImg from '../../../../assets/images/offerte-aanvragen/hf-20260404-141600-f53da6ce-f2c7-4266-9148-fed3481c249c.jpg';
import editenImg from '../../../../assets/images/events/tijdlijn-post-productie.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/content/ai',
  title: 'AI',
  meta: {
    title: 'AI-video en -beeld laten maken | Bold Productions',
    description: 'Beelden waarvan je dacht dat ze niet konden. Bold zet AI in waar het iets toevoegt, gefilmd, met AI of een mix, en zegt het eerlijk wanneer niet.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Beelden waarvan je dacht',
        titleAccent: 'dat ze niet konden.',
        eyebrow: 'Dat is tegenwoordig een korter lijstje dan je denkt.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'We vertellen hoe',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: aiStadImg,
          alt: 'Luchtbeeld van de Doetinchemse Kadefeesten bij zonsondergang.',
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
        title: 'Wij zijn er vroeg bij. En dat merk je.',
        gradient: 'orange',
        body: [
          {
            p: [
              'AI verandert elke paar maanden wat er mogelijk is. Wij volgen dat op de voet, testen alles wat eruit komt en passen het toe zodra het goed genoeg is.',
            ],
          },
          {
            p: [
              'Niet omdat het nieuw is. Maar omdat er elk kwartaal dingen bij komen waarvan we vorig jaar nog moesten zeggen dat ze niet konden.',
            ],
          },
          {
            p: [
              'Dat betekent voor jou dat een idee vaker haalbaar is dan je verwacht. Stel de vraag gewoon. In het ergste geval zeggen we dat het nog niet kan, en dan kijken we er over een halfjaar opnieuw naar.',
            ],
          },
        ],
        media: {
          type: 'image',
          src: aiLogo2Img,
          alt: 'In de schijnwerpers: Bold Productions.',
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
              'Wat wij ermee doen',
            ],
            level: 3,
          },
          {
            p: [
              'We gebruiken AI waar het iets mogelijk maakt wat anders niet kan. Niet om sneller klaar te zijn.',
            ],
          },
          {
            p: [
              {
                text: 'Beeld van iets wat nog niet bestaat',
                strong: true,
              },
              {
                br: true,
              },
              'Een evenement dat nog moet plaatsvinden, een product dat nog niet gebouwd is, een locatie die er pas over een jaar zo uitziet. Voor de aankondigingsvideo van een festival maakten we beelden van een volle avond die op dat moment nog nergens bestond.',
            ],
          },
          {
            p: [
              {
                text: 'Archief tot leven brengen',
                strong: true,
              },
              {
                br: true,
              },
              'Dit is misschien wel het mooiste. Een foto uit 1963 van je opa op de werkvloer. Het pand voordat de aanbouw er stond. Een oprichter die er niet meer is. Met AI brengen we zulke beelden in beweging, zodat je bedrijfsgeschiedenis niet langer een rij stilstaande plaatjes is maar iets wat je echt even meemaakt.',
            ],
          },
          {
            p: [
              'Bij een jubileum of een brandfilm over waar je vandaan komt, is dat het verschil tussen een tijdlijn en een verhaal. En het is nog maar net mogelijk.',
            ],
          },
          {
            p: [
              {
                text: 'Shots die onbetaalbaar zijn',
                strong: true,
              },
              {
                br: true,
              },
              'Een camera die door een machine beweegt, een scène op een locatie waar je nooit mag filmen, een perspectief waar geen drone komt. Vroeger schrapte je die uit het concept. Nu niet meer.',
            ],
          },
          {
            p: [
              {
                text: 'Visualiseren voordat er gefilmd wordt',
                strong: true,
              },
              {
                br: true,
              },
              'Een idee laten zien in plaats van uitleggen, zodat jij het intern kunt verkopen voordat er één euro aan productie is uitgegeven.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert ai-content je op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Ideeën die anders zouden sneuvelen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Het concept dat te duur was, de locatie die niet kon, de scène die niemand wilde betalen. Die zijn nu bespreekbaar.',
              ],
              [
                {
                  text: 'Beeld van wat er nog niet is',
                  strong: true,
                },
                {
                  br: true,
                },
                'Je hoeft niet meer te wachten tot iets bestaat voordat je het kunt laten zien. Dat scheelt maanden in je communicatie.',
              ],
              [
                {
                  text: 'Een verleden dat je kunt laten zien',
                  strong: true,
                },
                {
                  br: true,
                },
                'Veel bedrijven hebben een rijke geschiedenis en een doos met foto’s. Pas als die beelden bewegen, voelt iemand er iets bij.',
              ],
              [
                {
                  text: 'Sneller schakelen op meerdere versies',
                  strong: true,
                },
                {
                  br: true,
                },
                'Varianten voor verschillende doelgroepen, markten of kanalen zijn een stuk minder bewerkelijk dan opnieuw de set op.',
              ],
              [
                {
                  text: 'Je plan verkopen voordat je het maakt',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een idee dat je kunt laten zien, krijgt sneller een handtekening dan een idee dat je moet uitleggen.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Het idee eerst. De techniek volgt.',
            text: [
              {
                p: [
                  'Bij de meeste AI-projecten gaat het andersom. Er wordt een tool ontdekt, en daarna wordt er iets bedacht waar die tool goed in is. Dat zie je aan het resultaat.',
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
            title: 'Doel & concept',
            text: [
              {
                p: [
                  'Zoals bij elke opdracht. Wat moet dit opleveren en bij wie? We werken één concept helemaal uit, inclusief de redenering erachter.',
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
            title: 'De keuze: gefilmd, AI of een mix',
            text: [
              {
                p: [
                  'Per scène, niet per project. Vaak is de mix het sterkst: echte mensen op een plek die niet bestaat, of gefilmd materiaal met een shot ertussen dat anders onmogelijk was. Wat het verhaal het beste dient, wint.',
                ],
              },
            ],
            image: {
              src: editenImg,
              alt: 'Mike Ampting, eigenaar van Bold Productions, tijdens het editen van videobeelden.',
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
            question: 'Is AI-video goedkoper dan gewoon filmen?',
            answer: [
              {
                p: [
                  'Soms wel, vaak niet zoals je denkt. Je bespaart op een draaidag, crew en locatie. Je betaalt meer aan iteraties en nabewerking, want goed AI-beeld maak je niet in één poging. Bij een scène die anders onbetaalbaar was, is het verschil enorm. Bij twee pratende mensen op kantoor niet.',
                ],
              },
            ],
          },
          {
            question: 'Wij hebben oud fotomateriaal. Kunnen jullie daar iets mee?',
            answer: [
              {
                p: [
                  'Vaak heel veel. Scans, archieffoto’s, oude drukwerkbeelden, zelfs materiaal van matige kwaliteit. We brengen het in beweging en maken er een scène van in plaats van een slide. Hoe meer je hebt, hoe meer er mogelijk is, dus stuur gerust de hele map op. Dan zeggen we wat eruit te halen valt.',
                ],
              },
            ],
          },
          {
            question: 'Ziet iedereen dat het AI is?',
            answer: [
              {
                p: [
                  'Bij veel AI-content wel, en dat ligt zelden aan het model. Dat ligt aan de afwerking en aan het feit dat er geen idee onder zit. Wij besteden het meeste werk aan de stap waar anderen stoppen. Dat gezegd hebbende: een close-up van een menselijk gezicht blijft lastig, en daar kiezen we meestal bewust voor echt beeld.',
                ],
              },
            ],
          },
          {
            question: 'Mogen we dit zomaar gebruiken voor commerciële doeleinden?',
            answer: [
              {
                p: [
                  'Ja. We werken met modellen en licenties die commercieel gebruik toestaan, en leggen in de offerte vast wat je waar en hoe lang mag inzetten. Dat regelen we vooraf en niet achteraf.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ons bestaande merk of product nabouwen in AI?',
            answer: [
              {
                p: [
                  'Vaak wel. Met referentiemateriaal van je product, je huisstijl of je locatie blijft het herkenbaar. Hoe specifieker het product, hoe meer werk het is om het consistent te houden over meerdere shots. Dat zeggen we vooraf, niet halverwege.',
                ],
              },
            ],
          },
          {
            question: 'Wij willen eigenlijk niet dat onze klanten merken dat er AI gebruikt is.',
            answer: [
              {
                p: [
                  'Dan is de vraag waarom. Zit dat in de kwaliteit, dan lossen we dat op in de afwerking. Zit het in de boodschap, bijvoorbeeld omdat jullie over vakmanschap of mensen gaan, dan is AI daar waarschijnlijk gewoon het verkeerde middel. Dat is een goed gesprek om vooraf te voeren.',
                ],
              },
            ],
          },
          {
            question: 'Hoe snel kan het?',
            answer: [
              {
                p: [
                  'Sneller dan een filmproductie, maar niet zo snel als de verhalen doen vermoeden. Reken op drie tot zes weken, afhankelijk van hoeveel shots er nodig zijn en hoe specifiek ze moeten zijn. Het concept kost de meeste tijd, net als altijd.',
                ],
              },
            ],
          },
          {
            question: 'Welke tools gebruiken jullie?',
            answer: [
              {
                p: [
                  'Dat wisselt, en bewust. Wat nu het beste model is voor een bepaald soort beeld, is dat over een halfjaar misschien niet meer. We volgen dat op de voet en kiezen per project. Welke software erin zit, zou voor jou niet uit moeten maken.',
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
          title: 'Een idee dat te duur of te onmogelijk leek?',
          text: [
            {
              p: [
                'Leg hem eens voor. Misschien kan het inmiddels wel.',
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
