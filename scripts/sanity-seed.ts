#!/usr/bin/env node
/**
 * Zet alle inhoud uit src/data over naar Sanity, zodat de klant in Studio de complete
 * site ziet en kan bewerken: homepage, alle pagina's (src/data/pages), alle cases
 * (src/data/cases.ts + case-pages), teamleden, testimonials, klantlogo's en menu & footer.
 * Leest de TypeScript-data rechtstreeks (via scripts/sanity/register.mjs) — dezelfde
 * bron als de site zonder Sanity, dus nooit dubbel bijhouden.
 *
 * Standaard veilig: documenten die al bestaan worden niet overschreven; alleen
 * ontbrekende velden worden aangevuld (wat de klant in Studio aanpaste blijft staan).
 * Met --force worden documenten met dezelfde id volledig vervangen.
 * Beelden worden geüpload; Sanity herkent identieke bestanden, dus opnieuw draaien
 * maakt geen dubbele beelden.
 *
 * Gebruik (vanuit de root van de repo):
 *   npm run sanity:seed            (of: npm run sanity:seed -- --force)
 *   npm run sanity:seed -- --dry-run   alles opbouwen en controleren, niets uploaden of schrijven
 *   npm run sanity:seed -- --force --only=page-sitemap   alleen deze document-id('s) (komma's) schrijven
 *
 * Vereist in .env: PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN
 * (token met Editor-rechten, aan te maken via sanity.io/manage → API → Tokens).
 */
import { createClient } from '@sanity/client';
import { readFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import type { Inline, Rich } from '../src/lib/rich';
import type { PageSection, PageData } from '../src/lib/sections';
import { pages } from '../src/data/pages';
import { cases } from '../src/data/cases';
import { testimonials } from '../src/data/testimonials';
import { team, teamOrder, type TeamMemberId } from '../src/data/team';
import { artistLogos, businessLogos, clientLogos } from '../src/data/logos';
import { multiTargetingFields, targetingFields } from '../src/lib/sanity/taxonomy';
import type { Audience, Category } from '../src/data/taxonomy';
import { navigation, type NavGroup, type SiteNavigation } from '../src/data/navigation';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN } = process.env;
if (!PUBLIC_SANITY_PROJECT_ID || !SANITY_API_WRITE_TOKEN) {
  console.error('Ontbrekende env-variabelen. Zet PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET en SANITY_API_WRITE_TOKEN in .env (zie .env.example).');
  process.exit(1);
}

const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  token: SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const force = process.argv.includes('--force');
const dryRun = process.argv.includes('--dry-run');
const only = process.argv.find((a) => a.startsWith('--only='))?.slice('--only='.length).split(',').filter(Boolean);
const ROOT = path.resolve(import.meta.dirname, '..');

// ─── Hulpjes ───────────────────────────────────────────────────────────────
type Doc = { _id: string; _type: string } & Record<string, unknown>;
type LocalImage = { src: unknown; alt?: string };

const key = () => randomUUID().replace(/-/g, '').slice(0, 12);

/** Elk object in een array krijgt een _key (vereist door Sanity). */
function withKeys<T>(value: T): T {
  if (Array.isArray(value)) return value.map((item) => (item && typeof item === 'object' && !Array.isArray(item) ? { _key: key(), ...withKeys(item) } : withKeys(item))) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).filter(([, v]) => v !== undefined).map(([k, v]) => [k, withKeys(v)])) as T;
  }
  return value;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Pad van een lokaal beeld (via scripts/sanity/hooks.mjs is een import { fsPath }). */
function fsPathOf(src: unknown): string {
  const p = (src as { fsPath?: string }).fsPath;
  if (!p) throw new Error('Beeld zonder fsPath (Sanity-beeld?) in de lokale data');
  return p;
}

