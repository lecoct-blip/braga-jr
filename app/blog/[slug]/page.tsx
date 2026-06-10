import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Eyebrow } from '@/components/ui';
import { Figure } from '@/components/figure';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID, NAP, FOUNDER_BIO } from '@/lib/site';
import { POSTS, getPost, longDate } from '@/lib/blog';
import { POST_BODIES } from '@/lib/blog-content';

type Params = { params: { slug: string } };

// SSG: gera uma rota estática por post (bom p/ LCP e indexação — README §8.5).
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: 'Artigo não encontrado' };
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    // absolute: sem sufixo de marca. SEO override (post.seoTitle/seoDescription)
    // tem precedência sobre o título/excerpt editorial — útil quando a manchete
    // do h1 não bate com a intenção de busca pretendida.
    title: { absolute: post.seoTitle ?? post.title },
    description: post.seoDescription ?? post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    // Só conteúdo revisado e liberado é indexável. Rascunho/placeholder =
    // noindex (segue links, mas não entra no índice nem é citável).
    // Nota: usar o objeto completo (não `undefined`) — o Next 14 omite o meta
    // quando o child seta `undefined`, em vez de herdar do layout.
    robots:
      post.status === 'published'
        ? { index: true, follow: true, 'max-image-preview': 'large' }
        : { index: false, follow: true },
    openGraph: buildOg(url, { type: 'article', publishedTime: post.published }),
  };
}

export default function PostPage({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const Body = POST_BODIES[post.slug];

  // Article + BlogPosting — README §8.2. Autor agora é o sócio-fundador
  // (Person), não a Org: LLMs e Google Knowledge Graph citam **pessoa**
  // nomeada com credenciais, não "Equipe". O @id cruza com founder.@id do
  // LegalService global (lib/site.tsx) → grafo: autor === sócio-fundador.
  // Padrão observado em todos os 5 concorrentes orgânicos do nicho.
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': ['Article', 'BlogPosting'],
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published,
    dateModified: post.published,
    inLanguage: 'pt-BR',
    url,
    mainEntityOfPage: url,
    author: {
      '@type': 'Person',
      '@id': `${ORG_ID}-founder`,
      name: NAP.partner,
      identifier: NAP.oab,
      jobTitle: 'Sócio-fundador',
      worksFor: { '@id': ORG_ID },
    },
    publisher: { '@id': ORG_ID },
    articleSection: post.kicker,
    isPartOf: { '@id': ORG_ID },
  };

  return (
    <>
      <JsonLd
        data={[
          articleLd,
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <div className="pagehead">
        <div className="container container--narrow">
          <Eyebrow>{post.kicker}</Eyebrow>
          <h1 style={{ marginTop: 24, fontSize: 'var(--t-display-md)' }}>{post.title}</h1>
          <div className="article-meta" style={{ marginTop: 24 }}>
            <time dateTime={post.published}>{longDate(post.published)}</time>
            <span>·</span>
            <span>{post.read} de leitura</span>
            <span>·</span>
            <span>
              Por <Link href="/sobre">{NAP.partner}</Link> · {NAP.oab}
            </span>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container container--narrow">
          <div className="reveal">
            <Figure
              src={`images/blog/${post.slug}.jpg`}
              aspect="16/10"
              label={`FOTO editorial · ${post.kicker}`}
              alt={`${post.kicker} — ${post.title}. Braga Jr. Advogados, Rio de Janeiro`}
              priority
              sizes="(max-width: 880px) 100vw, 880px"
            />
          </div>

          <p className="article-lead reveal" data-delay="1" style={{ marginTop: 40 }}>
            {post.excerpt}
          </p>

          <div className="article-body reveal" data-delay="2" style={{ marginTop: 28 }}>
            {Body ? (
              <>
                {post.status === 'draft' && (
                  <div className="draft-banner" role="note">
                    <span className="draft-tag">Rascunho · não publicado · noindex</span>
                    <p>
                      <strong>Scaffold gerado no tom da marca.</strong> Cada
                      trecho marcado <span className="verify">exemplo</span>{' '}
                      precisa de conferência jurídica. Este texto{' '}
                      <strong>não vai ao ar nem é indexado</strong> até revisão
                      e liberação do responsável técnico, {NAP.partner} (
                      {NAP.oab}). Ao finalizar: remover as marcações e mudar o
                      status do post para <code>published</code>.
                    </p>
                  </div>
                )}
                <Body />
              </>
            ) : (
              <div className="article-pending">
                {/* README §10: corpo é redação do escritório — não inventamos
                    análise jurídica. Estrutura/SEO prontos; texto pendente. */}
                <strong>Conteúdo em preparação.</strong> Este artigo está com
                título, resumo e ficha técnica definidos; o texto integral será
                publicado pela equipe do escritório. A estrutura, os metadados e
                o schema (<code>Article</code> / <code>BlogPosting</code>) já
                estão prontos para produção — basta inserir o corpo.
              </div>
            )}
          </div>

          {/* Assinatura do autor (responsável técnico) ao fim do artigo —
              reforça E-E-A-T/autoria nomeada e integra os CTAs. Substitui o CTA
              genérico anterior. Bio em lib/site.tsx (fonte única). */}
          <div className="reveal" data-delay="3" style={{ marginTop: 56 }}>
            <Eyebrow noRule>Sobre o autor</Eyebrow>
            <div
              className="card card-split"
              style={{
                marginTop: 20, display: 'grid', gridTemplateColumns: '150px 1fr',
                gap: 28, padding: 'clamp(24px, 4vw, 36px)', alignItems: 'start',
              }}
            >
              <Figure
                src="images/equipe/jorge-braga-jr.jpg"
                aspect="4/5"
                label="FOTO · Dr. Jorge Braga Jr. · 4:5 · olhar direto · fundo neutro"
                alt={`${NAP.partner}, sócio-fundador — Braga Jr. Advogados, Rio de Janeiro`}
                sizes="150px"
                style={{ width: '100%' }}
              />
              <div>
                <div className="serif" style={{ fontSize: 24, lineHeight: 1.2 }}>{NAP.partner}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.12em', marginTop: 6 }}>
                  {NAP.oab}
                </div>
                <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.7, color: 'var(--ink-muted)' }}>
                  {FOUNDER_BIO}
                </p>
                <div style={{ marginTop: 22, display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                  <Link href="/publicacoes" className="btn btn--link">
                    Ver publicações <span className="arrow">→</span>
                  </Link>
                  <Link href="/contato" className="btn btn--link">
                    Agendar consulta <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* ARTIGOS RELACIONADOS */}
      <div className="section">
        <div className="container">
          <div className="section-head reveal">
            <Eyebrow>Continue lendo</Eyebrow>
            <h2>Outras <span className="s-it">análises.</span></h2>
          </div>
          <div className="grid-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {related.map((a, i) => (
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
