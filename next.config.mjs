/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Static export (`out/`) p/ hospedagem na Hostinger (Apache/LiteSpeed, sem
  // Node em produção). Gera HTML puro — ver DEPLOY-HOSTINGER.md.
  output: 'export',

  // Export estático não roda o otimizador de imagens do Next (precisa de
  // servidor). `unoptimized` faz <Image> servir o arquivo original — quando
  // as imagens reais chegarem (README §10), já funcionam na hospedagem estática.
  images: {
    unoptimized: true,
  },

  // NOTA — Redirects: `output: 'export'` IGNORA o `redirects()` do Next (ele
  // só roda em servidor Node). Os 301 da migração do WordPress agora vivem em
  // `public/.htaccess` (lido pelo Apache/LiteSpeed da Hostinger). Ao alterar
  // os redirects, edite o .htaccess — não há `redirects()` aqui. Inventário e
  // decisões de conteúdo continuam em MIGRATION-MAP.md.
};

export default nextConfig;
