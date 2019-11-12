import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Corretora, LivroOrdens, Ordem, Ordens } from '../corretora';

type OrdemCoinext = Array<number>;

type LivroOrdensCoinext = Array<OrdemCoinext>;

@Injectable({
  providedIn: 'root'
})
export class CoinextService implements Corretora {
  readonly TAXA_ORDEM = 0.005;
  id = 'coinext';
  nome = 'Coinext';
  paginaInicial = 'https://coinext.com.br/';
  paginaOrdens = 'https://coinext.com.br/trade.html';
  paginaContato = 'https://content.coinext.com.br/';
  observacao = '';
  webservice = 'https://cors-anywhere.herokuapp.com/https://api.coinext.com.br:8443/AP/GetL2Snapshot?OMSId=1&InstrumentId=1&Depth=1';
  livroOrdens: LivroOrdens;
  taxaTransferencia = 0.0004;

  constructor(private http: HttpClient) {
    this.livroOrdens = null;
  }

  get menorPrecoVenda(): number {
    return this.livroOrdens.venda[0].preco;
  }

  get maiorPrecoCompra(): number {
    return this.livroOrdens.compra[0].preco;
  }

  carregarLivroOrdens(): Promise<LivroOrdens> {
    const dataRequisicao = new Date();
    return this.http.get(this.webservice).toPromise().then(
      (livroOrdensCoinext: LivroOrdensCoinext) => {
        const ordensVenda: Ordens = [];
        const ordensCompra: Ordens = [];
        const livroOrdens: LivroOrdens = {
          venda: ordensVenda,
          compra: ordensCompra,
          dataRequisicao,
          dataResposta: new Date(),
        };

        livroOrdensCoinext.forEach((ordemCoinext: OrdemCoinext) => {
          const ordem: Ordem = {
            preco: ordemCoinext[6],
            quantidade: ordemCoinext[8]
          };
          if (ordemCoinext[9] === 1) {
            ordensVenda.push(ordem);
          } else {
            ordensCompra.push(ordem);
          }
        });

        this.livroOrdens = livroOrdens;
        return livroOrdens;
      }
    ) as Promise<LivroOrdens>;
  }

  calcularValorTaxaVenda(valor: number): number {
    return valor * this.TAXA_ORDEM;
  }

  calcularValorTaxaCompra(valor: number): number {
    return valor * this.TAXA_ORDEM;
  }

  calcularValorVendaAposTaxas(valor: number): number {
    return valor + this.calcularValorTaxaVenda(valor);
  }

  calcularValorCompraAposTaxas(valor: number): number {
    return valor + this.calcularValorTaxaVenda(valor);
  }

  calcularValorMaximoVendaAposTaxas(limiteValor: number): number {
    return limiteValor / (1 + this.TAXA_ORDEM);
  }

  calcularValorMaximoCompraAposTaxas(limiteValor: number): number {
    return limiteValor / (1 + this.TAXA_ORDEM);
  }
}
