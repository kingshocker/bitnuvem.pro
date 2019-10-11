import { Injectable } from '@angular/core';

import { Corretora, LivroOrdens } from '../corretora/corretora';
import { BisqService } from '../corretora/bisq.service';
import { BraziliexService } from '../corretora/braziliex.service';
import { Arbitragem } from './arbitragem';

@Injectable({
  providedIn: 'root'
})
export class ArbitragemService {
  corretoras: Array<Corretora>;
  oportunidadesArbitragem: Array<Arbitragem>;

  constructor(private bisq: BisqService, private braziliex: BraziliexService) {
    this.corretoras = [this.bisq, this.braziliex];
  }

  async verificarOportunidadesArbitragem(): Promise<Array<Arbitragem>> {
    const arbitragens: Array<Arbitragem> = [];
    const promises: Array<Promise<LivroOrdens>> = [];
    this.corretoras.forEach((corretora: Corretora) => {
      promises.push(corretora.carregarLivroOrdens());
    });
    await Promise.all(promises);

    for (
      let indiceA = 0, length: number = this.corretoras.length;
      indiceA < length;
      indiceA++
    ) {
      const corretoraA = this.corretoras[indiceA];
      for (let indiceB: number = indiceA + 1; indiceB < length; indiceB++) {
        const corretoraB = this.corretoras[indiceB];
        if (
          corretoraA.livroOrdens.venda.length > 0
          && corretoraB.livroOrdens.compra.length > 0
          && corretoraA.menorPrecoVenda < corretoraB.maiorPrecoCompra
        ) {
          arbitragens.push(new Arbitragem(corretoraA, corretoraB, 1000));
        } else if (
          corretoraA.livroOrdens.compra.length > 0
          && corretoraB.livroOrdens.venda.length > 0
          && corretoraB.menorPrecoVenda < corretoraA.maiorPrecoCompra
        ) {
          arbitragens.push(new Arbitragem(corretoraB, corretoraA, 1000));
        }
      }
    }

    return arbitragens;
  }
}
