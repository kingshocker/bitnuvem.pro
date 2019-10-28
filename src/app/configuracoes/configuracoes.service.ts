import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Storage } from '@ionic/storage';

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
  readonly VALOR_PADRAO_TEMPO_ENTRE_NOTIFICACOES = 60 * 2;
  readonly promises = [];

  private propagadorLucro = new BehaviorSubject(null);
  private propagadorPorcentagemLucro = new BehaviorSubject(null);
  private propagadorInvestimentoMaximo = new BehaviorSubject(null);
  private propagadorNotificar = new BehaviorSubject(null);
  private propagadoresCorretorasHabilitadas: { [idCorretora: string]: BehaviorSubject<boolean> } = {};
  private propagadorTempoEntreNotificacoes = new BehaviorSubject(null);

  propagadorLucroObservavel = this.propagadorLucro.asObservable();
  propagadorPorcentagemLucroObservavel = (
    this.propagadorPorcentagemLucro.asObservable()
  );
  propagadorInvestimentoMaximoObservavel = (
    this.propagadorInvestimentoMaximo.asObservable()
  );
  propagadorNotificarObservavel = this.propagadorNotificar.asObservable();
  propagadoresCorretorasHabilitadasObservaveis: { [idCorretora: string]: Observable<boolean> } = {};
  propagadorTempoEntreNotificacoesObservavel = (
    this.propagadorTempoEntreNotificacoes.asObservable()
  );

  constructor(
    private storage: Storage,
    private corretoraService: CorretoraService,
  ) {
    this.promises.push(
      this.carregarValorPropagador(
        this.FILTRO_LUCRO_ACIMA,
        this.propagadorLucro,
        0,
      )
    );
    this.promises.push(
      this.carregarValorPropagador(
        this.FILTRO_PORCENTAGEM_LUCRO_ACIMA,
        this.propagadorPorcentagemLucro,
        0,
      )
    );
    this.promises.push(
      this.carregarValorPropagador(
        this.INVESTIMENTO_MAXIMO,
        this.propagadorInvestimentoMaximo,
        1000,
      )
    );
    this.promises.push(
      this.carregarValorPropagador(
        this.PERMITIR_NOTIFICAR,
        this.propagadorNotificar,
        false,
      )
    );
    this.corretoraService.corretoras.forEach((corretora) => {
      const propagador = new BehaviorSubject(null);
      this.propagadoresCorretorasHabilitadas[corretora.id] = propagador;
      this.propagadoresCorretorasHabilitadasObservaveis[corretora.id] = (
        propagador.asObservable()
      );

      this.promises.push(
        this.carregarValorPropagadorCorretora(
          this.FILTRO_CORRETORAS_HABILITADAS,
          corretora.id,
          propagador,
          true,
        )
      );
    });
    this.promises.push(
      this.carregarValorPropagador(
        this.TEMPO_ENTRE_NOTIFICACOES,
        this.propagadorTempoEntreNotificacoes,
        this.VALOR_PADRAO_TEMPO_ENTRE_NOTIFICACOES,
      )
    );
  }

  private async carregarValorPropagador(
    id: string,
    propagador: BehaviorSubject<any>,
    valorPadrao: any,
  ): Promise<any> {
    this.storage.get(id).then((valor: any) => {
      if ((valor !== undefined) && (valor !== null)) {
        propagador.next(valor);
        return valor;
      } else {
        propagador.next(valorPadrao);
        return valorPadrao;
      }
    });
  }

  private async carregarValorPropagadorCorretora(
    id: string,
    idCorretora: string,
    propagador: BehaviorSubject<any>,
    valorPadrao: any,
  ): Promise<any> {
    return this.carregarValorPropagador(
      id.replace('{corretora}', idCorretora),
      propagador,
      valorPadrao,
    );
  }

  mudarFiltroLucroAcima(lucroAcima1: number) {
    this.propagadorLucro.next(lucroAcima1);
    this.storage.set(this.FILTRO_LUCRO_ACIMA, lucroAcima1);
  }

  mudarFiltroPorcentagemLucroAcima(porcentagemLucroAcima: number) {
    this.propagadorPorcentagemLucro.next(porcentagemLucroAcima);
    this.storage.set(
      this.FILTRO_PORCENTAGEM_LUCRO_ACIMA,
      porcentagemLucroAcima,
    );
  }

  mudarFiltroCorretoraHabilitada(idCorretora: string, habilitada: boolean) {
    const id = this.FILTRO_CORRETORAS_HABILITADAS.replace(
      '{corretora}',
      idCorretora,
    );
    this.storage.set(id, habilitada);
  }

  mudarInvestimentoMaximo(investimentoMaximo: number) {
    this.propagadorInvestimentoMaximo.next(investimentoMaximo);
    this.storage.set(this.INVESTIMENTO_MAXIMO, investimentoMaximo);
  }

  mudarPermitirNotificar(permitirNotificar: boolean) {
    this.propagadorNotificar.next(permitirNotificar);
    this.storage.set(this.PERMITIR_NOTIFICAR, permitirNotificar);
  }

  mudarTempoEntreNoficacoes(tempoEntreNotificacoes: number) {
    this.propagadorTempoEntreNotificacoes.next(tempoEntreNotificacoes);
    this.storage.set(this.TEMPO_ENTRE_NOTIFICACOES, tempoEntreNotificacoes);
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
