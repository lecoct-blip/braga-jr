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
  title: string;     // manchete editorial (h1)
  excerpt: string;   // lead exibido após capa (também usado como meta se sem override)
  status: PostStatus;
  featured?: boolean;
  // SEO override: quando o título editorial não bate com a intenção de busca,
  // declarar aqui sem mexer no h1. Idem para a meta description.
  seoTitle?: string;
  seoDescription?: string;
};

export const isPublic = (p: Post) => p.status === 'published';

const RAW: Omit<Post, 'status'>[] = [
  {
    slug: 'revisao-pasep-servidor-publico', kicker: 'Direito do servidor',
    dateLabel: 'Jun · 2026', published: '2026-06-01', read: '9 min',
    title: 'Revisão do PASEP do servidor: o que mudou após o Tema 1.150 do STJ',
    excerpt:
      'O STJ definiu que o Banco do Brasil responde por falhas nas contas do PASEP e que o prazo para discutir diferenças é de dez anos. Entenda quem ainda está no prazo.',
  },
  {
    slug: 'pad-controle-judicial', kicker: 'Direito do servidor',
    dateLabel: 'Mai · 2026', published: '2026-05-21', read: '8 min',
    title: 'PAD e o limite do controle judicial sobre o mérito administrativo',
    excerpt:
      'Quatro situações em que o Judiciário revisa o conteúdo da decisão disciplinar — e as quatro em que se detém no exame da forma.',
    featured: true,
  },
  {
    slug: 'dpo-terceirizado-pme', kicker: 'Compliance · LGPD',
    dateLabel: 'Mai · 2026', published: '2026-05-27', read: '9 min',
    title: 'Encarregado terceirizado: quando faz sentido para a PME',
    excerpt:
      'Custo-benefício, riscos e armadilhas do DPO externo para empresas que ainda não maturaram a função de proteção de dados.',
  },
  {
    slug: 'sindicato-legitimidade-stf', kicker: 'Sindical',
    dateLabel: 'Mai · 2026', published: '2026-05-27', read: '11 min',
    title: 'Legitimidade processual extraordinária do sindicato no STF',
    excerpt:
      'Quando o sindicato representa a categoria sem procuração, quando precisa, e o que muda diante de associações, federações e mandado de segurança coletivo.',
  },
  {
    slug: 'progressao-funcional-rj', kicker: 'Direito do servidor',
    dateLabel: 'Fev · 2026', published: '2026-02-10', read: '12 min',
    title: 'Progressão funcional bloqueada: três caminhos antes da via judicial',
    excerpt:
      'Três caminhos administrativos — requerimento, recurso hierárquico e canais institucionais — costumam resolver o bloqueio antes do mandado de segurança.',
  },
  {
    slug: 'lei-licitacoes-fiscalizacao', kicker: 'Licitações',
    dateLabel: 'Mai · 2026', published: '2026-05-27', read: '11 min',
    title: 'O servidor que fiscaliza contrato sob a Lei 14.133: responsabilidades ampliadas',
    excerpt:
      'A nova lei profissionalizou a função e elevou a responsabilização pessoal do fiscal. O que mudou em relação à Lei 8.666 e como o servidor designado reduz a exposição ao TCU.',
  },
  {
    slug: 'sustentacao-virtual-tribunais', kicker: 'Tribunais',
    dateLabel: 'Mai · 2026', published: '2026-05-27', read: '10 min',
    title: 'Sustentação oral em sessão virtual: o que mudou nos tribunais superiores',
    excerpt:
      'A Lei 14.365/2022, a Resolução CNJ 591/2024 e o novo regime do STJ mudaram o ritual da sustentação oral. Como o advogado deve agir hoje em RE, REsp e agravos.',
  },
  {
    slug: 'holding-familiar-3-perguntas', kicker: 'Família · Sucessões',
    dateLabel: 'Mai · 2026', published: '2026-05-27', read: '11 min',
    title: 'Holding familiar: três perguntas antes de estruturar',
    excerpt:
      'A holding familiar não é vestido sob medida que serve a todo patrimônio. Três perguntas que separam o instrumento útil do erro caro.',
  },
];

/**
 * Atribui status. PUBLISHED = revisado e liberado pelo Dr. Jorge; DRAFT =
 * corpo redigido aguardando sign-off; resto = placeholder (só metadados).
 */
const PUBLISHED = new Set<string>([
  'revisao-pasep-servidor-publico',
  'pad-controle-judicial',
  'progressao-funcional-rj',
  'dpo-terceirizado-pme',
  'sindicato-legitimidade-stf',
  'lei-licitacoes-fiscalizacao',
  'holding-familiar-3-perguntas',
  'sustentacao-virtual-tribunais',
]);
const DRAFT = new Set<string>([]);

export const POSTS: Post[] = RAW.map((p) => ({
  ...p,
  status: PUBLISHED.has(p.slug)
    ? 'published'
    : DRAFT.has(p.slug)
      ? 'draft'
      : 'placeholder',
}));

export type Category = { name: string; slug: string; count: number };

/**
 * Slugify pt-BR: remove diacríticos + chars não-alfanuméricos. Usado em URLs de
 * filtro (?cat=direito-do-servidor) e como chave estável entre client/server.
 */
export function categorySlug(name: string): string {
  return name
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Categorias derivadas dos kickers dos posts publicados — fonte única (DRY).
 * Ordem: mais posts primeiro, depois alfabética (estável quando empata).
 */
export const CATEGORIES: Category[] = (() => {
  const counts = new Map<string, number>();
  POSTS.filter(isPublic).forEach((p) => {
    counts.set(p.kicker, (counts.get(p.kicker) ?? 0) + 1);
  });
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, slug: categorySlug(name), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'pt-BR'));
})();

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
