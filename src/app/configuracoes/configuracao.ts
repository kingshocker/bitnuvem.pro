import { Corretora } from '../corretora/corretora';

export enum CampoOrdenacao {
  LUCRO_LIQUIDO = 'lucro-liquido',
  PERCENTUAL_LUCRO = 'percentual-lucro',
}

const descricoesCamposOrdenacao = {};
descricoesCamposOrdenacao[CampoOrdenacao.LUCRO_LIQUIDO] = 'Lucro líquido';
descricoesCamposOrdenacao[
  CampoOrdenacao.PERCENTUAL_LUCRO
] = 'Percentual de lucro';

export class CriterioOrdenacao {
  constructor(public campoOrdenacao: CampoOrdenacao) {}

  getDescricao(): string {
    return descricoesCamposOrdenacao[this.campoOrdenacao];
  }
}

export type Ordenacao = Array<CriterioOrdenacao>;

export class Configuracao {
  readonly VALOR_PADRAO_ORDENACAO: Ordenacao = [
    new CriterioOrdenacao(CampoOrdenacao.LUCRO_LIQUIDO),
    new CriterioOrdenacao(CampoOrdenacao.PERCENTUAL_LUCRO),
  ];

  filtroLucroAcima: number;
  filtroPorcentagemLucroAcima: number;
  investimentoMaximo: number;
  permitirNotificar: boolean;
  tempoEntreNotificacoes: number;
  simularTaxaTransferencia: boolean;
  corretoras: { [idCorretora: string]: boolean };
  ordenacao: Ordenacao;

  constructor() {
    this.corretoras = {};
    this.ordenacao = this.VALOR_PADRAO_ORDENACAO;
  }
}
