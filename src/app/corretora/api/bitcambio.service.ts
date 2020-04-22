import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  Corretora,
  LivroOrdens,
  Ordem,
  Ordens,
} from '../corretora';

type OrdemBitCambio = Array<number>;

interface LivroOrdensBitCambio {
  pair: string;
  bids: Array<OrdemBitCambio>;
  asks: Array<OrdemBitCambio>;
}

@Injectable({
  providedIn: 'root'
})
export class BitCambioService extends Corretora {
  readonly TAXA_ORDEM_EXECUTORA = 0.0099;
  readonly TAXA_SAQUE_FIXA = 10;
  readonly TAXA_SAQUE_VARIAVEL = 0.01;
  readonly LIVRO_ORDENS_VAZIO = {
    asks: [],
    bids: [],
  };

  id = 'bitcambio';
  nome = 'BitCambio';
  paginaInicial = 'https://bitcambio.com.br/';
  paginaOrdens = 'https://pro.bitcambio.com.br/#/';
  paginaContato = 'https://bitcambiohelp.zendesk.com/hc/pt-br';
  observacao = '';
  webservice = 'https://bitcambio_api.blinktrade.com/api/v1/BRL/orderbook';
  livroOrdens: LivroOrdens;
  taxaTransferencia = 0.0004;
  taxaSaqueFixa = this.TAXA_SAQUE_FIXA;
  taxaSaqueVariavel = this.TAXA_SAQUE_VARIAVEL;

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
    const livroOrdensBitCambio: LivroOrdensBitCambio = (
      livroOrdensAPI
    ) as LivroOrdensBitCambio;

    livroOrdensBitCambio.asks.forEach((ordemBitCambio: OrdemBitCambio) => {
      const ordem: Ordem = {
        preco: ordemBitCambio[0],
        quantidade: ordemBitCambio[1],
      };
      ordensVenda.push(ordem);
    });
    livroOrdensBitCambio.bids.forEach((ordemBitCambio: OrdemBitCambio) => {
      const ordem: Ordem = {
        preco: ordemBitCambio[0],
        quantidade: ordemBitCambio[1],
      };
      ordensCompra.push(ordem);
    });

    return livroOrdens;
  }
}
