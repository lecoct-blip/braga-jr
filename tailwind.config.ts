import type { Config } from 'tailwindcss';

/**
 * Os design tokens vivem em globals.css como custom properties (a fonte da
 * verdade do mockup). Aqui apenas os expomos ao Tailwind para que utilitários
 * (ex.: text-ink, bg-bg-elev, border-border) reflitam o tema ativo —
 * light por padrão, dark via prefers-color-scheme. README §6.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Marca (fixas em ambos os temas)
        bronze: { DEFAULT: '#A57314', deep: '#8A5E10' },
        champagne: { DEFAULT: '#DBB178', soft: '#EFD9B5' },
        obsidian: { DEFAULT: '#1A1A1A', elev: '#232323', deep: '#0E0E0E' },
        ice: '#F8F9FA',
        lead: { DEFAULT: '#454545', soft: '#6A6A6A' },
        // Semânticas (mudam por tema, via CSS vars)
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        'bg-deep': 'var(--bg-deep)',
        'bg-soft': 'var(--bg-soft)',
        ink: 'var(--ink)',
        'ink-strong': 'var(--ink-strong)',
        'ink-muted': 'var(--ink-muted)',
        'ink-faint': 'var(--ink-faint)',
        accent: 'var(--accent)',
        'accent-deep': 'var(--accent-deep)',
        border: 'var(--border)',
        'border-soft': 'var(--border-soft)',
        'border-strong': 'var(--border-strong)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
      maxWidth: {
        container: 'var(--container)',
        'container-narrow': 'var(--container-narrow)',
        'container-wide': 'var(--container-wide)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(.16, 1, .3, 1)',
        ease: 'cubic-bezier(.4, 0, .2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
