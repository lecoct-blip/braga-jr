# Migração do WordPress antigo — auditoria + mapa de redirects

Data da coleta: 2026-05-21. Fonte: `bragajr.adv.br/sitemap_index.xml` + páginas.

---

## Resumo executivo

O WP antigo (Yoast SEO) expõe **17 URLs únicas** no sitemap:

| Tipo | Quantidade | Observação |
|---|---|---|
| Pages | 9 | Todas mapeadas (5 com 301, 3 mesmo path, 1 pendente) |
| Posts | 4 | 2 artigos reais do Dr. Jorge + 1 landing-post + 1 lixo Elementor |
| Categories | 3 | 2 mapeadas; 1 (sem-categoria) catch-all |
| Authors | 1 | `lecoctgmail-com` → /sobre |

**Tracking:** nenhum Google Analytics, GTM ou Meta Pixel encontrado no site
antigo. Clean slate para LGPD/SEO no novo (instalar GA4 + Search Console do
zero se vocês quiserem analytics).

**CNPJ:** não publicado no site antigo (não obrigatório). Continua pendente.

---

## Inventário completo + status de redirect

| URL antiga | Destino novo | Status |
|---|---|---|
| `/` | `/` | mesmo path — ok |
| `/sobre-nos/` | `/sobre` | ✅ 301 (configurado) |
| `/areas-de-atuacao/` | `/atuacao` | ✅ 301 |
| `/textos-e-noticias/` | `/blog` | ✅ 301 |
| `/faq/` | `/sobre` | ✅ 301 |
| `/mapa-do-site/` | `/sitemap.xml` | ✅ 301 |
| `/contato/` | `/contato` | mesmo path — ok |
| `/termos-de-uso/` | `/termos-de-uso` | mesmo path — ok |
| `/politica-de-privacidade/` | `/politica-de-privacidade` | mesmo path — ok |
| `/area-restrita/` | `/contato` | ✅ 301 (**adicionado nesta auditoria**) |
| `/principios-lei-responsabilidade-fiscal-jorge-braga/` | `/blog` | ✅ 301 (**novo**) |
| `/a-retorica-nas-decisoes-judiciais-entre-a-busca-do-justo-e-a-seguranca-juridica/` | `/blog` | ✅ 301 (**novo**) |
| `/defesa-em-sindicancia-rj/` | `/atuacao/direito-do-servidor` | ✅ 301 (**novo**) |
| `/category/direito-servidor-publico/` | `/atuacao/direito-do-servidor` | ✅ 301 (**novo**) |
| `/category/direito-publico-administrativo/` | `/atuacao/administracao-publica` | ✅ 301 (**novo**) |
| `/category/sem-categoria/` (e qualquer outra) | `/blog` | ✅ 301 catch-all (**novo**) |
| `/author/lecoctgmail-com/` (e qualquer outro) | `/sobre` | ✅ 301 catch-all (**novo**) |
| `/elementor-2168/` | (não redirecionar) | ⚠️ 404 intencional (lixo do plugin) |

Todos implementados em `next.config.mjs` com `statusCode: 301` literal.

---

## Conteúdo reaproveitável extraído

### 1 · Bios reais da equipe (atualizar `app/sobre/page.tsx`)

O novo site usa bios mais curtas. As **reais do WP** trazem dados que faltavam:

| Pessoa | Dado novo extraído do WP |
|---|---|
| **Dr. Jorge Braga Jr.** | Certificação em IA aplicada ao Direito · **Fundou o Departamento Jurídico do Sisejufe/RJ** · 30+ entidades sindicais |
| **Dra. Juliana Marinho** | Faculdade **Cândido Mendes** · Direito Público + **Direito de Família** · **Chefiou o Departamento Jurídico da TurisRio** |
| **Dra. Mayara Fontana** | **UFRJ** (Faculdade Nacional de Direito) · Direito Público + **Direitos das Diversidade Sexual e de Gênero** |
| **Dra. Vitória Fonseca** | Mediação de conflitos · atendimento ao público · Direitos das Famílias · Direito Civil · **recuperação de crédito** |
| **Dra. Clara Vitória Rocha Batista** | Especializada em Direito Público |
| **Davi dos Santos de Oliveira** | **UNESA-RJ, 8º período** · estagiário inscrito na OAB/RJ |

