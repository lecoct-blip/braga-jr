import type { Metadata } from 'next';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui';
import { Figure } from '@/components/figure';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Áreas de Atuação em Direito Público — Rio',
  description:
    'Direito do servidor, PADs e sindicâncias, entidades sindicais, corporativo, compliance/LGPD e licitações. Advocacia no Rio de Janeiro.',
  keywords:
    'áreas de atuação advocacia rj, direito do servidor rio de janeiro, defesa pad sindicância, advogado sindicato rj, licitações públicas rio',
  alternates: { canonical: '/atuacao' },
  openGraph: buildOg(`${SITE_URL}/atuacao`),
};

const collectionPage = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Áreas de atuação',
  description: 'Seis áreas de atuação em Direito Público, Servidor, Sindical e Corporativo.',
  url: `${SITE_URL}/atuacao`,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': ORG_ID },
  about: { '@id': ORG_ID },
};

const AREAS_FULL = [
  { slug: 'direito-do-servidor', num: 'I', title: 'Direito do servidor', italic: 'público',
    body: 'Direitos funcionais, progressões, enquadramentos e aposentadoria. Mais de 16 mil servidores assistidos em três décadas e meia.',
    bullets: ['Defesa em PADs e sindicâncias', 'Carreira e progressão', 'Aposentadoria especial', 'Pensão e benefícios'],
    available: true },
  { slug: 'pads-sindicancias', num: 'II', title: 'Defesa em PADs', italic: 'e sindicâncias',
    body: 'Análise técnica da portaria, instrução probatória, defesa e recursos administrativos em todas as instâncias.',
    bullets: ['Análise da portaria', 'Instrução probatória', 'Recursos administrativos', 'Sustentação oral'] },
  { slug: 'entidades-sindicais', num: 'III', title: 'Entidades sindicais', italic: 'e associativas',
    body: 'Mais de 30 entidades sob assessoria continuada, com sustentações em STF e STJ na formação de jurisprudência da categoria.',
    bullets: ['Consultoria continuada', 'Causas estruturantes', 'Sustentação em tribunais superiores', 'Negociação coletiva'],
    available: true },
  { slug: 'corporativo', num: 'IV', title: 'Direito empresarial', italic: 'e corporativo',
    body: 'Consultoria societária, governança, contratos empresariais, M&A e planejamento sucessório com proteção patrimonial.',
    bullets: ['Contratos empresariais', 'Governança e societário', 'M&A e reorganizações', 'Planejamento sucessório'],
    available: true },
  { slug: 'compliance-lgpd', num: 'V', title: 'Compliance', italic: 'e LGPD',
    body: 'Programa de integridade, adequação à LGPD, encarregado terceirizado e relatórios de impacto regulatório.',
    bullets: ['Programa de integridade', 'Adequação à LGPD', 'DPO terceirizado', 'Relatórios de impacto'] },
  { slug: 'licitacoes', num: 'VI', title: 'Licitações', italic: 'e contratos públicos',
    body: 'Assessoria em pregões, contratos administrativos, impugnações e defesa em processos no TCU e TCE-RJ.',
    bullets: ['Pregões e dispensas', 'Contratos administrativos', 'Impugnações e recursos', 'Defesa no TCU / TCE-RJ'] },
  { slug: 'direito-civil', num: 'VII', title: 'Direito', italic: 'civil',
    body: 'Contratos, responsabilidade civil, família e sucessões e direito imobiliário, na via consultiva e na contenciosa.',
    bullets: ['Contratos civis', 'Responsabilidade civil', 'Família e sucessões', 'Imobiliário'],
    available: true },
  { slug: 'trabalhista-empresarial', num: 'VIII', title: 'Trabalhista', italic: 'com foco em empresa',
    body: 'Assessoria pelo lado do empregador: compliance trabalhista, contratação, terceirização, passivo e defesa em reclamatórias.',
    bullets: ['Compliance trabalhista', 'Contratação e terceirização', 'Defesa em reclamatórias', 'Fiscalização e autuações'],
    available: true },
  { slug: 'administracao-publica', num: 'IX', title: 'Administração', italic: 'pública',
    body: 'Licitações (Lei 14.133), contratos administrativos, sanções, tomada de contas no TCU/TCE-RJ e defesa em improbidade.',
    bullets: ['Licitações (Lei 14.133)', 'Contratos administrativos', 'Tomada de contas', 'Improbidade administrativa'],
    available: true },
];

