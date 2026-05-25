/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Imagens reais ainda não existem (README §10). Quando chegarem, trocar os
  // <Placeholder> por next/image — AVIF/WebP + responsive cuida do LCP (§8.5).
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Redirects do WordPress antigo. statusCode:301 explícito (permanent:true
  // do Next emite 308; o brief §5 pede 301 literal p/ SEO).
  // Inventário completo a partir do sitemap_index.xml do WP atual — ver
  // MIGRATION-MAP.md para a planilha URL→destino + decisões de conteúdo.
  async redirects() {
    const r = (source, destination) => ({ source, destination, statusCode: 301 });
    return [
      // Páginas estáticas equivalentes (README §5 + sitemap real)
      r('/areas-de-atuacao', '/atuacao'),
      r('/areas-de-atuacao/:path*', '/atuacao'),
      r('/sobre-nos', '/sobre'),
      r('/sobre-nos/:path*', '/sobre'),
      r('/textos-e-noticias', '/blog'),
      r('/textos-e-noticias/:path*', '/blog'),
      // NOTA: o redirect antigo /faq → /sobre foi removido em 2026-05-21
      // porque agora temos página dedicada /faq com FAQPage schema (sinal AEO
      // apontado pela auditoria competitiva). Quem tinha o link antigo do WP
      // /faq cai direto na FAQ nova — comportamento mais útil que /sobre.
      r('/mapa-do-site', '/sitemap.xml'),
      // /termos-de-uso, /politica-de-privacidade e /contato têm mesmo path
      // no novo site — não precisam de redirect.

      // Posts reais do WP — preservam link equity ao redirecionar para /blog.
      // Quando os artigos forem republicados como blog posts no novo site
      // (lib/blog.ts com slug próprio), trocar o destino para o slug final.
      r('/principios-lei-responsabilidade-fiscal-jorge-braga', '/blog'),
      r('/a-retorica-nas-decisoes-judiciais-entre-a-busca-do-justo-e-a-seguranca-juridica', '/blog'),
      r('/defesa-em-sindicancia-rj', '/atuacao/direito-do-servidor'),

      // Categorias do WP → área correspondente no novo site
      r('/category/direito-servidor-publico', '/atuacao/direito-do-servidor'),
      r('/category/direito-publico-administrativo', '/atuacao/administracao-publica'),
      r('/category/:cat*', '/blog'),

      // Páginas de autor do WP → /sobre
      r('/author/:slug*', '/sobre'),

      // /area-restrita — README §5 dizia "a definir / /login"; pragmaticamente
      // mandamos pra /contato (canal pra qualquer demanda restrita) até o
      // login do cliente existir, se for o caso.
      r('/area-restrita', '/contato'),

      // /elementor-2168 e similares (lixo do plugin) — NÃO redirecionar.
      // 404 é o sinal correto p/ Google deindexar conteúdo gerado por plugin.
    ];
  },
};

export default nextConfig;
