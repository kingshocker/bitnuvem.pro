import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { Storage } from '@ionic/storage';

import {
  ConcordaIsencaoResponsabilidade
} from './concorda-isencao-responsabilidade.enum';

@Injectable({
  providedIn: 'root'
})
export class IsencaoResponsabilidadeGuard implements CanActivate {

  constructor(private storage: Storage, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return Promise.all([
      this.storage.get(ConcordaIsencaoResponsabilidade.PERDAS_GANHOS),
      this.storage.get(ConcordaIsencaoResponsabilidade.CORRETORAS)
    ]).then((valores: Array<string>) => {
      let resultado = true;
      valores.forEach((valor: string) => {
        resultado = resultado && (valor === 'true');
      });

      if (!resultado) {
        this.router.navigate(['/isencao-responsabilidade']);
      }

      return resultado;
    });
  }
}
