import { Injectable } from '@angular/core';

import { Corretora, LivroOrdens, Ordens, Ordem } from '../corretora';

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
export class BitcoinTradeService extends Corretora {
  readonly TAXA_ORDEM_EXECUTORA = 0.005;
  readonly TAXA_SAQUE_FIXA = 4.9;
  readonly TAXA_SAQUE_FIXA_BANCO_CONVENIADO = this.TAXA_SAQUE_FIXA;
  readonly TAXA_SAQUE_VARIAVEL = 0.0099;
  readonly TAXA_SAQUE_VARIAVEL_BANCO_CONVENIADO = this.TAXA_SAQUE_VARIAVEL;
  readonly POSSUI_CONVENIOS_BANCOS = false;
  readonly LIVRO_ORDENS_VAZIO = {
    code: null,
    message: null,
    data: {
      asks: [],
      bids: [],
    },
  };

  id = 'bitcointrade';
  nome = 'BitcoinTrade';
  paginaInicial = 'https://www.bitcointrade.com.br/pt-BR/';
  paginaOrdens = 'https://broker.bitcointrade.com.br/';
  paginaContato = 'https://www.bitcointrade.com.br/pt-BR/support/';
  observacao = '';
  webservice = 'https://api.bitcointrade.com.br/v2/public/BRLBTC/orders';
  livroOrdens: LivroOrdens;
  taxaTransferencia = 0.0005;

  constructor() {
    super();
    this.livroOrdens = null;
  }

  converterLivroOrdensAPI(
    livroOrdensAPI: any,
    dataRequisicao: Date,
  ): LivroOrdens {
    const resposta: RespostaLivroOrdensBitcoinTrade = (
      livroOrdensAPI
    ) as RespostaLivroOrdensBitcoinTrade;
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
          quantidade: ordemBitcoinTrade.amount,
        };
        ordensCompra.push(ordem);
      }
    );
    livroOrdensBitcoinTrade.asks.forEach(
      (ordemBitcoinTrade: OrdemBitcoinTrade) => {
        const ordem: Ordem = {
          preco: ordemBitcoinTrade.unit_price,
          quantidade: ordemBitcoinTrade.amount,
        };
        ordensVenda.push(ordem);
      }
    );

    return livroOrdens;
  }
}
