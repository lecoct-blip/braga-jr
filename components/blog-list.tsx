'use client';

/**
 * Listagem interativa do /blog: input de busca + chips de categoria.
 *
 * Comportamento (decidido com o cliente):
 *  · busca + categoria COMPÕEM (AND) — filtros independentes, ambos aplicados.
 *  · estado sincronizado com URL (?q=...&cat=...) para link compartilhável e
 *    funcionar com back/forward do navegador.
 *  · featured (post em destaque) aparece SÓ sem filtro ativo. Com qualquer
 *    filtro, listagem fica em grid uniforme — o destaque perde sentido quando
 *    o usuário já está procurando algo específico.
 *
 * Server-side (page.tsx) ainda emite o JSON-LD do Blog/BlogPosting completo,
 * porque crawlers não executam JS — então o catálogo indexável continua sendo
 * o conjunto completo, independente do estado de filtro do client.
 */

import { useMemo, useState, useEffect, useCallback, type ReactNode } from 'react';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui';
import { NewsletterForm } from '@/components/newsletter-form';
import type { Post, Category } from '@/lib/blog';
import { categorySlug } from '@/lib/blog';

/**
 * Figures pré-renderizadas no server (page.tsx) — duas variantes por slug
 * porque featured usa priority + sizes maior que o card no grid.
 * Mapa em vez de array p/ lookup O(1) por slug ao iterar lista filtrada.
 */
export type FigureBundle = { featured: ReactNode; card: ReactNode };
type Props = {
  posts: Post[];
  categories: Category[];
  figures: Record<string, FigureBundle>;
};

