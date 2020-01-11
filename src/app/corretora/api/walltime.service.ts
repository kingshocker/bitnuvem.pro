import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout, catchError } from 'rxjs/operators';

import {
  Corretora,
  LivroOrdens,
  Ordem,
  Ordens,
  TEMPO_REQUISICAO_MAXIMO,
} from '../corretora';

type OrdemWalltime = Array<string>;

interface LivroOrdensWalltime {
  timestamp: number;
  'xbt-brl': Array<OrdemWalltime>;
  'brl-xbt': Array<OrdemWalltime>;
}

interface MetaWalltime {
  current_round: number;
  code_version: string;
  order_book_pages: number;
  suspended_actions: Array<any>;
  order_book_prefix: string;
  last_trades_prefix: string;
  best_offer: any;
}

@Injectable({
  providedIn: 'root'
})
export class WalltimeService extends Corretora {
  readonly TAXA_ORDEM_EXECUTORA = 0.004;
  readonly LIVRO_ORDENS_VAZIO = {
    venda: [],
    compra: [],
    dataRequisicao: new Date(),
    dataResposta: new Date(),
  };

  id = 'walltime';
  nome = 'Walltime';
  paginaInicial = 'https://walltime.info/';
  paginaOrdens = 'https://walltime.info/';
  paginaContato = 'https://walltime.info/index_pt.html#!text?content=ajuda';
  observacao = '';
  webservice = 'https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/data-production-walltime-info/production/dynamic/meta.json';
  webservice2 = (
    'https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/'
    + 'data-production-walltime-info/production/dynamic/'
    + '{order_book_prefix}_r{current_round}_p0.json'
  );
  livroOrdens: LivroOrdens;
  taxaTransferencia = 0.0005;

  constructor(public http: HttpClient) {
    super(http);
    this.livroOrdens = null;
  }

  private async retornarLivroOrdens(): Promise<LivroOrdens> {
    const dataRequisicao = new Date();
    let livroOrdens: LivroOrdens = null;
    const metadata: MetaWalltime = await (this.http.get(this.webservice).pipe(
      timeout(TEMPO_REQUISICAO_MAXIMO),
      catchError((erro) => {
        console.error(this.id, erro);

        livroOrdens = this.LIVRO_ORDENS_VAZIO;
        return null;
      }),
    ).toPromise() as Promise<MetaWalltime>);
    if (livroOrdens !== null) {
      return livroOrdens;
    }
    const livroOrdensWalltime: LivroOrdensWalltime = await (this.http.get(
      this.webservice2.replace(
        '{order_book_prefix}',
        metadata.order_book_prefix,
      ).replace('{current_round}', metadata.current_round.toString())
    ).pipe(
      timeout(TEMPO_REQUISICAO_MAXIMO),
      catchError((erro) => {
        console.error(this.id, erro);

        livroOrdens = this.LIVRO_ORDENS_VAZIO;
        return null;
      }),
    ).toPromise() as Promise<LivroOrdensWalltime>);
    if (livroOrdens !== null) {
      return livroOrdens;
    }
    this.livroOrdens = this.converterLivroOrdensAPI(
      livroOrdensWalltime,
      dataRequisicao
    );
    return this.livroOrdens;
  }

  private converterNumeroWalltime(numeroWalltime: string): number {
    if (numeroWalltime.indexOf('/') === -1) {
      return parseFloat(numeroWalltime);
    }
    const numeros = numeroWalltime.split('/');
    return parseFloat(numeros[0]) / parseFloat(numeros[1]);
  }

  carregarLivroOrdens(): Promise<LivroOrdens> {
    return this.retornarLivroOrdens();
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
    const livroOrdensWalltime: LivroOrdensWalltime = (
      livroOrdensAPI
    ) as LivroOrdensWalltime;

    livroOrdensWalltime['xbt-brl'].forEach(
      (ordemWalltime: OrdemWalltime) => {
        const quantidade = this.converterNumeroWalltime(ordemWalltime[0]);
        const ordem: Ordem = {
          preco: (this.converterNumeroWalltime(ordemWalltime[1]) / quantidade),
          quantidade,
        };
        ordensVenda.push(ordem);
      }
    );
    livroOrdensWalltime['brl-xbt'].forEach(
      (ordemWalltime: OrdemWalltime) => {
        const quantidade = this.converterNumeroWalltime(ordemWalltime[0]);
        const ordem: Ordem = {
          preco: (this.converterNumeroWalltime(ordemWalltime[1]) / quantidade),
          quantidade,
        };
        ordensCompra.push(ordem);
      }
    );

    return livroOrdens;
  }
}