> Decisão pra Dr. Jorge: incorporar essas informações no `/sobre` ou manter
> as bios mais enxutas do mockup? Posso atualizar se você der OK.

### 2 · Caso emblemático (verificável, OAB-OK)

> **"Defesa simultânea de 300 Oficiais de Justiça"** — fato verificável,
> demonstra capacidade organizacional. Pode entrar na faixa de stats da Home
> ou como bullet numa página de área. Forte e on-brand.

### 3 · Artigos do Dr. Jorge (publicáveis)

#### Artigo 1 — *"Os Princípios Norteadores da Lei de Responsabilidade Fiscal"*

- **Autor:** Dr. Jorge Álvaro da Silva Braga Jr.
- **Data WP:** 26/01/2026
- **Status:** corpo integral extraído (abaixo). Pronto para publicar com
  revisão leve.
- **Slug sugerido:** `lrf-principios-norteadores`
- **Categoria sugerida:** Direito Público / Administrativo

<details><summary>Corpo integral extraído do WP</summary>

A chegada da **Lei Complementar n.º 101**, a Lei de Responsabilidade Fiscal
(LRF), representou um avanço sem precedentes no sistema jurídico brasileiro.
Mais do que um conjunto de regras, a LRF materializa os anseios da sociedade
por um controle rigoroso e eficiente dos gastos públicos.

### Regras vs. Princípios: A Base da Decisibilidade

Diferente das regras, que são descritivas e retrospectivas, os **princípios**
são normas finalísticas. Eles buscam promover um "estado ideal das coisas",
servindo como bússola para o administrador público em um cenário
pós-positivista.

> "O direito não é mero somatório de regras avulsas… projeta-se em sistema,
> é unidade de sentido, é valor incorporado em regra."

### A Evolução dos Conceitos Administrativos

| Princípio Tradicional | Evolução Moderna |
|---|---|
| Legalidade: estrita obediência à norma | Legitimidade: vontade soberana do povo |
| Eficácia: cumprimento de requisitos formais | Eficiência: alcance efetivo da finalidade pública |
| Responsabilidade: assumir riscos da atuação | Responsividade: dever para com o cidadão |

### Pilares Específicos da LRF

**Equilíbrio fiscal** — metas de resultado entre receitas e despesas,
prevenindo riscos à saúde financeira do ente público.

**Prudência** — limites rigorosos; orçamento reflete realidade patrimonial,
evita déficits estruturais.

**Transparência** — substitui o formalismo burocrático pela clareza; sociedade
atua como fiscal direto.

### Conclusão

A LRF é o marco de uma postura moderna da Administração Pública. Ao priorizar
princípios como equilíbrio e transparência, ela busca proteger o "mínimo
existencial" e os valores da sociedade.
</details>

#### Artigo 2 — *"A Retórica nas Decisões Judiciais"*

- **Autor:** Dr. Jorge Álvaro da Silva Braga Jr.
- **Data WP:** 22/01/2026
- **Status:** **só temos o resumo** — o WP indica que o texto integral está
  num **PDF baixável**. Precisaríamos do PDF para republicar como blog post.
- **Slug sugerido:** `retorica-decisoes-judiciais`

#### "Defesa em sindicância RJ" (post #3)

Conteúdo é mais **landing page de área** do que análise jurídica autêntica
(5 estratégias enumeradas, com CTA pra agendar consulta). **Sobreposição
clara com a futura subpágina `/atuacao/pads-sindicancias`** quando ela for
construída. Recomendação: não republicar como blog post; usar como insumo
para a subpágina de PAD quando ela for redigida.

