/**
 * /business/fotografie/productfotografie — teksten letterlijk van boldproductions.webflow.io/business/fotografie/productfotografie (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import gerechtImg from '../../../../assets/images/zakelijke-events/promovideo/rhbfoto-135.jpg';
import paellaImg from '../../../../assets/images/cases/bold-productions-x-paella-dinershow-horizontaal-17.jpg';
import planningImg from '../../../../assets/images/promotievideo-laten-maken/hf-20260430-185051-34c53542-a978-4ca5-a04f-e7647905bc63.jpg';
import hapjesImg from '../../../../assets/images/cases/superminds/240920164220-esprit-ict-jitskeseckel.jpg';
import editenImg from '../../../../assets/images/events/tijdlijn-post-productie.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/fotografie/productfotografie',
  title: 'Productfotografie',
  meta: {
    title: 'Productfotografie | Packshots en beeld dat verkoopt | Bold Productions',
    description: 'Productfotografie voor webshop, campagne en marketplace. Bold maakt packshots die voldoen aan de eisen en beeld dat mensen doet kopen.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Online kan niemand',
        titleAccent: 'je product vasthouden',
        eyebrow: 'Dus moet de foto dat doen.',
        primaryCta: {
          label: 'Boek Bold',
          href: '/business/offerte-aanvragen',
        },
        secondaryCta: {
          label: 'Regelen we voor je',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: gerechtImg,
          alt: 'Opgemaakt gerecht op een bord, gefotografeerd door Bold Productions.',
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
        title: 'Je wilt productfotografie. Is dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Bijna altijd wel. Alleen zit er meestal een tweede vraag onder: waarom kiest iemand voor jullie product en niet voor dat van de goedkopere aanbieder?',
            ],
          },
          {
            p: [
              'Dat beantwoord je niet met een scherpere foto. Dat beantwoord je met beeld dat laat zien wat jouw product anders maakt. Daar beginnen we, want anders krijg je nette foto’s van iets wat mensen nog steeds niet nodig vinden.',
            ],
          },
        ],
        cta: {
          label: 'Wil ik',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: paellaImg,
          alt: 'Kok bereidt een grote pan paella.',
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
              'Packshot of beeld dat verkoopt?',
            ],
            level: 3,
          },
          {
            p: [
              'Dit is het verschil dat de meeste bedrijven overslaan, terwijl je ze allebei nodig hebt.',
            ],
          },
          {
            p: [
              {
                text: 'De packshot.',
                strong: true,
              },
              ' Je product op een schone achtergrond, scherp, van alle kanten, zonder afleiding. Dit is wat marketplaces en webshops verplicht stellen en wat mensen willen zien voordat ze kopen. Hoe groot is het, hoe ziet de achterkant eruit, zit die knop daar echt. Functioneel beeld, en dat moet gewoon kloppen.',
            ],
          },
          {
            p: [
              {
                text: 'Het verkoopbeeld.',
                strong: true,
              },
              ' Je product in gebruik, in context, in een situatie waarin iemand zichzelf herkent. Dit is wat verlangen opwekt. Een packshot laat zien wat het is. Dit laat zien waarom je het wil.',
            ],
          },
          {
            p: [
              'De meeste bedrijven hebben alleen het eerste. Daarom zien hun productpagina’s eruit als die van iedereen, en wordt er uiteindelijk op prijs vergeleken.',
            ],
          },
          {
            h: [
              'Wat wij maken',
            ],
            level: 3,
          },
          {
            p: [
              'Allebei. Packshots die voldoen aan de eisen van je platform, plus lifestyle- en sfeerbeeld waarmee je adverteert en je socials vult.',
            ],
          },
          {
            p: [
              'Welke verhouding je nodig hebt, hangt af van wat je verkoopt en waar. Dat bepalen we vooraf, niet achteraf.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert goede productfotografie op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Minder twijfel, meer bestellingen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Mensen haken af bij onduidelijkheid. Beeld dat laat zien hoe groot iets is, hoe het voelt en hoe het in het echt werkt, neemt precies de vragen weg waar iemand anders over blijft nadenken.',
              ],
              [
                {
                  text: 'Je onderscheiden van dezelfde producten elders',
                  strong: true,
                },
                {
                  br: true,
                },
                'Verkoop je iets wat ook bij anderen te krijgen is, dan is het beeld vaak het enige verschil. Dan bepaalt de foto of jij de bestelling krijgt.',
              ],
              [
                {
                  text: 'Beeld dat voldoet aan de eisen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Bol, Amazon en de meeste marketplaces stellen harde eisen aan verhouding, achtergrond en resolutie. Wij leveren het aan zoals het moet, zodat je niet alles opnieuw hoeft te laten snijden.',
              ],
              [
                {
                  text: 'Eén set, overal inzetbaar',
                  strong: true,
                },
                {
                  br: true,
                },
                'Webshop, advertenties, socials, catalogus, beurs. Uit één shoot haal je alles, mits je het vooraf goed opzet.',
              ],
              [
                {
                  text: 'Minder werk voor je klantenservice',
                  strong: true,
                },
                {
                  br: true,
                },
                'Veel vragen gaan over dingen die je gewoon had kunnen laten zien. Een goede foto scheelt mailtjes.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Eerst de beeldlijst, dan de studio.',
            text: [
              {
                p: [
                  'Zonder lijst fotografeer je wat voor de hand ligt, en kom je er later achter dat precies dat ene aanzicht ontbreekt. We bepalen samen welke producten, welke aanzichten en welk type beeld je nodig hebt. Waar komen de foto’s te staan, welke eisen stelt dat platform, en hoeveel lifestyle wil je ernaast? Daar rolt een concrete schotlijst uit.',
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
            title: 'De opnamedag',
            text: [
              {
                p: [
                  'In de studio of op locatie, afhankelijk van het product. Packshots en verkoopbeeld in dezelfde dag, zodat de stijl klopt en je niet twee keer hoeft op te bouwen. Grote of kwetsbare producten fotograferen we bij jullie.',
                ],
              },
            ],
            image: {
              src: hapjesImg,
              alt: 'Hapjes worden geserveerd tijdens een bedrijfsevent.',
            },
          },
          {
            number: '03',
            title: 'Bewerking en oplevering',
            text: [
              {
                p: [
                  'Je krijgt de bewerkte set, gesorteerd per product en per toepassing. In de verhoudingen en resoluties die je nodig hebt, klaar om te uploaden.',
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
          label: 'Plan een gesprek',
          href: '/business/offerte-aanvragen',
          accent: 'yellow',
        },
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'PRODUCTFOTOGRAFIE MET AI',
        gradient: 'yellow',
        intro: [
          {
            h: [
              'Varianten zonder tien keer de studio in.',
            ],
            level: 3,
          },
          {
            p: [
              'Heb je hetzelfde product in twaalf kleuren? Of wil je het tonen in een omgeving waar je nooit kunt fotograferen?',
            ],
          },
          {
            p: [
              'Met AI maken we varianten en achtergronden op basis van echte opnames van jouw product. Dat scheelt opnamedagen en maakt beeld mogelijk dat anders op de begroting sneuvelt.',
            ],
          },
          {
            p: [
              'Niet voor elk product de juiste keuze. Draait het om materiaal, textuur of vakmanschap dat je moet voelen, dan is echte fotografie geloofwaardiger. We kijken per product wat het verhaal dient.',
            ],
          },
          {
            p: [
              {
                text: 'Meer over AI lees je hier.',
                href: '/business/content/ai',
              },
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
            question: 'Wat is een packshot?',
            answer: [
              {
                p: [
                  'Een packshot is een foto van je product op een schone, vaak witte achtergrond, zonder afleiding. Bedoeld om duidelijk te laten zien wat je koopt. Webshops en marketplaces stellen dit verplicht. Het verschil met lifestyle-fotografie: een packshot informeert, lifestyle verkoopt. Je hebt ze allebei nodig.',
                ],
              },
            ],
          },
          {
            question: 'Wat kost productfotografie?',
            answer: [
              {
                p: [
                  'Meestal rekenen we per project in plaats van per product. De prijs hangt af van het aantal producten en aanzichten, of het packshots of lifestyle-beeld zijn, en hoeveel nabewerking erbij komt. Vraag een offerte aan en je krijgt een onderbouwd bedrag.',
                ],
              },
            ],
          },
          {
            question: 'Voldoen de foto’s aan de eisen van bol en andere marketplaces?',
            answer: [
              {
                p: [
                  'Ja. We leveren in de juiste verhouding, resolutie en achtergrond, afgestemd op het platform waar je verkoopt. Zeg vooraf waar je actief bent, dan nemen we die eisen mee in de opzet.',
                ],
              },
            ],
          },
          {
            question: 'Moeten we de producten opsturen?',
            answer: [
              {
                p: [
                  'Voor kleinere producten is dat meestal het makkelijkst. Dan fotograferen we in een gecontroleerde omgeving. Is het product groot, zwaar of kwetsbaar, dan komen wij naar jullie toe.',
                ],
              },
            ],
          },
          {
            question: 'Hoeveel foto’s krijgen we per product?',
            answer: [
              {
                p: [
                  'Dat spreken we vooraf af. Voor een webshop werkt meestal een serie van drie tot zes aanzichten plus een detailopname. Verkoop je op marketplaces, dan zijn er soms minimumeisen waar we rekening mee houden.',
                ],
              },
            ],
          },
          {
            question: 'Kunnen jullie ook productvideo maken op dezelfde dag?',
            answer: [
              {
                p: [
                  'Ja, en dat is vaak de slimste keuze. De opbouw staat er toch, het product ligt er toch. Dat scheelt een aparte shoot en de stijl sluit op elkaar aan.',
                ],
              },
            ],
          },
          {
            question: 'Hoe zit het met de rechten op de foto’s?',
            answer: [
              {
                p: [
                  'Jij koopt de gebruiksrechten van de fotos. Jij mag ze dus inzetten en gebruiken zoals je wilt. Worden ze met derden gedeeld dan gelden er andere regels.',
                ],
              },
            ],
          },
          {
            question: 'Hoe snel krijgen we de beelden?',
            answer: [
              {
                p: [
                  'Een eerste selectie binnen enkele dagen, de volledige bewerkte set binnen de afgesproken termijn. Heb je een lancering of een deadline, zeg dat vooraf, dan plannen we daarop terug.',
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
          title: 'Hoe ziet jullie productpagina eruit naast die van de concurrent?',
          text: [
            {
              p: [
                'Als het antwoord “ongeveer hetzelfde” is, hebben we iets te bespreken.',
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
