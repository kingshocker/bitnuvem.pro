import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { OnPageVisible, OnPageHidden } from 'angular-page-visibility';
import { Subscription } from 'rxjs';

import { ArbitragemService } from '../arbitragem/arbitragem.service';
import { Arbitragem } from '../arbitragem/arbitragem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  readonly UM_MINUTO_EM_MILISEGUNDOS = 1000 * 60;
  paginaAtiva: boolean;
  paginaVisivel: boolean;
  intervalo: Observable<any>;
  arbitragens: Array<Arbitragem>;

  constructor(private oportunidades: ArbitragemService) {}

  ngOnInit() {
    this.verificarOportunidadesArbitragem();
    this.paginaAtiva = true;
    this.paginaVisivel = true;
    if (!this.intervalo) {
      this.intervalo = interval(this.UM_MINUTO_EM_MILISEGUNDOS);
      this.intervalo.pipe(takeWhile(() => this.paginaAtiva)).subscribe(() => {
        if (this.paginaVisivel) {
          this.verificarOportunidadesArbitragem();
        }
      });
    }
  }

  ngOnDestroy() {
    this.paginaAtiva = false;
    this.paginaVisivel = false;
  }

  @OnPageVisible()
  onPaginaVisivel() {
    this.paginaVisivel = true;
  }

  @OnPageHidden()
  onPaginaNaoVisivel() {
    this.paginaVisivel = false;
  }

  async verificarOportunidadesArbitragem() {
    this.oportunidades.verificarOportunidadesArbitragem().then(
      (arbitragens) => {
        this.arbitragens = arbitragens;
      }
    );
  }

}
