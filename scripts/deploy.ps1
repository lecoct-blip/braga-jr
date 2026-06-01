# ═══════════════════════════════════════════════════════════════════════
#  Braga Jr. — Deploy local pra Hostinger via SSH (sem GitHub Actions).
# ═══════════════════════════════════════════════════════════════════════
#
#  Fluxo:
#    1. Lê credenciais de ~/.braga-jr/hostinger-ssh.env (fora do repo)
#    2. npm run build → out/
#    3. Copia .htaccess e contato.php pro out/ (next NÃO copia dotfiles)
#    4. Tar local: out/ → out.tar.gz (compressão)
#    5. scp envia tarball pro Hostinger
#    6. ssh remoto: limpa public_html, untar, remove tarball
#    7. Limpeza local
#
#  Uso: na raiz do repo, rode `npm run deploy` (ou direto `pwsh scripts/deploy.ps1`).
#
#  Por que tar+scp+ssh em vez de rsync: rsync não vem instalado no
#  Windows shell padrão; tar/scp/ssh sim. Tradeoff: envia ~2MB cada deploy
#  (full transfer), aceitável pra frequência baixa do site institucional.
#
#  Downtime durante deploy: ~3 segundos entre wipe do public_html e untar.
# ═══════════════════════════════════════════════════════════════════════

$ErrorActionPreference = 'Stop'  # qualquer erro para o script
$startTime = Get-Date

# ─── 1. Lê .env ─────────────────────────────────────────────────────────
$envFile = "$env:USERPROFILE\.braga-jr\hostinger-ssh.env"
if (-not (Test-Path $envFile)) {
    Write-Host "ERRO: arquivo de credenciais nao encontrado em $envFile" -ForegroundColor Red
    Write-Host "Veja CLAUDE.md secao 'Build & deploy' pra configurar." -ForegroundColor Yellow
    exit 1
}

$cfg = @{}
Get-Content $envFile | ForEach-Object {
    if ($_ -match '^\s*([A-Z_]+)\s*=\s*(.+)$') {
        $cfg[$matches[1]] = $matches[2].Trim()
    }
}

$required = 'SSH_HOST', 'SSH_USER', 'SSH_PORT', 'DEPLOY_PATH', 'SSH_KEY_PATH'
foreach ($key in $required) {
    if (-not $cfg[$key] -or $cfg[$key] -match '__.*PLACEHOLDER__') {
        Write-Host "ERRO: $key nao definido (ou ainda placeholder) em $envFile" -ForegroundColor Red
        exit 1
    }
}

$SSH_HOST    = $cfg.SSH_HOST
$SSH_USER    = $cfg.SSH_USER
$SSH_PORT    = $cfg.SSH_PORT
$DEPLOY_PATH = $cfg.DEPLOY_PATH
$SSH_KEY     = $cfg.SSH_KEY_PATH

if (-not (Test-Path $SSH_KEY)) {
    Write-Host "ERRO: chave SSH nao encontrada em $SSH_KEY" -ForegroundColor Red
    exit 1
}

Write-Host "==> Deploy para $SSH_USER@$SSH_HOST`:$SSH_PORT" -ForegroundColor Cyan
Write-Host "    Destino: $DEPLOY_PATH"
Write-Host ""

# ─── 2. Build ───────────────────────────────────────────────────────────
Write-Host "==> [1/6] npm run build" -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build falhou" }

# ─── 3. Garante dotfiles ────────────────────────────────────────────────
Write-Host "==> [2/6] Copiando .htaccess e contato.php pro out/" -ForegroundColor Cyan
Copy-Item public/.htaccess out/.htaccess -Force
Copy-Item public/contato.php out/contato.php -Force
$fileCount = (Get-ChildItem out -Recurse -File).Count
Write-Host "    out/ pronto ($fileCount arquivos)"

# ─── 4. Tar local ───────────────────────────────────────────────────────
Write-Host "==> [3/6] Compactando out/ em out.tar.gz" -ForegroundColor Cyan
$tarball = "out.tar.gz"
if (Test-Path $tarball) { Remove-Item $tarball }
tar -C out -czf $tarball .
if ($LASTEXITCODE -ne 0) { throw "tar falhou" }
$tarSize = [math]::Round((Get-Item $tarball).Length / 1KB, 0)
Write-Host "    $tarball pronto ($tarSize KB)"

# ─── 5. Upload via scp ──────────────────────────────────────────────────
Write-Host "==> [4/6] Upload do tarball via scp" -ForegroundColor Cyan
scp -i $SSH_KEY -P $SSH_PORT -q $tarball "$SSH_USER@${SSH_HOST}:$DEPLOY_PATH/_deploy.tar.gz"
if ($LASTEXITCODE -ne 0) { throw "scp falhou" }
Write-Host "    upload OK"

# ─── 6. Remote: wipe + untar + cleanup ──────────────────────────────────
Write-Host "==> [5/6] Wipe + untar no Hostinger (~3s downtime)" -ForegroundColor Cyan
$remoteCmd = "cd '$DEPLOY_PATH' && find . -mindepth 1 -not -name '_deploy.tar.gz' -delete && tar xzf _deploy.tar.gz && rm _deploy.tar.gz && echo 'ok: untar concluido'"
ssh -i $SSH_KEY -p $SSH_PORT "$SSH_USER@$SSH_HOST" $remoteCmd
if ($LASTEXITCODE -ne 0) { throw "Comando remoto falhou" }

# ─── 7. Cleanup local ───────────────────────────────────────────────────
Write-Host "==> [6/6] Limpeza local" -ForegroundColor Cyan
Remove-Item $tarball

# ─── Done ───────────────────────────────────────────────────────────────
$elapsed = [math]::Round(((Get-Date) - $startTime).TotalSeconds, 1)
Write-Host ""
Write-Host "OK Deploy concluido em ${elapsed}s" -ForegroundColor Green
Write-Host "   https://bragajr.adv.br/" -ForegroundColor Green
