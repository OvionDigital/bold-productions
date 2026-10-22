/**
 * POST /api/form — alle formulieren van de site (ContactForm.astro, scripts/contact-form.ts).
 * Cloudflare Pages Function: `wrangler pages deploy dist` neemt de map functions/ vanzelf mee;
 * alleen /api/form draait als Worker, de rest van de site blijft statisch.
 *
 * Velden komen binnen als FormData in de volgorde van het formulier. Speciale velden:
 *   _formulier  naam van het formulier (Contact, Offerte, Offerte Business)
 *   _pagina     pad waar het formulier staat (/events/…, /business/…)
 *   _kop        tussenkop in het formulier; wordt een kop in de mail
 *   website     honeypot: gevuld = bot, stil "gelukt" antwoorden
 * Meerdere waarden onder dezelfde naam (meerkeuze) worden één regel. Lege velden vallen weg.
 *
 * Mail via Resend (https://resend.com). Instellingen (Cloudflare Pages → Settings → Variables
 * and Secrets, voor Production én Preview):
 *   RESEND_API_KEY   verplicht (secret)
 *   FORM_TO_EMAIL    ontvanger; standaard simon@ (testfase), bij de livegang mike@
 *   FORM_FROM_EMAIL  afzender; domein moet in Resend geverifieerd zijn
 */

interface Env {
  RESEND_API_KEY?: string;
  FORM_TO_EMAIL?: string;
  FORM_FROM_EMAIL?: string;
}

interface Context {
  request: Request;
  env: Env;
}

const DEFAULT_TO = 'simon@oviondigital.nl';
const DEFAULT_FROM = 'Bold Productions <noreply@oviondigital.nl>';
const MAX_BODY_BYTES = 64 * 1024;
const MAX_VALUE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/** Geen regeleinden in het onderwerp (header-injectie) */
const singleLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

/** Veldnaam als label in de mail (Webflow-namen als "Wat-organiseer-je" leesbaar; E-mailadres blijft) */
const labelOf = (name: string) => (name === 'E-mailadres' ? name : name.replace(/-/g, ' '));

type Row = { heading: string } | { label: string; value: string };

function rowsOf(data: FormData): Row[] {
  const rows: Row[] = [];
  const byName = new Map<string, { label: string; value: string }>();
  for (const [name, raw] of data.entries()) {
    if (typeof raw !== 'string') continue;
    const value = raw.trim().slice(0, MAX_VALUE_LENGTH);
    if (name === '_kop') {
      byName.clear();
      rows.push({ heading: value });
      continue;
    }
    if (name.startsWith('_') || name === 'website' || !value) continue;
    const existing = byName.get(name);
    if (existing) {
      existing.value += `, ${value}`;
      continue;
    }
    const row = { label: labelOf(name), value };
    byName.set(name, row);
    rows.push(row);
  }
  // Kop zonder velden eronder (alles leeg gelaten) weglaten
  return rows.filter((row, i) => !('heading' in row) || (rows[i + 1] && !('heading' in rows[i + 1]!)));
}

function sectionOf(path: string): string {
  if (path.startsWith('/business')) return 'Business';
  if (path.startsWith('/events')) return 'Events';
  return '';
}

export const onRequestPost = async ({ request, env }: Context): Promise<Response> => {
  // Alleen vanaf de eigen site (zelfde domein: www, *.pages.dev of localhost)
  const origin = request.headers.get('Origin');
  if (!origin || origin !== new URL(request.url).origin) return json({ ok: false, error: 'origin' }, 403);
  if (Number(request.headers.get('Content-Length') ?? 0) > MAX_BODY_BYTES) return json({ ok: false, error: 'size' }, 413);

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ ok: false, error: 'body' }, 400);
  }
  if (String(data.get('website') ?? '').trim()) return json({ ok: true });

  const field = (name: string) => String(data.get(name) ?? '').trim();
  const email = field('E-mailadres');
  if (!EMAIL_PATTERN.test(email) || !field('Naam')) return json({ ok: false, error: 'fields' }, 400);

  if (!env.RESEND_API_KEY) {
    console.error('[form] RESEND_API_KEY ontbreekt');
    return json({ ok: false, error: 'config' }, 500);
  }

  const form = field('_formulier') || 'Formulier';
  const path = field('_pagina');
  const section = sectionOf(path);
  const formTitle = section && !form.includes(section) ? `${form} ${section}` : form;
  const company = field('Bedrijfsnaam');
  const subject = singleLine(`${formTitle}: ${field('Naam')}${company ? ` (${company})` : ''}`);
  const site = new URL(request.url).host;
  const rows = rowsOf(data);

  const html = `<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;font-size:15px;line-height:1.6;color:#111;max-width:640px;">
  <h2 style="margin:0 0 4px;font-size:18px;">${escapeHtml(formTitle)}</h2>
  <p style="margin:0 0 20px;color:#666;">Via ${escapeHtml(site + path)}</p>
  <table style="border-collapse:collapse;width:100%;">${rows
    .map((row) =>
      'heading' in row
        ? `<tr><td colspan="2" style="padding:20px 0 6px;font-weight:700;border-bottom:1px solid #e5e5e5;">${escapeHtml(row.heading)}</td></tr>`
        : `<tr><td style="padding:6px 16px 6px 0;color:#666;vertical-align:top;width:40%;">${escapeHtml(row.label)}</td><td style="padding:6px 0;vertical-align:top;">${escapeHtml(row.value).replace(/\n/g, '<br>')}</td></tr>`,
    )
    .join('')}</table>
  <p style="margin:24px 0 0;color:#666;">Beantwoorden gaat direct naar ${escapeHtml(email)}.</p>
</div>`;

  const text = [
    formTitle,
    `Via ${site}${path}`,
    ...rows.map((row) => ('heading' in row ? `\n${row.heading.toUpperCase()}` : `${row.label}: ${row.value}`)),
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.FORM_FROM_EMAIL || DEFAULT_FROM,
        to: (env.FORM_TO_EMAIL || DEFAULT_TO).split(',').map((address) => address.trim()),
        reply_to: email,
        subject,
        html,
        text,
      }),
    });
    if (!response.ok) {
      console.error('[form] Resend', response.status, await response.text());
      return json({ ok: false, error: 'send' }, 502);
    }
  } catch (error) {
    console.error('[form] Resend niet bereikbaar', error);
    return json({ ok: false, error: 'send' }, 502);
  }

  return json({ ok: true });
};
