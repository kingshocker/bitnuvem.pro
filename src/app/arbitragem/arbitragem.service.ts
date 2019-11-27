import { Injectable } from '@angular/core';

import { Corretora, LivroOrdens } from '../corretora/corretora';
import { CorretoraService } from '../corretora/corretora.service';

import { Arbitragem } from './arbitragem';
import { Configuracao } from '../configuracoes/configuracao';
import { ConfiguracoesService } from '../configuracoes/configuracoes.service';

@Injectable({
  providedIn: 'root'
})
export class ArbitragemService {
  oportunidadesArbitragem: Array<Arbitragem>;
  configuracao: Configuracao;

  constructor(
    private corretoraService: CorretoraService,
    private configuracoes: ConfiguracoesService,
  ) {
    this.configuracao = this.configuracoes.configuracao;
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
      return new Arbitragem(
        corretoraA,
        corretoraB,
        this.configuracao.investimentoMaximo,
        this.configuracao.filtroPorcentagemLucroAcima,
        this.configuracao.simularTaxaTransferencia,
      );
    } else if (
      corretoraA.livroOrdens.compra.length > 0
      && corretoraB.livroOrdens.venda.length > 0
      && corretoraB.menorPrecoVenda < corretoraA.maiorPrecoCompra
    ) {
      return new Arbitragem(
        corretoraB,
        corretoraA,
        this.configuracao.investimentoMaximo,
        this.configuracao.filtroPorcentagemLucroAcima,
        this.configuracao.simularTaxaTransferencia,
      );
    }

    return null;
  }

  async verificarOportunidadesArbitragem(): Promise<Array<Arbitragem>> {
    const arbitragens: Array<Arbitragem> = [];
    const promises: Array<Promise<LivroOrdens>> = [];
    const corretoras: Array<Corretora> = [];
    for (const idCorretora in this.configuracao.corretoras) {
      if (!this.configuracao.corretoras.hasOwnProperty(idCorretora)) {
        continue;
      }

      const corretora = this.corretoraService.corretoraPeloId(idCorretora);
      corretoras.push(corretora);
      promises.push(corretora.carregarLivroOrdens());
    }
    await Promise.all(promises);

    for (
      let indiceA = 0, length: number = corretoras.length;
      indiceA < length;
      indiceA++
    ) {
      const corretoraA = corretoras[indiceA];
      for (let indiceB: number = indiceA + 1; indiceB < length; indiceB++) {
        const corretoraB = corretoras[indiceB];
        const arbitragem = this.verificarOportunidadesArbitragemCorretoras(
          corretoraA,
          corretoraB,
        );

        if (
          (arbitragem !== null)
          && (arbitragem.lucro >= this.configuracao.filtroLucroAcima)
          && (
            arbitragem.porcentagemLucro
            >= this.configuracao.filtroPorcentagemLucroAcima
          )
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
    const corretoraA = this.corretoraService.corretoraPeloId(idCorretoraA);
    const corretoraB = this.corretoraService.corretoraPeloId(idCorretoraB);

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
