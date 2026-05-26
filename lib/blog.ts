/**
 * Fonte única dos posts. README §10: só título/kicker/excerpt existem — o
 * corpo dos artigos é redação do escritório (não inventar análise jurídica).
 * `published` em ISO alimenta o schema BlogPosting (datePublished).
 */

/**
 * status governa indexação e sitemap (não só o visual):
 *  · 'published'   — texto revisado e liberado pelo responsável técnico →
 *                    indexável + entra no sitemap.
 *  · 'draft'       — corpo redigido como scaffold, aguardando sign-off →
 *                    noindex, fora do sitemap, banner de rascunho.
 *  · 'placeholder' — só título/excerpt; corpo "em preparação" → noindex.
 */
export type PostStatus = 'published' | 'draft' | 'placeholder';

export type Post = {
  slug: string;
  kicker: string;
  dateLabel: string; // rótulo editorial exibido (ex.: "Mai · 2026")
  published: string; // ISO p/ <time> e JSON-LD
  read: string;
  title: string;
  excerpt: string;
  status: PostStatus;
  featured?: boolean;
};

export const isPublic = (p: Post) => p.status === 'published';

const RAW: Omit<Post, 'status'>[] = [
  {
    slug: 'pad-controle-judicial', kicker: 'Direito do servidor',
    dateLabel: 'Mai · 2026', published: '2026-05-21', read: '8 min',
    title: 'PAD e o limite do controle judicial sobre o mérito administrativo',
    excerpt:
      'Quatro situações em que o Judiciário revisa o conteúdo da decisão disciplinar — e as quatro em que se detém no exame da forma.',
    featured: true,
  },
  {
    slug: 'dpo-terceirizado-pme', kicker: 'Compliance',
    dateLabel: 'Abr · 2026', published: '2026-04-08', read: '6 min',
    title: 'Encarregado de dados terceirizado: quando faz sentido para a PME',
    excerpt:
      'Para empresas que ainda não maturaram a função interna, qual o custo-benefício real e quais riscos persistem.',
  },
  {
    slug: 'sindicato-legitimidade-stf', kicker: 'Sindical',
    dateLabel: 'Mar · 2026', published: '2026-03-12', read: '10 min',
    title: 'Legitimidade processual extraordinária de sindicato: o estado da questão no STF',
    excerpt:
      'Recorte da jurisprudência recente sobre representação processual de categoria — quando a entidade pode, e quando precisa de procuração.',
  },
  {
    slug: 'progressao-funcional-rj', kicker: 'Servidor',
    dateLabel: 'Fev · 2026', published: '2026-02-10', read: '12 min',
    title: 'Progressão funcional bloqueada: três caminhos antes da via judicial',
    excerpt:
      'Três caminhos administrativos — requerimento, recurso hierárquico e canais institucionais — costumam resolver o bloqueio antes do mandado de segurança.',
  },
  {
    slug: 'lei-licitacoes-fiscalizacao', kicker: 'Licitações',
    dateLabel: 'Jan · 2026', published: '2026-01-15', read: '9 min',
    title: 'O servidor que fiscaliza contrato sob a Lei 14.133: responsabilidades ampliadas',
    excerpt:
      'A nova lei mudou o regime de responsabilização do servidor fiscal — implicações práticas para o dia a dia administrativo.',
  },
  {
    slug: 'sustentacao-virtual-tribunais', kicker: 'Tribunais',
    dateLabel: 'Dez · 2025', published: '2025-12-09', read: '5 min',
    title: 'Sustentação oral em sessão virtual: o que mudou na prática nos tribunais superiores',
    excerpt:
      'Notas sobre a sustentação remota em sessões virtuais e híbridas — preparação, ritmo, limites técnicos.',
  },
  {
    slug: 'holding-familiar-3-perguntas', kicker: 'Família · Sucessões',
    dateLabel: 'Nov · 2025', published: '2025-11-11', read: '6 min',
    title: 'Holding familiar: três perguntas antes de estruturar',
    excerpt:
      'Planejamento sucessório nem sempre exige holding. Critérios para distinguir necessidade real de modismo tributário.',
  },
];

/**
 * Atribui status. PUBLISHED = revisado e liberado pelo Dr. Jorge; DRAFT =
 * corpo redigido aguardando sign-off; resto = placeholder (só metadados).
 */
const PUBLISHED = new Set<string>(['pad-controle-judicial', 'progressao-funcional-rj']);
const DRAFT = new Set<string>([]);

export const POSTS: Post[] = RAW.map((p) => ({
  ...p,
  status: PUBLISHED.has(p.slug)
    ? 'published'
    : DRAFT.has(p.slug)
      ? 'draft'
      : 'placeholder',
}));

export const CATEGORIES = [
  { name: 'Todos', count: 7, active: true },
  { name: 'Direito do servidor', count: 2 },
  { name: 'Compliance · LGPD', count: 1 },
  { name: 'Sindical', count: 1 },
  { name: 'Licitações', count: 1 },
  { name: 'Tribunais', count: 1 },
  { name: 'Família · Sucessões', count: 1 },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Rótulo de data legível por extenso a partir do ISO (pt-BR). */
export function longDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
