/**
 * FAQ — conteúdo único da fonte. As respostas aqui viram tanto o HTML da
 * página `/faq` quanto o `FAQPage` JSON-LD (sinal AEO universal apontado pelos
 * 5 relatórios de concorrência de 2026-05-21).
 *
 * Status governa publicação:
 *  · 'draft' → noindex, banner de revisão, fora do sitemap; corpo renderiza
 *    mas o `FAQPage` schema NÃO é emitido (não queremos sinalizar autoridade
 *    em afirmações não-revisadas).
 *  · 'published' → indexável, no sitemap, FAQPage schema emitido.
 *
 * As respostas abaixo são SCAFFOLD no tom da marca — afirmações jurídicas
 * básicas (lei 8.112, prazos formais, Prov. 205/2021). NÃO contêm jurisprudência
 * específica nem casos. Cada uma marcada com [VERIFICAR] precisa de
 * confirmação do responsável técnico (Dr. Jorge — OAB/RJ 72.994) antes do
 * flip para 'published'.
 */

export type FAQStatus = 'draft' | 'published';

export const FAQ_STATUS: FAQStatus = 'published';

export type FAQItem = {
  /** slug curto para fragment (#) ancorar links profundos */
  id: string;
  category: 'PAD' | 'Sindicância' | 'Servidor' | 'Honorários' | 'Atendimento';
  q: string;
  /** Resposta em parágrafos (cada item do array vira um <p>). */
  a: string[];
  /** Itens marcados precisam de revisão jurídica antes do flip. */
  verify?: boolean;
};

