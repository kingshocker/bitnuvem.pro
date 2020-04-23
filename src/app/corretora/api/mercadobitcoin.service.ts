import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  Corretora,
  LivroOrdens,
  Ordem,
  Ordens,
} from '../corretora';

type OrdemMercadoBitcoin = Array<number>;

interface LivroOrdensMercadoBitcoin {
  asks: Array<OrdemMercadoBitcoin>;
  bids: Array<OrdemMercadoBitcoin>;
}

@Injectable({
  providedIn: 'root'
})
export class MercadoBitcoinService extends Corretora {
  readonly TAXA_ORDEM_EXECUTORA = 0.007;
  readonly TAXA_SAQUE_FIXA = 2.9;
  readonly TAXA_SAQUE_FIXA_BANCO_CONVENIADO = 0;
  readonly TAXA_SAQUE_VARIAVEL = 0.0199;
  readonly TAXA_SAQUE_VARIAVEL_BANCO_CONVENIADO = this.TAXA_SAQUE_VARIAVEL;
  readonly POSSUI_CONVENIOS_BANCOS = false;
  readonly LIVRO_ORDENS_VAZIO = {asks: [], bids: []};

  id = 'mercadobitcoin';
  nome = 'Mercado Bitcoin';
  paginaInicial = 'https://www.mercadobitcoin.com.br/';
  paginaOrdens = 'https://www.mercadobitcoin.com.br/negociacoes/bitcoin';
  paginaContato = 'https://suporte.mercadobitcoin.com.br/hc/pt-br';
  observacao = '';
  webservice = 'https://www.mercadobitcoin.net/api/BTC/orderbook/';
  livroOrdens: LivroOrdens;
  taxaTransferencia = 0.0005;

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
    const livroOrdensMercadoBitcoin: LivroOrdensMercadoBitcoin = (
      livroOrdensAPI
    ) as LivroOrdensMercadoBitcoin;

    livroOrdensMercadoBitcoin.asks.forEach(
      (ordemMercadoBitcoin: OrdemMercadoBitcoin) => {
        const ordem: Ordem = {
          preco: ordemMercadoBitcoin[0],
          quantidade: ordemMercadoBitcoin[1],
        };
        ordensVenda.push(ordem);
      }
    );
    livroOrdensMercadoBitcoin.bids.forEach(
      (ordemMercadoBitcoin: OrdemMercadoBitcoin) => {
        const ordem: Ordem = {
          preco: ordemMercadoBitcoin[0],
          quantidade: ordemMercadoBitcoin[1],
        };
        ordensCompra.push(ordem);
      }
    );

    return livroOrdens;
  }
}
