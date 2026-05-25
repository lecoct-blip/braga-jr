# Publicar um preview para o cliente (Vercel)

Objetivo: URL `*.vercel.app` privada para o cliente revisar/aprovar — **sem**
indexar no Google e sem competir com o domínio final.

## Passos (você executa — precisa logar na sua conta Vercel)

```bash
cd braga-jr-site
npx vercel            # 1ª vez: login + cria o projeto. Gera URL *.vercel.app
npx vercel --prod     # publica o deploy
```

Não precisa configurar variável de ambiente nenhuma: o build roda sem
segredos (o `/api/contato` é stub) e a `SITE_URL` é **auto-detectada** da
Vercel no preview (canonical/OG/sitemap passam a refletir a URL do preview).

## Torne o preview PRIVADO (essencial — conteúdo jurídico não revisado)

No painel da Vercel → projeto → **Settings → Deployment Protection**:
- Ative **Password Protection** (ou Vercel Authentication).
- Compartilhe a URL + senha com o cliente.

Defesa em profundidade já no código (não exige configuração):
- Fora do domínio de produção, **todo o site sai `noindex,nofollow`** e o
  `robots.txt` responde `Disallow: /` (não anuncia sitemap). Mesmo sem a senha,
  o preview não indexa.

## Quando virar o site oficial (produção)

- Aponte o domínio `bragajr.adv.br` para a Vercel (Settings → Domains).
- Em produção (`VERCEL_ENV=production`) a `SITE_URL` volta sozinha para
  `https://bragajr.adv.br`, o `robots.txt` libera e o site passa a indexar.
- Opcional: forçar uma URL manualmente via env `NEXT_PUBLIC_SITE_URL`
  (ver `.env.example`).

## Ainda pendente antes do lançamento real (não bloqueia o preview)

- `public/og-image.jpg` (1200×630) — hoje 404; preview/social sem card visual.
- Revisão jurídica dos rascunhos `[VERIFICAR]` (piloto de blog + 5 áreas) →
  mudar `status` para `published`.
- CNPJ na Política de Privacidade; coordenadas exatas da sede; fotos reais
  (ver `PHOTO-BRIEF.md` / `public/images/README.md`).