export const FAQ_ITEMS: FAQItem[] = [
  // ═══════════════════════════ PAD ═══════════════════════════
  {
    id: 'o-que-e-pad',
    category: 'PAD',
    q: 'O que é um Processo Administrativo Disciplinar (PAD)?',
    a: [
      'É o procedimento formal pelo qual a Administração apura responsabilidade de servidor por infração funcional. No regime federal, está disciplinado nos arts. 143 e seguintes da Lei 8.112/1990; cada ente federativo costuma ter regramento próprio que segue arquitetura semelhante.',
      'O PAD pressupõe portaria de instauração com indicação dos fatos e do servidor indiciado, instrução probatória com contraditório, indiciação formal, defesa escrita e relatório conclusivo. A pena, quando cabível, é aplicada por autoridade competente em ato motivado.',
    ],
    verify: false,
  },
  {
    id: 'sindicancia-vs-pad',
    category: 'PAD',
    q: 'Qual a diferença entre sindicância e PAD?',
    a: [
      'A sindicância é etapa preliminar — investigativa — que pode resultar em arquivamento, advertência ou suspensão até 30 dias, ou na conversão em PAD quando o caso apresentar indícios que justifiquem apuração mais ampla.',
      'O PAD é o procedimento principal, aberto quando se cogita pena de suspensão acima de 30 dias, demissão, cassação de aposentadoria ou destituição de cargo em comissão. Tem rito mais detalhado, comissão de três servidores estáveis e prazo legal próprio.',
    ],
    verify: false,
  },
  {
    id: 'prazo-pad',
    category: 'PAD',
    q: 'Quanto tempo dura um PAD?',
    a: [
      'No regime federal (Lei 8.112/1990, art. 152), o prazo para conclusão dos trabalhos da comissão é de 60 dias, prorrogável por mais 60. Na prática, é comum o ultrapassar do prazo — situação que, por si só, em regra não anula o processo, mas pode gerar consequências quando combinada com prejuízo à defesa.',
      'Há ainda o prazo de prescrição da pretensão punitiva (5 anos para demissão, contados da ciência do fato pela Administração, com causas suspensivas e interruptivas previstas em lei).',
    ],
    verify: false,
  },
  {
    id: 'preciso-advogado-sindicancia',
    category: 'Sindicância',
    q: 'Preciso de advogado já na sindicância ou só no PAD?',
    a: [
      'A fase administrativa não impõe a presença obrigatória de advogado (Súmula Vinculante 5 do STF), mas isso não significa que ela seja dispensável. Boa parte do que vai — ou não vai — ser revisável no Judiciário se decide ainda na resposta inicial, na prova requerida e na impugnação tempestiva do enquadramento. Erros nessa fase raramente se reabrem depois.',
      'A recomendação técnica é: assessoria desde a ciência da portaria de instauração, ainda que a presença física na sindicância seja pontual.',
    ],
    verify: false,
  },
  {
    id: 'controle-judicial',
    category: 'PAD',
    q: 'O Judiciário pode reverter a decisão do PAD?',
    a: [
      'Sim, dentro do controle de legalidade: competência, forma, motivo, finalidade e proporcionalidade entre conduta e penalidade. O juiz não substitui o juízo de mérito da Administração por um próprio, mas anula o ato quando há vício de legalidade.',
      'Há quatro situações em que esse controle alcança o conteúdo da decisão: desproporção manifesta, inexistência ou falsidade do motivo, cerceamento de defesa que contamina o resultado e erro de enquadramento. Para o detalhamento, ver o artigo do blog "PAD e o limite do controle judicial sobre o mérito administrativo".',
    ],
  },

  // ════════════════════════ Sindicato ═════════════════════════
  {
    id: 'sindicato-substituicao-processual',
    category: 'Servidor',
    q: 'Sindicato pode entrar com ação em nome dos filiados?',
    a: [
      'Sim. O art. 8º, III, da Constituição confere ao sindicato legitimidade extraordinária ampla para defender, em juízo, direitos individuais e coletivos da categoria — independentemente de autorização específica dos filiados (substituição processual). A jurisprudência do STF consolidou essa leitura.',
      'A análise de caso a caso considera: amplitude da pretensão, identificação da categoria, eventual necessidade de individualização para liquidação. O escritório atua há mais de três décadas em substituição processual para entidades sindicais.',
    ],
    verify: false,
  },

  // ════════════════════ Honorários / Atendimento ═══════════════
  {
    id: 'honorarios',
    category: 'Honorários',
    q: 'Qual é a forma de cobrança dos honorários?',
    a: [
      'Os honorários são definidos caso a caso, em contrato escrito de prestação de serviços advocatícios. A base mínima segue a Tabela de Honorários da OAB/RJ; o valor final reflete complexidade técnica, urgência, fase do processo e tempo previsto de atuação.',
      'O Provimento OAB 205/2021 veda divulgação de tabela pública de preços e promessa de resultado. A proposta concreta é apresentada após a análise inicial do caso, sem cobrança da consulta de triagem.',
    ],
  },
  {
    id: 'consulta-inicial',
    category: 'Atendimento',
    q: 'Como funciona a consulta inicial?',
    a: [
      'O primeiro contato é feito por WhatsApp ou e-mail; respondemos em até 2h em horário comercial. A triagem é gratuita: identificamos a área, urgência e documentação necessária para uma avaliação técnica.',
      'A consulta jurídica em si — análise de documentos, opinião técnica fundamentada, definição de estratégia — é prestada após contratação formal. Pode ser presencial (sede no Centro do Rio) ou remota.',
    ],
  },
  {
    id: 'naples',
    category: 'Atendimento',
    q: 'Como funciona o atendimento internacional com a representação em Naples (Flórida)?',
    a: [
      'O escritório mantém representação em Naples, Flórida (EUA), para casos com componente internacional — patrimônio, sociedade ou herdeiros nos dois países. O direito brasileiro é conduzido pela equipe do Rio; o direito americano, em coordenação com counsel licenciado pela Florida Bar.',
      'A modalidade mais comum é a estruturação de holding com partes nos dois sistemas (planejamento sucessório transfronteiriço). Cada caso é avaliado quanto à conveniência efetiva da estrutura — nem sempre a melhor solução é a mais complexa.',
    ],
  },
  {
    id: 'resultado-garantido',
    category: 'Atendimento',
    q: 'O escritório garante o resultado do caso?',
    a: [
      'Não — e nenhum escritório regular pode. O Provimento OAB 205/2021 (art. 4º, V) veda expressamente promessa de resultado. O que oferecemos é análise técnica honesta sobre as chances do caso, estratégia fundamentada e acompanhamento integral.',
      'Em particular, dizemos com franqueza quando o caso tem perfil de mérito administrativo (revisão judicial improvável) ou de legalidade (revisão sindicável). Essa transparência inicial é parte do método.',
    ],
  },
];

/** Helper p/ agrupar por categoria — usado no render da página. */
export function faqByCategory() {
  const groups: Record<FAQItem['category'], FAQItem[]> = {
    PAD: [],
    Sindicância: [],
    Servidor: [],
    Honorários: [],
    Atendimento: [],
  };
  FAQ_ITEMS.forEach((it) => groups[it.category].push(it));
  return groups;
}
