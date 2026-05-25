'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { NAP } from '@/lib/site';

const TABS = [
  { id: 'atuacao', label: 'Atuação', href: '/atuacao' },
  { id: 'sobre', label: 'Sobre', href: '/sobre' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'contato', label: 'Contato', href: '/contato' },
] as const;

/** Glifo do WhatsApp — reusado na barra (desktop) e no painel (mobile). */
function WhatsAppGlyph() {
  return (
    <svg className="wa-glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.66 4.06 1.78 5.66L2 22l4.6-1.2a9.9 9.9 0 0 0 5.44 1.62c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.84 14.05c-.25.7-1.43 1.32-1.99 1.4-.51.08-1.16.12-1.87-.12-.43-.13-.99-.32-1.69-.62-2.98-1.29-4.93-4.29-5.08-4.49-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.47.27-.3.59-.37.79-.37.2 0 .39.01.56.01.18 0 .42-.07.66.5.25.6.83 2.06.9 2.21.07.15.12.32.02.51-.1.2-.15.32-.3.5-.15.18-.32.4-.45.54-.15.15-.31.32-.13.62.17.3.78 1.28 1.66 2.07 1.14 1.01 2.1 1.32 2.4 1.47.3.15.47.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.13.07.75-.18 1.45z" />
    </svg>
  );
}

/**
 * Header de produção (.site-header). Em < 768px a navegação vira um hambúrguer
 * que abre um painel deslizante (links + WhatsApp). Acessível: Esc fecha,
 * trava o scroll do body, devolve o foco ao botão e fecha ao trocar de rota.
 * Aba ativa derivada do pathname (no mockup vinha de window.PAGE).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const activeTab =
    pathname.startsWith('/atuacao')
      ? 'atuacao'
      : pathname.startsWith('/sobre')
        ? 'sobre'
        : pathname.startsWith('/blog')
          ? 'blog'
          : pathname.startsWith('/contato')
            ? 'contato'
            : null;

  // Fecha o painel sempre que a rota muda (clicou num link).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Enquanto aberto: Esc fecha, trava o scroll do body e foca o 1º link.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header className="site-header" role="banner">
      <nav className="site-header-inner" aria-label="Navegação principal">
        <Link href="/" className="site-brand" aria-label="Braga Jr. Advogados — Início">
          {/* <picture> escolhe vertical em mobile, horizontal em desktop — zero JS,
              só um arquivo é baixado por viewport. */}
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/logo/braga-jr-vertical.svg" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo/braga-jr.svg" alt="Braga Jr. Advogados" className="site-logo" />
          </picture>
        </Link>

        <ul className="site-tabs">
          {TABS.map((t) => (
            <li key={t.id}>
              <Link
                href={t.href}
                className={activeTab === t.id ? 'is-active' : ''}
                aria-current={activeTab === t.id ? 'page' : undefined}
              >
                {t.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={NAP.whatsapp}
          target="_blank"
          rel="noopener"
          className="site-cta"
          aria-label="Falar no WhatsApp"
        >
          <WhatsAppGlyph />
          WhatsApp
        </a>

        {/* Hambúrguer — visível só < 768px via CSS. Vira X quando aberto. */}
        <button
          ref={burgerRef}
          type="button"
          className="site-burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="site-mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="site-burger-box" aria-hidden="true">
            <span className="site-burger-bar" />
            <span className="site-burger-bar" />
            <span className="site-burger-bar" />
          </span>
        </button>
      </nav>

      {/* Fundo escurecido — clique fecha. */}
      <div
        className={`site-mobile-backdrop ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Painel deslizante (abaixo da barra). Sempre no DOM; visibilidade via CSS. */}
      <div className={`site-mobile-panel ${open ? 'is-open' : ''}`} id="site-mobile-menu">
        <nav aria-label="Menu" className="site-mobile-nav">
          <ul>
            {TABS.map((t, i) => (
              <li key={t.id}>
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={t.href}
                  className={activeTab === t.id ? 'is-active' : ''}
                  aria-current={activeTab === t.id ? 'page' : undefined}
                  tabIndex={open ? 0 : -1}
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={NAP.whatsapp}
            target="_blank"
            rel="noopener"
            className="site-mobile-wa"
            tabIndex={open ? 0 : -1}
          >
            <WhatsAppGlyph />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
