import { Injectable } from '@angular/core';

import { Corretora, LivroOrdens } from '../corretora/corretora';
import { CorretoraService } from '../corretora/corretora.service';

import { Arbitragem } from './arbitragem';
import { ConfiguracoesService } from '../configuracoes/configuracoes.service';

@Injectable({
  providedIn: 'root'
})
export class ArbitragemService {
  oportunidadesArbitragem: Array<Arbitragem>;
  lucroAcima: number;
  porcentagemLucro: number;
  investimentoMaximo: number;

  constructor(
    private corretoraService: CorretoraService,
    private configuracoes: ConfiguracoesService,
  ) {
    this.configuracoes.propagadorLucroObservavel.subscribe(
      (valor) => this.lucroAcima = valor
    );
    this.configuracoes.propagadorPorcentagemLucroObservavel.subscribe(
      (valor) => this.porcentagemLucro = valor
    );
    this.configuracoes.propagadorInvestimentoMaximoObservavel.subscribe(
      (valor) => this.investimentoMaximo = valor
    );
  }

  retornarCorretoraPeloId(idCorretora: string): Corretora {
    let corretoraEncontrada = null;
    this.corretoraService.corretoras.forEach((corretora) => {
      if (corretora.id === idCorretora) {
        corretoraEncontrada = corretora;
      }
    });
    return corretoraEncontrada;
  }

  verificarOportunidadesArbitragemCorretoras(
    corretoraA: Corretora,
    corretoraB: Corretora,
  ): Arbitragem {
    if (
      corretoraA.livroOrdens.venda.length > 0
      && corretoraB.livroOrdens.compra.length > 0
      && corretoraA.menorPrecoVenda < corretoraB.maiorPrecoCompra
    ) {
      return new Arbitragem(corretoraA, corretoraB, this.investimentoMaximo);
    } else if (
      corretoraA.livroOrdens.compra.length > 0
      && corretoraB.livroOrdens.venda.length > 0
      && corretoraB.menorPrecoVenda < corretoraA.maiorPrecoCompra
    ) {
      return new Arbitragem(corretoraB, corretoraA, this.investimentoMaximo);
    }

    return null;
  }

  async verificarOportunidadesArbitragem(): Promise<Array<Arbitragem>> {
    const arbitragens: Array<Arbitragem> = [];
    const promises: Array<Promise<LivroOrdens>> = [];
    this.corretoraService.corretoras.forEach((corretora: Corretora) => {
      promises.push(corretora.carregarLivroOrdens());
    });
    await Promise.all(promises);

    for (
      let indiceA = 0, length: number = this.corretoraService.corretoras.length;
      indiceA < length;
      indiceA++
    ) {
      const corretoraA = this.corretoraService.corretoras[indiceA];
      for (let indiceB: number = indiceA + 1; indiceB < length; indiceB++) {
        const corretoraB = this.corretoraService.corretoras[indiceB];
        const arbitragem = this.verificarOportunidadesArbitragemCorretoras(
          corretoraA,
          corretoraB,
        );

        if (
          (arbitragem !== null)
          && (arbitragem.lucro >= this.lucroAcima)
          && (arbitragem.porcentagemLucro >= this.porcentagemLucro)
        ) {
          arbitragens.push(arbitragem);
        }
      }
    }

    return arbitragens;
  }

  async verificarOportunidadesArbitragemCorretorasPelosIds(
    idCorretoraA: string,
    idCorretoraB: string,
  ): Promise<Arbitragem> {
    const corretoraA = this.retornarCorretoraPeloId(idCorretoraA);
    const corretoraB = this.retornarCorretoraPeloId(idCorretoraB);

    if ((corretoraA === null) || (corretoraB === null)) {
      return null;
    }

    const promises: Array<Promise<LivroOrdens>> = [];
    promises.push(corretoraA.carregarLivroOrdens());
    promises.push(corretoraB.carregarLivroOrdens());
    await Promise.all(promises);

    return this.verificarOportunidadesArbitragemCorretoras(
      corretoraA,
      corretoraB,
    );
  }
}
