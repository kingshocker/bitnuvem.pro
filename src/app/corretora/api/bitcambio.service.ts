import { Injectable } from '@angular/core';

import { Corretora, LivroOrdens, Ordem, Ordens } from '../corretora';

interface OrdemBitCambio {
  Quantity: number;
  Rate: number;
}

type OrdensBitCambio = Array<OrdemBitCambio>;

interface LivroOrdensBitCambio {
  success: boolean;
  message: string;
  result: {buy: OrdensBitCambio, sell: OrdensBitCambio};
}

@Injectable({
  providedIn: 'root'
})
export class BitCambioService extends Corretora {
  readonly UTILIZA_PROXY = false;
  readonly TAXA_ORDEM_EXECUTORA = 0.0099;
  readonly TAXA_SAQUE_FIXA = 10;
  readonly TAXA_SAQUE_FIXA_BANCO_CONVENIADO = this.TAXA_SAQUE_FIXA;
  readonly TAXA_SAQUE_VARIAVEL = 0.01;
  readonly TAXA_SAQUE_VARIAVEL_BANCO_CONVENIADO = this.TAXA_SAQUE_VARIAVEL;
  readonly POSSUI_CONVENIOS_BANCOS = false;
  readonly LIVRO_ORDENS_VAZIO = {
    success: false,
    message: '',
    results: {buy: [], sell: []}
  };

  id = 'bitcambio';
  nome = 'BitCambio';
  paginaInicial = 'https://bitcambio.com.br/';
  paginaOrdens = 'https://nova.bitcambio.com.br/pt/trade/pro/BTC/BRL';
  paginaContato = 'https://bitcambiohelp.zendesk.com/hc/pt-br';
  observacao = '';
  webservice = (
    'https://nova.bitcambio.com.br/api/v3/public/getorderbook?market=BTC_BRL'
  );
  livroOrdens: LivroOrdens;
  taxaTransferencia = 0.0004;

  constructor() {
    super();
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

    livroOrdensBitCambio.result.buy.forEach(
      (ordemBitCambio: OrdemBitCambio) => {
        const ordem: Ordem = {
          preco: ordemBitCambio.Rate,
          quantidade: ordemBitCambio.Quantity,
        };
        ordensVenda.push(ordem);
      }
    );
    livroOrdensBitCambio.result.sell.forEach(
      (ordemBitCambio: OrdemBitCambio) => {
        const ordem: Ordem = {
          preco: ordemBitCambio.Rate,
          quantidade: ordemBitCambio.Quantity,
        };
        ordensCompra.push(ordem);
      }
    );

    return livroOrdens;
  }
}
