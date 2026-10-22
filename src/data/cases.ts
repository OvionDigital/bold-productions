/**
 * Cases: één bron voor alle plekken waar cases verschijnen (uitgelicht, overzicht
 * /events/cases of /business/cases en de detailpagina /<soort>/cases/[slug], naar de
 * soort van de case). Volgorde = volgorde in het overzicht (zoals live).
 * Teksten letterlijk van de live site. In Sanity: documenttype 'caseStudy' met dezelfde velden.
 *
 * Een casepagina = hero (titel, intro, foto) + kruimelpad + introtekst + feitenbalk +
 * vrije secties (src/data/case-pages/<slug>.ts). Zie src/lib/cases.ts.
 */
import type { ImageMetadata } from 'astro';
import type { RemoteImage } from '../lib/sanity/image';
import type { Rich } from '../lib/rich';
import type { PageSection } from '../lib/sections';
import type { CaseGridProps } from '../components/sections/CaseGrid.astro';
import { audiences, audienceTitle, targetingOfPath, type Category, type Targeting } from './taxonomy';
import {
  introText as pluggerzXZwarteCross2026Intro,
  sections as pluggerzXZwarteCross2026Sections,
} from './case-pages/pluggerz-x-zwarte-cross-2026';
import { introText as paellaPartyIntro, sections as paellaPartySections } from './case-pages/paella-party';
import {
  introText as doetinchemseKadeFeestenIntro,
  sections as doetinchemseKadeFeestenSections,
} from './case-pages/doetinchemse-kade-feesten';
import { introText as doorgedraaidFeestivalIntro, sections as doorgedraaidFeestivalSections } from './case-pages/doorgedraaid-feestival';
import { introText as proostBandIntro, sections as proostBandSections } from './case-pages/proost-band';
import { introText as dorpsfeestWehlIntro, sections as dorpsfeestWehlSections } from './case-pages/dorpsfeest-wehl';
import { introText as supermindsIntro, sections as supermindsSections } from './case-pages/superminds';
import { introText as deLiveFormuleIntro, sections as deLiveFormuleSections } from './case-pages/de-live-formule';
import { introText as saxypianoshowIntro, sections as saxypianoshowSections } from './case-pages/saxypianoshow';
import { introText as whyGoHomeIntro, sections as whyGoHomeSections } from './case-pages/why-go-home';
import { introText as waterschapRijnIjsselIntro, sections as waterschapRijnIjsselSections } from './case-pages/waterschap-rijn-ijssel';
import { introText as rhbfotoIntro, sections as rhbfotoSections } from './case-pages/rhbfoto';
import { introText as driftIntro, sections as driftSections } from './case-pages/drift';
import pluggerzZwarteCross2026 from '../assets/images/cases/pluggerz-zwarte-cross-2026.jpg';
import boldProductionsXPaellaDinershowHorizonta from '../assets/images/cases/bold-productions-x-paella-dinershow-horizontaal-17.jpg';
import kadeFeestenAankondigingsvideoFinal000001 from '../assets/images/cases/kade-feesten-aankondigingsvideo-final-00-00-01-07-still010.jpg';
import mikeDoorgedraaidLogo1204 from '../assets/images/cases/mike-doorgedraaid-logo-1-204.jpg';
import boldProductions59 from '../assets/images/cases/bold-productions-59.jpg';
import rhbfoto2 from '../assets/images/cases/rhbfoto-2.jpg';
import img240920212916EspritIctJitskeseckel from '../assets/images/cases/240920212916-esprit-ict-jitskeseckel.jpg';
import mikexdeliveformuleFinis100Jaar4 from '../assets/images/cases/mikexdeliveformule-finis-100-jaar-4.jpg';
import bold40jaarhuwelijk169 from '../assets/images/cases/bold-40jaarhuwelijk-169.jpg';
import boldProductionsWhyGoHomeAhoy15 from '../assets/images/cases/bold-productions-why-go-home-ahoy-15.jpg';
import mikeWaterschapHuisfeestje194 from '../assets/images/cases/mike-waterschap-huisfeestje-194.jpg';
import zdhFedbal150 from '../assets/images/cases/zdh-fedbal-150.jpg';
import spotSeq00273208Still012 from '../assets/images/cases/spot-seq-00-27-32-08-still012.jpg';


/**
 * category/audience/services (zie data/taxonomy.ts): de hoofdindeling, bepaalt het adres.
 * `targets`: alle indelingen (Events en/of Business, per soort één of meer doelgroepen met hun
 * diensten), de eerste = de hoofdindeling. Leeg = alleen de hoofdindeling.
 */
