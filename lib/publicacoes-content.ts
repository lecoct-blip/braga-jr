/**
 * Publicações acadêmicas do sócio-fundador. Conteúdo PUBLICADO (real,
 * verificável, autoria do Dr. Jorge) — não há status:'draft' aqui; entram
 * indexáveis no `/publicacoes` e no sitemap.
 *
 * Os PDFs vivem em /public/publicacoes/<slug>.pdf.
 */

export type Publicacao = {
  slug: string;
  title: string;
  year: number;
  area: string;
  context: string; // programa onde foi publicado (ESAP, EMERJ, etc.)
  synopsis: string; // 1-2 frases técnicas
  file: string; // caminho relativo a /public
  fileSizeKB: number;
};

/** Ordem reverse-chronological (mais recente primeiro) é aplicada no render. */
export const PUBLICACOES: Publicacao[] = [
  {
    slug: 'suspensao-decisoes-entes-publicos',
    title:
      'Suspensão de Decisões Judiciais Proferidas Contra Entes Públicos. Aspectos Contraditórios',
    year: 2007,
    area: 'Direito Processual Público',
    context: 'ESAP — Especialização em Advocacia Pública',
    synopsis:
      'Aspectos controvertidos do incidente de suspensão de execução de decisão judicial: natureza jurídica, legitimidade ativa, recursos cabíveis e a tensão entre interesse público e democratização da jurisdição.',
    file: 'publicacoes/suspensao-decisoes-entes-publicos.pdf',
    fileSizeKB: 428,
  },
  {
    slug: 'direito-ambiental-principios',
    title: 'Princípios Fundamentais do Direito Ambiental',
    year: 2006,
    area: 'Direito Ambiental',
    context: 'ESAP — Especialização em Advocacia Pública',
    synopsis:
      'Sistematização dos princípios do Direito Ambiental brasileiro: do ambiente ecologicamente equilibrado como expressão da dignidade humana ao poluidor-pagador, prevenção e cooperação entre povos.',
    file: 'publicacoes/direito-ambiental-principios.pdf',
    fileSizeKB: 236,
  },
  {
    slug: 'lrf-principios-norteadores',
    title: 'Os Princípios Norteadores da Lei de Responsabilidade Fiscal',
    year: 2006,
    area: 'Direito Financeiro / Administrativo',
    context: 'ESAP — Especialização em Advocacia Pública',
    synopsis:
      'Análise dos princípios que estruturam a Lei Complementar 101/2000 — equilíbrio, prudência e transparência — sob a ótica da gestão pública pós-positivista e do controle moderno das contas públicas.',
    file: 'publicacoes/lrf-principios-norteadores.pdf',
    fileSizeKB: 240,
  },
  {
    slug: 'retorica-decisoes-judiciais',
    title:
      'A Retórica nas Decisões Judiciais. A Busca do Justo e da Segurança Jurídica',
    year: 2005,
    area: 'Filosofia do Direito · Argumentação',
    context: 'ESAP — Especialização em Advocacia Pública',
    synopsis:
      'A aplicação da Retórica e da Teoria da Argumentação como ferramenta para superar a tradição positivista rígida sem comprometer a segurança jurídica nas decisões judiciais.',
    file: 'publicacoes/retorica-decisoes-judiciais.pdf',
    fileSizeKB: 205,
  },
  {
    slug: 'positivismo-juridico',
    title:
      'A Questão do Positivismo Jurídico. Crítica e Adequação da Dogmática Jurídica na Complexidade das Relações Humanas',
    year: 2005,
    area: 'Hermenêutica · Filosofia do Direito',
    context: 'ESAP — Especialização em Advocacia Pública',
    synopsis:
      'Crítica ao positivismo e à dogmática puramente normativa frente à complexidade das relações humanas contemporâneas, com leitura hermenêutica pós-positivista e globalização.',
    file: 'publicacoes/positivismo-juridico.pdf',
    fileSizeKB: 362,
  },
];
