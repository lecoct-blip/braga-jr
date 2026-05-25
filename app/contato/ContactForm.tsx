'use client';

import { useState, type FormEvent } from 'react';
import { LGPD } from '@/lib/site';

const SERVICES = ['Direito Público', 'Direito Empresarial', 'Direito do Servidor', 'Outro'] as const;

// README §9.2 — validações client-side.
const PHONE_RE = /^[+()\d][\d\s()+.-]{7,}$/; // BR ou internacional, tolerante
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [serv, setServ] = useState<(typeof SERVICES)[number]>('Direito Público');
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  function validate(data: Record<string, string>) {
    const e: Record<string, string> = {};
    if (!data.nome || data.nome.trim().length < 2) e.nome = 'Informe seu nome (mín. 2 caracteres).';
    const hasEmail = !!data.email?.trim();
    const hasPhone = !!data.telefone?.trim();
    if (!hasEmail && !hasPhone) {
      e.contato = 'Informe e-mail ou telefone para retorno.';
    } else {
      if (hasEmail && !EMAIL_RE.test(data.email.trim())) e.email = 'E-mail inválido.';
      if (hasPhone && !PHONE_RE.test(data.telefone.trim())) e.telefone = 'Telefone inválido.';
    }
    if (!data.texto || data.texto.trim().length < 30)
      e.texto = 'Descreva o caso com ao menos 30 caracteres.';
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setFormError(null);
    const fd = new FormData(ev.currentTarget);

    // Honeypot anti-spam (README §7.7). Bot preenche → aborta silenciosamente.
    if ((fd.get('empresa') as string)?.trim()) {
      setStatus('success');
      return;
    }

    const data = {
      nome: String(fd.get('nome') ?? ''),
      telefone: String(fd.get('telefone') ?? ''),
      email: String(fd.get('email') ?? ''),
      servico: serv,
      assunto: String(fd.get('assunto') ?? ''),
      texto: String(fd.get('texto') ?? ''),
    };

    const eMap = validate(data);
    setErrors(eMap);
    if (Object.keys(eMap).length > 0) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('bad status');
      setStatus('success');
    } catch {
      setStatus('error');
      setFormError('Não foi possível enviar agora. Tente novamente ou use o WhatsApp.');
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          background: 'var(--bg-elev)',
          border: '1px solid var(--border)',
          padding: 'clamp(28px, 4vw, 48px)',
        }}
        role="status"
      >
        <Eyebrowless>Recebido</Eyebrowless>
        <h3 style={{ marginTop: 16, fontSize: 28 }}>
          Recebido. <span className="s-it">Retornaremos em até 2h</span> em horário comercial.
        </h3>
        <p style={{ marginTop: 18, fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
          Seg–Sex, 9h às 18h. Para casos urgentes ou fora do horário comercial,
          fale pelo WhatsApp.
        </p>
        <a
          href="https://wa.me/552122929413"
          target="_blank"
          rel="noopener"
          className="btn btn--primary"
          style={{ marginTop: 28 }}
        >
          Abrir conversa no WhatsApp <span className="arrow">→</span>
        </a>
      </div>
    );
  }

  return (
    <div
      style={{
        background: 'var(--bg-elev)',
        border: '1px solid var(--border)',
        padding: 'clamp(28px, 4vw, 48px)',
      }}
    >
      <Eyebrowless>Formulário</Eyebrowless>
      <h3 style={{ marginTop: 16, fontSize: 28 }}>Cinco campos. Sem triagem comercial.</h3>

      <form onSubmit={onSubmit} noValidate style={{ marginTop: 40, display: 'grid', gap: 28 }}>
        {/* Honeypot — invisível para humanos, off-screen, sem tab */}
        <input
          type="text"
          name="empresa"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
        />

        <Field name="nome" label="Nome completo" placeholder="Como devemos chamá-lo" error={errors.nome} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="grid-2col">
          <Field
            name="telefone"
            label="Telefone / WhatsApp"
            placeholder="(21) 9 9999-9999"
            type="tel"
            error={errors.telefone ?? errors.contato}
          />
          <Field name="email" label="E-mail" placeholder="seu@email.com" type="email" error={errors.email} />
        </div>

        <div>
          <label className="field-label">Serviço</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }} role="group" aria-label="Serviço">
            {SERVICES.map((s) => (
              <button
                key={s}
                type="button"
                className="chip"
                aria-pressed={serv === s}
                onClick={() => setServ(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <Field name="assunto" label="Assunto" placeholder="Em uma frase, do que se trata." />

        <Field
          name="texto"
          label="Texto"
          placeholder="Em dois parágrafos: o que aconteceu e qual sua dúvida principal."
          textarea
          error={errors.texto}
        />

        <div
          style={{
            fontSize: 12,
            color: 'var(--ink-faint)',
            lineHeight: 1.6,
            paddingTop: 8,
            borderTop: '1px solid var(--border-soft)',
          }}
        >
          Seus dados são tratados apenas para responder a este contato e avaliar
          a prestação de serviços — base legal de diligências pré-contratuais e
          exercício regular de direitos (art. 7º, V e VI, da LGPD), sem
          compartilhamento com terceiros para marketing. Dúvidas ou exercício de
          direitos: Encarregado em{' '}
          <a
            href={`mailto:${LGPD.dpoEmail}`}
            style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)' }}
          >
            {LGPD.dpoEmail}
          </a>
          . Saiba mais na{' '}
          <a
            href="/politica-de-privacidade"
            style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)' }}
          >
            Política de Privacidade
          </a>
          .
        </div>

        {formError && (
          <p className="field-error" role="alert" style={{ marginTop: 0 }}>
            {formError}
          </p>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <span
            className="mono"
            style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.1em' }}
          >
            Sem cadastro · Sem newsletter · Sem retargeting
          </span>
          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : (
              <>
                Enviar para análise <span className="arrow">→</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

/** Eyebrow local (sem fio) — evita import cruzado client/server. */
function Eyebrowless({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow no-rule">{children}</span>;
}

function Field({
  name,
  label,
  placeholder,
  type = 'text',
  textarea = false,
  error,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const errId = error ? `${name}-error` : undefined;
  return (
    <div>
      <label className="field-label" htmlFor={name}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={4}
          className="field-input"
          aria-invalid={!!error}
          aria-describedby={errId}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="field-input"
          aria-invalid={!!error}
          aria-describedby={errId}
        />
      )}
      {error && (
        <p id={errId} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
