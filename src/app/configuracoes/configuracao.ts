import { Ordenacao, CriterioOrdenacao, CampoOrdenacao } from './ordenacao';

export interface ConfiguracaoCorretora {
  habilitada: boolean;
  possuiBancoConveniado: boolean;
}

export class Configuracao {
  readonly VALOR_PADRAO_SIMULAR_TAXA_SAQUE = false;
  readonly VALOR_PADRAO_CORRETORAS: ConfiguracaoCorretora = {
    habilitada: true,
    possuiBancoConveniado: false
  };
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
  simularTaxaSaque: boolean;
  corretoras: { [idCorretora: string]: ConfiguracaoCorretora };
  ordenacao: Ordenacao;

  constructor() {
    this.corretoras = {};
    this.ordenacao = this.VALOR_PADRAO_ORDENACAO;
    this.simularTaxaSaque = this.VALOR_PADRAO_SIMULAR_TAXA_SAQUE;
  }
}
