import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { POSTS, isPublic } from '@/lib/blog';
import { NICHES, isNichePublic } from '@/lib/niches-content';
import { AREAS_CONTENT, isAreaPublic } from '@/lib/areas-content';
import { FAQ_STATUS } from '@/lib/faq-content';

// README §8.4 — lista rotas indexáveis (não inclui /style-guide nem /api).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ['/', '/atuacao', '/atuacao/direito-do-servidor', '/sobre', '/contato', '/blog', '/publicacoes'];
  // /faq entra no sitemap só quando o conteúdo foi revisado e liberado.
  if (FAQ_STATUS === 'published') routes.push('/faq');
  const legal = ['/politica-de-privacidade', '/termos-de-uso'];
  return [
    ...routes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.8,
    })),
    // Só posts revisados e liberados ('published') entram no sitemap.
    ...POSTS.filter(isPublic).map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(`${p.published}T12:00:00`),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    // Páginas de área (rotas dinâmicas /atuacao/[slug]) — só 'published'.
    ...AREAS_CONTENT.filter(isAreaPublic).map((a) => ({
      url: `${SITE_URL}/atuacao/${a.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Idem nichos: só 'published' entra (piloto 'draft' fica fora).
    ...NICHES.filter(isNichePublic).map((n) => ({
      url: `${SITE_URL}/atuacao/${n.parentArea.slug}/${n.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...legal.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
