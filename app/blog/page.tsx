import type { Metadata } from 'next';
import { Eyebrow } from '@/components/ui';
import { Figure } from '@/components/figure';
import { BlogList, type FigureBundle } from '@/components/blog-list';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID } from '@/lib/site';
import { POSTS, CATEGORIES, isPublic } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Análise Jurídica no Rio de Janeiro',
  description:
    'Análise técnica em direito público, servidor, compliance, LGPD, licitações e tribunais superiores, pelos advogados do escritório.',
  keywords:
    'artigos direito público, análise jurídica, blog advogado rio, lgpd compliance artigos',
  alternates: { canonical: '/blog' },
  openGraph: buildOg(`${SITE_URL}/blog`),
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog',
  description: 'Análise técnica de temas em direito público, sindical e corporativo.',
  url: `${SITE_URL}/blog`,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': ORG_ID },
  about: { '@id': ORG_ID },
  blogPost: POSTS.filter(isPublic).map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    datePublished: p.published,
    url: `${SITE_URL}/blog/${p.slug}`,
    author: { '@id': ORG_ID },
  })),
};

export default function BlogPage() {
  const publishedPosts = POSTS.filter(isPublic);

  // Figures resolvidas server-side (Figure usa fs em build) e passadas ao
  // client component como mapa por slug. Duas variantes por post: featured
  // (priority + sizes maior) e card (lazy + sizes do grid).
  const figures: Record<string, FigureBundle> = Object.fromEntries(
    publishedPosts.map((p) => [
      p.slug,
      {
        featured: (
          <Figure
            src={`images/blog/${p.slug}.jpg`}
            aspect="16/10"
            label={`FOTO editorial · ${p.kicker}`}
            alt={`${p.kicker} — artigo em destaque do blog Braga Jr. Advogados, Rio de Janeiro`}
            priority
            sizes="(max-width: 1024px) 100vw, 62vw"
          />
        ),
        card: (
          <Figure
            src={`images/blog/${p.slug}.jpg`}
            aspect="16/10"
            label={`FOTO editorial · ${p.kicker}`}
            alt={`${p.kicker} — artigo do blog Braga Jr. Advogados, Rio de Janeiro`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ),
      },
    ]),
  );

  return (
    <>
      <JsonLd
        data={[
          blogSchema,
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
        ]}
      />

      <div className="pagehead">
        <div className="container">
          <Eyebrow>Blog · Textos &amp; Notícias</Eyebrow>
          <h1 style={{ marginTop: 24 }}>
            Análise técnica<br /><span className="s-it">em transformação.</span>
          </h1>
          <p>
            Artigos abertos, sem cadastro. Temas em direito público,
            corporativo e sindical, escritos pelos sócios e advogados do
            escritório.
          </p>
        </div>
      </div>

      <BlogList posts={publishedPosts} categories={CATEGORIES} figures={figures} />
    </>
  );
}
