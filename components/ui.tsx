import type { CSSProperties, ReactNode } from 'react';

/**
 * Verify — anotação inline para o advogado revisor marcar uma afirmação
 * juridicamente carregada que precisa de conferência antes de publicar.
 * O prefixo "⚑ VERIFICAR:" vem do CSS (.verify::before). Removível na
 * finalização do texto (e o post é noindex enquanto rascunho).
 */
export function Verify({ children }: { children: ReactNode }) {
  return (
    <mark className="verify" role="note" aria-label="Item a verificar">
      {children}
    </mark>
  );
}

/** Eyebrow — micro-label com fio horizontal antes (README §6). */
export function Eyebrow({
  children,
  noRule = false,
  className = '',
}: {
  children: ReactNode;
  noRule?: boolean;
  className?: string;
}) {
  return (
    <span className={`eyebrow ${noRule ? 'no-rule' : ''} ${className}`.trim()}>
      {children}
    </span>
  );
}

/**
 * Placeholder de imagem. README §10: fotos reais ainda não existem; o `label`
 * é o briefing pro fotógrafo (mantido visível — honesto sobre o estado).
 * Quando as fotos chegarem, trocar por next/image (README §8.5: AVIF/WebP,
 * lazy, width/height pra CLS < 0.1) usando `alt` como texto alternativo
 * geo-relevante mencionando o Rio (§8.5).
 */
export function Placeholder({
  aspect = '4/5',
  label,
  alt,
  className = '',
  style = {},
}: {
  aspect?: '4/5' | '1/1' | '16/10';
  label: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const aspectClass =
    ({ '4/5': 'ph--portrait', '1/1': 'ph--square', '16/10': 'ph--wide' } as const)[
      aspect
    ] ?? '';
  return (
    <div
      className={`ph ${aspectClass} ${className}`.trim()}
      style={style}
      role="img"
      aria-label={alt ?? label}
    >
      <span aria-hidden="true">{label}</span>
    </div>
  );
}
