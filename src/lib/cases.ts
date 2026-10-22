/**
 * Casepagina uit casegegevens (src/data/cases.ts of Sanity 'caseStudy'): vaste kop
 * (hero met titel, intro en foto + kruimelpad + feitenbalk + introtekst) en daarna de
 * vrije secties van de case. Opbouw als live (Webflow-CMS-template), behalve de feitenbalk:
 * die staat sinds oktober 2026 (feedback klant) direct onder het kruimelpad.
 * Een case in Events én Business staat op beide adressen (casePages); het tweede adres heeft
 * een canonical naar het hoofdadres en staat niet in de sitemap.
 */
import { caseCategories, caseIn, caseLabels, caseTargets, caseUrl, type Case } from '../data/cases';
import type { Category } from '../data/taxonomy';
import { audienceTitle } from '../data/taxonomy';
import type { PageData, PageSection } from './sections';

export function caseFacts(item: Case) {
  return {
    id: 'first-section',
    items: [
      { label: caseLabels.client, values: item.client ? [item.client] : [] },
      { label: caseLabels.date, values: item.date ? [item.date] : [] },
      { label: caseLabels.audience, values: [...new Set(caseTargets(item).map((t) => audienceTitle(t.audience)))] },
      { label: caseLabels.service, values: [...new Set(caseTargets(item).flatMap((t) => t.services ?? []))] },
    ].filter((fact) => fact.values.length),
  };
}

/** Casepagina binnen één soort (standaard de hoofdsoort) */
export function casePage(item: Case, category: Category = item.category): PageData {
  const primary = caseUrl(item);
  item = caseIn(item, category);
  const sections: PageSection[] = [
    {
      type: 'hero',
      props: {
        // Live staat de hele titel in de accentkleur
        title: '',
        titleAccent: item.title,
        eyebrow: item.intro,
        secondaryCta: { label: caseLabels.heroCta, href: '#first-section', icon: 'arrow-down' },
        image: item.image,
        video: item.video,
        accent: 'yellow',
      },
    },
    { type: 'breadcrumbs' },
    // Feitenbalk als eerste onder het kruimelpad: klant, datum, doelgroep en dienst in één oogopslag
    { type: 'caseFacts', props: caseFacts(item) },
  ];
  if (item.introText?.length) sections.push({ type: 'introHighlight', props: { content: item.introText } });
  sections.push(...(item.sections ?? []));

  return {
    slug: caseUrl(item).slice(1),
    title: item.title,
    meta: { ...(item.meta ?? { title: item.title, description: item.intro }), ...(caseUrl(item) !== primary ? { canonical: primary } : {}) },
    sections,
  };
}

/** Alle adressen van een case: één pagina per soort */
export const casePages = (item: Case): PageData[] => caseCategories(item).map((category) => casePage(item, category));
