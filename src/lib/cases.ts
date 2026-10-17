/**
 * Casepagina uit casegegevens (src/data/cases.ts of Sanity 'caseStudy'): vaste kop
 * (hero met titel, intro en foto + kruimelpad + feitenbalk + introtekst) en daarna de
 * vrije secties van de case. Opbouw als live (Webflow-CMS-template), behalve de feitenbalk:
 * die staat sinds oktober 2026 (feedback klant) direct onder het kruimelpad.
 */
import { caseLabels, caseUrl, type Case } from '../data/cases';
import { audienceTitle } from '../data/taxonomy';
import type { PageData, PageSection } from './sections';

export function caseFacts(item: Case) {
  return {
    id: 'first-section',
    items: [
      { label: caseLabels.client, values: item.client ? [item.client] : [] },
      { label: caseLabels.date, values: item.date ? [item.date] : [] },
      { label: caseLabels.audience, values: [audienceTitle(item.audience)] },
      { label: caseLabels.service, values: item.services ?? [] },
    ].filter((fact) => fact.values.length),
  };
}

export function casePage(item: Case): PageData {
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
    meta: item.meta ?? { title: item.title, description: item.intro },
    sections,
  };
}
