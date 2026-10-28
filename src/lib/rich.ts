/**
 * Klein rich-text-model voor inhoud in src/data (CMS-onafhankelijk).
 *   Inline:  'tekst' of { text, strong?, em?, href? } of { br: true }
 *   Blokken: { p: Inline[] }                    paragraaf (leeg = witregel, zoals Webflow <p>‍</p>)
 *            { ul: Inline[][], spaced? }         opsomming; `spaced` = elk item een eigen lijst
 *                                               (Webflow-patroon: ruimere afstand tussen items)
 *            { ol: Inline[][] }                  genummerde lijst
 *            { h: Inline[], level: 1–6 }         tussenkop
 *            { quote: Inline[] }                 citaat (blockquote)
 *            { video: RichVideo }                Vimeo-video in de tekst (Webflow rich-text-figure)
 * Tekst letterlijk van de live site overnemen, inclusief spaties.
 */
export type InlineSegment =
  | string
  | { text: string; strong?: boolean; em?: boolean; href?: string }
  | { br: true };
export type Inline = InlineSegment[];

export interface RichVideo {
  id: string;
  hash?: string;
  title: string;
  /** Korte omschrijving voor de VideoObject-structured data (casepagina) */
  description?: string;
  /** Hoogte / breedte, bijv. 0.5625 voor 16:9 */
  ratio: number;
  /** Breedte in procenten van de tekstkolom (standaard 100) */
  width?: number;
}

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type RichBlock =
  | { p: Inline }
  | { ul: Inline[]; spaced?: boolean }
  | { ol: Inline[] }
  | { h: Inline; level: HeadingLevel }
  | { quote: Inline }
  | { video: RichVideo };
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
  return blocks
    .map((b) => {
      if ('p' in b) return inline(b.p);
      if ('ul' in b) return b.ul.map(inline).join(' ');
      if ('ol' in b) return b.ol.map(inline).join(' ');
      if ('h' in b) return inline(b.h);
      if ('quote' in b) return inline(b.quote);
      return '';
    })
    .filter(Boolean)
    .join(' ');
}
