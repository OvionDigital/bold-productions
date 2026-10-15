/**
 * /sitemap — overzicht van alle pagina's, zonder hero: kruimelpad, kop en linkgroepen
 * (LinkGroups). Labels van de live sitemap; de casegroep wordt automatisch gevuld met
 * alle cases (ook in Sanity), juridische pagina's zijn toegevoegd.
 */
import type { PageData } from '../../lib/sections';
import type { LinkGroup } from '../../components/sections/LinkGroups.astro';
import { cases, caseUrl } from '../cases';

/** Alle cases, in de volgorde van het casesoverzicht */
export const casesLinkGroup = (title: string): LinkGroup => ({
  title,
  auto: 'cases',
  links: cases.map((item) => ({ label: item.title, href: caseUrl(item) })),
});

export const page: PageData = {
  slug: 'sitemap',
  title: 'Sitemap',
  meta: {
    schema: { type: 'webpage', relation: 'publisher' },
    title: 'Sitemap',
    description: "Een overzicht van alle pagina's op weareboldproductions.com.",
  },
  sections: [
    { type: 'breadcrumbs' },
    {
      type: 'linkGroups',
      props: {
        eyebrow: 'Zoek & vind een pagina.',
        title: 'Sitemap',
        titleAs: 'h1',
        gradient: 'orange',
        groups: [
          {
            title: 'Algemeen',
            links: [
              { label: 'Home', href: '/' },
              { label: 'Over ons', href: '/events/over-bold' },
              { label: 'Over Mike', href: '/events/over-bold/mike' },
              { label: 'Cases (Ons werk)', href: '/events/cases' },
              { label: 'Contact', href: '/events/contact' },
              { label: 'Offerte aanvragen', href: '/events/offerte-aanvragen' },
            ],
          },
          {
            title: 'Events',
            links: [
              { label: 'Events Overzicht', href: '/events/organisatoren' },
              { label: 'Eventvideos', href: '/events/organisatoren/eventvideos' },
              { label: 'Aftermovies', href: '/events/organisatoren/aftermovie' },
              { label: 'Promovideos', href: '/events/organisatoren/promovideos' },
              { label: 'Social Content', href: '/events/organisatoren/social-content' },
              { label: 'Fotografie', href: '/events/organisatoren/fotografie' },
            ],
          },
          {
            title: 'Zakelijke Events',
            links: [
              {
                label: 'Zakelijke Events Overzicht',
                href: '/events/zakelijke-events',
              },
              { label: 'Promovideo', href: '/events/zakelijke-events/promovideo' },
              { label: 'Casevideo', href: '/events/zakelijke-events/casevideo' },
              { label: 'Aftermovie', href: '/events/zakelijke-events/aftermovie' },
              { label: 'Fotografie', href: '/events/zakelijke-events/fotografie' },
            ],
          },
          {
            title: 'Artiesten',
            links: [
              { label: 'Artiesten Overzicht', href: '/events/artiesten' },
              { label: 'Artiestenpromo', href: '/events/artiesten/artiestenpromo' },
              { label: 'Bandpromo', href: '/events/artiesten/bandpromo' },
              { label: 'Recap', href: '/events/artiesten/recap' },
              { label: 'Social Content', href: '/events/artiesten/social-content' },
              { label: 'Fotografie', href: '/events/artiesten/fotografie' },
            ],
          },
          {
            title: "Diensten & Landingspagina's",
            links: [
              {
                label: 'Promotievideo maken',
                href: '/promotievideo-laten-maken',
              },
              { label: 'Aftermovie maken', href: '/aftermovie-laten-maken' },
              { label: 'Trouwfilm', href: '/trouwfilm' },
              {
                label: 'Videograaf Doetinchem',
                href: '/videograaf-doetinchem',
              },
            ],
          },
          casesLinkGroup('Cases'),
          {
            title: 'Juridisch',
            links: [
              { label: 'Privacyverklaring', href: '/privacyverklaring' },
              { label: 'Cookiebeleid', href: '/cookiebeleid' },
              { label: 'Algemene voorwaarden', href: '/algemene-voorwaarden' },
            ],
          },
        ],
      },
    },
  ],
};
