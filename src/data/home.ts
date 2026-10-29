/**
 * Homepage-inhoud. Teksten letterlijk van www.weareboldproductions.com.
 * Componenten bevatten geen teksten; alles komt hier vandaan.
 */
import type { HeroProps } from '../components/sections/Hero.astro';
import type { LogoMarqueeProps } from '../components/sections/LogoMarquee.astro';
import type { IntroHighlightProps } from '../components/sections/IntroHighlight.astro';
import type { TimelineProps } from '../components/sections/Timeline.astro';
import type { TestimonialsProps } from '../components/sections/Testimonials.astro';
import type { PolaroidStackProps } from '../components/sections/PolaroidStack.astro';
import type { TextMediaProps } from '../components/sections/TextMedia.astro';
import polaroid1 from '../assets/images/polaroids/polaroid-1.jpg';
import polaroid2 from '../assets/images/polaroids/polaroid-2.jpg';
import polaroid3 from '../assets/images/polaroids/polaroid-3.jpg';
import polaroid4 from '../assets/images/polaroids/polaroid-4.jpg';
import polaroid5 from '../assets/images/polaroids/polaroid-5.jpg';
import polaroid6 from '../assets/images/polaroids/polaroid-6.jpg';
import polaroid7 from '../assets/images/polaroids/polaroid-7.jpg';
import timelineVoor from '../assets/images/home/tijdlijn-voor-legends-of-rock.jpg';
import timelineTijdens from '../assets/images/home/tijdlijn-tijdens-gitarist.jpg';
import timelineNa from '../assets/images/home/tijdlijn-na-festivalgangers.jpg';
import heroImage from '../assets/images/home/hero-festival-optreden.jpg';
import { clientLogos, trustedByTitle } from './logos';
import { pickTestimonials } from './testimonials';

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
  primaryCta: { label: 'Bold to action', href: '/events/offerte-aanvragen' },
  secondaryCta: { label: 'Waarom zou je?', href: '#first-section', icon: 'arrow-down' },
  image: {
    src: heroImage,
    alt: 'Actiefoto van een live-optreden tijdens een festival. Vastgelegd door Bold Productions, contentspecialist voor Events & Artiesten.',
  },
  video: { id: '1180112930', hash: '2fa6fd18b8', title: 'Sfeervideo Bold Productions' },
};

export const trustedBy: LogoMarqueeProps = {
  title: trustedByTitle,
  logos: clientLogos,
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
        ' van je event zo belangrijk. Je wil op de juiste ',
        { text: 'momenten,', strong: true },
        ' op de juiste ',
        { text: 'plekken', strong: true },
        ' bij de juiste ',
        { text: 'mensen', strong: true },
        ' op het netvlies komen. Voor, tijdens en na het event.',
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
      cta: { label: 'Bekijk hoe', href: '/events/organisatoren/promovideos' },
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
      cta: { label: 'Bekijk hoe', href: '/events/organisatoren/eventvideos' },
    },
    {
      number: '03',
      title: 'Na je event',
      text: [{ p: ['We laten de energie voortleven. Zo bind je bestaande bezoekers. En trigger je alvast nieuwe.'] }],
      image: {
        src: timelineNa,
        alt: 'Sfeerbeeld van festivalgangers. Vastgelegd door Bold Productions contentspecialist voor Events & Artiesten.',
      },
      cta: { label: 'Bekijk hoe', href: '/events/organisatoren/aftermovie' },
    },
  ],
  cta: { label: 'Make it Bold. Sell Tickets', href: '/events/offerte-aanvragen', accent: 'yellow' },
};

export const testimonials: TestimonialsProps = {
  eyebrow: 'Dit deden we',
  title: 'En dit vonden ze',
  gradient: 'orange',
  carousel: { label: 'Testimonials', prevLabel: 'Vorige', nextLabel: 'Volgende' },
  items: pickTestimonials(['reinier-peters', 'ralph-buisman', 'merijn-peters', 'manon-diks', 'dorpsfeest-wehl']),
};

export const backstage: PolaroidStackProps = {
  eyebrow: 'Bold backstage',
  title: 'We kennen onze plek',
  gradient: 'green',
  photos: [
    { src: polaroid1, alt: 'Cameraman van Bold Productions filmt backstage in roze licht.' },
    { src: polaroid2, alt: 'Dronepiloot van Bold Productions met FPV-bril in oranje licht.' },
    { src: polaroid3, alt: 'Cameraman filmt een rapper op een podium met vuureffecten.' },
    { src: polaroid4, alt: 'Twee fotografen van Bold Productions lopen met hun camera’s over een festivalterrein.' },
    { src: polaroid5, alt: 'Crew van Bold Productions poseert backstage met een artiest.' },
    { src: polaroid6, alt: 'Selfie van drie crewleden van Bold Productions in blauw licht.' },
    { src: polaroid7, alt: 'Cameraman van Bold Productions voor het podium tijdens een concert in groen licht.' },
  ],
};

export const micDrop: TextMediaProps = {
  title: "Mike's mic drop",
  gradient: 'yellow',
  body: [
    {
      p: [
        { text: '"De meeste content rondom events laat zien hoe druk het was. Maar niet hoe het voelde toen alles samenkwam. Terwijl dát juist het moment is waar mensen over napraten. Waar kaartverkoop op volgt. Waar sponsors trots van worden. Waar je publiek op terugkomt.', em: true },
        { br: true },
        { br: true },
        { text: 'Het gaat niet om zoveel mogelijk willen vastleggen. Het gaat om het vangen van de juiste momenten. Als dat lukt, hoef je niet uit te leggen hoe vet het was. Dan zien mensen het vanzelf. Of beter nog, dan ', em: true },
        { text: 'voelen', strong: true, em: true },
        { text: ' ze het.', em: true },
        { br: true },
        { br: true },
        { text: 'Bij Bold Productions hebben we oog voor die momenten. En de uitrusting om ze te vereeuwigen. Zodat jouw event voortleeft.”', em: true },
        { br: true },
        { br: true },
        { text: '- Mike Ampting', strong: true },
        { br: true },
        '(',
        { text: 'Creative Director - Bold Productions)', em: true },
      ],
    },
  ],
  cta: { label: 'Mail Mike', href: 'mailto:mike@weareboldproductions.com', accent: 'yellow' },
  media: { type: 'vimeo', id: '1180112439', hash: '5399f03c15', title: 'Video Mike Ampting, Bold Productions' },
  triangles: true,
};
