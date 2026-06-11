import type { ReactNode } from 'react';
import Link from 'next/link';
import { Figure } from '@/components/figure';
import { Infographic } from '@/components/infographic';
import { JsonLd } from '@/lib/site';

/**
 * FAQ do post Due diligence — embutido em FAQPage JSON-LD para captura de
 * rich result no Google. Conteúdo deve casar 1:1 com os <h3>/<p> do corpo.
 */
const FAQ_DANO_MORAL = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Existe um valor "tabelado" para dano moral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não há tarifação geral. O STJ rejeita o tabelamento e adota o método bifásico, que parte de precedentes (valor-base) e ajusta às circunstâncias do caso. Há parâmetros de referência, não tabelas fixas obrigatórias.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso provar que sofri para receber?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nem sempre. Em casos de dano in re ipsa (presumido), basta demonstrar o fato gerador. Nos demais, prova-se a violação ao direito — não necessariamente a emoção, conforme o Enunciado 445 da V Jornada de Direito Civil.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo tenho para entrar com a ação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pretensão de reparação civil prescreve, em regra, em três anos (art. 206, §3º, V, do Código Civil), contados da ciência da lesão. Prazos específicos podem variar conforme a relação jurídica (consumo, Administração Pública), o que recomenda análise do caso concreto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pedir um valor alto ajuda a receber mais?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não diretamente. O valor segue a extensão do dano (art. 944) e o método bifásico, não o tamanho do pedido. Um valor exorbitante pode ser reduzido em recurso; um valor bem fundamentado, com precedentes e prova, é mais difícil de derrubar.',
      },
    },
  ],
};

const FAQ_INVENTARIO = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Inventário com testamento pode ser feito em cartório?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode, desde que todos os herdeiros sejam maiores, capazes e concordes, assistidos por advogado, e o testamento já tenha sido aberto e registrado em juízo ou haja autorização expressa do juízo competente. Cumpridas essas condições, a partilha é lavrada por escritura pública (STJ, REsp 1.808.767/RJ; Resolução CNJ 571/2024).',
      },
    },
    {
      '@type': 'Question',
      name: 'E se houver herdeiro menor de idade ou incapaz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde a Resolução CNJ 571/2024, é possível fazer em cartório, cumpridos dois requisitos cumulativos: manifestação favorável do Ministério Público e partilha em quinhões iguais, sem prejuízo ao incapaz. Se houver conflito de interesses ou partilha desigual, volta a ser judicial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual via é mais rápida e mais barata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em regra, a extrajudicial, porque dispensa o processo. Mas ela só é possível quando há consenso entre os herdeiros capazes e nenhum conflito de interesses. Onde existe litígio, a via judicial não é uma opção mais lenta — é a única cabível.',
      },
    },
    {
      '@type': 'Question',
      name: 'O imposto (ITCMD) muda se eu fizer em cartório?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. O ITCMD é estadual e incide igual nas duas vias. O que muda é a forma do procedimento, não o valor do imposto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comecei o inventário na Justiça. Posso transferir para o cartório?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, se as condições passarem a estar presentes — capacidade, consenso e os requisitos próprios de testamento ou de herdeiro incapaz. A via não é definitiva: ela acompanha a existência ou não de litígio.',
      },
    },
  ],
};

const FAQ_REVISAO_CONTRATUAL = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Posso pedir revisão só porque o contrato ficou desvantajoso para mim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Mau negócio, arrependimento e desvantagem decorrente da álea normal do contrato não autorizam revisão. É preciso um fato superveniente qualificado que rompa o equilíbrio — e, no regime civil, que esse fato seja extraordinário e imprevisível.',
      },
    },
    {
      '@type': 'Question',
      name: 'Inflação alta dá direito a rever o contrato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em regra, não. Inflação e variação de mercado dentro do esperado integram o risco assumido por quem contrata a longo prazo. A revisão pressupõe um acontecimento fora da normalidade contratual, com nexo claro entre o evento e o desequilíbrio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre revisar e rescindir o contrato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Revisar preserva o contrato e corrige a cláusula que se tornou desproporcional. Rescindir (ou resolver) extingue o vínculo. A própria lei, em vários pontos, prefere a revisão à extinção quando isso restaura o equilíbrio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso ir à Justiça para revisar um contrato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não necessariamente. A via mais rápida costuma ser a repactuação consensual, formalizada em aditivo contratual. A ação revisional entra quando não há acordo e o desequilíbrio é demonstrável.',
      },
    },
    {
      '@type': 'Question',
      name: 'Em quanto tempo posso pedir revisão de aluguel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na locação regida pela Lei 8.245/91, a ação revisional de aluguel pode ser proposta após três anos de vigência do contrato ou do último acordo de valor, para ajustar o aluguel ao preço de mercado.',
      },
    },
  ],
};

const FAQ_ACORDO_SOCIOS = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Acordo de sócios e contrato social são a mesma coisa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. O contrato social cria a sociedade e é registrado na Junta Comercial. O acordo de sócios é um contrato paralelo, geralmente reservado, que regula a relação entre os sócios — voto, saída, venda e resolução de conflitos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Sociedade limitada pode ter acordo de sócios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Embora a previsão expressa esteja na Lei das S.A. (art. 118), o acordo é plenamente válido na limitada, com base no Código Civil e na aplicação supletiva da Lei das S.A. quando o contrato social a prevê.',
      },
    },
    {
      '@type': 'Question',
      name: 'O acordo de sócios pode obrigar alguém a vender sua participação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode, em situações pactuadas — como a cláusula de drag along, que obriga o minoritário a acompanhar a venda do controle, ou o buy-sell, que força uma definição em caso de impasse. São obrigações livremente assumidas pelos sócios.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é apuração de haveres e por que gera tantos processos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É o cálculo do valor da participação de quem sai da sociedade. O Código Civil traz a regra geral (art. 1.031), mas o método de avaliação costuma não ser definido em contrato — e essa indefinição é uma das maiores fontes de litígio societário. Fixar o critério no acordo previne a disputa.',
      },
    },
    {
      '@type': 'Question',
      name: 'É possível incluir arbitragem no acordo de sócios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A cláusula compromissória submete os conflitos à arbitragem (Lei 9.307/96), em geral mais rápida, sigilosa e técnica do que o Judiciário. É comum combiná-la com mediação prévia, numa cláusula escalonada.',
      },
    },
  ],
};

const FAQ_DUE_DILIGENCE = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'A cláusula que diz que o vendedor responde pelos passivos anteriores me protege do Fisco e da Justiça do Trabalho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entre as partes, sim — ela define quem arca com a conta no fim. Mas não é oponível ao Fisco nem ao empregado: a Receita e a Justiça do Trabalho cobram do sucessor, e o comprador depois precisa buscar o ressarcimento do vendedor, o que pressupõe que ele tenha patrimônio para responder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comprar só os ativos, e não as quotas, elimina o risco de sucessão?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reduz, mas não zera. A aquisição de estabelecimento atrai a responsabilidade tributária do art. 133 do CTN e pode atrair sucessão trabalhista. A estrutura certa depende do diagnóstico de cada passivo — não existe formato universalmente seguro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Due diligence é só para grandes operações?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. O risco proporcional costuma ser maior em PMEs, onde a informalidade e a ausência de provisionamento são mais comuns. O escopo da auditoria se ajusta ao porte; a necessidade dela, não.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo antes da assinatura a due diligence deve começar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Idealmente, antes de fechar o preço — porque o que a auditoria revela é justamente o que se usa para negociar valor, garantias e condições. Iniciá-la depois do acordo de preço esvazia boa parte do seu propósito.',
      },
    },
  ],
};

/**
 * Corpos dos posts de blog. Os primeiros foram escritos como SCAFFOLD no tom
 * da marca; cada texto passa pela revisão do responsável técnico (Dr. Jorge —
 * OAB/RJ 72.994) ANTES de virar 'published' (em lib/blog.ts). Após revisão,
 * marcadores [VERIFICAR] são removidos e o status é flipado.
 *
 * Reintroduzir `import { Verify } from '@/components/ui'` aqui quando houver
 * novo draft com marcadores de revisão pendente.
 *
 * Cross-links via <Link> (do next/link) fecham o cluster topical: o post
 * referencia a pillar da área, e a pillar referencia o post — padrão
 * apontado pela auditoria de concorrentes 2026-05-21.
 */
