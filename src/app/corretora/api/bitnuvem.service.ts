import { Injectable } from '@angular/core';

import { Corretora, LivroOrdens, Ordem, Ordens } from '../corretora';

type OrdemBitnuvem = Array<string>;

interface LivroOrdensBitnuvem {
  asks: Array<OrdemBitnuvem>;
  bids: Array<OrdemBitnuvem>;
}

@Injectable({
  providedIn: 'root'
})
export class BitnuvemService extends Corretora {
  readonly UTILIZA_PROXY = true;
  readonly TAXA_ORDEM_EXECUTORA = 0.0012;
  readonly TAXA_SAQUE_FIXA = 9.5;
  readonly TAXA_SAQUE_FIXA_BANCO_CONVENIADO = 0;
  readonly TAXA_SAQUE_VARIAVEL = 0.0085;
  readonly TAXA_SAQUE_VARIAVEL_BANCO_CONVENIADO = this.TAXA_SAQUE_VARIAVEL;
  readonly POSSUI_CONVENIOS_BANCOS = true;
  readonly LIVRO_ORDENS_VAZIO = {asks: [], bids: []};

  id = 'bitnuvem';
  nome = 'Bitnuvem';
  paginaInicial = 'https://bitnuvem.com/';
  paginaOrdens = 'https://bitnuvem.com/panel/order-book/BTCBRL';
  paginaContato = 'https://bitnuvem.com/suporte';
  observacao = '';
  webservice = 'https://bitnuvem.com/api/BTC/orderbook';
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
    const ordensVenda: Ordens = [];
    const ordensCompra: Ordens = [];
    const livroOrdens: LivroOrdens = {
      venda: ordensVenda,
      compra: ordensCompra,
      dataRequisicao,
      dataResposta: new Date(),
    };
    const livroOrdensBitnuvem: LivroOrdensBitnuvem = (
      livroOrdensAPI
    ) as LivroOrdensBitnuvem;

    livroOrdensBitnuvem.asks.forEach(
      (ordemBitnuvem: OrdemBitnuvem) => {
        const ordem: Ordem = {
          preco: parseFloat(ordemBitnuvem[0]),
          quantidade: parseFloat(ordemBitnuvem[1]),
        };
        ordensVenda.push(ordem);
      }
    );
    livroOrdensBitnuvem.bids.forEach(
      (ordemBitnuvem: OrdemBitnuvem) => {
        const ordem: Ordem = {
          preco: parseFloat(ordemBitnuvem[0]),
          quantidade: parseFloat(ordemBitnuvem[1]),
        };
        ordensCompra.push(ordem);
      }
    );

    return livroOrdens;
  }
}
