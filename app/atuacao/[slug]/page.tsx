import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AreaTemplate } from '@/components/area-template';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID } from '@/lib/site';
import { AREAS_CONTENT, getArea } from '@/lib/areas-content';
import { getNichesByArea } from '@/lib/niches-content';

type Params = { params: { slug: string } };

// SSG: uma rota estática por área. direito-do-servidor NÃO entra aqui — tem
// página estática própria que sombreia este segmento dinâmico.
export function generateStaticParams() {
  return AREAS_CONTENT.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const area = getArea(params.slug);
  if (!area) return { title: 'Área não encontrada' };
  const url = `${SITE_URL}/atuacao/${area.slug}`;
  return {
    title: area.seoTitle,
    description: area.seoDescription,
    alternates: { canonical: `/atuacao/${area.slug}` },
    // Scaffold em revisão = noindex (segue links, fora do índice e do sitemap).
    // Nota: usar objeto completo para 'published' — Next 14 omite o meta se
    // for `undefined`, em vez de herdar do layout.
    robots:
      area.status === 'published'
        ? { index: true, follow: true, 'max-image-preview': 'large' }
        : { index: false, follow: true },
    openGraph: buildOg(url),
  };
}

export default function AreaPage({ params }: Params) {
  const area = getArea(params.slug);
  if (!area) notFound();

  const url = `${SITE_URL}/atuacao/${area.slug}`;

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${area.title1} ${area.title2}`.replace(/\.$/, ''),
    description: area.seoDescription,
    url,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': ORG_ID },
    about: { '@id': ORG_ID },
  };

  // Service aninhado no LegalService via provider @id — README §8.2.
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: area.serviceType,
    name: area.serviceType,
    description: area.seoDescription,
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'City', name: 'Rio de Janeiro' },
      { '@type': 'State', name: 'Rio de Janeiro' },
    ],
    url,
  };

  return (
    <>
      <JsonLd
        data={[
          webPage,
          service,
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Atuação', path: '/atuacao' },
            { name: `${area.title1} ${area.title2}`.replace(/\.$/, ''), path: `/atuacao/${area.slug}` },
          ]),
        ]}
      />
      <AreaTemplate data={area} niches={getNichesByArea(area.slug)} />
    </>
  );
}
