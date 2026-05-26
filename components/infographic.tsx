import fs from 'node:fs';
import path from 'node:path';
import type { CSSProperties } from 'react';

/** Lê o viewBox de um SVG e devolve a proporção (ex.: "680 / 530"). SVG com
 *  width="100%" e sem height colapsa em <img height:auto> — fixar aspect-ratio
 *  a partir do viewBox resolve para qualquer infográfico vetorial. */
function svgAspectRatio(absPath: string): string | null {
  try {
    const svg = fs.readFileSync(absPath, 'utf8');
    const m = svg.match(/viewBox=["']\s*[\d.+-]+\s+[\d.+-]+\s+([\d.]+)\s+([\d.]+)/i);
    return m ? `${m[1]} / ${m[2]}` : null;
  } catch {
    return null;
  }
}

const EXT_FALLBACKS = ['.svg', '.webp', '.png', '.jpg'] as const;

/** Igual ao findActualFile do Figure, mas com .svg na frente (infográfico = vetor). */
function findActualFile(relative: string): string | null {
  const publicDir = path.join(process.cwd(), 'public');
  if (fs.existsSync(path.join(publicDir, relative))) return relative;
  const ext = path.extname(relative).toLowerCase();
  const stem = ext ? relative.slice(0, -ext.length) : relative;
  for (const alt of EXT_FALLBACKS) {
    if (alt === ext) continue;
    const candidate = stem + alt;
    if (fs.existsSync(path.join(publicDir, candidate))) return candidate;
  }
  return null;
}

/**
 * Infográfico (fluxograma, linha do tempo, gráfico). Diferente de <Figure>:
 *  · aceita SVG (vetor) — o formato ideal pra gráfico com texto;
 *  · mostra o gráfico INTEIRO, sem crop (next/image com fill+cover cortaria e
 *    não renderiza SVG sem dangerouslyAllowSVG) → usa <img> simples;
 *  · proporção vem do próprio arquivo (não fixa 16:10 etc.).
 * Degradação graciosa: enquanto o arquivo não existe, mostra o briefing + nome.
 */
export function Infographic({
  src,
  alt,
  label,
  caption,
}: {
  /** Caminho relativo a /public, ex.: "images/blog/post/fluxograma.svg" */
  src: string;
  alt: string;
  /** Briefing exibido enquanto o arquivo real não existe */
  label: string;
  /** Legenda opcional sob o gráfico */
  caption?: string;
}) {
  const cleaned = src.replace(/^\/+/, '');
  const actual = findActualFile(cleaned);

  if (actual) {
    // SVG sem height colapsa em <img>; fixa a proporção pelo viewBox.
    const ratio = actual.toLowerCase().endsWith('.svg')
      ? svgAspectRatio(path.join(process.cwd(), 'public', actual))
      : null;
    const imgStyle: CSSProperties | undefined = ratio ? { aspectRatio: ratio } : undefined;
    return (
      <figure className="infographic">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/${actual}`} alt={alt} loading="lazy" style={imgStyle} />
        {caption ? <figcaption>{caption}</figcaption> : null}
      </figure>
    );
  }

  return (
    <div className="ph infographic-ph" role="img" aria-label={alt}>
      <span aria-hidden="true">
        {label}
        <br />
        <span style={{ display: 'inline-block', marginTop: 10, color: 'var(--accent)' }}>
          {`salvar como: public/${cleaned}`}
        </span>
      </span>
    </div>
  );
}
