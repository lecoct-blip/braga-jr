// Crawler de auditoria SEO — audita o HTML RENDERIDO (não o código-fonte).
const BASE = 'http://localhost:3100';
const ROUTES = [
  '/', '/atuacao', '/atuacao/direito-do-servidor', '/atuacao/corporativo',
  '/sobre', '/contato', '/blog', '/blog/pad-controle-judicial',
  '/politica-de-privacidade', '/termos-de-uso',
];

const pick = (re, html) => { const m = html.match(re); return m ? m[1].trim() : null; };
const metaName = (n, html) =>
  pick(new RegExp(`<meta name="${n}"[^>]*content="([^"]*)"`, 'i'), html) ??
  pick(new RegExp(`<meta content="([^"]*)"[^>]*name="${n}"`, 'i'), html);
const metaProp = (p, html) =>
  pick(new RegExp(`<meta property="${p}"[^>]*content="([^"]*)"`, 'i'), html) ??
  pick(new RegExp(`<meta content="([^"]*)"[^>]*property="${p}"`, 'i'), html);

const out = [];
const log = (s = '') => out.push(s);

for (const r of ROUTES) {
  const res = await fetch(BASE + r);
  const html = await res.text();
  const title = pick(/<title[^>]*>([^<]*)<\/title>/i, html);
  const desc = metaName('description', html);
  const canonical = pick(/<link rel="canonical" href="([^"]*)"/i, html);
  const robots = metaName('robots', html);
  const ogTitle = metaProp('og:title', html);
  const ogDesc = metaProp('og:description', html);
  const ogUrl = metaProp('og:url', html);
  const ogImg = metaProp('og:image', html);
  const ogType = metaProp('og:type', html);
  const ogLocale = metaProp('og:locale', html);
  const ogSite = metaProp('og:site_name', html);
  const twCard = metaName('twitter:card', html);
  const geoR = metaName('geo.region', html);
  const geoP = metaName('geo.position', html);
  const icbm = metaName('ICBM', html);
  const lang = pick(/<html lang="([^"]*)"/i, html);
  const h1 = (html.match(/<h1[ >]/g) || []).length;
  const ld = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    .map((m) => { try { return JSON.parse(m[1]); } catch { return null; } })
    .filter(Boolean)
    .flatMap((o) => Array.isArray(o) ? o : [o])
    .map((o) => o['@type']);

  log(`\n=== ${r}  [HTTP ${res.status}]`);
  log(`  title    (${title ? title.length : 'X'}) ${title}`);
  log(`  descr    (${desc ? desc.length : 'X'}) ${desc}`);
  log(`  canonical: ${canonical}`);
  log(`  robots   : ${robots ?? '(default index)'}`);
  log(`  h1 count : ${h1}  | html lang: ${lang}`);
  log(`  OG       : type=${ogType} locale=${ogLocale} site=${ogSite ? 'ok' : 'MISSING'}`);
  log(`  OG t/d/u : ${ogTitle ? 'ok' : 'MISSING'} / ${ogDesc ? 'ok' : 'MISSING'} / ${ogUrl ?? 'MISSING'}`);
  log(`  OG image : ${ogImg ?? 'MISSING'}`);
  log(`  twitter  : ${twCard ?? 'MISSING'}`);
  log(`  geo      : region=${geoR} pos=${geoP} icbm=${icbm ? 'ok' : 'MISSING'}`);
  log(`  JSON-LD  : [${ld.join(', ')}]`);
}

// og-image existe?
const og = await fetch(BASE + '/og-image.jpg');
log(`\n=== /og-image.jpg  [HTTP ${og.status}]  (referenciado no <head>)`);

// sitemap + robots
const sm = await (await fetch(BASE + '/sitemap.xml')).text();
log(`\n=== /sitemap.xml`);
log('  ' + [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace('https://bragajr.adv.br', '')).join('\n  '));
const rb = await (await fetch(BASE + '/robots.txt')).text();
log(`\n=== /robots.txt\n` + rb.split('\n').map((l) => '  ' + l).join('\n'));

console.log(out.join('\n'));
