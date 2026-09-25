/**
 * Homepage-inhoud. Teksten letterlijk van www.weareboldproductions.com.
 * Componenten bevatten geen teksten; alles komt hier vandaan.
 */
import type { HeroProps } from '../components/sections/Hero.astro';
import type { LogoMarqueeProps } from '../components/sections/LogoMarquee.astro';
import type { IntroHighlightProps } from '../components/sections/IntroHighlight.astro';
import type { TimelineProps } from '../components/sections/Timeline.astro';
import type { TestimonialsProps } from '../components/sections/Testimonials.astro';
import testimonialReinier from '../assets/images/testimonials/reinier-peters.jpg';
import testimonialRalph from '../assets/images/testimonials/ralph-buisman.jpg';
import testimonialMerijn from '../assets/images/testimonials/merijn-peters.jpg';
import testimonialManon from '../assets/images/testimonials/manon-diks.jpg';
import testimonialDorpsfeest from '../assets/images/testimonials/dorpsfeest-wehl.jpg';
import timelineVoor from '../assets/images/home/tijdlijn-voor-legends-of-rock.jpg';
import timelineTijdens from '../assets/images/home/tijdlijn-tijdens-gitarist.jpg';
import timelineNa from '../assets/images/home/tijdlijn-na-festivalgangers.jpg';
import heroImage from '../assets/images/home/hero-festival-optreden.jpg';
import logoVunzigeDeuntjes from '../assets/logos/vunzige-deuntjes.png';
import logoProost from '../assets/logos/proost.png';
import logoZinInDeZomer from '../assets/logos/zin-in-de-zomer.png';
import logoDorpsfeestWehl from '../assets/logos/dorpsfeest-wehl.png';
import logoSoenda from '../assets/logos/soenda.webp';
import logoBospop from '../assets/logos/bospop.svg';
import logoZwarteCross from '../assets/logos/zwarte-cross.svg';
import logoDrift from '../assets/logos/drift.svg';
import logoDoorgedraaid from '../assets/logos/doorgedraaid.png';

export const meta = {
  title: 'Bold Productions | Event & Artiesten Content',
  description:
    'High-end video en fotografie voor festivals, artiesten en zakelijke events. Content met maximale impact. Get Bold.',
  // TODO: og-afbeelding lokaal zetten (live: 69f75c0061fe159a93c0a8f9_logot humbnails.jpg.jpeg)
  ogImage: undefined as string | undefined,
};

export const hero: HeroProps = {
  title: 'Video’s die je event',
  titleAccent: 'laten leven',
  eyebrow: 'Ervoor. Tijdens. Erna',
  primaryCta: { label: 'Bold to action', href: '/offerte-aanvragen' },
  secondaryCta: { label: 'Waarom zou je?', href: '#first-section', icon: 'arrow-down' },
  image: {
    src: heroImage,
    alt: 'Actiefoto van een live-optreden tijdens een festival. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
  },
  video: { id: '1180112930', hash: '2fa6fd18b8', title: 'Sfeervideo Bold Productions', loadOnMobile: true },
};

export const trustedBy: LogoMarqueeProps = {
  title: 'Vertrouwd door',
  logos: [
    { src: logoVunzigeDeuntjes, alt: 'Vunzige Deuntjes' },
    { src: logoProost, alt: 'Proost' },
    { src: logoZinInDeZomer, alt: 'Zin in de Zomer' },
    { src: logoDorpsfeestWehl, alt: 'Dorpsfeest Wehl' },
    { src: logoSoenda, alt: 'Soenda' },
    { src: logoBospop, alt: 'Bospop' },
    { src: logoZwarteCross, alt: 'Zwarte Cross' },
    { src: logoDrift, alt: 'Drift' },
    { src: logoDoorgedraaid, alt: 'Doorgedraaid' },
  ],
};

export const intro: IntroHighlightProps = {
  id: 'first-section',
  content: [
    {
      p: [
        'Je event moet slagen. Je steekt er tijd, geld en energie in. Die investeringen wil je terugverdienen. Maar mensen hebben keus. Veel keus. Agenda’s lopen snel vol.',
      ],
    },
    {
      p: [
        'Daarom is ',
        { text: 'zichtbaarheid', strong: true, em: true },
        'van je event zo belangrijk. Je wil op de juiste ',
        { text: 'momenten,', strong: true },
        'op de juiste ',
        { text: 'plekken', strong: true },
        'bij de juiste ',
        { text: 'mensen', strong: true },
        'op het netvlies komen. Voor, tijdens en na het event.',
      ],
    },
  ],
};

