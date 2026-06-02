<?php
/**
 * Backend do formulário de contato — Hostinger (PHP nativo).
 *
 * Substitui a antiga API route Next `/api/contato`, que não funciona em
 * static export. O ContactForm.tsx posta JSON para cá (mesmos campos).
 *
 * Espelha a validação server-side do stub original (README §9.2) e registra a
 * base legal LGPD (art. 7º, V e VI). Envia e-mail via mail() do servidor.
 *
 * Produção: confirme que o domínio tem SPF/DKIM no painel da Hostinger para o
 * envio não cair em spam; o From usa um endereço do próprio domínio.
 */

header('Content-Type: application/json; charset=utf-8');

// Só aceita POST.
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

// Destinatário e remetente (do próprio domínio, p/ não ser barrado por SPF).
$TO      = 'contato@bragajr.adv.br';
$FROM    = 'contato@bragajr.adv.br';
$SUBJECT = 'Novo contato pelo site — Braga Jr. Advogados';

// O ContactForm envia JSON (application/json). Fallback para form-encoded.
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$nome     = trim((string)($data['nome'] ?? ''));
$email    = trim((string)($data['email'] ?? ''));
$telefone = trim((string)($data['telefone'] ?? ''));
$servico  = trim((string)($data['servico'] ?? ''));
$assunto  = trim((string)($data['assunto'] ?? ''));
$texto    = trim((string)($data['texto'] ?? ''));
$honeypot = trim((string)($data['empresa'] ?? '')); // campo-armadilha anti-bot

// Honeypot server-side: humano nunca preenche. Bot preencheu → descarta.
if ($honeypot !== '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'spam']);
    exit;
}

// Revalidação server-side (nunca confiar só no client) — README §9.2.
$emailOk = $email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL);
if (
    mb_strlen($nome) < 2 ||
    mb_strlen($texto) < 30 ||
    ($email === '' && $telefone === '') ||
    ($email !== '' && !$emailOk)
) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'validation']);
    exit;
}

// Corpo do e-mail (texto puro).
$linhas = [
    'Nova solicitação de contato pelo site.',
    '',
    'Nome:     ' . $nome,
    'E-mail:   ' . ($email !== '' ? $email : '—'),
    'Telefone: ' . ($telefone !== '' ? $telefone : '—'),
    'Serviço:  ' . ($servico !== '' ? $servico : '—'),
    'Assunto:  ' . ($assunto !== '' ? $assunto : '—'),
    '',
    'Mensagem:',
    $texto,
    '',
    '---',
    'Base legal LGPD: art. 7º, V e VI (diligências pré-contratuais / exercício regular de direitos).',
    'Recebido em: ' . date('c'),
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? '—'),
];
$corpo = implode("\n", $linhas);

// Cabeçalhos. Reply-To no e-mail do visitante (se válido) facilita a resposta.
$headers = [
    'From: Site Braga Jr. <' . $FROM . '>',
    'Content-Type: text/plain; charset=utf-8',
    'X-Mailer: PHP/' . phpversion(),
];
if ($emailOk) {
    $headers[] = 'Reply-To: ' . $email;
}

$enviado = @mail($TO, '=?UTF-8?B?' . base64_encode($SUBJECT) . '?=', $corpo, implode("\r\n", $headers));

if (!$enviado) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'mail_failed']);
    exit;
}

echo json_encode(['ok' => true]);
