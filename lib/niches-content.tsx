import type { AreaContent } from '@/lib/areas-content';

/**
 * Nichos de especialização aninhados sob uma área (/atuacao/<area>/<niche>).
 * Reutiliza o type AreaContent (template idêntico) + parentArea para o
 * breadcrumb e a navegação a partir da página da área.
 *
 * Texto liberado pelo sócio-fundador (responsável técnico, OAB/RJ 72.994).
 * Atenção redobrada em holding-naples pela questão de competência (Florida Bar
 * exige inscrição local; não praticamos direito americano).
 */
export type NicheContent = AreaContent & {
  parentArea: { slug: string; title: string };
};

export const NICHES: NicheContent[] = [
  /* ──────────────── Holding com estrutura Brasil–Flórida ──────────────── */
  {
    slug: 'holding-naples',
    parentArea: { slug: 'corporativo', title: 'Direito empresarial e corporativo' },
    numeral: 'Especialização · Direito Empresarial',
    title1: 'Holding com estrutura',
    title2: 'Brasil–Flórida.',
    intro:
      'Estruturação de holding com componente internacional, ancorada na nossa representação em Naples (Flórida) para a interface americana e na coordenação com counsel licenciado pela Florida Bar — direito brasileiro pela nossa equipe.',
    badges: ['Brasil–Flórida', 'Filial em Naples, FL', 'Sucessão transnacional'],
    heroEyebrow: 'Quem chega até aqui',
    heroP1:
      'Você ou sua família têm patrimônio, sociedade ou herdeiros nos dois lados — Brasil e Estados Unidos. A questão raramente é só societária: é também sucessória, tributária e declaratória, em duas jurisdições ao mesmo tempo.',
    heroP2:
      'A primeira decisão técnica é traçar com precisão a fronteira entre o que se resolve no direito brasileiro e o que exige counsel americano licenciado pela Florida Bar.',
    atos: [
      {
        n: 'I.',
        title: <>Patrimônio em duas jurisdições, <span className="s-it">regras em duas jurisdições.</span></>,
        p: 'O problema costuma ter três camadas sobrepostas: o desenho societário no Brasil, a estrutura ou ativos nos Estados Unidos, e o regime declaratório de cada lado. Ignorar qualquer uma das três produz exposição não-mapeada que só aparece em fiscalização ou em sucessão.',
        items: [
          'Holding ou empresa com participação societária no exterior',
          'Herdeiros, sócios ou cônjuges residentes nos EUA',
          'Ativos imobiliários ou financeiros na Flórida',
          'Sucessão patrimonial transnacional',
        ],
      },
      {
        n: 'II.',
        title: <>A abordagem separa <span className="s-it">o que é nosso do que exige counsel local.</span></>,
        p: (
          <>
            Direito brasileiro é nossa atuação direta: due diligence patrimonial,
            modelagem societária, planejamento sucessório e conformidade fiscal
            pelo lado brasileiro. A interface com a Flórida — formação de
            entidade local, <em>estate planning</em> sob lei americana,{' '}
            <em>tax</em> — é encaminhada via nossa representação em Naples e em
            coordenação com counsel licenciado pela Florida Bar. Interfaces
            tributárias seguem com especialista.
          </>
        ),
        accent: true,
        items: [
          'Diagnóstico patrimonial integral',
          'Modelagem societária no Brasil',
          'Coordenação com counsel licenciado pela Florida Bar',
          'Recomendação por escrito, fundamentada',
        ],
      },
      {
        n: 'III.',
        title: <>O que esperar <span className="s-it">de uma estrutura instalada.</span></>,
        p: 'Implementação documentada das duas pontas, governança definida para decisões que cruzam jurisdições e revisão periódica das obrigações declaratórias — porque tanto Brasil quanto EUA operam por janelas anuais.',
        items: [
          'Implementação documentada (BR + interface FL)',
          'Governança bi-jurisdicional',
          'Revisão anual das obrigações declaratórias',
          'Manutenção da estrutura ao longo do tempo',
        ],
      },
    ],
    subareas: [
      { t: 'Estruturação societária no Brasil', d: 'Desenho da holding e dos veículos brasileiros que comportam o componente internacional.' },
      { t: 'Interface com a Flórida', d: 'Encaminhamento via filial em Naples e coordenação com counsel licenciado pela Florida Bar.' },
      { t: 'Sucessão transnacional', d: 'Tratamento de herdeiros, ativos e sucessão com sujeitos em duas jurisdições.' },
      { t: 'Conformidade fiscal brasileira', d: 'Obrigações declaratórias (CBE/DCBE) e tributação de participação no exterior conforme regime vigente.' },
      { t: 'Governança bi-jurisdicional', d: 'Regras claras para decisões societárias que cruzam jurisdições — quem decide o quê e com qual quórum.' },
      { t: 'Manutenção e revisão', d: 'Acompanhamento periódico das janelas declaratórias e da estrutura ao longo do tempo.' },
    ],
    related: [
      { kicker: 'Família · Sucessões', title: 'Holding familiar: três perguntas antes de estruturar' },
      { kicker: 'Internacional', title: 'Holding com componente internacional: o que muda no diagnóstico' },
      { kicker: 'Tributário', title: 'Lei 14.754/2023: tributação de offshore e o desenho da holding' },
    ],
    status: 'published',
    seoTitle: 'Holding com Estrutura Brasil–Flórida no Rio',
    seoDescription:
      'Estruturação de holding com componente internacional Brasil–EUA: filial em Naples (FL) e coordenação com counsel licenciado. Direito brasileiro pela equipe.',
    serviceType: 'Assessoria para Holdings com Estrutura Brasil–Flórida',
  },
];

export const getNiche = (areaSlug: string, nicheSlug: string) =>
  NICHES.find((n) => n.parentArea.slug === areaSlug && n.slug === nicheSlug);

export const getNichesByArea = (areaSlug: string) =>
  NICHES.filter((n) => n.parentArea.slug === areaSlug);

export const isNichePublic = (n: NicheContent) => n.status === 'published';
