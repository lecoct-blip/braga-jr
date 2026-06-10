import type { Metadata } from 'next';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui';
import { Figure } from '@/components/figure';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Advogado do Servidor Público no Rio de Janeiro',
  description:
    '+16 mil servidores assistidos em 35 anos: PADs, sindicâncias, progressões e aposentadorias, com o sócio responsável. Rio de Janeiro.',
  keywords:
    'advogado servidor público rio de janeiro, defesa pad rj, sindicância servidor, progressão funcional rj, aposentadoria especial servidor',
  alternates: { canonical: '/atuacao/direito-do-servidor' },
  openGraph: buildOg(`${SITE_URL}/atuacao/direito-do-servidor`),
};

const webPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Direito do servidor público',
  description:
    'Defesa de servidor público no Rio de Janeiro — PADs, sindicâncias, carreira, aposentadoria.',
  url: `${SITE_URL}/atuacao/direito-do-servidor`,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': ORG_ID },
  about: { '@id': ORG_ID },
};

// Service aninhado no LegalService via provider (@id) — README §8.2.
const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Advocacia em Direito do Servidor Público',
  name: 'Advocacia em Direito do Servidor Público',
  description:
    'Defesa funcional integral: PADs, sindicâncias, progressões, aposentadorias e contencioso administrativo do servidor civil e militar.',
  provider: { '@id': ORG_ID },
  areaServed: [
    { '@type': 'City', name: 'Rio de Janeiro' },
    { '@type': 'State', name: 'Rio de Janeiro' },
  ],
  url: `${SITE_URL}/atuacao/direito-do-servidor`,
};

const ATOS = [
  {
    n: 'I.', title: <>O problema chega <span className="s-it">com prazo.</span></>,
    p: 'Uma portaria abre PAD com prazo de defesa. Uma pensão é negada administrativamente. Uma progressão fica retida. Quase sempre o que parece administrativo é também litígio em formação — e a forma como você responde no primeiro ato define o tabuleiro.',
    border: 'var(--border)',
    items: ['Notificação de PAD ou sindicância', 'Negativa de benefício funcional', 'Bloqueio de progressão ou enquadramento', 'Aposentadoria especial / contagem de tempo'],
  },
  {
    n: 'II.', title: <>A abordagem <span className="s-it">é técnica antes de tática.</span></>,
    p: 'Diagnóstico documental integral, mapeamento de jurisprudência aplicável ao seu órgão específico, leitura do perfil decisório do juízo ou conselho competente. Análise preditiva e relatórios automatizados via IA, integrados à leitura humana do caso. Só depois, recomendação — com cenários, probabilidades e o que cada caminho exige de você.',
    border: 'var(--accent)',
    items: ['Análise documental integral', 'Mapeamento de precedentes do órgão', 'Cenários e contingenciamento', 'Recomendação por escrito, fundamentada'],
  },
  {
    n: 'III.', title: <>O que esperar <span className="s-it">do andamento.</span></>,
    p: 'Comunicação direta com o sócio responsável, relatórios em marcos definidos do processo, e revisão das premissas a cada decisão administrativa ou judicial. Nada de "vamos ver" — você sabe o que vem depois.',
    border: 'var(--border)',
    items: ['Sócio responsável é o ponto de contato', 'Relatórios em marcos definidos', 'Revisão a cada decisão relevante', 'Encerramento documentado'],
  },
];

/**
 * Cinco blocos de profundidade — pillar page expansion (2026-05-21).
 * Cada bloco descreve procedimento factual com fundamentos legais explícitos
 * (Lei 8.112/1990, Lei 9.784/1999, EC 103/2019, Decreto-Lei 220/1975 RJ,
 * SV 5 do STF). Sem promessas de resultado e sem comparação — apenas
 * descrição técnica do que o servidor enfrenta em cada frente.
 *
 * Cross-links: blog publicado (pad-controle-judicial), publicações
 * acadêmicas e /faq formam o cluster topical recomendado pela auditoria
 * competitiva.
 */
