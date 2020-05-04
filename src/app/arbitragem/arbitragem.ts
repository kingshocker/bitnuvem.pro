import { Corretora, Ordens, Ordem } from '../corretora/corretora';

interface OrdemArbitragem extends Ordem {
  total: number;
  valorTaxa: number;
  numeroOperacoes: number;
}

export class Arbitragem {
  ordensVenda: Ordens;
  ordensCompra: Ordens;
  lucro: number;
  investimento: number;
  taxaTransferencia: number;
  taxaSaque: number;

  constructor(
    public corretoraVenda: Corretora,
    public corretoraCompra: Corretora,
    public investimentoMaximo: number,
    private lucroPercentualMinimo: number,
    public possuiTaxaTransferencia: boolean,
    public possuiTaxaSaque: boolean,
    public possuiBancoConveniado: boolean,
  ) {
    this.verificarOportunidades();
  }

  get porcentagemLucro() {
    return this.lucro / this.investimento * 100;
  }

  private calcularNovaPorcentagemLucro(
    lucroOperacao: number,
    investimentoOperacao: number,
  ): number {
    return (
      (this.lucro + lucroOperacao)
      / (this.investimento + investimentoOperacao)
      * 100
    );
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
      && (
        this.corretoraVenda.calcularValorVendaAposTaxas(
          ordemVenda.preco * ordemVenda.quantidade
        ) < saldoRestante
      )
    ) {
      return ordemVenda.quantidade;
    } else if (
      this.corretoraCompra.calcularValorCompraAposTaxas(
        ordemCompra.preco * ordemCompra.quantidade
      ) < saldoRestante
    ) {
      return ordemCompra.quantidade;
    } else {
      return (
        this.corretoraVenda.calcularValorMaximoVendaAposTaxas(saldoRestante)
        / ordemVenda.preco
      );
    }
  }

  private adicionarOrdemArbitragem(
    ordensArbitragem: Ordens,
    preco: number,
    indice: number,
    quantidadeOperada: number,
    taxa: number
  ) {
    let ordemArbitragem: OrdemArbitragem;
    if (ordensArbitragem.length <= indice) {
      ordemArbitragem = {
        preco,
        quantidade: quantidadeOperada,
        numeroOperacoes: 1,
        valorTaxa: taxa,
        total: preco * quantidadeOperada,
      };
      ordensArbitragem.push(ordemArbitragem);
    } else {
      ordemArbitragem = ordensArbitragem[indice] as OrdemArbitragem;
      ordemArbitragem.quantidade += quantidadeOperada;
      ordemArbitragem.numeroOperacoes++;
      ordemArbitragem.valorTaxa += taxa;
      ordemArbitragem.total = preco * ordemArbitragem.quantidade;
    }
  }

  async verificarOportunidades() {
    const valorMinimo: number = this.corretoraVenda.menorPrecoVenda;
    const valorMaximo: number = this.corretoraCompra.maiorPrecoCompra;
    const ordensVendaSimulacao: Ordens = this.corretoraVenda.livroOrdens.venda;
    const ordensCompraSimulacao: Ordens = (
      this.corretoraCompra.livroOrdens.compra
    );

    this.ordensVenda = [];
    this.ordensCompra = [];
    this.investimento = 0;
    this.lucro = 0;

    let saldoRestante = this.investimentoMaximo;
    let quantidadeOperada = 0;

    let indiceVenda = 0;
    let indiceCompra = 0;

    let ordemVenda = this.clonarOrdem(ordensVendaSimulacao[indiceVenda]);
    let ordemCompra = this.clonarOrdem(ordensCompraSimulacao[indiceCompra]);
    let totalCompraArbitragem = 0;

    let taxaTransferenciaRestante = 0;
    if (this.possuiTaxaTransferencia) {
      this.taxaTransferencia = this.corretoraVenda.taxaTransferencia;
      taxaTransferenciaRestante = this.taxaTransferencia;
    }

    while (
      (indiceVenda < ordensVendaSimulacao.length)
      && (indiceCompra < ordensCompraSimulacao.length)
      && (ordemVenda.preco < valorMaximo)
      && (ordemCompra.preco > valorMinimo)
      && (ordemVenda.preco < ordemCompra.preco)
      && (saldoRestante > 0)
      && (taxaTransferenciaRestante > 0)
    ) {
      quantidadeOperada = this.calcularQuantidadeOperada(
        ordemVenda,
        {
          preco: ordemVenda.preco,
          quantidade: taxaTransferenciaRestante,
        },
        saldoRestante
      );

      const totalVendaOperacao = quantidadeOperada * ordemVenda.preco;
      const taxaVenda = this.corretoraVenda.calcularValorTaxaVenda(
        totalVendaOperacao
      );
      const investimentoOperacao = (
        this.corretoraVenda.calcularValorVendaAposTaxas(totalVendaOperacao)
      );

      ordemVenda.quantidade -= quantidadeOperada;
      taxaTransferenciaRestante -= quantidadeOperada;
      saldoRestante -= investimentoOperacao;
      this.investimento += investimentoOperacao;
      this.lucro -= totalVendaOperacao + taxaVenda;

      this.adicionarOrdemArbitragem(
        this.ordensVenda,
        ordemVenda.preco,
        indiceVenda,
        quantidadeOperada,
        taxaVenda,
      );

      if (ordemVenda.quantidade === 0) {
        indiceVenda++;
        if (indiceVenda < ordensVendaSimulacao.length) {
          ordemVenda = this.clonarOrdem(ordensVendaSimulacao[indiceVenda]);
        }
      }
    }

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

      const totalVendaOperacao = quantidadeOperada * ordemVenda.preco;
      const totalCompraOperacao = quantidadeOperada * ordemCompra.preco;
      const taxaVenda = this.corretoraVenda.calcularValorTaxaVenda(
        totalVendaOperacao
      );
      const taxaCompra = this.corretoraCompra.calcularValorTaxaCompra(
        totalCompraOperacao
      );
      const lucroOperacao = (
        totalCompraOperacao - totalVendaOperacao - taxaVenda - taxaCompra
      );
      const investimentoOperacao = (
        this.corretoraVenda.calcularValorVendaAposTaxas(totalVendaOperacao)
      );

      if (
        (lucroOperacao <= 0)
        || (
          (lucroOperacao < this.lucro)
          && (
            this.calcularNovaPorcentagemLucro(
              lucroOperacao,
              investimentoOperacao
            ) < this.lucroPercentualMinimo
          )
        )
      ) {
        break;
      }

      ordemVenda.quantidade -= quantidadeOperada;
      ordemCompra.quantidade -= quantidadeOperada;
      saldoRestante -= investimentoOperacao;
      this.investimento += investimentoOperacao;
      this.lucro += lucroOperacao;
      totalCompraArbitragem += totalCompraOperacao;

      this.adicionarOrdemArbitragem(
        this.ordensVenda,
        ordemVenda.preco,
        indiceVenda,
        quantidadeOperada,
        taxaVenda
      );
      this.adicionarOrdemArbitragem(
        this.ordensCompra,
        ordemCompra.preco,
        indiceCompra,
        quantidadeOperada,
        taxaCompra
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

    if (this.possuiTaxaSaque) {
      this.taxaSaque = this.corretoraCompra.simularTaxaSaque(
        totalCompraArbitragem,
        this.possuiBancoConveniado,
      );
      this.lucro -= this.taxaSaque;
    } else {
      this.taxaSaque = 0;
    }
  }
}
