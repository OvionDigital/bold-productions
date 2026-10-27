/**
 * /business/campagnes/merkactivatie — teksten letterlijk van boldproductions.webflow.io/business/campagnes/merkactivatie (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import welkomImg from '../../../../assets/images/zakelijke-events/mikexdeliveformule-finis-100-jaar-4.jpg';
import drumbandImg from '../../../../assets/images/cases/superminds/240920163844-esprit-ict-jitskeseckel.jpg';
import aiLogoImg from '../../../../assets/images/offerte-aanvragen/hf-20260404-141600-f53da6ce-f2c7-4266-9148-fed3481c249c.jpg';
import podiumGastenImg from '../../../../assets/images/zakelijke-events/mikexdeliveformule-finis-100-jaar-51.jpg';
import golfkarImg from '../../../../assets/images/zakelijke-events/mikexdeliveformule-finis-100-jaar-39.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/campagnes/merkactivatie',
  title: 'Merkactivatie',
  meta: {
    title: 'Merkactivatie laten maken | Activatie én beeld | Bold Productions',
    description: 'Een merkactivatie die mensen meemaken en de rest ook ziet. Bold bedenkt de activatie én het beeld, voor beurs, festival of de stad. Bekijk onze aanpak.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Duizend mensen maken het mee.',
        titleAccent: 'De rest moet het zien.',
        eyebrow: 'Daarom bedenken wij de activatie én het beeld.',
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
          src: welkomImg,
          alt: 'Artiesten ontvangen gasten onder een welkomstboog tijdens een bedrijfsfeest.',
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
        title: 'Je wilt een merkactivatie. Is dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Soms is de echte vraag: hoe zorgen we dat mensen iets bij ons voelen in plaats van alleen over ons lezen. Een activatie is daar een antwoord op, maar niet het enige.',
            ],
          },
          {
            p: [
              'Dus kijken we eerst wat je wil bereiken. Pas daarna of je daarvoor ergens fysiek moet staan.',
            ],
          },
        ],
        media: {
          type: 'image',
          src: drumbandImg,
          alt: 'Drumband speelt bij het kantoor van Esprit ICT.',
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
              'Merkacti-watte?',
            ],
            level: 3,
          },
          {
            p: [
              'Een ',
              {
                text: 'merkactivatie ',
                strong: true,
              },
              'is je merk laten meemaken in plaats van laten zien. Op een beurs, een festival, een evenement, in de stad of op je eigen terrein. Mensen doen iets, krijgen iets, beleven iets. En ze onthouden het, omdat ze erbij waren.',
            ],
          },
          {
            p: [
              'Het verschil met een commercial is fundamenteel. Een commercial onderbreekt iemand die iets anders aan het doen was, doorgaans online. Een activatie moet mensen uit zichzelf naar je toe laten lopen. Je kunt geen zendtijd kopen om dat af te dwingen.',
            ],
          },
          {
            h: [
              'Waarom wij hier goed in zijn',
            ],
            level: 4,
          },
          {
            p: [
              'Omdat we uit de festivalwereld komen.',
            ],
          },
          {
            p: [
              'Dat klinkt als een leuk detail, maar het is het hele punt. Op een festivalterrein concurreer je met een hoofdpodium, met vrienden, met bier en met zeventien andere merken die ook iets willen. Niemand is verplicht om naar je te kijken. Als je idee niet goed genoeg is, loopt iedereen gewoon door.',
            ],
          },
          {
            h: [
              'En daarna?',
            ],
            level: 4,
          },
          {
            p: [
              'Hier gaan de meeste activaties mis. Er wordt maanden gebouwd aan iets moois, duizend mensen maken het mee, en daarna is het voorbij.',
            ],
          },
          {
            p: [
              'Terwijl de mensen die er wél waren het kleinste deel van je doelgroep zijn. De rest moet het zien. Dus bouwen we de content er vanaf het begin in: beeld dat nog dezelfde dag online kan, materiaal dat je maanden kunt inzetten, en een verhaal dat ook werkt voor wie er niet bij was.',
            ],
          },
          {
            p: [
              'Een activatie zonder content is een feestje. Met content is het een ',
              {
                text: 'campagne',
                strong: true,
              },
              '.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert een merkactivatie op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Onthouden worden omdat mensen erbij waren',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een advertentie zie je. Een activatie maak je mee. Dat laatste blijft hangen en dat is wat je wilt.',
              ],
            ],
            spaced: true,
          },
          {
            ul: [
              [
                {
                  text: 'Bereik dat veel groter is dan het aantal bezoekers',
                  strong: true,
                },
                {
                  br: true,
                },
                'Duizend mensen op locatie, tienduizenden online. Mits je de content vooraf hebt meegenomen in het plan en niet achteraf hebt bedacht.',
              ],
              [
                {
                  text: 'Content waar je maanden mee vooruit kunt',
                  strong: true,
                },
                {
                  br: true,
                },
                'Eén activatie levert beeld op voor social, je website, je nieuwsbrief en je presentaties. Dat maakt de rekensom van zo’n dag heel anders.',
              ],
              [
                {
                  text: 'Een verkooptool richting partners en locaties',
                  strong: true,
                },
                {
                  br: true,
                },
                'Beeld van een geslaagde activatie is het sterkste argument om volgend jaar ergens anders te mogen staan. Je laat zien wat je neerzet in plaats van het te beloven.',
              ],
              [
                {
                  text: 'Mensen die het zelf doorsturen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Bij een goede activatie staan bezoekers zelf te filmen. Dat bereik koop je niet en het telt zwaarder, want het komt van iemand die ze kennen.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Eerst het idee. Dan de bouw en dan de camera.',
            text: [
              {
                p: [
                  'Veel activaties beginnen bij wat er fysiek kan. Een stand, een container, een foodtruck. Dan wordt er een merkboodschap op geplakt en moet er ook nog iemand komen filmen.',
                ],
              },
              {
                p: [
                  'Wij draaien het om.',
                ],
              },
            ],
            image: {
              src: aiLogoImg,
              alt: 'Bold Productions in de schijnwerpers.',
            },
          },
          {
            number: '02',
            title: 'Doel, doelgroep en plek',
            text: [
              {
                p: [
                  'Wat moet er gebeuren met de mensen die hier langslopen? Wie zijn dat? En waar sta je tussen? Een beursvloer vraagt iets anders dan een festivalterrein of een winkelstraat.',
                ],
              },
            ],
            image: {
              src: podiumGastenImg,
              alt: 'Gasten en artiesten op de loper tijdens een bedrijfsfeest.',
            },
          },
          {
            number: '03',
            title: 'Creatief concept',
            text: [
              {
                p: [
                  'Hier zit het werk. We zoeken een invalshoek die niemand verwacht en die klopt bij je merk. Daarbij denken we meteen in beide richtingen: wat gebeurt er op locatie, en hoe ziet dat eruit op een telefoonscherm.',
                ],
              },
              {
                p: [
                  'We werken één concept helemaal uit. Geen rijtje opties waaruit jij moet kiezen, want dan wordt het altijd het veiligste idee en dat is precies het idee waar niemand voor blijft staan.',
                ],
              },
              {
                p: [
                  'Je ziet vooraf hoe het eruit gaat zien, inclusief de redenering erachter. Zodat je het intern kunt uitleggen aan mensen die er niet bij waren. Willen jullie dat wij het pitchen aan directie of het team, dan doen we dat.',
                ],
              },
            ],
            image: {
              src: golfkarImg,
              alt: 'Gasten worden in een golfkar naar een bedrijfsfeest gereden.',
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
            question: 'Bedenken jullie de activatie of filmen jullie hem alleen?',
            answer: [
              {
                p: [
                  'Allebei, en dat is precies waarom het werkt. Als het idee en het beeld bij dezelfde partij liggen, wordt de activatie gebouwd op een manier die ook op camera klopt. Heb je het concept al liggen bij een andere partij? Dan haken we aan voor het beeld en denken we mee waar dat nuttig is.',
                ],
              },
            ],
          },
          {
            question: 'Bouwen jullie ook de fysieke productie?',
            answer: [
              {
                p: [
                  'We bedenken het en regelen de partijen die het bouwen. De lasapparatuur hebben we niet zelf, de contacten wel.',
                ],
              },
            ],
          },
          {
            question: 'Wij staan op een beurs en niet op een festival. Werkt dit dan ook?',
            answer: [
              {
                p: [
                  'Ja, en vaak juist goed. Op een beursvloer lijkt alles op elkaar, dus is er weinig voor nodig om op te vallen. De aanpak blijft hetzelfde: waarom zou iemand bij jou blijven staan in plaats van bij de buurman?',
                ],
              },
            ],
          },
          {
            question: 'Wat als het budget niet toelaat dat we iets groots neerzetten?',
            answer: [
              {
                p: [
                  'Dan wordt het idee nog belangrijker. De beste activaties zijn zelden de duurste. Vertel in het eerste gesprek wat je te besteden hebt, dan zeggen wij eerlijk wat daar wel en niet binnen past.',
                ],
              },
            ],
          },
          {
            question: 'Hoe meten we of het gewerkt heeft?',
            answer: [
              {
                p: [
                  'Bezoekersaantallen op locatie zijn het makkelijkst, maar zelden het interessantst. Kijk ook naar het online bereik van de content, naar wat mensen zelf plaatsten en naar wat het heeft opgeleverd aan gesprekken of leads. Spreek vooraf af waar je op let, anders weet je achteraf niet waar je wat van moet vinden.',
                ],
              },
            ],
          },
          {
            question: 'Hoe snel krijgen we de beelden?',
            answer: [
              {
                p: [
                  'Een recap kan nog dezelfde dag online. De rest van de content en de eventuele aftermovie volgen binnen de afgesproken termijn. Dat die eerste beelden snel komen is geen extraatje, het is het halve plan.',
                ],
              },
            ],
          },
          {
            question: 'Hoe lang duurt het traject?',
            answer: [
              {
                p: [
                  'Reken op twee tot vier maanden, afhankelijk van hoe groot de fysieke productie is en met hoeveel partijen we te maken hebben. Zit je vast aan een beursdatum of een festivalweekend, begin dan eerder dan je denkt nodig te hebben.',
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
          title: 'Waarom zou iemand bij jullie blijven staan?',
          text: [
            {
              p: [
                'Goede vraag. Zullen we hem samen beantwoorden?',
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
