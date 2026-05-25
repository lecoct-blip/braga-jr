# Inteligência Competitiva · SEO + AEO

Data: 2026-05-21. Método: 5 subagentes em paralelo (1 por concorrente
orgânico real do nicho direito público/servidor RJ).

**Concorrentes analisados** (não os "aspiracionais" Veirano/Ramalho — esses
não disputam a SERP que nos interessa):

1. [Sérgio Merola](https://sergiomerola.adv.br/) — São Paulo + Goiânia; 171 posts; OAB CFOAB Direito Administrativo
2. [Morais & Tavares](https://moraistavares.adv.br/) — Juiz de Fora + SP; 12+ cidades geo-paramétricas; ~100 URLs
3. [Rogério Mello](https://rogeriomello.com.br/) — USP, doutor, 30+ anos PAD; 37 posts longform; 19 service pages
4. [Duarte e Almeida](https://duarteealmeida.adv.br/) — Natal/RN + SP; 115 posts; ADVBOX 2025
5. [Advocacia Reis](https://advocaciareis.adv.br/) — Recife + Caruaru; 263 posts em 23 sitemaps

---

## 1 · Os 7 padrões convergentes (mencionados em ≥ 3 dos 5 relatórios)

| # | Padrão | Quem | Por que funciona | Nosso status |
|---|---|---|---|---|
| 1 | **Volume + cadência de blog** (37–263 posts) | Todos | Topical authority; long-tail capture sistemática | Temos 1 (piloto). Eles têm **35–263×** mais |
| 2 | **FAQPage schema** | Reis, Morais; Duarte (FAQ sem schema) | Rich results na SERP + citação direta por LLM | ✅ **Implementado nesta sessão** (scaffold, noindex até revisão) |
| 3 | **Pillar page longform por área** (2.5–4.5 k palavras) | Merola, Reis, Rogério, Duarte | Hub topical + ranking em queries amplas | Nossas áreas são scaffold (~500 palavras) |
| 4 | **Author nomeado por post** (`Dr. X, OAB Y`) | Rogério, Duarte, Reis | LLMs citam pessoa nomeada, não "Equipe" | ✅ **Implementado** (era "Equipe", virou Dr. Jorge + OAB visível e no Schema Person) |
| 5 | **Hyperlinks para STF/STJ/Jusbrasil** dentro do post | Rogério, Reis, Duarte | E-E-A-T externo via citação a fontes oficiais | Zero outbound a fontes oficiais |
| 6 | **Sinonímia de URLs de serviço** (`/advogado-pad/` + `/processo-administrativo-disciplinar/`) | Rogério, Reis | Captura múltiplas formulações da intenção | Não usamos |
| 7 | **YouTube institucional** | Merola (38k IG, canal), Duarte (canal) | Autoridade visível + transcript indexável | Zero |

## 2 · Onde já batemos todos eles (defender essa vantagem)

| Vantagem nossa | Quem entre os 5 tem? |
|---|---|
| `Person` schema com `alumniOf` + `knowsAbout` + `identifier` OAB no founder | **Nenhum** |
| `LegalService` rico (`@id`, `hasOfferCatalog`, `GeoCoordinates`, `hasMap`, `sameAs` LinkedIn) | 2/5 parcial |
| `/llms.txt` curado com diferenciadores e contato | **Nenhum** (Duarte tem genérico do Rank Math; Reis 404; outros 404) |
| `robots.txt` libera GPTBot/Perplexity/Claude/Google-Extended | **Nenhum**; Duarte **bloqueia** AI (`ai-train=no`) — incoerência |
| `ScholarlyArticle` para publicações acadêmicas | **Nenhum** |
| Stack Next.js 14 SSG vs. WordPress (todos os 5) | **Nós únicos** |
| OAB-compliance estrito | **Nós únicos** — todos os 5 têm pelo menos 1 violação ou borderline |

## 3 · Práticas dos concorrentes que **NÃO copiamos** (armadilha OAB)

| Prática observada | Concorrente | Por que vetar |
|---|---|---|
| `[RECOMENDADO]` no `<title>` | Reis | art. 4º Prov. 205/2021 (alegação de recomendação) |
| 5–6 CTAs agressivos por página (`"FALE AGORA"`, `"PROTEJA SEUS INTERESSES"`) | Rogério, Reis | Publicidade desequilibrada |
| Hero emocional `"LIVRE-SE DA PERSEGUIÇÃO ESTATAL"` | Duarte | Borderline (apelo emocional sem fundamento) |
| Sales funnels `"R$20k em 6 meses"` em landings de mentoria | Merola | Mercantilização |
| Menu `Depoimentos` ou seção de testimonials nomeados | Ramalho (citado aspiracionalmente) | art. 4º Prov. 205/2021 (testimonial vedado) |
| `+90% taxa de êxito` | Ramalho | Promessa de resultado, vedada |

## 4 · Inventário comparativo dos 5

| Métrica | Merola | Morais | Rogério | Duarte | Reis | **Braga Jr.** |
|---|---|---|---|---|---|---|
| **Posts blog** | 171 | esporádico (off-topic) | 37 (longform 2.5–4.2k) | 115 | 263 | **1 (piloto)** |
| **Service pages** | 16 | ~100 (geo) | 19 (sinonímia) | 10 | 18 | 9 áreas + 1 nicho |
| **FAQ visível** | embed nos posts | 7 Q&A no /atuacao | parcial | 6 sem schema | 10+ por artigo | **10 (scaffold)** |
| **FAQPage schema** | ❌ | ✅ | ❌ | ❌ | ✅ | **✅ pronto p/ ativar** |
| **Person schema (sócio)** | ❌ | ❌ | ❌ | ❌ | ❌ | **✅ rico** |
| **LegalService schema** | ❌ | parcial | ❌ | ✅ | ✅ | **✅ rico** |
| **`/llms.txt`** | ❌ | ❌ | ❌ | ✅ genérico | ❌ | **✅ curado** |
| **AI bots no robots.txt** | aberto (default) | aberto | aberto | **bloqueia** | aberto | **✅ libera explícito** |
| **LinkedIn pessoal** | ✅ | n/d | ✅ ativo | n/d | ✅ | **✅ vinculado em sameAs** |
| **YouTube** | ✅ ativo | n/d | n/d | ✅ canal | n/d | ❌ |
| **OAB compliance** | borderline | ✅ | borderline | ✅ | borderline | **✅ estrito** |

## 5 · Implementado nesta sessão (após auditoria)

1. **`/faq` com `FAQPage` schema** (scaffold, status `draft`)
   - 10 perguntas estruturadas em 5 categorias: PAD, Sindicância, Servidor, Honorários, Atendimento
   - Schema FAQPage **só é emitido quando status flipar para `published`** (Dr. Jorge revisa primeiro) — emitir schema com afirmações não-revisadas é pior do que não ter schema
   - Página: noindex, fora do sitemap, fora do footer enquanto draft
   - Cada resposta marcada com flag `verify` para revisão pontual
   - `next.config.mjs` ajustado: removido redirect antigo `/faq → /sobre` da migração WP

2. **Author do `Article` virou `Person` nomeado** (era `Organization`)
   - JSON-LD: `author.@type = Person`, `name = Dr. Jorge Álvaro da Silva Braga Jr.`, `identifier = OAB/RJ 72.994`, `worksFor.@id = #org` (cruza com `founder.@id` do `LegalService`)
   - HTML visível: `Por Dr. Jorge Álvaro da Silva Braga Jr. · OAB/RJ 72.994` (era `Equipe Braga Jr.`)
   - **Impacto AEO**: LLMs agora citam pessoa nomeada com credencial OAB, não "Equipe X"

## 6 · Roadmap para fechar os 5 gaps restantes

### P0 — próximas 2-3 semanas

**G1 · Revisar e publicar o `/faq`** (Dr. Jorge)
- Hoje todos os 5 concorrentes que têm FAQ ganham rich results no Google e citação prioritária no Perplexity/ChatGPT. Nosso schema está pronto, só esperando a revisão das 10 respostas.
- Esforço: 1h de revisão do Dr. Jorge → flip `FAQ_STATUS = 'published'`

**G3 · Expandir 1 pillar page** (`/atuacao/direito-do-servidor`)
- Hoje é scaffold ~500 palavras. Os concorrentes têm 2.5–4.5 k palavras nessa altura.
- Estrutura proposta: introdução + 5 blocos (PAD, sindicância, progressão funcional, aposentadoria, controle judicial) com 400-500 palavras cada + FAQ aninhada + cross-links para blog/publicações.
- Esforço: 6-8h de redação (eu monto estrutura e tom; Dr. Jorge ajusta substantivo)

### P1 — próximo mês

**G5 · Hyperlinks oficiais nos posts**
- Quando cada post citar uma decisão (STF, STJ, Súmula Vinculante, Lei), incluir hyperlink à fonte oficial (jusbrasil.com.br, portal.stf.jus.br, planalto.gov.br).
- Cada link externo a fonte oficial vale como **endorsement de pesquisa real** — é o que faz o post parecer "trabalho técnico" e não "blog SEO".
- Esforço: incremental por post; revisão do piloto leva 30 min para adicionar 2-3 links.

**G6 · Sinonímia controlada de URLs**
- Criar `/atuacao/defesa-pad` (espelha conteúdo de `/atuacao/direito-do-servidor`) com `canonical` para a primária.
- Captura buscas alternativas ("advogado pad", "defesa em pad", "processo administrativo disciplinar advogado") sem violar duplicação.
- Esforço: 2h (página nova + canonical).

### P2 — próximos 60-90 dias

**G1 (volume de blog)** — alinhado com cadência de 2 posts/semana já confirmada pelo Dr. Jorge. Em 12 semanas, sairíamos de 1 → 24 posts publicados (suficiente para começar a aparecer organicamente).

**G7 (YouTube)** — canal institucional com 1 vídeo curto (3–5 min) por mês. Dr. Jorge respondendo dúvida real. Transcript automático → indexação + autoridade pessoal visível.

**G3 (pillar das outras 8 áreas)** — repetir o tratamento de pillar page para corporativo, entidades-sindicais, etc. Aceita ritmo de 1 por mês.

## 7 · Métrica para acompanhar o progresso

90 dias após publicação real:

- **Branded search** "Braga Jr. Advogados" → manter #1 (já estamos)
- **Query nicho** "advogado servidor público Rio" → entrar no top 10 (hoje fora)
- **Query genérica** "advogado direito público Rio de Janeiro" → top 20 (hoje fora)
- **Citação por Perplexity/ChatGPT** quando perguntado "qual escritório de direito público no Rio?" — medir mensalmente
- **Rich results FAQPage** aparecendo na SERP para perguntas como "o que é PAD"

## 8 · Diagnóstico final

**Estamos arquiteturalmente à frente, estruturalmente atrás.**

Em **arquitetura técnica** (schema, llms.txt, AI bots, OAB-compliance, stack moderno),
batemos os 5 concorrentes — em alguns casos por margem larga (somos os únicos com
`Person` rico, os únicos com `/llms.txt` curado, os únicos que liberam bots IA
explicitamente). É vantagem assimétrica real, não polish.

Em **volume de conteúdo**, estamos atrás de todos — 1 post versus 37–263. Esse é
o jogo dos próximos 90 dias. Com a cadência de 2 posts/semana confirmada pelo
Dr. Jorge, fechamos para 24 posts em 12 semanas (ainda atrás em volume, mas
suficiente para topical authority começar a render).

**Caminho mais rápido para superar**: combinar a vantagem técnica (que ninguém
no nicho replica facilmente) com volume mediano (24 posts em 90 dias). Não
precisamos chegar a 263 — precisamos chegar a 30 posts publicados com qualidade
+ arquitetura técnica superior. É a equação que vence.
