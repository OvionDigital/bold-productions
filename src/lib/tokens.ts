/**
 * Leest de design tokens uit tokens.css (alleen het :root-blok, basiswaarden)
 * zodat /styleguide altijd synchroon loopt met de bron.
 */
import tokensCss from '../styles/tokens.css?raw';

export interface Token {
  name: string;
  value: string;
  comment?: string;
}

function parseRootTokens(css: string): Token[] {
  const start = css.indexOf(':root {');
  if (start === -1) return [];
  let depth = 0;
  let end = start;
  for (let i = css.indexOf('{', start); i < css.length; i++) {
    if (css[i] === '{') depth++;
    if (css[i] === '}') depth--;
    if (depth === 0) {
      end = i;
      break;
    }
  }
  const block = css.slice(start, end);
  const tokens: Token[] = [];
  const re = /(--[\w-]+):\s*([^;]+);[ \t]*(?:\/\*\s*(.*?)\s*\*\/)?/g;
  for (const match of block.matchAll(re)) {
    const [, name, value, comment] = match;
    if (name && value) tokens.push({ name, value: value.trim().replace(/\s+/g, ' '), comment });
  }
  return tokens;
}

const all = parseRootTokens(tokensCss);

export const tokensByPrefix = (...prefixes: string[]): Token[] =>
  all.filter((token) => prefixes.some((prefix) => token.name.startsWith(prefix)));

export const allTokens = all;