export const timeline: TimelineProps = {
  title: 'BOLD IN.\nSOLD OUT.',
  gradient: 'yellow',
  intro: [
    {
      p: [
        'Bold Productions weet ',
        { text: 'wat', strong: true },
        ' je ',
        { text: 'wanneer', strong: true },
        ' moet laten zien. En vooral ',
        { text: 'hóe', strong: true },
        ' je het laat zien. Want met clichébeelden krijg je mensen niet meer in beweging. Pas als je met je videocontent ',
        { text: 'Bold', strong: true },
        ' durft te zijn, kom je niet alleen op het netvlies, maar ook in harten en hoofden. En pas dan ga je..',
      ],
    },
    { ul: [['tickets verkopen;'], ['sponsoren en partners overtuigen; '], ['en bezoekers laten terugkomen. ']] },
  ],
  steps: [
    {
      number: '01',
      title: 'Voor je event',
      text: [
        { p: ['Stap-voor-stap verhogen we de spanning. Met subtiele FOMO-triggers drukken we op de juiste buttons bij je doelgroep.'] },
      ],
      image: {
        src: timelineVoor,
        alt: 'Actiefoto van een zanger die het publiek bespringt tijdens Legends of Rock. Vastgelegd door Bold Productions contentspecialist voor Events & Artiesten.',
      },
      cta: { label: 'Bekijk hoe', href: '/events/promovideos' },
    },
    {
      number: '02',
      title: 'Tijdens je event',
      text: [
        {
          p: [
            'De climax van al je werk wil je vastleggen. En meteen delen. ‘',
            { text: 'Waarom ben ik hier niet bij?', em: true },
            '’, denkt je toekomstige bezoeker.',
          ],
        },
      ],
      image: {
        src: timelineTijdens,
        alt: 'Gitarist tijdens een live-optreden. Foto door Bold Productions contentspecialist voor Events & Artiesten.',
      },
      cta: { label: 'Bekijk hoe', href: '/events/eventvideos' },
    },
    {
      number: '03',
      title: 'Na je event',
      text: [{ p: ['We laten de energie voortleven. Zo bind je bestaande bezoekers. En trigger je alvast nieuwe.'] }],
      image: {
        src: timelineNa,
        alt: 'Sfeerbeeld van festivalgangers. Vastgelegd door Bold Productions contentspecialist voor Events & Artiesten.',
      },
      cta: { label: 'Bekijk hoe', href: '/events/aftermovie' },
    },
  ],
  cta: { label: 'Make it Bold. Sell Tickets', href: '/offerte-aanvragen', accent: 'yellow' },
};

export const testimonials: TestimonialsProps = {
  eyebrow: 'Dit deden we',
  title: 'En dit vonden ze',
  gradient: 'orange',
  carousel: { label: 'Testimonials', prevLabel: 'Vorige', nextLabel: 'Volgende' },
  items: [
    {
      quote:
        'Een promo laten maken door BOLD Productions! Laagdrempelig contact met veel persoonlijke aandacht. Een supergave promo geschoten uiteindelijk met leuke mensen!',
      // Artiesten- en privénaam zijn gelijk: één keer tonen
      name: 'Reinier Peters',
      image: { src: testimonialReinier, alt: 'Reinier Peters' },
    },
    {
      quote:
        'Wanneer je next level content vraagt, maar er nog een schepje bovenop gedaan wordt. Fijn in de samenwerking, denkt volledig mee om uw event in video en zelfs fotografie nog mooier vast te leggen dan het al was.',
      name: 'Ralph Buisman',
      organisation: 'RHBFOTO',
      image: { src: testimonialRalph, alt: 'Ralph Buisman' },
    },
    {
      quote:
        'Wij hebben Bold Productions de opdracht gegeven om een bandpromo te maken en het resultaat mag er zeker zijn! Wij zijn zeer tevreden en we kijken nu al uit naar een volgende samenwerking.',
      name: 'Merijn Peters',
      organisation: 'KARAKTER',
      image: { src: testimonialMerijn, alt: 'Merijn Peters' },
    },
    {
      quote:
        'Bold snapt wat ik en de klant willen qua beeld zonder teveel te zeggen en voert dat uit in detail. Tevens zijn ze ook hele fijne jongens in de omgang! Altijd een feestje om samen te werken.',
      name: 'Manon Diks',
      organisation: 'De Live Formule',
      image: { src: testimonialManon, alt: 'Manon Diks' },
    },
    {
      quote:
        'Dankzij de foto’s en video’s leefde Dorpsfeest Wehl al weken vóór het eerste biertje. Tijdens het weekend voelden we de kracht van content.',
      organisation: 'Dorpsfeest Wehl',
      image: { src: testimonialDorpsfeest, alt: 'Dorpsfeest Wehl' },
    },
  ],
};
