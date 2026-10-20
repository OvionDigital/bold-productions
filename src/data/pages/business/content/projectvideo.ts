/**
 * /business/content/projectvideo — teksten letterlijk van boldproductions.webflow.io/business/content/projectvideo (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import rivierImg from '../../../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-45.jpg';
import dijkImg from '../../../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-43.jpg';
import bouwImg from '../../../../assets/images/zakelijke-events/fotografie/mike-waterschap-huisfeestje-38.jpg';
import gesprekImg from '../../../../assets/images/zakelijke-events/aftermovie/mikexdeliveformule-finis-100-jaar-77.jpg';
import montageImg from '../../../../assets/images/over/f7ab9527-e17b-4f6d-8e7f-bd8d80c6a87a.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/content/projectvideo',
  title: 'Projectvideo',
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Projectvideo Productie',
    },
    title: 'Projectvideo laten maken | Van ontwerp tot oplevering | Bold Productions',
    description: 'Een projectvideo die laat zien hoe jullie werken, niet alleen wat jullie maakten. Bold filmt het hele traject, inclusief de mensen erachter.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Jullie vakmanschap zit',
        titleAccent: 'in de keuzes die niemand ziet.',
        eyebrow: 'Een projectvideo maakt die zichtbaar.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Leggen we uit',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: rivierImg,
          alt: 'Stuw in de rivier, een project van Waterschap Rijn en IJssel.',
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
        title: 'Je wilt een projectvideo. Is dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Meestal wel. Maar de vraag die eronder zit, is vaak een andere.',
            ],
          },
          {
            p: [
              '“We willen ons project laten zien” betekent zelden dat er beelden ontbreken. Het betekent: een nieuwe opdrachtgever moet ons durven vertrouwen met iets van deze omvang. En dat is een heel ander vertrekpunt, want dan gaat het niet over hoe mooi het geworden is, maar over hoe het tot stand kwam.',
            ],
          },
        ],
        cta: {
          label: 'Vertel me meer',
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
              'Wat is een projectvideo?',
            ],
            level: 3,
          },
          {
            p: [
              'Een projectvideo legt een heel traject vast. Van ontwerp tot oplevering, inclusief alles wat daar tussenin misging en opgelost werd. Dat is iets anders dan een sfeerimpressie van de bouwplaats. Een projectvideo vertelt een verhaal met een begin en een eind, waarin de kijker ziet hoe complex het was en wie het heeft opgelost. Voor bedrijven in de bouw, techniek, installatie en industrie is dit vaak de sterkste video die ze kunnen hebben. Want in die sectoren koopt niemand op basis van een brochure. Mensen willen weten of jij het aankunt.',
            ],
          },
          {
            h: [
              'Sfeerbeelden alleen overtuigen niemand',
            ],
            level: 3,
          },
          {
            p: [
              'Vonken, staal, een drone over het terrein, muziek eronder. Prima beeld maar het zegt helemaal niets over jullie. Want je concurrent heeft precies dezelfde beelden. Dezelfde machines, dezelfde kranen, dezelfde hijsbewegingen. Een opdrachtgever die twijfelt, ziet twee video’s die op elkaar lijken en kiest alsnog op prijs.',
            ],
          },
          {
            p: [
              'Het verschil zit in de mensen. Een persoon die uitlegt waarom hij voor deze oplossing koos. De projectleider die vertelt waar het spannend werd. De uitvoerder die laat zien hoe het op locatie in elkaar klapte. Dat is wat niemand kan kopiëren, en precies wat de meeste videomakers overslaan omdat sfeerbeelden makkelijker zijn.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert een projectvideo op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Vertrouwen bij opdrachtgevers die je nog niet kennen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Bij een groot project is de vraag niet of je het kunt, maar of iemand het risico durft te nemen. Een video waarin je vakmensen uitleggen hoe ze werken, neemt dat risico weg.',
              ],
              [
                {
                  text: 'Een verkoopinstrument dat jaren meegaat',
                  strong: true,
                },
                {
                  br: true,
                },
                'Je gebruikt hem in offertetrajecten, op je website, bij aanbestedingen en op beurzen. Het project is af, de video blijft werken.',
              ],
              [
                {
                  text: 'Erkenning voor de mensen die het hebben gedaan',
                  strong: true,
                },
                {
                  br: true,
                },
                'Vakmensen zien hun werk zelden terug op een manier die recht doet aan wat er in zit. Dat is goed voor trots en het helpt ook bij het aantrekken van nieuwe mensen.',
              ],
              [
                {
                  text: 'Je onderscheiden zonder over prijs te praten',
                  strong: true,
                },
                {
                  br: true,
                },
                'Zolang opdrachtgevers je vergelijken op specificaties, ben je inwisselbaar. Laat je zien hoe je denkt, dan verandert dat gesprek.',
              ],
              [
                {
                  text: 'Je opdrachtgever maakt reclame voor jou',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een goede projectvideo deelt de opdrachtgever zelf, want hij is trots op wat er staat. Zo maak je gebruik van elkaars netwerk.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Meelopen, niet langskomen.',
            text: [
              {
                p: [
                  'Een project duurt maanden. Een cameraploeg die op één dag langskomt, legt dat ene moment vast en mist het verhaal. We bepalen vooraf welke momenten we nodig hebben. De ontwerpfase, de productie, het transport, de montage op locatie. Dat hoeven niet veel dagen te zijn, maar het moeten wel de juiste zijn. En we stemmen af met jouw planning, want de bouw wacht niet op ons.',
                ],
              },
            ],
            image: {
              src: bouwImg,
              alt: 'Bezoekers bekijken een bouwproject van Waterschap Rijn en IJssel.',
            },
          },
          {
            number: '02',
            title: 'De gesprekken',
            text: [
              {
                p: [
                  'We filmen de betrokken partijen op het moment dat het nog vers is. Architect, projectleider, uitvoerder, soms de opdrachtgever zelf. Zonder script, want vakmensen die hun eigen werk uitleggen zijn overtuigender dan welke marketingtekst dan ook.',
                ],
              },
            ],
            image: {
              src: gesprekImg,
              alt: 'Gasten in gesprek tijdens een bedrijfsfeest.',
            },
          },
          {
            number: '03',
            title: 'Montage en versies',
            text: [
              {
                p: [
                  'Je krijgt de volledige projectvideo plus kortere cuts per fase. Die zet je in tijdens het project zelf, bijvoorbeeld op LinkedIn, in plaats van alles te bewaren tot de oplevering.',
                ],
              },
            ],
            image: {
              src: montageImg,
              alt: 'Montageplek van Bold Productions met een interview op het scherm.',
            },
          },
        ],
        cta: {
          label: 'Dat heb ik nodig',
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
            question: 'Hoe vaak komen jullie langs tijdens het project?',
            answer: [
              {
                p: [
                  'Dat bepalen we vooraf op basis van de fases die ertoe doen. Vaak zijn drie tot vijf momenten genoeg: ontwerp, productie, een cruciaal moment op locatie en de oplevering. Meer kan, maar elk extra moment moet iets toevoegen aan het verhaal.',
                ],
              },
            ],
          },
          {
            question: 'Ons project loopt al. Is het te laat?',
            answer: [
              {
                p: [
                  'Niet per se. We kunnen instappen op elk moment en werken met beeldmateriaal dat jullie zelf al hebben gemaakt, ook als dat telefoonbeeld is. Eerder instappen levert een completer verhaal op, maar halverwege beginnen is beter dan niet beginnen.',
                ],
              },
            ],
          },
          {
            question: 'Mogen wij bepalen wie er in beeld komt?',
            answer: [
              {
                p: [
                  'Ja, en het is belangrijk dat je daarover meedenkt. De sterkste gesprekken komen vaak niet van de directie maar van de mensen die het werk uitvoeren. Die vertellen hoe het echt ging in plaats van hoe het bedoeld was.',
                ],
              },
            ],
          },
          {
            question: 'Hoe gaan jullie om met veiligheid op de bouwplaats?',
            answer: [
              {
                p: [
                  'We werken volgens jullie regels en hebben de gebruikelijke persoonlijke beschermingsmiddelen bij ons. Gelden er specifieke eisen of een verplichte instructie, dan regelen we dat vooraf zodat de draaidag geen vertraging oplevert.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen we ook tussentijds al iets delen?',
            answer: [
              {
                p: [
                  'Ja, en dat raden we aan. We leveren kortere cuts per fase, zodat je tijdens het project al zichtbaar bent op LinkedIn in plaats van alles op te sparen tot de oplevering. Dan bouw je de aandacht op in plaats van hem in één keer te verbranden.',
                ],
              },
            ],
          },
          {
            question: 'Werken jullie ook aan projecten in het buitenland?',
            answer: [
              {
                p: [
                  'Ja. Onze laatste projectvideo filmden we in Engeland, over een prefab constructie van ontwerp tot montage op de bouwplaats.',
                ],
              },
            ],
          },
          {
            question: 'Wat als het project uitloopt of de planning verschuift?',
            answer: [
              {
                p: [
                  'Dat gebeurt bij vrijwel elk project, dus daar houden we rekening mee. We werken met opnamemomenten in plaats van vaste data en schakelen mee als de planning schuift. Zolang we het op tijd horen, is het geen probleem.',
                ],
              },
            ],
          },
          {
            question: 'Wat is het verschil met een referentievideo?',
            answer: [
              {
                p: [
                  'Een referentievideo draait om wat je klant achteraf over je product en dienst zegt. Een projectvideo laat zien hoe het ging terwijl het gebeurde. Ze versterken elkaar, want de een bewijst je vakmanschap en de ander je betrouwbaarheid.',
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
          title: 'Loopt er nu een project dat de moeite waard is?',
          text: [
            {
              p: [
                'Dan is dit het moment om te bellen, niet na de oplevering.',
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
