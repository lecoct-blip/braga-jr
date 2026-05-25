'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Reveal on scroll — porte fiel de useScrollReveal() em src/app.jsx:
 * IntersectionObserver, threshold 0.12, rootMargin '0px 0px -10% 0px',
 * stagger via [data-delay] no CSS (README §9.1). Sem JS pesado (§8.5 INP).
 *
 * Ilha de cliente isolada (renderiza null): o conteúdo das páginas continua
 * 100% Server Component, bom pra LCP/SEO. Re-roda a cada navegação (pathname).
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');
    if (els.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