export const POST_BODIES: Record<string, () => ReactNode> = {
  // ───────────── Publicado em 2026-06-01 ─────────────
  'revisao-pasep-servidor-publico': () => (
    <>
      <p>
        Se você é servidor público e ingressou no serviço antes da Constituição
        de 1988, é provável que tenha uma conta individual vinculada ao PASEP. E
        é possível que nunca tenha olhado para ela com atenção — afinal, durante
        décadas esse saldo ficou silencioso, sob administração de um banco, sem
        extrato no fim do mês. A dúvida que tem levado muitos servidores e
        aposentados a procurar orientação é direta: o valor que recebi (ou que
        ainda está lá) corresponde ao que deveria?
      </p>
      <p>
        Essa pergunta deixou de ser apenas teórica em 2023, quando o Superior
        Tribunal de Justiça fixou, em recurso repetitivo, três definições
        importantes sobre quem responde por eventuais falhas nessas contas e em
        quanto tempo o servidor pode discuti-las. Este artigo explica o que
        mudou, quem ainda está dentro do prazo e o que se examina antes de
        cogitar qualquer medida — sem promessas, porque cada conta tem uma
        história própria.
      </p>

      <p style={{ marginTop: 24, padding: '18px 22px', borderLeft: '3px solid var(--accent)', background: 'var(--bg-deep)', fontSize: 15, lineHeight: 1.65 }}>
        <strong>Importante:</strong> este texto trata do PASEP do servidor
        público civil — o Programa de Formação do Patrimônio do Servidor
        Público. Não se confunde com o PIS do trabalhador da iniciativa privada
        nem com benefícios previdenciários.
      </p>

      <nav className="article-toc" aria-label="Sumário">
        <div className="article-toc-title">Sumário</div>
        <ol>
          <li><a href="#o-que-e">O que é o PASEP e por que existem contas individuais</a></li>
          <li><a href="#falhas">Onde estão as falhas que motivam as ações</a></li>
          <li><a href="#tema-1150">O Tema 1.150 do STJ: as três definições</a></li>
          <li><a href="#prazo">Quem ainda está no prazo (e por que o marco mudou tudo)</a></li>
          <li><a href="#tabela">União ou Banco do Brasil? A diferença que define o prazo</a></li>
          <li><a href="#analise">O que se analisa antes de qualquer medida</a></li>
          <li><a href="#conclusao">Considerações finais</a></li>
          <li><a href="#faq">Perguntas frequentes</a></li>
        </ol>
      </nav>

      <h2 id="o-que-e">O que é o PASEP <span className="s-it">e por que existem contas individuais</span></h2>
      <p>
        O PASEP foi instituído pela Lei Complementar nº 8, de 1970 com a
        finalidade de formar um patrimônio individual para o servidor público.
        A ideia era simples: a União fazia depósitos vinculados ao servidor, e
        esses valores deveriam ser corrigidos e remunerados ao longo do tempo,
        formando uma poupança individualizada.
      </p>
      <p>
        Com a Constituição de 1988 (art. 239), a arrecadação do PIS/PASEP foi
        redirecionada para o financiamento do seguro-desemprego e do abono
        salarial. Na prática, os depósitos em novas contas individuais
        cessaram. As contas de quem já havia contribuído, porém, permaneceram
        — e continuaram (ou deveriam continuar) rendendo.
      </p>
      <p>
        É por isso que o tema interessa sobretudo a quem ingressou no serviço
        público até 1988: são esses servidores e aposentados que possuem saldo
        individual vinculado, administrado pelo Banco do Brasil.
      </p>

      <Infographic
        src="images/blog/revisao-pasep-servidor-publico/timeline-pasep.svg"
        alt="Linha do tempo institucional do PIS/PASEP com três marcos: 1970 (LC nº 8 — instituição), 1988 (CF/88 art. 239 — redirecionamento da arrecadação) e 2023 (Tema 1.150 do STJ)."
        label="TIMELINE · PIS/PASEP · 1970 → 1988 → 2023 · 16:10"
        caption="Três marcos que explicam por que a discussão alcança hoje apenas quem ingressou no serviço público antes de 1988."
      />

      <h2 id="falhas">Onde estão as falhas <span className="s-it">que motivam as ações</span></h2>
      <p>
        A administração correta desses valores — manter as contas
        individualizadas, aplicar os índices devidos, registrar a movimentação
        — é responsabilidade da instituição financeira administradora. Ao
        longo das décadas, alegam-se falhas recorrentes, entre elas:
      </p>
      <ul>
        <li>ausência de créditos que deveriam ter sido lançados;</li>
        <li>aplicação inadequada de índices de correção e rendimento;</li>
        <li>saques registrados sem comprovação adequada;</li>
        <li>inconsistências entre o saldo histórico e os registros disponíveis.</li>
      </ul>
      <p>
        O documento central para verificar essas hipóteses é a{' '}
        <strong>microfilmagem da conta</strong> — o registro histórico
        completo da movimentação, sem o qual não é possível afirmar se houve,
        ou não, diferença a recompor. Por isso, desconfiar de uma diferença e
        demonstrá-la são coisas distintas: a segunda depende de prova
        documental.
      </p>

      <Figure
        src="images/blog/revisao-pasep-servidor-publico/microfilmagem.webp"
        aspect="16/10"
        label="FOTO editorial · microfilmagem da conta PASEP · registro histórico · 16:10"
        alt="Microfilmagem de conta vinculada ao PASEP — o registro histórico completo da movimentação, base documental para qualquer pretensão de revisão. Braga Jr. Advogados, Rio de Janeiro."
        sizes="(max-width: 880px) 100vw, 880px"
      />

      <h2 id="tema-1150">O Tema 1.150 do STJ: <span className="s-it">as três definições</span></h2>
      <p>
        Durante muito tempo, discutiu-se quem deveria ser acionado e em que
        prazo. O Superior Tribunal de Justiça encerrou boa parte dessa
        controvérsia ao julgar o Tema Repetitivo nº 1.150, nos Recursos
        Especiais nº 1.895.936/TO, 1.895.941/TO e 1.951.931/DF, sob relatoria
        do Ministro Herman Benjamin, julgados pela Primeira Seção em 13 de
        setembro de 2023.
      </p>
      <p>A tese firmada estabeleceu três pontos:</p>
      <blockquote>
        (i) O Banco do Brasil tem legitimidade passiva para responder à
        demanda em que se discute falha na prestação do serviço quanto à conta
        vinculada ao PASEP, saques indevidos e desfalques, além da ausência de
        aplicação dos rendimentos;
        <br /><br />
        (ii) A pretensão de ressarcimento dos danos decorrentes desses
        desfalques submete-se ao prazo prescricional decenal do art. 205 do
        Código Civil;
        <br /><br />
        (iii) O termo inicial do prazo é o dia em que o titular comprovadamente
        toma ciência dos desfalques realizados na conta.
        <cite>
          STJ, Tema 1.150, REsp 1.895.936/TO, Rel. Min. Herman Benjamin,
          Primeira Seção, julgado em 13/09/2023.
        </cite>
      </blockquote>

      <Infographic
        src="images/blog/revisao-pasep-servidor-publico/tema-1150-tres-pontos.svg"
        alt="Os três pontos do Tema 1.150 do STJ: I — Legitimidade do Banco do Brasil; II — Prazo decenal do art. 205 do Código Civil; III — Termo inicial na ciência comprovada do desfalque."
        label="INFOGRÁFICO · Tema 1.150 STJ · 3 pontos da tese · 16:10"
        caption="Os três pontos da tese repetitiva — legitimidade, prazo e termo inicial."
      />

      <p>
        O efeito prático é relevante: ao reconhecer a legitimidade do banco
        administrador e adotar o prazo de dez anos contados da ciência do
        problema — e não da data do último depósito, lá nos anos 1980 —, o STJ
        afastou o principal argumento que inviabilizava essas ações.
      </p>

      <h2 id="prazo">Quem ainda está no prazo <span className="s-it">(e por que o marco mudou tudo)</span></h2>
      <p>
        A definição do termo inicial é o ponto mais sensível. A tese adota a
        chamada <em>teoria da actio nata</em>: o prazo só começa quando o
        titular toma ciência inequívoca do prejuízo. A questão que os
        tribunais ainda debatem é quando, exatamente, essa ciência se
        configura.
      </p>
      <p>
        Parte da jurisprudência tem reconhecido o saque do saldo por ocasião
        da aposentadoria como o momento em que o servidor passa a ter
        condições reais de identificar diferenças. Outros julgados consideram
        a obtenção do extrato completo como marco. Essa distinção não é
        detalhe: dependendo do entendimento aplicado ao caso concreto, um
        servidor que sacou recentemente pode estar plenamente dentro do
        prazo.
      </p>
      <p>
        Em termos gerais, costuma estar em melhor posição quem sacou os
        valores há menos de dez anos ou quem só recentemente teve acesso às
        informações da conta. Mas isso não substitui a análise da movimentação
        real — é a microfilmagem que define a data de ciência aplicável a
        cada situação.
      </p>

      <h2 id="tabela">União ou Banco do Brasil? <span className="s-it">A diferença que define o prazo</span></h2>
      <p>
        Antes do Tema 1.150, muitas ações eram propostas contra a União, e o
        STJ já havia fixado, sob o rito dos repetitivos (REsp 1.205.277/PB), o
        prazo de cinco anos para a cobrança contra o ente público. A virada
        do Tema 1.150 está em direcionar a demanda ao administrador das
        contas, com consequências diretas sobre o prazo:
      </p>
      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Critério</th>
              <th>Ação contra a União</th>
              <th>Ação contra o Banco do Brasil (Tema 1.150)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quem responde</td>
              <td>Ente público (gestor do programa)</td>
              <td>Instituição administradora das contas</td>
            </tr>
            <tr>
              <td>Prazo prescricional</td>
              <td>Quinquenal (Decreto 20.910/32)</td>
              <td>Decenal (art. 205 do Código Civil)</td>
            </tr>
            <tr>
              <td>Termo inicial discutido</td>
              <td>Tendia ao último depósito</td>
              <td>Ciência comprovada do desfalque</td>
            </tr>
            <tr>
              <td>Efeito prático</td>
              <td>Maioria das pretensões prescrita</td>
              <td>Reabre a discussão para quem teve ciência recente</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        A leitura correta dessa diferença é o que separa uma pretensão viável
        de uma pretensão fadada à prescrição — e exige análise técnica antes
        de qualquer iniciativa.
      </p>

      <h2 id="analise">O que se analisa <span className="s-it">antes de qualquer medida</span></h2>
      <p>
        Nenhuma diferença pode ser afirmada sem documentação. A análise séria
        de um caso de PASEP parte da reconstrução histórica da conta e da
        definição do termo inicial aplicável. Os documentos que costumam
        viabilizar esse exame são:
      </p>
      <ul>
        <li>
          <strong>Identificação e dados funcionais:</strong> RG/CPF (ou CNH),
          comprovante de residência, número de inscrição no PASEP e o ato de
          aposentadoria.
        </li>
        <li>
          <strong>Movimentação financeira:</strong> contracheques (um anterior
          à aposentadoria e os mais recentes como aposentado), para situar
          datas e valores.
        </li>
        <li>
          <strong>Histórico da conta:</strong> extrato junto ao Banco do Brasil
          e, sobretudo, a microfilmagem — o documento que revela toda a
          movimentação e permite identificar eventuais diferenças.
        </li>
        <li>
          <strong>Comprovantes de saque,</strong> quando existirem, para fixar
          a data de ciência.
        </li>
      </ul>

      <Figure
        src="images/blog/revisao-pasep-servidor-publico/documentos-analise.webp"
        aspect="16/10"
        label="FOTO editorial · flat-lay · documentos para análise de PASEP · 16:10"
        alt="Documentos típicos para análise de um caso de PASEP — identificação, contracheques, ato de aposentadoria e histórico da conta dispostos em mesa de trabalho. Braga Jr. Advogados, Rio de Janeiro."
        sizes="(max-width: 880px) 100vw, 880px"
      />

      <p>
        A partir desse material, é possível verificar se há, de fato, valores
        a recompor e qual a tese cabível. Em casos de servidores e
        aposentados com dificuldade de arcar com custas, discute-se ainda o
        pedido de gratuidade de justiça, mediante demonstração da
        hipossuficiência.
      </p>
      <p>
        A atuação consolidada do escritório na{' '}
        <Link href="/atuacao/direito-do-servidor">defesa de servidores públicos</Link>{' '}
        inclui justamente esse tipo de análise técnica de vida funcional — em
        que o desfecho depende menos de afirmações genéricas e mais da
        reconstrução documental do histórico.
      </p>

      <h2 id="conclusao">Considerações <span className="s-it">finais</span></h2>
      <p>
        O Tema 1.150 não criou um direito automático de receber valores: ele
        esclareceu <em>quem responde</em> e <em>em quanto tempo</em> se pode
        discutir. A diferença entre ter ou não algo a recompor está nos
        registros da conta, e o prazo corre a partir da ciência do problema.
        Para o servidor, isso significa que a inércia tem custo — mas que a
        pressa sem análise também tem. O caminho prudente é o mesmo de sempre
        no Direito do servidor: documento na mão antes de tese na petição.
      </p>

      <h2 id="faq">Perguntas frequentes</h2>
      <h3>O PASEP é a mesma coisa que o PIS?</h3>
      <p>
        Não. O PIS é destinado a trabalhadores da iniciativa privada; o
        PASEP, ao servidor público. Este artigo trata apenas do PASEP e das
        contas individuais vinculadas anteriores a 1988.
      </p>
      <h3>Quem ingressou no serviço público depois de 1988 tem conta para revisar?</h3>
      <p>
        Em regra, não. A Constituição de 1988 redirecionou a arrecadação,
        encerrando os depósitos em novas contas individuais. O tema interessa
        sobretudo a quem contribuiu antes desse marco.
      </p>
      <h3>Já saquei o PASEP há anos. Ainda posso discutir diferenças?</h3>
      <p>
        Depende da data de ciência do eventual desfalque e do prazo de dez
        anos definido pelo STJ. Quem sacou há menos de uma década, ou só
        recentemente acessou as informações da conta, tende a estar em melhor
        posição — mas só a análise da microfilmagem confirma.
      </p>
      <h3>Preciso da microfilmagem para tudo?</h3>
      <p>
        Ela é o documento central. Sem o histórico completo da movimentação,
        não é possível demonstrar a existência e o montante de eventuais
        diferenças.
      </p>
      <h3>Contra quem se ajuíza a ação?</h3>
      <p>
        Conforme o Tema 1.150, contra o Banco do Brasil, na qualidade de
        administrador das contas vinculadas ao PASEP.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página de{' '}
        <Link href="/atuacao/direito-do-servidor">Direito do Servidor Público</Link>{' '}
        reúne as frentes em que o escritório atua — PAD, sindicância, vida
        funcional, aposentadoria e controle judicial. Ver também{' '}
        <Link href="/blog/progressao-funcional-rj">os três caminhos antes da via judicial em progressão funcional</Link>{' '}
        e <Link href="/blog/pad-controle-judicial">PAD e o limite do controle judicial sobre o mérito administrativo</Link>.
      </p>
    </>
  ),

  // ───────────── Publicado em 2026-05-21 ─────────────
  'pad-controle-judicial': () => (
    <>
      <p>
        A pergunta chega quase sempre na mesma forma: a penalidade saiu, o
        processo administrativo terminou, e a dúvida é se o Judiciário pode
        desfazer o que a Administração decidiu. A resposta honesta não começa
        por &ldquo;sim&rdquo; nem por &ldquo;não&rdquo; — começa por uma
        distinção. O juiz não reexamina o processo disciplinar inteiro. Ele
        opera dentro de uma fronteira, e quase tudo o que importa para o seu
        caso depende de saber de que lado dela o seu argumento está.
      </p>

      <h2>A fronteira entre <span className="s-it">legalidade e mérito</span></h2>
      <p>
        De um lado, o <strong>mérito administrativo</strong>: o juízo de
        conveniência e oportunidade que a lei reserva à autoridade — entre eles,
        a graduação da sanção dentro da moldura legal. De outro, o{' '}
        <strong>controle de legalidade</strong>: competência, forma, motivo,
        finalidade e a proporcionalidade entre conduta e penalidade. A regra
        de partida é que o Judiciário controla a legalidade do ato disciplinar,
        mas não substitui o juízo de mérito da Administração por um juízo
        próprio. Na prática, o que vira matéria revisável é aquilo que se
        consegue reconduzir a um vício de legalidade — e não a um pedido para
        que o juiz ache a pena severa.
      </p>

      <h2>Quatro situações em que o Judiciário <span className="s-it">entra no conteúdo</span></h2>
      <p>
        Não é raro o controle alcançar o conteúdo da decisão — mas por
        fundamentos de legalidade, não por discordância com a dosagem.
      </p>
      <h3>1. Desproporção manifesta entre conduta e sanção</h3>
      <p>
        Quando a penalidade aplicada é manifestamente desproporcional à
        infração apurada, a desproporção é tratada como vício de legalidade,
        não como mérito intangível.
      </p>
      <h3>2. Inexistência ou falsidade do motivo</h3>
      <p>
        Se o fato que fundamentou a punição não ocorreu, não foi provado ou foi
        juridicamente desqualificado, o ato perde sustentação pela teoria dos
        motivos determinantes.
      </p>
      <h3>3. Cerceamento de defesa que contamina o resultado</h3>
      <p>
        A violação do contraditório e da ampla defesa (art. 5º, LV, da
        Constituição) pode invalidar a decisão quando efetivamente compromete o
        resultado.
      </p>
      <h3>4. Erro de enquadramento</h3>
      <p>
        Punir por infração que a conduta não configura, ou capitulá-la em
        dispositivo que não lhe corresponde, é vício de legalidade sindicável —
        não reavaliação de mérito.
      </p>

      <h2>Quatro situações em que ele <span className="s-it">se detém na forma</span></h2>
      <p>
        Do outro lado da linha, o pedido tende a esbarrar quando, no fundo, o
        que se quer é que o juiz refaça a escolha da Administração.
      </p>
      <h3>1. Escolha entre sanções igualmente cabíveis</h3>
      <p>
        Havendo mais de uma penalidade admissível na moldura legal, a opção
        motivada da autoridade é mérito; o juiz não a troca pela que reputaria
        mais branda.
      </p>
      <h3>2. Reexame de prova regularmente produzida</h3>
      <p>
        O Judiciário não funciona como terceira instância revisora da
        instrução: prova produzida com contraditório e regularmente valorada
        não é, em regra, reapreciada no mérito.
      </p>
      <h3>3. Gradação proporcional e fundamentada</h3>
      <p>
        Quando a dosimetria está motivada e guarda proporção com os fatos
        apurados, o juízo de conveniência sobre a gradação permanece no campo
        do mérito.
      </p>
      <h3>4. Independência entre as instâncias</h3>
      <p>
        A esfera administrativa é, em regra, independente da penal: a
        absolvição criminal não repercute automaticamente no PAD, salvo quando
        reconhece a inexistência do fato ou a negativa de autoria.
      </p>

      <h2>O que muda para quem <span className="s-it">ainda está no processo</span></h2>
      <p>
        A leitura recorrente nesta área é contraintuitiva: boa parte do que
        será — ou não será — revisável no Judiciário se decide ainda na fase
        administrativa. Na resposta à portaria, na prova que se requer e na
        impugnação tempestiva do enquadramento. Tratar o PAD como ensaio, na
        expectativa de &ldquo;resolver depois&rdquo;, costuma ser o erro mais
        caro: o que não foi suscitado a tempo raramente se converte, sozinho,
        em matéria de legalidade.
      </p>
      <p>
        O trabalho técnico, aqui, é de método, não de promessa: estruturar o
        processo administrativo de modo que uma eventual via judicial encontre
        questões de legalidade bem postas — e dizer, com franqueza, quando o
        caso é de mérito e a revisão é improvável. Acompanhamento integral e
        recomendação fundamentada; nunca garantia de resultado.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página da área de{' '}
        <Link href="/atuacao/direito-do-servidor">
          Direito do Servidor Público
        </Link>{' '}
        cobre as cinco frentes mais frequentes — PAD, sindicância, progressão
        funcional, aposentadoria e controle judicial — com o fundamento legal
        de cada uma e a FAQ específica da área.
      </p>
    </>
  ),

  // ───────────── Rascunho (noindex) — aguardando sign-off do Dr. Jorge ─────────────
  'progressao-funcional-rj': () => (
    <>
      <p>
        Você cumpriu o interstício. Concluiu o estágio probatório há tempo. Viu
        colegas da mesma turma de concurso subirem de padrão. E, quando consultou
        o contracheque do mês seguinte, encontrou o mesmo símbolo, o mesmo nível,
        o mesmo vencimento-base de antes. A progressão funcional, que deveria ser
        ato vinculado da Administração, simplesmente não veio.
      </p>
      <p>
        Antes de procurar o Judiciário, é importante saber que existem três
        caminhos administrativos que costumam resolver a maior parte desses
        bloqueios — sem a demora, o custo e o desgaste de uma ação. Este artigo
        trata desses caminhos, dos prazos a observar e dos casos em que, esgotada
        a via interna, o mandado de segurança ou a ação ordinária passam a ser
        inevitáveis.
      </p>

      <nav className="article-toc" aria-label="Sumário">
        <div className="article-toc-title">Sumário</div>
        <ol>
          <li><a href="#o-que-e-progressao">O que é progressão funcional (e por que se confunde com promoção)</a></li>
          <li><a href="#por-que-trava">Por que a progressão trava: as três causas mais frequentes</a></li>
          <li><a href="#caminho-1">Caminho 1 — Requerimento administrativo com pedido de reconsideração</a></li>
          <li><a href="#caminho-2">Caminho 2 — Recurso hierárquico (Lei 9.784/99 e diplomas equivalentes)</a></li>
          <li><a href="#caminho-3">Caminho 3 — Provocação dos canais institucionais</a></li>
          <li><a href="#judiciario">Quando o Judiciário se torna inevitável</a></li>
          <li><a href="#tabela">Causa do bloqueio × via adequada</a></li>
          <li><a href="#checklist">Boas práticas: checklist do servidor</a></li>
          <li><a href="#consideracoes">Considerações finais: progressão é direito, não favor</a></li>
          <li><a href="#faq">Perguntas frequentes</a></li>
        </ol>
      </nav>

      <h2 id="o-que-e-progressao">O que é progressão funcional <span className="s-it">(e por que se confunde com promoção)</span></h2>
      <p>
        No vocabulário técnico dos estatutos de servidor,{' '}
        <strong>progressão funcional</strong> designa, em regra, a passagem do
        servidor para o padrão ou referência imediatamente superior dentro da
        mesma classe de sua carreira, normalmente vinculada a tempo de serviço
        (antiguidade) e a avaliação de desempenho satisfatória. Já a{' '}
        <strong>promoção</strong> corresponde à mudança de classe — um degrau
        hierarquicamente mais alto, vinculado a qualificação, titulação ou
        merecimento.
      </p>
      <p>
        Essa distinção parece protocolar, mas tem peso prático: cada estatuto e
        cada Plano de Cargos e Salários (PCS) define com precisão os requisitos,
        o interstício e o procedimento de cada figura. No serviço federal, o
        regime básico está na Lei 8.112/90 e nas normas específicas de cada
        carreira. No Estado do Rio de Janeiro, cada categoria — magistério,
        segurança pública, fiscalização, judiciário, fazendária — segue seu
        próprio diploma (Lei Estadual nº 1.546/77 e leis complementares
        correlatas, regulamentos do TJ-RJ, do DETRAN-RJ, leis específicas do
        quadro da PGE, do magistério e assim por diante). Nos municípios, vale o
        estatuto e o PCS locais.
      </p>
      <p>
        Para o objetivo deste artigo, o ponto importante é que, em todos esses
        regimes, o ato de conceder a progressão é <strong>vinculado</strong> —
        quando os requisitos legais estão preenchidos, a Administração não dispõe
        de juízo de conveniência para conceder ou negar. Esse caráter vinculado é
        a chave de toda a discussão que vem a seguir.
      </p>

      <h2 id="por-que-trava">Por que a progressão trava: <span className="s-it">as três causas mais frequentes</span></h2>
      <p>
        Na prática forense, três motivos respondem pela maioria dos bloqueios de
        progressão funcional:
      </p>
      <p>
        <strong>(a) Avaliação de desempenho ausente, atrasada ou com nota
        insuficiente.</strong> A Administração simplesmente não realiza o ciclo
        avaliativo no prazo regulamentar, ou realiza-o sem dar ciência ao
        servidor, ou atribui pontuação abaixo do mínimo necessário sem
        fundamentação adequada.
      </p>
      <p>
        <strong>(b) Alegação de limite de gastos com pessoal (LRF).</strong> O
        ente federativo invoca o art. 22 da Lei Complementar 101/2000 (Lei de
        Responsabilidade Fiscal) — em especial o atingimento do limite prudencial
        ou do limite máximo — para suspender concessão de vantagens. Esse
        argumento foi recorrentemente usado por Estados e Municípios entre 2020 e
        2022, durante e após a pandemia.
      </p>
      <p>
        <strong>(c) Inércia administrativa pura.</strong> O servidor preencheu
        todos os requisitos, fez o pedido, e o processo simplesmente não anda.
        Não há decisão, nem motivada nem imotivada — há silêncio.
      </p>
      <p>
        Cada uma dessas causas exige uma estratégia própria. E todas elas devem
        ser, num primeiro momento, atacadas pela via administrativa.
      </p>

      <Infographic
        src="images/blog/progressao-funcional-rj/fluxograma-3-caminhos.svg"
        alt="Fluxograma dos três caminhos administrativos antes da via judicial: requerimento com pedido de reconsideração, recurso hierárquico e provocação de canais institucionais — e o ponto em que o caso segue para mandado de segurança ou ação ordinária."
        label="FLUXOGRAMA · 3 caminhos administrativos → via judicial · requerimento · recurso hierárquico · canais institucionais · 16:10"
        caption="Os três caminhos administrativos e o ponto de transição para a via judicial."
      />

      <h2 id="caminho-1">Caminho 1 — Requerimento administrativo com pedido de reconsideração</h2>
      <p>
        O primeiro passo é formal, mas decisivo: protocolar requerimento dirigido
        à autoridade competente (em regra, o RH ou a unidade de gestão de pessoas
        do órgão), demonstrando objetivamente que os requisitos legais estão
        cumpridos e pedindo a concessão da progressão ou a revisão do ato que a
        negou.
      </p>
      <p>Esse requerimento serve a dois propósitos jurídicos:</p>
      <ul>
        <li>
          <strong>Constitui em mora a Administração.</strong> A partir do
          protocolo, começa a correr o prazo razoável para resposta (em regra, 30
          dias, prorrogáveis por igual período, na forma do art. 49 da Lei
          9.784/99 — e em prazos equivalentes nas legislações estaduais).
        </li>
        <li>
          <strong>Documenta a pretensão</strong>, viabilizando, caso necessário,
          o mandado de segurança no futuro (que tem prazo decadencial de 120
          dias, contados da ciência do ato concreto que se quer impugnar).
        </li>
      </ul>
      <p>
        Quando a hipótese for nota insatisfatória em avaliação de desempenho, o
        instrumento adequado costuma ser o pedido de reconsideração dirigido à
        própria autoridade que assinou o resultado, normalmente em prazo curto (10
        dias é a regra geral da Lei 9.784/99, art. 56, mas há regulamentos
        específicos com prazos próprios — o estatuto do servidor do TJ-RJ, por
        exemplo, traz disciplina particular). Convém anexar:
      </p>
      <ul>
        <li>contracheque atualizado;</li>
        <li>ficha funcional (tempo de serviço por padrão);</li>
        <li>portaria de nomeação e termo de posse;</li>
        <li>frequência e folha de ponto do período avaliado;</li>
        <li>elogios funcionais, designações, certificados de capacitação;</li>
        <li>atos administrativos anteriores que reconhecem progressões.</li>
      </ul>
      <p>
        Quanto mais robusto o requerimento, menor a chance de a Administração se
        valer da resposta padronizada (&ldquo;indeferido por ausência de previsão
        orçamentária&rdquo;) que serviria de pretexto para arquivar o processo.
      </p>

      <h2 id="caminho-2">Caminho 2 — Recurso hierárquico <span className="s-it">(Lei 9.784/99 e diplomas equivalentes)</span></h2>
      <p>
        Indeferido o requerimento — expressamente ou por silêncio prolongado —,
        cabe recurso administrativo à autoridade imediatamente superior. No âmbito
        federal, a Lei 9.784/99 fixa o prazo de 10 dias para interposição,
        contados da ciência da decisão recorrida (art. 59), e atribui à própria
        autoridade que decidiu a possibilidade de retratação no prazo de cinco
        dias, antes de remeter o feito ao superior hierárquico.
      </p>
      <p>
        O Superior Tribunal de Justiça, na Súmula 633, já consolidou que a Lei
        9.784/99 aplica-se subsidiariamente a Estados e Municípios quando
        inexistente norma local específica. No Rio de Janeiro, há disciplina
        estadual sobre processo administrativo (Lei Estadual nº 5.427/2009) que
        segue, em grande medida, a mesma lógica federal — prazos, princípios da
        ampla defesa e do contraditório, dever de motivação.
      </p>
      <p>Dois pontos merecem atenção no recurso:</p>
      <p>
        <strong>Fundamentação técnica.</strong> O recurso não pode ser uma
        repetição emocional do requerimento. Precisa enfrentar, ponto a ponto, os
        motivos invocados na decisão recorrida. Se a Administração disse
        &ldquo;limite da LRF&rdquo;, é preciso demonstrar que a progressão é
        despesa vinculada — não discricionária — e, portanto, está fora do alcance
        do art. 22 da LC 101/2000, conforme a tese fixada pelo STJ no Tema 1075
        (que veremos adiante). Se a Administração disse &ldquo;avaliação
        insuficiente&rdquo;, é preciso atacar os critérios da avaliação, a
        publicidade do processo, a fundamentação das notas e o respeito ao
        contraditório.
      </p>
      <p>
        <strong>Pedido de efeito suspensivo.</strong> O recurso administrativo,
        em regra, não tem efeito suspensivo automático (art. 61 da Lei 9.784/99).
        Porém, havendo justo receio de prejuízo de difícil reparação — por
        exemplo, repercussão imediata em outras vantagens, gratificações ou
        aposentadoria iminente —, a autoridade pode concedê-lo a pedido. É um
        detalhe pouco explorado e que, bem fundamentado, faz diferença.
      </p>

      <h2 id="caminho-3">Caminho 3 — Provocação dos canais institucionais</h2>
      <p>
        Paralelamente ao requerimento e ao eventual recurso, vale ativar canais
        institucionais que, na prática, costumam acelerar a tramitação:
      </p>
      <ul>
        <li>
          <strong>Ouvidoria do órgão e Controladoria-Geral do Estado
          (CGE-RJ)</strong> — registram manifestações que, por força regimental,
          exigem resposta motivada da unidade competente em prazo curto.
        </li>
        <li>
          <strong>Entidade sindical</strong> — sindicatos do setor têm
          legitimidade extraordinária para representar a categoria, possuem canais
          próprios de interlocução com a Secretaria de Administração e, em casos
          coletivos, podem ajuizar ações em nome de toda a base. Esse caminho é
          particularmente eficaz quando o bloqueio atinge uma turma inteira, e não
          apenas o servidor individualmente.
        </li>
        <li>
          <strong>Corregedoria interna</strong> — útil quando o atraso decorre de
          comportamento omissivo identificável (chefia que não realiza avaliação,
          comissão que não se instala).
        </li>
        <li>
          <strong>Ministério Público</strong> — em hipóteses de omissão
          sistêmica, com afetação de grupos, o MP-RJ pode atuar via inquérito
          civil e termo de ajustamento de conduta.
        </li>
      </ul>
      <p>
        O escritório acompanha, há anos, entidades como o SINDJUSTIÇA (Sindicato
        dos Servidores do Judiciário/RJ), o DETRAN-RJ, o SINFAZERJ e outras
        representações sindicais do funcionalismo estadual. A experiência mostra
        que a articulação entre o servidor individual, sua entidade representativa
        e os órgãos de controle interno costuma ser mais ágil do que se costuma
        supor — e dispensa, em parte significativa dos casos, o ajuizamento de
        demanda.
      </p>

      <h2 id="judiciario">Quando o Judiciário <span className="s-it">se torna inevitável</span></h2>
      <p>
        Esgotada a via administrativa — ou diante de omissão prolongada e
        injustificada —, o passo seguinte é judicial. Duas frentes são típicas:
      </p>
      <p>
        <strong>Mandado de segurança.</strong> Cabível quando o ato negativo (ou a
        omissão) é demonstrável por prova documental pré-constituída — ficha
        funcional, requerimentos protocolados, decisão de indeferimento,
        regulamento de carreira. Prazo decadencial: 120 dias contados da ciência
        do ato impugnado (Lei 12.016/2009, art. 23). Para a hipótese de mera
        omissão continuada, parte da doutrina e da jurisprudência sustenta que o
        prazo só corre da resposta negativa expressa — mas o servidor não deve se
        acomodar com essa controvérsia: protocolar requerimento e contar 120 dias
        do indeferimento (ou da resposta omissiva) é a postura mais segura.
      </p>
      <p>
        <strong>Ação ordinária com tutela antecipada.</strong> Indicada quando há
        controvérsia fática que demanda dilação probatória — por exemplo,
        discussão sobre a forma como a avaliação de desempenho foi conduzida, ou
        pedido de pagamento de diferenças retroativas somadas à implantação da
        progressão.
      </p>
      <p>
        Em ambos os casos, o fundamento jurídico mais robusto, hoje, é o{' '}
        <strong>Tema 1075 do STJ</strong>, julgado em sede de recursos
        repetitivos:
      </p>
      <blockquote>
        &ldquo;É ilegal o ato de não concessão de progressão funcional de servidor
        público, quando atendidos todos os requisitos legais, a despeito de
        superados os limites orçamentários previstos na Lei de Responsabilidade
        Fiscal, referentes a gastos com pessoal de ente público, tendo em vista
        que a progressão é direito subjetivo do servidor público, decorrente de
        determinação legal, estando compreendida na exceção prevista no inciso I
        do parágrafo único do art. 22 da Lei Complementar 101/2000.&rdquo;
        <cite>
          STJ, REsp 1.878.849/TO, Rel. Min. Manoel Erhardt (Desembargador
          convocado do TRF-5), Primeira Seção, julgado em 24/02/2022, publicado em
          15/03/2022.
        </cite>
      </blockquote>
      <p>
        A tese tem alcance nacional (art. 927 do CPC) e cobre o argumento
        orçamentário com solidez: progressão é despesa vinculada por lei, e o art.
        22, parágrafo único, I, da LRF excepciona expressamente o cumprimento de
        obrigação legal.
      </p>
      <p>
        Para a hipótese de avaliação não realizada pela Administração, tribunais
        de diversos Estados têm decidido que a inércia do Poder Público em
        instaurar o ciclo avaliativo não pode prejudicar o servidor — sob pena de
        o ente público se beneficiar da própria torpeza. Em casos análogos
        defendidos pelo escritório, a tese sustentada é justamente essa:
        completados o interstício e o estágio probatório, e omitida a avaliação
        por causa imputável à Administração, o requisito tem de ser dispensado
        para fins de progressão.
      </p>

      <h2 id="tabela">Causa do bloqueio <span className="s-it">× via adequada</span></h2>
      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Causa do bloqueio</th>
              <th>Primeira via administrativa</th>
              <th>Fundamento principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Avaliação de desempenho com nota insuficiente</td>
              <td>Pedido de reconsideração à autoridade que assinou o resultado</td>
              <td>Contraditório, motivação e publicidade (CF/88, art. 5º, LV; Lei 9.784/99, art. 50)</td>
            </tr>
            <tr>
              <td>Avaliação não realizada (inércia da chefia/comissão)</td>
              <td>Requerimento + provocação da corregedoria/RH</td>
              <td>Vedação ao enriquecimento sem causa pela Administração; ato vinculado</td>
            </tr>
            <tr>
              <td>Indeferimento por &ldquo;limite da LRF&rdquo;</td>
              <td>Recurso hierárquico com invocação do Tema 1075/STJ</td>
              <td>LC 101/2000, art. 22, p. único, I; STJ, Tema 1075</td>
            </tr>
            <tr>
              <td>Silêncio administrativo prolongado</td>
              <td>Reiteração com prazo + ouvidoria + sindicato</td>
              <td>Lei 9.784/99, arts. 48 e 49; eficiência (CF, art. 37)</td>
            </tr>
            <tr>
              <td>Decisão expressa de indeferimento, sem fundamentação</td>
              <td>Recurso hierárquico com pedido de nulidade</td>
              <td>Lei 9.784/99, art. 50; dever constitucional de motivação</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="checklist">Boas práticas: <span className="s-it">checklist do servidor</span></h2>
      <ol>
        <li>
          <strong>Reúna a documentação antes de qualquer movimento.</strong> Ficha
          funcional completa, contracheques dos últimos seis meses, portaria de
          nomeação, termo de posse, certidões de tempo, registros de avaliação e
          atos de progressões anteriores.
        </li>
        <li>
          <strong>Confira o regulamento específico da carreira.</strong> Estatuto,
          PCS, resoluções internas. O prazo de interstício e os critérios variam —
          e o regulamento certo é o que rege a sua categoria, não o estatuto geral.
        </li>
        <li>
          <strong>Sempre protocole por escrito.</strong> Conversas com o RH não
          constituem em mora. Use o protocolo físico ou eletrônico, guarde recibo,
          exija número de processo.
        </li>
        <li>
          <strong>Não deixe os 120 dias do mandado de segurança correrem em
          silêncio.</strong> Se a Administração respondeu negativamente, marque o
          prazo no calendário.
        </li>
        <li>
          <strong>Considere a via coletiva.</strong> Quando o bloqueio atinge toda
          a turma, a entidade sindical pode atuar com mais eficácia processual e
          impacto institucional.
        </li>
        <li>
          <strong>Antes de assinar qualquer termo de quitação ou acordo de
          implantação parcial, consulte assessoria jurídica.</strong> Há renúncias
          tácitas a parcelas retroativas que se concretizam por descuido.
        </li>
      </ol>

      <h2 id="consideracoes">Considerações finais: <span className="s-it">progressão é direito, não favor</span></h2>
      <p>
        O ponto que costuma se perder no dia a dia é justamente o conceito
        central: progressão funcional não é prêmio, não é gratificação política,
        não é vantagem concedida por liberalidade. É ato administrativo vinculado,
        decorrência direta de tempo de serviço e desempenho mínimo aferido. Quando
        o servidor preenche os requisitos, a Administração tem dever de
        implementar — não faculdade de escolher.
      </p>
      <p>
        O percurso administrativo descrito acima existe porque, na maior parte dos
        casos, o impasse se resolve com boa instrução documental, fundamentação
        técnica e provocação dos canais certos. Quando isso não basta, o Tema 1075
        do STJ e a jurisprudência sobre omissão de avaliação fornecem base sólida
        para o controle judicial.
      </p>
      <p>
        A escolha entre cada caminho — e o momento de transitar do administrativo
        para o judicial — depende do quadro concreto: prazo da progressão
        pretendida, proximidade de aposentadoria, tempo de inércia, existência de
        outros servidores na mesma situação. Esse é, em essência, o tipo de
        leitura que justifica uma consulta técnica antes da primeira petição.
      </p>

      <h2 id="faq">Perguntas frequentes</h2>
      <h3>Qual é o prazo para protocolar o requerimento administrativo de progressão?</h3>
      <p>
        O direito à progressão, em si, não decai pelo simples decurso do tempo —
        porém, parcelas retroativas prescrevem em cinco anos, contados
        retroativamente da data do ajuizamento (Decreto 20.910/32, aplicável aos
        entes públicos). O ideal é protocolar tão logo o interstício se complete.
      </p>
      <h3>Posso ir direto ao Judiciário sem tentar a via administrativa?</h3>
      <p>
        Pode, mas geralmente não é a melhor estratégia. O mandado de segurança
        exige prova pré-constituída e fica mais robusto quando há decisão
        administrativa expressa de indeferimento, ou demonstração documental da
        omissão. O caminho administrativo, além de muitas vezes resolver o
        impasse, constrói o lastro probatório da eventual ação.
      </p>
      <h3>A Administração pode mesmo negar progressão alegando teto da LRF?</h3>
      <p>
        Não, quando os requisitos legais estiverem preenchidos. O STJ, no Tema
        1075, fixou em recursos repetitivos que a progressão é despesa vinculada e
        está fora da vedação do art. 22 da LC 101/2000. A tese é de observância
        obrigatória pelos demais tribunais.
      </p>
      <h3>E se a chefia simplesmente não realiza a avaliação de desempenho?</h3>
      <p>
        A omissão da Administração não pode prejudicar o servidor. Tribunais
        estaduais têm decidido, com apoio no Tema 1075 e nos princípios da
        legalidade e da eficiência, que o requisito de avaliação se dispensa
        quando a inércia é imputável ao Poder Público — sob pena de o ente público
        se beneficiar da própria omissão.
      </p>
      <h3>Servidor aposentado ou em vias de aposentar tem direito à progressão atrasada?</h3>
      <p>
        Em regra, sim, desde que os requisitos estejam preenchidos antes do ato de
        aposentadoria. A jurisprudência reconhece o direito à incorporação
        retroativa, com reflexos nos proventos. Há nuances quando se trata de
        proventos paritários × proventos calculados pela média, que exigem análise
        individualizada.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página de{' '}
        <Link href="/atuacao/direito-do-servidor">Direito do Servidor Público</Link>{' '}
        reúne as frentes em que o escritório atua — PAD, sindicância, progressão
        funcional, aposentadoria e controle judicial — com o fundamento legal de
        cada uma.
      </p>
    </>
  ),

  // ───────────── Rascunho (noindex) — aguardando sign-off do Dr. Jorge ─────────────
  'dpo-terceirizado-pme': () => (
    <>
      <p>
        A diretoria de uma empresa de médio porte recebe um e-mail da ANPD pedindo
        esclarecimentos sobre um incidente de segurança. O endereço de contato do
        encarregado, divulgado no rodapé do site, é o de um gerente de TI que pediu
        demissão há oito meses. Ninguém atualizou. Ninguém respondeu. A autoridade
        abre processo administrativo sancionador.
      </p>
      <p>
        Esse cenário — variações dele — explica por que a discussão sobre
        terceirizar a função de encarregado deixou de ser teórica. Para a pequena e
        média empresa que processa dados pessoais como parte normal da operação (e
        isso inclui praticamente todas), a pergunta não é mais <span className="s-it">se</span>{' '}
        a função existe, mas como mantê-la viva sem inflar o custo fixo.
      </p>
      <p>
        Este artigo trata do encarregado de dados terceirizado — o chamado{' '}
        <span className="s-it">DPO as a Service</span> — sob três ângulos: o que a
        lei e a Autoridade Nacional de Proteção de Dados (ANPD) exigem, quando o
        modelo terceirizado faz sentido, e quais riscos se escondem em contratos mal
        desenhados.
      </p>

      <nav className="article-toc" aria-label="Sumário">
        <div className="article-toc-title">Sumário</div>
        <ol>
          <li><a href="#secao-1">O encarregado depois da Resolução CD/ANPD nº 18/2024</a></li>
          <li><a href="#secao-2">A PME está obrigada a ter encarregado?</a></li>
          <li><a href="#secao-3">Encarregado interno vs. terceirizado: comparativo objetivo</a></li>
          <li><a href="#secao-4">Quando o modelo terceirizado faz sentido — e quando não</a></li>
          <li><a href="#secao-5">Cláusulas essenciais no contrato de DPO externo</a></li>
          <li><a href="#secao-6">Riscos de uma terceirização mal estruturada</a></li>
          <li><a href="#secao-7">Boas práticas para contratar o encarregado externo</a></li>
        </ol>
      </nav>

      <h2 id="secao-1">O encarregado depois da Resolução CD/ANPD nº 18/2024</h2>
      <p>
        A figura do encarregado nasce no art. 41 da Lei 13.709/2018 (LGPD): cabe ao
        controlador indicar uma pessoa responsável por receber comunicações dos
        titulares e da Autoridade e por orientar a organização sobre o tratamento de
        dados.
      </p>
      <p>
        Durante quase seis anos, a previsão permaneceu genérica. Em julho de 2024, a
        ANPD publicou a Resolução CD/ANPD nº 18/2024, que aprova o regulamento sobre
        a atuação do encarregado pelo tratamento de dados pessoais no âmbito da LGPD.
        A norma trouxe quatro mudanças que afetam diretamente a escolha entre modelo
        interno e terceirizado:
      </p>
      <ul>
        <li>
          <strong>Indicação formal obrigatória.</strong> A indicação deve ocorrer por
          ato formal — documento escrito, datado e assinado. Não basta colocar o nome
          no rodapé do site; é preciso instrumento juridicamente válido que comprove a
          designação.
        </li>
        <li>
          <strong>Pessoa natural ou jurídica.</strong> O encarregado pode ser pessoa
          natural ou jurídica — o que ratifica, em texto regulamentar, a viabilidade do
          DPO terceirizado contratado por empresa especializada (antes apenas inferido
          da omissão da lei).
        </li>
        <li>
          <strong>Substituto formalmente designado.</strong> A função não pode ficar
          acéfala. Férias, licença, vacância: tudo deve ser coberto por substituto
          previamente nomeado, sob pena de a empresa ficar sem canal válido perante a
          ANPD.
        </li>
        <li>
          <strong>Autonomia técnica e ausência de conflito de interesse.</strong> O
          encarregado deve atuar com ética, integridade e autonomia técnica — barreira
          clara a indicações de fachada, como o gerente de TI sobrecarregado ou o sócio
          operacional que decide os próprios tratamentos.
        </li>
      </ul>
      <p>
        Vale lembrar que o art. 41 da LGPD não impõe certificação profissional
        específica: o exercício da atividade não pressupõe inscrição em entidade nem
        formação própria — embora, na prática, conhecimento jurídico e técnico em
        proteção de dados seja indispensável para que a função tenha efeito real.
      </p>

      <h2 id="secao-2">A PME está obrigada a <span className="s-it">ter encarregado?</span></h2>
      <p>
        Aqui mora uma confusão comum. A regra geral do art. 41 da LGPD obriga o
        controlador a indicar encarregado. Mas a Resolução CD/ANPD nº 2/2022 —
        específica para agentes de tratamento de pequeno porte — flexibilizou esse
        dever.
      </p>
      <p>
        São considerados agentes de pequeno porte microempresas, empresas de pequeno
        porte, startups, pessoas jurídicas sem fins lucrativos, pessoas naturais e
        entes privados despersonalizados, dentro dos limites de receita das Leis
        Complementares 123/2006 e 182/2021. Para esse grupo não há obrigação de
        indicar encarregado, desde que disponibilizado um canal de comunicação com o
        titular — lógica reforçada pela Resolução nº 18/2024.
      </p>
      <p>Mas atenção a três armadilhas:</p>
      <div className="article-table">
        <table>
          <thead>
            <tr><th>Situação</th><th>A flexibilização se aplica?</th></tr>
          </thead>
          <tbody>
            <tr><td>ME ou EPP dentro do limite de receita e com tratamento de baixo risco</td><td>Sim — encarregado dispensado, canal obrigatório</td></tr>
            <tr><td>ME ou EPP que faça tratamento de alto risco (dados sensíveis, perfilamento, crianças e adolescentes, vigilância de zona pública, tecnologias emergentes)</td><td>Não — encarregado obrigatório</td></tr>
            <tr><td>ME ou EPP que pertença a grupo econômico de grande porte</td><td>Não — encarregado obrigatório</td></tr>
            <tr><td>PME acima dos limites da LC 123/2006</td><td>Não — regime geral, encarregado obrigatório</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        A maior parte das PMEs que pensa em DPO terceirizado já saiu da hipótese de
        dispensa: ou trata dados sensíveis (clínicas, escolas, RH terceirizado,
        fintechs), ou faz perfilamento (e-commerce, marketing digital), ou pertence a
        grupo econômico maior. Ou seja: a obrigação existe, e a discussão real é
        apenas como cumpri-la.
      </p>
      <p>
        Mesmo nos casos de dispensa formal, manter um canal funcional de atendimento
        ao titular continua obrigatório — e implementá-lo sem alguém tecnicamente
        responsável é receita previsível para incidente.
      </p>

      <h2 id="secao-3">Encarregado interno vs. terceirizado: <span className="s-it">comparativo objetivo</span></h2>
      <p>
        Não existe escolha universalmente correta. Existe o ajuste entre porte da
        empresa, volume de tratamento, sensibilidade dos dados e maturidade do
        programa de privacidade.
      </p>
      <div className="article-table">
        <table>
          <thead>
            <tr><th>Eixo</th><th>Encarregado interno</th><th>Encarregado terceirizado</th></tr>
          </thead>
          <tbody>
            <tr><td>Custo fixo mensal</td><td>Salário + encargos (sênior em RJ/SP: ~R$ 12 a 25 mil/mês)</td><td>Honorário contratado — usualmente R$ 2,5 a 10 mil/mês conforme a complexidade</td></tr>
            <tr><td>Disponibilidade</td><td>Integral, presencial</td><td>Conforme contrato — exige SLA bem definido</td></tr>
            <tr><td>Conhecimento do negócio</td><td>Profundo (após a curva de aprendizado)</td><td>Genérico no início; especializa-se com o tempo</td></tr>
            <tr><td>Independência técnica</td><td>Vulnerável à hierarquia interna</td><td>Estruturalmente maior — não responde à chefia operacional</td></tr>
            <tr><td>Substituição em ausências</td><td>Depende do planejamento de RH</td><td>Em regra, a contratada já oferece substituto</td></tr>
            <tr><td>Risco de conflito de interesse</td><td>Alto se acumular função operacional (TI, jurídico, RH)</td><td>Baixo — atuação especializada</td></tr>
            <tr><td>Atendimento à fiscalização da ANPD</td><td>Depende de treinamento contínuo</td><td>Em geral, a contratada tem repertório de casos</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Para a PME típica — receita entre R$ 5 e 50 milhões, sem departamento
        jurídico estruturado, tratando dados de clientes, funcionários e parceiros —
        o modelo interno raramente se sustenta no custo-benefício. Já para empresas
        que tratam dados sensíveis em escala (saúde, educação, finanças), a tendência
        é o modelo híbrido: encarregado terceirizado como função formal, somado a um{' '}
        <span className="s-it">data protection champion</span> interno que centraliza
        as demandas do dia a dia.
      </p>

      <h2 id="secao-4">Quando o modelo terceirizado faz sentido — <span className="s-it">e quando não</span></h2>
      <p>A decisão prática gira em torno de cinco perguntas concretas.</p>
      <p><strong>Faz sentido terceirizar quando:</strong></p>
      <ul>
        <li>a empresa não tem profissional internamente qualificado em LGPD e contratar um sênior dedicado é incompatível com o orçamento;</li>
        <li>o volume de tratamento é moderado — fluxos previsíveis, sem operações de altíssimo risco recorrentes;</li>
        <li>a operação não exige presença física constante (atendimento de titulares e comunicação com a ANPD é, por natureza, remoto);</li>
        <li>a empresa busca rapidez na adequação inicial — uma consultoria especializada entrega em meses o que um profissional interno construiria em anos;</li>
        <li>há necessidade de blindagem em momento crítico: rodada de investimento com due diligence de privacidade, expansão para mercado regulado, M&amp;A com cláusula de reps and warranties em LGPD.</li>
      </ul>
      <p><strong>Não faz sentido (ou exige cautela redobrada) quando:</strong></p>
      <ul>
        <li>o tratamento de dados é a essência do negócio — health techs, insurtechs, plataformas de relacionamento; aqui a função pede presença diária e integração com o produto;</li>
        <li>há conflito de interesse estrutural entre a contratada e a contratante (ex.: a mesma firma que presta serviço de marketing pretende atuar como encarregado da empresa cujos dados ela opera — arranjo vedado pelo regulamento da ANPD);</li>
        <li>a operação é multinacional e exige presença local em jurisdições com regulação própria;</li>
        <li>a empresa nunca passou por mapeamento de dados — terceirizar antes de mapear é colocar o telhado antes da fundação.</li>
      </ul>

      <h2 id="secao-5">Cláusulas essenciais no contrato de DPO externo</h2>
      <p>
        Um contrato genérico de prestação de serviço não atende ao papel de
        encarregado. As cláusulas a seguir são mínimas, não exaustivas.
      </p>
      <p>
        <strong>Designação formal e divulgação.</strong> O contrato deve incluir o
        ato formal de indicação, com nome (se pessoa natural) ou identificação da
        pessoa jurídica e do profissional responsável. As informações de contato
        precisam ser divulgadas no site da contratante, em local de fácil acesso (art.
        41, § 1º, da LGPD).
      </p>
      <p>
        <strong>Escopo de atuação detalhado.</strong> As quatro atribuições do art.
        41, § 2º, da LGPD (atendimento a titulares, comunicação com a ANPD, orientação
        a empregados e contratados, outras definidas pelo controlador) devem estar no
        contrato. Sem detalhamento, contratante e contratada terminam discutindo, no
        meio da crise, de quem era a responsabilidade.
      </p>
      <p>
        <strong>SLA de atendimento.</strong> Prazos máximos para resposta ao titular
        (a LGPD prevê 15 dias para confirmação e acesso, art. 19 — o contrato pode ser
        mais rigoroso), para comunicação interna de incidente e para resposta à ANPD.
      </p>
      <p>
        <strong>Plano de comunicação de incidentes.</strong> Quem aciona quem, e em
        quantas horas. A comunicação à ANPD tem prazo próprio (a Resolução CD/ANPD nº
        15/2024 fixou o prazo de reporte) — a empresa precisa estar pronta para
        cumpri-lo.
      </p>
      <p>
        <strong>Substituto formal.</strong> Como exige a Resolução nº 18/2024, o
        contrato deve indicar previamente quem substitui o encarregado em ausências e
        impedimentos.
      </p>
      <p>
        <strong>Autonomia técnica.</strong> Cláusula expressa de que o encarregado não
        se subordina à área operacional da contratante e de que suas recomendações
        constarão de registro escrito — para a empresa não ficar exposta caso uma
        orientação seja ignorada pela alta administração.
      </p>
      <p>
        <strong>Confidencialidade e segurança da informação.</strong> Obviedade que
        não pode faltar: o encarregado externo terá acesso a dados pessoais e a
        segredos de negócio.
      </p>
      <p>
        <strong>Cessação da relação.</strong> Como se dará a transição, a devolução de
        documentos e o prazo de sigilo pós-contrato. A saída desorganizada é fonte
        recorrente de problemas.
      </p>

      <h2 id="secao-6">Riscos de uma <span className="s-it">terceirização mal estruturada</span></h2>
      <p>A terceirização não é blindagem automática. Quatro riscos práticos merecem atenção.</p>
      <p>
        <strong>Captura comercial.</strong> Algumas empresas vendem o serviço como
        pacote padronizado e descontinuam a atenção depois do onboarding — a função
        vira carimbo. Quando o incidente acontece, o contrato é vago e ninguém responde
        a tempo. Mitigação: SLA escrito, reuniões mensais obrigatórias, relatórios
        trimestrais documentados.
      </p>
      <p>
        <strong>Conflito de interesse.</strong> Vale repetir: a mesma empresa que
        presta serviço de tecnologia, marketing ou call center — e que, portanto, atua
        como operadora no fluxo de dados — não deve ser o encarregado do controlador. É
        arranjo que fragiliza a independência exigida pelo regulamento.
      </p>
      <p>
        <strong>Não conformidade da própria contratada.</strong> O encarregado externo
        precisa ser, ele mesmo, conforme à LGPD. Vale pedir a política de proteção de
        dados, as credenciais dos profissionais e o termo de confidencialidade assinado
        pela equipe que terá acesso.
      </p>
      <p>
        <strong>Descontinuidade.</strong> O que acontece se a contratada encerrar
        atividades, sofrer incidente grave ou perder o profissional-chave? O contrato
        deve prever continuidade — base de conhecimento, documentação atualizada, plano
        de substituição.
      </p>
      <p>
        Em pareceres prestados a entidades atendidas pelo escritório, observa-se um
        padrão: a maior parte das autuações da ANPD em PMEs decorre não da ausência de
        um programa de privacidade, mas da ausência de canal funcional de atendimento
        ao titular e do descumprimento de prazos de resposta. O encarregado
        terceirizado mal contratado replica exatamente esse vazio — com a desvantagem
        extra de o contrato sugerir que &ldquo;alguém está cuidando&rdquo;.
      </p>

      <h2 id="secao-7">Boas práticas para contratar o encarregado externo</h2>
      <ol>
        <li><strong>Mapeie antes.</strong> Levante quais dados a empresa trata, em quais bases legais e para quais finalidades. Sem isso, o encarregado entra cego.</li>
        <li><strong>Defina o ponto focal interno.</strong> Mesmo com DPO externo, alguém dentro da empresa precisa receber demandas operacionais e repassar. Sem ponto focal, a comunicação trava.</li>
        <li><strong>Avalie a maturidade técnica do prestador.</strong> Peça referências, exemplos de relatórios produzidos e o perfil dos profissionais alocados.</li>
        <li><strong>Negocie SLA específico.</strong> Prazos curtos para resposta ao titular e a incidentes; multas contratuais quando relevantes.</li>
        <li><strong>Exija a formalização da indicação.</strong> Ato formal escrito, publicação no site, substituto designado.</li>
        <li><strong>Estabeleça periodicidade obrigatória.</strong> Reuniões mensais com relatório, revisão semestral de processos, atualização anual do mapeamento.</li>
        <li><strong>Não termine o contrato sem transição.</strong> Preveja uma fase de transferência de conhecimento caso o vínculo encerre.</li>
      </ol>

      <h2 id="consideracoes">Considerações finais</h2>
      <p>
        O encarregado terceirizado é uma estrutura jurídica legítima e, para a maior
        parte das PMEs brasileiras, economicamente racional. Mas a Resolução CD/ANPD
        nº 18/2024 elevou o nível de exigência: indicação formal, substituto
        designado, autonomia técnica e vedação ao conflito de interesse transformaram
        o que era prática informal em função regulamentada.
      </p>
      <p>
        Para a empresa que pondera o modelo, o ponto crítico não é a decisão entre
        interno e externo — é a qualidade do contrato e a continuidade da operação. Um
        encarregado externo bem contratado oferece maturidade jurídica e técnica que a
        maioria das PMEs não consegue replicar internamente. Mal contratado, vira ficha
        técnica decorativa que não responde quando a ANPD pergunta.
      </p>
      <p>
        A pergunta correta, portanto, não é &ldquo;vale a pena terceirizar?&rdquo;, mas
        &ldquo;como estruturar a terceirização para que ela cumpra o que a lei e o
        regulamento exigem?&rdquo;. Essa é a discussão que vale ser feita antes da
        contratação — não depois do incidente.
      </p>

      <h2 id="faq">Perguntas frequentes</h2>
      <h3>A pequena empresa é obrigada a ter encarregado de dados?</h3>
      <p>
        Depende do enquadramento. Microempresas e EPPs dentro dos limites da LC
        123/2006, que não realizem tratamento de alto risco e não pertençam a grupo
        econômico maior, estão dispensadas da indicação formal pelo regulamento da
        ANPD (Resolução nº 2/2022), mas precisam manter canal de comunicação com o
        titular. Acima desses limites, a indicação volta a ser obrigatória.
      </p>
      <h3>O encarregado precisa ter formação em Direito?</h3>
      <p>
        Não. A LGPD e a Resolução CD/ANPD nº 18/2024 não exigem inscrição em conselho,
        certificação ou formação específica. Na prática, espera-se conhecimento
        jurídico em proteção de dados e conhecimento técnico em segurança da
        informação — independentemente do diploma de origem.
      </p>
      <h3>O encarregado pode ser pessoa jurídica?</h3>
      <p>
        Sim. O regulamento da ANPD admite expressamente que a função seja exercida por
        pessoa natural ou jurídica. Quando contratada por meio de empresa, o contrato
        deve identificar o profissional responsável pela operação cotidiana da função.
      </p>
      <h3>Posso indicar como encarregado a empresa que já presta serviço de TI ou marketing para a minha?</h3>
      <p>
        Em regra, não. Se a prestadora atua como operadora no fluxo de dados da
        contratante, indicá-la como encarregado configura conflito de interesse vedado
        pelo regulamento da ANPD. O encarregado deve ter autonomia técnica em relação
        às áreas que operam os dados.
      </p>
      <h3>Qual o prazo para indicar encarregado depois de uma autuação da ANPD?</h3>
      <p>
        Não há prazo regulamentar único — a ANPD costuma fixá-lo em cada notificação.
        Mas o ponto relevante é outro: indicar encarregado depois da autuação não
        afasta a sanção pelo descumprimento prévio. A obrigação existe desde a entrada
        em vigor da LGPD.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página de{' '}
        <Link href="/atuacao">Áreas de atuação</Link>{' '}
        reúne as frentes do escritório, incluindo Compliance e LGPD — programa de
        integridade, adequação à LGPD e atuação como encarregado.
      </p>
    </>
  ),

  // ───────────── Rascunho (noindex) — aguardando sign-off do Dr. Jorge ─────────────
  'sindicato-legitimidade-stf': () => (
    <>
      <p>
        A diretoria deliberou. A categoria está exposta a um ato administrativo
        lesivo — uma portaria que altera regra de progressão, um corte de
        gratificação, um edital que muda critérios de seleção interna. O sindicato
        vai a juízo. Semanas depois, na contestação, o ente público levanta a tese
        clássica: o sindicato seria parte ilegítima porque não anexou autorização
        dos substituídos, nem lista nominal dos filiados, nem ata de assembleia
        específica.
      </p>
      <p>
        A pergunta volta sempre na mesma forma: o sindicato precisa de procuração
        para representar a categoria em juízo? A resposta, fixada pelo Supremo
        Tribunal Federal e repetida em centenas de julgados, é <span className="s-it">não</span>{' '}
        — mas com nuances que distinguem o sindicato da associação, da federação e do
        mandado de segurança coletivo. Errar essa fronteira faz o processo coletivo
        morrer na preliminar de ilegitimidade; acertá-la transforma uma única ação no
        instrumento capaz de pacificar a situação de toda a categoria.
      </p>
      <p>
        Este artigo cobre o estado atual da questão no STF, com foco operacional para
        a diretoria sindical e para a assessoria jurídica das entidades.
      </p>

      <nav className="article-toc" aria-label="Sumário">
        <div className="article-toc-title">Sumário</div>
        <ol>
          <li><a href="#base-constitucional">A base constitucional: art. 8º, III, da CF/88</a></li>
          <li><a href="#tema-823">O Tema 823 do STF: a tese de ampla legitimidade extraordinária</a></li>
          <li><a href="#sindicato-vs-associacao">Sindicato ≠ associação: a fronteira do Tema 82</a></li>
          <li><a href="#ms-coletivo">Mandado de segurança coletivo: regra própria (Súmulas 629 e 630)</a></li>
          <li><a href="#limites">Os limites da ampla legitimidade: federações, filiação e base territorial</a></li>
          <li><a href="#boas-praticas">Boas práticas para a diretoria sindical</a></li>
          <li><a href="#faq">Perguntas frequentes</a></li>
        </ol>
      </nav>

      <h2 id="base-constitucional">A base constitucional: <span className="s-it">art. 8º, III, da CF/88</span></h2>
      <p>
        A legitimidade extraordinária do sindicato nasce diretamente da Constituição.
        O art. 8º, III, da CF/88 determina que cabe ao sindicato a defesa dos direitos
        e interesses coletivos ou individuais da categoria, inclusive em questões
        judiciais ou administrativas.
      </p>
      <p>
        A redação é deliberadamente ampla. O constituinte não falou em
        &ldquo;direitos da categoria autorizados em assembleia&rdquo;, nem em
        &ldquo;interesses dos sindicalizados que outorgarem procuração&rdquo;. Falou
        em direitos da categoria — abrangendo, por interpretação consolidada, tanto
        direitos coletivos em sentido estrito quanto direitos individuais homogêneos
        dos integrantes daquele grupo profissional.
      </p>
      <p>
        Essa amplitude tem uma razão histórica. Antes da CF/88, a jurisprudência
        trabalhista tendia a restringir a substituição processual sindical a
        hipóteses específicas previstas em lei — o TST chegou a editar a Súmula 310,
        que limitava drasticamente essa atuação. Com a nova ordem constitucional, o
        STF passou a interpretar o art. 8º, III, como cláusula geral de legitimação
        extraordinária, e o TST, em consequência, cancelou a Súmula 310 em 2003. A
        partir daí, a fronteira foi sendo desenhada nos repetitivos.
      </p>

      <h2 id="tema-823">O Tema 823 do STF: <span className="s-it">a tese de ampla legitimidade</span></h2>
      <p>
        O marco que organiza a matéria é o Tema 823 da repercussão geral, fixado no
        julgamento do RE 883.642, relatado pelo Min. Ricardo Lewandowski (acórdão
        publicado no DJe de 26/06/2015). A tese é direta:
      </p>
      <blockquote>
        &ldquo;Os sindicatos possuem ampla legitimidade extraordinária para defender
        em juízo os direitos e interesses coletivos ou individuais dos integrantes da
        categoria que representam, inclusive nas liquidações e execuções de sentença,
        independentemente de autorização dos substituídos.&rdquo;
        <cite>STF, Tema 823 da repercussão geral — RE 883.642, Rel. Min. Ricardo Lewandowski.</cite>
      </blockquote>
      <p>
        Três dimensões dessa tese precisam ser destacadas — é nelas que o ente público
        costuma testar a defesa.
      </p>
      <p>
        <strong>Primeiro:</strong> a legitimidade é extraordinária — o sindicato atua
        como substituto processual, defendendo em nome próprio direito alheio. Não é
        representação por procuração; por isso, não se exige outorga de mandato dos
        sindicalizados.
      </p>
      <p>
        <strong>Segundo:</strong> a tese alcança tanto direitos coletivos em sentido
        estrito (indivisíveis, da categoria como um todo) quanto direitos individuais
        homogêneos (de origem comum, mas divisíveis e quantificáveis). É essa segunda
        categoria que torna o instrumento poderoso para servidores: gratificações não
        pagas, progressões negadas, parcelas suprimidas — tipicamente homogêneas —
        podem ser cobradas em ação única.
      </p>
      <p>
        <strong>Terceiro:</strong> a legitimidade vai além da fase de conhecimento —
        alcança a liquidação e a execução da sentença coletiva. O sindicato pode
        promover o protesto interruptivo da prescrição em favor da categoria e
        executar o título sem refazer a autorização individual de cada substituído.
      </p>
      <p>
        O Superior Tribunal de Justiça acompanha esse entendimento: reafirma que o
        sindicato, como substituto processual, tem legitimidade para defender
        interesses coletivos de toda a categoria — e não apenas dos filiados —, sendo
        dispensável a juntada de relação nominal e de autorização expressa.
      </p>
      <p>
        Em casos análogos atuados pelo escritório — inclusive em sustentação oral
        perante tribunais superiores — essa moldura tem sido decisiva para superar
        preliminares de ilegitimidade levantadas por entes públicos.
      </p>

      <h2 id="sindicato-vs-associacao">Sindicato ≠ associação: <span className="s-it">a fronteira do Tema 82</span></h2>
      <p>
        A confusão mais comum no processo coletivo é tratar sindicato e associação
        como se fossem regidos pela mesma regra. Não são. A Constituição os disciplina
        em dispositivos diferentes, com requisitos diferentes — e o STF formalizou a
        distinção em outro repetitivo, o Tema 82.
      </p>
      <p>
        No julgamento do RE 573.232/SC, Rel. Min. Marco Aurélio (Plenário, 14/05/2014),
        o STF fixou duas teses sobre associações:
      </p>
      <blockquote>
        &ldquo;I – A previsão estatutária genérica não é suficiente para legitimar a
        atuação, em juízo, de associações na defesa de direitos dos filiados, sendo
        indispensável autorização expressa, ainda que deliberada em assembleia, nos
        termos do art. 5º, XXI, da Constituição Federal; II – As balizas subjetivas do
        título judicial, formalizado em ação proposta por associação, são definidas
        pela representação no processo de conhecimento, limitada a execução aos
        associados apontados na inicial.&rdquo;
        <cite>STF, Tema 82 — RE 573.232/SC, Rel. Min. Marco Aurélio.</cite>
      </blockquote>
      <p>
        Esse Tema 82, complementado pelo Tema 499 (RE 612.043, Min. Marco Aurélio),
        trouxe consequências graves para associações que litigavam apoiadas só em
        cláusula estatutária genérica: ações extintas, execuções limitadas a quem
        constasse da inicial, beneficiários posteriores obrigados a propor ações
        próprias.
      </p>
      <p>A razão jurídica dessa diferença é constitucional. O STF resumiu com precisão:</p>
      <blockquote>
        &ldquo;A legitimidade das entidades associativas para promover demandas em
        favor de seus associados tem assento no art. 5º, XXI, da Constituição, e a das
        entidades sindicais está disciplinada no art. 8º, III. Todavia, em se tratando
        de entidades associativas, a Constituição subordina a propositura da ação a um
        requisito específico, que não existe em relação aos sindicatos: o de estarem
        essas associações &lsquo;expressamente autorizadas&rsquo; a demandar.&rdquo;
        <cite>Supremo Tribunal Federal.</cite>
      </blockquote>
      <p>
        A consequência prática é clara: ao examinar a legitimidade ativa numa ação
        coletiva, o ponto de partida não é o estatuto da entidade autora — é o artigo
        da Constituição que a fundamenta. Sindicato vai pelo art. 8º, III: substituição
        processual, sem autorização. Associação vai pelo art. 5º, XXI: representação,
        com autorização expressa.
      </p>
      <p>
        Para a diretoria de uma entidade híbrida (uma &ldquo;associação dos servidores
        de…&rdquo; que, na prática, exerce papel sindical), essa distinção é o primeiro
        nó a desatar. Antes de litigar, vale revisar o registro sindical, o
        enquadramento e o que o estatuto diz sobre a natureza jurídica da entidade.
      </p>

      <h2 id="ms-coletivo">Mandado de segurança coletivo: <span className="s-it">regra própria</span></h2>
      <p>
        Há um terceiro regime, distinto dos anteriores, que vale tanto para sindicato
        quanto para associação: o mandado de segurança coletivo, previsto no art. 5º,
        LXX, da CF/88 e regulado pela Lei 12.016/2009.
      </p>
      <p>
        Aqui a regra é a da substituição processual pura, independentemente da natureza
        da entidade impetrante. Duas súmulas do STF — anteriores à atual lei do MS, mas
        plenamente vigentes — sintetizam o entendimento:
      </p>
      <blockquote>
        &ldquo;A impetração de mandado de segurança coletivo por entidade de classe em
        favor dos associados independe da autorização destes.&rdquo;
        <cite>Súmula 629 do STF.</cite>
      </blockquote>
      <blockquote>
        &ldquo;A entidade de classe tem legitimação para o mandado de segurança ainda
        quando a pretensão veiculada interesse apenas a uma parte da respectiva
        categoria.&rdquo;
        <cite>Súmula 630 do STF.</cite>
      </blockquote>
      <p>
        A Lei 12.016/2009, posterior aos enunciados, incorporou a regra no art. 21:
        organização sindical, entidade de classe ou associação legalmente constituída
        há pelo menos um ano, em defesa dos interesses de seus membros, não precisa de
        autorização especial. O STF reafirmou esse regime no Tema 1.119, esclarecendo
        que, no MS coletivo, não se exige autorização expressa, lista nominal nem
        comprovação de filiação prévia — por se tratar de substituição processual,
        distinta das ações coletivas ordinárias do Tema 82.
      </p>
      <p>
        Para o sindicato, isso significa que o MS coletivo é uma rota processual com
        menor risco de preliminar de ilegitimidade. Quando o ato impugnado é ato de
        autoridade pública e cabe pedido liminar, costuma ser a via mais eficiente.
      </p>

      <h2 id="limites">Os limites da ampla legitimidade: <span className="s-it">federações, filiação e base territorial</span></h2>
      <p>
        A tese do Tema 823 é ampla, mas não é ilimitada. Três pontos merecem atenção da
        diretoria e do jurídico da entidade.
      </p>
      <h3>Federações sindicais: tema constitucional em aberto</h3>
      <p>
        A jurisprudência tradicional do STF é restritiva quanto às federações. A
        literalidade do art. 8º, III, refere-se a &ldquo;sindicato&rdquo;, e os
        precedentes, em geral, recusam estender a legitimidade extraordinária para
        defesa coletiva da categoria às federações.
      </p>
      <p>
        O assunto, contudo, está sendo reapreciado. Em janeiro de 2025, o STF admitiu o
        processamento do RE 1.520.376, em que se discute a legitimidade extraordinária
        das federações sindicais para propor ações coletivas quando não houver
        sindicato representativo da categoria na região. A repercussão geral foi
        reconhecida sob relatoria do Min. Roberto Barroso; o mérito ainda não foi
        julgado.
      </p>
      <p>
        Até que o STF decida, a orientação prudente para federações é, sempre que
        possível, articular a propositura com os sindicatos filiados de base, ou
        recorrer ao mandado de segurança coletivo, cujas Súmulas 629 e 630 admitem
        entidades de classe em sentido amplo.
      </p>
      <h3>Filiação à época da propositura: o ponto sensível da execução</h3>
      <p>
        Embora o Tema 823 dispense autorização e lista nominal para a ação de
        conhecimento, alguns tribunais têm exigido, para fins de execução individual, a
        comprovação de que o beneficiário pertencia à categoria à época do ajuizamento
        da ação coletiva. O TJDFT, por exemplo, admite a exigência de comprovação de
        filiação dos substituídos à época da propositura para aferir a legitimidade dos
        beneficiários da execução.
      </p>
      <p>
        É questão controvertida, com entendimentos distintos entre turmas e tribunais.
        O posicionamento dominante no STJ, todavia, é o de que a substituição processual
        sindical abrange toda a categoria, não apenas os filiados — fiel à letra do art.
        8º, III. Em casos limítrofes, a estratégia precisa ser construída desde a
        petição inicial, deixando explícito o pedido em favor da categoria.
      </p>
      <h3>Base territorial e enquadramento</h3>
      <p>
        A legitimidade do sindicato é vinculada à sua base territorial e ao
        enquadramento da categoria. Um sindicato municipal não defende servidores de
        outro município; um de servidores estaduais não substitui federais; e um de
        certa categoria não substitui categoria diversa, ainda que próxima.
      </p>
      <p>
        Essa fronteira costuma aparecer em sindicatos com estatutos que abrangem
        múltiplas categorias correlatas, ou em disputas de representatividade. Antes de
        propor a ação, confirme com o jurídico se o pleito está dentro da base
        territorial registrada e da categoria efetivamente representada.
      </p>

      <h2 id="quadro">Quadro comparativo <span className="s-it">dos três regimes</span></h2>
      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>Sindicato (art. 8º, III)</th>
              <th>Associação (art. 5º, XXI)</th>
              <th>MS coletivo (art. 5º, LXX)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Natureza da atuação</td><td>Substituição processual</td><td>Representação processual</td><td>Substituição processual</td></tr>
            <tr><td>Autorização dos beneficiários</td><td>Dispensada</td><td>Expressa (assembleia ou individual)</td><td>Dispensada</td></tr>
            <tr><td>Lista nominal na inicial</td><td>Dispensada</td><td>Necessária</td><td>Dispensada</td></tr>
            <tr><td>Repetitivo / súmula</td><td>Tema 823 (RE 883.642)</td><td>Temas 82 e 499 (RE 573.232 e RE 612.043)</td><td>Súmulas 629 e 630; Tema 1.119</td></tr>
            <tr><td>Beneficiários da execução</td><td>Toda a categoria</td><td>Apenas associados listados na inicial</td><td>Toda a categoria substituída</td></tr>
            <tr><td>Direitos abrangidos</td><td>Coletivos e individuais homogêneos</td><td>Coletivos e individuais (limitados)</td><td>Coletivos e individuais homogêneos</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="boas-praticas">Boas práticas para a diretoria sindical</h2>
      <p>
        A partir desse quadro, sete cuidados operacionais reduzem o risco de extinção
        por ilegitimidade ativa:
      </p>
      <ol>
        <li><strong>Confirme a natureza jurídica da entidade antes de litigar.</strong> Sindicato com registro regular ou associação civil? A resposta define o regime aplicável.</li>
        <li><strong>Verifique a base territorial e o enquadramento</strong> no estatuto e no registro. A legitimidade não vai além desses limites.</li>
        <li><strong>Opte pelo mandado de segurança coletivo</strong> quando o ato impugnado for de autoridade pública e couber liminar — é a via com menos preliminares de ilegitimidade.</li>
        <li><strong>Em ações ordinárias, fundamente a inicial</strong> expressamente no art. 8º, III, da CF/88 e no Tema 823/STF, deixando claro que a substituição abrange a categoria, não só filiados.</li>
        <li><strong>Convoque assembleia geral específica em caso de dúvida.</strong> A ata não é exigida do sindicato, mas reforça o lastro de representatividade e impede questionamento posterior.</li>
        <li><strong>Documente a deliberação da diretoria em ata regular,</strong> com indicação precisa do objeto da ação, do ato impugnado e do fundamento jurídico.</li>
        <li><strong>Planeje a execução desde a propositura.</strong> Em alguns tribunais, a fronteira &ldquo;categoria × filiados à época&rdquo; é controvertida — quanto mais claro o pedido inicial, menor o atrito na liquidação.</li>
      </ol>

      <h2 id="consideracoes">Considerações finais: <span className="s-it">defesa da categoria com técnica processual</span></h2>
      <p>
        A ampla legitimidade extraordinária do sindicato é um dos pilares da tutela
        coletiva no Brasil pós-1988. O Supremo consolidou essa amplitude no Tema 823 e
        a manteve em centenas de julgados. Mas a regra ampla convive com bordas
        precisas — a fronteira com a associação (Tema 82), a regra própria do MS
        coletivo (Súmulas 629 e 630; Tema 1.119), o regime ainda aberto das federações
        (RE 1.520.376) e os pontos de atrito na execução.
      </p>
      <p>
        Para a entidade sindical, dominar essa cartografia é o que separa uma ação
        coletiva que pacifica a situação da categoria em poucos anos de uma ação que
        morre na preliminar e empurra os filiados para o caminho individual — mais
        caro, mais lento, processualmente fragmentado.
      </p>
      <p>
        A produção de jurisprudência nessa matéria não acabou: com o RE 1.520.376
        pendente sobre federações e o debate vivo sobre os limites territoriais e
        temporais da substituição, o tema seguirá em evolução. Acompanhar essa
        evolução, mais do que ler a súmula, é o que estrutura a defesa institucional do
        sindicato.
      </p>

      <h2 id="faq">Perguntas frequentes</h2>
      <h3>O sindicato precisa juntar procuração de cada sindicalizado para propor ação coletiva?</h3>
      <p>
        Não. Pelo Tema 823 do STF, a legitimidade do sindicato é extraordinária — ele
        atua em nome próprio na defesa de direito alheio. Procuração individual só é
        exigida quando o sindicalizado figura pessoalmente como parte, não na
        substituição processual.
      </p>
      <h3>Se a entidade for &ldquo;associação&rdquo;, não &ldquo;sindicato&rdquo;, muda alguma coisa?</h3>
      <p>
        Muda muito. Associações regem-se pelo art. 5º, XXI, e pelo Tema 82: precisam de
        autorização expressa dos associados, em assembleia ou individualmente, e a
        execução fica limitada aos que constarem da inicial. Antes de litigar, confirme
        a natureza jurídica da entidade no estatuto e no registro.
      </p>
      <h3>E no mandado de segurança coletivo?</h3>
      <p>
        Aqui a regra é única para sindicato e associação: dispensa-se autorização, lista
        nominal e filiação prévia. As Súmulas 629 e 630 do STF e o art. 21 da Lei
        12.016/2009 garantem essa amplitude — confirmada pelo Tema 1.119.
      </p>
      <h3>O servidor que se filiou depois da propositura da ação se beneficia do resultado?</h3>
      <p>
        A regra geral, decorrente da substituição processual, é que a ação defende a
        categoria, não apenas os filiados. A jurisprudência majoritária do STJ admite
        que o servidor da categoria, ainda que filiado depois, se beneficie da sentença
        coletiva. Decisões pontuais de tribunais estaduais exigem comprovação de
        filiação à época da propositura para fins de execução — o ponto deve ser
        articulado caso a caso.
      </p>
      <h3>Federação sindical pode propor ação coletiva pela categoria?</h3>
      <p>
        A jurisprudência tradicional do STF é restritiva. Em janeiro de 2025, o Supremo
        admitiu repercussão geral sobre o tema no RE 1.520.376, para discutir se as
        federações têm legitimidade quando não há sindicato representativo na região.
        Até a definição do mérito, a via mais segura para federações é o mandado de
        segurança coletivo ou a propositura em conjunto com os sindicatos filiados de
        base.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página de{' '}
        <Link href="/atuacao/entidades-sindicais">Entidades Sindicais e Associativas</Link>{' '}
        reúne a atuação do escritório na assessoria a sindicatos e associações — da
        consultoria preventiva à sustentação em tribunais superiores.
      </p>
    </>
  ),

  // ───────────── Publicado ─────────────
  'lei-licitacoes-fiscalizacao': () => (
    <>
      <p>
        A portaria chega por e-mail ou cai na pasta funcional sem grande cerimônia.
        Em poucas linhas, a autoridade designa o servidor como fiscal de um contrato
        administrativo — uma obra, um serviço continuado, uma aquisição. Pode vir
        junto com a designação como gestor, pode vir solitária, pode valer para um
        único contrato ou para uma carteira inteira. O que muitos servidores ainda
        não internalizaram é que, sob a Lei 14.133/2021, aquele ato aparentemente
        burocrático passou a ativar um regime de responsabilização pessoal
        substancialmente mais rigoroso que o da Lei 8.666/93.
      </p>
      <p>
        Este artigo trata da figura do fiscal de contrato administrativo — servidor
        público civil ou militar, federal, estadual ou municipal, designado para
        acompanhar a execução de contrato sob a nova lei. Não se confunde com o
        auditor fiscal tributário nem com o fiscal de obras urbanísticas: o recorte
        aqui é o agente que assina o relatório de fiscalização, atesta nota fiscal e
        responde — pessoalmente — quando algo desanda.
      </p>

      <nav className="article-toc" aria-label="Sumário">
        <div className="article-toc-title">Sumário</div>
        <ol>
          <li><a href="#secao-1">O que mudou: do &ldquo;olho gordo&rdquo; à função profissionalizada</a></li>
          <li><a href="#secao-2">Gestor, fiscal técnico, fiscal administrativo: quem faz o quê</a></li>
          <li><a href="#secao-3">As atribuições legais na prática</a></li>
          <li><a href="#secao-4">O regime de responsabilização: dolo e erro grosseiro</a></li>
          <li><a href="#secao-5">Lei 8.666 vs. Lei 14.133: o que mudou para o fiscal</a></li>
          <li><a href="#secao-6">Cenários típicos de exposição pessoal</a></li>
          <li><a href="#secao-7">Boas práticas para reduzir a exposição</a></li>
        </ol>
      </nav>

      <h2 id="secao-1">O que mudou: <span className="s-it">do &ldquo;olho gordo&rdquo; à função profissionalizada</span></h2>
      <p>
        Na vigência da Lei 8.666/93, a fiscalização de contrato era tratada quase como
        atribuição secundária — algo que o servidor exercia &ldquo;além das suas
        funções normais&rdquo;, com pouca capacitação formal e responsabilização
        concentrada nas hipóteses extremas. O resultado, conhecido por quem atuou em
        PADs e tomadas de contas, era previsível: o fiscal aparecia no centro do
        processo só quando o estrago já estava feito, e a defesa partia de um vazio
        probatório quase total.
      </p>
      <p>
        A Lei 14.133/2021 reposicionou a figura. A fiscalização foi inserida desde o
        planejamento da contratação — não é mais uma etapa que começa na assinatura do
        contrato. A capacitação do fiscal passou a ser exigência expressa: o art. 7º
        determina que a designação recaia, preferencialmente, sobre servidor efetivo
        do quadro permanente, observada a capacidade para o desempenho das atividades.
        As atribuições foram organizadas nos arts. 117 a 120, e o regime de
        responsabilização ficou tecnicamente mais robusto — o que pode ser lido tanto
        como mais proteção (parâmetro objetivo de aferição) quanto como mais exposição
        (impossibilidade de alegar simples desconhecimento).
      </p>
      <p>
        No âmbito federal, o Decreto 11.246/2022 detalhou as atribuições do gestor, do
        fiscal técnico, do fiscal administrativo e do fiscal setorial. Estados e
        municípios editaram regulamentos próprios, com variações relevantes — e o
        fiscal designado precisa, antes de qualquer ato, ler o seu.
      </p>

      <h2 id="secao-2">Gestor, fiscal técnico, fiscal administrativo: <span className="s-it">quem faz o quê</span></h2>
      <p>
        Uma das inovações mais subestimadas da nova lei é a segregação de funções na
        execução contratual. Onde antes uma única pessoa carregava todo o peso, agora a
        Administração pode — e, em contratos complexos, deve — distribuir o trabalho
        entre figuras distintas:
      </p>
      <ul>
        <li><strong>Gestor de contrato.</strong> Coordena administrativamente a execução: cronograma físico-financeiro, pagamentos, aditivos e apostilamentos, recebimento definitivo. Atua na camada documental e processual.</li>
        <li><strong>Fiscal técnico.</strong> Verifica em campo se o objeto está sendo entregue conforme as especificações. Atesta medições, registra ocorrências, notifica formalmente o contratado. É o agente que &ldquo;vê&rdquo; a execução.</li>
        <li><strong>Fiscal administrativo.</strong> Acompanha a regularidade da contratada durante a execução: condições de habilitação, recolhimento de encargos trabalhistas e previdenciários, garantia contratual. Central em serviços continuados com cessão de mão de obra.</li>
        <li><strong>Fiscal setorial.</strong> Quando o contrato tem execução geograficamente dispersa, atua localmente em substituição parcial do fiscal técnico.</li>
      </ul>
      <p>
        A acumulação de funções é admitida em contratos de menor complexidade, mas o
        TCU aponta, em sucessivas representações, que a acumulação indevida é, em si,
        fator de fragilização da fiscalização — e fragilidade fiscalizatória é o
        gatilho clássico da responsabilização pessoal. O servidor designado para
        acumular gestor e fiscal técnico em contrato de grande porte, sem capacitação
        adequada, já começa exposto perante o controle externo.
      </p>

      <h2 id="secao-3">As atribuições legais na prática</h2>
      <p>O art. 117 da Lei 14.133/2021 estrutura a função em três comandos:</p>
      <blockquote>
        Art. 117. A execução do contrato deverá ser acompanhada e fiscalizada por um ou
        mais fiscais do contrato, representantes da Administração especialmente
        designados conforme requisitos estabelecidos no art. 7º desta Lei, ou pelos
        respectivos substitutos, permitida a contratação de terceiros para assisti-los
        e subsidiá-los com informações pertinentes a essa atribuição.
        <span style={{ display: 'block', marginTop: 8 }}>§ 1º O fiscal do contrato anotará em registro próprio todas as ocorrências relacionadas à execução do contrato, determinando o que for necessário para a regularização das faltas ou dos defeitos observados.</span>
        <span style={{ display: 'block', marginTop: 8 }}>§ 2º O fiscal do contrato informará a seus superiores, em tempo hábil para a adoção das medidas convenientes, as situações que demandarem decisões e providências que ultrapassarem sua competência.</span>
        <cite>Lei 14.133/2021, art. 117.</cite>
      </blockquote>
      <p>Três obrigações concretas saltam do texto e organizam o dia a dia da função:</p>
      <p>
        <strong>Registrar.</strong> Todas as ocorrências — favoráveis e desfavoráveis —
        devem ser anotadas em livro próprio, sistema eletrônico ou relatório periódico.
        O registro é, ao mesmo tempo, instrumento de gestão e blindagem jurídica.
        Ocorrência não registrada é, para o controle externo, ocorrência que não
        existiu — e a omissão tem sido tratada pelo TCU como conduta autônoma de
        responsabilização.
      </p>
      <p>
        <strong>Determinar a regularização.</strong> Identificada uma falha, o fiscal
        não pode se limitar a observar: deve notificar formalmente o contratado, fixar
        prazo de correção e documentar a resposta. A notificação é prova essencial em
        qualquer defesa posterior.
      </p>
      <p>
        <strong>Escalar para o superior.</strong> Quando a situação ultrapassa a
        competência do fiscal — sanção, rescisão, reequilíbrio econômico-financeiro —, o
        dever é comunicar o gestor e a autoridade superior em tempo hábil. A omissão é,
        isoladamente, falta funcional punível.
      </p>

      <h2 id="secao-4">O regime de responsabilização: <span className="s-it">dolo e erro grosseiro</span></h2>
      <p>
        A peça-chave da arquitetura de responsabilização é o art. 28 da LINDB,
        introduzido pela Lei 13.655/2018:
      </p>
      <blockquote>
        &ldquo;O agente público responderá pessoalmente por suas decisões ou opiniões
        técnicas em caso de dolo ou erro grosseiro.&rdquo;
        <cite>Art. 28 da LINDB (Lei 13.655/2018).</cite>
      </blockquote>
      <p>
        O Decreto 9.830/2019, no art. 12, § 1º, conceitua erro grosseiro como aquele
        &ldquo;manifesto, evidente e inescusável praticado com culpa grave,
        caracterizada por ação ou omissão com elevado grau de negligência, imprudência
        ou imperícia&rdquo;. Não é qualquer descuido: é o descuido que um profissional
        médio da área, nas circunstâncias concretas, não cometeria.
      </p>
      <p>
        O parâmetro tem duas leituras, e o fiscal precisa conhecer ambas. De um lado,
        protege: a responsabilização não pode ser objetiva, depende de prova de dolo ou
        culpa grave, e o controle externo tem o ônus de demonstrar concretamente a
        inobservância do dever de cuidado. De outro, expõe: o TCU tem caracterizado como
        erro grosseiro condutas que, à primeira vista, pareciam meros descuidos
        administrativos.
      </p>
      <p>
        O caso mais frequente é o atesto indevido: o fiscal assina relatório ou
        certifica nota fiscal afirmando que o serviço foi executado, quando a execução
        não ocorreu — ou ocorreu de forma diversa da contratada. Na ausência de
        elementos probatórios mínimos (medições, fotografias, relatórios de vistoria,
        ordens de serviço), o tribunal tem entendido que a deficiência na fiscalização é
        a causa determinante do prejuízo ao erário e configura erro grosseiro,
        sujeitando o agente a devolução do dano e a multa.
      </p>
      <p>
        Importante: a responsabilização do fiscal pode ocorrer em esferas simultâneas e
        autônomas — administrativa-disciplinar (o PAD do servidor), de controle externo
        (Tomada de Contas Especial no TCU ou no TCE-RJ, com multa e ressarcimento) e
        civil (ação de regresso da Fazenda, art. 37, § 6º, da Constituição). Em
        hipóteses extremas — fraude, conluio, recebimento de vantagem — somam-se a
        esfera penal e a improbidade administrativa.
      </p>

      <h2 id="secao-5">Lei 8.666 vs. Lei 14.133: <span className="s-it">o que mudou para o fiscal</span></h2>
      <div className="article-table">
        <table>
          <thead>
            <tr><th>Aspecto</th><th>Lei 8.666/93 (anterior)</th><th>Lei 14.133/21 (atual)</th></tr>
          </thead>
          <tbody>
            <tr><td>Profissionalização</td><td>Função acessória, sem exigência de capacitação</td><td>Exigência de competência técnica (art. 7º)</td></tr>
            <tr><td>Segregação de funções</td><td>Gestor e fiscal frequentemente confundidos</td><td>Distinção formal: gestor, fiscal técnico, administrativo e setorial</td></tr>
            <tr><td>Registro de ocorrências</td><td>Recomendado, sem detalhamento</td><td>Obrigatório, em livro ou sistema próprio (art. 117, § 1º)</td></tr>
            <tr><td>Capacitação</td><td>Inexistente como exigência legal</td><td>Decorrente do dever de gestão por competências (art. 7º)</td></tr>
            <tr><td>Suporte técnico</td><td>Não previsto expressamente</td><td>Contratação de terceiros para assistir o fiscal (art. 117)</td></tr>
            <tr><td>Parâmetro de responsabilização</td><td>Construção jurisprudencial difusa</td><td>Art. 28 da LINDB: dolo ou erro grosseiro</td></tr>
            <tr><td>Recebimento provisório e definitivo</td><td>Confuso na prática</td><td>Distinção clara entre fiscal (provisório) e gestor (definitivo)</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        A nova lei oferece, em tese, mais proteção ao fiscal diligente — porque
        consagrou o parâmetro do dolo ou erro grosseiro, vedou a responsabilização
        objetiva e admitiu suporte técnico externo. Mas expõe muito mais o fiscal
        negligente — porque deixou as obrigações claras, formalizadas e auditáveis. Em
        resumo: o regime atual recompensa quem documenta e pune quem improvisa.
      </p>

      <h2 id="secao-6">Cenários típicos de <span className="s-it">exposição pessoal</span></h2>
      <p>
        Em mais de três décadas de atuação em PADs, sindicâncias e defesas perante o TCU
        e o TCE-RJ, o escritório identifica três padrões recorrentes de exposição do
        fiscal de contrato. Vale conhecê-los antes do problema aparecer.
      </p>
      <p>
        <strong>Atesto sem lastro.</strong> O fiscal certifica a execução para liberar
        pagamento sem realizar (ou sem registrar) a vistoria correspondente. Quando a
        auditoria identifica obra inacabada, serviço não prestado ou objeto fora de
        especificação, o atesto se converte em prova contra o agente — e o tribunal
        costuma reconhecer o erro grosseiro, sobretudo quando o fiscal tinha qualificação
        técnica para identificar a falha.
      </p>
      <p>
        <strong>Omissão diante de inadimplemento de encargos.</strong> Em contratos de
        terceirização com cessão de mão de obra, o fiscal administrativo deve acompanhar
        o recolhimento de encargos trabalhistas e previdenciários. Não o fazendo, a
        Administração pode ser chamada à responsabilidade subsidiária pela Justiça do
        Trabalho (Súmula 331 do TST) — e o servidor responsável pela falha responde em
        regresso e na esfera disciplinar.
      </p>
      <p>
        <strong>Designação sem capacitação técnica adequada.</strong> O servidor é
        designado para fiscalizar objeto que excede sua qualificação — um servidor
        administrativo nomeado fiscal de obra de engenharia, por exemplo. O erro original
        é da autoridade designante, mas o fiscal que aceita e atua sem requerer suporte
        técnico assume parcela do risco. A defesa, aqui, depende de demonstrar
        formalmente que o servidor advertiu a chefia sobre a inadequação — e a
        advertência precisa estar documentada.
      </p>

      <h2 id="secao-7">Boas práticas para <span className="s-it">reduzir a exposição</span></h2>
      <p>
        Receber a designação não obriga a aceitar o risco em silêncio. Sete medidas
        costumam fazer diferença:
      </p>
      <ol>
        <li><strong>Leia a portaria com olho técnico.</strong> Verifique o escopo da designação (gestor, fiscal técnico, administrativo, setorial), o substituto, o prazo e o contrato específico. Designação genérica é fonte de problema.</li>
        <li><strong>Solicite formalmente a capacitação prevista em lei.</strong> Se a Administração designa sem oferecer treinamento, o pedido por escrito desloca o ônus para a autoridade designante.</li>
        <li><strong>Advirta sobre incompatibilidade técnica, se houver.</strong> Por memorando, com cópia para a chefia. Negado o pedido, o servidor passa a atuar com lastro probatório de boa-fé.</li>
        <li><strong>Mantenha registro contínuo e organizado.</strong> Diário de fiscalização, fotografias datadas, e-mails arquivados, atas, ordens de serviço. O sistema oficial é o primeiro destino; o backup pessoal é a sua proteção.</li>
        <li><strong>Não atesta sem vistoria documentada.</strong> Cada atesto deve ter ao menos uma evidência objetiva por trás. Atesto &ldquo;no automático&rdquo; é a fonte número um de exposição.</li>
        <li><strong>Notifique formalmente o contratado a cada irregularidade.</strong> Não basta conversar: comunicação por escrito, com prazo e protocolo. Sem notificação, a inadimplência da contratada vira omissão fiscalizatória do servidor.</li>
        <li><strong>Escalone na hora certa.</strong> Quando a situação ultrapassa a sua alçada, comunique por escrito o gestor e a autoridade superior. O dever do art. 117, § 2º, é também escudo.</li>
      </ol>

      <h2 id="consideracoes">Defesa técnica, <span className="s-it">não improvisação</span></h2>
      <p>
        A figura do fiscal de contrato deixou de ser papel coadjuvante. Sob a Lei
        14.133/2021, o servidor designado opera no centro de um regime de
        responsabilização tecnicamente sofisticado, com parâmetros claros de aferição do
        dolo e do erro grosseiro, instrumentos de controle externo robustos e múltiplas
        esferas de responsabilidade que podem ser ativadas em paralelo.
      </p>
      <p>
        A boa notícia é que esse mesmo regime, lido a favor do servidor diligente,
        oferece linhas de defesa muito mais claras do que o regime difuso da lei
        anterior. O fiscal que documenta, notifica, escalona e registra — e que age
        dentro do marco do art. 28 da LINDB — tem hoje um arsenal probatório que era
        impensável há dez anos.
      </p>
      <p>
        Quando uma Tomada de Contas Especial chega ao TCU ou ao TCE-RJ, ou quando se
        instaura PAD por suposta omissão fiscalizatória, a defesa raramente se constrói
        no calor do problema. Ela se constrói nos anos anteriores — no diário de
        fiscalização que ninguém leu, no e-mail arquivado, na notificação protocolada. A
        advocacia entra para articular juridicamente o que o servidor já fez bem, ou para
        reconstruir, dentro do possível, o que faltou. As duas situações são tratáveis; a
        primeira é, simplesmente, muito mais defensável.
      </p>

      <h2 id="faq">Perguntas frequentes</h2>
      <h3>Posso recusar a designação como fiscal de contrato?</h3>
      <p>
        Em regra, não — a função decorre do vínculo funcional e o servidor designado tem
        o dever de aceitar. O que pode (e, em alguns casos, deve) fazer é apresentar
        formalmente as razões de inadequação (sobrecarga, ausência de capacitação,
        conflito de interesse), por escrito, à autoridade designante. A recusa motivada
        desloca o ônus para a Administração; a recusa pura e simples pode configurar
        falta funcional.
      </p>
      <h3>Sou fiscal técnico e o gestor autorizou pagamento de medição que considero incorreta. Quem responde?</h3>
      <p>
        Em princípio, cada um responde pelos atos próprios. Se o fiscal técnico registrou
        formalmente sua discordância antes do pagamento (memorando, e-mail, ata), a
        responsabilidade pela liberação tende a recair sobre o gestor e a autoridade
        superior. Sem registro formal, a tese da discordância fica fragilizada. A
        documentação prévia é essencial.
      </p>
      <h3>O TCU pode me responsabilizar mesmo eu não tendo recebido vantagem?</h3>
      <p>
        Sim. A responsabilização pelo Tribunal de Contas não exige enriquecimento ilícito
        nem dolo de vantagem pessoal: basta a comprovação de conduta culposa grave, de
        dano ao erário e de nexo causal entre a omissão fiscalizatória e o prejuízo.
      </p>
      <h3>Quanto tempo o TCU tem para abrir uma Tomada de Contas Especial?</h3>
      <p>
        A pretensão de ressarcimento ao erário é imprescritível quando decorre de ato
        doloso de improbidade (STF, Tema 897). Nos demais casos há prazos prescricionais,
        que variam conforme a natureza da imputação. Na prática, contratos de execução
        prolongada podem gerar processos de controle anos depois — mais um motivo para
        conservar pessoalmente cópia da documentação produzida.
      </p>
      <h3>Posso contratar advogado por conta própria para acompanhar uma TCE ou PAD?</h3>
      <p>
        Sim. Embora o procedimento admita defesa pessoal, a complexidade técnica do
        processo perante tribunais de contas e em PADs sobre contratos administrativos
        torna a assistência de advogado especializado recomendável desde a notificação
        inicial — não apenas na fase recursal.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página de{' '}
        <Link href="/atuacao/administracao-publica">Administração Pública</Link>{' '}
        reúne a atuação do escritório em licitações e contratos sob a Lei 14.133,
        sanções e defesa em tomada de contas no TCU e no TCE-RJ.
      </p>
    </>
  ),

  // ───────────── Publicado ─────────────
  'holding-familiar-3-perguntas': () => (
    <>
      <p>
        A consulta costuma chegar mais ou menos assim: &ldquo;Ouvi falar que, se eu
        colocar tudo numa holding, meus filhos não pagam inventário e meu patrimônio
        fica protegido contra qualquer credor.&rdquo; A frase contém três promessas —
        economia de imposto, agilidade sucessória e blindagem patrimonial — e cada uma
        delas é verdadeira até certo ponto, falsa em outros, e completamente equivocada
        quando a estrutura é desenhada sem propósito.
      </p>
      <p>
        A holding familiar é, há décadas, um dos instrumentos mais úteis do planejamento
        patrimonial e sucessório no Brasil. Mas é também um dos mais vendidos como
        solução universal — e isso tem consequências caras quando o desenho não
        corresponde à realidade da família. Antes de assinar contrato social,
        integralizar imóveis e doar quotas aos herdeiros, três perguntas precisam de
        resposta honesta. Este artigo trata exatamente delas.
      </p>

      <nav className="article-toc" aria-label="Sumário">
        <div className="article-toc-title">Sumário</div>
        <ol>
          <li><a href="#secao-1">O que é, afinal, uma holding familiar</a></li>
          <li><a href="#secao-2">Pergunta 1 — A holding resolve o problema que você tem?</a></li>
          <li><a href="#secao-3">Pergunta 2 — A holding cabe no seu patrimônio?</a></li>
          <li><a href="#secao-4">Pergunta 3 — A holding sobrevive à sua família?</a></li>
          <li><a href="#secao-5">Quadro comparativo: holding × outras vias</a></li>
          <li><a href="#secao-6">Boas práticas antes de constituir</a></li>
          <li><a href="#consideracoes-finais">Considerações finais</a></li>
          <li><a href="#faq">Perguntas frequentes</a></li>
        </ol>
      </nav>

      <h2 id="secao-1">O que é, afinal, <span className="s-it">uma holding familiar</span></h2>
      <p>
        Tecnicamente, holding familiar é uma sociedade — em regra uma{' '}
        <strong>sociedade limitada</strong>, regida pelos arts. 1.052 e seguintes do{' '}
        <a href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" target="_blank" rel="noopener">Código Civil</a>,
        eventualmente uma sociedade anônima fechada — constituída com a finalidade
        principal de <strong>deter participações em outras sociedades ou bens</strong>{' '}
        (imóveis, aplicações financeiras, marcas) pertencentes a um mesmo núcleo
        familiar.
      </p>
      <p>
        O termo &ldquo;holding&rdquo; vem do verbo inglês <span className="s-it">to hold</span>{' '}
        — segurar, deter. Não é um tipo societário próprio; é uma <strong>função</strong>{' '}
        que uma sociedade convencional pode exercer: centralizar a titularidade do
        patrimônio familiar em uma pessoa jurídica, de modo que a transmissão entre
        gerações ocorra pela circulação de quotas, e não pela circulação dos bens em si.
      </p>
      <p>
        A partir dessa função central, a holding serve a finalidades distintas que
        costumam aparecer misturadas no discurso comercial — e essa mistura é a raiz da
        maior parte dos arrependimentos. Em essência, usa-se a holding para três coisas,
        que podem (ou não) coincidir no mesmo desenho:
      </p>
      <ul>
        <li><strong>Planejamento sucessório</strong>, antecipando a partilha por doação de quotas em vida, geralmente com reserva de usufruto.</li>
        <li><strong>Eficiência tributária</strong>, sobretudo quando há imóveis locados — a tributação dos aluguéis em pessoa jurídica, no lucro presumido, costuma ser inferior à do IR da pessoa física.</li>
        <li><strong>Organização patrimonial e governança</strong>, regulando por contrato social e acordo de sócios como as decisões sobre os bens da família serão tomadas após a morte do fundador.</li>
      </ul>
      <p>
        Note que <strong>blindagem patrimonial absoluta não está na lista</strong> — e há
        boa razão jurídica para isso, retomada na Pergunta 3.
      </p>

      <h2 id="secao-2">Pergunta 1 — <span className="s-it">A holding resolve o problema que você tem?</span></h2>
      <p>
        Esta é a pergunta que poucas conversas iniciais fazem com seriedade. Antes de
        discutir tipo societário, integralização de capital e cláusulas restritivas, o
        que importa é diagnosticar: qual é o <strong>problema concreto</strong> que se
        pretende resolver?
      </p>
      <h3>Se o problema é evitar inventário longo e caro</h3>
      <p>
        A holding ajuda, mas não substitui o ato de partilha. A doação de quotas em vida,
        com reserva de usufruto, transfere a nua-propriedade aos herdeiros enquanto o
        doador mantém o uso, a administração e os frutos. Quando o usufrutuário falece, a
        consolidação da propriedade ocorre <strong>sem novo fato gerador de ITCMD</strong>{' '}
        na maior parte dos estados, inclusive no Rio de Janeiro (Lei Estadual 7.174/2015)
        — e essa é, em geral, a economia mais relevante do desenho.
      </p>
      <p>
        Mas há um custo de entrada: a <strong>doação das quotas em vida é fato gerador de
        ITCMD</strong> no momento da transferência. No Rio de Janeiro, a alíquota é
        progressiva e pode chegar a 8%. Em vez de pagar imposto sobre herança no futuro,
        paga-se sobre a doação no presente. A vantagem comparativa existe quando se espera
        <strong> valorização do patrimônio</strong> entre a doação e o falecimento —
        porque o ITCMD incide sobre o valor de hoje, não sobre o do dia da morte.
      </p>
      <p>
        A reforma tributária da <strong>EC 132/2023</strong> tornou a progressividade do
        ITCMD obrigatória em todos os estados, encerrando o cenário em que estados de
        alíquota fixa baixa viabilizavam estruturas que hoje, com a progressividade até
        8%, exigem reavaliação. Para patrimônios com expectativa de crescimento, a
        antecipação ainda costuma valer; para patrimônios estáveis ou em retração, a conta
        muda.
      </p>
      <h3>Se o problema é reduzir a carga tributária dos aluguéis</h3>
      <p>
        A pessoa física que recebe aluguéis recolhe IR pela tabela progressiva, com
        alíquota marginal de até <strong>27,5%</strong> e poucas deduções. A pessoa
        jurídica que detém o mesmo imóvel, sob o <strong>lucro presumido</strong>, tem
        tributação efetiva que costuma ficar abaixo de <strong>15%</strong> (IRPJ, CSLL,
        PIS e COFINS sobre base presumida). A diferença é relevante, mas alguns detalhes
        mudam o cálculo:
      </p>
      <ul>
        <li>o custo de constituir e manter a sociedade precisa ser confrontado com a economia anual;</li>
        <li>a receita imobiliária precisa predominar de forma legítima na atividade da PJ — objeto social genérico operando como mero receptáculo de aluguéis pode ter o enquadramento questionado;</li>
        <li>em municípios com ISS elevado sobre locação (raro, mas existente), a equação se altera.</li>
      </ul>
      <p>
        Para patrimônios imobiliários pequenos (um ou dois imóveis locados), o custo de
        manter a estrutura frequentemente consome a economia tributária. Para patrimônios
        com vários imóveis, a diferença começa a ser substancial.
      </p>
      <h3>Se o problema é organizar uma sucessão com herdeiros em conflito</h3>
      <p>
        Aqui a holding ganha a função mais nobre — e menos discutida. O contrato social e
        o <strong>acordo de sócios</strong> regulam, com precisão que o testamento não
        alcança, como as decisões sobre o patrimônio serão tomadas após a morte do
        fundador: quórum qualificado, direito de preferência, restrições à venda a
        terceiros, mecanismos de saída do sócio descontente, administração colegiada.
      </p>
      <p>
        Para famílias com herdeiros de relacionamentos distintos, sócios que não se falam
        ou expectativas dissonantes sobre o patrimônio, <strong>essa função é
        insubstituível</strong>. Nem doação direta, nem testamento, nem partilha em
        inventário resolvem com a mesma precisão. É aqui, mais do que no ITCMD, que a
        holding costuma justificar seu custo.
      </p>

      <h2 id="secao-3">Pergunta 2 — <span className="s-it">A holding cabe no seu patrimônio?</span></h2>
      <p>
        A pergunta soa estranha, mas é a que mais separa estruturas úteis de estruturas
        decorativas. Holding tem custo de constituição e custo de manutenção, e esses
        custos precisam guardar proporção com o patrimônio que se quer organizar.
      </p>
      <h3>Os custos de constituição</h3>
      <p>A criação envolve, em regra:</p>
      <ul>
        <li><strong>Honorários advocatícios</strong> para o contrato social e o acordo de sócios;</li>
        <li><strong>Honorários contábeis</strong> para abertura, planejamento tributário e organização do capital;</li>
        <li><strong>ITBI sobre integralização de imóveis</strong>, na hipótese descrita a seguir;</li>
        <li><strong>Custas registrais</strong> (Junta Comercial e cartórios de imóveis);</li>
        <li><strong>ITCMD sobre a doação das quotas</strong>, quando há doação imediata com reserva de usufruto.</li>
      </ul>
      <h3>A armadilha do ITBI na integralização</h3>
      <p>
        A Constituição prevê, no{' '}
        <a href="https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" target="_blank" rel="noopener">art. 156, § 2º, I</a>,
        <strong> imunidade de ITBI</strong> na transmissão de imóveis para integralização
        de capital — salvo se a atividade preponderante da sociedade for compra e venda,
        locação ou arrendamento de imóveis.
      </p>
      <p>
        Aqui aparece o paradoxo que pega muita gente desprevenida: a maior parte das
        holdings familiares com imóveis tem <strong>exatamente a atividade
        preponderante</strong> que afasta a imunidade — porque a finalidade declarada é
        deter e locar imóveis. Quando isso ocorre, o município pode exigir ITBI sobre o
        valor venal de cada imóvel transferido.
      </p>
      <p>
        Em outubro de 2020, no <strong>RE 796.376/SC (Tema 796</strong>, rel. p/ acórdão
        Min. Alexandre de Moraes), o STF fixou tese de repercussão geral:
      </p>
      <blockquote>
        &ldquo;A imunidade em relação ao ITBI, prevista no inciso I do § 2º do art. 156 da
        Constituição Federal, não alcança o valor dos bens que exceder o limite do capital
        social a ser integralizado.&rdquo;
        <cite>STF, Tema 796 — RE 796.376/SC, Rel. p/ acórdão Min. Alexandre de Moraes.</cite>
      </blockquote>
      <p>
        A consequência é dupla. Primeiro, a imunidade — quando aplicável — é limitada ao
        valor do capital subscrito: o excedente paga ITBI. Segundo, em sociedades de
        atividade preponderantemente imobiliária, a imunidade simplesmente não se aplica.
        Isso não inviabiliza a integralização — mas ela precisa ser <strong>calculada
        antes</strong>, não descoberta depois. Em municípios com ITBI elevado (no Rio, a
        alíquota usual é de 3%), a integralização sem planejamento pode custar mais do que
        o ITCMD que se pretendia economizar.
      </p>
      <h3>Os custos recorrentes</h3>
      <p>Mensalmente, a holding consome:</p>
      <ul>
        <li>contabilidade e demonstrações financeiras;</li>
        <li>declarações mensais de tributos (DCTFWeb, EFD-Contribuições, eventualmente EFD-Reinf);</li>
        <li>declaração anual de IRPJ;</li>
        <li>taxas e contribuições.</li>
      </ul>
      <p>
        Para uma holding patrimonial razoavelmente organizada, o custo recorrente costuma
        ficar entre <strong>R$ 1.500 e R$ 5.000 por mês</strong> (contabilidade +
        assessoria jurídica de manutenção) — R$ 18 a 60 mil por ano, antes de qualquer
        tributo. Para patrimônios pequenos (abaixo de R$ 1 a 2 milhões), raramente se
        justifica. A regra prática: <strong>se a economia tributária e a redução de
        litígios estimadas em dez anos não cobrem, com folga, o custo de manutenção no
        mesmo período, a holding está sendo proposta no patrimônio errado.</strong>
      </p>

      <h2 id="secao-4">Pergunta 3 — <span className="s-it">A holding sobrevive à sua família?</span></h2>
      <p>
        Esta é a pergunta que separa estruturas que envelhecem bem das que viram fonte de
        litígio entre os próprios herdeiros — o oposto do que motivou a constituição. Três
        pontos decidem o desfecho.
      </p>
      <h3>O acordo de sócios é o documento mais importante</h3>
      <p>
        O contrato social define a estrutura; o <strong>acordo de sócios</strong> define
        como a família vai conviver com ela. É lá que se regulam a política de distribuição
        de lucros, as regras de venda de quotas, o direito de preferência, os mecanismos de
        impasse, as hipóteses de exclusão de sócio e a governança da administração.
      </p>
      <p>
        Estruturas que negligenciam o acordo de sócios descobrem, na primeira divergência,
        que o contrato social isolado não dá conta dos conflitos reais — divergência que
        costuma chegar não pelo mau caráter dos herdeiros, mas pela diferença entre quem
        quer liquidez imediata e quem quer manter o patrimônio íntegro.
      </p>
      <h3>Sociedade entre cônjuges: cuidado com o regime de bens</h3>
      <p>
        O{' '}
        <a href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" target="_blank" rel="noopener">art. 977 do Código Civil</a>{' '}
        veda que cônjuges casados em <strong>comunhão universal</strong> ou em{' '}
        <strong>separação obrigatória</strong> sejam sócios entre si — restrição que
        alcança holdings constituídas em conjunto pelos cônjuges. Nos demais regimes
        (comunhão parcial, separação convencional, participação final nos aquestos), a
        sociedade é permitida.
      </p>
      <p>
        A consequência é direta: o regime de bens precisa ser verificado <strong>antes</strong>{' '}
        da constituição. Casos de holdings desconstituídas anos depois por vício de
        constituição ainda chegam aos tribunais — e desfazer custa muito mais do que fazer
        com o regime adequado.
      </p>
      <h3>Blindagem patrimonial: o limite real do instrumento</h3>
      <p>
        A promessa de que &ldquo;a holding protege contra qualquer credor&rdquo; é a frase
        mais perigosa do mercado de planejamento patrimonial. A sociedade tem patrimônio
        próprio, distinto do dos sócios; em situação normal, credores do sócio atingem
        apenas as <strong>quotas</strong> do devedor, não os bens da sociedade. Até aí, é
        vantagem. Mas o ordenamento tem três mecanismos que furam essa proteção diante de
        uso indevido:
      </p>
      <ul>
        <li><strong>Desconsideração da personalidade jurídica</strong> (<a href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" target="_blank" rel="noopener">art. 50 do Código Civil</a>, com a redação da Lei 13.874/2019), para desvio de finalidade e confusão patrimonial;</li>
        <li><strong>Fraude à execução</strong> (art. 792 do CPC e Súmula 375 do STJ), quando a transferência ocorre na pendência de demanda capaz de levar o devedor à insolvência;</li>
        <li><strong>Fraude contra credores</strong> (arts. 158 e seguintes do Código Civil), via ação pauliana, quando a estrutura é montada depois de surgida a dívida e prejudica o credor.</li>
      </ul>
      <p>
        O STJ aplica esses mecanismos com regularidade quando a holding é constituída{' '}
        <strong>às vésperas</strong> de uma execução, sem propósito negocial real além de
        afastar o patrimônio do credor. Nessas situações, a estrutura inteira pode ser
        desconstituída — e o sócio responde com o patrimônio que pretendia proteger,
        acrescido de honorários e desgaste judicial.
      </p>
      <p>
        A blindagem é real, mas pressupõe três condições: constituição em momento de
        normalidade patrimonial (sem dívidas iminentes); sociedade com atividade efetiva,
        não apenas formal; e separação real entre o patrimônio da sociedade e o dos sócios
        — não há blindagem para quem usa a conta da holding como conta pessoal.
      </p>

      <h2 id="secao-5">Quadro comparativo: <span className="s-it">holding × outras vias</span></h2>
      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Eixo</th>
              <th>Holding familiar</th>
              <th>Doação direta c/ usufruto</th>
              <th>Testamento</th>
              <th>Inventário sem planejamento</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Custo de constituição</td><td>Médio a alto (contrato, ITBI eventual, ITCMD)</td><td>Médio (escritura + ITCMD)</td><td>Baixo (escritura)</td><td>Baixo até o evento</td></tr>
            <tr><td>Custo de manutenção</td><td>Alto (contabilidade, declarações)</td><td>Baixo</td><td>Nenhum</td><td>Nenhum</td></tr>
            <tr><td>Eficiência tributária sobre aluguéis</td><td>Alta (lucro presumido)</td><td>Não altera</td><td>Não altera</td><td>Não altera</td></tr>
            <tr><td>Antecipação da partilha</td><td>Sim</td><td>Sim</td><td>Não (post mortem)</td><td>Não</td></tr>
            <tr><td>Governança entre herdeiros</td><td>Alta (acordo de sócios)</td><td>Limitada</td><td>Limitada</td><td>Inexistente</td></tr>
            <tr><td>Flexibilidade futura</td><td>Média (alteração de contrato)</td><td>Baixa (irrevogável)</td><td>Alta (revogável)</td><td>Inexistente</td></tr>
            <tr><td>Custo final do inventário</td><td>Reduzido (transmissão de quotas)</td><td>Reduzido</td><td>Pleno</td><td>Pleno</td></tr>
            <tr><td>Exposição a litígio entre herdeiros</td><td>Reduzida com boa governança</td><td>Média</td><td>Média a alta</td><td>Alta</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Não existe instrumento superior em abstrato: cada via responde a um perfil. Família
        pequena, patrimônio modesto e harmônica costuma ser melhor servida pela doação
        direta com reserva de usufruto, eventualmente com testamento. Família com patrimônio
        relevante, imóveis locados e tensões previsíveis tende a se beneficiar da holding.
        Família sem patrimônio expressivo raramente justifica qualquer das duas — basta um
        testamento bem redigido.
      </p>

      <h2 id="secao-6">Boas práticas <span className="s-it">antes de constituir</span></h2>
      <p>
        Quem chega à decisão de constituir uma holding familiar tem, antes do contrato
        social, oito decisões técnicas que merecem cuidado:
      </p>
      <ol>
        <li><strong>Diagnóstico patrimonial completo.</strong> Bens, dívidas, fontes de renda e exposições profissionais antes de qualquer desenho. Sem isso, a estrutura nasce cega.</li>
        <li><strong>Verificação do regime de bens dos sócios,</strong> sobretudo havendo cônjuges entre eles — para evitar o impedimento do art. 977 do Código Civil.</li>
        <li><strong>Análise tributária comparativa.</strong> Simulação do ITBI na integralização (com o excedente do Tema 796), do ITCMD na doação das quotas e da economia nos aluguéis em PJ versus PF. A conta tem que fechar em planilha, não em discurso.</li>
        <li><strong>Contrato social com propósito.</strong> Atividade preponderante (com efeito direto sobre a imunidade do ITBI), capital social, forma de integralização, quotas de cada sócio.</li>
        <li><strong>Acordo de sócios robusto.</strong> Distribuição de lucros, circulação de quotas, preferência, impasse, exclusão, governança. É aqui que se previne litígio.</li>
        <li><strong>Cláusulas restritivas nas doações de quotas.</strong> Incomunicabilidade, inalienabilidade temporária e impenhorabilidade protegem as quotas contra eventos da vida dos herdeiros.</li>
        <li><strong>Substituto e plano de sucessão da administração.</strong> Quem administra a holding após o falecimento do fundador, e como se dá a transição. Sem isso, a estrutura paralisa no momento mais delicado.</li>
        <li><strong>Revisão periódica.</strong> Patrimônio cresce, legislação muda (a reforma tributária é o exemplo recente), herdeiros amadurecem. Holding de 2010 nunca revista raramente serve a 2026.</li>
      </ol>
      <p>
        Em ações consultivas conduzidas pelo escritório para empresas familiares e grupos
        com patrimônio diversificado, a observação que se repete é simples: a holding
        constituída às pressas, só para &ldquo;economizar imposto&rdquo; e sem acordo de
        sócios, é a que mais gera arrependimento dois anos depois. A constituída com
        diagnóstico, propósito e governança raramente precisa ser desfeita.
      </p>

      <h2 id="consideracoes-finais">Considerações finais — <span className="s-it">instrumento, não milagre</span></h2>
      <p>
        A holding familiar não é nem panaceia nem armadilha: é <strong>instrumento
        técnico</strong>. Como todo instrumento técnico, serve bem ao problema certo, no
        patrimônio certo, com o desenho certo. Mal indicada, é cara, frágil e geradora de
        mais conflito do que resolve. Bem indicada, é dos mecanismos mais eficientes do
        direito brasileiro para a transmissão patrimonial entre gerações.
      </p>
      <p>
        As três perguntas deste artigo — sobre o problema a resolver, sobre o caber no
        patrimônio, sobre o sobreviver à família — não substituem a análise jurídica e
        contábil concreta. Mas filtram, com razoável precisão, os casos em que a estrutura
        merece avançar daqueles em que a melhor recomendação é, francamente, não constituir.
      </p>
      <p>
        A consulta inicial costuma vir com a pergunta &ldquo;vale a pena fazer uma
        holding?&rdquo;. A resposta tecnicamente honesta começa por inverter a pergunta:{' '}
        <strong>o que se pretende resolver, com que patrimônio, e com que família?</strong>{' '}
        A partir dessas três respostas, o instrumento adequado — holding, doação direta,
        testamento ou combinação — se desenha sozinho.
      </p>

      <h2 id="faq">Perguntas frequentes</h2>
      <h3>A holding familiar precisa ter imóveis para fazer sentido?</h3>
      <p>
        Não. Holdings podem ser puramente societárias (detendo participações em outras
        empresas), puramente patrimoniais (apenas aplicações financeiras) ou mistas. O
        ganho tributário sobre aluguéis é uma motivação comum, mas não a única — em famílias
        com participações empresariais relevantes, a holding pode existir sem nenhum imóvel.
      </p>
      <h3>Posso constituir holding com filhos menores como sócios?</h3>
      <p>
        Sim, com cautela. Menores podem ser sócios em sociedade limitada, desde que
        representados pelos pais e com o capital inteiramente integralizado. A administração
        não pode ser exercida pelo menor — é comum reservá-la ao genitor sobrevivente ou a
        administrador profissional designado.
      </p>
      <h3>O ITBI sempre incide quando integralizo imóveis na holding?</h3>
      <p>
        Não. A regra é a imunidade do art. 156, § 2º, I, da Constituição. As exceções
        relevantes são duas: quando a atividade preponderante da sociedade é compra e venda,
        locação ou arrendamento de imóveis (caso típico das holdings imobiliárias); e quando
        o valor dos imóveis excede o capital integralizado (Tema 796 do STF), situação em que
        o excedente é tributado. Cada operação exige cálculo específico.
      </p>
      <h3>Doação de quotas com reserva de usufruto significa que perco o controle?</h3>
      <p>
        Não — e essa é justamente a vantagem do desenho. O doador transfere a
        nua-propriedade das quotas aos donatários e mantém o usufruto, que inclui, em regra,
        o direito a voto, à percepção dos lucros e à administração da sociedade durante a
        vida. O herdeiro só consolida a propriedade plena com o falecimento do usufrutuário.
      </p>
      <h3>Holding criada às pressas, depois de surgir uma dívida, protege o patrimônio?</h3>
      <p>
        Não — provavelmente é o pior cenário possível: a estrutura é desconstituída por
        desconsideração da personalidade jurídica, fraude contra credores ou fraude à
        execução, e o sócio ainda responde por honorários e despesas processuais. A
        blindagem pressupõe constituição em momento de normalidade; não há atalho jurídico
        para escapar de dívida já existente ou previsível.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página de{' '}
        <Link href="/atuacao/direito-civil">Direito Civil</Link>{' '}
        reúne a atuação do escritório em família, sucessões e planejamento patrimonial; e o
        artigo sobre{' '}
        <Link href="/blog/dpo-terceirizado-pme">encarregado terceirizado</Link>{' '}
        trata da função de compliance em empresas que sustentam holdings operacionais.
      </p>
    </>
  ),

  // ───────────── Publicado ─────────────
  'sustentacao-virtual-tribunais': () => (
    <>
      <p>
        A pauta do tribunal cai no e-mail numa quarta-feira. O recurso especial que você
        acompanha há quatro anos foi incluído em sessão virtual — aquela em que os
        ministros votam, cada um no seu gabinete, ao longo de sete dias corridos. A
        primeira reação costuma ser a mesma: vou conseguir sustentar oralmente? Em caso
        positivo, como? E, se preferir o ritual da sessão presencial, é possível levar o
        caso para lá?
      </p>
      <p>
        Esse cenário, que durante a pandemia parecia transitório, virou regra estrutural
        do Judiciário brasileiro. A Lei 14.365/2022 ampliou as hipóteses de sustentação
        oral em agravos; a Resolução CNJ 591/2024 fixou parâmetros mínimos para os
        julgamentos eletrônicos em todos os tribunais; e, em janeiro de 2025, o STJ
        publicou a Resolução GP 3/2025, reorganizando o regime das sessões virtuais
        assíncronas. Para quem litiga nos tribunais superiores, conhecer essa engrenagem
        deixou de ser detalhe — virou a diferença entre falar ou não falar no julgamento.
      </p>

      <nav className="article-toc" aria-label="Sumário">
        <div className="article-toc-title">Sumário</div>
        <ol>
          <li><a href="#tres-modelos">Sessão presencial, telepresencial e virtual: três coisas diferentes</a></li>
          <li><a href="#lei-14365">O que mudou com a Lei 14.365/2022: novas hipóteses</a></li>
          <li><a href="#stf">STF: o peticionamento eletrônico e a regra das 48 horas</a></li>
          <li><a href="#stj">STJ: a Resolução GP 3/2025 e as sessões assíncronas</a></li>
          <li><a href="#cnj-591">Resolução CNJ 591/2024: destaque, OAB e a decisão de Barroso</a></li>
          <li><a href="#tabela">Tabela comparativa: STF × STJ na sessão virtual</a></li>
          <li><a href="#checklist">Checklist: oito passos antes de uma sustentação virtual</a></li>
          <li><a href="#conclusao">Considerações finais</a></li>
        </ol>
      </nav>

      <h2 id="tres-modelos">Sessão presencial, telepresencial e virtual: <span className="s-it">três coisas diferentes</span></h2>
      <p>
        A confusão começa no vocabulário. No léxico atual dos tribunais superiores, três
        modalidades convivem.
      </p>
      <p>
        A <strong>sessão presencial</strong> é o ritual clássico: ministros reunidos no
        plenário, advogados na tribuna, julgamento em tempo real. A <strong>sessão
        telepresencial</strong> (ou videoconferência) ocorre de modo síncrono, mas com
        participantes em locais distintos, conectados por vídeo. Em ambas, o advogado fala
        ao vivo, o colegiado escuta na hora e o debate é imediato.
      </p>
      <p>
        A <strong>sessão virtual</strong> — também chamada de assíncrona — é
        estruturalmente diferente. Os ministros votam ao longo de um período predefinido
        (no STJ, sete dias corridos), cada um no momento que escolher. Não há reunião
        simultânea. Quando há sustentação oral, ela é gravada antes e disponibilizada no
        sistema de votação, para que cada julgador a assista ao proferir o voto.
      </p>
      <p>
        A diferença não é só operacional: ela altera o tempo do julgamento, o modo como o
        argumento é construído e a oportunidade real de influência. Em sessão presencial, a
        sustentação dialoga com o debate que vai se desenrolar; em sessão virtual, é peça
        fechada, sem possibilidade de réplica.
      </p>

      <h2 id="lei-14365">O que mudou com a Lei 14.365/2022: <span className="s-it">novas hipóteses</span></h2>
      <p>
        A Lei 14.365/2022 ampliou prerrogativas da advocacia ao alterar o Estatuto da OAB,
        o CPC e o CPP. Para este tema, o ponto central é a inclusão do § 2º-B no art. 7º da
        Lei 8.906/1994, que passou a admitir sustentação oral em recursos antes vedados —
        no recurso interposto contra decisão monocrática de relator que julgar o mérito ou
        não conhecer, entre outras hipóteses, de:
      </p>
      <ul>
        <li>agravo interno ou regimental em recurso especial e em recurso extraordinário;</li>
        <li>agravo interno ou regimental em embargos de divergência;</li>
        <li>ação rescisória, mandado de segurança, reclamação, habeas corpus e demais ações de competência originária.</li>
      </ul>
      <p>
        O STJ adequou-se rapidamente: pela Emenda Regimental 41/2022, o art. 160 do RISTJ
        passou a prever quinze minutos de sustentação em agravo interno, equiparando-o aos
        demais recursos da pauta (cinco minutos nos agravos regimentais em matéria penal). O
        TST seguiu caminho semelhante, com dez minutos para os agravos após decisão
        monocrática em recurso de revista e embargos.
      </p>
      <p>
        Há, porém, uma fronteira jurisprudencial importante. O STJ firmou que a Lei
        14.365/2022, ao mencionar o agravo regimental em recurso especial (REsp), não
        estendeu a prerrogativa ao agravo regimental no agravo em recurso especial (AREsp)
        — espécies que a legislação processual trata como distintas:
      </p>
      <blockquote>
        &ldquo;A inovação introduzida no EOAB pela Lei 14.365/2022 garantiu ao advogado o
        direito de sustentação no agravo interno ou regimental em sede de recurso especial,
        mas nada dispôs sobre o julgamento de agravo regimental no agravo em recurso
        especial.&rdquo;
        <cite>STJ, 5ª Turma — AgRg no AREsp 2.170.433.</cite>
      </blockquote>
      <p>
        Na prática, antes de inscrever sustentação oral, o advogado precisa identificar com
        precisão a classe processual do recurso: REsp e AREsp seguem regimes diferentes,
        ainda que pareçam próximos.
      </p>

      <h2 id="stf">STF: o peticionamento eletrônico e <span className="s-it">a regra das 48 horas</span></h2>
      <p>
        No Supremo, o regime atual da sustentação oral em sessão virtual deriva da Resolução
        642/2019 e do Procedimento Judiciário 11/2020. Nas hipóteses regimentais de
        cabimento, o advogado pode encaminhar a sustentação por meio eletrônico após a
        publicação da pauta e até 48 horas antes do início do julgamento em ambiente
        virtual.
      </p>
      <p>
        O envio é feito pelo sistema de Peticionamento do STF, na opção &ldquo;Quero enviar
        Sustentação Oral&rdquo;. O arquivo deve seguir os parâmetros técnicos do Tribunal
        (formato, tamanho e duração equivalentes ao prazo regimental presencial
        correspondente). O prazo das 48 horas é contínuo, independentemente de feriado
        forense: cair em véspera de feriado não dilata o limite.
      </p>
      <p>
        Já nas sessões presenciais (ou por videoconferência), o ritual é outro: o advogado
        precisa se inscrever em formulário eletrônico até 24 horas antes da sessão, após o
        que recebe as instruções operacionais. Tratar uma sessão virtual como se fosse
        presencial — inscrevendo-se no formulário tradicional e aparecendo no dia —
        significa perder o prazo de envio do arquivo e, com ele, a sustentação.
      </p>

      <h2 id="stj">STJ: a Resolução GP 3/2025 e <span className="s-it">as sessões assíncronas</span></h2>
      <p>
        O STJ passou por reorganização normativa importante. A Emenda Regimental 45/2024
        ampliou as hipóteses de julgamento eletrônico, e a Resolução STJ/GP 3, de 15 de
        janeiro de 2025, regulamentou o procedimento — em diálogo com a Resolução CNJ
        591/2024. As sessões virtuais do STJ estão hoje disciplinadas, em especial, nos
        arts. 184-A a 184-J do RISTJ. Os principais pontos práticos:
      </p>
      <p>
        <strong>Pauta e prazo de votação.</strong> A pauta é publicada com pelo menos cinco
        dias úteis de antecedência. Os ministros têm sete dias corridos para registrar os
        votos. Não atingido o quórum mínimo (art. 184-I do RISTJ), o processo é adiado para
        a sessão virtual imediatamente subsequente.
      </p>
      <p>
        <strong>Envio da sustentação oral.</strong> Encaminhada pela Central do Processo
        Eletrônico (formulário em sustentacaooral.web.stj.jus.br), até 48 horas antes do
        início do julgamento, em dois formatos:
      </p>
      <ul>
        <li><strong>Áudio:</strong> arquivo MP3, até 10 MB;</li>
        <li><strong>Vídeo:</strong> arquivo MP4, até 250 MB.</li>
      </ul>
      <p>A duração observa o prazo regimental do recurso — em geral, até 15 minutos.</p>
      <p>
        <strong>Publicidade das peças.</strong> Transcorrido o prazo do art. 184-D do RISTJ,
        sustentações e memoriais ficam disponíveis ao público, salvo nos processos
        sigilosos.
      </p>
      <p>
        <strong>Pedido de preferência e destaque.</strong> Apresentado na forma do art. 10
        da Resolução STJ/GP 3/2025, que dialoga com o art. 8º, II, da Resolução CNJ 591/2024
        — detalhado adiante.
      </p>
      <p>
        Em sustentações orais perante o STJ, o escritório vem observando que a qualidade
        técnica do arquivo (áudio limpo, leitura clara da tese, foco nos pontos decisórios)
        passou a importar tanto quanto a estrutura argumentativa: numa sessão assíncrona,
        não há gesto da tribuna nem resposta do ministro — só a peça gravada.
      </p>

      <h2 id="cnj-591">Resolução CNJ 591/2024: <span className="s-it">destaque, OAB e a decisão de Barroso</span></h2>
      <p>
        A Resolução CNJ 591, de 23 de outubro de 2024, estabeleceu requisitos mínimos para o
        julgamento de processos em ambiente eletrônico em todo o Judiciário, unificando
        prazos, formatos e regras de pedido de destaque — e gerou controvérsia imediata. O
        ponto mais sensível está no art. 8º:
      </p>
      <blockquote>
        &ldquo;Não serão julgados em ambiente virtual os processos com pedido de destaque
        feito: I – por qualquer membro do órgão colegiado; II – por qualquer das partes ou
        pelo representante do Ministério Público, desde que requerido até 48 horas antes do
        início da sessão e deferido pelo relator.&rdquo;
        <cite>Resolução CNJ 591/2024, art. 8º.</cite>
      </blockquote>
      <p>
        A leitura literal da parte final do inciso II sugeria que o destaque pedido pela
        parte ficaria sujeito à decisão discricionária do relator — o que esvaziaria a
        prerrogativa de levar o caso para sessão presencial e sustentar ao vivo. A OAB
        reagiu com mobilização nacional, sustentando que a sustentação oral síncrona é
        prerrogativa da advocacia e não pode ser substituída por arquivo gravado sem o
        consentimento da parte.
      </p>
      <p>
        Em decisão no processo 0007972-11.2024.2.00.0000, o ministro Luís Roberto Barroso,
        então presidente do STF e do CNJ, esclareceu dois pontos centrais:
      </p>
      <ul>
        <li>a Resolução não tornou obrigatório o julgamento assíncrono — apenas fixou requisitos mínimos para os tribunais que optarem por adotá-lo;</li>
        <li>as hipóteses de julgamento presencial após pedido de destaque devem ser entendidas como necessárias, mas não exclusivas: cada tribunal pode regular os próprios pedidos de destaque, preservada a prerrogativa da advocacia.</li>
      </ul>
      <p>
        Para o advogado, a conclusão é direta: o pedido de destaque, na maioria das cortes,
        continua sendo o instrumento adequado para garantir sessão presencial com
        sustentação síncrona — mas sua eficácia depende do regramento de cada tribunal e,
        em alguns casos, do deferimento do relator.
      </p>

      <h2 id="tabela">Tabela comparativa: <span className="s-it">STF × STJ na sessão virtual</span></h2>
      <div className="article-table">
        <table>
          <thead>
            <tr><th>Aspecto</th><th>STF</th><th>STJ</th></tr>
          </thead>
          <tbody>
            <tr><td>Base normativa</td><td>Resolução 642/2019; Procedimento Judiciário 11/2020</td><td>RISTJ, arts. 184-A a 184-J; Resolução STJ/GP 3/2025; Emenda Regimental 45/2024</td></tr>
            <tr><td>Duração da sessão virtual</td><td>Definida em pauta</td><td>7 dias corridos para colheita de votos</td></tr>
            <tr><td>Prazo para envio da sustentação</td><td>Até 48h antes do início do julgamento virtual</td><td>Até 48h antes do início do julgamento virtual</td></tr>
            <tr><td>Plataforma de envio</td><td>Peticionamento — &ldquo;Quero enviar Sustentação Oral&rdquo;</td><td>Central do Processo Eletrônico — sustentacaooral.web.stj.jus.br</td></tr>
            <tr><td>Formato do arquivo</td><td>Áudio ou vídeo, conforme requisitos técnicos</td><td>MP3 (máx. 10 MB) ou MP4 (máx. 250 MB)</td></tr>
            <tr><td>Duração da sustentação</td><td>Equivalente ao prazo regimental presencial</td><td>Em regra, até 15 minutos</td></tr>
            <tr><td>Sessão presencial / videoconferência</td><td>Inscrição até 24h antes em formulário próprio</td><td>Até 24h antes (videoconferência); 30 min antes (presencial)</td></tr>
            <tr><td>Cabimento em agravos</td><td>Art. 7º, § 2º-B, da Lei 8.906/94</td><td>Art. 7º, § 2º-B + RISTJ art. 160; não cabe em AgRg no AREsp</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Os prazos podem ser alterados por atos normativos posteriores. Antes de cada
        sustentação, é prudente conferir o regramento vigente no portal do tribunal.
      </p>

      <h2 id="checklist">Checklist: <span className="s-it">oito passos antes de uma sustentação virtual</span></h2>
      <ol>
        <li><strong>Confirme a classe processual.</strong> REsp, AREsp, agravo interno e agravo regimental seguem regimes diferentes — a leitura correta define se cabe sustentação.</li>
        <li><strong>Identifique a modalidade da sessão.</strong> A pauta indica se o julgamento é virtual, telepresencial ou presencial; cada uma tem procedimento próprio de inscrição e envio.</li>
        <li><strong>Marque o prazo das 48 horas</strong> a partir do início do julgamento virtual, não da publicação da pauta. O cronômetro corre mesmo em véspera de feriado forense.</li>
        <li><strong>Verifique os requisitos técnicos do arquivo.</strong> No STJ, MP3 até 10 MB ou MP4 até 250 MB; no STF, as especificações do Procedimento Judiciário 11/2020 vigente. Arquivo fora do padrão é rejeitado.</li>
        <li><strong>Estruture a sustentação como peça autônoma.</strong> Sem réplica ao voto, o argumento precisa antecipar contrapontos e fixar a tese no primeiro minuto.</li>
        <li><strong>Avalie o pedido de destaque.</strong> Se o caso exige debate ao vivo (complexidade fática, tese inédita, dúvidas do colegiado), o destaque para sessão presencial é o instrumento adequado — observado o prazo de 48 horas e a regra de cada tribunal.</li>
        <li><strong>Controle a qualidade da gravação.</strong> Áudio limpo, sem ruído, com leitura pausada. Em sessão virtual, o ministro ouve sozinho — distrações técnicas pesam.</li>
        <li><strong>Confirme o protocolo de envio.</strong> O sistema gera comprovante; guarde-o até a conclusão do julgamento. Sustentações não juntadas, em casos raros, geram nulidade arguível em embargos de declaração.</li>
      </ol>

      <h2 id="conclusao">Considerações finais: <span className="s-it">o ritual mudou, a técnica permanece</span></h2>
      <p>
        A sessão virtual não tornou a sustentação oral menos importante — tornou-a mais
        técnica. Antes, parte do efeito vinha da presença na tribuna, do tom de voz, da
        pausa diante do colegiado. Hoje, o efeito depende do que está no arquivo: do recorte
        da tese, da ordem dos argumentos, da clareza dos parâmetros normativos invocados.
      </p>
      <p>
        Para quem atua perante o STF e o STJ — seja em recurso especial de servidor público,
        mandado de segurança coletivo de entidade sindical, agravo em recurso especial de
        empresa contratada pela Administração ou ação rescisória empresarial —, dominar o
        regime das sessões virtuais deixou de ser detalhe operacional: virou parte da
        estratégia processual desde a interposição do recurso. Com três décadas e meia de
        atuação em Direito Público perante os tribunais superiores, o escritório observa que
        a defesa bem-feita começa antes da pauta — no desenho do recurso, na escolha do
        recurso adequado e na antecipação do regime de julgamento aplicável.
      </p>
      <p>
        A reforma de 2022, a Resolução CNJ 591/2024 e a Resolução STJ/GP 3/2025 não esgotam o
        tema. Cada tribunal regional e cada corte estadual está, no próprio ritmo, adaptando
        os respectivos regimentos — quem litiga em rede precisa acompanhar essa engenharia
        normativa em tempo real.
      </p>

      <h2 id="faq">Perguntas frequentes</h2>
      <h3>Posso me opor à inclusão do meu recurso em sessão virtual no STJ?</h3>
      <p>
        O art. 184-A do RISTJ atribui ao relator a competência para incluir o processo em
        sessão virtual, ressalvadas hipóteses específicas. A oposição é possível por pedido
        de destaque, na forma da Resolução STJ/GP 3/2025 e dentro do prazo de 48 horas. O STJ
        tem decidido que a oposição precisa demonstrar prejuízo concreto ao direito de
        defesa.
      </p>
      <h3>Cabe sustentação oral em agravo regimental no agravo em recurso especial (AgRg no AREsp)?</h3>
      <p>
        Segundo a 5ª Turma do STJ (AgRg no AREsp 2.170.433), a Lei 14.365/2022 ampliou a
        prerrogativa para o agravo regimental em recurso especial (REsp), mas não a estendeu
        ao agravo regimental no AREsp, classe processual distinta. Antes de inscrever
        sustentação, é essencial conferir a classe.
      </p>
      <h3>O prazo de 48 horas conta dias úteis ou corridos?</h3>
      <p>
        Conta horas corridas, a partir do início do julgamento virtual — não em dias úteis.
        Segundo o STF, o prazo deve ser observado ainda que o término coincida com feriado
        forense.
      </p>
      <h3>Posso enviar memoriais junto da sustentação oral?</h3>
      <p>
        Sim. No STF e no STJ, memoriais podem ser encaminhados pelas vias eletrônicas usuais
        e, na sessão virtual do STJ, ficam disponíveis aos ministros junto da sustentação
        gravada, ressalvados os processos sigilosos.
      </p>
      <h3>Se o relator pedir destaque depois de eu enviar a sustentação gravada, perco o direito de sustentar ao vivo?</h3>
      <p>
        Não. Havendo destaque, o julgamento é reiniciado em sessão presencial, com
        possibilidade de sustentação oral síncrona (art. 6º, § 2º, da Resolução CNJ
        591/2024). A peça gravada deixa de ser utilizada e o advogado sustenta ao vivo na
        nova sessão.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página de{' '}
        <Link href="/atuacao/direito-do-servidor">Direito do Servidor Público</Link>{' '}
        reúne a atuação em PAD, sindicâncias e mandados de segurança que frequentemente
        desembocam em recursos no STJ e no STF; ver também{' '}
        <Link href="/blog/pad-controle-judicial">PAD e o limite do controle judicial</Link>{' '}
        e{' '}
        <Link href="/blog/sindicato-legitimidade-stf">a legitimidade processual do sindicato no STF</Link>.
      </p>
    </>
  ),

  // ───────────── Publicado em 2026-06-10 ─────────────
  'due-diligence-passivos-ocultos-comprador': () => (
    <>
      <JsonLd data={FAQ_DUE_DILIGENCE} />

      <p>
        A planilha fechava. O EBITDA estava saudável, o contrato de compra e venda
        revisado, o preço acordado. Quatro meses após a assinatura, chega a primeira
        citação trabalhista de um terceirizado que o comprador nunca soube que
        existia — seguida, semanas depois, de uma autuação fiscal por um período
        anterior à operação. Nenhum desses valores estava no balanço. E, agora, são
        problema do comprador.
      </p>
      <p>
        Esse é o roteiro silencioso de boa parte das aquisições mal preparadas. O
        que derruba uma operação de M&amp;A quase nunca é o que está nas
        demonstrações financeiras — é o que não está. A due diligence existe
        justamente para encontrar esses passivos antes que eles deixem de ser risco
        e virem conta a pagar.
      </p>
      <p>
        Este artigo é escrito sob a ótica de quem compra: o que tende a passar
        despercebido, por que a lei transfere essas dívidas ao adquirente e como
        estruturar a operação para não herdar o que não foi precificado.
      </p>

      <nav className="article-toc" aria-label="Sumário">
        <div className="article-toc-title">Sumário</div>
        <ol>
          <li><a href="#sucessao">Por que o comprador herda o que não comprou</a></li>
          <li><a href="#trabalhista">Passivo trabalhista: o que não entra no balanço</a></li>
          <li><a href="#tributario">Passivo tributário e a responsabilidade do sucessor</a></li>
          <li><a href="#lgpd">LGPD: o passivo invisível dos dados</a></li>
          <li><a href="#administracao">Contingências com a Administração Pública</a></li>
          <li><a href="#blindagem">Como blindar a operação: garantias contratuais</a></li>
          <li><a href="#faq">Perguntas frequentes</a></li>
        </ol>
      </nav>

      <h2 id="sucessao">Por que o comprador herda <span className="s-it">o que não comprou</span></h2>
      <p>
        A intuição de muitos compradores é que, ao adquirir uma empresa, compram
        apenas o que está descrito no contrato. O ordenamento brasileiro funciona
        de outro modo: em diversas hipóteses, a dívida acompanha o patrimônio, e
        não a pessoa do antigo titular.
      </p>
      <p>
        A estrutura da operação altera radicalmente a exposição. Numa incorporação
        ou fusão (Lei 6.404/76, arts. 227 a 229), a sociedade resultante sucede a
        anterior em todos os direitos e obrigações. Já na compra de quotas ou
        ações, a pessoa jurídica permanece a mesma — e com ela, todo o seu
        histórico de contingências. Mesmo na aquisição de ativos isolados, há
        regras de sucessão que alcançam o adquirente.
      </p>
      <blockquote>
        A mudança na propriedade ou na estrutura jurídica da empresa não afeta os
        contratos de trabalho dos respectivos empregados.
        <cite>CLT, arts. 10 e 448.</cite>
      </blockquote>
      <p>
        Em outras palavras: trocar o dono não apaga o passado. É por isso que a
        due diligence não é formalidade burocrática — é o único momento em que o
        comprador ainda tem poder de barganha. Depois da assinatura, o que sobra
        é litígio.
      </p>

      <h2 id="trabalhista">Passivo trabalhista: <span className="s-it">o que não entra no balanço</span></h2>
      <p>
        O passivo trabalhista é o campeão das surpresas pós-fechamento, porque
        grande parte dele não está provisionado. São contingências que ainda não
        viraram processo — mas virarão.
      </p>
      <p>Três focos merecem atenção redobrada na auditoria:</p>
      <p>
        <strong>Terceirização e pejotização.</strong> Contratos de prestação de
        serviço que, na prática, escondem vínculo empregatício. Quando a Justiça
        do Trabalho reconhece a subordinação, a empresa responde por todo o
        período como se houvesse contrato direto. O TST consolidou, na Súmula
        331, parâmetros de responsabilidade na terceirização que o comprador
        precisa mapear caso a caso.
      </p>
      <p>
        <strong>Verbas não provisionadas.</strong> Horas extras habituais,
        adicionais não pagos, diferenças de enquadramento. Individualmente
        parecem pequenas; multiplicadas pelo quadro e pela prescrição
        quinquenal, tornam-se um número relevante.
      </p>
      <p>
        <strong>Passivo de saúde e segurança.</strong> Ações de adicional de
        insalubridade, periculosidade e, sobretudo, pleitos por doença
        ocupacional, que costumam ter valor elevado e prazo prescricional
        próprio.
      </p>
      <p>
        A due diligence trabalhista séria não se contenta com a lista de
        processos ativos. Ela cruza a folha, os contratos de terceiros, o
        histórico de rescisões e o passivo potencial — aquele que ainda dorme,
        mas que a sucessão (CLT, art. 448) entregará ao comprador.
      </p>

      <h2 id="tributario">Passivo tributário <span className="s-it">e a responsabilidade do sucessor</span></h2>
      <p>
        Aqui a lei é particularmente direta. O Código Tributário Nacional
        estabelece que quem adquire fundo de comércio ou estabelecimento e segue
        na mesma atividade responde pelos tributos devidos até a data do negócio.
      </p>
      <blockquote>
        A pessoa que adquirir de outra estabelecimento comercial, industrial ou
        profissional e continuar a respectiva exploração responde pelos tributos
        relativos ao estabelecimento adquirido, devidos até a data do ato.
        <cite>CTN, art. 133.</cite>
      </blockquote>
      <p>
        A responsabilidade é integral se o vendedor cessar a exploração, e
        subsidiária se o vendedor seguir em atividade. O detalhe decisivo: essa
        dívida segue o adquirente independentemente do que o contrato de compra
        e venda disser entre as partes — a cláusula privada não é oponível ao
        Fisco.
      </p>
      <p>
        A auditoria fiscal precisa ir além das certidões negativas. Débitos
        parcelados, teses tributárias arriscadas adotadas pela empresa, créditos
        de duvidosa liquidez no ativo e autuações em discussão administrativa
        são contingências que uma certidão limpa não revela. O que protege o
        comprador não é a certidão; é a leitura técnica do que está por trás
        dela.
      </p>

      <h2 id="lgpd">LGPD: <span className="s-it">o passivo invisível dos dados</span></h2>
      <p>
        Até pouco tempo, a base de dados de uma empresa era tratada como ativo.
        Hoje, mal estruturada, é passivo. A Lei Geral de Proteção de Dados (Lei
        13.709/18) tornou a conformidade no tratamento de dados um item de
        auditoria tão relevante quanto o balanço.
      </p>
      <p>
        O comprador que adquire a empresa adquire também o modo como ela coleta,
        armazena e compartilha dados — com todos os riscos embutidos. Os pontos
        críticos da due diligence de dados:
      </p>
      <ul>
        <li>Ausência de base legal para tratamentos em curso (marketing, perfilamento, compartilhamento com terceiros);</li>
        <li>Inexistência de programa de adequação, registro de operações ou encarregado designado;</li>
        <li>Incidentes de segurança não comunicados à ANPD e aos titulares;</li>
        <li>Contratos com fornecedores sem cláusulas de proteção de dados, transferindo risco sem controle.</li>
      </ul>
      <p>
        A Autoridade Nacional de Proteção de Dados já exerce seu poder
        sancionatório, que inclui advertência e multa de até 2% do faturamento
        (LGPD, art. 52). Comprar uma empresa sem mapear sua exposição de dados é
        assumir, às cegas, uma contingência regulatória que pode se materializar
        a qualquer momento.
      </p>

      <h2 id="administracao">Contingências <span className="s-it">com a Administração Pública</span></h2>
      <p>
        Esse é o passivo que escapa de auditorias generalistas — e que merece
        atenção específica quando a empresa-alvo contrata com o poder público,
        participa de licitações ou opera em setor regulado.
      </p>
      <p>
        Empresas que fornecem ao Estado carregam riscos próprios: contratos
        administrativos com cláusulas de reequilíbrio mal resolvidas, processos
        sancionatórios em curso em tribunais de contas, e — o mais grave —
        penalidades de suspensão ou declaração de inidoneidade que podem
        inviabilizar a atividade adquirida da noite para o dia.
      </p>
      <p>
        Há ainda a frente anticorrupção. A Lei 12.846/13 prevê que, em caso de
        fusão ou incorporação, a responsabilidade da sucessora alcança a
        obrigação de pagamento de multa e reparação do dano, até o limite do
        patrimônio transferido (art. 4º). Um processo de responsabilização em
        andamento, ou fatos ainda não apurados, atravessam a operação.
      </p>
      <p>
        Avaliar esse tipo de passivo exige ler o contrato administrativo, o
        procedimento sancionador e a lógica do regulador a partir de dentro —
        não apenas pela ótica privada. É precisamente no cruzamento entre
        Direito Corporativo e Direito Público que esse risco se torna visível,
        e é nesse cruzamento que o escritório atua, com trajetória consolidada
        em ambas as frentes.
      </p>

      <h2 id="blindagem">Como blindar a operação: <span className="s-it">garantias contratuais</span></h2>
      <p>
        Mapear o passivo é metade do trabalho. A outra metade é traduzir o que
        foi encontrado em proteção contratual. Os instrumentos clássicos:
      </p>

      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Mecanismo</th>
              <th>O que faz</th>
              <th>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Declarações e garantias (<em>reps &amp; warranties</em>)</td>
              <td>Vendedor afirma formalmente a inexistência de passivos; mentira gera dever de indenizar</td>
              <td>Sempre — é a espinha dorsal do contrato</td>
            </tr>
            <tr>
              <td>Cláusula de indenização</td>
              <td>Define quem paga cada contingência que se materialize após o fechamento</td>
              <td>Para passivos identificados e para os ocultos</td>
            </tr>
            <tr>
              <td><em>Escrow</em> (conta-garantia)</td>
              <td>Retém parte do preço com terceiro até decair o risco</td>
              <td>Quando há contingência relevante de desfecho incerto</td>
            </tr>
            <tr>
              <td>Ajuste de preço / <em>earn-out</em></td>
              <td>Vincula parcela do preço ao desempenho ou à não materialização de risco</td>
              <td>Quando o passivo é provável mas indeterminado</td>
            </tr>
            <tr>
              <td>Condições precedentes</td>
              <td>Exige a regularização de pendências antes do fechamento</td>
              <td>Para vícios sanáveis identificados na auditoria</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        A escolha do mecanismo depende do que a due diligence encontrou. Passivo
        identificado e quantificado pede retenção ou ajuste de preço. Passivo
        de existência incerta pede declaração robusta somada a indenização.
        Vício sanável pede condição precedente. A engenharia contratual é a
        tradução jurídica do diagnóstico — e por isso a auditoria e a redação
        do contrato não podem caminhar separadas.
      </p>

      <h2 id="checklist">Checklist do comprador <span className="s-it">antes de assinar</span></h2>
      <ol>
        <li>A estrutura da operação (quotas, ativos, incorporação) foi escolhida considerando o regime de sucessão de cada passivo?</li>
        <li>A auditoria trabalhista mapeou o passivo potencial — terceirizados, pejotização, verbas não provisionadas — e não só os processos ativos?</li>
        <li>As certidões fiscais foram complementadas por análise de parcelamentos, teses de risco e autuações em discussão?</li>
        <li>A exposição de LGPD foi avaliada (base legal, incidentes, contratos com operadores)?</li>
        <li>Há contingências com a Administração Pública, sanções ou processos anticorrupção em curso?</li>
        <li>Cada risco encontrado tem um mecanismo contratual correspondente (declaração, indenização, <em>escrow</em>, ajuste de preço)?</li>
      </ol>

      <h2 id="conclusao">Considerações finais: <span className="s-it">o que custa caro é o que não se vê</span></h2>
      <p>
        Numa aquisição, o preço se negocia sobre o que está à mesa. O prejuízo
        nasce do que ficou debaixo dela. A due diligence não é uma etapa para
        cumprir tabela antes da assinatura — é o instrumento que transforma o
        invisível em visível enquanto ainda há margem para renegociar,
        condicionar ou desistir.
      </p>
      <p>
        Comprar bem não é pagar menos. É saber exatamente o que se está
        comprando — inclusive as dívidas que não constam de nenhuma planilha.
      </p>

      <h2 id="faq">Perguntas frequentes</h2>
      <h3>A cláusula que diz que o vendedor responde pelos passivos anteriores me protege do Fisco e da Justiça do Trabalho?</h3>
      <p>
        Entre as partes, sim — ela define quem arca com a conta no fim. Mas não
        é oponível ao Fisco nem ao empregado: a Receita e a Justiça do Trabalho
        cobram do sucessor, e o comprador depois precisa buscar o ressarcimento
        do vendedor, o que pressupõe que ele tenha patrimônio para responder.
      </p>
      <h3>Comprar só os ativos, e não as quotas, elimina o risco de sucessão?</h3>
      <p>
        Reduz, mas não zera. A aquisição de estabelecimento atrai a
        responsabilidade tributária do art. 133 do CTN e pode atrair sucessão
        trabalhista. A estrutura certa depende do diagnóstico de cada passivo
        — não existe formato universalmente seguro.
      </p>
      <h3>Due diligence é só para grandes operações?</h3>
      <p>
        Não. O risco proporcional costuma ser maior em PMEs, onde a
        informalidade e a ausência de provisionamento são mais comuns. O escopo
        da auditoria se ajusta ao porte; a necessidade dela, não.
      </p>
      <h3>Quanto tempo antes da assinatura a due diligence deve começar?</h3>
      <p>
        Idealmente, antes de fechar o preço — porque o que a auditoria revela é
        justamente o que se usa para negociar valor, garantias e condições.
        Iniciá-la depois do acordo de preço esvazia boa parte do seu propósito.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página de{' '}
        <Link href="/atuacao/corporativo">Direito Empresarial e Corporativo</Link>{' '}
        reúne a atuação em M&amp;A, planejamento societário, governança e
        contratos empresariais; ver também{' '}
        <Link href="/blog/holding-familiar-3-perguntas">Holding familiar: três perguntas antes de estruturar</Link>{' '}
        e{' '}
        <Link href="/blog/dpo-terceirizado-pme">Encarregado terceirizado: quando faz sentido para a PME</Link>.
      </p>
    </>
  ),

  // ───────────── Publicado em 2026-06-10 ─────────────
  'acordo-de-socios-clausulas-litigio': () => (
    <>
      <JsonLd data={FAQ_ACORDO_SOCIOS} />

      <p>
        Dois sócios fundam uma empresa no melhor momento da relação. Dividem o
        capital, dividem a confiança e, quase sempre, dividem também a pressa
        de começar a operar. O contrato social é registrado às pressas na Junta
        Comercial, com cláusulas de prateleira, e a pergunta &ldquo;e se um dia
        a gente discordar?&rdquo; fica para depois. O problema é que esse
        &ldquo;depois&rdquo; costuma chegar no pior momento possível: quando os
        sócios já não se entendem e cada frase do contrato passa a ser lida
        contra o outro.
      </p>
      <p>
        O acordo de sócios é o documento que responde a essa pergunta antes de
        ela virar processo. Ele não nasce da desconfiança — nasce da
        consciência de que sociedades mudam, pessoas mudam, e interesses que
        hoje coincidem podem divergir amanhã. Este artigo percorre as cláusulas
        que, na prática, separam a sociedade que resolve seus impasses na mesa
        daquela que os resolve no Judiciário.
      </p>

      <nav className="article-toc" aria-label="Sumário">
        <div className="article-toc-title">Sumário</div>
        <ol>
          <li><a href="#nao-desconfianca">O acordo de sócios não é sinal de desconfiança</a></li>
          <li><a href="#entrada-saida">Entrada e saída: quem pode ser sócio</a></li>
          <li><a href="#impasse">O impasse: o litígio que você não previu</a></li>
          <li><a href="#saida-morte">Saída, morte e divórcio: os eventos que ninguém agenda</a></li>
          <li><a href="#arbitragem">Como o conflito será resolvido: arbitragem e escalonamento</a></li>
          <li><a href="#checklist">Checklist do acordo de sócios</a></li>
          <li><a href="#faq">Perguntas frequentes</a></li>
        </ol>
      </nav>

      <h2 id="nao-desconfianca">O acordo de sócios <span className="s-it">não é sinal de desconfiança</span></h2>
      <p>
        Há uma confusão frequente entre dois documentos diferentes. O contrato
        social (ou estatuto, na sociedade anônima) é o documento público,
        arquivado na Junta Comercial, que cria a sociedade e define o
        essencial: capital, objeto, administração. O acordo de sócios é um
        contrato paralelo, geralmente reservado, que regula a relação entre os
        sócios — como votam, como vendem, como saem e como decidem quando
        discordam.
      </p>
      <p>
        Na sociedade anônima, esse instrumento tem base legal expressa no
        artigo 118 da Lei das S.A. (Lei 6.404/76), que reconhece o acordo de
        acionistas sobre compra e venda de ações, preferência, exercício do
        direito de voto e poder de controle. Na sociedade limitada — formato
        da imensa maioria das empresas brasileiras —, o acordo encontra amparo
        no Código Civil (Lei 10.406/2002) e na aplicação supletiva da Lei das
        S.A., quando o contrato social assim o prevê.
      </p>
      <p>
        O ponto que mais surpreende empresários é a força executória desses
        acordos. Quando arquivado na sede da companhia, o acordo de acionistas
        deve ser observado por ela, e suas obrigações admitem execução
        específica — ou seja, o sócio pode ser compelido a cumprir o que
        pactuou, e não apenas a pagar perdas e danos depois.
      </p>

      <p style={{ marginTop: 24, padding: '18px 22px', borderLeft: '3px solid var(--accent)', background: 'var(--bg-deep)', fontSize: 15, lineHeight: 1.65 }}>
        <strong>Em termos práticos:</strong> o acordo de sócios bem redigido
        transforma a palavra dada na fundação da empresa em obrigação
        exigível. É a diferença entre &ldquo;combinamos isso&rdquo; e
        &ldquo;isso é executável&rdquo;.
      </p>

      <h2 id="entrada-saida">Entrada e saída: <span className="s-it">quem pode ser sócio</span></h2>
      <p>
        A maior parte dos litígios societários começa numa pergunta simples:
        quem pode entrar e como alguém sai? As cláusulas abaixo respondem a
        isso antes do conflito.
      </p>
      <p>
        <strong>Direito de preferência.</strong> Impede que um sócio venda sua
        participação a um terceiro sem antes oferecê-la aos demais, nas mesmas
        condições. É a cláusula que evita que você acorde, um dia, dividindo a
        empresa com um desconhecido — ou com um concorrente.
      </p>
      <p>
        <strong>Lock-up.</strong> Define um período inicial em que nenhum sócio
        pode vender sua participação. Protege a sociedade na fase mais
        sensível, quando a saída de um fundador pode desestabilizar a operação.
      </p>
      <p>
        <strong>Tag along (direito de venda conjunta).</strong> Garante ao
        sócio minoritário o direito de vender sua participação nas mesmas
        condições obtidas pelo majoritário que decidir sair. Protege quem fica
        em desvantagem numa negociação que não conduziu.
      </p>
      <p>
        <strong>Drag along (obrigação de venda conjunta).</strong> O espelho do
        anterior: permite que o majoritário, ao vender o controle, obrigue os
        minoritários a vender também. Sem essa cláusula, um sócio com fração
        pequena pode inviabilizar uma operação inteira de venda da empresa.
      </p>
      <p>
        <strong>Vesting.</strong> Comum em startups e em sociedades onde
        alguém entra pelo trabalho e não pelo capital, condiciona a aquisição
        definitiva da participação ao cumprimento de tempo ou de metas. Evita
        que um sócio que saiu no sexto mês leve consigo a fatia integral
        prometida para cinco anos de dedicação.
      </p>

      <h2 id="impasse">O impasse: <span className="s-it">o litígio que você não previu</span></h2>
      <p>
        O conflito societário mais perigoso não é o de má-fé. É o empate
        honesto — dois sócios 50/50 que, agindo de boa-fé, simplesmente
        discordam sobre reinvestir ou distribuir, expandir ou consolidar,
        demitir ou manter. Sem mecanismo de desempate, a empresa trava. E uma
        empresa travada tende ao único desfecho que ninguém quer: a dissolução
        judicial.
      </p>
      <p>
        As cláusulas de impasse (<em>deadlock</em>) existem para que a
        sociedade resolva sozinha o que, de outro modo, um juiz resolveria por
        ela:
      </p>
      <p>
        <strong>Voto de qualidade ou critério de desempate.</strong> Atribui a
        um sócio, ao presidente do conselho ou a um terceiro independente o
        poder de decidir em caso de empate em matérias específicas.
      </p>
      <p>
        <strong>Mediação prévia obrigatória.</strong> Exige que, antes de
        qualquer medida drástica, os sócios submetam o impasse a um mediador.
        Muitos conflitos morrem nessa etapa, antes de escalarem.
      </p>
      <p>
        <strong>Cláusula de compra e venda recíproca (buy-sell).</strong> Em
        sua versão mais conhecida — informalmente chamada de
        &ldquo;roleta-russa&rdquo; —, um sócio oferece comprar a parte do
        outro por um preço; o outro tem de aceitar vender por esse valor ou
        comprar a parte de quem ofereceu pelo mesmo preço. O mecanismo força
        um preço justo (quem propõe não sabe de que lado ficará) e desfaz o
        impasse sem destruir a empresa.
      </p>
      <p>
        A ausência dessas cláusulas é, na experiência prática, a origem mais
        comum do litígio que ninguém previu na fundação — porque ninguém
        imaginava discordar.
      </p>

      <h2 id="saida-morte">Saída, morte e divórcio: <span className="s-it">os eventos que ninguém agenda</span></h2>
      <p>
        Sociedades não terminam só por brigas. Terminam por vida: alguém quer
        sair, alguém adoece, alguém falece, alguém se divorcia. O Código Civil
        oferece regras padrão para esses eventos — e o problema é justamente
        que elas são padrão, frequentemente inadequadas à realidade de cada
        empresa.
      </p>
      <p>
        <strong>Saída voluntária (recesso).</strong> O artigo 1.077 do Código
        Civil assegura ao sócio de limitada o direito de retirar-se em
        hipóteses como a modificação do contrato. O acordo pode disciplinar
        prazos, aviso prévio e — sobretudo — a forma de pagamento da
        participação, evitando que a saída de um sócio drene o caixa da
        empresa de uma vez.
      </p>
      <p>
        <strong>Exclusão de sócio.</strong> O artigo 1.085 admite a exclusão
        extrajudicial de sócio por falta grave, desde que prevista no contrato
        e deliberada pela maioria; o artigo 1.030 trata da exclusão judicial.
        Definir, no acordo, o que se considera falta grave e qual o rito de
        exclusão evita anos de discussão sobre se a saída foi legítima.
      </p>
      <p>
        <strong>Morte do sócio.</strong> Pelo artigo 1.028, em regra a quota
        do sócio falecido é liquidada — salvo disposição contratual diversa
        ou acordo com os herdeiros. Sem cláusula clara, a empresa pode se ver,
        da noite para o dia, com herdeiros que não conhecem o negócio sentados
        à mesa de decisões. O acordo pode prever a liquidação da participação
        em condições previsíveis ou as regras de eventual ingresso.
      </p>
      <p>
        <strong>Divórcio do sócio.</strong> Dependendo do regime de bens, a
        participação societária integra a partilha — e o ex-cônjuge pode
        passar a ter direitos econômicos sobre as quotas. Cláusulas que
        limitam esse ingresso à esfera patrimonial (sem direito de voto ou
        gestão) protegem a continuidade do negócio.
      </p>
      <p>
        Há um denominador comum a todos esses eventos: a apuração de haveres,
        o cálculo de quanto vale a participação de quem sai. O artigo 1.031 do
        Código Civil estabelece a regra geral, mas o método de avaliação —
        balanço de determinação, fluxo de caixa descontado, múltiplo de
        faturamento — é o ponto que mais gera disputa. O Superior Tribunal de
        Justiça tem enfrentado reiteradamente a controvérsia sobre o critério
        adequado, justamente porque os contratos costumam silenciar a
        respeito. Definir o método de apuração no acordo de sócios elimina, de
        antemão, um dos litígios societários mais longos e custosos.
      </p>
      <p>
        A combinação entre prática consolidada em Direito Empresarial — área
        de pós-graduação do Dr. Jorge no IBMEC — e décadas de atuação em
        Direito Público dá ao escritório uma leitura que cruza a governança
        privada com a lógica do regulador, útil sobretudo para empresas que
        também negociam com a Administração.
      </p>

      <h2 id="arbitragem">Como o conflito será resolvido: <span className="s-it">arbitragem e escalonamento</span></h2>
      <p>
        Mesmo o melhor acordo não elimina todo conflito — ele organiza onde e
        como o conflito será resolvido. E o foro escolhido faz enorme
        diferença em tempo, custo e confidencialidade.
      </p>
      <p>
        A solução mais usada em sociedades de porte é a cláusula
        compromissória, que submete os litígios à arbitragem (Lei 9.307/96),
        em vez do Judiciário. A arbitragem tende a ser mais rápida, sigilosa e
        conduzida por árbitros com conhecimento técnico do tema societário — o
        que importa quando o conflito envolve <em>valuation</em>,
        contabilidade e estrutura de capital.
      </p>
      <p>
        Mais eficiente ainda é a cláusula escalonada: negociação direta entre
        os sócios, seguida de mediação (Lei 13.140/2015) e, só então,
        arbitragem. Cada degrau filtra parte dos conflitos antes de chegar ao
        seguinte. Quando a opção for pelo Judiciário, define-se o foro — mas,
        nesse caso, perdem-se a confidencialidade e a especialização.
      </p>

      <h3>Com e sem acordo de sócios: o que muda</h3>
      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Evento</th>
              <th>Sem acordo de sócios</th>
              <th>Com acordo bem redigido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Saída de um sócio</td>
              <td>Negociação do zero, sob tensão; risco de impasse</td>
              <td>Regras de saída, prazo e forma de pagamento já definidos</td>
            </tr>
            <tr>
              <td>Empate em decisão (<em>deadlock</em>)</td>
              <td>Empresa trava; risco de dissolução judicial</td>
              <td>Mecanismo de desempate ou buy-sell resolve internamente</td>
            </tr>
            <tr>
              <td>Morte de sócio</td>
              <td>Herdeiros podem ingressar e participar da gestão</td>
              <td>Liquidação ou ingresso disciplinados previamente</td>
            </tr>
            <tr>
              <td>Venda da participação</td>
              <td>Terceiro desconhecido pode entrar na sociedade</td>
              <td>Direito de preferência, tag along e drag along protegem</td>
            </tr>
            <tr>
              <td>Conflito</td>
              <td>Processo público, longo, no Judiciário</td>
              <td>Mediação e arbitragem, com sigilo e técnica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="checklist">Checklist <span className="s-it">do acordo de sócios</span></h2>
      <p>Um acordo de sócios robusto costuma endereçar, no mínimo:</p>
      <ul>
        <li>Direito de preferência na cessão de quotas ou ações.</li>
        <li>Tag along e drag along, calibrados conforme a posição de cada sócio.</li>
        <li>Lock-up e, quando houver sócio operacional, vesting.</li>
        <li>Mecanismo de desempate / buy-sell para situações de impasse.</li>
        <li>Regras de exclusão e de recesso, com definição do que é falta grave.</li>
        <li>Tratamento da morte e do divórcio do sócio, incluindo ingresso de herdeiros e ex-cônjuge.</li>
        <li>Método de apuração de haveres definido com clareza.</li>
        <li>Cláusula de resolução de conflitos (mediação e arbitragem), de preferência escalonada.</li>
        <li>Confidencialidade e não concorrência, quando o negócio justificar.</li>
      </ul>

      <h2 id="conclusao">Considerações finais: <span className="s-it">o acordo que você assina hoje é a defesa que você não precisará amanhã</span></h2>
      <p>
        O litígio societário raramente surge de quem agiu de má-fé. Surge da
        lacuna — do que ninguém combinou porque, no dia da fundação, parecia
        desnecessário combinar. O acordo de sócios é, no fundo, um exercício
        de prudência: registrar, enquanto há consenso, as regras que serão
        aplicadas quando o consenso faltar.
      </p>
      <p>
        Estruturar esse documento não é prever o pior. É garantir que, se o
        pior chegar, a empresa tenha um mapa em vez de um campo de batalha.
      </p>

      <h2 id="faq">Perguntas frequentes</h2>
      <h3>Acordo de sócios e contrato social são a mesma coisa?</h3>
      <p>
        Não. O contrato social cria a sociedade e é registrado na Junta
        Comercial. O acordo de sócios é um contrato paralelo, geralmente
        reservado, que regula a relação entre os sócios — voto, saída, venda
        e resolução de conflitos.
      </p>
      <h3>Sociedade limitada pode ter acordo de sócios?</h3>
      <p>
        Sim. Embora a previsão expressa esteja na Lei das S.A. (art. 118), o
        acordo é plenamente válido na limitada, com base no Código Civil e na
        aplicação supletiva da Lei das S.A. quando o contrato social a prevê.
      </p>
      <h3>O acordo de sócios pode obrigar alguém a vender sua participação?</h3>
      <p>
        Pode, em situações pactuadas — como a cláusula de drag along, que
        obriga o minoritário a acompanhar a venda do controle, ou o buy-sell,
        que força uma definição em caso de impasse. São obrigações livremente
        assumidas pelos sócios.
      </p>
      <h3>O que é apuração de haveres e por que gera tantos processos?</h3>
      <p>
        É o cálculo do valor da participação de quem sai da sociedade. O
        Código Civil traz a regra geral (art. 1.031), mas o método de
        avaliação costuma não ser definido em contrato — e essa indefinição é
        uma das maiores fontes de litígio societário. Fixar o critério no
        acordo previne a disputa.
      </p>
      <h3>É possível incluir arbitragem no acordo de sócios?</h3>
      <p>
        Sim. A cláusula compromissória submete os conflitos à arbitragem (Lei
        9.307/96), em geral mais rápida, sigilosa e técnica do que o
        Judiciário. É comum combiná-la com mediação prévia, numa cláusula
        escalonada.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página de{' '}
        <Link href="/atuacao/corporativo">Direito Empresarial e Corporativo</Link>{' '}
        reúne a atuação em societário, governança e contratos empresariais;
        ver também{' '}
        <Link href="/blog/due-diligence-passivos-ocultos-comprador">Due diligence: o que o comprador descobre tarde demais</Link>{' '}
        e{' '}
        <Link href="/blog/holding-familiar-3-perguntas">Holding familiar: três perguntas antes de estruturar</Link>.
      </p>
    </>
  ),

  // ───────────── Publicado em 2026-06-10 ─────────────
  'revisao-contratual-desequilibrio-contrato': () => (
    <>
      <JsonLd data={FAQ_REVISAO_CONTRATUAL} />

      <p>
        Todo contrato nasce dentro de uma fotografia: a do momento em que foi
        assinado. As partes calculam preços, prazos e riscos com base na
        realidade daquele dia. O problema é que contratos de trato sucessivo —
        um aluguel de cinco anos, um financiamento de dez, um fornecimento de
        longo prazo — atravessam realidades que ninguém fotografou. E quando a
        realidade muda a ponto de transformar o que era equilibrado em algo
        desproporcional, surge a pergunta que move este artigo: dá para rever o
        que foi assinado, ou o contrato é mesmo intocável?
      </p>
      <p>
        A resposta curta é que o contrato continua sendo, em regra, obrigatório
        — mas essa obrigatoriedade não é absoluta. O direito brasileiro tem
        válvulas de escape pensadas exatamente para o desequilíbrio
        superveniente. Conhecê-las é o que separa quem renegocia com fundamento
        de quem apenas reclama que &ldquo;o negócio ficou ruim&rdquo;.
      </p>

      <p style={{ marginTop: 24, padding: '18px 22px', borderLeft: '3px solid var(--accent)', background: 'var(--bg-deep)', fontSize: 15, lineHeight: 1.65 }}>
        <strong>Resposta direta:</strong> A revisão contratual é a alteração —
        judicial ou consensual — das cláusulas de um contrato válido quando um
        fato superveniente e imprevisível torna a prestação de uma das partes
        excessivamente onerosa, rompendo o equilíbrio original. Diferente da
        rescisão, ela preserva o contrato: apenas reajusta o que se tornou
        desproporcional, com base na boa-fé e no Código Civil.
      </p>

      <nav className="article-toc" aria-label="Sumário">
        <div className="article-toc-title">Sumário</div>
        <ol>
          <li><a href="#forca-obrigatoria">Se o contrato é lei entre as partes, como pode ser revisto?</a></li>
          <li><a href="#o-que-e">O que é revisão contratual — e o que ela não é</a></li>
          <li><a href="#quando-cabe">Quando o desequilíbrio autoriza rever o contrato?</a></li>
          <li><a href="#regimes-especiais">Locação, financiamento e consumo seguem a mesma regra?</a></li>
          <li><a href="#variacao-normal">Inflação e variação normal de mercado dão direito à revisão?</a></li>
          <li><a href="#comparativo">Quadro comparativo</a></li>
          <li><a href="#faq">Perguntas frequentes</a></li>
        </ol>
      </nav>

      <h2 id="forca-obrigatoria">Se o contrato é lei entre as partes, <span className="s-it">como pode ser revisto?</span></h2>
      <p>
        A força obrigatória dos contratos — a ideia de que o pactuado deve ser
        cumprido (<em>pacta sunt servanda</em>) — é um dos pilares da segurança
        jurídica. Sem ela, nenhum negócio de longo prazo seria confiável. Por
        isso o Código Civil reforça, desde a Lei da Liberdade Econômica (Lei
        13.874/2019), no art. 421-A, que os contratos civis e empresariais são
        presumidos paritários e simétricos, e que a revisão deve ser
        excepcional e limitada. A regra, portanto, é cumprir.
      </p>
      <p>
        Mas ao lado da obrigatoriedade convive um princípio mais antigo: a
        cláusula <em>rebus sic stantibus</em> — a noção implícita de que as
        partes se obrigam enquanto as circunstâncias de base permanecerem
        essencialmente as mesmas. Quando um acontecimento extraordinário rompe
        essas circunstâncias, o cumprimento literal pode deixar de ser justiça
        contratual e passar a ser sacrifício de uma parte em proveito
        desproporcional da outra. É aí que o ordenamento autoriza intervir —
        não para premiar quem fez mau negócio, mas para restaurar o equilíbrio
        que o contrato pressupunha.
      </p>

      <h2 id="o-que-e">O que é revisão contratual — <span className="s-it">e o que ela não é</span></h2>
      <p>
        Revisar não é desfazer. A revisão preserva o vínculo e corrige a
        cláusula que se tornou desproporcional — por exemplo, ajustando um
        valor, um índice ou um prazo. É diferente da resolução (extinção do
        contrato por descumprimento ou por onerosidade excessiva) e da
        anulação (desfazimento por vício na formação).
      </p>
      <p>Também é importante o que a revisão não é:</p>
      <ul>
        <li><strong>Não é arrependimento.</strong> Mudar de ideia, ou perceber que outro fornecedor cobraria menos, não é causa de revisão.</li>
        <li><strong>Não cobre a álea normal do contrato.</strong> Todo negócio embute riscos previsíveis — oscilação de demanda, variação ordinária de preço. Quem assina assume esse risco.</li>
        <li><strong>Não é instrumento para reescrever um mau negócio.</strong> A desvantagem precisa decorrer de um evento superveniente e qualificado, não da própria avaliação equivocada de quem contratou.</li>
      </ul>

      <h2 id="quando-cabe">Quando o desequilíbrio <span className="s-it">autoriza rever o contrato?</span></h2>
      <p>
        O Código Civil oferece mais de uma porta, e elas não se confundem.
      </p>
      <p>
        <strong>Onerosidade excessiva superveniente (arts. 478 a 480).</strong>{' '}
        Segundo o art. 478 do Código Civil, nos contratos de execução
        continuada ou diferida, se a prestação de uma parte se tornar
        excessivamente onerosa, com extrema vantagem para a outra, em virtude
        de acontecimentos extraordinários e imprevisíveis, a parte prejudicada
        pode pedir a resolução. O art. 479 permite que o réu evite a extinção
        oferecendo a modificação equitativa das condições — ou seja, abre
        caminho para a revisão em vez do fim do contrato. O art. 480 trata dos
        contratos unilaterais, autorizando a redução da prestação.
      </p>
      <p>
        <strong>Revisão por desproporção manifesta (art. 317).</strong> Quando,
        por motivos imprevisíveis, sobrevém desproporção manifesta entre o
        valor da prestação devida e o do momento de sua execução, o juiz pode
        corrigir esse valor para assegurar, na medida do possível, o
        equilíbrio. É a via revisional propriamente dita: não extingue,
        recalibra.
      </p>
      <p>
        <strong>Vícios na formação (arts. 156 e 157).</strong> Aqui o
        desequilíbrio é de origem, não superveniente. O estado de perigo (art.
        156) e a lesão (art. 157) atacam contratos em que uma parte assumiu
        obrigação desproporcional sob necessidade ou inexperiência. No caso da
        lesão, o próprio § 2º do art. 157 admite que o negócio seja preservado
        se a parte favorecida oferecer suplemento ou concordar com a redução —
        revisão, novamente, em vez de anulação.
      </p>
      <p>
        Sustentando todas essas portas estão dois princípios transversais: a
        boa-fé objetiva (art. 422) e a função social do contrato (art. 421),
        que orientam tanto a interpretação quanto a execução do que foi
        pactuado.
      </p>

      <p style={{ marginTop: 24, padding: '18px 22px', borderLeft: '3px solid var(--accent)', background: 'var(--bg-deep)', fontSize: 15, lineHeight: 1.65 }}>
        Na atuação consultiva do escritório em renegociações de contratos de
        locação e de fornecimento de longo prazo, é comum que a via mais
        eficiente seja a repactuação direta entre as partes — com a ação
        revisional reservada aos casos em que a contraparte se recusa a
        discutir um desequilíbrio evidente. O caminho judicial costuma ser a
        segunda etapa, não a primeira.
      </p>

      <h2 id="regimes-especiais">Locação, financiamento e consumo <span className="s-it">seguem a mesma regra?</span></h2>
      <p>
        Não — e é justamente aqui que muita confusão se instala. O regime
        aplicável muda conforme o tipo de contrato.
      </p>
      <p>
        <strong>Locação.</strong> A Lei do Inquilinato (Lei 8.245/1991) tem
        mecanismo próprio: a ação revisional de aluguel do art. 19, que pode
        ser proposta após três anos de vigência do contrato ou do último
        acordo, com o objetivo de ajustar o valor ao preço de mercado. Note a
        diferença: essa revisão não depende de evento extraordinário; depende
        do decurso do prazo e da defasagem em relação ao mercado. É instituto
        distinto da revisão por onerosidade excessiva do Código Civil.
      </p>
      <p>
        <strong>Contratos de consumo.</strong> Quando há relação de consumo,
        aplica-se o Código de Defesa do Consumidor (Lei 8.078/1990). O art.
        6º, V, autoriza a modificação de cláusulas desproporcionais e a
        revisão por fatos supervenientes que as tornem excessivamente onerosas
        — e, diferentemente do Código Civil, não exige que o fato fosse
        imprevisível. Basta o fato superveniente e a onerosidade excessiva. É
        um regime mais favorável a quem pede a revisão, mas que não dispensa a
        demonstração concreta do desequilíbrio.
      </p>
      <p>
        <strong>Financiamentos e contratos bancários.</strong> Em
        financiamentos (de veículo, de imóvel), a revisão costuma girar em
        torno de encargos e juros. O ponto sensível é que &ldquo;ficou
        caro&rdquo; não é, por si, causa de revisão: é preciso demonstrar
        abusividade concreta de uma cláusula específica à luz do regime
        aplicável (civil ou consumerista). Cada contrato exige análise própria
        de suas cláusulas e índices — não há fórmula geral.
      </p>
      <p>
        A desambiguação importa: tratar locação, consumo e contrato civil
        paritário como se fossem o mesmo regime é o erro que enfraquece a
        maioria dos pedidos de revisão.
      </p>

      <h2 id="variacao-normal">Inflação e variação normal de mercado <span className="s-it">dão direito à revisão?</span></h2>
      <p>
        Em regra, não. Variação cambial, inflação dentro de patamares
        esperados e oscilação ordinária de preços integram a álea normal dos
        contratos de longo prazo — são riscos que as partes assumem ao
        contratar e que, no regime civil, não preenchem o requisito de evento
        &ldquo;extraordinário e imprevisível&rdquo;.
      </p>
      <p>
        O que pode autorizar a revisão é o fato qualificado: um acontecimento
        fora da normalidade contratual, capaz de romper a equação econômica de
        forma que nenhuma das partes razoavelmente projetaria. Mesmo então,
        três elementos costumam ser decisivos na prática:
      </p>
      <ul>
        <li><strong>Nexo entre o evento superveniente e o desequilíbrio.</strong> É preciso ligar o fato à onerosidade — não basta apontar o prejuízo.</li>
        <li><strong>Excepcionalidade da medida.</strong> O art. 421-A reforça que a intervenção é exceção; o pedido deve ser proporcional e bem delimitado.</li>
        <li><strong>Tentativa de solução consensual.</strong> Documentar a busca de repactuação fortalece a posição de quem eventualmente precisa ir ao Judiciário.</li>
      </ul>

      <h2 id="comparativo">Quadro <span className="s-it">comparativo</span></h2>
      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Instituto</th>
              <th>Fundamento</th>
              <th>Quando cabe</th>
              <th>Efeito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Onerosidade excessiva</td>
              <td>CC, arts. 478–480</td>
              <td>Evento extraordinário e imprevisível em contrato continuado/diferido</td>
              <td>Resolução — ou modificação equitativa (revisão)</td>
            </tr>
            <tr>
              <td>Revisão por desproporção</td>
              <td>CC, art. 317</td>
              <td>Desproporção manifesta por motivo imprevisível na execução</td>
              <td>Correção do valor da prestação</td>
            </tr>
            <tr>
              <td>Lesão / estado de perigo</td>
              <td>CC, arts. 156–157</td>
              <td>Desequilíbrio na formação do contrato</td>
              <td>Anulação — ou revisão (art. 157, § 2º)</td>
            </tr>
            <tr>
              <td>Revisional de aluguel</td>
              <td>Lei 8.245/91, art. 19</td>
              <td>Após 3 anos; aluguel defasado do mercado</td>
              <td>Reajuste ao preço de mercado</td>
            </tr>
            <tr>
              <td>Revisão consumerista</td>
              <td>CDC, art. 6º, V</td>
              <td>Fato superveniente que gera onerosidade (sem exigir imprevisibilidade)</td>
              <td>Modificação ou revisão da cláusula</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="faq">Perguntas frequentes</h2>
      <h3>Posso pedir revisão só porque o contrato ficou desvantajoso para mim?</h3>
      <p>
        Não. Mau negócio, arrependimento e desvantagem decorrente da álea
        normal do contrato não autorizam revisão. É preciso um fato
        superveniente qualificado que rompa o equilíbrio — e, no regime
        civil, que esse fato seja extraordinário e imprevisível.
      </p>
      <h3>Inflação alta dá direito a rever o contrato?</h3>
      <p>
        Em regra, não. Inflação e variação de mercado dentro do esperado
        integram o risco assumido por quem contrata a longo prazo. A revisão
        pressupõe um acontecimento fora da normalidade contratual, com nexo
        claro entre o evento e o desequilíbrio.
      </p>
      <h3>Qual a diferença entre revisar e rescindir o contrato?</h3>
      <p>
        Revisar preserva o contrato e corrige a cláusula que se tornou
        desproporcional. Rescindir (ou resolver) extingue o vínculo. A
        própria lei, em vários pontos, prefere a revisão à extinção quando
        isso restaura o equilíbrio.
      </p>
      <h3>Preciso ir à Justiça para revisar um contrato?</h3>
      <p>
        Não necessariamente. A via mais rápida costuma ser a repactuação
        consensual, formalizada em aditivo contratual. A ação revisional
        entra quando não há acordo e o desequilíbrio é demonstrável.
      </p>
      <h3>Em quanto tempo posso pedir revisão de aluguel?</h3>
      <p>
        Na locação regida pela Lei 8.245/91, a ação revisional de aluguel
        pode ser proposta após três anos de vigência do contrato ou do último
        acordo de valor, para ajustar o aluguel ao preço de mercado.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página de{' '}
        <Link href="/atuacao/direito-civil">Direito Civil</Link>{' '}
        reúne a atuação em contratos, responsabilidade civil, família e
        sucessões; ver também{' '}
        <Link href="/blog/acordo-de-socios-clausulas-litigio">Acordo de sócios: as cláusulas que evitam o litígio que você não previu</Link>{' '}
        e{' '}
        <Link href="/blog/holding-familiar-3-perguntas">Holding familiar: três perguntas antes de estruturar</Link>.
      </p>
    </>
  ),

  // ───────────── Publicado em 2026-06-10 ─────────────
  'inventario-extrajudicial-ou-judicial-criterio': () => (
    <>
      <JsonLd data={FAQ_INVENTARIO} />

      <p>
        Quando alguém falece e deixa bens, a primeira pergunta da família
        costuma ser prática: isso se resolve em cartório ou vai ter que ir
        para a Justiça? A resposta que circula — em conversas de família, em
        textos rápidos na internet e até em alguns escritórios — é uma
        checklist mecânica: tem testamento? tem herdeiro menor? Se a resposta
        for sim para qualquer uma delas, &ldquo;então é judicial&rdquo;. Por
        muito tempo, essa leitura foi suficiente. Hoje, ela leva a decisões
        erradas.
      </p>
      <p>
        O motivo é que o mapa mudou. A Resolução CNJ 571/2024 e mais de uma
        década de jurisprudência do Superior Tribunal de Justiça reescreveram
        as fronteiras entre o inventário em cartório e o inventário no fórum.
        O testamento deixou de ser uma muralha; o herdeiro menor deixou de ser
        um impedimento automático. O que sobrou — e o que pouca gente de fato
        aplica antes de decidir — é um critério mais simples e mais decisivo
        do que a velha checklist. Este artigo mostra qual é.
      </p>

      <p style={{ marginTop: 24, padding: '18px 22px', borderLeft: '3px solid var(--accent)', background: 'var(--bg-deep)', fontSize: 15, lineHeight: 1.65 }}>
        <strong>Resposta direta:</strong> O inventário pode correr em cartório
        (extrajudicial, por escritura pública) ou na Justiça. O critério
        decisivo não é a existência de testamento ou de herdeiro menor —
        desde a Resolução CNJ 571/2024, os dois admitem a via extrajudicial. O
        que realmente define é o consenso entre todos os herdeiros capazes e a
        ausência de conflito de interesses.
      </p>

      <nav className="article-toc" aria-label="Sumário">
        <div className="article-toc-title">Sumário</div>
        <ol>
          <li><a href="#diferenca-importa">Inventário em cartório ou no fórum: a diferença que importa</a></li>
          <li><a href="#regra-antiga">De onde vem a regra &ldquo;tem testamento ou menor, então é judicial&rdquo;</a></li>
          <li><a href="#criterio">O critério que pouca gente aplica: consenso e ausência de conflito</a></li>
          <li><a href="#testamento">Testamento: dá para inventariar em cartório?</a></li>
          <li><a href="#menor-incapaz">Herdeiro menor ou incapaz: o que a Resolução 571/2024 liberou</a></li>
          <li><a href="#obrigatoriamente-judicial">Quando o inventário ainda é obrigatoriamente judicial</a></li>
          <li><a href="#o-que-nao-muda">O que não muda entre as duas vias: prazo, ITCMD e advogado</a></li>
          <li><a href="#faq">Perguntas frequentes</a></li>
        </ol>
      </nav>

      <h2 id="diferenca-importa">Inventário em cartório ou no fórum: <span className="s-it">a diferença que importa</span></h2>
      <p>
        Inventário é o procedimento que apura o patrimônio deixado por quem
        faleceu — bens, direitos e dívidas — e o transfere aos herdeiros por
        meio da partilha. Ele pode seguir dois caminhos.
      </p>
      <p>
        O <strong>inventário extrajudicial</strong> é feito em um Tabelionato
        de Notas, por escritura pública. Foi a{' '}
        <a href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/lei/l11441.htm" target="_blank" rel="noopener noreferrer">Lei 11.441/2007</a>{' '}
        que abriu essa porta, com o objetivo declarado de tirar do Judiciário
        os casos em que não há litígio. Costuma ser mais rápido e mais barato,
        porque dispensa a tramitação de um processo.
      </p>
      <p>
        O <strong>inventário judicial</strong> corre perante o juiz, na vara
        competente. É o caminho necessário quando há disputa entre os
        herdeiros ou quando a situação exige a chancela do juiz para proteger
        algum interesse.
      </p>
      <p>
        Dois pontos valem desde já, porque não dependem da via escolhida: em
        ambos é obrigatória a presença de advogado (art. 610, § 2º, do{' '}
        <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm" target="_blank" rel="noopener noreferrer">Código de Processo Civil</a>),
        e em ambos incide o ITCMD, o imposto estadual sobre herança. Estando
        atendidos os requisitos, a escolha entre as duas vias é uma
        prerrogativa dos próprios interessados.
      </p>

      <h2 id="regra-antiga">De onde vem a regra <span className="s-it">&ldquo;tem testamento ou menor, então é judicial&rdquo;</span></h2>
      <p>
        A checklist popular não nasceu do nada. Ela é leitura literal do art.
        610 do CPC:
      </p>
      <blockquote>
        Havendo testamento ou interessado incapaz, proceder-se-á ao inventário
        judicial. § 1º Se todos forem capazes e concordes, o inventário e a
        partilha poderão ser feitos por escritura pública.
        <cite>Código de Processo Civil, art. 610.</cite>
      </blockquote>
      <p>
        O Código Civil reforça no mesmo sentido: segundo o art. 2.016,
        &ldquo;será sempre judicial a partilha, se os herdeiros divergirem,
        assim como se algum deles for incapaz&rdquo; (
        <a href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" target="_blank" rel="noopener noreferrer">Lei 10.406/2002</a>
        ).
      </p>
      <p>
        Lido ao pé da letra, o caput parece fechar a porta: testamento ou
        incapaz, vai para a Justiça. Foi assim que a regra entrou no senso
        comum. O problema é que o sentido por trás da lei nunca foi esse. A
        exposição de motivos da Lei 11.441/2007 tratava como obstáculo não o
        testamento em si, mas a <strong>litigiosidade</strong> em torno dele.
        Onde não há briga, o motivo do bloqueio desaparece — e foi exatamente
        esse raciocínio que os tribunais e, depois, o CNJ passaram a aplicar.
      </p>

      <h2 id="criterio">O critério que pouca gente aplica: <span className="s-it">consenso e ausência de conflito</span></h2>
      <p>
        Aqui está o ponto que o título promete. O elemento que realmente
        separa o cartório do fórum não é nenhum item da checklist. É a
        combinação de duas condições:
      </p>
      <ol>
        <li><strong>Todos os herdeiros capazes estão de acordo com a partilha</strong> — há consenso real, não apenas ausência de briga aparente.</li>
        <li><strong>Não há conflito de interesses</strong> que coloque um herdeiro contra o outro ou ameace os direitos de quem não pode se defender sozinho.</li>
      </ol>
      <p>
        O STJ já dizia isso antes mesmo da resolução do CNJ. Ao julgar o tema,
        a Corte registrou que a legislação contemporânea reserva a via
        judicial às hipóteses de litígio entre herdeiros — e que, &ldquo;se a
        via judicial é prescindível, não há razoabilidade em se proibir, na
        ausência de conflito de interesses&rdquo;, que herdeiros maiores e
        capazes recorram ao cartório. Testamento e herdeiro menor, nessa
        leitura, são <strong>condições a cumprir</strong>, não muralhas
        intransponíveis.
      </p>
      <p>
        É por isso que a pergunta certa, na primeira conversa, não é &ldquo;tem
        testamento?&rdquo; nem &ldquo;tem menor?&rdquo;. É: <em>existe
        consenso pleno entre os herdeiros capazes e algum conflito de
        interesses a proteger?</em> Quem aplica esse critério acerta a via na
        primeira tentativa. Quem se prende à checklist antiga muitas vezes
        manda para o fórum um caso que resolveria no tabelionato — ou tenta o
        cartório onde havia litígio escondido.
      </p>

      <p style={{ marginTop: 24, padding: '18px 22px', borderLeft: '3px solid var(--accent)', background: 'var(--bg-deep)', fontSize: 15, lineHeight: 1.65 }}>
        Na atuação do escritório em inventários de famílias com patrimônio
        variado — imóvel, quotas de empresa, aplicações financeiras —, a
        primeira reunião raramente começa por cartório versus fórum. Começa
        por mapear se há consenso genuíno sobre quem fica com o quê e se
        algum herdeiro tem interesses que possam colidir com os dos demais. É
        esse diagnóstico, e não a simples presença de um testamento, que
        costuma definir o caminho.
      </p>

      <h2 id="testamento">Testamento: <span className="s-it">dá para inventariar em cartório?</span></h2>
      <p>
        Sim — com uma condição. Em decisão de 2019, a Quarta Turma do STJ
        (REsp 1.808.767/RJ, relator o Ministro Luis Felipe Salomão) assentou
        que <strong>é possível o inventário extrajudicial ainda que exista
        testamento</strong>, desde que os interessados sejam maiores, capazes
        e concordes, estejam assistidos por advogado, e o testamento já tenha
        sido <strong>previamente registrado em juízo</strong> ou haja{' '}
        <strong>autorização expressa do juízo competente</strong>. A Terceira
        Turma reafirmou o entendimento no REsp 1.951.456/RS.
      </p>
      <p>
        A Resolução CNJ 571/2024 incorporou essa orientação às regras dos
        cartórios. Hoje, havendo testamento, o caminho é: abrir e cumprir o
        testamento em ação judicial específica, com sentença transitada em
        julgado; e, autorizado pelo juízo, lavrar a partilha por escritura
        pública, com todos os herdeiros capazes, concordes e assistidos por
        advogado.
      </p>
      <p>
        Em resumo: o testamento não joga o caso inteiro para a Justiça. Ele
        exige um passo judicial — a abertura e o cumprimento — mas a partilha
        pode ser concluída em cartório. O que continua valendo é o critério do
        tópico anterior: capacidade, consenso e ausência de conflito.
      </p>

      <h2 id="menor-incapaz">Herdeiro menor ou incapaz: <span className="s-it">o que a Resolução 571/2024 liberou</span></h2>
      <p>
        Essa é a mudança mais sentida na prática. Antes de agosto de 2024, a
        simples presença de um filho menor entre os herdeiros obrigava o
        inventário judicial, com curadoria do Ministério Público e decisão do
        juiz. Inventários simples se arrastavam por anos só por causa disso.
      </p>
      <p>
        A{' '}
        <a href="https://atos.cnj.jus.br/atos/detalhar/5705" target="_blank" rel="noopener noreferrer">Resolução CNJ 571/2024</a>,
        que alterou a Resolução 35/2007, passou a admitir o inventário
        extrajudicial mesmo com herdeiro menor ou incapaz, desde que cumpridos{' '}
        <strong>dois requisitos cumulativos</strong>:
      </p>
      <ul>
        <li><strong>Manifestação favorável do Ministério Público</strong> sobre os termos da partilha; e</li>
        <li><strong>Partilha em quinhões iguais</strong> — cada herdeiro recebe fração ideal idêntica sobre todos os bens, de modo que o incapaz não seja prejudicado nem indevidamente favorecido.</li>
      </ul>
      <p>
        A lógica é proteger quem não pode defender os próprios interesses. Por
        isso, se a partilha pretendida for desigual, ou se a família quiser
        atribuir bens específicos a herdeiros específicos (em vez de frações
        iguais sobre tudo), o caminho volta a ser o judicial. E há um limite
        que nenhuma resolução afasta: havendo <strong>conflito de
        interesses</strong> — por exemplo, quando o pai ou a mãe sobrevivente
        também é herdeiro e a partilha pode prejudicar o filho menor —,
        nomeia-se curador especial e a via extrajudicial fica inviável.
      </p>

      <h2 id="obrigatoriamente-judicial">Quando o inventário <span className="s-it">ainda é obrigatoriamente judicial</span></h2>
      <p>
        Mesmo com o terreno mais aberto, algumas situações continuam impondo o
        fórum:
      </p>
      <ul>
        <li><strong>Divergência entre herdeiros capazes.</strong> Basta um discordar da partilha para que o cartório saia de cena. Esse é o critério-mãe: litígio é via judicial, sempre.</li>
        <li><strong>Conflito de interesses envolvendo incapaz.</strong> Quando o representante do menor também é herdeiro e a partilha pode prejudicá-lo, o curador especial e o juiz são indispensáveis.</li>
        <li><strong>Partilha desigual ou de bens específicos com incapaz no espólio.</strong> A exigência de quinhões iguais impede o arranjo &ldquo;este imóvel para um, aquele para outro&rdquo; quando há menor ou incapaz.</li>
        <li><strong>Testamentos que exigem cognição judicial.</strong> Reconhecimento de filho, substituição fideicomissária e disposições que demandem interpretação litigiosa barram o procedimento extrajudicial.</li>
        <li><strong>Disputas sobre dívidas, sonegação de bens ou necessidade de medidas urgentes</strong> que só o juiz pode determinar.</li>
      </ul>

      <h2 id="o-que-nao-muda">O que não muda entre as duas vias: <span className="s-it">prazo, ITCMD e advogado</span></h2>
      <p>
        Três pontos valem nos dois caminhos e costumam pegar as famílias de
        surpresa:
      </p>
      <ul>
        <li><strong>Prazo para começar.</strong> A referência é abrir o inventário em até dois meses do falecimento (art. 611 do CPC). O atraso, na prática, costuma encarecer o ITCMD por força da legislação estadual — e isso vale tanto no cartório quanto no fórum.</li>
        <li><strong>ITCMD.</strong> O imposto é estadual e incide igual nas duas vias. Fazer em cartório não reduz o tributo; o que muda é a forma do procedimento, não a conta do imposto.</li>
        <li><strong>Advogado obrigatório.</strong> Em ambas as vias, a escritura ou o processo só andam com advogado assistindo as partes (art. 610, § 2º, do CPC).</li>
      </ul>
      <p>
        E a escolha não é irreversível: um inventário iniciado em juízo pode
        migrar para o cartório se as condições passarem a estar presentes, e o
        caminho contrário também ocorre quando surge um litígio no meio do
        percurso. A via acompanha a realidade do caso — por isso o
        diagnóstico inicial importa mais do que a primeira impressão.
      </p>
      <p>
        Na prática, então, a pergunta certa não é &ldquo;tem testamento?&rdquo;
        nem &ldquo;tem menor?&rdquo;. É: <em>todos os herdeiros capazes
        concordam com a partilha e não há conflito de interesses a
        proteger?</em> Se a resposta for consenso pleno e nenhum conflito, o
        cartório quase sempre é viável — mesmo com testamento, mesmo com
        incapaz. Se há divergência ou conflito, o fórum não é escolha, é
        imposição. Esse é o critério que decide; o resto são condições a
        cumprir.
      </p>

      <h2 id="faq">Perguntas frequentes</h2>
      <h3>Inventário com testamento pode ser feito em cartório?</h3>
      <p>
        Pode, desde que todos os herdeiros sejam maiores, capazes e concordes,
        assistidos por advogado, e o testamento já tenha sido aberto e
        registrado em juízo ou haja autorização expressa do juízo competente.
        Cumpridas essas condições, a partilha é lavrada por escritura pública
        (STJ, REsp 1.808.767/RJ; Resolução CNJ 571/2024).
      </p>
      <h3>E se houver herdeiro menor de idade ou incapaz?</h3>
      <p>
        Desde a Resolução CNJ 571/2024, é possível fazer em cartório,
        cumpridos dois requisitos cumulativos: manifestação favorável do
        Ministério Público e partilha em quinhões iguais, sem prejuízo ao
        incapaz. Se houver conflito de interesses ou partilha desigual, volta
        a ser judicial.
      </p>
      <h3>Qual via é mais rápida e mais barata?</h3>
      <p>
        Em regra, a extrajudicial, porque dispensa o processo. Mas ela só é
        possível quando há consenso entre os herdeiros capazes e nenhum
        conflito de interesses. Onde existe litígio, a via judicial não é uma
        opção mais lenta — é a única cabível.
      </p>
      <h3>O imposto (ITCMD) muda se eu fizer em cartório?</h3>
      <p>
        Não. O ITCMD é estadual e incide igual nas duas vias. O que muda é a
        forma do procedimento, não o valor do imposto.
      </p>
      <h3>Comecei o inventário na Justiça. Posso transferir para o cartório?</h3>
      <p>
        Sim, se as condições passarem a estar presentes — capacidade,
        consenso e os requisitos próprios de testamento ou de herdeiro
        incapaz. A via não é definitiva: ela acompanha a existência ou não de
        litígio.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página de{' '}
        <Link href="/atuacao/direito-civil">Direito Civil</Link>{' '}
        reúne a atuação em contratos, responsabilidade civil, família e
        sucessões; ver também{' '}
        <Link href="/blog/holding-familiar-3-perguntas">Holding familiar: três perguntas antes de estruturar</Link>{' '}
        — o planejamento patrimonial que antecede e simplifica a sucessão — e{' '}
        <Link href="/blog/revisao-contratual-desequilibrio-contrato">Revisão contratual: quando o desequilíbrio autoriza rever o que foi assinado</Link>.
      </p>
    </>
  ),

  // ───────────── Publicado em 2026-06-10 ─────────────
  'dano-moral-valor-alem-alegacao': () => (
    <>
      <JsonLd data={FAQ_DANO_MORAL} />

      <p>
        Em ações indenizatórias, é comum a parte afirmar que &ldquo;sofreu
        muito&rdquo; e pedir um valor alto — como se a intensidade do relato
        bastasse para definir a condenação. Não basta. O ordenamento
        brasileiro separa nitidamente <em>alegar</em> de <em>demonstrar</em>,
        e o Superior Tribunal de Justiça (STJ) construiu um método para que o
        valor não fique ao sabor da impressão do julgador. Entender o que
        sustenta o <em>quantum</em> é o que separa um pedido frágil de um
        pedido sólido.
      </p>

      <p style={{ marginTop: 24, padding: '18px 22px', borderLeft: '3px solid var(--accent)', background: 'var(--bg-deep)', fontSize: 15, lineHeight: 1.65 }}>
        <strong>Resposta direta:</strong> O valor do dano moral não se
        sustenta na simples alegação de sofrimento: depende da prova do dano
        (ou de sua presunção, nos casos de dano <em>in re ipsa</em>) e do
        método bifásico adotado pelo STJ, que fixa um valor-base conforme o
        interesse jurídico lesado e os precedentes, ajustando-o às
        circunstâncias concretas do caso.
      </p>

      <p>
        <strong>Neste artigo:</strong> o fundamento legal do dano moral,
        quando ele se prova e quando se presume, os requisitos da
        responsabilidade civil, como o STJ calcula o valor pelo método
        bifásico, e o que, na prática, dá lastro ao pedido.
      </p>

      <nav className="article-toc" aria-label="Sumário">
        <div className="article-toc-title">Sumário</div>
        <ol>
          <li><a href="#fundamento-legal">Qual é o fundamento legal do dano moral?</a></li>
          <li><a href="#prova-presuncao">Dano moral se prova ou se presume?</a></li>
          <li><a href="#requisitos">Quais requisitos a indenização exige?</a></li>
          <li><a href="#metodo-bifasico">Como o STJ calcula o valor? O método bifásico</a></li>
          <li><a href="#lastro-valor">O que, na prática, sustenta o valor?</a></li>
          <li><a href="#aborrecimento">Todo aborrecimento vira dano moral?</a></li>
          <li><a href="#empresa">Empresa pode sofrer dano moral?</a></li>
          <li><a href="#faq">Perguntas frequentes</a></li>
        </ol>
      </nav>

      <h2 id="fundamento-legal">Qual é o <span className="s-it">fundamento legal do dano moral?</span></h2>
      <p>
        O direito à reparação tem base constitucional e civil. A Constituição
        Federal assegura a indenização por dano moral nos incisos V e X do
        art. 5º, ao proteger a honra, a imagem, a intimidade e a vida privada
        (
        <a href="http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" target="_blank" rel="noopener noreferrer">Planalto — CF/88</a>
        ).
      </p>
      <p>
        No plano infraconstitucional, o Código Civil estrutura o dever de
        reparar:
      </p>
      <ul>
        <li><strong>Art. 186</strong> — comete ato ilícito quem, por ação ou omissão voluntária, negligência ou imprudência, viola direito e causa dano a outrem, <em>ainda que exclusivamente moral</em>.</li>
        <li><strong>Art. 187</strong> — também é ilícito o abuso de direito.</li>
        <li><strong>Art. 927</strong> — quem, por ato ilícito, causa dano a outrem fica obrigado a repará-lo.</li>
        <li><strong>Art. 944</strong> — a indenização mede-se pela <em>extensão do dano</em>.</li>
      </ul>
      <p>
        A íntegra está no{' '}
        <a href="http://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" target="_blank" rel="noopener noreferrer">Código Civil (Lei 10.406/2002) — Planalto</a>.
        O art. 944 é a chave do tema deste artigo: é a extensão do dano — e
        não o tamanho do pedido — que baliza o valor.
      </p>

      <h2 id="prova-presuncao">Dano moral <span className="s-it">se prova ou se presume?</span></h2>
      <p>
        Depende do caso, e essa distinção é decisiva para o valor.
      </p>
      <p>
        Em parte das hipóteses, o dano é <strong>presumido</strong> (a
        doutrina e a jurisprudência o chamam de <em>dano in re ipsa</em>):
        decorre do próprio fato, dispensando prova do sofrimento. É o que
        ocorre, por exemplo, com inscrição indevida em cadastro de
        inadimplentes ou recusa injustificada de cobertura por plano de
        saúde. Aqui, o que se discute não é <em>se</em> houve dano, mas{' '}
        <em>quanto</em> vale.
      </p>
      <p>
        Nas demais situações, o dano <strong>precisa ser demonstrado</strong>{' '}
        — por documentos, testemunhas, perícia, contexto. Vale lembrar o
        Enunciado 445 da V Jornada de Direito Civil: o dano moral indenizável
        não pressupõe necessariamente a verificação de sentimentos
        desagradáveis como dor ou sofrimento. Ou seja: prova-se a violação ao
        direito da personalidade, não a emoção.
      </p>

      <h2 id="requisitos">Quais requisitos <span className="s-it">a indenização exige?</span></h2>
      <p>
        A responsabilidade civil subjetiva reúne quatro elementos. Faltando
        um, o pedido não se sustenta — por maior que seja a alegação.
      </p>
      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Requisito</th>
              <th>O que precisa estar demonstrado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conduta</td>
              <td>Ação ou omissão do ofensor (voluntária ou culposa)</td>
            </tr>
            <tr>
              <td>Dano</td>
              <td>Violação a direito da personalidade (provado ou presumido)</td>
            </tr>
            <tr>
              <td>Nexo causal</td>
              <td>Ligação direta entre a conduta e o dano</td>
            </tr>
            <tr>
              <td>Culpa ou dolo</td>
              <td>Exigível na responsabilidade subjetiva; dispensável na objetiva (art. 927, parágrafo único)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Na responsabilidade <strong>objetiva</strong> — relações de consumo,
        atividade de risco, certas situações de Administração Pública — a
        culpa é dispensada, mas o dano e o nexo continuam indispensáveis.
      </p>

      <h2 id="metodo-bifasico">Como o STJ calcula o valor? <span className="s-it">O método bifásico</span></h2>
      <p>
        Reconhecido o dano, vem a parte mais difícil: arbitrar o valor. Para
        reduzir a subjetividade e dar tratamento isonômico a casos
        semelhantes, o STJ adota o <strong>método bifásico</strong>,
        sistematizado a partir do voto do Min. Paulo de Tarso Sanseverino no
        REsp 959.780/ES e consolidado na Jurisprudência em Teses do STJ
        (Edição nº 125).
      </p>
      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Fase</th>
              <th>O que se analisa</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1ª fase — valor-base</strong></td>
              <td>O <em>interesse jurídico lesado</em> e um grupo de precedentes sobre o mesmo tipo de lesão</td>
              <td>Um patamar inicial, ancorado em casos semelhantes</td>
            </tr>
            <tr>
              <td><strong>2ª fase — ajuste</strong></td>
              <td>As <em>circunstâncias concretas</em> do caso (gravidade, repercussão, condições das partes, reprovabilidade da conduta)</td>
              <td>O valor-base sobe ou desce até a quantia definitiva</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        A lógica é direta: primeiro se busca o que tribunais costumam fixar
        para aquele tipo de lesão; depois, ajusta-se para mais ou para menos
        conforme as particularidades. É o que dá objetividade ao{' '}
        <em>quantum</em> e o que permite revisão quando o valor é irrisório
        ou exorbitante.
      </p>

      <h2 id="lastro-valor">O que, na prática, <span className="s-it">sustenta o valor?</span></h2>
      <p>
        Quem litiga só com adjetivos entrega ao juiz um valor sem âncora. O
        que efetivamente dá lastro ao pedido:
      </p>
      <ol>
        <li><strong>Prova do dano (ou enquadramento como <em>in re ipsa</em>)</strong> — documentos, mensagens, boletins, laudos, testemunhas. Em casos de dano presumido, a demonstração do fato gerador.</li>
        <li><strong>Demonstração do nexo causal</strong> — a ligação clara entre a conduta e a lesão.</li>
        <li><strong>Precedentes do mesmo interesse jurídico</strong> — alimentam a 1ª fase do método bifásico e ancoram o patamar pedido.</li>
        <li><strong>Circunstâncias que pesam no valor</strong> — gravidade, duração, exposição pública, vulnerabilidade da vítima, grau de reprovabilidade da conduta (a 2ª fase).</li>
      </ol>

      <p style={{ marginTop: 24, padding: '18px 22px', borderLeft: '3px solid var(--accent)', background: 'var(--bg-deep)', fontSize: 15, lineHeight: 1.65 }}>
        Na atuação do escritório em ações de responsabilidade civil,
        observa-se que o ponto que mais influencia o valor não é a retórica
        da petição, mas a robustez da prova do dano e a apresentação de
        precedentes sobre o mesmo interesse jurídico lesado — exatamente os
        dois elementos que o método bifásico exige.
      </p>

      <h2 id="aborrecimento">Todo aborrecimento <span className="s-it">vira dano moral?</span></h2>
      <p>
        Não. A jurisprudência distingue o dano moral indenizável do{' '}
        <strong>mero aborrecimento</strong> — o dissabor cotidiano que, por
        si só, não viola direito da personalidade. Fila demorada, atraso
        comum, frustração de expectativa banal: em regra, não geram
        indenização. O que se indeniza é a ofensa relevante à dignidade, à
        honra, à imagem ou à integridade.
      </p>

      <h2 id="empresa">Empresa <span className="s-it">pode sofrer dano moral?</span></h2>
      <p>
        Sim. A <strong>Súmula 227 do STJ</strong> reconhece que a pessoa
        jurídica pode sofrer dano moral — tipicamente quando há abalo à sua
        honra objetiva (reputação no mercado). Não se trata de
        &ldquo;dor&rdquo;, mas de lesão à imagem e ao bom nome.
      </p>
      <p>
        Vale registrar ainda que dano moral e <strong>dano estético</strong>{' '}
        podem ser cumulados, mesmo decorrentes do mesmo fato, conforme a{' '}
        <strong>Súmula 387 do STJ</strong> — outro ponto que, quando
        presente, soma-se ao valor.
      </p>

      <h2 id="faq">Perguntas frequentes</h2>
      <h3>Existe um valor &ldquo;tabelado&rdquo; para dano moral?</h3>
      <p>
        Não há tarifação geral. O STJ rejeita o tabelamento e adota o método
        bifásico, que parte de precedentes (valor-base) e ajusta às
        circunstâncias do caso. Há parâmetros de referência, não tabelas
        fixas obrigatórias.
      </p>
      <h3>Preciso provar que sofri para receber?</h3>
      <p>
        Nem sempre. Em casos de dano <em>in re ipsa</em> (presumido), basta
        demonstrar o fato gerador. Nos demais, prova-se a violação ao direito
        — não necessariamente a emoção, conforme o Enunciado 445 da V
        Jornada de Direito Civil.
      </p>
      <h3>Quanto tempo tenho para entrar com a ação?</h3>
      <p>
        A pretensão de reparação civil prescreve, em regra, em três anos
        (art. 206, §3º, V, do Código Civil), contados da ciência da lesão.
        Prazos específicos podem variar conforme a relação jurídica (consumo,
        Administração Pública), o que recomenda análise do caso concreto.
      </p>
      <h3>Pedir um valor alto ajuda a receber mais?</h3>
      <p>
        Não diretamente. O valor segue a extensão do dano (art. 944) e o
        método bifásico, não o tamanho do pedido. Um valor exorbitante pode
        ser reduzido em recurso; um valor bem fundamentado, com precedentes
        e prova, é mais difícil de derrubar.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic', lineHeight: 1.6 }}>
        Leitura complementar: a página de{' '}
        <Link href="/atuacao/direito-civil">Direito Civil</Link>{' '}
        reúne a atuação em contratos, responsabilidade civil, família e
        sucessões; ver também{' '}
        <Link href="/blog/revisao-contratual-desequilibrio-contrato">Revisão contratual: quando o desequilíbrio autoriza rever o que foi assinado</Link>{' '}
        e{' '}
        <Link href="/blog/inventario-extrajudicial-ou-judicial-criterio">Inventário: extrajudicial ou judicial — o critério que pouca gente aplica</Link>.
      </p>
    </>
  ),
};
