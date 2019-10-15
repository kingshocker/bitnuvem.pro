import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracoesService {
  private propagadorLucro = new BehaviorSubject(null);
  private propagadorPorcentagemLucro = new BehaviorSubject(null);
  propagadorLucroObservavel = this.propagadorLucro.asObservable();
  propagadorPorcentagemLucroObservavel = (
    this.propagadorPorcentagemLucro.asObservable()
  );

  constructor(private storage: Storage) {
    this.storage.get('filtro-lucro-acima').then((valor) => {
      if ((valor !== undefined) && (valor !== null)) {
        this.propagadorLucro.next(valor);
      } else {
        this.propagadorLucro.next(0);
      }
    });
    this.storage.get('filtro-porcentagem-lucro-acima').then((valor) => {
      if ((valor !== undefined) && (valor !== null)) {
        this.propagadorPorcentagemLucro.next(valor);
      } else {
        this.propagadorPorcentagemLucro.next(0);
      }
    });
  }

  mudarFiltroLucroAcima(lucroAcima1: number) {
    this.propagadorLucro.next(lucroAcima1);
    this.storage.set('filtro-lucro-acima', lucroAcima1);
  }

  mudarFiltroPorcentagemLucroAcima(porcentagemLucroAcima: number) {
    this.propagadorPorcentagemLucro.next(porcentagemLucroAcima);
    this.storage.set('filtro-porcentagem-lucro-acima', porcentagemLucroAcima);
  }
}
