/**
 * /sitemap — teksten letterlijk van www.weareboldproductions.com/sitemap.
 * Gegenereerd uit de live pagina; daarna vrij te bewerken (of in Sanity).
 */
import type { PageData } from '../../lib/sections';
import boldProductions98 from '../../assets/images/contact/bold-productions-98.jpg';

export const page: PageData = {
  slug: 'sitemap',
  title: 'Sitemap',
  meta: {
    title: 'Sitemap',
    description: "Een overzicht van alle pagina's op weareboldproductions.com.",
  },
  sections: [
    {
      type: 'hero',
      props: {
        title: 'Sitemap',
        titleAccent: '',
        eyebrow: 'Zoek & vind een pagina.',
        secondaryCta: {
          label: 'Neem contact op',
          href: '#contact-section',
          icon: 'arrow-down',
        },
        image: {
          src: boldProductions98,
          alt: 'Actiefoto van PROOST! BAND tijdens een festival. Foto gemaakt door Bold Productions, contentspecialist voor Events & Artiesten.',
        },
        accent: 'green',
      },
    },
    {
      type: 'breadcrumbs',
    },
    {
      type: 'richText',
      props: {
        content: [
          {
            h: ['Algemeen'],
            level: 3,
          },
          {
            ul: [
              [
                {
                  text: 'Home',
                  href: '/',
                },
              ],
              [
                {
                  text: 'Over ons',
                  href: '/over',
                },
              ],
              [
                {
                  text: 'Over Mike',
                  href: '/over/mike',
                },
              ],
              [
                {
                  text: 'Cases (Ons werk)',
                  href: '/cases',
                },
              ],
              [
                {
                  text: 'Contact',
                  href: '/contact',
                },
              ],
              [
                {
                  text: 'Offerte aanvragen',
                  href: '/offerte-aanvragen',
                },
              ],
            ],
          },
          {
            h: ['Events'],
            level: 3,
          },
          {
            ul: [
              [
                {
                  text: 'Events Overzicht',
                  href: '/events',
                },
              ],
              [
                {
                  text: 'Eventvideos',
                  href: '/events/eventvideos',
                },
              ],
              [
                {
                  text: 'Aftermovies',
                  href: '/events/aftermovie',
                },
              ],
              [
                {
                  text: 'Promovideos',
                  href: '/events/promovideos',
                },
              ],
              [
                {
                  text: 'Social Content',
                  href: '/events/social-content',
                },
              ],
              [
                {
                  text: 'Fotografie',
                  href: '/events/fotografie',
                },
              ],
            ],
          },
          {
            h: ['Zakelijke Events'],
            level: 3,
          },
          {
            ul: [
              [
                {
                  text: 'Zakelijke Events Overzicht',
                  href: '/zakelijke-events',
                },
              ],
              [
                {
                  text: 'Promovideo',
                  href: '/zakelijke-events/promovideo',
                },
              ],
              [
                {
                  text: 'Casevideo',
                  href: '/zakelijke-events/casevideo',
                },
              ],
              [
                {
                  text: 'Aftermovie',
                  href: '/zakelijke-events/aftermovie',
                },
              ],
              [
                {
                  text: 'Fotografie',
                  href: '/zakelijke-events/fotografie',
                },
              ],
            ],
          },
          {
            h: ['Artiesten'],
            level: 3,
          },
          {
            ul: [
              [
                {
                  text: 'Artiesten Overzicht',
                  href: '/artiesten',
                },
              ],
              [
                {
                  text: 'Artiestenpromo',
                  href: '/artiesten/artiestenpromo',
                },
              ],
              [
                {
                  text: 'Bandpromo',
                  href: '/artiesten/bandpromo',
                },
              ],
              [
                {
                  text: 'Recap',
                  href: '/artiesten/recap',
                },
              ],
              [
                {
                  text: 'Social Content',
                  href: '/artiesten/social-content',
                },
              ],
              [
                {
                  text: 'Fotografie',
                  href: '/artiesten/fotografie',
                },
              ],
            ],
          },
          {
            h: ["Diensten & Landingspagina's"],
            level: 3,
          },
          {
            ul: [
              [
                {
                  text: 'Promotievideo maken',
                  href: '/promotievideo-laten-maken',
                },
              ],
              [
                {
                  text: 'Aftermovie maken',
                  href: '/aftermovie-laten-maken',
                },
              ],
              [
                {
                  text: 'Trouwfilm',
                  href: '/trouwfilm',
                },
              ],
              [
                {
                  text: 'Videograaf Doetinchem',
                  href: '/videograaf-doetinchem',
                },
              ],
            ],
          },
          {
            h: ['Portfolio (Work)'],
            level: 3,
          },
          {
            ul: [
              [
                {
                  text: 'Doetinchemse Kade Feesten',
                  href: '/cases/doetinchemse-kade-feesten',
                },
              ],
              [
                {
                  text: 'Doorgedraaid Feestival',
                  href: '/cases/doorgedraaid-feestival',
                },
              ],
              [
                {
                  text: 'Dorpsfeest Wehl',
                  href: '/cases/dorpsfeest-wehl',
                },
              ],
              [
                {
                  text: 'Drift',
                  href: '/cases/drift',
                },
              ],
              [
                {
                  text: 'Proost Band',
                  href: '/cases/proost-band',
                },
              ],
              [
                {
                  text: 'RHB Foto',
                  href: '/cases/rhbfoto',
                },
              ],
              [
                {
                  text: 'Saxy Pianoshow',
                  href: '/cases/saxypianoshow',
                },
              ],
              [
                {
                  text: 'Superminds',
                  href: '/cases/superminds',
                },
              ],
              [
                {
                  text: 'Waterschap Rijn-IJssel',
                  href: '/cases/waterschap-rijn-ijssel',
                },
              ],
              [
                {
                  text: 'Why Go Home',
                  href: '/cases/why-go-home',
                },
              ],
            ],
          },
        ],
      },
    },
  ],
};