export interface Case extends Targeting {
  targets?: Targeting[];
  slug: string;
  title: string;
  /** Korte vraag/intro onder de titel (kaart en hero) */
  intro: string;
  image: { src: ImageMetadata | RemoteImage; alt: string };
  client?: string;
  /** Zoals live, bijv. '6-7-2025' */
  date?: string;
  /** Vimeo-achtergrond in de hero (optioneel) */
  video?: { id: string; hash?: string; title: string };
  meta?: { title: string; description: string };
  /** Grote introtekst onder de hero (oplichtend bij scrollen) */
  introText?: Rich;
  /** Secties onder de feitenbalk */
  sections?: PageSection[];
}

/** Vaste teksten van de casepagina's */
export const caseLabels = {
  heroCta: 'Lees meer',
  client: 'Klant',
  date: 'Datum',
  audience: 'Doelgroep',
  service: 'Dienst',
};

export const cases: Case[] = [
  {
    slug: 'pluggerz-x-zwarte-cross-2026',
    title: 'Pluggerz x Zwarte Cross 2026',
    intro: 'Hoe verkoop je oordoppen aan mensen die niets willen missen?',
    image: {
      src: pluggerzZwarteCross2026,
      alt: '',
    },
    category: 'events',
    audience: 'organisatoren',
    services: ['Eventvideo', 'Fotografie', 'Social content'],
    client: 'Pluggerz',
    date: '19-7-2026',
    meta: {
      title: 'Pluggerz x Zwarte Cross 2026',
      description: 'Hoe verkoop je oordoppen aan mensen die niets willen missen?',
    },
    introText: pluggerzXZwarteCross2026Intro,
    sections: pluggerzXZwarteCross2026Sections,
  },
  {
    slug: 'paella-party',
    title: 'Paella Party',
    intro: 'Uitverkocht. Vóór er een hap gegeten was.',
    image: {
      src: boldProductionsXPaellaDinershowHorizonta,
      alt: '',
    },
    category: 'events',
    audience: 'organisatoren',
    services: ['Promovideo', 'Fotografie', 'Aftermovie'],
    client: 'La Terazza & DOS Events',
    date: '13-06-2026',
    meta: {
      title: 'Paella Party',
      description: 'Uitverkocht. Vóór er een hap gegeten was.',
    },
    introText: paellaPartyIntro,
    sections: paellaPartySections,
  },
  {
    slug: 'doetinchemse-kade-feesten',
    title: 'Doetinchemse Kade Feesten',
    intro: 'Een festival van 8 dagen promoten met één video.',
    image: {
      src: kadeFeestenAankondigingsvideoFinal000001,
      alt: '',
    },
    category: 'events',
    audience: 'organisatoren',
    services: ['Promovideo'],
    client: 'PIMM',
    date: '24-4-2026',
    meta: {
      title: 'Doetinchemse Kade Feesten',
      description: 'Een festival van 8 dagen promoten met één video.',
    },
    introText: doetinchemseKadeFeestenIntro,
    sections: doetinchemseKadeFeestenSections,
  },
  {
    slug: 'doorgedraaid-feestival',
    title: 'Doorgedraaid Feestival',
    intro: 'Van content die niemand raakte naar beelden die massaal werden gedeeld.',
    image: {
      src: mikeDoorgedraaidLogo1204,
      alt: '',
    },
    category: 'events',
    audience: 'organisatoren',
    services: ['Aftermovie', 'Fotografie'],
    client: 'Doorgedraaid Feestival',
    date: '27-04-2025',
    meta: {
      title: 'Doorgedraaid Feestival',
      description: 'Van content die niemand raakte naar beelden die massaal werden gedeeld.',
    },
    introText: doorgedraaidFeestivalIntro,
    sections: doorgedraaidFeestivalSections,
  },
  {
    slug: 'proost-band',
    title: 'Proost! Band',
    intro: 'Van lokale favoriet naar boekingen op festivals door heel Nederland.',
    image: {
      src: boldProductions59,
      alt: '',
    },
    category: 'events',
    audience: 'artiesten',
    services: ['Bandpromo'],
    client: 'Proost!',
    date: '4-11-2025',
    meta: {
      title: 'Proost! Band',
      description: 'Van lokale favoriet naar boekingen op festivals door heel Nederland.',
    },
    introText: proostBandIntro,
    sections: proostBandSections,
  },
  {
    slug: 'dorpsfeest-wehl',
    title: 'Dorpsfeest Wehl',
    intro: 'Het hele dorp in beweging. Voor, tijdens en na het feest.',
    image: {
      src: rhbfoto2,
      alt: '',
    },
    category: 'events',
    audience: 'organisatoren',
    services: ['Aftermovie', 'Fotografie', 'Eventvideo'],
    client: 'Dorpsfeest Wehl',
    date: '6-7-2025',
    meta: {
      title: 'Dorpsfeest Wehl',
      description: 'Het hele dorp in beweging. Voor, tijdens en na het feest.',
    },
    introText: dorpsfeestWehlIntro,
    sections: dorpsfeestWehlSections,
  },
  {
    slug: 'superminds',
    title: 'Superminds',
    intro: 'De avond waarop een IT-bedrijf zichzelf opnieuw uitvond.',
    image: {
      src: img240920212916EspritIctJitskeseckel,
      alt: '',
    },
    category: 'events',
    audience: 'zakelijke-events',
    services: ['Aftermovie'],
    client: 'Superminds',
    date: '09-11-2025',
    meta: {
      title: 'Superminds',
      description: 'De avond waarop een IT-bedrijf zichzelf opnieuw uitvond.',
    },
    introText: supermindsIntro,
    sections: supermindsSections,
  },
  {
    slug: 'de-live-formule',
    title: 'De Live Formule x Finis',
    intro: 'Een jubileum dat liet zien wat 100 jaar bouwen oplevert.',
    image: {
      src: mikexdeliveformuleFinis100Jaar4,
      alt: '',
    },
    category: 'events',
    audience: 'zakelijke-events',
    services: ['Aftermovie', 'Fotografie'],
    client: 'De Live Formule',
    date: '14-01-2026',
    meta: {
      title: 'De Live Formule x Finis',
      description: 'Een jubileum dat liet zien wat 100 jaar bouwen oplevert.',
    },
    introText: deLiveFormuleIntro,
    sections: deLiveFormuleSections,
  },
  {
    slug: 'saxypianoshow',
    title: 'Saxypianoshow',
    intro: 'Van één video naar een complete contentstrategie. En een volle agenda als resultaat.',
    image: {
      src: bold40jaarhuwelijk169,
      alt: '',
    },
    category: 'events',
    audience: 'artiesten',
    services: ['Artiestenpromo', 'Fotografie', 'Recap'],
    client: 'Saxypianoshow',
    date: '15-03-2025',
    meta: {
      title: 'Saxypianoshow',
      description: 'Van één video naar een complete contentstrategie. En een volle agenda als resultaat.',
    },
    introText: saxypianoshowIntro,
    sections: saxypianoshowSections,
  },
  {
    slug: 'why-go-home',
    title: 'Why Go Home',
    intro: 'Ahoy was niet groot genoeg voor hun energie.',
    image: {
      src: boldProductionsWhyGoHomeAhoy15,
      alt: '',
    },
    category: 'events',
    audience: 'artiesten',
    services: ['Bandpromo'],
    client: 'Why Go Home',
    date: '19-12-2025',
    meta: {
      title: 'Why Go Home',
      description: 'Ahoy was niet groot genoeg voor hun energie.',
    },
    introText: whyGoHomeIntro,
    sections: whyGoHomeSections,
  },
  {
    slug: 'waterschap-rijn-ijssel',
    title: 'Waterschap Rijn IJssel',
    intro: 'Een bedrijfsfeest voor honderden mensen.',
    image: {
      src: mikeWaterschapHuisfeestje194,
      alt: '',
    },
    category: 'events',
    audience: 'zakelijke-events',
    services: ['Aftermovie', 'Fotografie'],
    client: 'Waterschap Rijn IJssel',
    date: '09-11-2025',
    meta: {
      title: 'Waterschap Rijn IJssel',
      description: 'Een bedrijfsfeest voor honderden mensen.',
    },
    introText: waterschapRijnIjsselIntro,
    sections: waterschapRijnIjsselSections,
  },
  {
    slug: 'rhbfoto',
    title: 'RHBFoto',
    intro: 'Elk jaar één moment. De onthulling van De Neie.',
    image: {
      src: zdhFedbal150,
      alt: '',
    },
    category: 'events',
    audience: 'organisatoren',
    services: ['Aftermovie'],
    client: 'RHBFoto',
    date: '16-2-2025',
    meta: {
      title: 'RHBFoto',
      description: 'Elk jaar één moment. De onthulling van De Neie.',
    },
    introText: rhbfotoIntro,
    sections: rhbfotoSections,
  },
  {
    slug: 'drift',
    title: 'Drift op de Boot',
    intro: "Meer dan 50 video's. Dezelfde avond opgeleverd. Klaar om te knallen.",
    image: {
      src: spotSeq00273208Still012,
      alt: '',
    },
    category: 'events',
    audience: 'organisatoren',
    services: ['Social content'],
    client: 'DRIFT',
    date: '18-7-2025',
    meta: {
      title: 'Drift op de Boot',
      description: "Meer dan 50 video's. Dezelfde avond opgeleverd. Klaar om te knallen.",
    },
    introText: driftIntro,
    sections: driftSections,
  },
];