export default function AtuacaoPage() {
  return (
    <>
      <JsonLd
        data={[
          collectionPage,
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Atuação', path: '/atuacao' },
          ]),
        ]}
      />

      <div className="pagehead">
        <div className="container">
          <Eyebrow>Áreas de atuação</Eyebrow>
          <h1 style={{ marginTop: 24 }}>
            Expertise jurídica<br /><span className="s-it">sob medida.</span>
          </h1>
          <p>
            Soluções estratégicas em direito público, corporativo e cível,
            fundamentadas em 35 anos de precedentes e no uso inteligente da
            tecnologia para antecipar resultados. Cada área é conduzida pelo
            sócio responsável pela tese.
          </p>
          <div className="row" style={{ marginTop: 28 }}>
            <span className="badge badge--accent">Eixo desde 1991</span>
            <span className="badge">9 frentes ativas</span>
            <span className="badge">Sustentação STF / STJ</span>
          </div>
        </div>
      </div>

      {/* Banner institucional — quebra visual entre pagehead e a grade de áreas. */}
      <div className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal">
            <Figure
              src="images/institucional/atuacao-banner.jpg"
              aspect="16/10"
              label="FOTO · sala comercial · panorâmica · sem rosto · luz natural"
              alt="Sala comercial do escritório Braga Jr. Advogados, Centro do Rio de Janeiro"
              sizes="(max-width: 1024px) 100vw, 1200px"
              style={{ maxHeight: 420, width: '100%' }}
            />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid-areas" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {AREAS_FULL.map((a, i) => {
              const inner = (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div className="card-num">{a.num}</div>
                    {!a.available && (
                      <span className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.15em' }}>
                        SUBPÁGINA · em construção
                      </span>
                    )}
                  </div>
                  <div className="card-title" style={{ fontSize: 30, marginTop: 4 }}>
                    {a.title}<br /><span className="s-it">{a.italic}</span>
                  </div>
                  <div className="card-body" style={{ fontSize: 15.5 }}>{a.body}</div>

                  <ul style={{
                    listStyle: 'none', padding: 0, margin: '24px 0 0',
                    fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.7,
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '6px 18px',
                  }}>
                    {a.bullets.map((b) => (
                      <li key={b} style={{ display: 'flex', gap: 8 }}>
                        <span style={{ color: 'var(--accent)' }}>·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {a.available && (
                    <div style={{ marginTop: 24, fontSize: 12, color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.04em' }}>
                      Ver área completa &nbsp;<span className="arrow">→</span>
                    </div>
                  )}
                </>
              );

              // Só Direito do Servidor tem subpágina nesta entrega (README §7.2:
              // as outras 5 ficam p/ depois). Mantemos o badge "em construção"
              // do mockup — honesto sobre o que existe.
              return a.available ? (
                <Link
                  key={a.slug}
                  href={`/atuacao/${a.slug}`}
                  className="card card--link reveal"
                  data-delay={(i % 2) + 1}
                  style={{ padding: 32 }}
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={a.slug}
                  className="card reveal"
                  data-delay={(i % 2) + 1}
                  style={{ padding: 32, opacity: 0.78 }}
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section--deep">
        <div className="container section">
          <div className="container--narrow" style={{ margin: '0 auto', textAlign: 'center' }}>
            <Eyebrow noRule className="reveal">Não sabe em qual área se encaixa?</Eyebrow>
            <h2 className="reveal" data-delay="1" style={{ marginTop: 24, fontSize: 'var(--t-display-md)' }}>
              A primeira leitura<br /><span className="s-it">é do sócio.</span>
            </h2>
            <p className="reveal" data-delay="2" style={{ marginTop: 24, fontSize: 18, color: 'var(--ink-muted)', maxWidth: '54ch', marginLeft: 'auto', marginRight: 'auto' }}>
              Conte o seu caso na consulta estratégica. O sócio responsável avalia
              em qual frente cabe e o que fazer primeiro — em até 2 horas em
              horário comercial.
            </p>
            <div className="reveal" data-delay="3" style={{ marginTop: 36 }}>
              <Link href="/contato" className="btn btn--primary">Agendar consulta estratégica <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