const uploads = new Map<string, Promise<string>>();
function uploadAsset(kind: 'image' | 'file', fsPath: string): Promise<string> {
  const cacheKey = `${kind}:${fsPath}`;
  if (!uploads.has(cacheKey)) {
    uploads.set(
      cacheKey,
      (async () => {
        const buffer = await readFile(fsPath);
        if (dryRun) return `${kind}-dryrun-${path.basename(fsPath)}`;
        const asset = await client.assets.upload(kind, buffer, { filename: path.basename(fsPath) });
        console.log('  ✓ geüpload:', path.relative(ROOT, fsPath));
        return asset._id;
      })(),
    );
  }
  return uploads.get(cacheKey)!;
}

async function image(img: LocalImage, withAlt = true) {
  const ref = await uploadAsset('image', fsPathOf(img.src));
  return { _type: 'image', asset: { _type: 'reference', _ref: ref }, ...(withAlt ? { alt: img.alt ?? '' } : {}) };
}

const ref = (id: string) => ({ _type: 'reference', _ref: id });

// ─── Rich → Portable Text (omgekeerde van src/lib/sanity/portableText.ts) ──
function inlineToBlock(segments: Inline, extra: Record<string, unknown>) {
  const markDefs: { _key: string; _type: 'link'; href: string }[] = [];
  const children = segments.map((seg) => {
    if (typeof seg === 'string') return { _type: 'span', _key: key(), text: seg, marks: [] as string[] };
    if ('br' in seg) return { _type: 'span', _key: key(), text: '\n', marks: [] as string[] };
    const marks: string[] = [];
    if (seg.strong) marks.push('strong');
    if (seg.em) marks.push('em');
    if (seg.href) {
      const linkKey = key();
      markDefs.push({ _key: linkKey, _type: 'link', href: seg.href });
      marks.push(linkKey);
    }
    return { _type: 'span', _key: key(), text: seg.text, marks };
  });
  return { _type: 'block', _key: key(), style: 'normal', markDefs, children: children.length ? children : [{ _type: 'span', _key: key(), text: '', marks: [] }], ...extra };
}

function richToPortableText(rich: Rich | undefined): Record<string, unknown>[] | undefined {
  if (!rich) return undefined;
  return rich.flatMap((block): Record<string, unknown>[] => {
    if ('p' in block) return [inlineToBlock(block.p, {})];
    if ('ul' in block) return block.ul.map((item) => inlineToBlock(item, { listItem: block.spaced ? 'spaced' : 'bullet', level: 1 }));
    if ('ol' in block) return block.ol.map((item) => inlineToBlock(item, { listItem: 'number', level: 1 }));
    if ('h' in block) return [inlineToBlock(block.h, { style: `h${block.level === 5 ? 4 : block.level}` })];
    if ('quote' in block) return [inlineToBlock(block.quote, { style: 'blockquote' })];
    const { id, hash, title, ratio, width } = block.video;
    return [{ _type: 'richVideo', _key: key(), video: { _type: 'vimeoVideo', id, hash, title }, ratio, width }];
  });
}

const vimeo = (v: { id: string; hash?: string; title: string } | undefined) => (v ? { _type: 'vimeoVideo', id: v.id, hash: v.hash, title: v.title } : undefined);

// ─── Gedeelde documenten ─────────────────────────────────────────────────────
const logoIdByPath = new Map<string, string>();
const testimonialIdByQuote = new Map(Object.entries(testimonials).map(([id, t]) => [t.quote, `testimonial-${id}`]));
const teamIdByName = new Map(teamOrder.map((id) => [team[id].name, id]));

/** Eén document per logobestand; staat een logo in meerdere strips, dan alle soorten en doelgroepen samen */
async function logoDocs(): Promise<Doc[]> {
  const all = [...clientLogos, ...artistLogos, ...businessLogos];
  const merged = new Map<string, { logo: (typeof all)[number]; categories: Set<Category>; audiences: Set<Audience> }>();
  for (const logo of all) {
    const fsPath = fsPathOf(logo.src);
    const entry = merged.get(fsPath) ?? { logo, categories: new Set(), audiences: new Set() };
    logo.categories.forEach((c) => entry.categories.add(c));
    logo.audiences.forEach((a) => entry.audiences.add(a));
    merged.set(fsPath, entry);
  }
  const docs: Doc[] = [];
  for (const [fsPath, { logo, categories, audiences }] of merged) {
    const id = `clientLogo-${slugify(logo.alt)}`;
    logoIdByPath.set(fsPath, id);
    docs.push({
      _id: id,
      _type: 'clientLogo',
      name: logo.alt,
      image: await image({ src: logo.src }, false),
      ...multiTargetingFields({ categories: [...categories], audiences: [...audiences] }),
    });
  }
  return docs;
}

