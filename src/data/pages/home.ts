/**
 * Homepage (/) — keuze tussen Bold Events en Bold Business. Teksten letterlijk van
 * boldproductions.webflow.io/home-new. Slug 'home' = de homepage (src/pages/index.astro),
 * niet /home. De vorige homepage staat nu op /events (src/data/pages/events-home.ts).
 */
import type { PageData } from '../../lib/sections';
import { teamTiles } from '../team';
import { contact } from '../navigation';
import splitEvents from '../../assets/images/events/hero-hrieps-festival.jpg';
import splitBusiness from '../../assets/images/cases/mikexdeliveformule-finis-100-jaar-4.jpg';

export const page: PageData = {
  slug: 'home',
  title: 'Home',
  meta: {
    // Voorlopig: home-new heeft nog geen eigen SEO-titel en -beschrijving
    title: 'Bold Productions | Content voor events en bedrijven',
    description: 'Video en fotografie. Met Bold Events creëren we FOMO rondom jouw event, met Bold Business maken we jouw bedrijf bold in plaats van boring.',
    schema: { type: 'webpage', relation: 'publisher' },
  },
  sections: [
    {
      type: 'splitHero',
      props: {
        title: 'Bold Productions',
        halves: [
          {
            title: 'Bold Events',
            text: 'Content die je event laat leven.\nErvoor. Tijdens. Erna.',
            cta: { label: 'Buckle up', href: '/events' },
            accent: 'green',
            image: { src: splitEvents, alt: 'Publiek bij een optreden.' },
            video: { id: '1074314358', hash: '2fa6fd18b8', title: 'Bold Events achtergrondvideo' },
          },
          {
            title: 'Bold Business',
            text: 'Content voor bedrijven die bold in plaats van boring (willen) zijn.',
            cta: { label: 'Double down', href: '/business' },
            accent: 'yellow',
            image: { src: splitBusiness, alt: 'Bedrijfsevent van De Live Formule.' },
            video: { id: '1131641438', hash: '2fa6fd18b8', title: 'Bold Business achtergrondvideo' },
          },
        ],
      },
    },
    {
      type: 'introHighlight',
      props: {
        id: 'first-section',
        content: [
          {
            p: [
              'Bold Productions wordt gerund door ',
              { text: 'Mike Ampting.', strong: true },
              ' Als baby viel hij in een grote ketel met filmrollen. Nu is hij creative director, omringd door een team van videografen, fotografen en schrijvers. Met ',
              { text: 'Bold Events', strong: true },
              ' creëren ze FOMO rondom jouw event. Met ',
              { text: 'Bold Business', strong: true },
              ' maken ze jouw bedrijf, merk of product ',
              { text: 'bold', strong: true },
              ' in plaats van ',
              { text: 'boring,', strong: true },
              ' zodat je meer verkoopt.',
            ],
          },
        ],
      },
    },
    {
      type: 'textMedia',
      props: {
        title: 'Bold Events',
        gradient: 'orange',
        body: [
          {
            p: [
              'Om je event te laten slagen moet je op het juiste moment, op de juiste plekken, bij de juiste mensen op het netvlies komen. We weten wat je wanneer aan wie moet laten zien. En vooral: hóe je het laat zien. Want met clichébeelden verkoop je geen tickets.',
            ],
          },
        ],
        cta: { label: 'Bold in. Sold out.', href: '/events', accent: 'orange' },
        media: { type: 'image', src: splitEvents, alt: 'Publiek bij een optreden, vastgelegd door Bold Productions.' },
        reverse: true,
        triangles: true,
      },
    },
    {
      type: 'textMedia',
      props: {
        title: 'Bold Business',
        gradient: 'green',
        body: [
          {
            p: [
              'Jouw marketinguitdaging bekijken we nét iets anders. Daardoor vinden we een onverwachte invalshoek waarmee je de kijker verrast. Want pas als je aandacht hebt, kun je om actie vragen.',
            ],
          },
        ],
        cta: { label: 'So go Bold', href: '/business', accent: 'green' },
        media: { type: 'image', src: splitBusiness, alt: 'Bedrijfsevent van De Live Formule, vastgelegd door Bold Productions.' },
        triangles: true,
      },
    },
    {
      type: 'serviceTiles',
      props: {
        title: 'The Bold Bunch',
        gradient: 'yellow',
        variant: 'team',
        items: teamTiles({
          'rik-hendriks': 'De (FPV) piloot',
          'tom-van-heteren': 'Onze Tarzan',
        }),
      },
    },
    {
      type: 'textMedia',
      props: {
        id: 'mail-mike',
        title: 'Mail Mike',
        gradient: 'yellow',
        body: [
          {
            p: [
              'Of bel of app ‘m gewoon. Voor een offerte. Voor een ingewikkeld vraagstuk. Of gewoon voor een bak koffie. Desnoods voor een lunch (het liefst ergens waar ze tosti met kaas en grillworst hebben). ',
            ],
          },
        ],
        links: [
          { label: '+31 6 2332 86 55', href: contact.phone.href },
          { label: contact.email, href: `mailto:${contact.email}` },
          { label: 'Stuur mij een Whatsapp', href: contact.whatsapp.href },
        ],
        cta: { label: 'Mail Mike', href: `mailto:${contact.email}`, accent: 'yellow' },
        media: { type: 'vimeo', id: '1180112439', hash: '5399f03c15', title: 'Video Mike Ampting, Bold Productions' },
        triangles: true,
      },
    },
  ],
};
