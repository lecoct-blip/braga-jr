# UX Audit · Braga Jr. Advogados

Data: 2026-05-21. Método: 6 subagentes em paralelo (a11y, mobile, IA, forms, microcopy, hierarquia visual).

---

## Já implementado nesta auditoria

| Item | Origem | Arquivo |
|---|---|---|
| Skip-to-content link | A11y P0 | `app/layout.tsx` + `globals.css` `.skip-link` |
| `:focus-visible` global p/ teclado | A11y P0 | `globals.css` |
| Cookie banner `role="dialog"` → `role="region"` (correção semântica) | A11y P0 | `components/cookie-consent.tsx` |
| "Liderança" → "Atuação do escritório" (OAB Prov. 205/2021) | Microcopy P0 | `app/page.tsx`, `app/sobre/page.tsx` |
| Honeypot server-side em `/api/contato` | Forms P0 | `app/api/contato/route.ts` |

---

## P0 pendente (recomendo implementar antes do go-live)

1. **Indicação "(nova aba)" no `aria-label` de links `target="_blank"`** — site-header WhatsApp, footer Sedes, map-link, etc. (a11y; ~10 lugares)
2. **Breadcrumb visual** em páginas profundas (`/blog/[slug]`, `/atuacao/[slug]`, `/atuacao/[slug]/[niche]`, `/publicacoes`) — JSON-LD já existe; falta o `<nav>` para usuário ver. Componente `<BreadcrumbNav>` novo, ~20 min.
3. **Grids 3-col `repeat(3, 1fr)` inline em `.grid-areas` quebram em mobile** — em `app/page.tsx:281` (áreas Home, 9 cards) e `components/area-template.tsx:140` (subáreas). Falta classe específica + override `@media (max-width: 1024px)` → 2col, `@media (max-width: 768px)` → 1col. CSS-only fix.
4. **Card de sócio com `gridTemplateColumns: '160px 1fr'` fixo** em `components/area-template.tsx:159` — em viewport 320px, foto ocupa 50% e texto fica ilegível. Adicionar classe `.card--socio` que colapsa em mobile.
5. **`inputmode` ausente em inputs `tel` e `email`** — `ContactForm.tsx` e `newsletter-form.tsx`. Em iOS, abre teclado errado. Fix: adicionar `inputMode="tel"` / `inputMode="email"`.
6. **`autocomplete` ausente nos inputs** — perde autopreenchimento; UX degradada.
7. **Newsletter checkbox sem `id` + `aria-describedby`** — leitor de tela não associa o texto ao input.

---

## P1 (alto valor, fazer logo)

8. **/atuacao mostra 9 cards com 6 áreas em estado `noindex` sem badge "em revisão"** — usuário clica esperando conteúdo, cai em rascunho. Falta visual cue no card.
9. **Páginas `/blog/[slug]` e `/publicacoes` são dead-end** — não há link "← Voltar para Blog"; ScrollReveal força a rolagem até "Continue lendo" no final.
10. **Tipografia fragmentada** — fontSizes 14, 14.5, 18, 24 sem variável; 23+ usos de `fontSize: 14` deveriam virar `--t-label: 14px`.
11. **Padding ad-hoc nos cards** — 20px e 28px usados em pessoa-card mas fora da escala (`--s-*` é múltiplo de 4). Criar `.card--featured` (32px) e `.card--compact` (24px).
12. **Newsletter button** com estilo inline duplicado em vez de `.btn--primary` — divergência sutil em dark mode (cor accent ≠ champagne).
13. **Eyebrows com "Área de atuação · I/II/III"** — números ordinais textuais redundantes; mover para tratamento visual via CSS.
14. **`.s-it` (itálico-acento) na Home tem 9 ocorrências** — risco de maneirismo; ideal 5-6.
15. **CTAs inconsistentes**: "Ler", "Ler completo", "Ler artigo completo" coexistem. Padronizar: `Ler artigo →` em todo lugar.
16. **"Especialização em holding Brasil-Flórida →"** (link na banda Naples) — quebra o padrão `Verbo + complemento mínimo`. Sugestão: `Ver especialização →`.
17. **/blog tem 7 cards, 6 placeholders + 1 rascunho** — usuário chega esperando blog ativo, encontra apenas drafts. Considerar publicar 1 post ou ocultar placeholders.
18. **Rate-limit ausente em `/api/contato`** — bot pode fazer flood. Implementar (in-memory simples ou Upstash Redis).
19. **Mensagem de erro genérica no submit do form** — não diferencia 422 (validação) de 5xx (server). Melhorar.

---

## P2 (polimento futuro)

20. Alt de logos da marquee: trivial (`Logo X`) → `Logo X — entidade representada pelo escritório`.
21. `.cookie-banner` shadow hardcoded — extrair para variável `--shadow`.
22. `.site-tabs a::after` transition 320ms — fora da escala `--t-fast/med/slow`.
23. `.field-input:focus` muda cor sem `transition`.
24. Spacing inline 18, 22, 28, 36 fora da escala (`--s-*` múltiplos de 4).
25. Botão "Enviar outro contato" pós-sucesso no ContactForm para UX repetitiva.
26. Mensagens de erro de email/telefone ainda têm caso edge (e-mail vazio + telefone inválido).
27. Reduzir gaps inline (gap: 80 vira gap: 32 no mobile).
28. Hover state pause-on-marquee sem timing suave.
29. `prefers-reduced-motion` cobre animações, mas reveal stagger pode falhar — verificar.
30. Adicionar `.card--person` (170px 1fr) como classe reutilizável.

---

## Bugs descobertos pela auditoria

Nenhum bug funcional encontrado. O site está estruturalmente sólido — todos os achados são de polimento, a11y, ou OAB-compliance fina. tsc 0; build limpo.
