import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Configuracao } from './configuracao';
import { Corretora } from '../corretora/corretora';
import { CorretoraService } from '../corretora/corretora.service';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracoesService {
  readonly FILTRO_LUCRO_ACIMA = 'filtro-lucro-acima';
  readonly FILTRO_PORCENTAGEM_LUCRO_ACIMA = 'filtro-porcentagem-lucro-acima';
  readonly FILTRO_CORRETORAS_HABILITADAS = 'filtro-corretora-{corretora}-habilitada';
  readonly INVESTIMENTO_MAXIMO = 'investimento-maximo';
  readonly PERMITIR_NOTIFICAR = 'permitir-notificar';
  readonly TEMPO_ENTRE_NOTIFICACOES = 'tempo-entre-notificacoes';
  readonly SIMULAR_TAXA_TRANSFERENCIA = 'simular-taxa-transferencia';
  readonly VALOR_PADRAO_TEMPO_ENTRE_NOTIFICACOES = 60 * 2;
  readonly promises = [];

  configuracao: Configuracao;

  constructor(
    private storage: Storage,
    private corretoraService: CorretoraService,
  ) {
    this.configuracao = new Configuracao();
    this.promises.push(
      this.carregarValor(this.FILTRO_LUCRO_ACIMA, 0).then((valor) => {
        this.configuracao.filtroLucroAcima = valor;
      })
    );
    this.promises.push(
      this.carregarValor(this.FILTRO_PORCENTAGEM_LUCRO_ACIMA, 0).then(
        (valor) => this.configuracao.filtroPorcentagemLucroAcima = valor
      )
    );
    this.promises.push(
      this.carregarValor(this.INVESTIMENTO_MAXIMO, 1000).then(
        (valor) => this.configuracao.investimentoMaximo = valor
      )
    );
    this.promises.push(
      this.carregarValor(this.PERMITIR_NOTIFICAR, false).then(
        (valor) => this.configuracao.permitirNotificar = valor
      )
    );
    this.promises.push(
      this.carregarValor(
        this.TEMPO_ENTRE_NOTIFICACOES,
        this.VALOR_PADRAO_TEMPO_ENTRE_NOTIFICACOES,
      ).then((valor) => this.configuracao.tempoEntreNotificacoes = valor)
    );
    this.promises.push(
      this.carregarValor(this.SIMULAR_TAXA_TRANSFERENCIA, false).then(
        (valor) => this.configuracao.simularTaxaTransferencia = valor
      )
    );
    this.corretoraService.corretoras.forEach((corretora) => {
      this.promises.push(
        this.carregarValorCorretora(
          this.FILTRO_CORRETORAS_HABILITADAS,
          corretora.id,
          true,
        ).then((valor) => this.configuracao.corretoras[corretora.id] = valor)
      );
    });
  }

  private async carregarValor(id: string, valorPadrao: any): Promise<any> {
    return this.storage.get(id).then((valor: any) => {
      if ((valor !== undefined) && (valor !== null)) {
        return valor;
      }
      return valorPadrao;
    });
  }

  private async carregarValorCorretora(
    id: string,
    idCorretora: string,
    valorPadrao: any,
  ): Promise<any> {
    return this.carregarValor(
      id.replace('{corretora}', idCorretora),
      valorPadrao,
    );
  }

  mudarFiltroLucroAcima(lucroAcima1: number) {
    this.configuracao.filtroLucroAcima = lucroAcima1;
    this.storage.set(this.FILTRO_LUCRO_ACIMA, lucroAcima1);
  }

  mudarFiltroPorcentagemLucroAcima(porcentagemLucroAcima: number) {
    this.configuracao.filtroPorcentagemLucroAcima = porcentagemLucroAcima;
    this.storage.set(
      this.FILTRO_PORCENTAGEM_LUCRO_ACIMA,
      porcentagemLucroAcima,
    );
  }

  mudarInvestimentoMaximo(investimentoMaximo: number) {
    this.configuracao.investimentoMaximo = investimentoMaximo;
    this.storage.set(this.INVESTIMENTO_MAXIMO, investimentoMaximo);
  }

  mudarPermitirNotificar(permitirNotificar: boolean) {
    this.configuracao.permitirNotificar = permitirNotificar;
    this.storage.set(this.PERMITIR_NOTIFICAR, permitirNotificar);
  }

  mudarTempoEntreNoficacoes(tempoEntreNotificacoes: number) {
    this.configuracao.tempoEntreNotificacoes = tempoEntreNotificacoes;
    this.storage.set(this.TEMPO_ENTRE_NOTIFICACOES, tempoEntreNotificacoes);
  }

  mudarSimularTaxaTransferencia(simularTaxaTransferencia: boolean) {
    this.configuracao.simularTaxaTransferencia = simularTaxaTransferencia;
    this.storage.set(this.SIMULAR_TAXA_TRANSFERENCIA, simularTaxaTransferencia);
  }

  mudarFiltroCorretoraHabilitada(idCorretora: string, habilitada: boolean) {
    this.configuracao.corretoras[idCorretora] = habilitada;
    const id = this.FILTRO_CORRETORAS_HABILITADAS.replace(
      '{corretora}',
      idCorretora,
    );
    this.storage.set(id, habilitada);
  }

  async carregarConfiguracoes(): Promise<boolean> {
    await Promise.all(this.promises);
    return true;
  }
}

export function configuracoesServiceFactory(
  configuracoes: ConfiguracoesService
) {
  return () => configuracoes.carregarConfiguracoes();
}
