import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  Corretora,
  LivroOrdens,
  Ordens,
  Ordem,
  TEMPO_REQUISICAO_MAXIMO,
} from '../corretora';

interface OrdemBisq {
  offer_id: string;
  offer_date: number;
  direction: string;
  min_amount: string;
  amount: string;
  price: string;
  volume: string;
  payment_method: string;
  offer_fee_txid: string;
}

type OrdensBisq = Array<OrdemBisq>;

interface LivroOrdensBisq {
  buys: OrdensBisq;
  sells: OrdensBisq;
}

interface LivroOrdensBTCBisq {
  btc_brl: LivroOrdensBisq;
}

@Injectable({
  providedIn: 'root'
})
export class BisqService extends Corretora {
  readonly TAXA_ORDEM_EXECUTORA = 0.006;
  readonly LIVRO_ORDENS_VAZIO = {
    btc_brl: {
      buys: [],
      sells: [],
    },
  };

  id = 'bisq';
  nome = 'Bisq';
  paginaInicial = 'https://bisq.network/pt-pt/';
  paginaOrdens = 'https://bisq.network/pt-pt/markets/?currency=btc_brl';
  paginaContato = 'https://bisq.community/';
  observacao = (
    'Para negociar na Bisq se faz necessário realizar um depósito de segurança'
    + ' de bitcoin, eles são necessários para proteger os negociadores do Bisq'
    + ' de fraude e abuso. Os depósitos de segurança são definidos como uma'
    + ' porcentagem do valor de negociação - 2% por padrão - mas podem ser'
    + ' ajustados pelo criador da oferta.'
  );
  webservice = 'https://markets.bisq.network/api/offers?market=btc_brl';
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
    const livroOrdensBTC: LivroOrdensBTCBisq = (
      livroOrdensAPI
    ) as LivroOrdensBTCBisq;
    const livroOrdensBisq: LivroOrdensBisq = livroOrdensBTC.btc_brl;
    const ordensVenda: Ordens = [];
    const ordensCompra: Ordens = [];
    const livroOrdens: LivroOrdens = {
      venda: ordensVenda,
      compra: ordensCompra,
      dataRequisicao,
      dataResposta: new Date(),
    };

    livroOrdensBisq.buys.forEach((ordemBisq: OrdemBisq) => {
      const ordem: Ordem = {
        preco: Number.parseFloat(ordemBisq.price),
        quantidade: Number.parseFloat(ordemBisq.amount),
      };
      ordensCompra.push(ordem);
    });
    livroOrdensBisq.sells.forEach((ordemBisq: OrdemBisq) => {
      const ordem: Ordem = {
        preco: Number.parseFloat(ordemBisq.price),
        quantidade: Number.parseFloat(ordemBisq.amount),
      };
      ordensVenda.push(ordem);
    });

    return livroOrdens;
  }
}
