import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui';
import { Figure } from '@/components/figure';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID } from '@/lib/site';

/** Resolve o arquivo do logo da entidade tentando extensões em ordem (svg→png→webp→jpg). */
function resolveLogo(stem: string): string | null {
  for (const ext of ['.svg', '.png', '.webp', '.jpg']) {
    const rel = `images/entidades/${stem}${ext}`;
    if (fs.existsSync(path.join(process.cwd(), 'public', rel))) return rel;
  }
  return null;
}

export const metadata: Metadata = {
  // title default do layout já é o da Home; canonical/og:url próprios.
  alternates: { canonical: '/' },
  openGraph: buildOg(`${SITE_URL}/`),
};

const webPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Braga Jr. Advogados — Home',
  description: 'Escritório de advocacia em Direito Público no Rio de Janeiro.',
  url: `${SITE_URL}/`,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': ORG_ID },
  about: { '@id': ORG_ID },
};

const AREAS = [
  { num: 'I', title: 'Direito do servidor', italic: 'público', href: '/atuacao/direito-do-servidor',
    body: 'Direitos funcionais, progressões, enquadramentos e aposentadoria — mais de 16 mil servidores assistidos em três décadas e meia.' },
  { num: 'II', title: 'Defesa em PADs', italic: 'e sindicâncias', href: '/atuacao',
    body: 'Análise técnica da portaria, instrução probatória, defesa e recursos administrativos em todas as instâncias.' },
  { num: 'III', title: 'Entidades sindicais', italic: 'e associativas', href: '/atuacao/entidades-sindicais',
    body: 'Mais de 30 entidades sob assessoria continuada, com sustentações em STF e STJ na formação de jurisprudência da categoria.' },
  { num: 'IV', title: 'Direito empresarial', italic: 'e corporativo', href: '/atuacao/corporativo',
    body: 'Consultoria societária, governança, contratos empresariais, M&A e planejamento sucessório com proteção patrimonial.' },
  { num: 'V', title: 'Compliance', italic: 'e LGPD', href: '/atuacao',
    body: 'Programa de integridade, adequação à LGPD, encarregado terceirizado e relatórios de impacto regulatório.' },
  { num: 'VI', title: 'Licitações', italic: 'e contratos públicos', href: '/atuacao',
    body: 'Assessoria em pregões, contratos administrativos, impugnações e defesa em processos no TCU e TCE-RJ.' },
  { num: 'VII', title: 'Direito', italic: 'civil', href: '/atuacao/direito-civil',
    body: 'Contratos, responsabilidade civil, família e sucessões e direito imobiliário, na via consultiva e na contenciosa.' },
  { num: 'VIII', title: 'Trabalhista', italic: 'com foco em empresa', href: '/atuacao/trabalhista-empresarial',
    body: 'Pelo lado do empregador: compliance trabalhista, contratação, terceirização, passivo e defesa em reclamatórias.' },
  { num: 'IX', title: 'Administração', italic: 'pública', href: '/atuacao/administracao-publica',
    body: 'Licitações (Lei 14.133), contratos administrativos, sanções, tomada de contas no TCU/TCE-RJ e defesa em improbidade.' },
];

const STATS = [
  { num: '35', unit: 'anos', label: 'De atuação contínua desde 1991' },
  { num: '16k+', unit: 'servidores', label: 'Assistidos em causas funcionais' },
  { num: '30+', unit: 'entidades', label: 'Sindicatos e associações sob assessoria' },
  { num: 'STF · STJ', unit: 'tribunais', label: 'Sustentações em tribunais superiores' },
];

const PILLARS = [
  { kicker: 'Estratégia de vanguarda',
    title: 'Da defesa do servidor à estruturação de M&A.',
    body: 'Soluções jurídicas pensadas para proteger sua carreira e para impulsionar o seu negócio com a mesma profundidade técnica. O escopo é amplo; a atenção, específica.' },
  { kicker: 'Autoridade que molda o direito',
    title: 'Trinta e cinco anos e formação de elite.',
    body: 'Formação pela PUC-Rio, EMERJ, UERJ e IBMEC. Atuação em formação de jurisprudência nos tribunais superiores. À tradição, somamos análise preditiva com inteligência artificial.' },
  { kicker: 'Você não é um número',
    title: 'O sócio ouve. O sócio decide.',
    body: 'Atendimento intimista, transparente e direto pelo sócio responsável pela tese. Sua causa entra na agenda de quem assina a recomendação final.' },
];

