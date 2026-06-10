import type { ReactNode } from 'react';

/**
 * Conteúdo das subpáginas de área redigido em SCAFFOLD no tom da marca
 * (estrutura de 3 atos — README §7.3). Texto liberado pelo sócio-fundador
 * (responsável técnico, OAB/RJ 72.994) — afirmações juridicamente carregadas
 * foram revisadas e estão publicáveis.
 *
 * direito-do-servidor NÃO está aqui: tem página estática própria (conteúdo do
 * mockup, indexável) que sombreia a rota dinâmica.
 */

export type Ato = {
  n: string;
  title: ReactNode;
  p: ReactNode;
  accent?: boolean; // borda dos bullets em accent (ato 2)
  items: ReactNode[];
};

export type AreaContent = {
  slug: string;
  numeral: string; // "Área de atuação · III"
  title1: string;
  title2: string; // itálico
  intro: ReactNode;
  badges: string[];
  heroEyebrow: string;
  heroP1: ReactNode;
  heroP2: ReactNode;
  atos: [Ato, Ato, Ato];
  subareas: { t: string; d: string }[];
  // slug = post publicado no blog. Se omitido, card renderiza como texto
  // estático (tema previsto, sem post ainda). Evita link quebrado.
  related: { slug?: string; kicker: string; title: string }[];
  status: 'draft' | 'published';
  // metadados SEO (title/description ficam aqui p/ centralizar)
  seoTitle: string;
  seoDescription: string;
  serviceType: string;
};

