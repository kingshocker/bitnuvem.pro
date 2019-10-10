import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Corretora, LivroOrdens, Ordem, Ordens } from './corretora';

interface OrdemBraziliex {
  price: number;
  amount: number;
}

type OrdensBraziliex = Array<OrdemBraziliex>;

interface LivroOrdensBraziliex {
  asks: OrdensBraziliex;
  bids: OrdensBraziliex;
}

@Injectable({
  providedIn: 'root'
})
export class BraziliexService implements Corretora {
  readonly TAXA_ORDEM = 0.005;
  id = 'braziliex';
  nome = 'Braziliex';
  paginaInicial = 'https://braziliex.com/';
  webservice = 'https://cors-anywhere.herokuapp.com/https://braziliex.com/api/v1/public/orderbook/btc_brl';
  livroOrdens: LivroOrdens;

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
    return this.http.get(this.webservice).toPromise().then(
      (livroOrdensBraziliex: LivroOrdensBraziliex) => {
        const ordensVenda: Ordens = [];
        const ordensCompra: Ordens = [];
        const livroOrdens: LivroOrdens = {venda: ordensVenda, compra: ordensCompra};

        livroOrdensBraziliex.asks.forEach((ordemBraziliex: OrdemBraziliex) => {
          const ordem: Ordem = {
            preco: ordemBraziliex.price,
            quantidade: ordemBraziliex.amount
          };
          ordensVenda.push(ordem);
        });
        livroOrdensBraziliex.bids.forEach((ordemBraziliex: OrdemBraziliex) => {
          const ordem: Ordem = {
            preco: ordemBraziliex.price,
            quantidade: ordemBraziliex.amount
          };
          ordensCompra.push(ordem);
        });

        this.livroOrdens = livroOrdens;
        return livroOrdens;
      }
    ) as Promise<LivroOrdens>;
  }

  calcularValorVendaAposTaxas(valor: number): number {
    return valor - (valor * this.TAXA_ORDEM);
  }

  calcularValorCompraAposTaxas(valor: number): number {
    return valor - (valor * this.TAXA_ORDEM);
  }
}