async function testimonialDocs(): Promise<Doc[]> {
  return Promise.all(
    Object.entries(testimonials).map(async ([id, t]) => ({
      _id: `testimonial-${id}`,
      _type: 'testimonial',
      quote: t.quote,
      name: 'name' in t ? t.name : undefined,
      organisation: 'organisation' in t ? t.organisation : undefined,
      image: await image(t.image),
      // Alleen soort + doelgroep (geen diensten)
      ...targetingFields({ category: t.category, audience: t.audience }),
    })),
  );
}

async function teamDocs(): Promise<Doc[]> {
  return Promise.all(
    teamOrder.map(async (id, index) => {
      const member = team[id];
      const videoPath = member.video ? path.join(ROOT, 'public', member.video) : undefined;
      return {
        _id: `teamMember-${id}`,
        _type: 'teamMember',
        name: member.name,
        role: member.role,
        image: await image(member.image),
        video: videoPath ? { _type: 'file', asset: ref(await uploadAsset('file', videoPath)) } : undefined,
        sortOrder: (index + 1) * 10,
      };
    }),
  );
}

// ─── Secties → Sanity-blokken (omgekeerde van src/lib/sanity/sections.ts) ──
async function toBlock(section: PageSection): Promise<Record<string, unknown> | null> {
  switch (section.type) {
    case 'hero': {
      const p = section.props;
      return {
        _type: 'heroSection',
        title: p.title,
        titleAccent: p.titleAccent || undefined,
        accentInline: p.accentInline || undefined,
        eyebrow: p.eyebrow,
        primaryCta: p.primaryCta,
        secondaryCta: p.secondaryCta,
        buttonAccent: p.accent,
        image: await image(p.image),
        video: p.video ? vimeo(p.video) : undefined,
        videoOnMobile: p.video?.loadOnMobile || undefined,
      };
    }
    case 'splitHero': {
      const p = section.props;
      return {
        _type: 'splitHeroSection',
        title: p.title,
        halves: await Promise.all(
          p.halves.map(async (h) => ({
            _type: 'splitHeroHalf',
            title: h.title,
            text: h.text,
            ctaLabel: h.cta.label,
            href: h.cta.href,
            accent: h.accent,
            image: await image(h.image),
            video: h.video ? vimeo(h.video) : undefined,
          })),
        ),
      };
    }
    case 'breadcrumbs':
      return { _type: 'breadcrumbsSection' };
    case 'logoMarquee':
      // Geen vaste lijst: de site kiest de logo's van de soort/doelgroep van de pagina (max. 10 willekeurig)
      return { _type: 'logoMarqueeSection', title: section.props.title };
    case 'introHighlight':
      return { _type: 'introHighlightSection', content: richToPortableText(section.props.content), anchorId: section.props.id };
    case 'richText':
      return { _type: 'richTextSection', content: richToPortableText(section.props.content), align: section.props.align, anchorId: section.props.id };
    case 'timeline': {
      const p = section.props;
      return {
        _type: 'timelineSection',
        title: p.title,
        gradient: p.gradient,
        intro: richToPortableText(p.intro),
        reverse: p.reverse || undefined,
        steps: await Promise.all(
          p.steps.map(async (step) => ({
            _type: 'timelineStep',
            number: step.number,
            title: step.title,
            text: richToPortableText(step.text),
            image: step.image ? await image(step.image) : undefined,
            video: vimeo(step.video),
            cta: step.cta ? { _type: 'ctaButton', ...step.cta } : undefined,
          })),
        ),
        cta: p.cta ? { _type: 'ctaButton', ...p.cta } : undefined,
      };
    }
    case 'testimonials': {
      const p = section.props;
      return {
        _type: 'testimonialsSection',
        eyebrow: p.eyebrow,
        title: p.title,
        gradient: p.gradient,
        items: p.items.map((t) => {
          const id = testimonialIdByQuote.get(t.quote);
          if (!id) throw new Error(`Testimonial niet in src/data/testimonials.ts: ${t.quote.slice(0, 40)}…`);
          return ref(id);
        }),
      };
    }
    case 'polaroidStack': {
      const p = section.props;
      return { _type: 'polaroidStackSection', eyebrow: p.eyebrow, title: p.title, gradient: p.gradient, photos: await Promise.all(p.photos.map((photo) => image(photo))) };
    }
    case 'textMedia': {
      const p = section.props;
      const withForm = Boolean(section.form);
      return {
        _type: 'textMediaSection',
        showContactForm: withForm,
        form: section.form?.name,
        messagePlaceholder: section.form?.messagePlaceholder,
        intro: p.intro ? { title: p.intro.title, gradient: p.intro.gradient, text: richToPortableText(p.intro.text) } : undefined,
        title: p.title,
        gradient: p.gradient,
        body: richToPortableText(p.body),
        links: p.links?.map((l) => ({ _type: 'contactLink', ...l })),
        cta: p.cta ? { _type: 'ctaButton', ...p.cta } : undefined,
        mediaType: p.media.type,
        image: p.media.type === 'image' ? await image(p.media) : undefined,
        video: p.media.type === 'vimeo' ? vimeo(p.media) : undefined,
        reverse: p.reverse || undefined,
        triangles: p.triangles || undefined,
        layout: p.spacing === 'section' ? 'section' : 'margin',
        anchorId: p.id,
      };
    }
    case 'caseSpotlight':
      // Geen vaste case: de site kiest elke keer een passende (soort, doelgroep, dienst van de pagina)
      return { _type: 'caseSpotlightSection', title: section.props.title, gradient: section.props.gradient };
    case 'imageFeature': {
      const p = section.props;
      return { _type: 'imageFeatureSection', title: p.title, gradient: p.gradient, text: p.text, image: await image(p.image), cinemaCursor: p.id === 'cinema' || undefined };
    }
    case 'serviceTiles': {
      const p = section.props;
      if (p.variant === 'team') {
        return {
          _type: 'teamSection',
          title: p.title,
          gradient: p.gradient,
          members: p.items.map((item) => {
            const id = teamIdByName.get(item.label) as TeamMemberId | undefined;
            if (!id) throw new Error(`Teamlid niet in src/data/team.ts: ${item.label}`);
            return { _type: 'teamEntry', member: ref(`teamMember-${id}`), role: item.subtitle !== team[id].role ? item.subtitle : undefined };
          }),
        };
      }
      return {
        _type: 'serviceTilesSection',
        title: p.title,
        gradient: p.gradient,
        text: richToPortableText(p.text),
        items: await Promise.all(p.items.map(async (item) => ({ _type: 'serviceTile', label: item.label, href: item.href, image: await image(item.image) }))),
      };
    }
    case 'faq': {
      const p = section.props;
      return {
        _type: 'faqSection',
        title: p.title,
        gradient: p.gradient,
        items: p.items.map((item) => ({ _type: 'faqItem', question: item.question, answer: richToPortableText(item.answer) })),
        anchorId: p.id,
      };
    }
    case 'fullWidthImage':
      return { _type: 'fullWidthImageSection', image: await image(section.props.image) };
    case 'videoFeature':
      return { _type: 'videoFeatureSection', video: vimeo(section.props.video), ratio: section.props.ratio ?? 0.5625 };
    case 'contactSection':
      return {
        _type: 'contactSection',
        content: richToPortableText(section.props.content),
        links: section.props.links.map((l) => ({ _type: 'contactLink', ...l })),
        form: section.form.name,
        messagePlaceholder: section.form.messagePlaceholder,
        anchorId: section.props.id,
      };
    case 'map': {
      const p = section.props;
      return { _type: 'mapSection', title: p.title, gradient: p.gradient, text: richToPortableText(p.text), src: p.src, label: p.label };
    }
    case 'caseGrid':
      return { _type: 'caseGridSection', anchorId: section.props.id };
    case 'caseFacts':
      return null; // vast onderdeel van een casepagina
    case 'linkGroups': {
      const p = section.props;
      const casesIndex = p.groups.findIndex((g) => g.auto === 'cases');
      return {
        _type: 'linkGroupsSection',
        eyebrow: p.eyebrow,
        title: p.title,
        isPageTitle: p.titleAs === 'h1' || undefined,
        gradient: p.gradient,
        anchorId: p.id,
        groups: p.groups
          .filter((g) => g.auto !== 'cases')
          .map((g) => ({ _type: 'linkGroup', title: g.title, links: g.links.map((l) => ({ _type: 'linkItem', ...l })) })),
        casesGroupTitle: casesIndex >= 0 ? p.groups[casesIndex]!.title : undefined,
        casesGroupIndex: casesIndex >= 0 ? casesIndex : undefined,
      };
    }
  }
}

