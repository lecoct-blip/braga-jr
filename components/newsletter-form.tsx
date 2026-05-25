'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter — diferente do form de contato, aqui a base legal CORRETA é
 * consentimento (LGPD art. 7º, I): comunicação de marketing exige opt-in
 * livre, informado e específico → checkbox obrigatório e desmarcado.
 * Sem backend ainda: stub que confirma visualmente (TODO: provedor real).
 */
export function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'done'>('idle');
  const [err, setErr] = useState<string | null>(null);

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const email = String(fd.get('email') ?? '').trim();
    const consent = fd.get('consent') === 'on';
    if (!EMAIL_RE.test(email)) {
      setErr('Informe um e-mail válido.');
      return;
    }
    if (!consent) {
      setErr('É necessário autorizar o envio para se inscrever.');
      return;
    }
    setErr(null);
    setStatus('done');
  }

  if (status === 'done') {
    return (
      <div style={{ marginTop: 40, padding: 24, border: '1px solid var(--border)', background: 'var(--bg-soft)' }}>
        <span className="eyebrow no-rule">Inscrição registrada</span>
        <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.55, color: 'var(--ink-muted)' }}>
          Você receberá uma nova análise quando publicarmos. Pode revogar o
          consentimento a qualquer momento pelo link em cada e-mail.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      style={{ marginTop: 40, padding: 24, border: '1px solid var(--border)', background: 'var(--bg-soft)' }}
    >
      <span className="eyebrow no-rule">Newsletter</span>
      <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.55, color: 'var(--ink-muted)' }}>
        Receba nova análise quando publicarmos. Sem retargeting, sem terceiros —
        só o e-mail do artigo.
      </p>
      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <input
          type="email"
          name="email"
          placeholder="seu@email.com"
          aria-label="Seu e-mail"
          className="field-input"
          style={{ flex: 1, padding: '8px 0', fontSize: 14 }}
        />
        <button
          type="submit"
          style={{
            background: 'var(--accent)', color: 'var(--obsidian)',
            border: 0, padding: '8px 14px', fontFamily: 'var(--font-body)',
            fontSize: 12, fontWeight: 500, cursor: 'pointer', letterSpacing: '0.04em',
          }}
        >
          Inscrever
        </button>
      </div>
      <label
        className="cookie-toggle"
        style={{ marginTop: 14, alignItems: 'flex-start', fontSize: 12, color: 'var(--ink-muted)' }}
      >
        <input type="checkbox" name="consent" style={{ marginTop: 2 }} />
        <span>
          Autorizo o envio de comunicações sobre novos artigos, conforme a{' '}
          <Link href="/politica-de-privacidade" style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)' }}>
            Política de Privacidade
          </Link>
          . Revogável a qualquer momento.
        </span>
      </label>
      {err && (
        <p className="field-error" role="alert" style={{ marginTop: 10 }}>
          {err}
        </p>
      )}
    </form>
  );
}
