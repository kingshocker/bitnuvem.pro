import { Corretora } from '../corretora/corretora';

export class Configuracao {
  filtroLucroAcima: number;
  filtroPorcentagemLucroAcima: number;
  investimentoMaximo: number;
  permitirNotificar: boolean;
  tempoEntreNotificacoes: number;
  simularTaxaTransferencia: boolean;
  corretoras: { [idCorretora: string]: boolean } = {};

  constructor() {
    this.corretoras = {};
  }
}
