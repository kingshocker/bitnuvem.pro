export interface Ordem {
  preco: number;
  quantidade: number;
}

export type Ordens = Array<Ordem>;

export interface LivroOrdens {
  venda: Ordens;
  compra: Ordens;
}

export interface Corretora {
  id: string;
  nome: string;
  paginaInicial: string;
  livroOrdens: LivroOrdens;
  menorPrecoVenda: number;
  maiorPrecoCompra: number;
  carregarLivroOrdens(): Promise<LivroOrdens>;
  calcularValorVendaAposTaxas(valor: number): number;
  calcularValorCompraAposTaxas(valor: number): number;
}