async function toBlocks(sections: PageSection[]) {
  const blocks = [];
  for (const section of sections) {
    const block = await toBlock(section);
    if (block) blocks.push(block);
  }
  return blocks;
}

/** PageSchema → velden van het page-document (omgekeerde van toSchema in lib/sanity/pages.ts) */
function schemaFields(schema: PageData['meta']['schema']): Record<string, unknown> {
  if (!schema) return { schemaType: 'none' };
  switch (schema.type) {
    case 'service':
      return {
        schemaType: 'service',
        serviceType: schema.serviceType,
        serviceName: schema.name,
        serviceDescription: schema.description,
        catalogName: schema.catalog?.name,
        catalogItems: schema.catalog?.items,
      };
    case 'webpage':
      return { schemaType: schema.relation === 'publisher' ? 'webpage-publisher' : 'webpage-main' };
    default:
      return { schemaType: schema.type };
  }
}

/**
 * Document-id per URL-pad. Bestaat er al een pagina met dat pad (ook na een URL-wijziging,
 * scripts/sanity-migrate-urls.ts), dan dat document; anders page-<pad>. Vaste id's: 'home' =
 * page-home, 'events' = page-events-home (page-events is van vóór oktober 2026 de pagina
 * Organisatoren). De startpagina's krijgen listOrder: bovenaan in "Pagina's" in Studio.
 */
