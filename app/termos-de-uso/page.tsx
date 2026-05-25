import type { Metadata } from 'next';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui';
import { JsonLd, breadcrumb, buildOg, SITE_URL, ORG_ID, NAP, LGPD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos de uso do site institucional Braga Jr. Advogados. Caráter informativo, conformidade com o Provimento 205/2021 da OAB e legislação aplicável.',
  alternates: { canonical: '/termos-de-uso' },
  openGraph: buildOg(`${SITE_URL}/termos-de-uso`),
};

const webPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Termos de Uso',
  description: 'Termos de uso do site institucional Braga Jr. Advogados.',
  url: `${SITE_URL}/termos-de-uso`,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': ORG_ID },
  about: { '@id': ORG_ID },
  dateModified: LGPD.termsUpdated,
};

function S({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2><span className="legal-num">{n}</span>{title}</h2>
      {children}
    </section>
  );
}

export default function TermosDeUsoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPage,
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Termos de Uso', path: '/termos-de-uso' },
          ]),
        ]}
      />

      <div className="pagehead">
        <div className="container">
          <Eyebrow>Termos · Site institucional</Eyebrow>
          <h1 style={{ marginTop: 24 }}>
            Termos de <span className="s-it">Uso.</span>
          </h1>
          <p>
            Condições de uso deste site institucional. Ao navegar, você concorda
            com os termos abaixo.
          </p>
          <p className="legal-meta" style={{ marginTop: 16 }}>
            Última atualização:{' '}
            <time dateTime={LGPD.termsUpdated}>18 de maio de 2026</time>
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container container--narrow">
          <div className="legal-prose">

            <S n="1." title="Aceitação">
              <p>
                Estes Termos regem o acesso e o uso do site de {NAP.name}{' '}
                (&ldquo;site&rdquo;). Ao acessá-lo, você declara ter lido e
                aceitado integralmente estas condições. Se não concordar, não
                utilize o site.
              </p>
            </S>

            <S n="2." title="Natureza do conteúdo — não constitui consultoria jurídica">
              <p>
                O site tem <strong>caráter exclusivamente informativo e
                institucional</strong>. As informações, artigos e descrições de
                áreas de atuação não constituem aconselhamento ou parecer
                jurídico, não devem ser utilizados como substitutos de
                orientação profissional individualizada e{' '}
                <strong>não estabelecem relação advogado-cliente</strong>. Tal
                relação só se constitui mediante contratação formal e específica
                do escritório.
              </p>
            </S>

            <S n="3." title="Conformidade com a publicidade da advocacia (OAB)">
              <p>
                Este site observa o Código de Ética e Disciplina e o Provimento
                nº 205/2021 da OAB. Possui finalidade meramente informativa,
                sem captação de clientela, mercantilização da profissão,
                promessa de resultados, comparação com outros profissionais ou
                divulgação de valores de honorários. Eventuais selos referem-se
                apenas a entidades oficiais. Em caso de dúvida sobre conteúdo
                jurídico, prevalece a orientação do responsável técnico,{' '}
                {NAP.partner} ({NAP.oab}).
              </p>
            </S>

            <S n="4." title="Propriedade intelectual">
              <p>
                Textos, identidade visual, marca, layout e demais elementos do
                site são protegidos por direitos de propriedade intelectual e
                pertencem a {NAP.name} ou a seus licenciantes. É vedada a
                reprodução, distribuição ou modificação sem autorização prévia e
                por escrito, ressalvada a citação de artigos com indicação da
                fonte e do autor.
              </p>
            </S>

            <S n="5." title="Uso permitido e condutas vedadas">
              <p>É vedado, a título exemplificativo:</p>
              <ul>
                <li>
                  utilizar o site para fins ilícitos ou que violem direitos de
                  terceiros;
                </li>
                <li>
                  tentar obter acesso não autorizado a sistemas, dados ou
                  contas;
                </li>
                <li>
                  introduzir código malicioso ou comprometer a disponibilidade e
                  a integridade do site;
                </li>
                <li>
                  realizar coleta automatizada de dados (scraping) sem
                  autorização.
                </li>
              </ul>
            </S>

            <S n="6." title="Links e conteúdos de terceiros">
              <p>
                O site pode conter links para páginas externas (por exemplo,
                WhatsApp). Não nos responsabilizamos pelo conteúdo, pelas
                práticas de privacidade ou pela disponibilidade de sites de
                terceiros.
              </p>
            </S>

            <S n="7." title="Limitação de responsabilidade">
              <p>
                Empregamos esforços razoáveis para manter as informações
                corretas e o site disponível, mas não garantimos
                disponibilidade ininterrupta nem ausência de erros. Na máxima
                extensão permitida pela legislação, não respondemos por danos
                decorrentes do uso ou da impossibilidade de uso do site, ou de
                decisões tomadas com base em seu conteúdo informativo.
              </p>
            </S>

            <S n="8." title="Privacidade e proteção de dados">
              <p>
                O tratamento de dados pessoais é regido pela nossa{' '}
                <Link href="/politica-de-privacidade">
                  Política de Privacidade
                </Link>
                , parte integrante destes Termos.
              </p>
            </S>

            <S n="9." title="Legislação aplicável e foro">
              <p>
                Estes Termos são regidos pela legislação brasileira. Fica eleito
                o foro da Comarca do Rio de Janeiro/RJ para dirimir quaisquer
                controvérsias, com renúncia a qualquer outro, por mais
                privilegiado que seja.
              </p>
            </S>

            <S n="10." title="Alterações">
              <p>
                Estes Termos podem ser revistos a qualquer tempo. A versão
                vigente é a publicada nesta página, com a data de última
                atualização indicada no topo.
              </p>
            </S>

            <S n="11." title="Contato">
              <p>
                Dúvidas sobre estes Termos podem ser encaminhadas para{' '}
                <a href={`mailto:${NAP.emailGeneral}`}>{NAP.emailGeneral}</a>.
              </p>
            </S>

          </div>
        </div>
      </div>
    </>
  );
}
