/**
 * Zet Sanity Portable Text (uit het `richText`-schema in studio/) om naar het
 * bestaande Rich-model (src/lib/rich.ts). RichText.astro en alle componenten
 * blijven zo ongewijzigd, of de tekst nu uit src/data komt of uit Sanity.
 * Ondersteunt alleen wat het schema toestaat: paragrafen, bullet-lijsten,
 * vet/cursief en links. Onbekende opmaak wordt genegeerd (geen crash op CMS-inhoud).
 */
import type { Inline, InlineSegment, Rich } from '../rich';

interface PortableTextSpan {
  _type: 'span';
  text: string;
  marks?: string[];
}

interface PortableTextBlock {
  _type: 'block';
  style?: string;
  listItem?: 'bullet';
  children?: PortableTextSpan[];
  markDefs?: { _key: string; _type: string; href?: string }[];
}

function spanToSegment(span: PortableTextSpan, markDefs: PortableTextBlock['markDefs']): InlineSegment {
  // Een span met alleen '\n' staat voor { br: true } (zie scripts/sanity-seed.mjs).
  if (span.text === '\n') return { br: true };
  const marks = span.marks ?? [];
  const linkDef = markDefs?.find((d) => d._type === 'link' && marks.includes(d._key));
  const strong = marks.includes('strong');
  const em = marks.includes('em');
  if (!strong && !em && !linkDef) return span.text;
  return { text: span.text, strong, em, href: linkDef?.href };
}

function blockToInline(block: PortableTextBlock): Inline {
  return (block.children ?? []).map((span) => spanToSegment(span, block.markDefs));
}

export function portableTextToRich(blocks: unknown): Rich {
  if (!Array.isArray(blocks)) return [];
  const typed = blocks as PortableTextBlock[];
  const result: Rich = [];
  let currentList: Inline[] | null = null;

  for (const block of typed) {
    if (block._type !== 'block') continue;
    if (block.listItem === 'bullet') {
      if (!currentList) {
        currentList = [];
        result.push({ ul: currentList });
      }
      currentList.push(blockToInline(block));
    } else {
      currentList = null;
      result.push({ p: blockToInline(block) });
    }
  }
  return result;
}