const existingPageIds = new Map<string, string>();
const FIXED_PAGE_IDS: Record<string, string> = { home: 'page-home', events: 'page-events-home' };
const LIST_ORDER: Record<string, number> = { home: 1, events: 2, business: 3 };
const pageId = (slug: string) => existingPageIds.get(slug) ?? FIXED_PAGE_IDS[slug] ?? `page-${slug.replace(/\//g, '--')}`;

async function pageDoc(page: PageData): Promise<Doc> {
  return {
    _id: pageId(page.slug),
    _type: 'page',
    title: page.title,
    slug: { _type: 'slug', current: page.slug },
    breadcrumbTitle: page.breadcrumbTitle,
    accent: page.accent ?? 'orange',
    metaTitle: page.meta.title,
    metaDescription: page.meta.description,
    noindex: page.meta.noindex || undefined,
    ogImage: page.meta.ogImage && typeof page.meta.ogImage !== 'string' ? await image({ src: page.meta.ogImage }, false) : undefined,
    ...schemaFields(page.meta.schema),
    sections: await toBlocks(page.sections),
    listOrder: LIST_ORDER[page.slug],
  };
}

async function caseDocs(): Promise<Doc[]> {
  const docs: Doc[] = [];
  for (const [index, item] of cases.entries()) {
    docs.push({
      _id: `caseStudy-${item.slug}`,
      _type: 'caseStudy',
      title: item.title,
      slug: { _type: 'slug', current: item.slug },
      intro: item.intro,
      image: await image(item.image, false),
      video: vimeo(item.video),
      ...targetingFields(item),
      client: item.client,
      date: item.date,
      sortOrder: (index + 1) * 10,
      introText: richToPortableText(item.introText),
      sections: await toBlocks(item.sections ?? []),
      metaTitle: item.meta?.title !== item.title ? item.meta?.title : undefined,
      metaDescription: item.meta?.description !== item.intro ? item.meta?.description : undefined,
    });
  }
  return docs;
}