const METHOD = [
  { num: 'M.01', title: 'Diagnóstico de alta performance',
    body: 'Análise profunda do caso com mapeamento de riscos, contingenciamento de probabilidades e definição de estratégia. A consulta inicial é gratuita ao contratar a assessoria.' },
  { num: 'M.02', title: 'Autoridade técnica multidisciplinar',
    body: 'Trinta e cinco anos de experiência, mais de 16 mil servidores assistidos e inúmeros casos particulares e empresariais. Conhecimento profundo dos órgãos públicos do Rio de Janeiro.' },
  { num: 'M.03', title: 'Investimento transparente',
    body: 'Consulta estratégica completa sem custo adicional na contratação. Honorários apresentados por escrito, sempre dentro da tabela OAB/RJ.' },
  { num: 'M.04', title: 'Análise preditiva via IA',
    body: 'Revisão automatizada de processos, PADs e documentos. Estudo do perfil decisório do órgão julgador. Tecnologia a serviço da tese, não como vitrine.' },
];

const PEOPLE = [
  // Perfil /sobre/jorge-braga-jr é "a criar" (README §10) e não está nesta
  // entrega → aponta p/ /sobre (seção de sócios) até o perfil existir.
  { role: 'Sócio-fundador', name: 'Dr. Jorge Braga Jr.', href: '/sobre',
    img: 'images/equipe/jorge-braga-jr.jpg',
    bio: 'Especialista em Direito Público e Corporativo. Formação pela PUC-Rio com certificação em IA aplicada ao Direito. Fundou o Departamento Jurídico do Sisejufe/RJ e assessorou mais de 30 entidades sindicais, com sustentações no STF e STJ.',
    feature: true, oab: 'OAB/RJ 72.994' },
  { role: 'Sócia-advogada', name: 'Dra. Juliana Marinho Vasco de Oliveira', href: '/sobre',
    img: 'images/equipe/juliana-marinho.jpg',
    bio: 'Formada pela Faculdade Cândido Mendes, especialista em Direito Público e Direito de Família. Atuação em diversas entidades sindicais; chefiou o Departamento Jurídico da TurisRio, entidade de economia mista.',
    feature: true },
  { role: 'Advogada', name: 'Dra. Mayara Fontana Chagas Santos', img: 'images/equipe/mayara-fontana.jpg',
    bio: 'Formada pela Faculdade Nacional de Direito da UFRJ, especialista em Direito Público e Direitos da Diversidade Sexual e de Gênero. Experiência com entidades sindicais e conhecimento dos tribunais e órgãos públicos.' },
  { role: 'Advogada', name: 'Dra. Vitória Fonseca', img: 'images/equipe/vitoria-fonseca.jpg',
    bio: 'Experiência em mediação de conflitos, atendimento ao público, Direitos das Famílias, Direito Civil e recuperação de crédito.' },
  { role: 'Advogada', name: 'Dra. Clara Vitória Rocha Batista', img: 'images/equipe/clara-vitoria.jpg',
    bio: 'Especializada em Direito Público.' },
  { role: 'Acadêmico de Direito', name: 'Davi dos Santos de Oliveira', img: 'images/equipe/davi-oliveira.jpg',
    bio: 'Estagiário inscrito na OAB/RJ, cursando o oitavo período em Direito pela UNESA-RJ. Atuação em Direito Público.' },
];

const ARTICLES = [
  { kicker: 'Direito do servidor', date: 'Mai · 2026', img: 'images/blog/pad-controle-judicial.jpg',
    title: 'PAD e o limite do controle judicial sobre o mérito administrativo',
    excerpt: 'Quatro situações em que o Judiciário revisa o conteúdo da decisão disciplinar — e as quatro em que se detém no exame da forma.' },
  { kicker: 'Compliance', date: 'Abr · 2026', img: 'images/blog/dpo-terceirizado-pme.jpg',
    title: 'Encarregado de dados terceirizado: quando faz sentido para a PME',
    excerpt: 'Para empresas que ainda não maturaram a função interna, qual o custo-benefício real e quais riscos persistem.' },
  { kicker: 'Sindical', date: 'Mar · 2026', img: 'images/blog/sindicato-legitimidade-stf.jpg',
    title: 'Legitimidade processual extraordinária de sindicato: o estado da questão no STF',
    excerpt: 'Recorte da jurisprudência recente sobre representação processual de categoria — quando a entidade pode, e quando precisa de procuração.' },
];