/** /events/cases/<slug> of /business/cases/<slug>, naar de (hoofd)soort van de case; zie caseIn() */
export const caseUrl = (item: Pick<Case, 'slug' | 'category'>) => `/${item.category}/cases/${item.slug}`;

/** Alle indelingen van een case (minstens de hoofdindeling) */
export const caseTargets = (item: Case): Targeting[] =>
  item.targets?.length ? item.targets : [{ category: item.category, audience: item.audience, services: item.services }];

/** Soorten van een case, de hoofdsoort eerst. Een case staat op /<soort>/cases/<slug> voor elke soort. */
export const caseCategories = (item: Case): Category[] => [...new Set([item.category, ...caseTargets(item).map((t) => t.category)])];

/**
 * De case vanuit één soort: adres, doelgroep en diensten van de eerste indeling in die soort,
 * zodat een kaart op een Business-pagina naar /business/cases/… linkt. Geen indeling in die
 * soort = de case ongewijzigd.
 */
export function caseIn(item: Case, category: Category | undefined): Case {
  const target = category && caseTargets(item).find((t) => t.category === category);
  return target ? { ...item, ...target } : item;
}

export function getCase(slug: string): Case {
  const found = cases.find((c) => c.slug === slug);
  if (!found) throw new Error(`Case '${slug}' bestaat niet in src/data/cases.ts`);
  return found;
}

