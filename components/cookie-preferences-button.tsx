'use client';

/** Reabre o banner de consentimento (LGPD: revogável a qualquer momento). */
export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      className="link-button"
      onClick={() => window.dispatchEvent(new Event('bj:open-cookie-consent'))}
    >
      Gerenciar cookies
    </button>
  );
}
