import type { ReactNode } from 'react';
import Link from 'next/link';

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
};
