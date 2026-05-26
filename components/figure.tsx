import fs from 'node:fs';
import path from 'node:path';
import type { CSSProperties } from 'react';
import Image from 'next/image';

/**
 * Figure — substitui <Placeholder> com degradação graciosa.
 *
 * O `src` é o NOME CANÔNICO do arquivo (relativo a /public). Em tempo de
 * build (Server Component + SSG), checamos se o arquivo existe:
 *  · existe  → renderiza next/image (AVIF/WebP, lazy, CLS estável — §8.5);
 *  · não     → mostra o placeholder com o briefing E o caminho exato a salvar.
 *
 * Ou seja: o nome do arquivo é o contrato. Soltou em public/ com o nome
 * indicado → a foto entra no próximo build. Nada quebra enquanto não houver.
 */

const ASPECT_CLASS = {
  '4/5': 'ph--portrait',
  '1/1': 'ph--square',
  '16/10': 'ph--wide',
} as const;

const EXT_FALLBACKS = ['.webp', '.jpg', '.jpeg', '.png'] as const;

/**
 * Resolve o arquivo real para um `src`. Tenta o caminho exato; se não existir,
 * tenta o mesmo nome com extensões alternativas (.webp / .jpg / .png). Assim
 * pode-se referenciar `foto.jpg` no código e o arquivo em disco ser `foto.webp`
 * — sem mudar a referência. `next/image` aceita .webp como fonte.
 */
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

export function Figure({
  src,
  alt,
  label,
  aspect = '4/5',
  className = '',
  style = {},
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: {
  /** Caminho relativo a /public, ex.: "images/equipe/jorge-braga-jr.jpg" */
  src: string;
  alt: string;
  /** Briefing do fotógrafo, exibido enquanto a imagem real não existe */
  label: string;
  aspect?: '4/5' | '1/1' | '16/10';
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  sizes?: string;
}) {
  const cleaned = src.replace(/^\/+/, '');
  // Resolve a extensão real do arquivo: tenta o src dado e cai em .webp/.jpg/.png
  // automaticamente. Assim a slot pode pedir .jpg e o arquivo em disco ser .webp
  // (ou vice-versa) sem precisar mudar referências.
  const actual = findActualFile(cleaned);
  // O escritório entrega sempre em .webp — o briefing do placeholder sugere o
  // nome com .webp, mesmo que o src referencie .jpg (o findActualFile resolve).
  const suggested = cleaned.replace(/\.(jpe?g|png)$/i, '.webp');
  const aspectClass = ASPECT_CLASS[aspect];

  if (actual) {
    return (
      <div
        className={`fig ${aspectClass} ${className}`.trim()}
        style={{ position: 'relative', overflow: 'hidden', ...style }}
      >
        <Image
          src={`/${actual}`}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  // Fallback: placeholder + nome exato do arquivo a salvar.
  return (
    <div
      className={`ph ${aspectClass} ${className}`.trim()}
      style={style}
      role="img"
      aria-label={alt}
    >
      <span aria-hidden="true">
        {label}
        <br />
        <span style={{ display: 'inline-block', marginTop: 10, color: 'var(--accent)' }}>
          {`salvar como: public/${suggested}`}
        </span>
      </span>
    </div>
  );
}
