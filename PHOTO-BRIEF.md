# Brief de imagens — Site Braga Jr. Advogados

Inventário de **todas as imagens necessárias**, extraído do código + README
§10 + estratégia de imagens de blog (memória do projeto).

> **Nomes de arquivo a salvar:** lista autoritativa em
> [`public/images/README.md`](public/images/README.md). Cada `<Figure>` no
> código aponta para um caminho fixo; enquanto o arquivo não existir, o
> placeholder mostra o briefing **e o nome exato a salvar**. Soltou o arquivo
> com o nome certo → a foto entra no próximo `npm run build`.

Princípios fixos (README §6, §8.5, §8.6 / OAB Prov. 205/2021):
- **Sem stock genérico** ("pessoa sorrindo pro notebook"). Sem fotos de cliente
  / depoimento. Logos só de entidades oficiais.
- Retratos: 4:5, olhar direto, fundo neutro. Ambientes: **sem rosto**, luz
  natural, tom quente, foco em arquitetura/detalhe.
- `alt` geo-relevante mencionando o Rio já está redigido no código.
- Entrega técnica: servir via `next/image` → AVIF/WebP, lazy, `width/height`
  (CLS < 0,1). Originais grandes; o Next gera os tamanhos.

---

## 1 · Fotografia institucional / ambiente  *(4 slots fixos + pool reserva)*

| # | Asset | Aspecto | Resolução mín. | Onde aparece | Prioridade |
|---|-------|---------|----------------|--------------|------------|
| I-1 | `escritorio-ambiente.jpg` — interior amplo, luz natural, sem rosto | 4:5  | 1200×1500 | Hero da Home | **P0** |
| I-2 | `biblioteca.jpg` — livros antigos, luz lateral | 4:5  | 1200×1500 | Home (filosofia) + `/sobre` (filosofia) — reusado | **P1** |
| I-3 | `atuacao-banner.jpg` — sala comercial, panorâmica, sem rosto | 16:10 | 1600×1000 | Banner no topo de `/atuacao` | P1 |
| I-4 | `contato-escritorio.jpg` — sala comercial, sem rosto | 16:10 | 1600×1000 | Sidebar de `/contato`, acima do mapa | P1 |
| I-5 | `corredor-forum.jpg` — corredor de fórum, sem rosto | 16:10 | 1600×1000 | `/atuacao/direito-do-servidor` (hero, slot existente como `areas/direito-do-servidor.jpg`) | P1 |

**Pool reserva** — `institucional/sala-01.jpg`, `sala-02.jpg`, … : qualquer
ângulo do escritório que o cliente quiser salvar. Sem slot pré-fixo. Quando
você quiser uma nova foto em alguma página, me diz qual número e onde, que eu
ajusto o código pra usar.

---

## 2 · Retratos da equipe  *(6 assets únicos — 4:5, olhar direto, fundo neutro)*

| # | Pessoa | Onde | Prioridade |
|---|--------|------|------------|
| R-1 | Dr. Jorge Braga Jr. (sócio-fundador) | Home, `/sobre`, `/atuacao/*` (bloco "sócio responsável", reusado em **todas** as áreas) | **P0** |
| R-2 | Dra. Juliana Marinho Vasco de Oliveira (sócia) | Home, `/sobre` | **P0** |
| R-3 | Dra. Mayara Fontana Chagas Santos | Home, `/sobre` (associados) | P2 |
| R-4 | Dra. Vitória Fonseca | Home, `/sobre` | P2 |
| R-5 | Dra. Clara Vitória Rocha Batista | Home, `/sobre` | P2 |
| R-6 | Davi dos Santos de Oliveira | Home, `/sobre` | P2 |

> Pendência de conteúdo paralela (README §10): bio da Dra. Juliana e dos 4
> associados ainda não existe — fotografar não desbloqueia o texto.

---

## 3 · Imagens de área (heros conceituais)  *(6 assets — 16:10, sem rosto)*

Cada subpágina de área tem um hero. Conceitual/arquitetônico, não “pessoas”.

| # | Área | Rota | Prioridade |
|---|------|------|------------|
| A-1 | Servidor público → corredor de fórum *(= asset I-3, reusar)* | `/atuacao/direito-do-servidor` | P1 |
| A-2 | Entidades sindicais e associativas | `/atuacao/entidades-sindicais` | P2 |
| A-3 | Direito empresarial e corporativo | `/atuacao/corporativo` | P2 |
| A-4 | Direito civil | `/atuacao/direito-civil` | P2 |
| A-5 | Trabalhista (foco empresa) | `/atuacao/trabalhista-empresarial` | P2 |
| A-6 | Administração pública | `/atuacao/administracao-publica` | P2 |

