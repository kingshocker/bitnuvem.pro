import { Corretora, LivroOrdens } from './corretora';

export class CorretoraTest extends Corretora {
  readonly UTILIZA_PROXY = false;
  readonly TAXA_ORDEM_EXECUTORA = 0.005;
  readonly TAXA_SAQUE_FIXA = 10;
  readonly TAXA_SAQUE_FIXA_BANCO_CONVENIADO = 0;
  readonly TAXA_SAQUE_VARIAVEL = 0.002;
  readonly TAXA_SAQUE_VARIAVEL_BANCO_CONVENIADO = this.TAXA_SAQUE_VARIAVEL;
  readonly POSSUI_CONVENIOS_BANCOS = false;
  readonly LIVRO_ORDENS_VAZIO = {
    venda: [{preco: 40000, quantidade: 1}],
    compra: [{preco: 39000, quantidade: 1}],
    dataRequisicao: new Date(),
    dataResposta: new Date(),
  };

  id = 'corretora-test';
  nome = 'Corretora de teste';
  paginaInicial = 'https://example.com/';
  paginaOrdens = 'https://example.com/';
  paginaContato = 'https://example.com/';
  observacao = '';
  webservice = 'https://example.com/';
  livroOrdens: LivroOrdens;
  taxaTransferencia = 0.0005;

  constructor() {
    super();
    this.livroOrdens = this.LIVRO_ORDENS_VAZIO;
  }

  converterLivroOrdensAPI(
    livroOrdensAPI: any,
    dataRequisicao: Date,
  ): LivroOrdens {
    return this.livroOrdens;
  }

  carregarLivroOrdens(): Promise<LivroOrdens> {
    return new Promise((resolve) => {
      resolve(this.livroOrdens);
    });
  }
}