export const AREAS_CONTENT: AreaContent[] = [
  /* ───────────────────────── Entidades sindicais (III) ──────────────────── */
  {
    slug: 'entidades-sindicais',
    numeral: 'Área de atuação · III',
    title1: 'Entidades sindicais',
    title2: 'e associativas.',
    intro:
      'Assessoria jurídica continuada a sindicatos, associações e entidades de classe — da defesa institucional à formação de jurisprudência da categoria nos tribunais superiores.',
    badges: ['30+ entidades sob assessoria', 'Substituição processual', 'STF · STJ'],
    heroEyebrow: 'Quem chega até aqui',
    heroP1:
      'Você dirige um sindicato ou associação e precisa decidir se age em nome próprio em favor da categoria, como negociar a data-base, ou como responder a um questionamento sobre custeio.',
    heroP2:
      'A primeira decisão técnica — sobre legitimidade e via — define o alcance do que vem depois, para a entidade e para cada filiado.',
    atos: [
      {
        n: 'I.',
        title: <>O interesse é coletivo, <span className="s-it">a porta é estreita.</span></>,
        p: 'A pretensão é da categoria, mas a legitimidade para deduzi-la em juízo tem contornos próprios. Tratar a entidade como simples mandatária, quando cabe atuação em nome próprio — ou o inverso — compromete o resultado já na petição inicial.',
        items: [
          'Pretensão coletiva da categoria a deduzir',
          'Dúvida sobre legitimidade ativa da entidade',
          'Questionamento sobre custeio e contribuições',
          'Negociação coletiva ou data-base travada',
        ],
      },
      {
        n: 'II.',
        title: <>A abordagem <span className="s-it">começa pela representatividade.</span></>,
        p: 'Mapeamento de base territorial, enquadramento e representatividade; definição da via — administrativa, negocial ou judicial — antes de qualquer ajuizamento. Só então, recomendação fundamentada com cenários.',
        accent: true,
        items: [
          'Análise de representatividade e base',
          'Estratégia entre negociação e judicialização',
          'Mapeamento de precedentes da categoria',
          'Recomendação por escrito, com cenários',
        ],
      },
      {
        n: 'III.',
        title: <>O que esperar <span className="s-it">da atuação continuada.</span></>,
        p:
          'Atuação institucional continuada, com interlocução direta com a diretoria, relatórios em marcos do processo e sustentação nos tribunais quando a tese chega às instâncias superiores.',
        items: [
          'Interlocução direta com a diretoria',
          'Relatórios em marcos definidos',
          'Sustentação em tribunais superiores',
          'Acompanhamento das ações estruturantes',
        ],
      },
    ],
    subareas: [
      { t: 'Substituição processual', d: 'Atuação da entidade em nome próprio em favor da categoria, com análise prévia de legitimidade.' },
      { t: 'Negociação coletiva e dissídio', d: 'Apoio jurídico à negociação de data-base, acordos e convenções, e ao dissídio quando necessário.' },
      { t: 'Custeio e contribuições', d: 'Estruturação e defesa do custeio da entidade dentro do regime legal vigente.' },
      { t: 'Defesa institucional', d: 'Defesa da entidade em questionamentos administrativos e judiciais sobre sua atuação.' },
      { t: 'Ações estruturantes', d: 'Causas de impacto sobre toda a categoria, da formulação à sustentação.' },
      { t: 'Sustentação nos tribunais', d: 'Sustentação oral e acompanhamento em STF e STJ na formação de jurisprudência.' },
    ],
    related: [
      { slug: 'sindicato-legitimidade-stf', kicker: 'Sindical', title: 'Legitimidade processual extraordinária do sindicato no STF' },
      { slug: 'pad-controle-judicial', kicker: 'Direito do servidor', title: 'PAD e o limite do controle judicial sobre o mérito administrativo' },
      { slug: 'sustentacao-virtual-tribunais', kicker: 'Tribunais', title: 'Sustentação oral em sessão virtual: o que mudou nos tribunais superiores' },
    ],
    status: 'published',
    seoTitle: 'Advogado de Sindicatos no Rio de Janeiro',
    seoDescription:
      'Assessoria a sindicatos e associações: substituição processual, negociação coletiva, custeio e sustentação em STF/STJ. Rio de Janeiro.',
    serviceType: 'Advocacia para Entidades Sindicais e Associativas',
  },

  /* ──────────────────── Direito empresarial e corporativo (IV) ──────────── */
  {
    slug: 'corporativo',
    numeral: 'Área de atuação · IV',
    title1: 'Direito empresarial',
    title2: 'e corporativo.',
    intro:
      'Consultoria societária, governança, contratos empresariais, reorganizações e M&A, com planejamento sucessório e proteção patrimonial para sócios e empresas.',
    badges: ['Societário · M&A', 'Contratos empresariais', 'Governança'],
    heroEyebrow: 'Quem chega até aqui',
    heroP1:
      'Você é sócio ou gestor: vai estruturar ou reorganizar a sociedade, revisar um contrato relevante, blindar o patrimônio ou resolver um conflito societário.',
    heroP2:
      'O que parece uma decisão de negócio quase sempre tem uma camada societária e patrimonial que define o risco de quem assina.',
    atos: [
      {
        n: 'I.',
        title: <>O problema raramente é <span className="s-it">só jurídico.</span></>,
        p: 'É societário e patrimonial ao mesmo tempo: quem responde, com que patrimônio e em que extensão. A forma jurídica escolhida determina a exposição dos sócios e administradores.',
        items: [
          'Revisão ou renegociação de contrato relevante',
          'Reorganização societária ou operação de M&A',
          'Conflito entre sócios',
          'Exposição patrimonial não endereçada',
        ],
      },
      {
        n: 'II.',
        title: <>A abordagem <span className="s-it">integra os instrumentos.</span></>,
        p: 'Due diligence, modelagem societária e desenho dos instrumentos (acordo de sócios, cláusulas de governança e saída). Interfaces tributárias são tratadas com especialista.',
        accent: true,
        items: [
          'Due diligence e mapeamento de risco',
          'Modelagem societária da operação',
          'Acordo de sócios e governança',
          'Recomendação por escrito, fundamentada',
        ],
      },
      {
        n: 'III.',
        title: <>O que esperar <span className="s-it">da execução.</span></>,
        p:
          'Implementação documentada, instalação da governança acordada e acompanhamento — com revisão das premissas a cada marco relevante da operação.',
        items: [
          'Implementação documentada',
          'Governança instalada e operante',
          'Acompanhamento por marcos',
          'Encerramento documentado',
        ],
      },
    ],
    subareas: [
      { t: 'Contratos empresariais', d: 'Negociação, redação e revisão de contratos empresariais e instrumentos acessórios.' },
      { t: 'Societário e governança', d: 'Estruturação de sociedades, atos societários e regras de governança.' },
      { t: 'M&A e reorganizações', d: 'Aquisições, reorganizações e reestruturações, da due diligence ao fechamento.' },
      { t: 'Acordo de sócios', d: 'Desenho de direitos, deveres, saída e solução de impasses entre sócios.' },
      { t: 'Planejamento patrimonial', d: 'Proteção patrimonial e planejamento sucessório integrados à estrutura societária.' },
      { t: 'Contencioso societário', d: 'Conflitos entre sócios e responsabilização de administradores.' },
    ],
    related: [
      { slug: 'acordo-de-socios-clausulas-litigio', kicker: 'Societário', title: 'Acordo de sócios: as cláusulas que evitam o litígio que você não previu' },
      { slug: 'due-diligence-passivos-ocultos-comprador', kicker: 'M&A', title: 'Due diligence: o que o comprador descobre tarde demais' },
      { slug: 'holding-familiar-3-perguntas', kicker: 'Família · Sucessões', title: 'Holding familiar: três perguntas antes de estruturar' },
    ],
    status: 'published',
    seoTitle: 'Advogado Empresarial no Rio de Janeiro',
    seoDescription:
      'Direito empresarial e corporativo: contratos, societário, M&A, acordo de sócios e planejamento patrimonial. Assessoria a empresas no Rio de Janeiro.',
    serviceType: 'Advocacia Empresarial e Corporativa',
  },

  /* ───────────────────────────── Direito civil (VII) ────────────────────── */
  {
    slug: 'direito-civil',
    numeral: 'Área de atuação · VII',
    title1: 'Direito',
    title2: 'civil.',
    intro:
      'Relações privadas com método: contratos, responsabilidade civil, família e sucessões e direito imobiliário, na via consultiva e na contenciosa.',
    badges: ['Contratos · Responsabilidade', 'Família · Sucessões', 'Cível estratégico'],
    heroEyebrow: 'Quem chega até aqui',
    heroP1:
      'Você tem um contrato descumprido, um dano a reparar, uma questão de família ou herança, ou um negócio imobiliário que precisa de segurança.',
    heroP2:
      'Em todos esses casos, o tempo conta — e a primeira decisão técnica define o que ainda é negociável e o que já virou litígio.',
    atos: [
      {
        n: 'I.',
        title: <>O problema chega <span className="s-it">com prazo.</span></>,
        p: 'Pretensões civis se extinguem pelo decurso do tempo, e o prazo varia conforme a matéria. Identificar corretamente prescrição e decadência é o primeiro filtro de viabilidade.',
        items: [
          'Inadimplemento ou revisão de contrato',
          'Dano material ou moral a reparar',
          'Questão de família ou sucessão',
          'Negócio imobiliário ou direito real',
        ],
      },
      {
        n: 'II.',
        title: <>A abordagem <span className="s-it">tenta o acordo antes do litígio.</span></>,
        p: 'Análise documental, definição da tese e dos cenários, e avaliação séria da via autocompositiva antes da judicialização.',
        accent: true,
        items: [
          'Análise documental integral',
          'Tese e cenários por escrito',
          'Avaliação de solução negociada',
          'Recomendação fundamentada',
        ],
      },
      {
        n: 'III.',
        title: <>O que esperar <span className="s-it">da condução.</span></>,
        p:
          'Condução do acordo ou do contencioso com ponto de contato direto, relatórios em marcos do processo e revisão a cada decisão relevante.',
        items: [
          'Ponto de contato direto',
          'Relatórios em marcos definidos',
          'Revisão a cada decisão relevante',
          'Encerramento documentado',
        ],
      },
    ],
    subareas: [
      { t: 'Contratos civis', d: 'Elaboração, revisão e contencioso de contratos entre particulares.' },
      { t: 'Responsabilidade civil', d: 'Reparação de danos materiais, morais e estéticos, na via judicial ou negociada.' },
      { t: 'Família e união estável', d: 'Divórcio, união estável, alimentos e regime de bens, com discrição.' },
      { t: 'Sucessões e inventário', d: 'Inventário, partilha, testamento e planejamento sucessório.' },
      { t: 'Imobiliário', d: 'Compra e venda, posse, propriedade e regularização de direitos reais.' },
      { t: 'Mediação e acordos', d: 'Solução autocompositiva estruturada, quando é o melhor caminho.' },
    ],
    related: [
      { kicker: 'Contratos', title: 'Revisão contratual: quando o desequilíbrio autoriza rever o que foi assinado' },
      { kicker: 'Sucessões', title: 'Inventário: extrajudicial ou judicial — o critério que pouca gente aplica' },
      { kicker: 'Responsabilidade', title: 'Dano moral: o que sustenta o valor além da alegação' },
    ],
    status: 'published',
    seoTitle: 'Advogado de Direito Civil no Rio de Janeiro',
    seoDescription:
      'Direito civil com método: contratos, responsabilidade civil, família, sucessões e imobiliário. Atuação consultiva e contenciosa no Rio de Janeiro.',
    serviceType: 'Advocacia em Direito Civil',
  },

  /* ─────────────────── Trabalhista com foco em empresa (VIII) ───────────── */
  {
    slug: 'trabalhista-empresarial',
    numeral: 'Área de atuação · VIII',
    title1: 'Direito do trabalho',
    title2: 'com foco em empresa.',
    intro:
      'Assessoria preventiva e contenciosa pelo lado do empregador: compliance trabalhista, modelos de contratação, gestão de passivo e defesa em reclamatórias e fiscalizações.',
    badges: ['Lado empregador', 'Prevenção de passivo', 'Contencioso e fiscalização'],
    heroEyebrow: 'Quem chega até aqui',
    heroP1:
      'Você responde por uma empresa: precisa estruturar contratação, revisar um modelo de terceirização ou PJ, reduzir passivo recorrente ou responder a uma reclamatória ou autuação.',
    heroP2:
      'O risco trabalhista raramente avisa: ele se acumula em silêncio e aparece concentrado — em auditoria, em due diligence ou na primeira ação.',
    atos: [
      {
        n: 'I.',
        title: <>O problema vira <span className="s-it">passivo silencioso.</span></>,
        p: 'Modelos de contratação adotados por hábito podem não se sustentar à luz do regime vigente, e o custo aparece somado.',
        items: [
          'Modelo de contratação ou terceirização sob risco',
          'Reclamatórias recorrentes com mesmo padrão',
          'Fiscalização ou autuação do trabalho',
          'Due diligence trabalhista em operação de M&A',
        ],
      },
      {
        n: 'II.',
        title: <>A abordagem <span className="s-it">é diagnóstico antes de defesa.</span></>,
        p: 'Diagnóstico do passivo, ajuste de políticas e contratos e treinamento; só então a estratégia processual.',
        accent: true,
        items: [
          'Diagnóstico de passivo e exposição',
          'Ajuste de políticas e contratos',
          'Treinamento de gestores',
          'Estratégia processual definida',
        ],
      },
      {
        n: 'III.',
        title: <>O que esperar <span className="s-it">da gestão do risco.</span></>,
        p:
          'Defesa técnica nas reclamatórias, acordos quando reduzem exposição, e monitoramento de indicadores para que o passivo não volte a se acumular.',
        items: [
          'Defesa técnica nas reclamatórias',
          'Acordos quando reduzem exposição',
          'Monitoramento de indicadores',
          'Relatórios periódicos à gestão',
        ],
      },
    ],
    subareas: [
      { t: 'Compliance trabalhista', d: 'Políticas, rotinas e contratos que reduzem exposição antes do litígio.' },
      { t: 'Contratação e terceirização', d: 'Desenho e revisão de modelos de contratação, terceirização e prestação de serviços.' },
      { t: 'Defesa em reclamatórias', d: 'Defesa do empregador em todas as instâncias da Justiça do Trabalho.' },
      { t: 'Fiscalização e autuações', d: 'Resposta a fiscalização do trabalho e defesa em autos de infração.' },
      { t: 'Due diligence trabalhista', d: 'Avaliação de passivo trabalhista em operações societárias.' },
      { t: 'Negociação e acordos', d: 'Acordos individuais e coletivos quando convém à estratégia.' },
    ],
    related: [
      { kicker: 'Trabalhista', title: 'Pejotização: a linha entre modelo legítimo e passivo iminente' },
      { kicker: 'Empresa', title: 'Reclamatórias em série: tratar a causa, não só a defesa' },
      { kicker: 'M&A', title: 'Passivo trabalhista oculto: o que a due diligence precisa olhar' },
    ],
    status: 'published',
    seoTitle: 'Advogado Trabalhista Empresarial no Rio',
    seoDescription:
      'Direito do trabalho pelo lado da empresa: compliance trabalhista, contratação, terceirização, defesa em reclamatórias e fiscalizações. Rio de Janeiro.',
    serviceType: 'Advocacia Trabalhista Empresarial',
  },

  /* ───────────────────────── Administração Pública (IX) ─────────────────── */
  {
    slug: 'administracao-publica',
    numeral: 'Área de atuação · IX',
    title1: 'Administração',
    title2: 'pública.',
    intro:
      'Para quem contrata com o poder público ou atua dentro dele: licitações e contratos administrativos, sanções, controle externo (TCU/TCE-RJ) e defesa em improbidade.',
    badges: ['Lei 14.133', 'TCU · TCE-RJ', 'Improbidade · responsabilização'],
    heroEyebrow: 'Quem chega até aqui',
    heroP1:
      'Você é uma empresa que contrata com o Estado, ou um agente público, e enfrenta uma impugnação, uma sanção, uma tomada de contas ou uma ação de improbidade.',
    heroP2:
      'Aqui, competência e prazo são quase tudo: a primeira peça define se a discussão será de legalidade ou apenas de mérito do administrador.',
    atos: [
      {
        n: 'I.',
        title: <>O problema é de <span className="s-it">competência e prazo.</span></>,
        p: 'O rito, o prazo e a autoridade competente mudam conforme o regime aplicável, e errar a porta de entrada custa a defesa.',
        items: [
          'Impugnação ou recurso em licitação',
          'Sanção administrativa ou declaração de inidoneidade',
          'Tomada de contas no TCU ou TCE-RJ',
          'Ação de improbidade administrativa',
        ],
      },
      {
        n: 'II.',
        title: <>A abordagem <span className="s-it">lê o controle antes de responder.</span></>,
        p: 'Leitura do edital ou do processo, tese de legalidade e proporcionalidade, e mapeamento do órgão de controle competente.',
        accent: true,
        items: [
          'Leitura do edital e do processo',
          'Tese de legalidade e proporcionalidade',
          'Mapeamento do órgão de controle',
          'Recomendação por escrito',
        ],
      },
      {
        n: 'III.',
        title: <>O que esperar <span className="s-it">do andamento.</span></>,
        p:
          'Defesa nas instâncias administrativas e de controle externo, acompanhamento do processo no tribunal de contas e revisão das premissas a cada decisão relevante.',
        items: [
          'Defesa nas instâncias competentes',
          'Acompanhamento do controle externo',
          'Revisão a cada decisão relevante',
          'Encerramento documentado',
        ],
      },
    ],
    subareas: [
      { t: 'Licitações (Lei 14.133)', d: 'Impugnações, recursos e acompanhamento de certames sob o novo regime.' },
      { t: 'Contratos administrativos', d: 'Formação, execução, reequilíbrio e extinção de contratos com a Administração.' },
      { t: 'Sanções e inidoneidade', d: 'Defesa em processos sancionatórios e pedidos de reabilitação.' },
      { t: 'Tomada de contas', d: 'Defesa perante o TCU e o TCE-RJ em tomadas e prestações de contas.' },
      { t: 'Improbidade administrativa', d: 'Defesa em ações de improbidade sob a Lei 14.230/2021.' },
      { t: 'Consultoria preventiva', d: 'Pareceres e estruturação para reduzir risco antes da contratação.' },
    ],
    related: [
      { slug: 'lei-licitacoes-fiscalizacao', kicker: 'Licitações', title: 'O servidor que fiscaliza contrato sob a Lei 14.133: responsabilidades ampliadas' },
      { kicker: 'Improbidade', title: 'A Lei 14.230 e o dolo específico: o que mudou na defesa' },
      { kicker: 'Controle', title: 'Tomada de contas no TCE-RJ: a defesa começa antes da citação' },
    ],
    status: 'published',
    seoTitle: 'Advogado de Direito Administrativo no Rio',
    seoDescription:
      'Administração pública: licitações (Lei 14.133), contratos administrativos, sanções, tomada de contas no TCU/TCE-RJ e defesa em improbidade. Rio de Janeiro.',
    serviceType: 'Advocacia em Direito Administrativo',
  },
];

export const getArea = (slug: string) => AREAS_CONTENT.find((a) => a.slug === slug);
export const isAreaPublic = (a: AreaContent) => a.status === 'published';
