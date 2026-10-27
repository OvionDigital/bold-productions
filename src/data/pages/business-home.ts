/**
 * /business — teksten letterlijk van boldproductions.webflow.io/business. Opbouw gelijk aan
 * de Events-homepage. De tijdlijn toont de vier Business-doelgroepen (tekst aangeleverd
 * oktober 2026) met links naar /business/<doelgroep>.
 * Nog niet overgenomen: de testimonials (op Webflow nog lorem ipsum; er zijn nog geen
 * Business-testimonials).
 */
import type { PageData } from '../../lib/sections';
import { clientLogos, trustedByTitle } from '../logos';
import { backstage } from '../home';
import { audienceUrl } from '../taxonomy';
import heroImage from '../../assets/images/events/hero-hrieps-festival.jpg';
import preProductie from '../../assets/images/events/tijdlijn-pre-productie.jpg';
import productie from '../../assets/images/events/tijdlijn-productie.jpg';
import postProductie from '../../assets/images/events/tijdlijn-post-productie.jpg';
import fotografie from '../../assets/images/events/dienst-fotografie.jpg';
import mikeAmpting from '../../assets/images/team/mike-ampting.jpg';

export const page: PageData = {
  slug: 'business',
  title: 'Business',
  accent: 'green',
  meta: {
    // Voorlopig: de Webflow-pagina heeft nog geen eigen SEO-titel en -beschrijving
    title: 'Bold Business | Videocontent voor bedrijven',
    description: 'Videocontent voor bedrijven die bold in plaats van boring (willen) zijn. Go Bold. Get your stuff sold.',
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Go Bold',
        titleAccent: 'Get your stuff sold',
        eyebrow: 'Videocontent voor bedrijven die bold in plaats van boring (willen) zijn.',
        primaryCta: { label: 'Go Bold', href: '/business/offerte-aanvragen' },
        secondaryCta: { label: 'Waarom zou je?', href: '#first-section', icon: 'arrow-down' },
        image: {
          src: heroImage,
          alt: 'Sfeerbeeld van het Hrieps Muziekfestival in Grijpskerke. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        video: { id: '1074314358', hash: '2fa6fd18b8', title: 'Sfeervideo Bold Business' },
        accent: 'green',
      },
    },
    { type: 'breadcrumbs' },
    { type: 'logoMarquee', props: { title: trustedByTitle, logos: clientLogos } },
    {
      type: 'introHighlight',
      props: {
        id: 'first-section',
        content: [
          {
            p: [
              'Met video kun je impact maken. Dat weet jij ook wel. Sterker nog, dat weet iedereen. Maar juist daarom is video tegenwoordig ',
              { text: 'overal', strong: true, em: true },
              { text: '.', strong: true },
              ' En dat is meteen het gevaar. Want hoe val je dan nog op in die eindeloze stroom aan content?',
            ],
          },
          { p: ['Simpel..'] },
        ],
      },
    },
    {
      type: 'timeline',
      props: {
        title: 'Less boring.\nMore Bold.',
        gradient: 'yellow',
        intro: [
          {
            p: [
              'Want met alleen mooie shots ga je niet meer winnen. Die heeft iedereen al zo vaak gezien. Dan krijg je verzadiging, of erger nog: ',
              { text: 'verveling', strong: true },
              '. En je verkoopt je product niet door mensen ermee te vervelen.',
            ],
          },
          { p: ['Daarom dagen we je uit om ', { text: 'bold', strong: true }, ' in plaats van ', { text: 'boring', strong: true }, ' te zijn. Dat doen we.. '] },
          {
            ul: [
              ['door jouw marketinguitdaging net iets anders te bekijken;'],
              ['waardoor we een creatieve invalshoek voor je video vinden die jouw concurrentie waarschijnlijk over het hoofd ziet;'],
              ['waarna je de kijker aangenaam verrast.'],
            ],
          },
          { p: ['En vanaf dát punt, is het een stuk makkelijker om aandacht om te zetten naar actie.'] },
        ],
        steps: [
          {
            number: '01',
            title: 'Fundament',
            text: [{ p: ['De essentie van je merk, visueel vastgelegd en overtuigend overgebracht.'] }],
            image: { src: preProductie, alt: 'Team Bold Productions tijdens een opname van een aftermovie.' },
            cta: { label: 'Bold als basis', href: audienceUrl('business', 'fundament') },
          },
          {
            number: '02',
            title: 'Campagnes',
            text: [{ p: ['Mogen campagnes gewoon weer leuk, slim of interessant zijn?'] }],
            image: { src: productie, alt: 'Team Bold Productions tijdens opname van Legends of Rock.' },
            cta: { label: 'Tuurlijk', href: audienceUrl('business', 'campagnes') },
          },
          {
            number: '03',
            title: 'Content',
            text: [{ p: ['Doorlopend, maar altijd aangenaam verrassend in beeld bij je doelgroep.'] }],
            image: { src: postProductie, alt: 'Mike Ampting, eigenaar van Bold Productions, tijdens het editen van videobeelden.' },
            cta: { label: 'Laat maar zien', href: audienceUrl('business', 'content') },
          },
          {
            number: '04',
            title: 'Fotografie',
            text: [{ p: ['Klopt, dat is ook content. Maar ook een vak apart.'] }],
            image: { src: fotografie, alt: 'Fotograaf van Bold Productions aan het werk.' },
            cta: { label: 'Big Shots. Bold Brands', href: audienceUrl('business', 'fotografie') },
          },
        ],
      },
    },
    { type: 'polaroidStack', props: { ...backstage, eyebrow: 'Bold in bedrijf', title: 'Achter de schermen' } },
    {
      type: 'textMedia',
      props: {
        title: 'Mike’s meegever',
        gradient: 'orange',
        body: [
          { p: [{ text: '"Stel dat je besloten hebt om bold in plaats van boring te zijn. Hoe krijg je de rest van de organisatie dan mee? ', em: true }] },
          {
            p: [
              {
                text: 'Terechte vraag, want er zijn waarschijnlijk meerdere beslissers binnen je organisatie. En mensen kiezen toch liever de comfortabele dan de gewaagde weg. ',
                em: true,
              },
            ],
          },
          { p: [{ text: 'Helpen we je ook mee. ', em: true }] },
          {
            p: [
              {
                text: 'Dat doen we door het idee kraakhelder uit te leggen en alvast een beetje visueel te maken. We laten de strategie en logica erachter zien. Wat eerst onwennig voelde, voelt nu als de logische weg. ',
                em: true,
              },
            ],
          },
          { p: [{ text: 'En natuurlijk pitchen we het idee aan jouw hele team. Dan krijg je de rest ook mee.”', em: true }] },
          { p: [{ text: 'Mike Ampting', strong: true }, { br: true }, 'Creative Director - Bold Productions'] },
        ],
        cta: { label: 'Mail Mike', href: 'mailto:mike@weareboldproductions.com', accent: 'orange' },
        media: {
          type: 'image',
          src: mikeAmpting,
          alt: 'Creative Director Mike Ampting. Eigenaar van Bold Productions contentspecialist voor Events & Artiesten.',
        },
        triangles: true,
      },
    },
  ],
};
