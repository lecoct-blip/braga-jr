import type { Metadata } from 'next';
import { Eyebrow } from '@/components/ui';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID, NAP } from '@/lib/site';
import { PUBLICACOES } from '@/lib/publicacoes-content';

export const metadata: Metadata = {
  title: 'Publicações do Sócio — Artigos Acadêmicos',
  description:
    'Trabalhos acadêmicos publicados pelo sócio-fundador Dr. Jorge Braga Jr. (OAB/RJ 72.994) em programas de pós-graduação — direito público, ambiental, processual e filosofia jurídica.',
  alternates: { canonical: '/publicacoes' },
  openGraph: buildOg(`${SITE_URL}/publicacoes`),
};

const collectionPage = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Publicações',
  description:
    'Produção acadêmica do sócio-fundador Dr. Jorge Braga Jr.',
  url: `${SITE_URL}/publicacoes`,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': ORG_ID },
  about: { '@id': ORG_ID },
};

// Author como Person (mais preciso que Organization p/ artigo científico).
const authorJsonLd = {
  '@type': 'Person',
  name: NAP.partner,
  identifier: NAP.oab,
  jobTitle: 'Sócio-fundador',
  worksFor: { '@id': ORG_ID },
} as const;

export default function PublicacoesPage() {
  // Ordem reverse-chronological — 2007 → 2005.
  const items = [...PUBLICACOES].sort((a, b) => b.year - a.year);

  const articlesLd = items.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: p.title,
    datePublished: String(p.year),
    inLanguage: 'pt-BR',
    learningResourceType: 'Artigo de especialização',
    author: authorJsonLd,
    publisher: { '@id': ORG_ID },
    url: `${SITE_URL}/publicacoes#${p.slug}`,
    encoding: {
      '@type': 'MediaObject',
      contentUrl: `${SITE_URL}/${p.file}`,
      encodingFormat: 'application/pdf',
      contentSize: `${p.fileSizeKB}KB`,
    },
    about: p.area,
  }));

  return (
    <>
      <JsonLd
        data={[
          collectionPage,
          ...articlesLd,
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Publicações', path: '/publicacoes' },
          ]),
        ]}
      />

      <div className="pagehead">
        <div className="container">
          <Eyebrow>Produção acadêmica</Eyebrow>
          <h1 style={{ marginTop: 24 }}>
            Publicações <span className="s-it">do sócio.</span>
          </h1>
          <p>
            Trabalhos acadêmicos do sócio-fundador {NAP.partner} ({NAP.oab})
            elaborados em programas de pós-graduação. Reproduzidos aqui no
            formato original, com a data de elaboração preservada — refletem o
            estado do direito à época da publicação.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container container--narrow">
          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {items.map((p, i) => (
              <li
                key={p.slug}
                id={p.slug}
                className="reveal"
                data-delay={(i % 3) + 1}
                style={{
                  padding: '40px 0',
                  borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: '1px solid var(--border-soft)',
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--accent)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.year} · {p.area}
                </div>
                <h2
                  className="serif"
                  style={{ fontSize: 28, lineHeight: 1.2, marginTop: 12, fontWeight: 400 }}
                >
                  {p.title}
                </h2>
                <div
                  className="mono"
                  style={{
                    fontSize: 12,
                    color: 'var(--ink-faint)',
                    letterSpacing: '0.06em',
                    marginTop: 8,
                  }}
                >
                  {p.context}
                </div>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.65,
                    color: 'var(--ink-muted)',
                    marginTop: 18,
                    maxWidth: '62ch',
                  }}
                >
                  {p.synopsis}
                </p>
                <a
                  href={`/${p.file}`}
                  className="btn btn--ghost"
                  download
                  style={{ marginTop: 24, fontSize: 13 }}
                  aria-label={`Baixar PDF: ${p.title} (${p.fileSizeKB} KB)`}
                >
                  Baixar PDF <span style={{ color: 'var(--ink-faint)' }}>· {p.fileSizeKB} KB</span> <span className="arrow">↓</span>
                </a>
              </li>
            ))}
          </ol>

          <p
            className="mono"
            style={{
              marginTop: 48,
              fontSize: 11,
              color: 'var(--ink-faint)',
              letterSpacing: '0.06em',
              lineHeight: 1.7,
            }}
          >
            Os artigos refletem posições doutrinárias e estado do direito à
            época da elaboração. Para análise atualizada de casos concretos,
            consultar diretamente.
          </p>
        </div>
      </div>
    </>
  );
}
