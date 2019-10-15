import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracoesService {
  readonly FILTRO_LUCRO_ACIMA = 'filtro-lucro-acima';
  readonly FILTRO_PORCENTAGEM_LUCRO_ACIMA = 'filtro-porcentagem-lucro-acima';
  readonly INVESTIMENTO_MAXIMO = 'investimento-maximo';
  private propagadorLucro = new BehaviorSubject(null);
  private propagadorPorcentagemLucro = new BehaviorSubject(null);
  private propagadorInvestimentoMaximo = new BehaviorSubject(null);
  propagadorLucroObservavel = this.propagadorLucro.asObservable();
  propagadorPorcentagemLucroObservavel = (
    this.propagadorPorcentagemLucro.asObservable()
  );
  propagadorInvestimentoMaximoObservavel = (
    this.propagadorInvestimentoMaximo.asObservable()
  );

  constructor(private storage: Storage) {
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

  mudarInvestimentoMaximo(investimentoMaximo: number) {
    this.propagadorInvestimentoMaximo.next(investimentoMaximo);
    this.storage.set(this.INVESTIMENTO_MAXIMO, investimentoMaximo);
  }
}
