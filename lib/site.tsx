import type { Metadata } from 'next';

/**
 * Fonte única de verdade para NAP + JSON-LD (README §8.2, §8.3).
 * NAP (Name/Address/Phone) tem que ser IDÊNTICO aqui, no Google Business
 * Profile, OAB/RJ e demais diretórios. Mude num lugar só.
 */

/** Domínio canônico de produção (fallback e referência de "é produção?"). */
export const PRODUCTION_URL = 'https://bragajr.adv.br';

/**
 * SITE_URL resolvido (server-side; canonical, og, sitemap, robots, JSON-LD).
 * Ordem: override explícito → preview da Vercel (auto, zero config) → produção.
 * Assim um deploy de preview gera tags coerentes com a URL do preview, sem
 * apontar canonical para um domínio que ainda não existe.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, '');
  if (
    process.env.VERCEL_ENV &&
    process.env.VERCEL_ENV !== 'production' &&
    process.env.VERCEL_URL
  ) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return PRODUCTION_URL;
}

export const SITE_URL = resolveSiteUrl();

/** Só o domínio canônico de produção deve indexar (preview = noindex). */
export const IS_PRODUCTION = SITE_URL === PRODUCTION_URL;

export const ORG_ID = `${SITE_URL}/#org`;

export const NAP = {
  name: 'Braga Jr. Advogados',
  alternateName: 'Braga Jr.',
  street: 'Av. Almirante Barroso, 63',
  groups: 'Grupos 2303 / 2504',
  district: 'Centro',
  city: 'Rio de Janeiro',
  region: 'RJ',
  postalCode: '20031-913',
  phonePrimary: '+55 (21) 2292-9413', // WhatsApp + voz (número do Google)
  phonePrimaryE164: '+552122929413',
  phoneSecondary: '+55 (21) 2292-7230', // fixo
  whatsapp: 'https://wa.me/552122929413',
  emailGeneral: 'bragajr@bragajr.adv.br',
  emailContato: 'contato@bragajr.adv.br', // destinatário do form (public/contato.php)
  emailDpo: 'dpo@bragajr.adv.br', // Encarregado/DPO — caixa ativa
  oab: 'OAB/RJ 72.994',
  partner: 'Dr. Jorge Álvaro da Silva Braga Jr.',
  // Coordenadas exatas extraídas do Google Business Profile do escritório.
  geo: { lat: '-22.908255', lng: '-43.17707' },
} as const;

/**
 * Bio do sócio-fundador — assinatura ao final de cada artigo do blog
 * (app/blog/[slug]/page.tsx). Fonte única: alterar aqui reflete em todos os
 * posts. Nome e OAB vêm de NAP.
 */
export const FOUNDER_BIO =
  'Atua há mais de três décadas em Direito Público, com atuação consolidada em causas de servidores públicos federais, estaduais e municipais, perante tribunais de todas as instâncias, inclusive em sustentação oral no STF e no STJ. Formação pela PUC-Rio, com pós-graduações em Direito Público e Privado (EMERJ), Advocacia Pública (UERJ/IPGE, convênio com a PGE-RJ) e Direito Empresarial (IBMEC).';

/**
 * Constantes LGPD. O escritório não possui CNPJ próprio → identificação do
 * controlador é feita por nome + responsável técnico + OAB + endereço, que é
 * aceito pela ANPD (art. 5º, VI: controlador pode ser PF ou PJ desde que
 * identificável e contactável).
 */
export const LGPD = {
  controller: NAP.name,
  dpoEmail: NAP.emailDpo,
  privacyUpdated: '2026-05-21',
  termsUpdated: '2026-05-18',
  anpdUrl: 'https://www.gov.br/anpd/pt-br',
} as const;

/**
 * LegalService global — porte fiel de src/seo-jsonld.js. No mockup era
 * injetado por <script> imperativo; aqui vai server-rendered no layout raiz,
 * presente em TODAS as páginas (README §8.2).
 */