// ─── Menu & footer (studio/schemaTypes/documents/siteNavigation.ts) ─────────────
const navLink = (_type: string, { label, href, bold }: { label: string; href: string; bold?: boolean }) => ({
  _type,
  label,
  href,
  ...(bold ? { bold } : {}),
});
const menuGroups = (groups: NavGroup[]) =>
  groups.map((g) => ({ ...navLink('menuGroup', g), inHeader: Boolean(g.inHeader), children: g.children.map((c) => navLink('menuLink', c)) }));
const footerColumns = (groups: NavGroup[]) =>
  groups.map((g) => ({ ...navLink('footerColumn', g), links: g.children.map((c) => navLink('footerLink', c)) }));
const menuPart = (part: SiteNavigation) => ({
  cta: part.cta ? { label: part.cta.label, href: part.cta.href } : undefined,
  menu: menuGroups(part.nav),
  footer: footerColumns(part.footer),
});

function navigationDoc(): Doc {
  return {
    _id: 'siteNavigation',
    _type: 'siteNavigation',
    events: menuPart(navigation.events),
    business: menuPart(navigation.business),
    neutral: {
      buttons: (navigation.neutral.buttons ?? []).map((b) => ({ ...navLink('navButton', b), shortLabel: b.shortLabel, accent: b.accent })),
      footer: footerColumns(navigation.neutral.footer),
    },
  };
}

// ─── Schrijven ────────────────────────────────────────────────────────────────
async function write(allDocs: Doc[], label: string) {
  const docs = only ? allDocs.filter((d) => only.includes(d._id)) : allDocs;
  if (!docs.length) return;
  if (dryRun) {
    const kB = Math.round(JSON.stringify(docs.map((d) => withKeys(d))).length / 1024);
    console.log(`✓ ${label}: ${docs.length} (${kB} kB, dry-run: niet geschreven)`);
    return;
  }
  const tx = client.transaction();
  for (const raw of docs) {
    const doc = withKeys(raw);
    if (force) {
      tx.createOrReplace(doc);
    } else {
      // Bestaat al? Alleen ontbrekende velden aanvullen, aanpassingen van de klant blijven staan.
      const { _id, _type, ...fields } = doc;
      tx.createIfNotExists({ _id, _type });
      tx.patch(_id, (p) => p.setIfMissing(fields));
    }
  }
  await tx.commit({ visibility: 'async' });
  console.log(`✓ ${label}: ${docs.length}`);
}

async function main() {
  console.log(`Sanity-project ${PUBLIC_SANITY_PROJECT_ID} (${PUBLIC_SANITY_DATASET || 'production'})${dryRun ? ' — dry-run' : force ? ' — --force: bestaande documenten worden vervangen' : ''}\n`);

  await write(await logoDocs(), "Klantlogo's");
  await write(await testimonialDocs(), 'Testimonials');
  await write(await teamDocs(), 'Teamleden');
  await write(await caseDocs(), 'Cases');
  const existing = await client.fetch<{ _id: string; slug?: string }[]>('*[_type == "page" && !(_id in path("drafts.**"))]{ _id, "slug": slug.current }');
  existing.forEach((doc) => doc.slug && existingPageIds.set(doc.slug, doc._id));
  const pageDocs: Doc[] = [];
  for (const page of pages) pageDocs.push(await pageDoc(page));
  await write(pageDocs, "Pagina's");
  await write([navigationDoc()], 'Menu & footer');

  console.log(`\n✓ Klaar${dryRun ? ' (dry-run: er is niets geschreven)' : force ? '' : ' (bestaande documenten alleen aangevuld; --force om te vervangen)'}.`);
}

main().catch((err) => {
  console.error('\nSeed mislukt:', err.message);
  process.exit(1);
});
