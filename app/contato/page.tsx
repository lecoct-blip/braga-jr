import type { Metadata } from 'next';
import { Eyebrow } from '@/components/ui';
import { Figure } from '@/components/figure';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID, NAP } from '@/lib/site';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contato — Advogado no Rio de Janeiro',
  description:
    'Av. Almirante Barroso, 63, Centro, Rio. WhatsApp (21) 2292-9413. Resposta em até 2h em horário comercial. Diagnóstico jurídico estratégico.',
  keywords:
    'contato braga jr advogados, advogado centro rio whatsapp, agendar consulta jurídica rj',
  alternates: { canonical: '/contato' },
  openGraph: buildOg(`${SITE_URL}/contato`),
};

const contactPage = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contato',
  description: 'Agendar consulta estratégica.',
  url: `${SITE_URL}/contato`,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': ORG_ID },
  about: { '@id': ORG_ID },
};

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        data={[
          contactPage,
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Contato', path: '/contato' },
          ]),
        ]}
      />

      <div className="pagehead">
        <div className="container">
          <Eyebrow>Agende sua consulta estratégica</Eyebrow>
          <h1 style={{ marginTop: 24 }}>
            Diagnóstico jurídico<br /><span className="s-it">de alta performance.</span>
          </h1>
          <p>
            Análise profunda do seu caso, com mapeamento de riscos,
            contingenciamento de probabilidades e definição de estratégia.
            Se você contratar, a consulta é gratuita. Em qualquer cenário,
            você sai com uma leitura honesta do que cabe ou não cabe.
          </p>
        </div>
      </div>

      {/* GRID PRINCIPAL: form + lateral */}
      <div className="section">
        <div className="container">
          <div className="contato-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>

            {/* FORM (client island) */}
            <div className="reveal">
              <ContactForm />
            </div>

            {/* LATERAL — canais diretos + endereços + OAB */}
            <aside className="reveal" data-delay="2">
              <a
                href={NAP.whatsapp}
                target="_blank"
                rel="noopener"
                className="card"
                style={{ display: 'block', padding: 28, textDecoration: 'none' }}
              >
                <div className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                  Canal direto · WhatsApp
                </div>
                <div className="serif" style={{ fontSize: 32, marginTop: 14, lineHeight: 1.1 }}>
                  +55 (21)<br /><span className="s-it">2292-9413</span>
                </div>
                <p style={{ marginTop: 16, fontSize: 13.5, color: 'var(--ink-muted)', lineHeight: 1.55 }}>
                  Atendimento nacional, 100% online. Para casos urgentes ou
                  contato fora do horário comercial.
                </p>
                <div style={{ marginTop: 20, fontSize: 12, color: 'var(--accent)', fontWeight: 500 }}>
                  Abrir conversa &nbsp;<span className="arrow">→</span>
                </div>
              </a>

              {/* TEMPO DE RESPOSTA */}
              <div style={{ marginTop: 24, padding: '20px 24px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 20 }}>
                <div className="serif" style={{ fontSize: 44, lineHeight: 1, color: 'var(--accent)' }}>2h</div>
                <div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--ink-muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    Tempo de resposta
                  </div>
                  <div style={{ fontSize: 14, marginTop: 6, lineHeight: 1.5, color: 'var(--ink-muted)' }}>
                    Em horário comercial.<br />Seg–Sex, 9h às 18h.<br />Presencial ou online.
                  </div>
                </div>
              </div>

              {/* SEDE BRASIL */}
              <div style={{ marginTop: 32 }}>
                <Eyebrow>Sede Brasil</Eyebrow>
                <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.65 }}>
                  {NAP.street}<br />
                  {NAP.groups}<br />
                  {NAP.district} · {NAP.city} / {NAP.region}<br />
                  CEP {NAP.postalCode}
                </p>
                <Figure
                  src="images/institucional/contato-escritorio.jpg"
                  aspect="16/10"
                  label="FOTO · sala comercial · sem rosto · luz natural"
                  alt="Sala comercial do escritório Braga Jr. Advogados, Centro do Rio de Janeiro"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  style={{ marginTop: 16 }}
                />
                {/* Mapa estático envolto em link de direções — clique abre o
                    Google Maps com rota até a sede. Nenhuma requisição a
                    terceiros até o clique (LGPD: ato afirmativo = consentimento
                    específico, art. 8º §1º). */}
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    `${NAP.street}, ${NAP.district}, ${NAP.city}, ${NAP.region}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                  aria-label="Abrir direções até a sede no Google Maps (nova aba)"
                  style={{ display: 'block', marginTop: 16, textDecoration: 'none' }}
                >
                  <Figure
                    src="images/contato/mapa-sede.jpg"
                    aspect="16/10"
                    label="MAPA · Centro · Av. Almirante Barroso (export estático ou print do mapa)"
                    alt="Mapa da sede Braga Jr. Advogados, Av. Almirante Barroso 63, Centro, Rio de Janeiro"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <span
                    className="map-caption"
                    style={{
                      display: 'block',
                      marginTop: 10,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      letterSpacing: '0.08em',
                      color: 'var(--ink-muted)',
                    }}
                  >
                    Como chegar — abrir direções no Google Maps&nbsp;<span className="arrow">↗</span>
                  </span>
                </a>
              </div>

              {/* SEDE EUA — paridade visual com a Sede Brasil */}
              <div style={{ marginTop: 32 }}>
                <Eyebrow>Sede Estados Unidos</Eyebrow>
                <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.65 }}>
                  7614 Mill Stream Dr<br />
                  Naples · Florida 34109
                </p>
                <p style={{ marginTop: 10, fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.5 }}>
                  Para casos com componente internacional e clientes residentes
                  nos EUA. Atuação direta em direito brasileiro; interface com
                  direito americano em coordenação com counsel licenciado pela
                  Florida Bar.
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=7614+Mill+Stream+Dr%2C+Naples%2C+FL+34109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--link"
                  style={{ marginTop: 14, fontSize: 13 }}
                  aria-label="Abrir direções até a sede em Naples no Google Maps (nova aba)"
                >
                  Como chegar — direções no Google Maps &nbsp;↗
                </a>
              </div>

              {/* E-MAIL */}
              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border-soft)' }}>
                <Eyebrow noRule>E-mails</Eyebrow>
                <div style={{ marginTop: 14, display: 'grid', gap: 10, fontSize: 14 }}>
                  <div>
                    <div style={{ color: 'var(--ink-faint)', fontSize: 12 }}>Contato geral</div>
                    <a href={`mailto:${NAP.emailGeneral}`} className="accent mono" style={{ fontSize: 13 }}>{NAP.emailGeneral}</a>
                  </div>
                  <div>
                    <div style={{ color: 'var(--ink-faint)', fontSize: 12 }}>Triagem técnica</div>
                    <a href={`mailto:${NAP.emailTriagem}`} className="accent mono" style={{ fontSize: 13 }}>{NAP.emailTriagem}</a>
                  </div>
                  <div>
                    <div style={{ color: 'var(--ink-faint)', fontSize: 12 }}>Telefone fixo</div>
                    <span className="accent mono" style={{ fontSize: 13 }}>{NAP.phoneSecondary}</span>
                  </div>
                </div>
              </div>

              {/* OAB */}
              <div style={{
                marginTop: 32, padding: '16px 20px',
                background: 'var(--bg-soft)', border: '1px solid var(--border-soft)',
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'var(--ink-muted)', letterSpacing: '0.06em', lineHeight: 1.7,
              }}>
                <div style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                  Responsável técnico
                </div>
                <div style={{ marginTop: 8, color: 'var(--ink)' }}>
                  {NAP.partner}
                </div>
                <div style={{ marginTop: 4 }}>
                  OAB/RJ&nbsp;72.994 · Inscrito desde 1991
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
