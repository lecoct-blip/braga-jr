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
  {
    slug: 'due-diligence-passivos-ocultos-comprador', kicker: 'Compliance',
    dateLabel: 'Jun · 2026', published: '2026-06-10', read: '9 min',
    title: 'Due diligence: o que o comprador descobre tarde demais',
    excerpt:
      'Passivo trabalhista, fiscal e de dados raramente aparecem no balanço — mas passam ao comprador por sucessão. O que a due diligence revela antes da assinatura.',
    seoTitle: 'Due diligence em M&A: os passivos que o comprador herda',
    seoDescription:
      'Passivo trabalhista, fiscal e de LGPD não aparecem no balanço, mas passam ao comprador. O que a due diligence revela antes que seja tarde.',
  },
  {
    slug: 'acordo-de-socios-clausulas-litigio', kicker: 'Compliance',
    dateLabel: 'Jun · 2026', published: '2026-06-10', read: '9 min',
    title: 'Acordo de sócios: as cláusulas que evitam o litígio que você não previu',
    excerpt:
      'Direito de preferência, drag along, apuração de haveres e arbitragem. As cláusulas que separam a sociedade que resolve impasses na mesa da que resolve no Judiciário.',
    seoTitle: 'Acordo de sócios: cláusulas que evitam litígio | Braga Jr.',
    seoDescription:
      'As cláusulas de um acordo de sócios que evitam o litígio societário: preferência, drag along, apuração de haveres e arbitragem. Entenda como blindar a sociedade.',
  },
  {
    slug: 'revisao-contratual-desequilibrio-contrato', kicker: 'Direito Civil',
    dateLabel: 'Jun · 2026', published: '2026-06-10', read: '8 min',
    title: 'Revisão contratual: quando o desequilíbrio autoriza rever o que foi assinado',
    excerpt:
      'O contrato faz lei entre as partes — mas a lei abre exceções quando um fato superveniente rompe o equilíbrio. Entenda quando é possível rever, e não apenas cumprir, o que foi assinado.',
    seoTitle: 'Revisão contratual: quando rever o contrato | Braga Jr.',
    seoDescription:
      'A revisão contratual permite rever cláusulas quando um fato superveniente gera desequilíbrio. Entenda quando a lei autoriza alterar o que foi assinado.',
  },
  {
    slug: 'inventario-extrajudicial-ou-judicial-criterio', kicker: 'Família · Sucessões',
    dateLabel: 'Jun · 2026', published: '2026-06-10', read: '11 min',
    title: 'Inventário: extrajudicial ou judicial — o critério que pouca gente aplica',
    excerpt:
      'A escolha entre cartório e fórum não se decide por uma checklist de "tem testamento?" ou "tem menor?". Desde a Resolução CNJ 571/2024, o critério que realmente importa é outro — e quase ninguém aplica antes de decidir.',
    seoTitle: 'Inventário: extrajudicial ou judicial? | Braga Jr.',
    seoDescription:
      'Quando o inventário pode ser feito em cartório e quando precisa ir ao fórum? Veja o critério que realmente decide entre a via extrajudicial e a judicial.',
  },
  {
    slug: 'dano-moral-valor-alem-alegacao', kicker: 'Direito Civil',
    dateLabel: 'Jun · 2026', published: '2026-06-10', read: '9 min',
    title: 'Dano moral: o que sustenta o valor além da alegação',
    excerpt:
      'O valor do dano moral não nasce da intensidade do relato. O STJ adotou um método bifásico que ancora o quantum em precedentes e prova. Entenda o que sustenta o pedido.',
    seoTitle: 'Dano moral: como o STJ calcula o valor | Braga Jr.',
    seoDescription:
      'O valor do dano moral não vem da alegação de sofrimento, mas da prova do dano e do método bifásico do STJ. Entenda o que sustenta o quantum.',
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
  'due-diligence-passivos-ocultos-comprador',
  'acordo-de-socios-clausulas-litigio',
  'revisao-contratual-desequilibrio-contrato',
  'inventario-extrajudicial-ou-judicial-criterio',
  'dano-moral-valor-alem-alegacao',
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