> As 5 subpáginas novas estão `noindex` (rascunho até revisão jurídica); a
> imagem pode entrar junto com o sign-off do texto.

---

## 4 · Imagens editoriais do blog  *(7 capas + visuais internos)*

**Capas (1 por post — 16:10):** servem de capa, teaser na Home, card na
listagem `/blog`, hero do post e bloco "relacionados" — **1 asset por post,
reusado**. 7 posts → **7 capas**.

| # | Post / categoria | Prioridade |
|---|------------------|------------|
| B-1 | PAD e controle judicial — *Direito do servidor* (piloto, em destaque) | **P1** |
| B-2 | DPO terceirizado — *Compliance* | P2 |
| B-3 | Legitimidade de sindicato no STF — *Sindical* | P2 |
| B-4 | Progressão funcional — *Servidor* | P2 |
| B-5 | Lei 14.133 e servidor fiscal — *Licitações* | P2 |
| B-6 | Sustentação virtual — *Tribunais* | P2 |
| B-7 | Holding familiar — *Família · Sucessões* | P2 |

**Visuais internos (quando o corpo for escrito):** pela estratégia salva do
projeto — **1 imagem a cada 150–350 palavras** → post de 1.500–2.000 palavras
= **5–8 visuais**. Priorizar **infográficos, fluxogramas e gráficos de dados**
(não foto, não stock). ⚠️ Ressalva OAB deste cliente: **não** usar “isca
digital”/banner de captura; o único CTA é o ético já existente (“Agendar
consulta estratégica”). 7 posts × 5–8 ≈ **35–56 peças visuais** no total — mas
só conforme cada post for redigido e liberado.

---

## 5 · Logos de entidades  *(≈7 — fornecidos pelas entidades, não fotografados)*

Home, seção "Quem confia no escritório" (hoje texto em itálico + nota
placeholder). README §10 / §8.6: **logos oficiais**, fornecidos pelas próprias
entidades, vetor (SVG) de preferência:

DETRAN-RJ · SINTUPERJ · SINDALERJ · SINDENF · SINDJUSTIÇA · SINFAZERJ ·
Clube Olímpico de Jacarepaguá · (demais entidades representadas).

Prioridade P2. Substituem o grid de nomes; checar autorização de uso de marca.

---

## 6 · Mapa da sede  *(1 — não é foto)*

`/contato`: placeholder "MAPA · Centro · Av. Almirante Barroso". Opções:
mapa estático (imagem 16:10) ou embed. README §10: **coordenadas exatas** da
Av. Almirante Barroso, 63 ainda pendentes (hoje aproximadas em `lib/site.tsx`).
Prioridade P1.

---

## 7 · Ativos de marca / SEO  *(não-foto, necessários p/ produção)*

| # | Asset | Spec | Status | Prioridade |
|---|-------|------|--------|------------|
| M-1 | Imagem Open Graph / compartilhamento social | 1200×630 | **ausente** — metadata tem `twitter:summary_large_image` e `og` mas sem imagem | **P0** |
| M-2 | Favicon + ícones (`icon`, `apple-icon`) | 32/180/512 | ausente | P1 |
| M-3 | Logotipo do escritório (opcional) | SVG | header usa hoje wordmark serifa em texto — funciona; logo só se a marca tiver símbolo | P2 |

---

## Resumo executivo

- **Assets fotográficos únicos a produzir: ~14** — 3 institucionais + 6
  retratos + 5 heros de área novos (servidor reutiliza o corredor de fórum).
- **+ 7 capas editoriais** de blog.
- **+ ~7 logos** (de terceiros, não fotografar).
- **+ 1 mapa**, **+ ativos de marca/SEO** (OG é P0 — bloqueia compartilhamento
  decente em buscadores/redes).
- **Crítico p/ lançar (P0):** I-1 (hero Home), R-1 e R-2 (sócios), M-1 (OG).
- O resto degrada graciosamente: `<Placeholder>` continua exibindo o briefing
  até o asset real entrar — nada quebra sem as fotos.

### Quando os arquivos existirem
Trocar `<Placeholder>` por `next/image` mantendo o `alt` (já geo-relevante no
código) e `width/height` para preservar CLS < 0,1 (README §8.5). Posso fazer
essa troca incrementalmente, asset por asset, conforme forem chegando.
