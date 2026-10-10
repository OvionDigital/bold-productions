/**
 * Casepagina uit casegegevens (src/data/cases.ts of Sanity 'caseStudy'): vaste kop
 * (hero met titel, intro en foto + kruimelpad + introtekst + feitenbalk) en daarna de
 * vrije secties van de case. Zelfde opbouw als live (Webflow-CMS-template).
 */
import { audienceLabels, caseLabels, type Case } from '../data/cases';
import type { PageData, PageSection } from './sections';

export function caseFacts(item: Case) {
  return {
    items: [
      { label: caseLabels.client, values: item.client ? [item.client] : [] },
      { label: caseLabels.date, values: item.date ? [item.date] : [] },
      { label: caseLabels.audience, values: item.audiences.map((a) => audienceLabels[a]) },
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
  ];
  if (item.introText?.length) sections.push({ type: 'introHighlight', props: { id: 'first-section', content: item.introText } });
  sections.push({ type: 'caseFacts', props: caseFacts(item) });
  sections.push(...(item.sections ?? []));

  return {
    slug: `cases/${item.slug}`,
    title: item.title,
    meta: item.meta ?? { title: item.title, description: item.intro },
    sections,
  };
}
