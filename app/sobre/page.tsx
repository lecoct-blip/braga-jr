import type { Metadata } from 'next';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui';
import { Figure } from '@/components/figure';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre o Escritório — 35 anos no Rio',
  description:
    'Escritório fundado em 1991 no Centro do Rio. Sócios Dr. Jorge Braga Jr. (OAB/RJ 72.994) e Dra. Juliana Marinho. Direito público e corporativo.',
  keywords:
    'escritório de advocacia rio centro, advogado especialista direito público rj, sócios braga jr advogados',
  alternates: { canonical: '/sobre' },
  openGraph: buildOg(`${SITE_URL}/sobre`, { type: 'profile' }),
};

const aboutPage = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre o escritório',
  description: '35 anos de atuação em direito público no Rio de Janeiro.',
  url: `${SITE_URL}/sobre`,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': ORG_ID },
  about: { '@id': ORG_ID },
};

const FIRM_TIMELINE = [
  { year: '1991', label: 'Fundação',
    body: 'Dr. Jorge Braga Jr. abre o escritório no Centro do Rio de Janeiro, com foco em direito público e do servidor.' },
  { year: '2003', label: 'Expansão sindical',
    body: 'Início da assessoria continuada a sindicatos e associações da administração pública estadual e federal.' },
  { year: '2014', label: 'Frente corporativa',
    body: 'Estrutura-se a área de direito corporativo, contratos empresariais e M&A para PMEs.' },
  { year: '2021', label: 'Compliance e LGPD',
    body: 'Dra. Juliana Marinho Vasco de Oliveira ingressa como sócia para coordenar adequação regulatória.' },
  { year: '2024', label: 'Sede internacional',
    body: 'Abertura de representação em Naples, Flórida, para casos internacionais.' },
];

// README §10: páginas de perfil de sócio são "a criar". Não estão nesta
// entrega → ambos marcados sem perfil, usando a convenção "em construção"
// do próprio mockup (honesto e sem link quebrado).
const TEAM = [
  { role: 'Sócio-fundador', name: 'Dr. Jorge Braga Jr.', img: 'images/equipe/jorge-braga-jr.jpg',
    bio: 'Especialista em Direito Público e Corporativo. Formação pela PUC-Rio com certificação em IA aplicada ao Direito. Fundou o Departamento Jurídico do Sisejufe/RJ e assessorou mais de 30 entidades sindicais, com sustentações no STF e STJ.',
    feature: true, oab: 'OAB/RJ 72.994', available: false },
  { role: 'Sócia-advogada', name: 'Dra. Juliana Marinho Vasco de Oliveira', img: 'images/equipe/juliana-marinho.jpg',
    bio: 'Formada pela Faculdade Cândido Mendes, especialista em Direito Público e Direito de Família. Atuação em diversas entidades sindicais; chefiou o Departamento Jurídico da TurisRio, entidade de economia mista.',
    feature: true, available: false },
  { role: 'Advogada', name: 'Dra. Mayara Fontana Chagas Santos', img: 'images/equipe/mayara-fontana.jpg',
    bio: 'Formada pela Faculdade Nacional de Direito da UFRJ, especialista em Direito Público e Direitos da Diversidade Sexual e de Gênero. Experiência com entidades sindicais e conhecimento dos tribunais e órgãos públicos.' },
  { role: 'Advogada', name: 'Dra. Vitória Fonseca', img: 'images/equipe/vitoria-fonseca.jpg',
    bio: 'Experiência em mediação de conflitos, atendimento ao público, Direitos das Famílias, Direito Civil e recuperação de crédito.' },
  { role: 'Advogada', name: 'Dra. Clara Vitória Rocha Batista', img: 'images/equipe/clara-vitoria.jpg',
    bio: 'Especializada em Direito Público.' },
  { role: 'Acadêmico de Direito', name: 'Davi dos Santos de Oliveira', img: 'images/equipe/davi-oliveira.jpg',
    bio: 'Estagiário inscrito na OAB/RJ, cursando o oitavo período em Direito pela UNESA-RJ. Atuação em Direito Público.' },
];

