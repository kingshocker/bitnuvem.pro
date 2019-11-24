import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';

import {
  Corretora,
  LivroOrdens,
  Ordens,
  Ordem,
  TEMPO_REQUISICAO_MAXIMO,
} from '../corretora';

interface OrdemBitcoinTrade {
  unit_price: number;
  code: string;
  stop_limit_price: any;
  amount: number;
}

type OrdensBitcoinTrade = Array<OrdemBitcoinTrade>;

interface LivroOrdensBitcoinTrade {
  asks: OrdensBitcoinTrade;
  bids: OrdensBitcoinTrade;
}

interface RespostaLivroOrdensBitcoinTrade {
  code: any;
  message: any;
  data: LivroOrdensBitcoinTrade;
}

@Injectable({
  providedIn: 'root'
})
export class BitcoinTradeService implements Corretora {
  readonly TAXA_ORDEM_EXECUTORA = 0.005;
  id = 'bitcointrade';
  nome = 'BitcoinTrade';
  paginaInicial = 'https://www.bitcointrade.com.br/pt-BR/';
  paginaOrdens = 'https://broker.bitcointrade.com.br/';
  paginaContato = 'https://www.bitcointrade.com.br/pt-BR/support/';
  observacao = '';
  webservice = 'https://api.bitcointrade.com.br/v2/public/BRLBTC/orders';
  livroOrdens: LivroOrdens;
  taxaTransferencia = 0.0005;

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
    return this.http.get(this.webservice).pipe(
      timeout(TEMPO_REQUISICAO_MAXIMO),
      catchError((erro) => {
        console.log(this.id, erro);

        return new Promise((resolve) => {
          resolve({
            code: null,
            message: null,
            data: {
              asks: [],
              bids: [],
            },
          });
        }) as Promise<RespostaLivroOrdensBitcoinTrade>;
      }),
    ).toPromise().then((resposta: RespostaLivroOrdensBitcoinTrade) => {
      const livroOrdensBitcoinTrade: LivroOrdensBitcoinTrade = resposta.data;
      const ordensVenda: Ordens = [];
      const ordensCompra: Ordens = [];
      const livroOrdens: LivroOrdens = {
        venda: ordensVenda,
        compra: ordensCompra,
        dataRequisicao,
        dataResposta: new Date(),
      };

      livroOrdensBitcoinTrade.bids.forEach(
        (ordemBitcoinTrade: OrdemBitcoinTrade) => {
          const ordem: Ordem = {
            preco: ordemBitcoinTrade.unit_price,
            quantidade: ordemBitcoinTrade.amount
          };
          ordensCompra.push(ordem);
        }
      );
      livroOrdensBitcoinTrade.asks.forEach(
        (ordemBitcoinTrade: OrdemBitcoinTrade) => {
          const ordem: Ordem = {
            preco: ordemBitcoinTrade.unit_price,
            quantidade: ordemBitcoinTrade.amount
          };
          ordensVenda.push(ordem);
        }
      );
      this.livroOrdens = livroOrdens;

      return livroOrdens;
    }) as Promise<LivroOrdens>;
  }

  calcularValorTaxaVenda(valor: number): number {
    return valor * this.TAXA_ORDEM_EXECUTORA;
  }

  calcularValorTaxaCompra(valor: number): number {
    return valor * this.TAXA_ORDEM_EXECUTORA;
  }

  calcularValorVendaAposTaxas(valor: number): number {
    return valor + this.calcularValorTaxaVenda(valor);
  }

  calcularValorCompraAposTaxas(valor: number): number {
    return valor + this.calcularValorTaxaCompra(valor);
  }

  calcularValorMaximoVendaAposTaxas(limiteValor: number): number {
    return limiteValor / (1 + this.TAXA_ORDEM_EXECUTORA);
  }

  calcularValorMaximoCompraAposTaxas(limiteValor: number): number {
    return limiteValor / (1 + this.TAXA_ORDEM_EXECUTORA);
  }
}
