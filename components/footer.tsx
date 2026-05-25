import Link from 'next/link';
import { NAP } from '@/lib/site';
import { FAQ_STATUS } from '@/lib/faq-content';
import { CookiePreferencesButton } from '@/components/cookie-preferences-button';

/** Footer — porte fiel de Footer() em src/shell.jsx; links agora para as
 *  rotas reais de subdiretório (README §5). Server Component (estático). */
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo/braga-jr.svg"
                alt="Braga Jr. Advogados"
                className="site-logo site-logo--footer"
              />
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  opacity: 0.55,
                  marginTop: 6,
                  color: 'var(--ink-muted)',
                }}
              >
                EST. 1991 · {NAP.oab}
              </div>
            </div>
            <p style={{ marginTop: 16, maxWidth: '40ch', fontSize: 14, lineHeight: 1.6 }}>
              Trinta e cinco anos de excelência em Direito Público e Corporativo.
              Unimos tradição jurídica, defesa estratégica e tecnologia de ponta
              para proteger seus direitos e viabilizar o crescimento do seu
              negócio.
            </p>
          </div>

          <div>
            <h5>Navegação</h5>
            <ul>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/atuacao">Áreas de atuação</Link></li>
              <li><Link href="/sobre">Sobre o escritório</Link></li>
              <li><Link href="/publicacoes">Publicações do sócio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              {FAQ_STATUS === 'published' && (
                <li><Link href="/faq">Perguntas frequentes</Link></li>
              )}
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h5>Sedes</h5>
            <address style={{ fontStyle: 'normal', fontSize: 14, lineHeight: 1.6 }}>
              <span style={{ color: 'var(--ink-faint)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Brasil</span><br />
              {NAP.street}<br />
              {NAP.groups} · {NAP.district}<br />
              {NAP.city} / {NAP.region} · CEP {NAP.postalCode}
            </address>
            <address style={{ fontStyle: 'normal', fontSize: 14, lineHeight: 1.6, marginTop: 18 }}>
              <span style={{ color: 'var(--ink-faint)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Estados Unidos</span><br />
              7614 Mill Stream Dr<br />
              Naples · Florida 34109
            </address>
            <p style={{ fontSize: 13, lineHeight: 1.6, marginTop: 14, color: 'var(--ink-faint)' }}>
              Seg–Sex, 9h às 18h · Casos internacionais via Naples
            </p>
          </div>

          <div>
            <h5>Contato direto</h5>
            <p style={{ fontSize: 14, lineHeight: 1.7 }}>
              WhatsApp:{' '}
              <a href={NAP.whatsapp} target="_blank" rel="noopener" className="accent">
                {NAP.phonePrimary}
              </a>
              <br />
              Telefone:{' '}
              <a href={`tel:${NAP.phoneSecondary.replace(/[^+\d]/g, '')}`} className="accent">
                {NAP.phoneSecondary}
              </a>
              <br />
              E-mail:{' '}
              <a
                href={`mailto:${NAP.emailGeneral}`}
                className="accent"
                style={{ wordBreak: 'break-all' }}
              >
                {NAP.emailGeneral}
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            {NAP.partner} · <span className="accent">{NAP.oab}</span> · Responsável Técnico
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <span>© {new Date().getFullYear()} {NAP.name}</span>
            <Link href="/politica-de-privacidade" style={{ borderBottom: '1px solid var(--border)' }}>
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" style={{ borderBottom: '1px solid var(--border)' }}>
              Termos de Uso
            </Link>
            <CookiePreferencesButton />
            <span>· LGPD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
