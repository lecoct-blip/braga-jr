import { NextResponse } from 'next/server';

/**
 * Stub do endpoint de contato.
 *
 * README §7.7 (produção) pede: envio via Resend/SendGrid/SES, resposta
 * automática ao remetente, registro de consent LGPD + lawful basis, e log
 * em DB para triagem. Isso depende de credenciais/infra que NÃO existem
 * neste ambiente — então aqui validamos no servidor e devolvemos sucesso.
 *
 * TODO(produção): integrar provedor de e-mail + persistência + auto-reply.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const nome = String(body.nome ?? '').trim();
  const email = String(body.email ?? '').trim();
  const telefone = String(body.telefone ?? '').trim();
  const texto = String(body.texto ?? '').trim();
  const honeypot = String(body.empresa ?? '').trim();

  // Honeypot server-side (não confiar só no client). Bot preencheu → 422.
  if (honeypot) {
    return NextResponse.json({ ok: false, error: 'spam' }, { status: 422 });
  }

  // Revalidação server-side (nunca confiar só no client) — README §9.2.
  if (nome.length < 2 || texto.length < 30 || (!email && !telefone)) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 422 });
  }

  // Placeholder de "entrega": apenas loga. Trocar pelo provedor real.
  // README §7.7: registrar base legal do tratamento (LGPD art. 7).
  console.info('[contato] nova solicitação', {
    nome,
    servico: body.servico,
    assunto: body.assunto,
    hasEmail: !!email,
    hasPhone: !!telefone,
    lawfulBasis: 'LGPD art. 7º, V e VI — diligências pré-contratuais / exercício regular de direitos',
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
