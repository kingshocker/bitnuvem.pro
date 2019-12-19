import { HttpClient } from '@angular/common/http';
import { timeout, catchError } from 'rxjs/operators';

export const TEMPO_REQUISICAO_MAXIMO = 30000;

export interface Ordem {
  preco: number;
  quantidade: number;
}

export type Ordens = Array<Ordem>;

export interface LivroOrdens {
  venda: Ordens;
  compra: Ordens;
  dataRequisicao: Date;
  dataResposta: Date;
}

export abstract class Corretora {
  abstract readonly TAXA_ORDEM_EXECUTORA: number;
  abstract readonly LIVRO_ORDENS_VAZIO: any;

  abstract id: string;
  abstract nome: string;
  abstract taxaTransferencia: number;
  abstract paginaInicial: string;
  abstract paginaOrdens: string;
  abstract paginaContato: string;
  abstract webservice: string;
  abstract observacao: string;
  abstract livroOrdens: LivroOrdens;

  constructor(public http: HttpClient) {}

  abstract converterLivroOrdensAPI(
    livroOrdensAPI: any,
    dataRequisicao: Date,
  ): LivroOrdens;

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

        return new Promise((resolve) => resolve(this.LIVRO_ORDENS_VAZIO));
      }),
    ).toPromise().then((livroOrdensAPI: any) => {
      this.livroOrdens = this.converterLivroOrdensAPI(
        livroOrdensAPI,
        dataRequisicao,
      );
      return this.livroOrdens;
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
