import Link from 'next/link';
import { Eyebrow } from '@/components/ui';
import { Figure } from '@/components/figure';
import { NAP } from '@/lib/site';
import type { AreaContent } from '@/lib/areas-content';
import type { NicheContent } from '@/lib/niches-content';

/**
 * Template único das subpáginas de área (3 atos — README §7.3). Recebe os
 * dados de lib/areas-content e renderiza a estrutura idêntica à da página
 * direito-do-servidor. Banner de rascunho quando status==='draft'.
 *
 * Se `niches` for fornecido (apenas para páginas-mãe de área), renderiza uma
 * seção "Especializações" acima do CTA listando os nichos publicados/rascunho
 * sob aquela área.
 */
export function AreaTemplate({
  data,
  niches,
}: {
  data: AreaContent;
  niches?: NicheContent[];
}) {
  return (
    <>
      {/* PAGE HEAD */}
      <div className="pagehead">
        <div className="container">
          <Eyebrow>{data.numeral}</Eyebrow>
          <h1 style={{ marginTop: 24 }}>
            {data.title1}<br /><span className="s-it">{data.title2}</span>
          </h1>
          <p>{data.intro}</p>
          <div className="row" style={{ marginTop: 28 }}>
            <span className="badge badge--accent">{data.badges[0]}</span>
            {data.badges.slice(1).map((b) => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>
        </div>
      </div>

      {data.status === 'draft' && (
        <div className="container" style={{ marginTop: 32 }}>
          <div className="draft-banner" role="note">
            <span className="draft-tag">Rascunho · não publicado · noindex</span>
            <p>
              <strong>Scaffold gerado no tom da marca.</strong> Cada trecho
              marcado <span className="verify">exemplo</span> precisa de
              conferência jurídica. Esta página{' '}
              <strong>não vai ao ar nem é indexada</strong> até revisão e
              liberação do responsável técnico, {NAP.partner} ({NAP.oab}). Ao
              finalizar: remover as marcações e mudar o status da área para{' '}
              <code>published</code>.
            </p>
          </div>
        </div>
      )}

      {/* HERO IMAGEM + INTRO */}
      <div className="section section--tight">
        <div className="container">
          <div className="area-hero" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
            <div className="reveal">
              <Figure
                src={`images/areas/${data.slug}.jpg`}
                aspect="16/10"
                label={`FOTO · ${data.title1} · arquitetura · luz natural · sem rosto`}
                alt={`${data.title1} ${data.title2} — Braga Jr. Advogados, Rio de Janeiro`}
                sizes="(max-width: 1024px) 100vw, 55vw"
                style={{ width: '100%' }}
              />
            </div>
            <div className="reveal" data-delay="2" style={{ paddingTop: 16 }}>
              <Eyebrow noRule>{data.heroEyebrow}</Eyebrow>
              <p style={{ marginTop: 18, fontSize: 18, lineHeight: 1.6 }}>{data.heroP1}</p>
              <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.6, color: 'var(--ink-muted)' }}>
                {data.heroP2}
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* TRÊS ATOS */}
      <div className="section">
        <div className="container">
          <div className="section-head reveal">
            <Eyebrow>Abordagem em três tempos</Eyebrow>
            <h2>Da primeira conversa <span className="s-it">à decisão protocolada.</span></h2>
          </div>

          <div className="acts" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {data.atos.map((a, i) => (
              <div key={a.n} className="reveal" data-delay={i + 1}>
                <div className="serif" style={{ fontSize: 72, lineHeight: 1, color: 'var(--accent)', opacity: 0.45, fontStyle: 'italic' }}>
                  {a.n}
                </div>
                <h3 style={{ marginTop: 12 }}>{a.title}</h3>
                <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.65, color: 'var(--ink-muted)' }}>{a.p}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.7 }}>
                  {a.items.map((it, j) => (
                    <li
                      key={j}
                      style={{
                        borderLeft: `1px solid ${a.accent ? 'var(--accent)' : 'var(--border)'}`,
                        paddingLeft: 14,
                        marginBottom: j < a.items.length - 1 ? 10 : 0,
                      }}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* SUBÁREAS */}
      <div className="section--deep">
        <div className="container section">
          <div className="section-head reveal">
            <Eyebrow>O que cabe nesta área</Eyebrow>
            <h2>Frentes específicas <span className="s-it">dentro da área.</span></h2>
          </div>

          <div className="grid-areas" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {data.subareas.map((s, i) => (
              <div key={s.t} className="card reveal" data-delay={(i % 3) + 1} style={{ padding: 24 }}>
                <h4 style={{ fontSize: 20, fontWeight: 500 }}>{s.t}</h4>
                <p style={{ marginTop: 12, fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SÓCIO RESPONSÁVEL + ARTIGOS RELACIONADOS */}
      <div className="section">
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div className="reveal">
              <Eyebrow>Sócio responsável</Eyebrow>
              <div className="card card-split" style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, padding: 28 }}>
                <Figure
                  src="images/equipe/jorge-braga-jr.jpg"
                  aspect="4/5"
                  label="FOTO · Dr. Jorge Braga Jr. · 4:5 · olhar direto · fundo neutro"
                  alt="Dr. Jorge Braga Jr., sócio-fundador — Braga Jr. Advogados, Rio de Janeiro"
                  sizes="160px"
                  style={{ width: '100%' }}
                />
                <div>
                  <div className="serif" style={{ fontSize: 26, lineHeight: 1.15 }}>Dr. Jorge Braga Jr.</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', marginTop: 6, letterSpacing: '0.15em' }}>
                    {NAP.oab}
                  </div>
                  <p style={{ marginTop: 14, fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.55 }}>
                    Sócio-fundador. Direito público e privado pela PUC-Rio, EMERJ,
                    UERJ e IBMEC. Acompanhamento direto pelo sócio responsável.
                  </p>
                  <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                    <Link href="/sobre" className="btn btn--link">Perfil completo &nbsp;→</Link>
                    <Link href="/publicacoes" className="btn btn--link">Publicações do sócio &nbsp;→</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal" data-delay="2">
              <Eyebrow>Artigos relacionados</Eyebrow>
              <div style={{ marginTop: 24 }}>
                {data.related.map((a) => (
                  <Link
                    key={a.title}
                    href="/blog"
                    style={{ display: 'block', padding: '20px 0', borderBottom: '1px solid var(--border-soft)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <Eyebrow noRule>{a.kicker}</Eyebrow>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>2026</span>
                    </div>
                    <div className="serif" style={{ fontSize: 20, marginTop: 8, lineHeight: 1.25 }}>{a.title}</div>
                    <div style={{ marginTop: 10, fontSize: 12, color: 'var(--accent)' }}>Ler &nbsp;<span className="arrow">→</span></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {niches && niches.length > 0 && (
        <>
          <hr className="divider" />
          {/* ESPECIALIZAÇÕES (nichos sob esta área) */}
          <div className="section">
            <div className="container">
              <div className="section-head reveal">
                <Eyebrow>Especializações desta área</Eyebrow>
                <h2>Frentes específicas <span className="s-it">de atuação aprofundada.</span></h2>
              </div>
              <div className="grid-areas" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
                {niches.map((n, i) => (
                  <Link
                    key={n.slug}
                    href={`/atuacao/${n.parentArea.slug}/${n.slug}`}
                    className="card card--link reveal"
                    data-delay={(i % 2) + 1}
                    style={{ padding: 28 }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                        Especialização
                      </div>
                      {n.status === 'draft' && (
                        <span className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.15em' }}>
                          EM REVISÃO
                        </span>
                      )}
                    </div>
                    <div className="card-title" style={{ fontSize: 26, marginTop: 8 }}>
                      {n.title1} <span className="s-it">{n.title2.replace(/\.$/, '')}</span>
                    </div>
                    <div className="card-body" style={{ fontSize: 14.5 }}>{n.intro}</div>
                    <div style={{ marginTop: 22, fontSize: 12, color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.04em' }}>
                      Ver especialização &nbsp;<span className="arrow">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <hr className="divider" />

      {/* CTA FINAL */}
      <div className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <Eyebrow noRule className="reveal">Próximo passo</Eyebrow>
          <h2 className="reveal" data-delay="1" style={{ marginTop: 24, fontSize: 'var(--t-display-lg)' }}>
            Conte o seu caso<br /><span className="s-it">numa consulta estratégica.</span>
          </h2>
          <p className="reveal" data-delay="2" style={{ marginTop: 24, fontSize: 18, color: 'var(--ink-muted)', maxWidth: '52ch', marginLeft: 'auto', marginRight: 'auto' }}>
            Diagnóstico jurídico completo na primeira conversa: mapeamento de
            riscos, contingenciamento de probabilidades, definição de estratégia.
            Você sai com uma leitura honesta do que cabe ou não cabe.
          </p>
          <div className="reveal" data-delay="3" style={{ marginTop: 36 }}>
            <Link href="/contato" className="btn btn--primary">Agendar consulta estratégica <span className="arrow">→</span></Link>
          </div>
          <p className="mono reveal" data-delay="4" style={{ marginTop: 24, fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.1em' }}>
            Análise inicial avaliada caso a caso · Resposta em até 2 horas
          </p>
        </div>
      </div>
    </>
  );
}
