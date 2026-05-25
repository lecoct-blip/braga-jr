# Auditoria SEO — Site Braga Jr. Advogados

Data: 2026-05-19 · Método: build de produção + crawl do **HTML renderizado**
(10 rotas) via `scripts/seo-audit.mjs`, confrontado com README §8 e best
practices técnicas. Nota: SEO local é o vetor mais importante deste site (§8).

---

## Veredito

**Conforme, com 1 defeito P0 corrigido nesta auditoria.** A fundação técnica é
sólida (structured data, canonical, robots/sitemap, render estático). Restam:
1 asset P0 (imagem OG não existe), ajustes P1 de comprimento de title/meta
(decisão de copy do escritório) e enriquecimentos P2 de SEO local.

---

## ✅ Conforme (verificado no HTML real)

| Item | Status |
|---|---|
| 1 `<h1>` por página, hierarquia limpa | ✅ todas |
| `<html lang="pt-BR">` | ✅ |
| `<link rel="canonical">` absoluto e correto | ✅ todas |
| `robots`: indexáveis = `index,follow,max-image-preview:large` | ✅ |
| `robots`: rascunhos (área scaffold, blog piloto) = `noindex,follow` | ✅ correto |
| JSON-LD `LegalService` global (@id estável) em **todas** as páginas | ✅ §8.2 |
| JSON-LD por página: WebPage/CollectionPage/AboutPage/ContactPage/Blog/Article+BlogPosting | ✅ §8.2 |
| `BreadcrumbList` em todas | ✅ §8.2 |
| `Service` aninhado nas áreas (provider → @id do LegalService) | ✅ §8.2 |
| Geo tags (geo.region, geo.position, ICBM) em todas | ✅ §8.1 |
| Open Graph completo (type/locale/site_name/url/title/description/image) | ✅ **após correção abaixo** |
| Twitter `summary_large_image` | ✅ §8.1 |
| `sitemap.xml`: só rotas indexáveis (exclui rascunhos, /style-guide, /api) | ✅ §8.4 |
| `robots.txt`: disallow /api,/_next,/style-guide,/area-restrita + sitemap | ✅ §8.4 |
| 301 dos URLs do WordPress antigo | ✅ §5 |
| `next/font` self-host (sem render-block do Google Fonts) | ✅ §8.5 |
| `next/image` (AVIF/WebP, lazy, dimensões → CLS), SSG/estático, JS ~87 kB | ✅ §8.5 |
| NAP idêntico em site/JSON-LD/rodapé (fonte única `lib/site.tsx`) | ✅ §8.3 |

---

## 🔴 P0 — corrigido nesta auditoria

**Open Graph incompleto em todas as páginas.** `og:site_name`, `og:locale`,
`og:type` e `og:image` estavam **ausentes** apesar de definidos no
`layout.tsx`. Causa: o Next App Router faz *merge raso* de `metadata` — quando
uma page exporta `openGraph`, substitui o objeto inteiro do layout (só
`og:title`/`description` sobrevivem porque o Next os deriva de
`title`/`description`). Violava o README §8.1 (exige `og:locale pt_BR` +
`site_name` + `image`).
**Correção aplicada:** helper `buildOg()` em `lib/site.tsx`, espalhado em todas
as 10 páginas. Reauditado: `type/locale/site_name/image` presentes e corretos
(website/profile/article conforme a página). ✔

---

## 🟠 P0 — pendente (asset, não código)

**`/og-image.jpg` retorna 404.** O `<head>` referencia a imagem (URL absoluta
correta), mas o arquivo não existe → preview social/SERP em branco. Criar
`public/og-image.jpg` (1200×630). Já consta no `PHOTO-BRIEF.md` como P0; pode
ser uma peça gráfica com a wordmark (não depende de fotógrafo).

---

## 🟡 P1 — comprimento de title/description — ✅ RESOLVIDO (2026-05-19)

**Aplicado e reauditado.** Template encurtado para ` · Braga Jr.` (12 chars),
títulos reescritos com palavra-chave geo na frente, descriptions ≤155, og
description duplicada removida (Next deriva de `metadata.description`). Medições
pós-correção: `/` 55/149 · `/atuacao` 53/134 · `/atuacao/direito-do-servidor`
58/132 · `/atuacao/corporativo` 50/152 · `/sobre` 47/142 · `/contato` 48/139 ·
`/blog` 53/129 · `/politica` 42/135 · `/termos` 25/147 — **todos ≤60/≤155**.
Posts de blog usam `title.absolute` (manchete editorial, sem sufixo de marca;
ex.: piloto 65 chars — aceitável para headline de artigo).

