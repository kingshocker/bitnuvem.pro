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
  readonly PROXY = 'https://cors-anywhere.herokuapp.com/';
  abstract readonly UTILIZA_PROXY: boolean;
  abstract readonly TAXA_ORDEM_EXECUTORA: number;
  abstract readonly TAXA_SAQUE_FIXA: number;
  abstract readonly TAXA_SAQUE_FIXA_BANCO_CONVENIADO: number;
  abstract readonly TAXA_SAQUE_VARIAVEL: number;
  abstract readonly TAXA_SAQUE_VARIAVEL_BANCO_CONVENIADO: number;
  abstract readonly POSSUI_CONVENIOS_BANCOS: boolean;
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

  /**
   * Changed version from: https://davidwalsh.name/fetch-timeout
   */
  protected requisicao(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let didTimeOut = false;

      const timeout = setTimeout(() => {
        didTimeOut = true;
        reject(new Error('Request timed out'));
      }, TEMPO_REQUISICAO_MAXIMO);

      const urlRequisicao = (this.UTILIZA_PROXY ? this.PROXY : '') + url;

      fetch(
        urlRequisicao,
        {
          cache: 'no-store',
          mode: 'cors',
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      ).then((response: Response) => {
        // Clear the timeout as cleanup
        clearTimeout(timeout);

        if (!didTimeOut) {
          resolve(response);
        }
      }).catch((err: Error) => {
        // Rejection already happened with setTimeout
        if (didTimeOut) {
          return;
        }
        // Reject with error
        reject(err);
      });
    }).then((response: Response) => {
      // Request success and no timeout
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    }).catch((erro: Error) => {
      console.log(this.id, erro);

      return this.LIVRO_ORDENS_VAZIO;
    });
  }

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
    return this.requisicao(this.webservice).then((livroOrdensAPI: any) => {
      this.livroOrdens = this.converterLivroOrdensAPI(
        livroOrdensAPI,
        dataRequisicao,
      );
      return this.livroOrdens;
    });
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

  simularTaxaSaque(valorSaque: number, possuiConvenioBanco: boolean): number {
    if (possuiConvenioBanco) {
      return (
        this.TAXA_SAQUE_FIXA_BANCO_CONVENIADO
        + (
          this.TAXA_SAQUE_VARIAVEL_BANCO_CONVENIADO
          * valorSaque
        )
      );
    }
    return this.TAXA_SAQUE_FIXA + (this.TAXA_SAQUE_VARIAVEL * valorSaque);
  }
}