/**
 * Filters en kaarten voor /events/cases of /business/cases (CaseGrid): alleen cases van die
 * soort, filter op de doelgroepen van die soort. Live alleen het doelgroepfilter.
 */
export function caseGridProps(items: Case[], category: Category): CaseGridProps {
  return {
    label: 'Cases filteren',
    emptyText: 'Er zijn geen actieve cases gevonden met deze filters. Pas de filters aan.',
    filters: [
      {
        name: 'audience',
        label: 'Doelgroep',
        options: [{ label: 'Alle', value: 'alle' }, ...audiences[category].map((a) => ({ label: a.title, value: a.value }))],
      },
      // Een dienstfilter kan erbij (CaseGrid ondersteunt het), maar staat live niet zichtbaar:
      // { name: 'service', label: 'Dienst', options: [{ label: 'Alle', value: 'alle' }, ...diensten] }
    ],
    items: items
      .filter((item) => caseCategories(item).includes(category))
      .map((item) => {
        const targets = caseTargets(item).filter((t) => t.category === category);
        const services = [...new Set(targets.flatMap((t) => t.services ?? []))];
        return {
          item: caseIn(item, category),
          tags: [...targets.map((t) => audienceTitle(t.audience)), ...services],
          audiences: targets.map((t) => t.audience),
          services,
        };
      }),
  };
}

export const eventsCaseGrid = caseGridProps(cases, 'events');

/**
 * Kandidaten voor "Uitgelichte case" op een pagina (de browser kiest er elke keer één): de cases
 * met de soort, doelgroep én dienst van het pad (bijv. /events/organisatoren/promovideos);
 * zijn die er niet, dan die met de doelgroep, dan de soort, en anders alle cases. Elke indeling
 * van een case telt; de kaart linkt naar de case binnen de soort van de pagina (caseIn).
 */
export function spotlightCandidates(all: Case[], path: string): Case[] {
  const { category, audience, service } = targetingOfPath(path);
  const any = (item: Case, test: (t: Targeting) => boolean) => caseTargets(item).some(test);
  const levels: ((item: Case) => boolean)[] = [
    (item) => Boolean(service) && any(item, (t) => t.category === category && t.audience === audience && (t.services ?? []).includes(service!)),
    (item) => Boolean(audience) && any(item, (t) => t.category === category && t.audience === audience),
    (item) => Boolean(category) && any(item, (t) => t.category === category),
    () => true,
  ];
  for (const matches of levels) {
    const found = all.filter(matches);
    if (found.length) return found.map((item) => caseIn(item, category));
  }
  return [];
}
