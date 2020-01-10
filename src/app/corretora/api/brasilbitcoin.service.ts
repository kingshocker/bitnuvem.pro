import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  Corretora,
  LivroOrdens,
  Ordem,
  Ordens,
} from '../corretora';

interface OrdemBrasilBitcoin {
  id: number;
  preco: number;
  quantidade: number;
  valor: number;
}

interface LivroOrdensBrasilBitcoin {
  buy: Array<OrdemBrasilBitcoin>;
  sell: Array<OrdemBrasilBitcoin>;
  exec: any;
}

@Injectable({
  providedIn: 'root'
})
export class BrasilBitcoinService extends Corretora {
  readonly TAXA_ORDEM_EXECUTORA = 0.005;
  readonly LIVRO_ORDENS_VAZIO = {
    asks: [],
    bids: [],
  };

  id = 'brasilbitcoin';
  nome = 'Brasil Bitcoin';
  paginaInicial = 'https://brasilbitcoin.com.br/';
  paginaOrdens = 'https://brasilbitcoin.com.br/#testimonials';
  paginaContato = 'https://brasilbitcoin.com.br/';
  observacao = '';
  webservice = 'https://cors-anywhere.herokuapp.com/https://brasilbitcoin.com.br/API/orderbook/BTC';
  livroOrdens: LivroOrdens;
  taxaTransferencia = 0.0002;

  constructor(public http: HttpClient) {
    super(http);
    this.livroOrdens = null;
  }

  converterLivroOrdensAPI(
    livroOrdensAPI: any,
    dataRequisicao: Date,
  ): LivroOrdens {
    const ordensVenda: Ordens = [];
    const ordensCompra: Ordens = [];
    const livroOrdens: LivroOrdens = {
      venda: ordensVenda,
      compra: ordensCompra,
      dataRequisicao,
      dataResposta: new Date(),
    };
    const livroOrdensBrasilBitcoin: LivroOrdensBrasilBitcoin = (
      livroOrdensAPI
    ) as LivroOrdensBrasilBitcoin;

    livroOrdensBrasilBitcoin.sell.forEach(
      (ordemBrasilBitcoin: OrdemBrasilBitcoin) => {
        const ordem: Ordem = {
          preco: ordemBrasilBitcoin.preco,
          quantidade: ordemBrasilBitcoin.quantidade,
        };
        ordensVenda.push(ordem);
      }
    );
    livroOrdensBrasilBitcoin.buy.forEach(
      (ordemBrasilBitcoin: OrdemBrasilBitcoin) => {
        const ordem: Ordem = {
          preco: ordemBrasilBitcoin.preco,
          quantidade: ordemBrasilBitcoin.quantidade,
        };
        ordensCompra.push(ordem);
      }
    );

    return livroOrdens;
  }
}
