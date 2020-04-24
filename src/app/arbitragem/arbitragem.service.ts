import { Injectable } from '@angular/core';

import { Corretora, LivroOrdens } from '../corretora/corretora';
import { CorretoraService } from '../corretora/corretora.service';

import { Arbitragem } from './arbitragem';
import { Configuracao } from '../configuracoes/configuracao';
import { ConfiguracoesService } from '../configuracoes/configuracoes.service';
import { Ordenacao } from '../configuracoes/ordenacao';

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
        this.configuracao.simularTaxaSaque,
        this.configuracao.corretoras[corretoraB.id].possuiBancoConveniado,
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
        this.configuracao.simularTaxaSaque,
        this.configuracao.corretoras[corretoraA.id].possuiBancoConveniado,
      );
    }

    return null;
  }

  async verificarOportunidadesArbitragem(): Promise<Array<Arbitragem>> {
    const arbitragens: Array<Arbitragem> = [];
    const promises: Array<Promise<LivroOrdens>> = [];
    const corretoras: Array<Corretora> = [];
    for (const idCorretora in this.configuracao.corretoras) {
      if (!this.configuracao.corretoras[idCorretora].habilitada) {
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

    const arbitragensOrdenadas: Array<Arbitragem> = arbitragens.sort(
      (arbitragem1: Arbitragem, arbitragem2: Arbitragem) => {
        const ordenacao: Ordenacao = this.configuracao.ordenacao;
        for (let i = 0, length = ordenacao.length; i < length; i++) {
          const resultado: number = ordenacao[i].comparar(
            arbitragem1,
            arbitragem2,
          );
          if (resultado !== 0) {
            return resultado;
          }
        }
        return 0;
      }
    );

    return arbitragensOrdenadas;
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
