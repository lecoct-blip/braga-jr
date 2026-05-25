import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AreaTemplate } from '@/components/area-template';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID } from '@/lib/site';
import { NICHES, getNiche } from '@/lib/niches-content';

type Params = { params: { slug: string; niche: string } };

// SSG: uma rota por nicho. Pares (area, niche) válidos vêm do registry.
export function generateStaticParams() {
  return NICHES.map((n) => ({ slug: n.parentArea.slug, niche: n.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const n = getNiche(params.slug, params.niche);
  if (!n) return { title: 'Especialização não encontrada' };
  const url = `${SITE_URL}/atuacao/${n.parentArea.slug}/${n.slug}`;
  return {
    title: n.seoTitle,
    description: n.seoDescription,
    alternates: { canonical: `/atuacao/${n.parentArea.slug}/${n.slug}` },
    // Mesma disciplina das áreas: rascunho → noindex e fora do sitemap.
    robots: n.status === 'published' ? undefined : { index: false, follow: true },
    openGraph: buildOg(url),
  };
}

export default function NichePage({ params }: Params) {
  const n = getNiche(params.slug, params.niche);
  if (!n) notFound();

  const url = `${SITE_URL}/atuacao/${n.parentArea.slug}/${n.slug}`;
  const name = `${n.title1} ${n.title2}`.replace(/\.$/, '');

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description: n.seoDescription,
    url,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': ORG_ID },
    about: { '@id': ORG_ID },
  };

  // Service específico do nicho — provider → @id do LegalService (README §8.2).
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: n.serviceType,
    name: n.serviceType,
    description: n.seoDescription,
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
            { name: n.parentArea.title, path: `/atuacao/${n.parentArea.slug}` },
            { name, path: `/atuacao/${n.parentArea.slug}/${n.slug}` },
          ]),
        ]}
      />
      <AreaTemplate data={n} />
    </>
  );
}
