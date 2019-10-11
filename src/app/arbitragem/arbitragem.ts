import { Corretora, Ordens, Ordem } from '../corretora/corretora';

interface OrdemArbitragem extends Ordem {
  numeroOperacoes: number;
}

export class Arbitragem {
  ordensVenda: Ordens;
  ordensCompra: Ordens;
  lucro: number;
  investimento: number;

  constructor(
    public corretoraVenda: Corretora,
    public corretoraCompra: Corretora,
    public investimentoInicial: number
  ) {
    this.verificarOportunidades();
  }

  private clonarOrdem(ordem: Ordem) {
    return {preco: ordem.preco, quantidade: ordem.quantidade};
  }

  private calcularQuantidadeOperada(
    ordemVenda: Ordem,
    ordemCompra: Ordem,
    saldoRestante: number
  ): number {
    if (
      (ordemVenda.quantidade < ordemCompra.quantidade)
      && ((ordemVenda.preco * ordemVenda.quantidade) < saldoRestante)
    ) {
      return ordemVenda.quantidade;
    } else if (
      (ordemCompra.preco * ordemCompra.quantidade) < saldoRestante
    ) {
      return ordemCompra.quantidade;
    } else {
      return saldoRestante / ordemVenda.preco;
    }
  }

  private adicionarOrdemArbitragem(
    ordensArbitragem: Ordens,
    preco: number,
    indice: number,
    quantidadeOperada: number
  ) {
    let ordemArbitragem: OrdemArbitragem;
    if (ordensArbitragem.length <= indice) {
      ordemArbitragem = {
        preco,
        quantidade: quantidadeOperada,
        numeroOperacoes: 1
      };
      ordensArbitragem.push(ordemArbitragem);
    } else {
      ordemArbitragem = ordensArbitragem[indice] as OrdemArbitragem;
      ordemArbitragem.quantidade += quantidadeOperada;
      ordemArbitragem.numeroOperacoes++;
    }
  }

  async verificarOportunidades() {
    const valorMinimo: number = this.corretoraVenda.menorPrecoVenda;
    const valorMaximo: number = this.corretoraCompra.maiorPrecoCompra;
    const ordensVendaSimulacao: Ordens = this.corretoraVenda.livroOrdens.venda;
    const ordensCompraSimulacao: Ordens = this.corretoraCompra.livroOrdens.compra;

    this.ordensVenda = [];
    this.ordensCompra = [];
    this.investimento = 0;
    this.lucro = 0;

    let saldoRestante = this.investimentoInicial;
    let quantidadeOperada = 0;

    let indiceVenda = 0;
    let indiceCompra = 0;

    let ordemVenda = this.clonarOrdem(ordensVendaSimulacao[indiceVenda]);
    let ordemCompra = this.clonarOrdem(ordensCompraSimulacao[indiceCompra]);
    while (
      (indiceVenda < ordensVendaSimulacao.length)
      && (indiceCompra < ordensCompraSimulacao.length)
      && (ordemVenda.preco < valorMaximo)
      && (ordemCompra.preco > valorMinimo)
      && (ordemVenda.preco < ordemCompra.preco)
      && (saldoRestante > 0)
    ) {
      quantidadeOperada = this.calcularQuantidadeOperada(
        ordemVenda,
        ordemCompra,
        saldoRestante
      );

      ordemVenda.quantidade -= quantidadeOperada;
      ordemCompra.quantidade -= quantidadeOperada;
      saldoRestante -= quantidadeOperada * ordemVenda.preco;
      this.investimento += quantidadeOperada * ordemVenda.preco;
      this.lucro += (
        (quantidadeOperada * ordemCompra.preco)
        - (quantidadeOperada * ordemVenda.preco)
      );

      this.adicionarOrdemArbitragem(
        this.ordensVenda,
        ordemVenda.preco,
        indiceVenda,
        quantidadeOperada
      );
      this.adicionarOrdemArbitragem(
        this.ordensCompra,
        ordemCompra.preco,
        indiceCompra,
        quantidadeOperada
      );

      if (ordemVenda.quantidade === 0) {
        indiceVenda++;
        if (indiceVenda < ordensVendaSimulacao.length) {
          ordemVenda = this.clonarOrdem(ordensVendaSimulacao[indiceVenda]);
        }
      }
      if (ordemCompra.quantidade === 0) {
        indiceCompra++;
        if (indiceCompra < ordensCompraSimulacao.length) {
          ordemCompra = this.clonarOrdem(ordensCompraSimulacao[indiceCompra]);
        }
      }
    }
  }
}
