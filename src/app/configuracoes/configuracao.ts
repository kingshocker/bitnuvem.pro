import { Corretora } from '../corretora/corretora';
import { Ordenacao, CriterioOrdenacao, CampoOrdenacao } from './ordenacao';

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
