/**
 * Zet Sanity Portable Text (uit het `richText`-schema in studio/) om naar het
 * bestaande Rich-model (src/lib/rich.ts). RichText.astro en alle componenten
 * blijven zo ongewijzigd, of de tekst nu uit src/data komt of uit Sanity.
 * Ondersteunt wat het schema toestaat: paragrafen, koppen (h1–h6), citaat,
 * opsommingen (bullet, spaced, number), vet/cursief, links en Vimeo-video's.
 * Onbekende opmaak wordt genegeerd (geen crash op CMS-inhoud).
 * scripts/sanity-seed.ts doet de omgekeerde omzetting (richToPortableText).
 */
import type { HeadingLevel, Inline, InlineSegment, Rich } from '../rich';

interface PortableTextSpan {
  _type: 'span';
  text: string;
  marks?: string[];
}

interface PortableTextBlock {
  _type: 'block';
  style?: string;
  listItem?: 'bullet' | 'spaced' | 'number';
  children?: PortableTextSpan[];
  markDefs?: { _key: string; _type: string; href?: string }[];
}

interface PortableTextVideo {
  _type: 'richVideo';
  video?: { id?: string; hash?: string; title?: string };
  ratio?: number;
  width?: number;
}

function spanToSegment(span: PortableTextSpan, markDefs: PortableTextBlock['markDefs']): InlineSegment {
  // Een span met alleen '\n' staat voor { br: true } (zie scripts/sanity-seed.ts).
  if (span.text === '\n') return { br: true };
  const marks = span.marks ?? [];
  const linkDef = markDefs?.find((d) => d._type === 'link' && marks.includes(d._key));
  const strong = marks.includes('strong');
  const em = marks.includes('em');
  if (!strong && !em && !linkDef) return span.text;
  return { text: span.text, strong, em, href: linkDef?.href };
}

function blockToInline(block: PortableTextBlock): Inline {
  const segments = (block.children ?? []).map((span) => spanToSegment(span, block.markDefs));
  // Lege regel in de editor = één lege span: witregel
  return segments.length === 1 && segments[0] === '' ? [] : segments;
}

export function portableTextToRich(blocks: unknown): Rich {
  if (!Array.isArray(blocks)) return [];
  const result: Rich = [];
  let list: { kind: string; items: Inline[] } | null = null;

  for (const raw of blocks as (PortableTextBlock | PortableTextVideo)[]) {
    if (raw._type === 'richVideo') {
      list = null;
      if (raw.video?.id) {
        result.push({
          video: { id: raw.video.id, hash: raw.video.hash || undefined, title: raw.video.title ?? '', ratio: raw.ratio ?? 0.5625, width: raw.width ?? undefined },
        });
      }
      continue;
    }
    if (raw._type !== 'block') continue;
    const block = raw;

    if (block.listItem) {
      if (!list || list.kind !== block.listItem) {
        list = { kind: block.listItem, items: [] };
        if (block.listItem === 'number') result.push({ ol: list.items });
        else if (block.listItem === 'spaced') result.push({ ul: list.items, spaced: true });
        else result.push({ ul: list.items });
      }
      list.items.push(blockToInline(block));
      continue;
    }
    list = null;

    const heading = block.style?.match(/^h([1-6])$/);
    if (heading) result.push({ h: blockToInline(block), level: Number(heading[1]) as HeadingLevel });
    else if (block.style === 'blockquote') result.push({ quote: blockToInline(block) });
    else result.push({ p: blockToInline(block) });
  }
  return result;
}
