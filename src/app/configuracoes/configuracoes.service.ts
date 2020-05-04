import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Configuracao, ConfiguracaoCorretora } from './configuracao';
import { Ordenacao, CampoOrdenacao, CriterioOrdenacao } from './ordenacao';
import { CorretoraService } from '../corretora/corretora.service';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracoesService {
  readonly FILTRO_LUCRO_ACIMA = 'filtro-lucro-acima';
  readonly FILTRO_PORCENTAGEM_LUCRO_ACIMA = 'filtro-porcentagem-lucro-acima';
  readonly FILTRO_CORRETORAS_HABILITADAS = (
    'filtro-corretora-{corretora}-habilitada'
  );
  readonly INVESTIMENTO_MAXIMO = 'investimento-maximo';
  readonly PERMITIR_NOTIFICAR = 'permitir-notificar';
  readonly TEMPO_ENTRE_NOTIFICACOES = 'tempo-entre-notificacoes';
  readonly SIMULAR_TAXA_TRANSFERENCIA = 'simular-taxa-transferencia';
  readonly SIMULAR_TAXA_SAQUE = 'simular-taxa-saque';
  readonly ORDENACAO = 'ordenacao';
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
      this.carregarValor(this.ORDENACAO, this.configuracao.ordenacao).then(
        (valor: Array<{campoOrdenacao: CampoOrdenacao}>) => {
          const ordenacao: Ordenacao = [];
          for (let i = 0, length = valor.length; i < length; i++) {
            ordenacao.push(new CriterioOrdenacao(valor[i].campoOrdenacao));
          }
          this.configuracao.ordenacao = ordenacao;
        }
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
    this.promises.push(
      this.carregarValor(
        this.SIMULAR_TAXA_SAQUE,
        this.configuracao.simularTaxaSaque,
      ).then(
        (valor) => this.configuracao.simularTaxaSaque = valor
      )
    );
    this.corretoraService.corretoras.forEach((corretora) => {
      const valorPadrao = JSON.parse(
        JSON.stringify(this.configuracao.VALOR_PADRAO_CORRETORAS)
      );
      this.configuracao.corretoras[corretora.id] = valorPadrao;
      this.promises.push(
        this.carregarValorCorretora(
          this.FILTRO_CORRETORAS_HABILITADAS,
          corretora.id,
          valorPadrao,
        ).then((valor: boolean | ConfiguracaoCorretora) => {
          /*
           * Conversão do tipo antigo de valor que era armanzenado para informar
           * se a corretora estava habilitada para o novo tipo.
           */
          let valorConvertido: ConfiguracaoCorretora = null;
          if (typeof valor === 'boolean') {
            valorConvertido = {habilitada: valor, possuiBancoConveniado: false};
          } else {
            valorConvertido = valor as ConfiguracaoCorretora;
          }

          this.configuracao.corretoras[corretora.id] = valorConvertido;
        })
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

  mudarFiltroLucroAcima() {
    this.storage.set(
      this.FILTRO_LUCRO_ACIMA,
      this.configuracao.filtroLucroAcima,
    );
  }

  mudarFiltroPorcentagemLucroAcima() {
    this.storage.set(
      this.FILTRO_PORCENTAGEM_LUCRO_ACIMA,
      this.configuracao.filtroPorcentagemLucroAcima,
    );
  }

  mudarInvestimentoMaximo() {
    this.storage.set(
      this.INVESTIMENTO_MAXIMO,
      this.configuracao.investimentoMaximo,
    );
  }

  mudarPermitirNotificar() {
    this.storage.set(
      this.PERMITIR_NOTIFICAR,
      this.configuracao.permitirNotificar,
    );
  }

  mudarTempoEntreNoficacoes() {
    this.storage.set(
      this.TEMPO_ENTRE_NOTIFICACOES,
      this.configuracao.tempoEntreNotificacoes,
    );
  }

  mudarSimularTaxaTransferencia() {
    this.storage.set(
      this.SIMULAR_TAXA_TRANSFERENCIA,
      this.configuracao.simularTaxaTransferencia,
    );
  }

  mudarSimularTaxaSaque() {
    this.storage.set(
      this.SIMULAR_TAXA_SAQUE,
      this.configuracao.simularTaxaSaque,
    );
  }

  mudarOrdenacao() {
    this.storage.set(this.ORDENACAO, this.configuracao.ordenacao);
  }

  mudarFiltroCorretoraHabilitada(idCorretora: string) {
    const id = this.FILTRO_CORRETORAS_HABILITADAS.replace(
      '{corretora}',
      idCorretora,
    );
    this.storage.set(id, this.configuracao.corretoras[idCorretora]);
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
