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
  links: cases.map((item) => ({ label: item.title, href: caseUrl(item.slug) })),
});

export const page: PageData = {
  slug: 'sitemap',
  title: 'Sitemap',
  meta: {
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
              { label: 'Over ons', href: '/over' },
              { label: 'Over Mike', href: '/over/mike' },
              { label: 'Cases (Ons werk)', href: '/cases' },
              { label: 'Contact', href: '/contact' },
              { label: 'Offerte aanvragen', href: '/offerte-aanvragen' },
            ],
          },
          {
            title: 'Events',
            links: [
              { label: 'Events Overzicht', href: '/events' },
              { label: 'Eventvideos', href: '/events/eventvideos' },
              { label: 'Aftermovies', href: '/events/aftermovie' },
              { label: 'Promovideos', href: '/events/promovideos' },
              { label: 'Social Content', href: '/events/social-content' },
              { label: 'Fotografie', href: '/events/fotografie' },
            ],
          },
          {
            title: 'Zakelijke Events',
            links: [
              {
                label: 'Zakelijke Events Overzicht',
                href: '/zakelijke-events',
              },
              { label: 'Promovideo', href: '/zakelijke-events/promovideo' },
              { label: 'Casevideo', href: '/zakelijke-events/casevideo' },
              { label: 'Aftermovie', href: '/zakelijke-events/aftermovie' },
              { label: 'Fotografie', href: '/zakelijke-events/fotografie' },
            ],
          },
          {
            title: 'Artiesten',
            links: [
              { label: 'Artiesten Overzicht', href: '/artiesten' },
              { label: 'Artiestenpromo', href: '/artiesten/artiestenpromo' },
              { label: 'Bandpromo', href: '/artiesten/bandpromo' },
              { label: 'Recap', href: '/artiesten/recap' },
              { label: 'Social Content', href: '/artiesten/social-content' },
              { label: 'Fotografie', href: '/artiesten/fotografie' },
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