const FRENTES = [
  {
    id: 'pad',
    eyebrow: 'Frente I',
    title: <>Defesa em <span className="s-it">Processo Administrativo Disciplinar.</span></>,
    paragraphs: [
      'O PAD é o procedimento formal pelo qual a Administração apura responsabilidade de servidor por infração funcional. No regime federal, está disciplinado nos arts. 143 e seguintes da Lei 8.112/1990; no Estado do Rio, no Decreto-Lei 220/1975 e seu regulamento; em municípios e autarquias, em estatutos próprios com arquitetura semelhante. O ato inicial é a portaria de instauração — ela delimita os fatos imputados, indica o servidor indiciado e dá ciência do início do prazo formal.',
      'A leitura técnica da portaria é a primeira batalha do caso. Não por ritualismo: é nela que se identifica defeito de competência da autoridade instauradora, vício de motivação ou indicação genérica de fatos. São defeitos que, se não suscitados a tempo, dificilmente se reabrem depois — porque ficam fora do alcance natural do controle judicial.',
      'A partir daí, a defesa estrutura a instrução: requerimento de prova documental, pericial e testemunhal; impugnação de provas obtidas com vício; manifestação técnica antes da indiciação. A comissão tem 60 dias prorrogáveis para conclusão (Lei 8.112/1990, art. 152); a defesa escrita pós-indiciação tem 10 dias, dobrados quando há dois ou mais indiciados (art. 161). A pena é aplicada pela autoridade competente em ato motivado — e é a qualidade dessa motivação que vai delimitar o que será sindicável em eventual via judicial.',
    ],
    bullets: [
      'Análise da portaria: competência, motivação, tipicidade',
      'Produção de prova: documentação prévia, perícia, testemunhas',
      'Defesa escrita pós-indiciação: enquadramento alternativo e atenuantes',
      'Recurso administrativo: argumentação focada em legalidade',
    ],
    related: (
      <>
        Para o detalhamento de quando o Judiciário entra no conteúdo da decisão
        disciplinar, ver{' '}
        <Link href="/blog/pad-controle-judicial">
          PAD e o limite do controle judicial sobre o mérito administrativo
        </Link>
        .
      </>
    ),
  },
  {
    id: 'sindicancia',
    eyebrow: 'Frente II',
    title: <>Sindicância <span className="s-it">investigativa e patrimonial.</span></>,
    paragraphs: [
      'A sindicância é etapa preliminar. Quando investigativa, apura indícios genéricos que precisam ser esclarecidos antes de se cogitar PAD. Quando patrimonial — a chamada sindicância de bens —, verifica eventual evolução patrimonial incompatível com a renda do servidor (Lei 8.429/1992, art. 13). Cada modalidade tem efeitos jurídicos próprios.',
      'A sindicância investigativa pode terminar em arquivamento, conversão em PAD ou aplicação direta de pena leve (advertência ou suspensão de até 30 dias). A patrimonial, por sua vez, pode embasar ação de improbidade administrativa. Daí a importância de acompanhamento técnico desde o primeiro despacho da comissão — o que se diz na fase preliminar pesa em tudo que vier depois.',
      'Há um equívoco recorrente: a Súmula Vinculante 5 do STF firmou que a falta de defesa técnica na fase administrativa, em si, não invalida o processo. Não significa que assessoria seja dispensável — significa que sua ausência não funciona como argumento de nulidade depois. O servidor que enfrenta sindicância sem amparo costuma cometer dois tipos de erro: o procedimental (não requerer prova no momento certo) e o substantivo (responder em depoimento sem perceber a moldura do enquadramento). Ambos têm baixa reversibilidade.',
    ],
    bullets: [
      'Diagnóstico do tipo: investigativa, patrimonial ou especial',
      'Acompanhamento de oitiva e produção de prova',
      'Manifestação técnica antes da decisão preliminar',
      'Conversão em PAD: reposicionamento da defesa',
    ],
  },
  {
    id: 'progressao',
    eyebrow: 'Frente III',
    title: <>Progressão funcional, reenquadramento <span className="s-it">e contagem de tempo.</span></>,
    paragraphs: [
      'A progressão funcional é direito do servidor, mas seu reconhecimento administrativo costuma esbarrar em três obstáculos: avaliação de desempenho desfavorável (ou irregular), demora administrativa que ultrapassa prazos legais, e divergência interpretativa sobre interstício mínimo ou requisitos de qualificação.',
      'O reenquadramento — alocação em padrão funcional distinto do atual em razão de mudança de plano de carreira ou reconhecimento de tempo computado — é matéria sensível porque envolve impacto pecuniário e, com isso, glosa eventual do TCE-RJ. A defesa técnica costuma combinar dois eixos: requerimento administrativo bem fundamentado (com pedido subsidiário) e, se necessário, mandado de segurança quando o direito é líquido e certo.',
      'A contagem de tempo especial — atividade insalubre, perigosa, ou em regime exposto a fator de risco específico — é particularmente delicada após a EC 103/2019. A conversão de tempo especial para o regime estatutário foi restringida em vários aspectos, e a análise documental retroativa, feita com a especificidade de cada órgão, é o que determina o que ainda é viável.',
    ],
    bullets: [
      'Requerimento administrativo fundamentado, com pedido subsidiário',
      'Recurso à autoridade hierárquica superior',
      'Provocação da Controladoria-Geral do Estado quando cabível',
      'Mandado de segurança apenas quando o direito é líquido e certo',
    ],
  },
  {
    id: 'aposentadoria',
    eyebrow: 'Frente IV',
    title: <>Aposentadoria, pensão <span className="s-it">e revisões previdenciárias.</span></>,
    paragraphs: [
      'A aposentadoria de servidor estatutário envolve três regimes possíveis hoje: o regime pré-EC 41/2003 (regras de transição mais favoráveis), o regime pós-EC 41/2003 (com integralidade e paridade condicionadas) e o regime pós-EC 103/2019 (regras de transição variadas, com idade mínima progressiva). A escolha entre os regimes — quando há mais de uma possibilidade — pode representar diferença significativa de provento mensal e de revisões futuras.',
      'A pensão por morte segue rito próprio: dependentes preferenciais (cônjuge, companheiro, filhos menores ou inválidos), comprovação documental, eventual habilitação tardia. Há ainda regras específicas para dependente inválido e para situações de óbito após perda da qualidade de segurado (Súmula 416 do STJ).',
      'A revisão administrativa do ato de aposentadoria — provocada pelo TCE-RJ ou pela própria autoridade — tem prazo decadencial de cinco anos (Lei 9.784/1999, art. 54), salvo má-fé. É fundamental conhecer o termo inicial dessa contagem em cada caso: é nele que residem boa parte das defesas bem-sucedidas em revisões mais antigas.',
    ],
    bullets: [
      'Regime aplicável (pré ou pós EC 41/2003 e EC 103/2019)',
      'Cômputo de tempo especial e averbações',
      'Habilitação de dependente inválido',
      'Prazo decadencial do ato de revisão',
    ],
    related: (
      <>
        Sobre limites do controle de atos administrativos pela via judicial,
        ver o artigo acadêmico do sócio-fundador em{' '}
        <Link href="/publicacoes">publicações</Link>.
      </>
    ),
  },
  {
    id: 'controle-judicial',
    eyebrow: 'Frente V',
    title: <>Controle judicial <span className="s-it">da decisão administrativa.</span></>,
    paragraphs: [
      'Quando o procedimento administrativo termina com decisão desfavorável, a pergunta seguinte é se — e como — o Judiciário pode revisar. A regra de partida é que o juiz controla a legalidade do ato, não substitui o mérito da Administração. Mas essa distinção, embora correta, esconde uma fronteira mais útil para o caso concreto: há quatro situações em que o controle alcança o conteúdo da decisão e há quatro em que se detém na forma.',
      'O Judiciário entra no conteúdo quando há (i) desproporção manifesta entre conduta e sanção; (ii) inexistência ou falsidade do motivo; (iii) cerceamento de defesa que efetivamente compromete o resultado; (iv) erro de enquadramento. Em todos esses casos, o que se sindica é vício de legalidade — não substituição do juízo administrativo por um juízo do magistrado.',
      'Se detém na forma quando o pedido é, no fundo, refazer a escolha da Administração: dosimetria proporcional e fundamentada, escolha entre sanções igualmente cabíveis, reexame de prova regularmente produzida, ou alegação de absolvição criminal sem reconhecimento da inexistência do fato ou da negativa de autoria (independência das instâncias — Lei 8.112/1990, art. 126).',
      'Saber de qual lado da fronteira está o seu caso — e como argumentá-lo no idioma correto — é a diferença entre uma via judicial que faz sentido e uma que reabre desgaste sem retorno.',
    ],
    bullets: [
      'Desproporção entre conduta e sanção',
      'Inexistência ou falsidade do motivo',
      'Cerceamento de defesa que compromete o resultado',
      'Erro de enquadramento',
    ],
    related: (
      <>
        Leitura complementar:{' '}
        <Link href="/blog/pad-controle-judicial">
          PAD e o limite do controle judicial sobre o mérito administrativo
        </Link>
        {' '}— o artigo desdobra as oito situações com mais detalhe.
      </>
    ),
  },
];

