/**
 * Splitst tekst op '\n' in regels, voor titels met harde regeleinden
 * (bijv. "BOLD IN.\nSOLD OUT."). Render met <br /> tussen de regels.
 */
export function toLines(text: string): string[] {
  return text.split('\n');
}