<details><summary>Medições originais (pré-correção) — histórico</summary>

O README §8.1 pede **title ≤ 60** e **description ≤ 160**. Medições reais:

| Rota | title (chars) | description (chars) |
|---|---|---|
| `/` | 75 ⚠ | 181 ⚠ |
| `/atuacao` | 89 ⚠ | 168 ⚠ |
| `/atuacao/direito-do-servidor` | **113 ⚠⚠** | 171 ⚠ |
| `/atuacao/corporativo` | 106 ⚠ | 152 ✅ |
| `/sobre` | 69 ⚠ | 185 ⚠ |
| `/contato` | 87 ⚠ | 174 ⚠ |
| `/blog` | 87 ⚠ | 160 ✅ |
| `/blog/pad-controle-judicial` | 87 ⚠ | 126 ✅ |
| `/politica-de-privacidade` | 52 ✅ | 158 ✅ |
| `/termos-de-uso` | 35 ✅ | 147 ✅ |

Observações:
- O sufixo de template `| Braga Jr. Advogados` (~22 chars) infla todos. O
  Google trunca ~580 px (~60 chars) — a parte de marca é cortada no SERP.
- **Contradição interna do README:** §8.1 manda ≤60, mas os `<title>` longos
  vieram **literais do mockup** (handoff). Title/description são copy de
  marketing/jurídica — **não reescrevi unilateralmente** (README §4: copy é
  final). Recomendação: encurtar mantendo a palavra-chave geo na frente
  (ex.: *"Advogado do Servidor Público no Rio de Janeiro | Braga Jr."* ≈ 56) e
  enxugar descriptions para ≤155. **Posso aplicar reescritas se aprovado.**

</details>

---

## 🔵 P2 — enriquecimentos de SEO local / structured data

1. **`LegalService` sem `image`, `logo`, `geo` (GeoCoordinates), `hasMap`,
   `sameAs`.** Para o local pack do Google, `geo` (lat/long) + `logo` +
   `sameAs` (Jusbrasil, OAB, redes) são sinais fortes. Há geo *meta tags*, mas
   não o `GeoCoordinates` no schema. Pendente: coordenadas exatas da sede
   (README §10) e logo/perfis. Adicionar quando existirem.
2. **Breadcrumb só em JSON-LD**, sem trilha visível. O Google pode exibir o
   rich result mesmo assim; trilha visível é ganho leve de UX/SEO.
3. **`/blog` indexável, mas só linka posts `noindex`** (piloto em revisão).
   Publicar ≥1 post (o piloto, após revisão jurídica → `status:'published'`)
   dá profundidade indexável real ao hub.
4. **Sem favicon/app icons** (`app/icon.png`, `app/apple-icon.png`). Polimento
   de marca/SERP; já no `PHOTO-BRIEF.md`.
5. **Páginas `noindex` carregam `canonical` próprio** — sinal levemente
   conflitante (tolerado pelo Google). Opcional: omitir canonical quando
   `noindex`.
6. Após encurtar os titles (P1), o `og:title` (derivado do title) também
   melhora — ganho duplo.

---

## Não-issues (preempção de falso-alarme)

- `&amp;` em title/description no HTML é **encoding correto** de `&` em
  atributo; o SERP exibe `&`. Não é bug.
- `og:url`/canonical da home sem barra final (`…adv.br`) — o Google trata como
  equivalente a `…adv.br/`. Consistente entre canonical e og:url. OK.
- `noindex` nos scaffolds de área e no piloto de blog é **intencional e
  correto** (conteúdo jurídico não revisado não deve indexar).

---

## Prioridade de ação

1. **P0** — criar `public/og-image.jpg` (bloqueia preview social; sem fotógrafo).
2. ~~**P1** — reescrever titles ≤60 e descriptions ≤155~~ ✅ **feito
   (2026-05-19)**, reauditado.
3. **P2** — ao obter coordenadas exatas + logo + perfis: enriquecer o
   `LegalService` (geo/logo/sameAs) — maior alavanca de **local pack**.
4. Publicar o post piloto após revisão jurídica (profundidade indexável).
