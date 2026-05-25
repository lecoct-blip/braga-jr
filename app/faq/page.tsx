import type { Metadata } from 'next';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID, NAP } from '@/lib/site';
import { FAQ_ITEMS, FAQ_STATUS, faqByCategory } from '@/lib/faq-content';

/**
 * /faq — perguntas frequentes com FAQPage JSON-LD.
 *
 * Gap competitivo apontado pelos 5 relatórios de concorrência (2026-05-21):
 * formato Q&A é extraído preferencialmente por LLMs (Perplexity, ChatGPT,
 * Gemini) e por rich snippets do Google. Schema FAQPage emitido só quando
 * FAQ_STATUS === 'published' (depois da revisão do responsável técnico).
 */
const url = `${SITE_URL}/faq`;

export const metadata: Metadata = {
  title: 'Perguntas Frequentes',
  description:
    'Dúvidas comuns sobre PAD, sindicância, defesa do servidor público, honorários e atendimento. Respostas técnicas do escritório Braga Jr. Advogados, Rio de Janeiro.',
  alternates: { canonical: '/faq' },
  // Enquanto o conteúdo for rascunho, página fica fora do índice e do sitemap.
  robots:
    FAQ_STATUS === 'published'
      ? { index: true, follow: true, 'max-image-preview': 'large' }
      : { index: false, follow: true },
  openGraph: buildOg(url),
};

export default function FAQPage() {
  const groups = faqByCategory();
  const categories = Object.keys(groups) as (keyof typeof groups)[];

  // FAQPage schema só é emitido quando o conteúdo foi revisado. Não queremos
  // sinalizar autoridade em afirmações que o responsável técnico ainda não
  // assinou — isso seria pior que não ter schema nenhum.
  const faqLd =
    FAQ_STATUS === 'published'
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ_ITEMS.map((it) => ({
            '@type': 'Question',
            name: it.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: it.a.join(' '),
            },
          })),
        }
      : null;

  return (
    <>
      <JsonLd
        data={[
          ...(faqLd ? [faqLd] : []),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Perguntas frequentes', path: '/faq' },
          ]),
        ]}
      />

      <div className="pagehead">
        <div className="container container--narrow">
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <h1 style={{ marginTop: 24, fontSize: 'var(--t-display-md)' }}>
            Dúvidas <span className="s-it">recorrentes.</span>
          </h1>
          <p
            className="article-lead"
            style={{ marginTop: 32, maxWidth: 720 }}
          >
            Reunimos as dúvidas mais comuns que recebemos sobre PAD, sindicância,
            defesa do servidor público, honorários e o funcionamento do
            atendimento. Cada resposta é técnica e não substitui a análise
            individual do caso.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container container--narrow">
          {FAQ_STATUS === 'draft' && (
            <div
              className="draft-banner"
              role="note"
              style={{ marginBottom: 48 }}
            >
              <span className="draft-tag">
                Rascunho · não publicado · noindex
              </span>
              <p>
                <strong>
                  Scaffold de FAQ no tom da marca, aguardando revisão.
                </strong>{' '}
                As afirmações jurídicas marcadas precisam de conferência por{' '}
                {NAP.partner} ({NAP.oab}). Esta página{' '}
                <strong>não é indexada nem aparece no sitemap</strong> até
                aprovação. Ao finalizar: trocar{' '}
                <code>FAQ_STATUS = &apos;published&apos;</code> em{' '}
                <code>lib/faq-content.ts</code>.
              </p>
            </div>
          )}

          {categories.map((cat) => {
            const items = groups[cat];
            if (items.length === 0) return null;
            return (
              <section
                key={cat}
                className="reveal"
                style={{ marginBottom: 56 }}
              >
                <Eyebrow>{cat}</Eyebrow>
                <div style={{ marginTop: 24 }}>
                  {items.map((it) => (
                    <article
                      key={it.id}
                      id={it.id}
                      style={{
                        borderTop: '1px solid var(--border)',
                        padding: '28px 0',
                      }}
                    >
                      <h2
                        style={{
                          fontSize: 22,
                          fontWeight: 500,
                          lineHeight: 1.3,
                          marginBottom: 18,
                        }}
                      >
                        {it.q}
                        {it.verify && FAQ_STATUS === 'draft' && (
                          <span
                            className="verify"
                            style={{
                              marginLeft: 8,
                              fontSize: 11,
                              verticalAlign: 'middle',
                            }}
                          >
                            verificar
                          </span>
                        )}
                      </h2>
                      {it.a.map((p, i) => (
                        <p
                          key={i}
                          style={{
                            marginBottom: 12,
                            color: 'var(--ink-muted)',
                            lineHeight: 1.7,
                          }}
                        >
                          {p}
                        </p>
                      ))}
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          {/* CTA final — padrão observado em concorrentes, mas sóbrio. */}
          <div
            className="reveal"
            style={{
              marginTop: 64,
              padding: 'clamp(28px, 4vw, 44px)',
              border: '1px solid var(--border)',
              background: 'var(--bg-soft)',
              textAlign: 'center',
            }}
          >
            <Eyebrow noRule>Não encontrou sua dúvida?</Eyebrow>
            <h2 style={{ marginTop: 16, fontSize: 'var(--t-display-sm)' }}>
              Fale com o <span className="s-it">sócio responsável.</span>
            </h2>
            <div style={{ marginTop: 28 }}>
              <Link href="/contato" className="btn btn--primary">
                Enviar mensagem <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