export default function SobrePage() {
  return (
    <>
      <JsonLd
        data={[
          aboutPage,
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Sobre', path: '/sobre' },
          ]),
        ]}
      />

      <div className="pagehead">
        <div className="container">
          <Eyebrow>Sobre o escritório</Eyebrow>
          <h1 style={{ marginTop: 24 }}>
            Excelência técnica<br /><span className="s-it">com cuidado pessoal.</span>
          </h1>
          <p>
            A atuação do escritório combina o peso de 35 anos de experiência com uma visão
            moderna e humanizada do Direito. Aqui você não é um número de
            processo — sua causa é tratada por sócios especialistas, com
            atenção intimista e transparência absoluta.
          </p>
        </div>
      </div>

      {/* FILOSOFIA + IMAGEM */}
      <div className="section">
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
              <Eyebrow>Filosofia</Eyebrow>
              <h2 style={{ marginTop: 24, fontSize: 'var(--t-display-md)' }}>
                Tradição que <span className="s-it">forma jurisprudência.</span><br />
                Tecnologia que antecipa a próxima.
              </h2>
              <p style={{ marginTop: 28, fontSize: 18, lineHeight: 1.6, color: 'var(--ink-muted)' }}>
                Fundado em 1991, o escritório consolidou-se na defesa de servidores
                públicos e entidades associativas no Rio de Janeiro — e expandiu,
                nas duas últimas décadas, para direito corporativo, compliance e
                operações internacionais.
              </p>
              <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.6, color: 'var(--ink-muted)' }}>
                A filosofia não mudou: análise técnica integral antes de qualquer
                recomendação, e atendimento direto pelo sócio responsável pela
                tese. A causa é tratada com atenção intimista e transparência
                absoluta.
              </p>
              <div className="row" style={{ marginTop: 32, gap: 12 }}>
                <span className="badge">35 anos · 1991–2026</span>
                <span className="badge badge--accent">Sustentação STF/STJ</span>
                <span className="badge">Naples, FL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* CULTURA E COMPROMISSO — Missão / Visão / Valores em 3 colunas.
          Versão sanitizada: removidos auto-elogios comparativos ("referência
          nacional", "liderar", "a banca de escolha") e a estatística de "70%
          dos clientes viram amigos pessoais" (Provimento OAB 205/2021, art.
          4º, II e V). Conteúdo institucional preservado. */}
      <div className="section">
        <div className="container">
          <div className="section-head reveal" style={{ maxWidth: 720 }}>
            <Eyebrow>Princípios e cultura</Eyebrow>
            <h2>Cultura e <span className="s-it">compromisso.</span></h2>
            <p>
              Soluções jurídicas de alto padrão fundamentadas em três décadas
              de experiência e no uso de inteligência estratégica para a
              proteção dos seus direitos.
            </p>
          </div>

          <div
            className="grid-content"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 48,
              borderTop: '1px solid var(--border)',
              paddingTop: 48,
            }}
          >
            {/* MISSÃO */}
            <div className="reveal" data-delay="1">
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                I · Missão
              </div>
              <h3 style={{ marginTop: 14, fontSize: 24 }}>Nossa missão</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'grid', gap: 20, fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-muted)' }}>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Foco na proteção de direitos.</strong>{' '}
                  Oferecer defesa jurídica técnica para quem dedica a vida ao
                  serviço público e para empresas que buscam segurança
                  estratégica.
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Excelência técnica.</strong>{' '}
                  Salvaguarda da estabilidade funcional e do patrimônio dos
                  clientes através de soluções personalizadas e rigor técnico.
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Impacto social.</strong>{' '}
                  Atuamos para que a justiça seja o pilar de sustentação das
                  carreiras e dos negócios que movem o Rio de Janeiro.
                </li>
              </ul>
            </div>

            {/* VISÃO */}
            <div className="reveal" data-delay="2">
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                II · Visão
              </div>
              <h3 style={{ marginTop: 14, fontSize: 24 }}>Nossa visão</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'grid', gap: 20, fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-muted)' }}>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Tecnologia integrada.</strong>{' '}
                  Manter o padrão de advocacia boutique que integra 35 anos
                  de tradição com ferramentas de Inteligência Artificial e
                  análise preditiva.
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Inovação no Direito.</strong>{' '}
                  Integrar a transformação digital à estratégia artesanal em
                  casos de alta complexidade, onde a tecnologia funciona como
                  aliada do rigor técnico.
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Atendimento direto.</strong>{' '}
                  Permanecer como opção para entidades sindicais e empresas
                  que priorizam o atendimento direto pelo sócio responsável.
                </li>
              </ul>
            </div>

            {/* VALORES */}
            <div className="reveal" data-delay="3">
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                III · Valores
              </div>
              <h3 style={{ marginTop: 14, fontSize: 24 }}>Nossos valores</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'grid', gap: 20, fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-muted)' }}>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Ética e transparência.</strong>{' '}
                  A base de toda relação no escritório é a confiança
                  absoluta, construída pela transparência técnica e pela
                  continuidade no acompanhamento de cada caso.
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Tradição e modernidade.</strong>{' '}
                  Respeitamos o legado de três décadas de história enquanto
                  abraçamos o futuro da advocacia tecnológica.
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Atendimento humanizado.</strong>{' '}
                  Acreditamos que cada processo representa uma vida ou um
                  legado; priorizamos a atenção intimista e o acolhimento na
                  nossa sede boutique.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Acento visual — estudo, prova, precedente */}
      <div className="section section--tight">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div className="reveal" style={{ maxWidth: 520, margin: '0 auto' }}>
            <Figure
              src="images/institucional/mesa-livro-lupa.webp"
              aspect="4/5"
              label="FOTO · mesa do sócio com livro e lupa · detalhe próximo · sem rosto"
              alt="Mesa de trabalho com livro e lupa — Braga Jr. Advogados, Centro do Rio de Janeiro"
              sizes="(max-width: 768px) 100vw, 520px"
            />
            <p className="mono" style={{ marginTop: 18, fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.18em' }}>
              Estudo · prova · precedente
            </p>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* LINHA DO TEMPO */}
      <div className="section--deep">
        <div className="container section">
          <div className="section-head reveal">
            <Eyebrow>Trajetória</Eyebrow>
            <h2>Trinta e cinco anos <span className="s-it">em cinco marcos.</span></h2>
          </div>

          <div style={{ position: 'relative' }}>
            {FIRM_TIMELINE.map((t, i) => (
              <div key={t.year} className="reveal" data-delay={(i % 3) + 1} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr 1.5fr', gap: 48,
                padding: '36px 0', borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                borderBottom: '1px solid var(--border-soft)',
                alignItems: 'baseline',
              }}>
                <div className="serif" style={{ fontSize: 44, lineHeight: 1, color: 'var(--accent)', letterSpacing: '-0.02em' }}>{t.year}</div>
                <h3 style={{ fontSize: 24 }}>{t.label}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-muted)' }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PALAVRA DO SÓCIO-FUNDADOR — declaração em 1ª pessoa, fora do card. */}
      <div className="section section--tight">
        <div className="container container--narrow">
          <div className="reveal">
            <Eyebrow>Palavra do sócio-fundador</Eyebrow>
            <p style={{ marginTop: 28, fontSize: 19, lineHeight: 1.65, color: 'var(--ink)' }}>
              Com 35 anos de experiência, construí minha carreira sobre a
              excelência técnica e o atendimento humanizado que define uma
              banca boutique. Com formação pela PUC-Rio e certificação em IA
              aplicada ao Direito, fundei o Departamento Jurídico do
              Sisejufe/RJ e assessorei mais de 30 entidades sindicais.
            </p>
            <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.65, color: 'var(--ink-muted)' }}>
              Ao longo de três décadas, conduzi casos que moldaram a
              jurisprudência, defendendo os interesses de mais de 16 mil
              clientes com sustentações decisivas no STF e STJ. Minha atuação é
              marcada pela integração de tecnologia de ponta sem perder a
              atenção intimista — onde cada caso é tratado como uma prioridade
              absoluta, e não apenas um número. Da Defesa em PADs à assessoria
              em M&amp;A e Compliance, sua segurança jurídica é o meu
              compromisso.
            </p>
            <p className="mono" style={{ marginTop: 24, fontSize: 12, color: 'var(--ink-muted)', letterSpacing: '0.12em' }}>
              — Dr. Jorge Álvaro da Silva Braga Jr. · OAB/RJ 72.994
            </p>
            <p style={{ marginTop: 28, fontSize: 14 }}>
              <Link href="/publicacoes" className="btn btn--link">
                Veja as publicações acadêmicas do sócio &nbsp;→
              </Link>
            </p>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* EQUIPE — SÓCIOS DESTAQUE */}
      <div className="section" id="equipe">
        <div className="container">
          <div className="section-head reveal">
            <Eyebrow>Equipe · Sócios</Eyebrow>
            <h2>Você fala <span className="s-it">com quem decide.</span></h2>
            <p>O sócio que conduz a tese é o sócio que recebe seu primeiro contato — sem triagem comercial.</p>
          </div>

          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {TEAM.filter((p) => p.feature).map((p, i) => (
              <div
                key={p.name}
                className="card reveal"
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
                  <div className="serif" style={{ fontSize: 26, lineHeight: 1.15, marginTop: 12 }}>{p.name}</div>
                  {p.oab && (
                    <div className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)', marginTop: 6 }}>{p.oab}</div>
                  )}
                  <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 14, lineHeight: 1.55 }}>{p.bio}</p>
                  <div style={{ marginTop: 18, fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)' }}>
                    PERFIL · em construção
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Discovery contextual: quem está lendo sobre o escritório
              encontra naturalmente a produção acadêmica do sócio aqui. */}
          <p style={{ marginTop: 32, fontSize: 14 }}>
            <Link href="/publicacoes" className="btn btn--link">
              Publicações acadêmicas do sócio &nbsp;→
            </Link>
          </p>

          <div style={{ marginTop: 64, marginBottom: 32 }}>
            <Eyebrow>Advogados associados</Eyebrow>
          </div>
          <div className="grid-team" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {TEAM.filter((p) => !p.feature).map((p) => (
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
                <div className="serif" style={{ fontSize: 18, lineHeight: 1.2, marginTop: 8 }}>{p.name}</div>
                <p style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 8, lineHeight: 1.5 }}>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* CTA */}
      <div className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <Eyebrow noRule className="reveal">Próximo passo</Eyebrow>
          <h2 className="reveal" data-delay="1" style={{ marginTop: 24, fontSize: 'var(--t-display-lg)' }}>
            Conte seu caso<br /><span className="s-it">numa consulta estratégica.</span>
          </h2>
          <div className="reveal" data-delay="2" style={{ marginTop: 36 }}>
            <Link href="/contato" className="btn btn--primary">Agendar consulta estratégica <span className="arrow">→</span></Link>
          </div>
        </div>
      </div>
    </>
  );
}
