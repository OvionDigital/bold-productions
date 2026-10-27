/**
 * /business/fundament — teksten letterlijk van boldproductions.webflow.io/business/fundament (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../lib/sections';
import espritImg from '../../../assets/images/cases/240920212916-esprit-ict-jitskeseckel.jpg';
import teamImg from '../../../assets/images/over/bold-85.jpg';
import kadeImg from '../../../assets/images/cases/doetinchemse-kade-feesten/spot-seq-00-00-04-23-still002.jpg';
import sprekerImg from '../../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-63.jpg';
import netwerkenImg from '../../../assets/images/cases/superminds/240920182309-esprit-ict-jitskeseckel.jpg';
import mikeImg from '../../../assets/images/team/mike-ampting.jpg';
import formImg from '../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/fundament',
  title: 'Fundament',
  meta: {
    title: 'Brandfilm, bedrijfsfilm en employer branding | Bold Productions',
    description: 'Campagnes komen en gaan, je fundament blijft staan. Bold maakt brandfilms, bedrijfsfilms en employer branding films die laten zien wie je bent.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Jullie fundament',
        titleAccent: 'Staat al',
        eyebrow: 'Alleen ziet niemand het.',
        primaryCta: {
          label: 'Regelen we voor je',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Hoe dan?',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: espritImg,
          alt: 'Het kantoor van Esprit ICT met verlicht logo tijdens een bedrijfsevent.',
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
        title: 'Campagnes komen en gaan. Dit blijft staan.',
        gradient: 'orange',
        body: [
          {
            p: [
              'De meeste video wordt gemaakt voor een moment. Een lancering, een actie, een seizoen. Nuttig, maar over een jaar kijkt er niemand meer naar.',
            ],
          },
          {
            p: [
              'Fundament werkt anders. Dit is het beeld dat op je website blijft staan, meegaat in elke pitch, draait op beurzen en in je onboarding, en onder elke campagne ligt die je daarna maakt.',
            ],
          },
          {
            p: [
              'Waar je voor staat. Wat je doet. Hoe het is om bij jullie te werken. Drie dingen die je maar één keer goed hoeft vast te leggen.',
            ],
          },
        ],
        cta: {
          label: 'Wil ik',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: teamImg,
          alt: 'Mike Ampting, eigenaar van Bold Productions, met zijn team.',
        },
        triangles: true,
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Drie films. Drie uitdagingen.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'Welke je nodig hebt, hangt niet af van wat je wil maken. Het hangt af van wat er nu niet goed gaat.',
            ],
          },
          {
            p: [
              'Dus lees ze niet als een menu, maar als een diagnose. De kans is groot dat je jezelf in één van de drie meteen herkent.',
            ],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Brandfilm',
            text: [
              {
                p: [
                  'Iedereen in jouw markt zegt ongeveer hetzelfde. Een brandfilm vertelt niet wat je verkoopt, maar laat voelen waar je voor staat. Zodat mensen jou willen, niet iets wat op jou lijkt.',
                ],
              },
            ],
            image: {
              src: kadeImg,
              alt: 'Zonsopkomst boven het water in Doetinchem, still uit een video van Bold Productions.',
            },
            cta: {
              label: 'Meer over een brandfilm',
              href: '/business/fundament/brandfilm',
            },
          },
          {
            number: '02',
            title: 'Bedrijfsfilm',
            text: [
              {
                p: [
                  'Wat jullie doen is logisch zodra iemand het snapt. Alleen duurt dat nu drie gesprekken. Een bedrijfsfilm vertelt je verhaal één keer goed, zodat jij het niet tig keer hoeft te doen.',
                ],
              },
            ],
            image: {
              src: sprekerImg,
              alt: 'Spreker tijdens het personeelsfeest van Waterschap Rijn en IJssel.',
            },
            cta: {
              label: 'Meer over bedrijfsfilm',
              href: '/business/fundament/bedrijfsfilm',
            },
          },
          {
            number: '03',
            title: 'Employer branding',
            text: [
              {
                p: [
                  'Je vacature lijkt op die van je concurrent, dus krijg je reacties van mensen die niet weten waar ze aan beginnen. Een werken-bij film laat zien hoe het werken echt is. De juiste mensen herkennen zich erin.',
                ],
              },
            ],
            image: {
              src: netwerkenImg,
              alt: 'Collega’s in gesprek tijdens een bedrijfsevent van Esprit ICT.',
            },
            cta: {
              label: 'Meer over Employer Branding',
              href: '/business/fundament/employer-branding',
            },
          },
        ],
      },
    },
    {
      type: 'textMedia',
      props: {
        title: 'Ze lijken op elkaar. Dat is precies het probleem.',
        gradient: 'orange',
        body: [
          {
            p: [
              'Bedrijven vragen om een bedrijfsfilm en bedoelen een brandfilm. Of andersom.',
            ],
          },
          {
            p: [
              'Daarom één zin per film:',
              {
                br: true,
              },
              'Moeten mensen iets bij jullie merk ',
              {
                text: 'voelen',
                strong: true,
              },
              '? Dan is het een brandfilm.',
              {
                br: true,
              },
              'Moeten mensen ',
              {
                text: 'snappen',
                strong: true,
              },
              ' wat jullie doen? Dan is het een bedrijfsfilm.',
              {
                br: true,
              },
              'Moeten mensen bij jullie ',
              {
                text: 'willen werken',
                strong: true,
              },
              '? Dan is het employer branding.',
            ],
          },
          {
            p: [
              'Herken je er meer dan één? Dat kan, en dan is de vraag welke het eerst moet. Bijna altijd de film die het probleem oplost waar je nu het meeste last van hebt, niet degene die het leukst klinkt.',
            ],
          },
        ],
        cta: {
          label: 'Vertel me meer',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: mikeImg,
          alt: 'Mike Ampting, eigenaar van Bold Productions.',
        },
        triangles: true,
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Eerst de vraag achter de vraag.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'Mooie beelden maken kan inmiddels iedereen. Daar win je het niet meer mee. Het verschil zit in de invalshoek, en die vind je niet achter een camera. Dus beginnen we met doorvragen.',
              {
                br: true,
              },
              'Wat moet deze film ',
              {
                text: 'opleveren',
                strong: true,
              },
              ', en bij ',
              {
                text: 'wie',
                strong: true,
              },
              '?',
              {
                br: true,
              },
              'Wat geloven jullie dat je concurrent niet gelooft?',
              {
                br: true,
              },
              'Soms komt daar iets anders uit dan waar je voor kwam. Dat zeggen we dan ook. Daarna leggen we het concept visueel vast, inclusief de redenering erachter. Zodat jij het plan niet in je eentje hoeft te verdedigen bij de rest van je organisatie.',
              {
                br: true,
              },
              'En dan pas pakken we de camera.',
            ],
          },
        ],
        steps: [],
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        items: [
          {
            question: 'Kunnen we meerdere films in één keer laten maken?',
            answer: [
              {
                p: [
                  'Ja, en vaak is dat verstandig. Als we toch op locatie zijn met een crew, is een tweede film een stuk goedkoper dan een los traject later. Dat werkt alleen als de concepten vooraf allebei scherp zijn. Twee films uit één shoot persen zonder plan levert twee halve films op. Wel kunnen we materiaal van het een voor het ander gebruiken.',
                ],
              },
            ],
          },
          {
            question: 'Wat als we hier geen budget voor hebben en wel een campagne moeten draaien?',
            answer: [
              {
                p: [
                  'Doe dan de campagne. Fundament is geen voorwaarde voor alles wat erna komt, het maakt het alleen makkelijker en consistenter. Zeg in het eerste gesprek wat je te besteden hebt, dan zeggen wij wat daar wel en niet binnen past. Liever dat dan een voorstel waar je niks mee kunt.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang gaat zo’n film mee?',
            answer: [
              {
                p: [
                  'Drie tot vijf jaar is normaal. Soms langer. Hij veroudert pas echt als jullie verhaal verandert, bijvoorbeeld na een rebranding, een overname of een flinke koerswijziging. Beeld van mensen die allang vertrokken zijn, is overigens geen reden om opnieuw te beginnen. Daar kijkt niemand naar.',
                ],
              },
            ],
          },
          {
            question: 'Wij hebben al een bedrijfsfilm uit 2021. Moet die vervangen worden?',
            answer: [
              {
                p: [
                  'Niet per definitie. Stuur hem op en we zeggen eerlijk wat we ervan vinden. Soms is een nieuwe montage met aanvullend beeld genoeg. Soms zit het probleem in de opzet en los je dat niet op met een opfrisbeurt. Dan zeggen we dat ook.',
                ],
              },
            ],
          },
          {
            question: 'Wat is het verschil tussen deze films en wat er onder Campagnes staat?',
            answer: [
              {
                p: [
                  'Fundament gaat over wie je bent en wat je doet, en dat verandert niet elk kwartaal. Campagnes zijn gericht op een moment: een lancering, een actie, een periode. Het fundament ligt eronder, de campagnes bouwen erop verder.',
                ],
              },
            ],
          },
          {
            question: 'Wie moet er bij ons aan tafel zitten voor zo’n traject?',
            answer: [
              {
                p: [
                  'Iedereen die uiteindelijk ja moet zeggen, en dat zijn er meestal meer dan één. Marketing, directie en bij employer branding ook HR. Hoe later mensen aanhaken, hoe groter de kans dat je halverwege terug moet naar de tekentafel. We helpen je het idee intern uit te leggen en pitchen het zelf of samen aan je team.',
                ],
              },
            ],
          },
          {
            question: 'Komen jullie ook buiten de Achterhoek?',
            answer: [
              {
                p: [
                  'Door heel Nederland, en daarbuiten ook. Onze laatste corporate opdracht filmden we in Engeland. Reiskosten staan altijd in de offerte, dus daar word je achteraf niet mee verrast.',
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
          title: 'Nog niet zeker welke van de drie je nodig hebt?',
          text: [
            {
              p: [
                'Dan zit je goed. Dat is precies het gesprek dat we graag voeren.',
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
