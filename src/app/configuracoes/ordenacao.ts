import { Arbitragem } from '../arbitragem/arbitragem';

export enum CampoOrdenacao {
  LUCRO_LIQUIDO = 'lucro-liquido',
  PERCENTUAL_LUCRO = 'percentual-lucro',
}

const descricoesCamposOrdenacao = {};
descricoesCamposOrdenacao[CampoOrdenacao.LUCRO_LIQUIDO] = 'Lucro líquido';
descricoesCamposOrdenacao[
  CampoOrdenacao.PERCENTUAL_LUCRO
] = 'Percentual de lucro';

const comparacoesCamposOrdenacao = {};
comparacoesCamposOrdenacao[CampoOrdenacao.LUCRO_LIQUIDO] = (
  arbitragem1: Arbitragem,
  arbitragem2: Arbitragem,
) => {
  if (arbitragem1.lucro < arbitragem2.lucro) {
    return 1;
  } else if (arbitragem1.lucro > arbitragem2.lucro) {
    return -1;
  }
  return 0;
};
comparacoesCamposOrdenacao[CampoOrdenacao.PERCENTUAL_LUCRO] = (
  arbitragem1: Arbitragem,
  arbitragem2: Arbitragem,
) => {
  if (arbitragem1.porcentagemLucro < arbitragem2.porcentagemLucro) {
    return 1;
  } else if (arbitragem1.porcentagemLucro > arbitragem2.porcentagemLucro) {
    return -1;
  }
  return 0;
};

export class CriterioOrdenacao {
  constructor(public campoOrdenacao: CampoOrdenacao) {}

  get descricao(): string {
    return descricoesCamposOrdenacao[this.campoOrdenacao];
  }

  comparar(arbitragem1: Arbitragem, arbitragem2: Arbitragem): number {
    const funcao = comparacoesCamposOrdenacao[this.campoOrdenacao];
    return funcao(arbitragem1, arbitragem2);
  }
}

export type Ordenacao = Array<CriterioOrdenacao>;
