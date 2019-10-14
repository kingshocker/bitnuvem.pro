import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { OnPageVisible, OnPageHidden } from 'angular-page-visibility';

import { ArbitragemService } from '../arbitragem/arbitragem.service';
import { Arbitragem } from '../arbitragem/arbitragem';
import { ComunicacaoService } from '../shared/comunicacao.service';

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

  constructor(
    private oportunidades: ArbitragemService,
    private comunicacao: ComunicacaoService,
    private router: Router,
  ) {}

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

  detalharOportunidadeArbitragem(indice: number) {
    this.ngOnDestroy();
    const arbitragem = this.arbitragens[indice];
    this.comunicacao.modificarObjeto(arbitragem);
    this.router.navigate([
      '/arbitragem',
      arbitragem.corretoraVenda.id,
      arbitragem.corretoraCompra.id,
    ]);
  }
}
