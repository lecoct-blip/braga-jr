'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Reveal on scroll — IntersectionObserver com threshold 0 (dispara em qualquer
 * pixel visível) + rootMargin '0px 0px -10% 0px' (atrasa fade ~10vh pra ficar
 * mais elegante). Stagger via [data-delay] no CSS (README §9.1).
 *
 * Threshold 0 (e não 0.12 como originalmente): elementos GRANDES — como
 * `.article-body` envolvendo um post inteiro de ~5000px — podem nunca atingir
 * 12% de intersecção no viewport mobile (~600px efetivo). Resultado: opacity:0
 * permanente, conteúdo invisível pra sempre. Com threshold 0, qualquer pixel
 * dispara — funciona para wrapper grande E elemento pequeno.
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
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    );
    els.forEach((e) => io.observe(e));

    // Safety net: se algum reveal continuar escondido após 1.5s, força visível.
    // Cobre edge cases onde o observer não dispara (layout shift atrasado,
    // scroll instantâneo, bug de iOS Safari, etc). Conteúdo legível > efeito.
    const safety = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
        .forEach((el) => el.classList.add('is-visible'));
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [pathname]);

  return null;
}
