/**
 * Klein rich-text-model voor inhoud in src/data (CMS-onafhankelijk).
 *   Inline:  'tekst' of { text, strong?, em?, href? } of { br: true }
 *   Blokken: { p: Inline[] } of { ul: Inline[][] }
 * Tekst letterlijk van de live site overnemen, inclusief spaties.
 */
export type InlineSegment =
  | string
  | { text: string; strong?: boolean; em?: boolean; href?: string }
  | { br: true };
export type Inline = InlineSegment[];
export type RichBlock = { p: Inline } | { ul: Inline[] };
export type Rich = RichBlock[];

/**
 * Platte tekst (bijv. voor screenreaders of meta), regeleinden als spatie.
 * Na opgemaakte segmenten wordt een ontbrekende spatie aangevuld: op de live site
 * ontbreekt die soms in de markup en wordt hij visueel via margin opgevangen.
 */
export function richToPlainText(blocks: Rich): string {
  const inline = (segments: Inline) =>
    segments
      .map((s, i) => {
        if (typeof s === 'string') {
          const prev = segments[i - 1];
          const afterFormatted = prev !== undefined && typeof prev !== 'string' && !('br' in prev);
          return afterFormatted && /^[^\s.,;:!?)]/.test(s) ? ` ${s}` : s;
        }
        return 'br' in s ? ' ' : s.text;
      })
      .join('');
  return blocks.map((b) => ('p' in b ? inline(b.p) : b.ul.map(inline).join(' '))).join(' ');
}
