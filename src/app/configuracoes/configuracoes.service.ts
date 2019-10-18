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

  private propagadorLucro = new BehaviorSubject(null);
  private propagadorPorcentagemLucro = new BehaviorSubject(null);
  private propagadorInvestimentoMaximo = new BehaviorSubject(null);
  private propagadorNotificar = new BehaviorSubject(null);
  private propagadoresCorretorasHabilitadas: { [idCorretora: string]: BehaviorSubject<boolean> } = {};

  propagadorLucroObservavel = this.propagadorLucro.asObservable();
  propagadorPorcentagemLucroObservavel = (
    this.propagadorPorcentagemLucro.asObservable()
  );
  propagadorInvestimentoMaximoObservavel = (
    this.propagadorInvestimentoMaximo.asObservable()
  );
  propagadorNotificarObservavel = this.propagadorNotificar.asObservable();
  propagadoresCorretorasHabilitadasObservaveis: { [idCorretora: string]: Observable<boolean> } = {};

  constructor(
    private storage: Storage,
    private corretoraService: CorretoraService,
  ) {
    this.carregarValorPropagador(
      this.FILTRO_LUCRO_ACIMA,
      this.propagadorLucro,
      0,
    );
    this.carregarValorPropagador(
      this.FILTRO_PORCENTAGEM_LUCRO_ACIMA,
      this.propagadorPorcentagemLucro,
      0,
    );
    this.carregarValorPropagador(
      this.INVESTIMENTO_MAXIMO,
      this.propagadorInvestimentoMaximo,
      1000,
    );
    this.carregarValorPropagador(
      this.PERMITIR_NOTIFICAR,
      this.propagadorNotificar,
      false,
    );
    this.corretoraService.corretoras.forEach((corretora) => {
      const propagador = new BehaviorSubject(null);
      this.propagadoresCorretorasHabilitadas[corretora.id] = propagador;
      this.propagadoresCorretorasHabilitadasObservaveis[corretora.id] = (
        propagador.asObservable()
      );

      this.carregarValorPropagadorCorretora(
        this.FILTRO_CORRETORAS_HABILITADAS,
        corretora.id,
        propagador,
        true,
      );
    });
  }

  private carregarValorPropagador(
    id: string,
    propagador: BehaviorSubject<any>,
    valorPadrao: any,
  ) {
    this.storage.get(id).then((valor: any) => {
      if ((valor !== undefined) && (valor !== null)) {
        propagador.next(valor);
      } else {
        propagador.next(valorPadrao);
      }
    });
  }

  private carregarValorPropagadorCorretora(
    id: string,
    idCorretora: string,
    propagador: BehaviorSubject<any>,
    valorPadrao: any,
  ) {
    this.carregarValorPropagador(
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
}
