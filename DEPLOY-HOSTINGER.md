# Deploy na Hostinger (static export)

O site é um app **Next.js 14** publicado como **HTML estático** (`output: 'export'`)
e servido pela **Hostinger** (Apache/LiteSpeed + PHP). Não há servidor Node em
produção.

## Como atualizar o site (fluxo do dia a dia)

**Basta dar push na branch `main`.** Um GitHub Action faz o resto:

```bash
git add -A
git commit -m "..."
git push origin main
```

O workflow `.github/workflows/deploy-hostinger.yml`:

1. roda em todo push na `main`;
2. instala dependências (`npm ci`);
3. builda o static export (`npm run build` → pasta `out/`);
4. publica o conteúdo de `out/` na branch **`production`** (via
   `peaceiris/actions-gh-pages`).

A branch `production` passa a conter **só o site pronto** (HTML/CSS/JS + `.htaccess`
+ `contato.php`). É essa branch que vai pra Hostinger.

## Como a `production` chega na Hostinger (configurar uma vez)

Escolha **uma** das opções no hPanel da Hostinger:

- **Git deployment (recomendado):** hPanel → *Avançado → Git* → conecte o
  repositório `lecoct-blip/braga-jr`, branch **`production`**, diretório de
  destino `public_html`. A cada deploy do Action, faça o *pull/deploy* no hPanel
  (ou configure o auto-deploy/webhook se o plano oferecer).
- **Manual:** baixe o conteúdo da branch `production` (Code → Download ZIP) e
  suba para `public_html` via Gerenciador de Arquivos/FTP.

> O conteúdo da `production` deve ir para a **raiz** de `public_html` — o
> `index.html`, o `.htaccess` e o `contato.php` precisam ficar na raiz do site.

## Apontar o domínio (quando for ao ar de verdade)

O domínio `bragajr.adv.br` já está na Hostinger. Garanta no hPanel que ele aponta
para a hospedagem onde está o `public_html` com o conteúdo da `production`.
Em produção, `SITE_URL` resolve para `https://bragajr.adv.br` (canonical/OG/
sitemap/robots corretos) e o site indexa normalmente.

## Detalhes técnicos que o export exige (já resolvidos)

- **Formulário de contato:** a antiga API route `/api/contato` (Node) não existe
  mais — não funciona em export estático. Foi substituída por **`public/contato.php`**
  (PHP nativo da Hostinger), para onde o `ContactForm.tsx` posta. Confirme
  SPF/DKIM do domínio no painel da Hostinger para o e-mail não cair em spam.
  Destinatário atual: `atendimento@bragajr.adv.br` (ajuste no topo do
  `contato.php` se necessário).
- **Redirects 301 (migração WordPress):** o `output: 'export'` ignora o
  `redirects()` do Next. Eles foram reescritos em **`public/.htaccess`** (lido
  pelo Apache/LiteSpeed). Ao mexer em redirect, edite o `.htaccess` — é a fonte
  da verdade agora. Inventário/decisões: `MIGRATION-MAP.md`.
- **URLs limpas:** o `.htaccess` serve `/pagina` a partir de `/pagina.html` e
  faz 301 de `/pagina.html` → `/pagina`, mantendo os canonicals (sem barra final)
  consistentes. Resolve também a colisão entre `atuacao.html` e a pasta `atuacao/`.
- **Imagens:** `images.unoptimized = true` (sem otimizador de servidor no export).

## Pendências antes do lançamento real (não bloqueiam o deploy técnico)

- Revisão jurídica dos rascunhos `[VERIFICAR]` (piloto de blog + áreas) → mudar
  `status` para `published`.
- `public/og-image.jpg` (1200×630) se quiser card social em JPG; hoje há
  `og-image.webp`.
- CNPJ na Política de Privacidade; fotos reais (ver `PHOTO-BRIEF.md`).
- Testar o envio do `contato.php` no ambiente real da Hostinger (mail()).