/**
 * FAQ aninhada — 5 perguntas específicas da área (mais focadas em PAD/serv.
 * que as gerais da /faq). NÃO emitimos FAQPage schema aqui para evitar
 * conflito com a /faq, que é a fonte canônica das Q&As. Esta seção serve
 * como reforço de UX local + sinal de profundidade temática.
 */
const FAQ_NESTED = [
  {
    q: 'Quem pode instaurar um PAD contra mim?',
    a: 'A competência para instaurar PAD é, em regra, da autoridade hierárquica máxima do órgão ou de quem ela delega expressamente. Em estatutos estaduais e municipais, a competência pode estar disposta em ato regulamentar próprio. Portaria assinada por autoridade incompetente é uma das hipóteses mais sólidas de vício de legalidade — suscitada a tempo, pode levar à anulação do procedimento.',
  },
  {
    q: 'Preciso comparecer à oitiva mesmo sem ter recebido portaria escrita?',
    a: 'Não. A intimação para oitiva em processo disciplinar pressupõe procedimento formalmente instaurado, com ciência por escrito do servidor. Comparecimento espontâneo a entrevista informal pode comprometer a defesa porque o conteúdo do depoimento pode ser usado depois. Em caso de dúvida, peça por escrito a base normativa da convocação antes de comparecer.',
  },
  {
    q: 'Qual o prazo de defesa em PAD federal e estadual no Rio?',
    a: 'No regime federal (Lei 8.112/1990, art. 161), o prazo de defesa escrita após indiciação é de 10 dias, dobrado quando houver dois ou mais indiciados. No regime estatutário do Estado do Rio (Decreto-Lei 220/1975 e seu regulamento), os prazos têm desenho semelhante, com variações entre carreiras específicas. Vale conferir o regulamento próprio da carreira antes do cômputo definitivo.',
  },
  {
    q: 'Posso pedir prorrogação se preciso de mais tempo para juntar documentos?',
    a: 'Sim, mediante requerimento fundamentado à comissão. A prorrogação não é direito automático, mas é deferida com frequência quando há justificativa concreta — necessidade de acesso a documentos sob guarda de outro órgão, por exemplo. O indeferimento sem motivação adequada pode embasar nulidade da decisão final por cerceamento de defesa.',
  },
  {
    q: 'A absolvição em processo criminal anula minha demissão por PAD?',
    a: 'Em regra, não. A esfera administrativa é independente da penal. A absolvição criminal só repercute automaticamente no PAD quando reconhece a inexistência do fato ou a negativa de autoria (Lei 8.112/1990, art. 126). Demais hipóteses de absolvição — como falta de provas ou atipicidade — não desfazem, sozinhas, a sanção administrativa.',
  },
];

