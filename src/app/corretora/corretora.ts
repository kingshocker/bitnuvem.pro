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

export interface Corretora {
  id: string;
  nome: string;
  paginaInicial: string;
  paginaOrdens: string;
  paginaContato: string;
  observacao: string;
  livroOrdens: LivroOrdens;
  menorPrecoVenda: number;
  maiorPrecoCompra: number;
  taxaTransferencia: number;
  carregarLivroOrdens(): Promise<LivroOrdens>;
  calcularValorTaxaVenda(valor: number): number;
  calcularValorTaxaCompra(valor: number): number;
  calcularValorVendaAposTaxas(valor: number): number;
  calcularValorCompraAposTaxas(valor: number): number;
  calcularValorMaximoVendaAposTaxas(limiteValor: number): number;
  calcularValorMaximoCompraAposTaxas(limiteValor: number): number;
}

export const TEMPO_REQUISICAO_MAXIMO = 30000;