### 4 · E-mail de contato adicional descoberto

Site antigo lista **`contato@bragajr.adv.br`** como e-mail geral, além do
`bragajr@bragajr.adv.br` e `atendimento@bragajr.adv.br` que já temos no novo
site. **Adicionar ao `NAP` em `lib/site.tsx`?** Decisão sua — se essa caixa
existe e é checada, vale incluir no sidebar do `/contato`.

### 5 · Detalhe de horário

WP atual: "Seg-Sex 9-18h, **Sábado mediante consulta**, casos urgentes via
WhatsApp". O novo site só menciona Seg-Sex 9-18h. Decisão sua: incluir a
linha "Sábado mediante consulta" no `/contato`?

---

## Conteúdo a NÃO migrar (OAB / Provimento 205/2021)

O site antigo carrega 3 elementos que **violam o Provimento 205/2021** e o
próprio §8.6 do README. **Nenhum foi importado** para o novo site:

1. **"237 avaliações no Google · 5/5 estrelas"** — avaliações de cliente são
   testimonials disfarçados, vedados.
2. **"70% dos clientes se tornam amigos pessoais"** — mercantilização
   relacional + viés comparativo implícito ("a maioria gosta tanto que…").
3. **"Direito 5.0"** — buzzword de marketing. Substituído no novo site pelo
   framing técnico "análise preditiva via IA" no Método (mais sóbrio).

> Recomendo formalmente ao Dr. Jorge **remover esses 3 itens do WP antigo
> também**, mesmo que a operação ainda fique no ar por algumas semanas —
> são exposição ativa enquanto durarem.

---

## Pendências que essa auditoria fechou — ou não

| Item da §10 do README | Status após auditoria |
|---|---|
| Bios da Dra. Juliana e dos 4 associados | ✅ extraídas; pendente decisão de incorporar |
| Conteúdo dos 7 posts do blog | 🟡 só 2 artigos reais existem no WP (Jorge); 1 deles parcial (PDF) |
| Lista das entidades | ✅ confirma as 7 já no marquee (DETRAN-RJ, SINTUPERJ, SINDALERJ, SINDENF, SINDJUSTIÇA, SINFAZERJ, Clube Olímpico) |
| Coordenadas exatas da sede | ✅ resolvido — `-22.908255, -43.17707` (pino do Google Business Profile); plugado em meta tags + GeoCoordinates do JSON-LD + hasMap |
| Decisão sobre /area-restrita / login | ✅ resolvida pragmaticamente → /contato (pode mudar depois) |
| Mapa real do /contato | 🔴 ainda pendente (WP atual também não tem) |
| CNPJ | ✅ resolvido — escritório não possui; Política passou a identificar controlador por **responsabilidade técnica + OAB** (art. 5º, VI da LGPD aceita) |

---

## Próximos passos antes do switchover DNS

1. **Decidir os 4 ajustes de conteúdo** acima (bios atualizadas; 300 oficiais;
   contato@; sábado).
2. **Decidir sobre o(s) artigo(s) do Dr. Jorge** — publicar a LRF
   integralmente? Pedir o PDF da Retórica?
3. **CNPJ + coordenadas exatas** — informações que só vocês têm.
4. **Configurar Google Analytics 4** (se quiserem analytics) e adicionar a
   propriedade no **Google Search Console** apontando para
   `https://bragajr.adv.br`. Como o WP atual não tinha tracking, é setup
   limpo — não há histórico a importar.
5. **Solicitar logos das entidades** (e-mails formais já discutidos) — slots
   prontos em `public/images/entidades/`.
6. **Sessão de fotos da equipe** (P0 visual restante) — slots em
   `public/images/equipe/`.
7. **No dia do switchover:** apontar `bragajr.adv.br` para a Vercel; o WP
   atual continua respondendo até a propagação DNS terminar; nenhum visitante
   fica órfão porque todas as URLs do sitemap antigo têm 301 configurado.