export default function AreaDireitoDoServidorPage() {
  return (
    <>
      <JsonLd
        data={[
          webPage,
          service,
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Atuação', path: '/atuacao' },
            { name: 'Direito do Servidor', path: '/atuacao/direito-do-servidor' },
          ]),
        ]}
      />

      {/* PAGE HEAD */}
      <div className="pagehead">
        <div className="container">
          <Eyebrow>Área de atuação · I</Eyebrow>
          <h1 style={{ marginTop: 24 }}>
            Direito público<br /><span className="s-it">e do servidor.</span>
          </h1>
          <p>
            O eixo histórico do escritório desde 1991: defesa completa de
            direitos funcionais, progressões e aposentadorias, com mais de
            16 mil servidores assistidos em causas funcionais ao longo de
            três décadas e meia. Conhecimento profundo dos órgãos públicos do
            Rio de Janeiro e acompanhamento direto pelo sócio responsável.
          </p>
          <div className="row" style={{ marginTop: 28 }}>
            <span className="badge badge--accent">+16 mil servidores assistidos</span>
            <span className="badge">Estatutário · CLT</span>
            <span className="badge">Civil e militar</span>
          </div>
        </div>
      </div>

      {/* HERO IMAGEM + INTRO */}
      <div className="section section--tight">
        <div className="container">
          <div className="area-hero" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
            <div className="reveal">
              <Figure
                src="images/areas/direito-do-servidor.jpg"
                aspect="16/10"
                label="FOTO · corredor de fórum · luz natural · arquitetura · sem rosto"
                alt="Corredor de fórum no Rio de Janeiro — atuação em direito do servidor, Braga Jr. Advogados"
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                style={{ width: '100%' }}
              />
            </div>
            <div className="reveal" data-delay="2" style={{ paddingTop: 16 }}>
              <Eyebrow noRule>Quem chega até aqui</Eyebrow>
              <p style={{ marginTop: 18, fontSize: 18, lineHeight: 1.6 }}>
                Você é servidor concursado, recém-empossado ou em vias de
                aposentadoria. Talvez tenha recebido uma notificação de PAD ou
                sindicância. Talvez esteja avaliando opções para progressão,
                enquadramento ou contagem especial de tempo.
              </p>
              <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.6, color: 'var(--ink-muted)' }}>
                Em todos os casos, o relógio importa. E a primeira decisão
                técnica define o que vem depois — quando ainda é administrativo
                e quando já é litígio em formação.
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
            {ATOS.map((a, i) => (
              <div key={a.n} className="reveal" data-delay={i + 1}>
                <div className="serif" style={{ fontSize: 72, lineHeight: 1, color: 'var(--accent)', opacity: 0.45, fontStyle: 'italic' }}>{a.n}</div>
                <h3 style={{ marginTop: 12 }}>{a.title}</h3>
                <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.65, color: 'var(--ink-muted)' }}>{a.p}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.7 }}>
                  {a.items.map((it, j) => (
                    <li
                      key={it}
                      style={{
                        borderLeft: `1px solid ${a.border}`,
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

      {/* CINCO FRENTES — PILLAR EXPANSION (2026-05-21) */}
      <div className="section">
        <div className="container container--narrow">
          <div className="section-head reveal">
            <Eyebrow>Cinco frentes no detalhe</Eyebrow>
            <h2>O que cada caso <span className="s-it">efetivamente exige.</span></h2>
            <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.65, color: 'var(--ink-muted)', maxWidth: '64ch' }}>
              Descrição técnica das cinco frentes mais frequentes em direito do
              servidor — com referência aos diplomas que governam cada uma e o
              que a defesa precisa fazer em cada etapa. Não substitui análise
              do caso concreto; oferece um mapa.
            </p>
          </div>

          {FRENTES.map((f, idx) => (
            <article
              key={f.id}
              id={f.id}
              className="reveal"
              data-delay={(idx % 3) + 1}
              style={{
                marginTop: idx === 0 ? 56 : 64,
                paddingTop: idx === 0 ? 0 : 56,
                borderTop: idx === 0 ? 'none' : '1px solid var(--border)',
              }}
            >
              <Eyebrow>{f.eyebrow}</Eyebrow>
              <h3 style={{ marginTop: 16, fontSize: 'var(--t-display-sm)', lineHeight: 1.2 }}>
                {f.title}
              </h3>
              <div style={{ marginTop: 24 }}>
                {f.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      marginBottom: 16,
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: 'var(--ink-muted)',
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '24px 0 0',
                  fontSize: 14,
                  color: 'var(--ink-muted)',
                  lineHeight: 1.7,
                }}
              >
                {f.bullets.map((b, j) => (
                  <li
                    key={b}
                    style={{
                      borderLeft: '1px solid var(--accent)',
                      paddingLeft: 14,
                      marginBottom: j < f.bullets.length - 1 ? 10 : 0,
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
              {f.related && (
                <p
                  style={{
                    marginTop: 24,
                    fontSize: 14,
                    color: 'var(--ink-faint)',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                  }}
                >
                  {f.related}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* FAQ ANINHADA (sem FAQPage schema — fonte canônica é /faq) */}
      <div className="section">
        <div className="container container--narrow">
          <div className="section-head reveal">
            <Eyebrow>Dúvidas mais frequentes nesta área</Eyebrow>
            <h2>Perguntas <span className="s-it">recorrentes.</span></h2>
          </div>
          <div style={{ marginTop: 32 }}>
            {FAQ_NESTED.map((it, idx) => (
              <article
                key={idx}
                className="reveal"
                data-delay={(idx % 3) + 1}
                style={{
                  borderTop: '1px solid var(--border)',
                  padding: '28px 0',
                }}
              >
                <h3 style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.3, marginBottom: 14 }}>
                  {it.q}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-muted)' }}>
                  {it.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* SÓCIO RESPONSÁVEL + CONTEÚDOS RELACIONADOS */}
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
                    OAB/RJ 72.994
                  </div>
                  <p style={{ marginTop: 14, fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.55 }}>
                    Sócio-fundador. Direito público e privado pela PUC-Rio, EMERJ,
                    UERJ e IBMEC. Eixo histórico em servidor público.
                  </p>
                  <Link href="/sobre" className="btn btn--link" style={{ marginTop: 18 }}>Perfil completo &nbsp;→</Link>
                </div>
              </div>
            </div>

            <div className="reveal" data-delay="2">
              <Eyebrow>Conteúdos relacionados</Eyebrow>
              <div style={{ marginTop: 24 }}>
                {/* Blog publicado — cross-link real */}
                <Link
                  href="/blog/pad-controle-judicial"
                  style={{ display: 'block', padding: '20px 0', borderBottom: '1px solid var(--border-soft)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Eyebrow noRule>Blog · PAD</Eyebrow>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>Mai · 2026</span>
                  </div>
                  <div className="serif" style={{ fontSize: 20, marginTop: 8, lineHeight: 1.25 }}>
                    PAD e o limite do controle judicial sobre o mérito administrativo
                  </div>
                  <div style={{ marginTop: 10, fontSize: 12, color: 'var(--accent)' }}>Ler artigo &nbsp;<span className="arrow">→</span></div>
                </Link>
                {/* Publicações acadêmicas — cross-link real */}
                <Link
                  href="/publicacoes"
                  style={{ display: 'block', padding: '20px 0', borderBottom: '1px solid var(--border-soft)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Eyebrow noRule>Publicações do sócio</Eyebrow>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>2005 — 2007</span>
                  </div>
                  <div className="serif" style={{ fontSize: 20, marginTop: 8, lineHeight: 1.25 }}>
                    Cinco artigos acadêmicos do Dr. Jorge Braga Jr.
                  </div>
                  <div style={{ marginTop: 10, fontSize: 12, color: 'var(--accent)' }}>Ver publicações &nbsp;<span className="arrow">→</span></div>
                </Link>
                {/* /contato — caminho direto */}
                <Link
                  href="/contato"
                  style={{ display: 'block', padding: '20px 0' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Eyebrow noRule>Próximo passo</Eyebrow>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>Resposta em 2h</span>
                  </div>
                  <div className="serif" style={{ fontSize: 20, marginTop: 8, lineHeight: 1.25 }}>
                    Enviar mensagem ao escritório
                  </div>
                  <div style={{ marginTop: 10, fontSize: 12, color: 'var(--accent)' }}>Abrir contato &nbsp;<span className="arrow">→</span></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* CTA FINAL */}
      <div className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <Eyebrow noRule className="reveal">Próximo passo</Eyebrow>
          <h2 className="reveal" data-delay="1" style={{ marginTop: 24, fontSize: 'var(--t-display-lg)' }}>
            Conte o seu caso<br /><span className="s-it">numa consulta estratégica.</span>
          </h2>
          <p className="reveal" data-delay="2" style={{ marginTop: 24, fontSize: 18, color: 'var(--ink-muted)', maxWidth: '52ch', marginLeft: 'auto', marginRight: 'auto' }}>
            Diagnóstico jurídico completo na primeira conversa: mapeamento
            de riscos, contingenciamento de probabilidades, definição de
            estratégia. Você sai com uma leitura honesta do que cabe ou não cabe.
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