/**
 * Entidades representadas. `stem` é o nome do arquivo (sem extensão) procurado
 * em `public/images/entidades/` — quando você soltar `detran-rj.svg` (ou .png),
 * o marquee renderiza o logo no lugar do fallback em serifa itálica.
 */
const RECOG: { name: string; stem: string }[] = [
  { name: 'DETRAN-RJ', stem: 'detran-rj' },
  { name: 'SINTUPERJ', stem: 'sintuperj' },
  { name: 'SINDALERJ', stem: 'sindalerj' },
  { name: 'SINDENF', stem: 'sindenf' },
  { name: 'SINDJUSTIÇA', stem: 'sindjustica' },
  { name: 'SINFAZERJ', stem: 'sinfazerj' },
  { name: 'Clube Olímpico de Jacarepaguá', stem: 'clube-olimpico-jacarepagua' },
];
const RECOG_ITEMS = RECOG.map((r) => ({ ...r, logo: resolveLogo(r.stem) }));

export default function HomePage() {
  return (
    <>
      <JsonLd data={[webPage, breadcrumb([{ name: 'Home', path: '/' }])]} />

      {/* ───────── HERO ──────────────────────────────────────────────── */}
      <div className="section" style={{ paddingTop: 'clamp(96px, 12vw, 160px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64, alignItems: 'end' }}>
            <div className="reveal is-visible">
              <Eyebrow>Braga&nbsp;Jr. Advogados · Rio de Janeiro · est. 1991</Eyebrow>
              <h1 className="display-xl" style={{ marginTop: 24, fontSize: 'var(--t-display-xl)', fontWeight: 400, lineHeight: 0.98, letterSpacing: '-0.025em' }}>
                A segurança jurídica<br />de quem <span className="s-it">molda<br />a jurisprudência</span><br />há 35 anos.
              </h1>
              <p style={{ marginTop: 36, fontSize: 19, lineHeight: 1.55, color: 'var(--ink-muted)', maxWidth: '48ch' }}>
                Quando sua carreira, sua entidade ou sua empresa estão em jogo,
                você precisa de mais que um advogado. Você precisa de um
                especialista que conhece cada instância, cada órgão, cada detalhe
                da legislação — e que já assistiu mais de 16 mil servidores públicos
                em causas funcionais.
              </p>
              <div className="row" style={{ marginTop: 36 }}>
                <Link href="/contato" className="btn btn--primary">Agendar consulta estratégica <span className="arrow">→</span></Link>
                <Link href="/sobre" className="btn btn--ghost">Conheça nossa história</Link>
              </div>
            </div>

            <div className="hero-side reveal is-visible" data-delay="2" style={{ position: 'relative' }}>
              <Figure
                src="images/institucional/escritorio-ambiente.jpg"
                aspect="4/5"
                label="FOTO · ambiente do escritório · luz natural · detalhe arquitetônico · sem rosto · tom quente"
                alt="Ambiente do escritório Braga Jr. Advogados, Centro do Rio de Janeiro"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ height: 480 }}
              />
              <div style={{
                position: 'absolute', bottom: -16, left: -16, right: 32,
                padding: '14px 18px', background: 'var(--bg-elev)',
                border: '1px solid var(--border)',
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
                display: 'flex', justifyContent: 'space-between', gap: 16,
              }}>
                <span style={{ color: 'var(--ink-muted)' }}>EST.&nbsp;1991</span>
                <span className="accent">OAB/RJ&nbsp;72.994</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── FAIXA DE DADOS ────────────────────────────────────── */}
      <div className="section--elev" style={{ borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)' }}>
        <div className="container" style={{ padding: '64px 32px' }}>
          <div className="stat-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {STATS.map((s, i) => (
              <div key={s.unit} className="reveal" data-delay={i + 1}>
                <div className="serif" style={{ fontSize: 48, fontWeight: 400, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {s.num}
                </div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginTop: 12 }}>
                  {s.unit}
                </div>
                <div style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 8, lineHeight: 1.5, maxWidth: '24ch' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───────── TRÊS PILARES ──────────────────────────────────────── */}
      <div className="section">
        <div className="container">
          <div className="section-head reveal" style={{ maxWidth: 720 }}>
            <Eyebrow>Três pilares</Eyebrow>
            <h2>O que sustenta o escritório <span className="s-it">há 35 anos.</span></h2>
          </div>
          <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--border)' }}>
            {PILLARS.map((p, i) => (
              <div key={p.kicker} className="reveal" data-delay={i + 1} style={{
                padding: '40px 32px 40px 0',
                paddingLeft: i === 0 ? 0 : 32,
                borderRight: i < PILLARS.length - 1 ? '1px solid var(--border-soft)' : 'none',
              }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                  {String(i + 1).padStart(2, '0')} · {p.kicker}
                </div>
                <h3 style={{ marginTop: 18, fontSize: 26, lineHeight: 1.18 }}>{p.title}</h3>
                <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-muted)' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───────── MÉTODO ────────────────────────────────────────────── */}
      <div className="section--deep">
        <div className="container section">
          <div className="section-head reveal">
            <Eyebrow>Método</Eyebrow>
            <h2>Compromisso com <span className="s-it">resultados reais.</span></h2>
            <p>
              Transformamos desafios jurídicos em soluções seguras e sustentáveis —
              com um método que começa no diagnóstico e termina na transparência.
            </p>
          </div>
          <div className="grid-areas" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: '1px solid var(--border-soft)' }}>
            {METHOD.map((m, i) => (
              <div key={m.num} className="reveal" data-delay={(i % 2) + 1} style={{
                padding: '40px 36px',
                borderRight: i % 2 === 0 ? '1px solid var(--border-soft)' : 'none',
                borderBottom: i < 2 ? '1px solid var(--border-soft)' : 'none',
              }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--accent)' }}>{m.num}</div>
                <h3 style={{ marginTop: 16, fontSize: 28, lineHeight: 1.15 }}>{m.title}</h3>
                <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-muted)' }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───────── ÁREAS DE ATUAÇÃO ──────────────────────────────────── */}
      <div className="section" id="home-areas">
        <div className="container">
          <div className="section-head reveal">
            <Eyebrow>Expertise jurídica sob medida</Eyebrow>
            <h2>Seis frentes. <span className="s-it">Profundidade técnica em cada uma.</span></h2>
            <p>
              Soluções estratégicas em direito público, corporativo e cível,
              fundamentadas em 35 anos de precedentes e no uso inteligente da
              tecnologia para antecipar resultados.
            </p>
          </div>

          <div className="grid-areas" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {AREAS.map((a, i) => (
              <Link
                key={a.num}
                href={a.href}
                className="card card--link reveal"
                data-delay={(i % 3) + 1}
              >
                <div className="card-num">{a.num}</div>
                <div className="card-title">
                  {a.title}<br /><span className="s-it">{a.italic}</span>
                </div>
                <div className="card-body">{a.body}</div>
                <div style={{ marginTop: 22, fontSize: 12, color: 'var(--accent)', fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.04em' }}>
                  Ver área &nbsp;<span className="arrow" style={{ display: 'inline-block' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* ───────── SOBRE / FILOSOFIA ─────────────────────────────────── */}
      <div className="section" id="home-sobre">
        <div className="container">
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'center' }}>
            <div className="reveal">
              <Figure
                src="images/institucional/biblioteca.jpg"
                aspect="4/5"
                label="FOTO · biblioteca do escritório · livros antigos · luz lateral"
                alt="Biblioteca do escritório Braga Jr. Advogados, Centro do Rio de Janeiro"
                sizes="(max-width: 1024px) 100vw, 45vw"
                style={{ height: 540 }}
              />
            </div>
            <div className="reveal" data-delay="2">
              <Eyebrow>Excelência técnica com cuidado pessoal</Eyebrow>
              <h2 style={{ marginTop: 24, fontSize: 'var(--t-display-md)' }}>
                Tradição que <span className="s-it">forma jurisprudência.</span><br />
                Tecnologia que antecipa a próxima.
              </h2>
              <p style={{ marginTop: 28, fontSize: 18, lineHeight: 1.6, color: 'var(--ink-muted)' }}>
                A atuação do escritório combina o peso de 35 anos de experiência com uma
                visão moderna e humanizada do Direito. Fundado em 1991, o
                escritório consolidou-se na defesa de servidores públicos e
                entidades associativas no Rio de Janeiro — e expandiu, nas duas
                últimas décadas, para direito corporativo, compliance e operações
                internacionais.
              </p>
              <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.6, color: 'var(--ink-muted)' }}>
                Aqui você não é um número de processo. A causa é tratada com
                atenção intimista e transparência absoluta por sócios
                especialistas. A filosofia não mudou: análise técnica integral
                antes de qualquer recomendação, e atendimento direto pelo sócio
                responsável pela tese.
              </p>
              <div className="row" style={{ marginTop: 32, gap: 12 }}>
                <span className="badge">35 anos · 1991–2026</span>
                <span className="badge badge--accent">Sustentação STF/STJ</span>
                <span className="badge">Naples, FL · casos internacionais</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── PRESENÇA INTERNACIONAL (Naples, FL) ───────────────────
          Visibilidade ao diferencial da filial em Naples sem cair em
          auto-elogio comparativo. Texto OAB-safe — separa atuação direta (BR)
          de coordenação com counsel local (FL). Link para o nicho dedicado. */}
      <div className="section--elev" style={{ borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)' }}>
        <div className="container section">
          <div className="container--narrow" style={{ margin: '0 auto', textAlign: 'center' }}>
            <Eyebrow noRule className="reveal">Presença internacional</Eyebrow>
            <h2 className="reveal" data-delay="1" style={{ marginTop: 20, fontSize: 'var(--t-display-md)' }}>
              Naples, Flórida<br /><span className="s-it">interface para o exterior.</span>
            </h2>
            <p className="reveal" data-delay="2" style={{ marginTop: 24, fontSize: 18, lineHeight: 1.6, color: 'var(--ink-muted)', maxWidth: '56ch', marginLeft: 'auto', marginRight: 'auto' }}>
              Representação operacional em Naples, Flórida, para clientes com
              patrimônio, sociedade ou herdeiros nos Estados Unidos. O direito
              brasileiro é a nossa atuação direta; o direito americano segue em
              coordenação com counsel licenciado pela Florida Bar.
            </p>
            <p className="mono reveal" data-delay="3" style={{ marginTop: 22, fontSize: 12, color: 'var(--ink-faint)', letterSpacing: '0.1em' }}>
              7614 MILL STREAM DR · NAPLES, FL 34109
            </p>
            <div className="reveal" data-delay="4" style={{ marginTop: 28 }}>
              <Link href="/atuacao/corporativo/holding-naples" className="btn btn--link">
                Especialização em holding Brasil-Flórida &nbsp;→
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── EQUIPE ────────────────────────────────────────────── */}
      <div className="section--deep" id="home-equipe">
        <div className="container section">
          <div className="section-head reveal">
            <Eyebrow>Equipe</Eyebrow>
            <h2>Sócios <span className="s-it">e advogados associados.</span></h2>
            <p>O sócio que conduz a tese é o sócio que recebe seu primeiro contato.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 56 }} className="grid-2col">
            {PEOPLE.filter((p) => p.feature).map((p, i) => (
              <Link
                key={p.name}
                href={p.href ?? '/sobre'}
                className="card card--link reveal"
                data-delay={i + 1}
                style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: 24, padding: 28, alignItems: 'start' }}
              >
                <Figure
                  src={p.img}
                  aspect="4/5"
                  label={`FOTO · ${p.name.split(' ').slice(-2).join(' ')} · 4:5 · olhar direto · fundo neutro`}
                  alt={`${p.name}, ${p.role} — Braga Jr. Advogados, Rio de Janeiro`}
                  sizes="170px"
                  style={{ width: '100%' }}
                />
                <div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {p.role}
                  </div>
                  <div className="serif" style={{ fontSize: 26, lineHeight: 1.15, marginTop: 12, color: 'var(--ink)' }}>
                    {p.name}
                  </div>
                  {p.oab && (
                    <div className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)', marginTop: 6 }}>
                      {p.oab}
                    </div>
                  )}
                  <div style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 14, lineHeight: 1.55 }}>
                    {p.bio}
                  </div>
                  <div style={{ marginTop: 18, fontSize: 12, color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.04em' }}>
                    Ver perfil &nbsp;<span className="arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginBottom: 32 }}>
            <Eyebrow>Advogados associados</Eyebrow>
          </div>
          <div className="grid-team" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {PEOPLE.filter((p) => !p.feature).map((p) => (
              <div key={p.name} className="card reveal" style={{ padding: 20 }}>
                <Figure
                  src={p.img}
                  aspect="4/5"
                  label={`FOTO · ${p.name.split(' ').slice(-2).join(' ')} · 4:5`}
                  alt={`${p.name}, ${p.role} — Braga Jr. Advogados, Rio de Janeiro`}
                  sizes="(max-width: 768px) 50vw, 22vw"
                  style={{ marginBottom: 16 }}
                />
                <div className="mono" style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                  {p.role}
                </div>
                <div className="serif" style={{ fontSize: 18, lineHeight: 1.2, marginTop: 8, color: 'var(--ink)' }}>
                  {p.name}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 8, lineHeight: 1.5 }}>
                  {p.bio}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───────── CONTEÚDO ──────────────────────────────────────────── */}
      <div className="section" id="home-conteudo">
        <div className="container">
          <div className="section-head reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', maxWidth: 'none' }}>
            <div style={{ maxWidth: 720 }}>
              <Eyebrow>Conteúdo</Eyebrow>
              <h2 style={{ marginTop: 18 }}>Textos &amp; notícias.</h2>
              <p style={{ marginTop: 18 }}>Artigos abertos, sem cadastro. Análise técnica de temas em transformação.</p>
            </div>
            <Link href="/blog" className="btn btn--link" style={{ marginBottom: 8 }}>Ver todos os artigos &nbsp;→</Link>
          </div>

          <div className="grid-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {ARTICLES.map((a) => (
              <article key={a.title} className="reveal" style={{ borderTop: '1px solid var(--border)', paddingTop: 24 }}>
                <Figure src={a.img} aspect="16/10" label={`FOTO editorial · ${a.kicker}`} alt={`${a.kicker} — artigo do blog Braga Jr. Advogados`} sizes="(max-width: 768px) 100vw, 33vw" />
                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <Eyebrow noRule>{a.kicker}</Eyebrow>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>{a.date}</span>
                </div>
                <h3 style={{ marginTop: 14, fontSize: 24, lineHeight: 1.2, fontWeight: 400 }}>{a.title}</h3>
                <p style={{ marginTop: 12, fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{a.excerpt}</p>
                <div style={{ marginTop: 18, fontSize: 12, color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.04em' }}>
                  Ler completo &nbsp;<span className="arrow">→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* ───────── RECONHECIMENTO ────────────────────────────────────── */}
      <div className="section--elev">
        <div className="container section">
          <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto', maxWidth: 720 }}>
            <Eyebrow noRule>Quem confia no escritório</Eyebrow>
            <h2 style={{ marginTop: 18 }}>Mais de trinta entidades <span className="s-it">sob assessoria continuada.</span></h2>
            <p style={{ marginTop: 16, marginLeft: 'auto', marginRight: 'auto' }}>
              Sindicatos, associações e órgãos para os quais o escritório já
              atuou — representância continuada ou em causas estruturantes.
              Substitui o depoimento de cliente vedado pelo Provimento 205/2021 da OAB.
            </p>
          </div>

          {/* Marquee infinito — direita → esquerda, fade nas bordas. Itens
              duplicados 2x para loop seamless; o duplicado fica aria-hidden
              para o leitor de tela não repetir os nomes. */}
          <div className="logo-marquee reveal" aria-label="Entidades representadas pelo escritório">
            <ul className="logo-marquee-track" role="list">
              {[...RECOG_ITEMS, ...RECOG_ITEMS].map((it, i) => (
                <li
                  key={`${it.stem}-${i}`}
                  className="logo-item"
                  aria-hidden={i >= RECOG_ITEMS.length ? 'true' : undefined}
                >
                  {it.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element -- SVG/PNG sem dimensões intrínsecas conhecidas; next/image não otimiza SVG.
                    <img src={`/${it.logo}`} alt={`Logo ${it.name}`} className="logo-img" />
                  ) : (
                    <span className="logo-text">{it.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ───────── CTA FINAL ─────────────────────────────────────────── */}
      <div className="section" style={{ padding: 'clamp(80px, 10vw, 144px) 0' }}>
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <Eyebrow noRule className="reveal">Consulta estratégica</Eyebrow>
          <h2 className="reveal" data-delay="1" style={{ marginTop: 24, fontSize: 'var(--t-display-lg)', textAlign: 'center' }}>
            Se você contratar,<br /><span className="s-it">a consulta é gratuita.</span>
          </h2>
          <p className="reveal" data-delay="2" style={{ marginTop: 28, fontSize: 18, color: 'var(--ink-muted)', maxWidth: '54ch', marginLeft: 'auto', marginRight: 'auto' }}>
            Diagnóstico jurídico completo na primeira conversa, conduzido pelo
            sócio responsável pela tese. Honorários apresentados por escrito,
            sempre dentro da tabela OAB/RJ. Resposta em até duas horas em
            horário comercial.
          </p>
          <div className="reveal" data-delay="3" style={{ marginTop: 36 }}>
            <Link href="/contato" className="btn btn--primary">Agendar consulta estratégica <span className="arrow">→</span></Link>
          </div>
        </div>
      </div>
    </>
  );
}