export const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': ORG_ID,
  name: NAP.name,
  alternateName: NAP.alternateName,
  url: `${SITE_URL}/`,
  description:
    'Escritório de advocacia com 35 anos de atuação em Direito Público, defesa do servidor, entidades sindicais, Direito Corporativo, Compliance e LGPD. Sede no Centro do Rio de Janeiro.',
  founder: {
    '@type': 'Person',
    // @id estável: cruza com Article.author.@id nos posts de blog. Sem isso,
    // o grafo Schema.org não conecta autor do artigo ao sócio-fundador da
    // firma — exatamente o sinal que LLMs/Knowledge Graph usam para entender
    // "Dr. Jorge (do escritório X) escreveu este artigo".
    '@id': `${ORG_ID}-founder`,
    name: NAP.partner,
    jobTitle: 'Sócio-fundador',
    identifier: NAP.oab,
    // alumniOf + knowsAbout fortalecem o sinal de autoridade para Knowledge
    // Graph do Google e para citação por motores generativos (GPT, Perplexity).
    alumniOf: [
      { '@type': 'EducationalOrganization', name: 'PUC-Rio' },
      { '@type': 'EducationalOrganization', name: 'EMERJ — Escola da Magistratura do Estado do Rio de Janeiro' },
      { '@type': 'EducationalOrganization', name: 'UERJ — Universidade do Estado do Rio de Janeiro' },
      { '@type': 'EducationalOrganization', name: 'IBMEC' },
    ],
    knowsAbout: [
      'Direito Público',
      'Direito do Servidor Público',
      'Defesa em PADs e Sindicâncias',
      'Direito Sindical e Associativo',
      'Direito Corporativo',
      'Suspensão de Decisões contra Entes Públicos',
      'Lei de Responsabilidade Fiscal',
      'Filosofia do Direito',
    ],
    sameAs: [
      'https://www.linkedin.com/in/jorge-braga-jr-b6bb2834/',
    ],
  },
  foundingDate: '1991',
  telephone: '+55-21-2292-9413',
  email: NAP.emailGeneral,
  priceRange: '$$$',
  // sameAs no LegalService — perfis sociais da entidade. Sinal forte para o
  // Knowledge Graph + AEO (LLMs cruzam o LegalService do site com a presença
  // institucional no LinkedIn quando perguntam sobre o escritório).
  sameAs: [
    'https://www.linkedin.com/company/braga-jr-advogados/',
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Almirante Barroso, 63, Grupos 2303/2504, Centro',
      addressLocality: 'Rio de Janeiro',
      addressRegion: 'RJ',
      postalCode: '20031-913',
      addressCountry: 'BR',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '7614 Mill Stream Dr',
      addressLocality: 'Naples',
      addressRegion: 'FL',
      postalCode: '34109',
      addressCountry: 'US',
    },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  // Coordenadas precisas no pino do GBP — sinal forte para o Local Pack do
  // Google (proximity matching). Alinhado com NAP+geo meta tags do <head>.
  geo: {
    '@type': 'GeoCoordinates',
    latitude: NAP.geo.lat,
    longitude: NAP.geo.lng,
  },
  hasMap: `https://www.google.com/maps?q=${NAP.geo.lat},${NAP.geo.lng}`,
  areaServed: [
    { '@type': 'City', name: 'Rio de Janeiro' },
    { '@type': 'State', name: 'Rio de Janeiro' },
    { '@type': 'Country', name: 'Brasil' },
  ],
  knowsAbout: [
    'Direito Público',
    'Direito do Servidor Público',
    'Defesa em PADs e Sindicâncias',
    'Direito para Entidades Sindicais e Associativas',
    'Direito Corporativo',
    'Compliance',
    'LGPD - Lei Geral de Proteção de Dados',
    'Licitações e Contratos Públicos',
    'M&A e Planejamento Societário',
    'Direito de Família e Sucessões',
    'Direito Civil',
    'Direito do Trabalho Empresarial',
    'Direito Administrativo',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Áreas de atuação',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Direito do Servidor Público' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Defesa em PADs e Sindicâncias' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Entidades Sindicais e Associativas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Direito Corporativo' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance e LGPD' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Licitações e Contratos Públicos' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Direito Civil' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Direito do Trabalho Empresarial' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Administração Pública e Direito Administrativo' } },
    ],
  },
} as const;

/**
 * Helper de Open Graph. O Next NÃO herda `openGraph` do layout em profundidade
 * (merge raso: a page substitui o objeto inteiro). Sem isto, og:locale,
 * og:site_name, og:type e og:image somem em toda página que define o próprio
 * openGraph — violando o README §8.1. Toda page espalha buildOg(...).
 */
export function buildOg(
  url: string,
  opts?: { type?: 'website' | 'profile' | 'article'; publishedTime?: string },
): Metadata['openGraph'] {
  return {
    type: opts?.type ?? 'website',
    locale: 'pt_BR',
    siteName: NAP.name,
    url,
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: NAP.name }],
    ...(opts?.publishedTime ? { publishedTime: opts.publishedTime } : {}),
  } as Metadata['openGraph'];
}

/** Helper: BreadcrumbList JSON-LD a partir de pares [nome, path]. */
export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

/** Renderiza um ou mais blocos JSON-LD como <script>. */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify já escapa aspas; conteúdo é estático e confiável.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
