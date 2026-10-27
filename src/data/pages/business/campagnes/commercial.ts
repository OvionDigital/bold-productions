/**
 * /business/campagnes/commercial — teksten letterlijk van boldproductions.webflow.io/business/campagnes/commercial (oktober 2026).
 * Beelden zelf gekozen (Webflow had nog placeholders). Daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../../../lib/sections';
import padelImg from '../../../../assets/images/cases/doetinchemse-kade-feesten/kade-feesten-aankondigingsvideo-final-00-00-09-14-still011.jpg';
import portretVrouwImg from '../../../../assets/images/cases/doetinchemse-kade-feesten/spot-seq-00-40-03-01-still001.jpg';
import planningImg from '../../../../assets/images/promotievideo-laten-maken/hf-20260430-185051-34c53542-a978-4ca5-a04f-e7647905bc63.jpg';
import setImg from '../../../../assets/images/events/tijdlijn-pre-productie.jpg';
import cameramanImg from '../../../../assets/images/events/tijdlijn-productie.jpg';
import visagieImg from '../../../../assets/images/cases/waterschap-rijn-ijssel/mike-waterschap-huisfeestje-101.jpg';
import formImg from '../../../../assets/images/events/mike-aftermovie.jpg';

export const page: PageData = {
  slug: 'business/campagnes/commercial',
  title: 'Commercial',
  meta: {
    title: 'Commercial laten maken? TV, online en social | Bold Productions',
    description: 'Een commercial laten maken die mensen niet wegklikken. Bold bedenkt een concept en werkt dat helemaal uit. Voor tv, online en social. Bekijk onze aanpak.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Een commercial laten maken',
        titleAccent: 'die mensen uitkijken.',
        eyebrow: 'Mogen ze weer leuk zijn? Wij vinden van wel.',
        primaryCta: {
          label: 'Bel Bold',
          href: 'tel:+31623328655',
        },
        secondaryCta: {
          label: 'Lees meer',
          href: '#first-section',
          icon: 'arrow-down',
        },
        image: {
          src: padelImg,
          alt: 'Padelspeler in actie, still uit een video van Bold Productions.',
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
        title: 'Je wilt een commercial laten maken.\nIs dat eigenlijk de juiste vraag?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Vaak wel. Soms blijkt de echte vraag iets anders te zijn: we worden niet gevonden, we worden wel gezien maar niet onthouden, of ons product is prima maar niemand begrijpt waarom hij het nodig heeft. Dat laatste los je niet op met meer zendtijd.',
            ],
          },
          {
            p: [
              'Dus checken we eerst of een commercial het juiste middel is. En daarna wat hij moet zeggen en teweeg moet brengen.',
            ],
          },
        ],
        media: {
          type: 'image',
          src: portretVrouwImg,
          alt: 'Lachende vrouw aan het water, still uit een video van Bold Productions.',
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
              'Wat een commercial anders maakt',
            ],
            level: 3,
          },
          {
            p: [
              'Een commercial is een korte video die je inzet om iets te verkopen. Op tv, voor een pre-roll op YouTube, als advertentie op Instagram of TikTok, of in de bioscoop. Meestal tussen de zes en zestig seconden.',
            ],
          },
          {
            p: [
              'Wat een commercial anders maakt dan de rest van je video\'s: niemand heeft erom gevraagd. Je bedrijfsfilm staat op je eigen site, je klantverhaal stuur je naar iemand die ernaar vroeg. Een commercial onderbreekt. Hij valt binnen tussen twee dingen die iemand aan het kijken is, en die iemand heeft een knop om ervan af te komen.',
            ],
          },
          {
            p: [
              'Daarmee is het hele spel anders. Je hebt geen twee minuten, je hebt twee seconden. En in die twee seconden win je niet met betere belichting of een scherpere camera. Je wint met een idee.',
            ],
          },
          {
            h: [
              'Waarom de meeste reclamefilms niet werken',
            ],
            level: 4,
          },
          {
            p: [
              'Omdat ze netjes zijn. Logo in beeld, propositie uitgesproken, call-to-action erachteraan. Alles klopt en niemand onthoudt het.',
              {
                br: true,
              },
              'Je verkoopt je product niet door mensen ermee te vervelen. Een commercial die werkt, doet iets onverwachts. Niet harder of flitsender, want daar is iedereen al mee bezig. Maar anders dan de kijker verwacht, zodat hij even niet wegkijkt.',
              {
                br: true,
              },
              'Dat bedenken is moeilijker dan het filmen. Daarom besteden wij er ook meer tijd aan.',
            ],
          },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Wat levert een commercial laten maken op?',
        gradient: 'yellow',
        intro: [
          {
            ul: [
              [
                {
                  text: 'Onthouden worden in plaats van alleen gezien worden',
                  strong: true,
                },
                {
                  br: true,
                },
                'Bereik kun je kopen. Een plek in iemands hoofd niet. Dat verschil bepaalt of je mediabudget rendeert of verdampt.',
              ],
            ],
            spaced: true,
          },
          {
            ul: [
              [
                {
                  text: 'Meer resultaat uit hetzelfde budget',
                  strong: true,
                },
                {
                  br: true,
                },
                'Een sterke commercial presteert beter per euro dan een middelmatige die je vaker vertoont. De creatie is de goedkoopste knop om aan te draaien.',
              ],
              [
                {
                  text: 'Eén idee, alle kanalen',
                  strong: true,
                },
                {
                  br: true,
                },
                'We bouwen de commercial zo op dat er cutdowns uit komen die werken op YouTube, Meta, TikTok en waar je verder ook zit. Niet achteraf croppen, maar vooraf meegenomen.',
              ],
              [
                {
                  text: 'Een campagne die ergens op rust',
                  strong: true,
                },
                {
                  br: true,
                },
                'Heb je al een brandfilm of een duidelijk merkverhaal? Dan bouwt de commercial daarop verder in plaats van los zand te zijn.',
              ],
              [
                {
                  text: 'Iets waar je concurrent niet bij kan',
                  strong: true,
                },
                {
                  br: true,
                },
                'Dezelfde camera’s, dezelfde montage, hetzelfde mediabureau. Allemaal te huur. Het idee niet.',
              ],
            ],
            spaced: true,
          },
        ],
        steps: [
          {
            number: '01',
            title: 'Begin bij het kanaal. Niet bij het script.',
            text: [
              {
                p: [
                  'Een commercial van dertig seconden maken en hem daarna proberen te persen in een advertentie die er zes nodig heeft, gaat niet werken. Toch gebeurt het vaker wel dan niet.',
                ],
              },
              {
                p: [
                  'Dus draaien we het om.',
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
            title: 'Doel, doelgroep en kanaal',
            text: [
              {
                p: [
                  'Waar gaat dit draaien en hoeveel aandacht heb je daar? Wie moet het zien en wat moet die daarna doen? Hoe groot is het mediabudget? Dat laatste klinkt als een vraag voor later, maar het bepaalt hoeveel versies je nodig hebt en dus hoe we de productie opzetten.',
                ],
              },
            ],
            image: {
              src: setImg,
              alt: 'Team Bold Productions tijdens een opname op een filmset.',
            },
          },
          {
            number: '03',
            title: 'Creatief concept',
            text: [
              {
                p: [
                  'Hier zit het werk. We zoeken een invalshoek die jouw concurrentie over het hoofd ziet. Niet een veilig voorstel, maar een bold concept. Het gekozen idee werken we visueel uit, inclusief de redenering erachter. Zo kun je het intern verdedigen bij mensen die er niet bij waren. Willen jullie dat wij het pitchen aan directie of het team, dan doen we dat.',
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
          label: 'Plan een gesprek',
          href: '/business/offerte-aanvragen',
          accent: 'yellow',
        },
      },
    },
    {
      type: 'textMedia',
      props: {
        title: 'Wat kost een commercial laten maken?',
        gradient: 'orange',
        body: [
          {
            p: [
              'Dat loopt enorm uiteen, en iedereen die je op een website een vast bedrag voorschotelt, verkoopt je een format.',
            ],
          },
          {
            p: [
              'Vier dingen bepalen de prijs;',
            ],
          },
          {
            ul: [
              [
                {
                  text: 'Het aantal draaidagen',
                  strong: true,
                },
                {
                  br: true,
                },
                'Eén locatie met een kleine crew is een andere rekensom dan drie dagen met acteurs en licht.',
              ],
            ],
          },
          {
            ul: [
              [
                {
                  text: 'Cast en locatie',
                  strong: true,
                },
                {
                  br: true,
                },
                'Professionele acteurs en een gehuurde set zijn vaak de grootste post. Soms onmisbaar, soms te vermijden met een slim concept.',
              ],
              [
                {
                  text: 'Het aantal versies',
                  strong: true,
                },
                {
                  br: true,
                },
                'Cutdowns uit dezelfde productie zijn relatief goedkoop. Losse producties per kanaal zijn dat niet.',
              ],
              [
                {
                  text: 'Het creatieve concept',
                  strong: true,
                },
                {
                  br: true,
                },
                'Hier gaat de meeste tijd in zitten, en dat is geen bijzaak maar de kern. Een idee bedenken waar je concurrent nog niet aan gedacht heeft, kost langer dan het filmen ervan. Hoe meer het concept moet doen, hoe zwaarder deze post weegt. En het is precies het deel dat bepaalt of de rest van je budget iets oplevert.',
              ],
            ],
            spaced: true,
          },
        ],
        cta: {
          label: 'Ik wil een commercial',
          href: '/business/offerte-aanvragen',
        },
        media: {
          type: 'image',
          src: visagieImg,
          alt: 'Visagiste maakt iemand op voor een opname.',
        },
        triangles: true,
      },
    },
    {
      type: 'faq',
      props: {
        title: 'Veelgestelde vragen',
        items: [
          {
            question: 'Hoe lang moet een commercial zijn?',
            answer: [
              {
                p: [
                  'Dat bepaalt het kanaal. Pre-roll op YouTube vraagt iets anders dan een post op TikTok of een spot op televisie. Meestal maken we één hoofdversie plus cutdowns van vijftien, tien en zes seconden. Die laatste is het lastigst en daar denken we dus op voorhand over na.',
                ],
              },
            ],
          },
          {
            question: 'Regelen jullie ook de mediaplaatsing?',
            answer: [
              {
                p: [
                  'Nee, dat doen we niet. We werken wel graag samen met je mediabureau of je eigen marketingteam, want hun plan bepaalt wat wij moeten opleveren. Hoe eerder die partij aan tafel zit, hoe beter onze content aansluit.',
                ],
              },
            ],
          },
          {
            question: 'Hoe zit het met muziek, stemmen en acteurs?',
            answer: [
              {
                p: [
                  'Muziekrechten, voice-overs en acteurs regelen we en zetten we vooraf in de offerte, inclusief hoe lang en waar je ze mag gebruiken. Dat laatste wordt vaak vergeten en levert een jaar later gedoe op. Bij ons staat het op papier.',
                ],
              },
            ],
          },
          {
            question: 'Wij hebben geen groot mediabudget. Heeft een commercial dan zin?',
            answer: [
              {
                p: [
                  'Soms wel, soms niet. Met een klein budget is een scherp idee relatief nog belangrijker, want je hebt minder herhalingen om het goed te maken. Is het budget echt krap, dan is doorlopende social content vaak verstandiger.',
                ],
              },
            ],
          },
          {
            question: 'Kan dit ook met AI?',
            answer: [
              {
                p: [
                  'Ja, helemaal of gedeeltelijk. Voor sommige ideeën is het de enige betaalbare manier om iets te laten zien wat je anders nooit kunt filmen. Voor andere is het juist de verkeerde keuze omdat het afstandelijk aanvoelt. We kijken per concept wat het verhaal dient, niet wat het snelst is. AI is een middel, niet het doel bij ons.',
                ],
              },
            ],
          },
          {
            question: 'Hoe snel kan een commercial klaar zijn?',
            answer: [
              {
                p: [
                  'Reken op zes tot tien weken van eerste gesprek tot oplevering. Het idee kost doorgaans meer tijd dan de draaidag. We gaan een uitdaging niet uit de weg. Dus heb je een krappe deadline, zijn wij er.',
                ],
              },
            ],
          },
          {
            question: 'Krijgen we meerdere concepten te zien?',
            answer: [
              {
                p: [
                  'Nee, we werken er één helemaal uit. Dat doen we bewust. Drie halve ideeën naast elkaar leggen klinkt als meer keuze, maar in de praktijk kies je dan het veiligste en niemand heeft er genoeg over nagedacht. Wij kiezen de richting die volgens ons het beste werkt en bouwen die compleet uit, inclusief de redenering erachter. Ben je het er niet mee eens, dan horen we dat graag en gaan we terug naar de tekentafel.',
                ],
              },
            ],
          },
          {
            question: 'Wat kost het om een commercial te laten maken?',
            answer: [
              {
                p: [
                  'Dat hangt af van het aantal draaidagen, cast en locatie, de rechten op muziek en stemmen, en hoeveel versies je nodig hebt. Een online commercial zit in een heel andere orde dan een tv-spot met acteurs. Vraag een offerte aan en je krijgt een onderbouwd bedrag in plaats van een gemiddelde.',
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
          title: 'Klaar voor een commercial?',
          text: [
            {
              p: [
                'We reageren snel, beloofd.',
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
