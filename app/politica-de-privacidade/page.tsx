import type { Metadata } from 'next';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID, NAP, LGPD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade — LGPD',
  description:
    'Como o escritório trata dados pessoais conforme a LGPD (Lei 13.709/2018): finalidades, bases legais, direitos do titular e Encarregado.',
  alternates: { canonical: '/politica-de-privacidade' },
  openGraph: buildOg(`${SITE_URL}/politica-de-privacidade`),
};

const webPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Política de Privacidade',
  description:
    'Tratamento de dados pessoais conforme a Lei nº 13.709/2018 (LGPD).',
  url: `${SITE_URL}/politica-de-privacidade`,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': ORG_ID },
  about: { '@id': ORG_ID },
  dateModified: LGPD.privacyUpdated,
};

function S({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2><span className="legal-num">{n}</span>{title}</h2>
      {children}
    </section>
  );
}

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <JsonLd
        data={[
          webPage,
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Política de Privacidade', path: '/politica-de-privacidade' },
          ]),
        ]}
      />

      <div className="pagehead">
        <div className="container">
          <Eyebrow>Privacidade · LGPD</Eyebrow>
          <h1 style={{ marginTop: 24 }}>
            Política de <span className="s-it">Privacidade.</span>
          </h1>
          <p>
            Como tratamos seus dados pessoais em conformidade com a Lei nº
            13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD) — e
            com o sigilo profissional inerente à advocacia.
          </p>
          <p className="legal-meta" style={{ marginTop: 16 }}>
            Última atualização:{' '}
            <time dateTime={LGPD.privacyUpdated}>21 de maio de 2026</time>
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container container--narrow">
          <div className="legal-prose">

            <S n="1." title="Quem é o controlador">
              <p>
                <strong>{NAP.name}</strong>, sob responsabilidade técnica do{' '}
                {NAP.partner} ({NAP.oab}), com sede na {NAP.street},{' '}
                {NAP.groups}, {NAP.district}, {NAP.city}/{NAP.region}, CEP{' '}
                {NAP.postalCode}, é o controlador dos dados pessoais tratados a
                partir deste site, nos termos do art. 5º, VI, da LGPD.
              </p>
            </S>

            <S n="2." title="Encarregado pelo Tratamento de Dados (DPO)">
              <p>
                O canal para exercício de direitos e esclarecimentos sobre o
                tratamento de dados pessoais é o Encarregado, contatável pelo
                e-mail{' '}
                <a href={`mailto:${LGPD.dpoEmail}`}>{LGPD.dpoEmail}</a>.
              </p>
            </S>

            <S n="3." title="Quais dados coletamos">
              <h3>3.1 Dados que você nos fornece</h3>
              <p>
                Ao utilizar o formulário de contato, coletamos os dados que
                você informa: nome, telefone e/ou e-mail, serviço de interesse,
                assunto e o conteúdo da mensagem. Recomendamos não incluir, no
                formulário, dados pessoais sensíveis ou detalhes sigilosos do
                caso antes do estabelecimento formal da relação advogado-cliente.
              </p>
              <h3>3.2 Dados coletados automaticamente</h3>
              <p>
                Por necessidade técnica de funcionamento e segurança, nossos
                servidores podem registrar dados de acesso (endereço IP, data e
                hora, páginas acessadas, agente de usuário). Estes registros são
                tratados como logs essenciais.
              </p>
              <h3>3.3 Cookies</h3>
              <p>
                Atualmente o site utiliza <strong>apenas cookies estritamente
                necessários</strong> ao seu funcionamento. Não há cookies de
                publicidade, rastreamento entre sites ou perfilamento de
                visitantes. Caso, no futuro, sejam adotadas finalidades
                adicionais (por exemplo, medição de audiência), elas só serão
                ativadas mediante seu consentimento, gerenciável pelo banner de
                cookies e a qualquer momento pelo rodapé do site.
              </p>
            </S>

            <S n="4." title="Para que tratamos seus dados e com qual base legal">
              <p>
                Tratamos dados pessoais para as finalidades abaixo, com as
                respectivas bases legais do art. 7º da LGPD:
              </p>
              <ul>
                <li>
                  <strong>Responder ao seu contato e avaliar a viabilidade de
                  prestação de serviços</strong> — diligências preliminares
                  relacionadas a contrato do qual o titular é parte (art. 7º,
                  V). Não tratamos esse contato com base em consentimento, de
                  modo que não há checkbox obrigatório: o envio do formulário é
                  ato voluntário com finalidade definida.
                </li>
                <li>
                  <strong>Prestação de serviços advocatícios e exercício
                  regular de direitos</strong> — art. 7º, VI, observados o
                  sigilo profissional e os deveres do Estatuto da Advocacia
                  (Lei nº 8.906/1994).
                </li>
                <li>
                  <strong>Cumprimento de obrigações legais e regulatórias</strong>{' '}
                  — art. 7º, II (inclusive deveres perante a OAB e guarda de
                  documentos).
                </li>
                <li>
                  <strong>Segurança da informação e funcionamento do site</strong>{' '}
                  — legítimo interesse (art. 7º, IX), limitado ao estritamente
                  necessário.
                </li>
                <li>
                  <strong>Finalidades adicionais facultativas</strong> (ex.:
                  medição de audiência, se vier a existir) — consentimento
                  (art. 7º, I), livre, informado e revogável.
                </li>
              </ul>
            </S>

            <S n="5." title="Com quem compartilhamos">
              <p>
                Não vendemos nem comercializamos dados pessoais e não os
                utilizamos para publicidade de terceiros. O compartilhamento
                limita-se a:
              </p>
              <ul>
                <li>
                  <strong>Operadores</strong> que processam dados em nosso nome
                  e sob nossas instruções — provedores de hospedagem,
                  infraestrutura em nuvem e, quando aplicável, serviço de envio
                  de e-mail —, vinculados contratualmente a deveres de
                  confidencialidade e segurança;
                </li>
                <li>
                  <strong>Autoridades públicas e judiciais</strong>, quando
                  exigido por lei, ordem judicial ou para o exercício regular de
                  direitos, respeitado o sigilo profissional.
                </li>
              </ul>
            </S>

            <S n="6." title="Transferência internacional">
              <p>
                O escritório mantém representação em Naples, Flórida (EUA), para
                casos internacionais. Caso dados pessoais sejam acessados a
                partir do exterior, a transferência observará os requisitos dos
                arts. 33 a 36 da LGPD, mediante garantias adequadas de proteção.
              </p>
            </S>

            <S n="7." title="Por quanto tempo guardamos">
              <p>
                Os dados são mantidos pelo prazo necessário ao cumprimento das
                finalidades informadas e, posteriormente, pelos prazos legais,
                regulatórios e prescricionais aplicáveis — incluindo deveres de
                guarda documental da advocacia e prazos de eventual exercício de
                direitos. Encerrados os prazos, os dados são eliminados ou
                anonimizados, salvo hipóteses de conservação autorizadas pelo
                art. 16 da LGPD.
              </p>
            </S>

            <S n="8." title="Como protegemos seus dados">
              <p>
                Adotamos medidas técnicas e administrativas razoáveis para
                proteger os dados pessoais contra acessos não autorizados e
                situações acidentais ou ilícitas de destruição, perda,
                alteração, comunicação ou difusão, incluindo o sigilo
                profissional inerente à atividade advocatícia.
              </p>
            </S>

            <S n="9." title="Seus direitos como titular">
              <p>Nos termos do art. 18 da LGPD, você pode requerer:</p>
              <ul>
                <li>confirmação da existência de tratamento;</li>
                <li>acesso aos dados;</li>
                <li>correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>
                  anonimização, bloqueio ou eliminação de dados desnecessários,
                  excessivos ou tratados em desconformidade com a lei;
                </li>
                <li>portabilidade, observados os segredos legais;</li>
                <li>
                  eliminação dos dados tratados com consentimento, salvo
                  hipóteses de conservação previstas em lei;
                </li>
                <li>
                  informação sobre entidades com as quais houve uso
                  compartilhado;
                </li>
                <li>
                  informação sobre a possibilidade de não fornecer consentimento
                  e suas consequências;
                </li>
                <li>revogação do consentimento.</li>
              </ul>
              <p>
                Para exercer seus direitos, escreva ao Encarregado em{' '}
                <a href={`mailto:${LGPD.dpoEmail}`}>{LGPD.dpoEmail}</a>. Podemos
                solicitar informações para confirmar sua identidade antes de
                atender ao pedido.
              </p>
            </S>

            <S n="10." title="Decisões automatizadas e uso de IA">
              <p>
                Este site não realiza perfilamento de visitantes nem decisões
                automatizadas sobre você. O uso de análise preditiva e
                inteligência artificial mencionado no site refere-se a apoio
                técnico interno na condução de casos de clientes contratados,
                sempre sob supervisão humana do sócio responsável, e não ao
                tratamento de dados de quem apenas navega no site.
              </p>
            </S>

            <S n="11." title="Crianças e adolescentes">
              <p>
                O site destina-se a um público adulto e não é direcionado a
                crianças e adolescentes. Não coletamos intencionalmente dados de
                menores de idade.
              </p>
            </S>

            <S n="12." title="Alterações desta Política">
              <p>
                Esta Política pode ser atualizada para refletir mudanças legais,
                regulatórias ou operacionais. A versão vigente é sempre a
                publicada nesta página, com a data de última atualização
                indicada no topo.
              </p>
            </S>

            <S n="13." title="Reclamações e contato">
              <p>
                Você pode contatar o Encarregado em{' '}
                <a href={`mailto:${LGPD.dpoEmail}`}>{LGPD.dpoEmail}</a> ou, caso
                entenda necessário, apresentar reclamação à Autoridade Nacional
                de Proteção de Dados (ANPD) —{' '}
                <a href={LGPD.anpdUrl} target="_blank" rel="noopener">
                  gov.br/anpd
                </a>
                . Consulte também nossos{' '}
                <Link href="/termos-de-uso">Termos de Uso</Link>.
              </p>
            </S>

          </div>
        </div>
      </div>
    </>
  );
}
