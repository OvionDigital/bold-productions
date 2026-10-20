/**
 * /business/campagnes — teksten letterlijk van boldproductions.webflow.io/campagnes (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../lib/sections';
import dinerImg from '../../../assets/images/cases/doetinchemse-kade-feesten/kade-feesten-aankondigingsvideo-final-00-00-31-22-still012.jpg';
import acteurImg from '../../../assets/images/promotievideo-laten-maken/spot-seq-00-05-56-23-still006.jpg';
import padelImg from '../../../assets/images/cases/doetinchemse-kade-feesten/kade-feesten-aankondigingsvideo-final-00-00-09-14-still011.jpg';
import welkomImg from '../../../assets/images/zakelijke-events/mikexdeliveformule-finis-100-jaar-4.jpg';
import collegasImg from '../../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-88.jpg';
import bioscoopImg from '../../../assets/images/events/bioscoop.jpg';
import formImg from '../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/campagnes',
  title: 'Campagnes',
  meta: {
    schema: {
      type: 'service',
      serviceType: 'Videocampagnes voor bedrijven',
    },
    title: 'Videocampagnes voor bedrijven | Commercial, merkactivatie en meer',
    description: 'Een campagne met een doel en een einddatum. Bold maakt commercials, merkactivaties, productvideo’s en wervingscampagnes die iets in beweging zetten.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Niet alles hoeft jaren',
        titleAccent: 'mee te gaan',
        eyebrow: 'Soms moet er gewoon deze maand iets gebeuren.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Lees hoe',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: dinerImg,
          alt: 'Twee mensen aan een gedekte tafel aan het water, still uit een video van Bold Productions.',
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
        title: 'Een campagne heeft een doel en een deadline.',
        gradient: 'orange',
        body: [
          {
            p: [
              'Dat maakt hem anders dan de rest van je beeld. Een ',
              {
                text: 'brandfilm',
                href: '/business/fundament/brandfilm',
              },
              ' staat jaren op je website. Een campagne heeft een startdatum, een planning en een resultaat waar je op wordt afgerekend.',
            ],
          },
          {
            p: [
              'Dus is de vraag ook een andere. Niet “wie zijn wij”, maar: wat moet er binnen deze periode veranderen, en bij wie?',
            ],
          },
          {
            p: [
              'Soms is dat meer verkopen. Soms is het vacatures vullen. Soms is het gewoon dat mensen eindelijk weten dat je bestaat. Alle drie vragen om iets anders.',
            ],
          },
        ],
        cta: {
          label: 'Boek Bold',
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
      type: 'timeline',
      props: {
        title: 'Vier campagnes. Vier doelen.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              {
                text: 'Welke je nodig hebt, hangt niet af van wat je wil maken. Het hangt af van wat er nu moet gebeuren.',
                strong: true,
              },
            ],
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Commercial',
            text: [
              {
                p: [
                  'Je wil gezien worden door mensen die niet op je zitten te wachten. Een commercial onderbreekt, en heeft dus twee seconden om de kijker te laten blijven. Dat win je niet met betere belichting maar met een idee.',
                ],
              },
            ],
            image: {
              src: padelImg,
              alt: 'Padelspeler in actie, still uit een video van Bold Productions.',
            },
            cta: {
              label: 'Meer over commercials',
              href: '/business/campagnes/commercial',
            },
          },
          {
            number: '02',
            title: 'Merkactivatie',
            text: [
              {
                p: [
                  'Je wil dat mensen je merk meemaken in plaats van zien. Op een beurs, een festival of in de stad. Plus de content die ervoor zorgt dat niet alleen de aanwezigen het meekrijgen.',
                ],
              },
            ],
            image: {
              src: welkomImg,
              alt: 'Artiesten ontvangen gasten onder een welkomstboog tijdens een bedrijfsfeest.',
            },
            cta: {
              label: 'Meer over merkactivaties',
              href: '/business/campagnes/merkactivatie',
            },
          },
          {
            number: '03',
            title: 'Werving',
            text: [
              {
                p: [
                  'Je hebt vacatures die te lang openstaan. Een wervingscampagne bereikt ook de mensen die helemaal niet aan het zoeken zijn, en dat is precies waar ook kandidaten zitten die je zoekt.',
                ],
              },
            ],
            image: {
              src: collegasImg,
              alt: 'Lachende collega’s tijdens het personeelsfeest van Waterschap Rijn en IJssel.',
            },
            cta: {
              label: 'Meer over werving',
              href: '/business/campagnes/werving',
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
      type: 'imageFeature',
      props: {
        id: 'cinema',
        title: 'Eerst de vraag achter de vraag.',
        text: 'Mooie beelden maken kan inmiddels iedereen. Daar win je het niet meer mee. Het verschil zit in de invalshoek, en die vind je niet achter een camera. Dus beginnen we met doorvragen. Wat moet deze campagne opleveren en bij wie? Wat gelooft jouw bedrijf dat je concurrent niet gelooft? Waar strandt het gesprek met een klant nu precies?\nDaarna werken we één concept helemaal uit, inclusief de redenering erachter. Geen rijtje opties waar jij maar uit moet kiezen, want dan wordt het altijd de veilige en die onthoudt niemand. Je ziet vooraf hoe het eruitgaat zien, zodat je het intern kunt verdedigen bij mensen die er niet bij waren.\nEn dan pas pakken we de camera.',
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
            question: 'Hoe lang duurt een campagnetraject?',
            answer: [
              {
                p: [
                  'Reken op zes tot tien weken van eerste gesprek tot oplevering, afhankelijk van de omvang. Het idee kost doorgaans meer tijd dan de draaidag. Zit je vast aan een lanceerdatum of een seizoen, zeg dat meteen, dan plannen we terug vanaf die datum.',
                ],
              },
            ],
          },
          {
            question: 'Verzorgen jullie ook de mediaplaatsing?',
            answer: [
              {
                p: [
                  'Nee. We werken graag samen met je mediabureau of je eigen marketingteam, want hun plan bepaalt wat wij opleveren. Hoe eerder die partij aan tafel zit, hoe beter de versies aansluiten op waar de campagne komt te draaien.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen we meerdere campagnes uit één productie halen?',
            answer: [
              {
                p: [
                  'Vaak wel, en dat is slim. Draaien we toch, dan is extra materiaal relatief goedkoop. Dat vraagt wel dat je vooraf weet wat er het komende jaar aan zit te komen, dus breng dat mee naar het eerste gesprek.',
                ],
              },
            ],
          },
          {
            question: 'Krijgen we meerdere concepten te zien?',
            answer: [
              {
                p: [
                  'Nee, we werken er één helemaal uit. Drie halve ideeën naast elkaar leggen klinkt als meer keuze, maar in de praktijk kies je dan het veiligste en heeft niemand er genoeg over nagedacht. Ben je het oneens met onze richting, dan horen we dat graag en gaan we terug naar de tekentafel.',
                ],
              },
            ],
          },
          {
            question: 'Wat als ons budget beperkt is?',
            answer: [
              {
                p: [
                  'Dan wordt het idee belangrijker, niet minder belangrijk. Met minder herhalingen moet het in één keer raak zijn. Zeg in het eerste gesprek wat je te besteden hebt, dan zeggen wij eerlijk wat daar wel en niet binnen past. Soms is het antwoord dat een campagne nu niet de slimste besteding is.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen campagnes ook met AI gemaakt worden?',
            answer: [
              {
                p: [
                  'Ja, helemaal of gedeeltelijk. Voor sommige ideeën is het de enige betaalbare manier om iets te laten zien wat je anders nooit kunt filmen. Voor andere is het de verkeerde keuze omdat het afstandelijk aanvoelt. We kijken per concept wat het verhaal dient.',
                ],
              },
            ],
          },
          {
            question: 'Hoe meten we of een campagne gewerkt heeft?',
            answer: [
              {
                p: [
                  'Spreek vooraf af waar je op let, anders is het achteraf een kwestie van gevoel. Bij werving is dat niet het aantal sollicitaties maar het aantal aannames. Bij een productvideo de conversie op je productpagina. Bij een merkactivatie het bereik van de content, niet het aantal bezoekers op locatie.',
                ],
              },
            ],
          },
          {
            question: 'Wat is het verschil met Fundament?',
            answer: [
              {
                p: [
                  'Fundament gaat over wie je bent en wat je doet, en dat verandert niet elk kwartaal. Campagnes zijn gericht op een moment: een lancering, een actie, een vacature, een periode. Het fundament ligt eronder, de campagnes bouwen erop verder.',
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
          title: 'Wat moet er de komende maanden gebeuren?',
          text: [
            {
              p: [
                'Begin daar. De vorm verzinnen wij wel.',
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
