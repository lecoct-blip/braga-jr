import type { Metadata } from 'next';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui';
import { Figure } from '@/components/figure';
import { NewsletterForm } from '@/components/newsletter-form';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID } from '@/lib/site';
import { POSTS, CATEGORIES } from '@/lib/blog';

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
  blogPost: POSTS.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    datePublished: p.published,
    url: `${SITE_URL}/blog/${p.slug}`,
    author: { '@id': ORG_ID },
  })),
};

export default function BlogPage() {
  const featured = POSTS.find((p) => p.featured)!;
  const rest = POSTS.filter((p) => !p.featured);

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

      {/* FEATURED + CATEGORIAS */}
      <div className="section">
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 64, alignItems: 'start' }}>

            <article className="reveal">
              <Link href={`/blog/${featured.slug}`} style={{ display: 'block' }}>
                <Figure
                  src={`images/blog/${featured.slug}.jpg`}
                  aspect="16/10"
                  label={`FOTO editorial · ${featured.kicker}`}
                  alt={`${featured.kicker} — artigo em destaque do blog Braga Jr. Advogados, Rio de Janeiro`}
                  priority
                  sizes="(max-width: 1024px) 100vw, 62vw"
                />
                <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <Eyebrow noRule>{featured.kicker} · em destaque</Eyebrow>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
                    {featured.dateLabel} · {featured.read}
                  </span>
                </div>
                <h2 style={{ marginTop: 18, fontSize: 'var(--t-display-md)', fontWeight: 400 }}>{featured.title}</h2>
                <p style={{ marginTop: 16, fontSize: 17, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{featured.excerpt}</p>
                <div style={{ marginTop: 24, fontSize: 13, color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.04em' }}>
                  Ler artigo completo &nbsp;<span className="arrow">→</span>
                </div>
              </Link>
            </article>

            <aside className="reveal" data-delay="2">
              <Eyebrow>Categorias</Eyebrow>
              {/* Filtro por categoria não está implementado nesta entrega →
                  lista visual (sem links mortos), com a ativa destacada. */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0' }}>
                {CATEGORIES.map((c) => (
                  <li
                    key={c.name}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '14px 0', borderBottom: '1px solid var(--border-soft)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 19,
                        color: c.active ? 'var(--accent)' : 'var(--ink)',
                      }}
                    >
                      {c.name}
                    </span>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.1em' }}>
                      {String(c.count).padStart(2, '0')}
                    </span>
                  </li>
                ))}
              </ul>

              <NewsletterForm />
            </aside>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* LISTAGEM COMPLETA */}
      <div className="section">
        <div className="container">
          <div className="section-head reveal">
            <Eyebrow>Mais publicações</Eyebrow>
            <h2>Análise <span className="s-it">por tema.</span></h2>
          </div>

          <div className="grid-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {rest.map((a, i) => (
              <article
                key={a.slug}
                className="reveal"
                data-delay={(i % 3) + 1}
                style={{ borderTop: '1px solid var(--border)', paddingTop: 24 }}
              >
                <Link href={`/blog/${a.slug}`} style={{ display: 'block' }}>
                  <Figure
                    src={`images/blog/${a.slug}.jpg`}
                    aspect="16/10"
                    label={`FOTO editorial · ${a.kicker}`}
                    alt={`${a.kicker} — artigo do blog Braga Jr. Advogados, Rio de Janeiro`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Eyebrow noRule>{a.kicker}</Eyebrow>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
                      {a.dateLabel} · {a.read}
                    </span>
                  </div>
                  <h3 style={{ marginTop: 14, fontSize: 22, lineHeight: 1.2, fontWeight: 400 }}>{a.title}</h3>
                  <p style={{ marginTop: 12, fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{a.excerpt}</p>
                  <div style={{ marginTop: 18, fontSize: 12, color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.04em' }}>
                    Ler &nbsp;<span className="arrow">→</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