/** Normaliza string para busca: lowercase + sem diacríticos. */
function norm(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

export function BlogList({ posts, categories, figures }: Props) {
  // Estado inicial vazio → SSG renderiza listagem completa (bom p/ SEO e
  // first-paint). Hidratação lê URL no client; back/forward via popstate.
  const [query, setQuery] = useState('');
  const [catSlug, setCatSlug] = useState('');
  const [hydrated, setHydrated] = useState(false);

  // Lê URL params depois da montagem (não na primeira render — preserva SSG).
  useEffect(() => {
    const sync = () => {
      const sp = new URLSearchParams(window.location.search);
      setQuery(sp.get('q') ?? '');
      setCatSlug(sp.get('cat') ?? '');
    };
    sync();
    setHydrated(true);
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  // Reflete estado na URL via history.replaceState — não empilha histórico
  // a cada tecla, mas a URL fica copiável/colável. Só roda após hidratação
  // (evita sobrescrever URL no caso raro do useEffect rodar antes do popstate).
  useEffect(() => {
    if (!hydrated) return;
    const sp = new URLSearchParams();
    if (query) sp.set('q', query);
    if (catSlug) sp.set('cat', catSlug);
    const qs = sp.toString();
    const url = qs ? `/blog?${qs}` : '/blog';
    window.history.replaceState({}, '', url);
  }, [query, catSlug, hydrated]);

  const setCat = useCallback((slug: string) => {
    // Clicar na categoria já ativa = desfaz (toggle). UX comum em chips.
    setCatSlug((prev) => (prev === slug ? '' : slug));
  }, []);

  // Filtragem em useMemo: recomputa só quando inputs mudam. 7 posts hoje;
  // mesmo com 50+ a complexidade O(n) por keystroke é irrelevante client-side.
  const filtered = useMemo(() => {
    const q = norm(query.trim());
    return posts.filter((p) => {
      if (catSlug && categorySlug(p.kicker) !== catSlug) return false;
      if (!q) return true;
      return (
        norm(p.title).includes(q) ||
        norm(p.excerpt).includes(q) ||
        norm(p.kicker).includes(q)
      );
    });
  }, [posts, query, catSlug]);

  const hasFilter = Boolean(query || catSlug);
  const featured = !hasFilter ? posts.find((p) => p.featured) : undefined;
  const listed = featured ? filtered.filter((p) => !p.featured) : filtered;

  const clearAll = () => {
    setQuery('');
    setCatSlug('');
  };

  return (
    <>
      {/* SIDEBAR (busca + categorias) + FEATURED (quando sem filtro) */}
      <div className="section">
        <div className="container">
          <div
            className="grid-2col"
            style={{ display: 'grid', gridTemplateColumns: featured ? '1.6fr 1fr' : '1fr 1fr', gap: 64, alignItems: 'start' }}
          >
            {featured ? (
              <article className="reveal">
                <Link href={`/blog/${featured.slug}`} style={{ display: 'block' }}>
                  {figures[featured.slug]?.featured}
                  <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Eyebrow noRule>{featured.kicker} · em destaque</Eyebrow>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
                      {featured.dateLabel} · {featured.read}
                    </span>
                  </div>
                  <h2 style={{ marginTop: 18, fontSize: 'var(--t-display-md)', fontWeight: 400 }}>{featured.title}</h2>
                  <p style={{ marginTop: 16, fontSize: 17, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{featured.excerpt}</p>
                  <div style={{ marginTop: 24, fontSize: 13, color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.04em' }}>
                    Ler artigo completo &nbsp;<span className="arrow">→</span>
                  </div>
                </Link>
              </article>
            ) : (
              <div className="reveal" aria-live="polite">
                <Eyebrow>Resultados</Eyebrow>
                <h2 style={{ marginTop: 18, fontSize: 'var(--t-display-md)', fontWeight: 400 }}>
                  {filtered.length === 0
                    ? <>Nenhum artigo <span className="s-it">corresponde.</span></>
                    : <>{filtered.length} {filtered.length === 1 ? 'artigo' : 'artigos'} <span className="s-it">encontrados.</span></>}
                </h2>
                {hasFilter && (
                  <p style={{ marginTop: 16, fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
                    {query && <>Busca: <strong style={{ color: 'var(--ink)' }}>“{query}”</strong></>}
                    {query && catSlug && ' · '}
                    {catSlug && <>Categoria: <strong style={{ color: 'var(--ink)' }}>{categories.find((c) => c.slug === catSlug)?.name}</strong></>}
                    {'. '}
                    <button onClick={clearAll} className="link-reset" style={{ color: 'var(--accent)', cursor: 'pointer', background: 'none', border: 0, padding: 0, font: 'inherit' }}>
                      Limpar filtros →
                    </button>
                  </p>
                )}
              </div>
            )}

            <aside className="reveal" data-delay="2">
              <Eyebrow>Buscar</Eyebrow>
              <div style={{ marginTop: 16, position: 'relative' }}>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Título, tema ou palavra-chave…"
                  aria-label="Buscar nos artigos do blog"
                  className="blog-search-input"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label="Limpar busca"
                    className="blog-search-clear"
                  >
                    ×
                  </button>
                )}
              </div>

              <div style={{ marginTop: 32 }}>
                <Eyebrow>Categorias</Eyebrow>
                <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0' }}>
                  <li
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '14px 0', borderBottom: '1px solid var(--border-soft)',
                    }}
                  >
                    <button
                      onClick={() => setCatSlug('')}
                      className="blog-cat-btn"
                      aria-pressed={!catSlug}
                      style={{ color: !catSlug ? 'var(--accent)' : 'var(--ink)' }}
                    >
                      Todos
                    </button>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.1em' }}>
                      {String(posts.length).padStart(2, '0')}
                    </span>
                  </li>
                  {categories.map((c) => {
                    const active = c.slug === catSlug;
                    return (
                      <li
                        key={c.slug}
                        style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '14px 0', borderBottom: '1px solid var(--border-soft)',
                        }}
                      >
                        <button
                          onClick={() => setCat(c.slug)}
                          className="blog-cat-btn"
                          aria-pressed={active}
                          style={{ color: active ? 'var(--accent)' : 'var(--ink)' }}
                        >
                          {c.name}
                        </button>
                        <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.1em' }}>
                          {String(c.count).padStart(2, '0')}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <NewsletterForm />
            </aside>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* LISTAGEM (filtrada) */}
      <div className="section">
        <div className="container">
          <div className="section-head reveal">
            <Eyebrow>{hasFilter ? 'Resultados da busca' : 'Mais publicações'}</Eyebrow>
            <h2>
              {hasFilter
                ? <>Filtro <span className="s-it">aplicado.</span></>
                : <>Análise <span className="s-it">por tema.</span></>}
            </h2>
          </div>

          {listed.length === 0 ? (
            <p style={{ fontSize: 16, color: 'var(--ink-muted)', maxWidth: 520, lineHeight: 1.6 }}>
              Nenhum artigo corresponde a esses filtros. Tente termos mais amplos ou{' '}
              <button onClick={clearAll} className="link-reset" style={{ color: 'var(--accent)', cursor: 'pointer', background: 'none', border: 0, padding: 0, font: 'inherit' }}>
                limpe os filtros
              </button>{' '}
              para ver todos os artigos.
            </p>
          ) : (
            <div className="grid-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {listed.map((a, i) => (
                <article
                  key={a.slug}
                  className="reveal"
                  data-delay={(i % 3) + 1}
                  style={{ borderTop: '1px solid var(--border)', paddingTop: 24 }}
                >
                  <Link href={`/blog/${a.slug}`} style={{ display: 'block' }}>
                    {figures[a.slug]?.card}
                    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <Eyebrow noRule>{a.kicker}</Eyebrow>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
                        {a.dateLabel} · {a.read}
                      </span>
                    </div>
                    <h3 style={{ marginTop: 14, fontSize: 22, lineHeight: 1.2, fontWeight: 400 }}>{a.title}</h3>
                    <p style={{ marginTop: 12, fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{a.excerpt}</p>
                    <div style={{ marginTop: 18, fontSize: 12, color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.04em' }}>
                      Ler &nbsp;<span className="arrow">→</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
