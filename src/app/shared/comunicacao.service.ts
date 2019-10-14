import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacaoService {
  private propagador = new BehaviorSubject(null);
  propagadorObservavel = this.propagador.asObservable();

  constructor() {}

  modificarObjeto(objeto: any) {
    this.propagador.next(objeto);
  }
}
