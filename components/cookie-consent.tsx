'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * Banner de consentimento de cookies — LGPD.
 *
 * Princípios aplicados:
 *  · Hoje o site só usa cookies estritamente necessários → o banner é honesto
 *    quanto a isso e o opt-in adicional (medição de audiência) vem DESMARCADO.
 *  · Rejeitar é tão fácil quanto aceitar (botões de mesmo tamanho, ambos
 *    imediatos — nada escondido atrás de "preferências").
 *  · Não é cookie wall: o conteúdo do site permanece acessível por trás.
 *  · Escolha persistida; reabrível pelo rodapé (evento bj:open-cookie-consent).
 *  · Futuros scripts de analytics devem checar localStorage['bj-consent'].
 */

const STORAGE_KEY = 'bj-consent';
const CONSENT_VERSION = 1;

type Consent = {
  v: number;
  essential: true;
  analytics: boolean;
  ts: string;
};

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    return parsed?.v === CONSENT_VERSION ? parsed : null;
  } catch {
    return null;
  }
}

function writeConsent(analytics: boolean) {
  const consent: Consent = {
    v: CONSENT_VERSION,
    essential: true,
    analytics,
    ts: new Date().toISOString(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    /* armazenamento indisponível — segue sem persistir */
  }
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    // Só decide no cliente (evita mismatch de hidratação).
    if (!readConsent()) setOpen(true);

    const reopen = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setShowPrefs(false);
      setOpen(true);
    };
    window.addEventListener('bj:open-cookie-consent', reopen);
    return () => window.removeEventListener('bj:open-cookie-consent', reopen);
  }, []);

  if (!open) return null;

  const decide = (a: boolean) => {
    writeConsent(a);
    setOpen(false);
  };

  return (
    <section
      className="cookie-banner"
      role="region"
      aria-label="Aviso de cookies"
    >
      <div className="cookie-inner">
        <div>
          <p>
            <strong>Cookies.</strong> Este site usa apenas cookies estritamente
            necessários ao seu funcionamento — sem rastreamento, publicidade ou
            perfilamento. Você pode autorizar, opcionalmente, finalidades
            adicionais de medição de audiência. Detalhes na{' '}
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
          </p>

          {showPrefs && (
            <div className="cookie-prefs">
              <label className="cookie-toggle" data-locked="true">
                <input type="checkbox" checked readOnly disabled />
                <span>
                  Necessários — sempre ativos (essenciais ao funcionamento)
                </span>
              </label>
              <label className="cookie-toggle">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <span>Medição de audiência (opcional)</span>
              </label>
              <small>
                Nenhuma ferramenta de medição está ativa no momento; esta opção
                ficará registrada caso venha a ser adotada.
              </small>
            </div>
          )}
        </div>

        <div className="cookie-actions">
          {showPrefs ? (
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => decide(analytics)}
            >
              Salvar preferências
            </button>
          ) : (
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => setShowPrefs(true)}
            >
              Preferências
            </button>
          )}
          {/* Rejeitar e aceitar com a mesma proeminência (LGPD/ANPD). */}
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => decide(false)}
          >
            Somente essenciais
          </button>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => decide(true)}
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </section>
  );
}
