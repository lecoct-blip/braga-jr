# Braga Jr. Advogados — site institucional

Next.js 14 (App Router, TS, Tailwind + `app/globals.css` à mão). Escritório de
advocacia; conformidade OAB Prov. 205/2021 + LGPD. Produção: bragajr.adv.br.

## Build & deploy
- Static export: `npm run build` → `out/` (`output:'export'`). NÃO rode `next build` com `next dev` ativo (corrompe `.next`).
- Deploy: push em `main` → Action `deploy-hostinger.yml` publica `out/` na branch `production` → Hostinger (Apache/LiteSpeed+PHP) serve essa branch. Ver DEPLOY-HOSTINGER.md.
- Export IGNORA `redirects()` do Next → 301 vivem em `public/.htaccess`. Form de contato = `public/contato.php` (não há API route).

## CSS / responsividade (app/globals.css)
- Mobile = bloco `@media (max-width:768px)` com `!important`. `!important` NÃO vence inline → grid inline precisa de classe-gancho (ex.: `.card-split`, `.timeline-row`) p/ o media query alcançar.
- Padding vertical sempre LONGHAND (`padding-top/bottom`), nunca `padding: X 0`, em classes que combinam com `.container` — o shorthand zera o gutter lateral.
- Cor visível nos 2 temas: use `var(--bronze)` (token fixo), não `var(--ink)`/`var(--ice)` (invertem no dark).
- Títulos: `clamp()` em vez de px fixo p/ escalar no mobile.
- `Figure`: aspect-ratio vem da classe `.ph--portrait/wide/square` (vale p/ imagem real também) — não setar height.

## Convenções
- Fonte única NAP + JSON-LD: `lib/site.tsx`. Blog: `lib/blog.ts`. FAQ: `lib/faq-content.ts` (schema FAQPage só quando published).
- `draft`/`placeholder` = noindex + fora do sitemap até sign-off do responsável técnico (Dr. Jorge, OAB/RJ 72.994). Nunca inventar citação legal/súmula.
- OAB Prov. 205/2021: sem auto-elogio, comparação, depoimento ou promessa de resultado.
- Imagens reais: soltar em `public/images/...` com nome exato (ver public/images/README.md) → `Figure` troca o placeholder no próximo build.
