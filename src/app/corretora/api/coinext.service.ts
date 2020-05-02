import { Injectable } from '@angular/core';

import { Corretora, LivroOrdens, Ordem, Ordens } from '../corretora';

type OrdemCoinext = Array<number>;

type LivroOrdensCoinext = Array<OrdemCoinext>;

@Injectable({
  providedIn: 'root'
})
export class CoinextService extends Corretora {
  readonly TAXA_ORDEM_EXECUTORA = 0.005;
  readonly TAXA_SAQUE_FIXA = 8.99;
  readonly TAXA_SAQUE_FIXA_BANCO_CONVENIADO = 0;
  readonly TAXA_SAQUE_VARIAVEL = 0.0019;
  readonly TAXA_SAQUE_VARIAVEL_BANCO_CONVENIADO = this.TAXA_SAQUE_VARIAVEL;
  readonly POSSUI_CONVENIOS_BANCOS = false;
  readonly LIVRO_ORDENS_VAZIO = [];

  id = 'coinext';
  nome = 'Coinext';
  paginaInicial = 'https://coinext.com.br/';
  paginaOrdens = 'https://coinext.com.br/trade.html';
  paginaContato = 'https://content.coinext.com.br/';
  observacao = '';
  webservice = 'https://cors-anywhere.herokuapp.com/https://api.coinext.com.br:8443/AP/GetL2Snapshot?OMSId=1&InstrumentId=1&Depth=1';
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
    const livroOrdensCoinext: LivroOrdensCoinext = (
      livroOrdensAPI
    ) as LivroOrdensCoinext;
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
        quantidade: ordemCoinext[8],
      };
      if (ordemCoinext[9] === 1) {
        ordensVenda.push(ordem);
      } else {
        ordensCompra.push(ordem);
      }
    });

    return livroOrdens;
  }
}
