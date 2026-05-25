# Onde salvar cada imagem

Salve os arquivos **exatamente** com estes nomes/caminhos. Assim que o arquivo
existir, o site troca o placeholder pela foto no próximo build (`npm run build`).
Formato: JPG ou PNG (o Next gera AVIF/WebP automaticamente). Não precisa
otimizar antes — só entregar em boa resolução.

## institucional/  (sala comercial / ambiente — sem rosto, luz natural)
> **Nota técnica:** `.jpg` ou `.webp` — tanto faz. O `Figure` tenta ambas as
> extensões; o `next/image` aceita `.webp` como fonte e re-otimiza p/ AVIF/WebP.

**Slots fixos** (o código já espera estes nomes — solte e a foto entra):
- `institucional/escritorio-ambiente.webp` · 4:5  · Hero da Home **✓ entregue**
- `institucional/biblioteca.webp`           · 4:5  · Home + /sobre **✓ entregue**
- `institucional/atuacao-banner.webp`       · 16:10 · `/atuacao` **✓ entregue**
- `institucional/contato-escritorio.webp`   · 16:10 · `/contato` (sidebar) **✓ entregue**

**Pool já entregue** (15 ângulos — disponíveis para alocar em novos slots):
- `area-bebidas.webp` · `cadeira-justica.webp` · `cafeteira.webp`
- `escritorio-amplo.webp` · `nicho-movel.webp` · `objetos-detalhes.webp`
- `parede-decoracao.webp` · `recepcao.webp` · `reuniao-escritorio.webp`
- `sala-cafe.webp` · `mesa-livro-lupa.webp` *(usado em /sobre como acento)*
- `sala-reuniao.webp` · `sala-reuniao-mesa.webp` · `tv-reuniao-online.webp`
- `xadrez.webp` *(usado também em `blog/pad-controle-judicial.webp`)*

## entidades/  (logos do marquee "Quem confia no escritório" na Home)
Hoje renderiza os nomes em serifa itálica como fallback. Soltou o arquivo,
entra no carrossel automaticamente. Aceita `.svg` (preferido) · `.png` · `.webp` · `.jpg`:
- `entidades/detran-rj.svg`
- `entidades/sintuperj.svg`
- `entidades/sindalerj.svg`
- `entidades/sindenf.svg`
- `entidades/sindjustica.svg`
- `entidades/sinfazerj.svg`
- `entidades/clube-olimpico-jacarepagua.svg`

> Tratamento padrão: grayscale + 70% de opacidade; cor cheia ao passar o mouse.
> Use logos oficiais (preferência por SVG vetorial em fundo transparente,
> max-height efetiva ~40px). **OAB §8.6:** só selos oficiais — não inventar.

## Raiz `public/`
- `og-image.webp` · 1200×630 (ideal) · compartilhamento social **✓ entregue** (usa `escritorio-amplo.webp` como placeholder; trocar por export 1200×630 quando possível)

## logo/  (logo do escritório — header + rodapé)
- `logo/braga-jr.svg`           · horizontal · `SiteHeader` (desktop) + rodapé **✓ entregue**
- `logo/braga-jr-vertical.svg`  · vertical   · `SiteHeader` (mobile, via `<picture>` < 768px) **✓ entregue**

> Ambos os arquivos são **PNGs embutidos em wrapper SVG** (não vetor verdadeiro
> — o horizontal tem 1 PNG; o vertical tem 3 PNGs empilhados). Funcionam, mas
> sem as vantagens de escala infinita / `currentColor` que SVG vetorial real
> teria. Substituir um dia se o designer entregar a versão em path.

## Favicons em `app/`  (convenção do Next App Router — `<link>` auto-emitido)
- `app/icon0.svg`        · vetor · ícone primário (aba) **✓ entregue**
- `app/icon1.png`        · 512×512 · fallback PNG **✓ entregue**
- `app/apple-icon.png`   · 180×180 · atalho do iPhone **✓ entregue**

> **Quirk do Next 14:** com `.svg` E `.png` no mesmo nome básico (`icon.*`), só um
> é emitido. A solução é o **sufixo numérico** (`icon0.svg`, `icon1.png`) —
> ambos viram `<link rel="icon">` distintos no `<head>`.

## equipe/  (retratos 4:5 · olhar direto · fundo neutro)
- `equipe/jorge-braga-jr.jpg`   **(P0)** — usado na Home, /sobre e em TODAS as áreas
- `equipe/juliana-marinho.jpg`  **(P0)**
- `equipe/mayara-fontana.jpg`
- `equipe/vitoria-fonseca.jpg`
- `equipe/clara-vitoria.jpg`
- `equipe/davi-oliveira.jpg`

## areas/  (hero conceitual 16:10 · sem rosto · arquitetura)
- `areas/direito-do-servidor.webp`     **✓ entregue** (corredor de fórum)
- `areas/administracao-publica.webp`   **✓ entregue** (Tribunal de Justiça RJ)
- `areas/corporativo.webp`             **✓ provisório** (= institucional/sala-reuniao-mesa)
- `areas/direito-civil.webp`           **✓ provisório** (= institucional/escritorio-amplo)
- `areas/trabalhista-empresarial.webp` **✓ provisório** (= institucional/reuniao-escritorio)
- `areas/entidades-sindicais.webp`     **✓ provisório** (= institucional/recepcao)
- `areas/holding-naples.webp`          **✓ provisório** (= institucional/tv-reuniao-online — nicho)

> *Provisórios* = uma foto do pool da sala comercial substituindo o hero
> conceitual que o brief original pedia. Trocar quando vier o ângulo
> definitivo (ex.: detalhe arquitetônico/iconográfico próprio da área).

## blog/  (capa editorial 16:10 — 1 por post; serve teaser, card, hero e relacionados)
- `blog/pad-controle-judicial.jpg`        (Direito do servidor — em destaque)
- `blog/dpo-terceirizado-pme.jpg`         (Compliance)
- `blog/sindicato-legitimidade-stf.jpg`   (Sindical)
- `blog/progressao-funcional-rj.jpg`      (Servidor)
- `blog/lei-licitacoes-fiscalizacao.jpg`  (Licitações)
- `blog/sustentacao-virtual-tribunais.jpg`(Tribunais)
- `blog/holding-familiar-3-perguntas.jpg` (Família · Sucessões)

## contato/
- `contato/mapa-sede.jpg`  · 16:10 · export estático/print do mapa da sede

## Marca / SEO  (raiz de /public e /app)
- `public/og-image.jpg`     · 1200×630 · imagem de compartilhamento social **(P0)**
- `app/icon.png`            · 512×512 · favicon (convenção do Next, troca automática)
- `app/apple-icon.png`      · 180×180 · ícone iOS (opcional)

> Os caminhos acima são relativos a `public/`, exceto os de "Marca / SEO".
> Enquanto o arquivo não existir, o site mostra o briefing + este nome exato.
