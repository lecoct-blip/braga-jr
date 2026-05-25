import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { Footer } from '@/components/footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { CookieConsent } from '@/components/cookie-consent';
import { orgJsonLd, JsonLd, SITE_URL, IS_PRODUCTION, NAP } from '@/lib/site';

/**
 * next/font self-hospeda as fontes: elimina o preconnect + render-blocking do
 * Google Fonts do mockup e estabiliza o CLS (README §8.5). `display: swap`
 * mantido. As variáveis CSS batem com globals.css (--font-cormorant etc).
 */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});
const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

/**
 * Metadata padrão do site (README §8.1). Cada page.tsx sobrescreve title,
 * description, canonical e og:url. metadataBase resolve URLs relativas de OG.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Template curto (12 chars) p/ caber ≤60 com a palavra-chave geo na frente.
  title: {
    default: 'Braga Jr. Advogados — Direito Público no Rio de Janeiro',
    template: '%s · Braga Jr.',
  },
  description:
    'Advocacia no Rio de Janeiro com 35 anos em direito público, defesa do servidor, sindical, corporativo e compliance. Consulta com o sócio responsável.',
  authors: [{ name: NAP.name }],
  // Só o domínio de produção indexa. Preview (Vercel/staging) = noindex global
  // — evita cópia duplicada competindo com o domínio final e blinda conteúdo
  // jurídico ainda não revisado. Páginas em rascunho seguem noindex de qualquer modo.
  robots: IS_PRODUCTION
    ? { index: true, follow: true, 'max-image-preview': 'large' }
    : { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: NAP.name,
    url: `${SITE_URL}/`,
    // P0: criar este arquivo → public/og-image.jpg (1200×630).
    // metadataBase resolve para URL absoluta automaticamente.
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: NAP.name }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  // Geo tags pra SEO local (README §8.1) — não há campo nativo, vai em `other`.
  other: {
    'geo.region': 'BR-RJ',
    'geo.placename': NAP.city,
    'geo.position': `${NAP.geo.lat};${NAP.geo.lng}`,
    ICBM: `${NAP.geo.lat}, ${NAP.geo.lng}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        {/* LegalService global — presente em TODAS as páginas (README §8.2) */}
        <JsonLd data={orgJsonLd} />
        <ScrollReveal />
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
