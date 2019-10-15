import { Component, OnInit } from '@angular/core';

import { ConfiguracoesService } from './configuracoes.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  lucroAcima: number;
  porcentagemLucro: number;

  constructor(private configuracoes: ConfiguracoesService) {}

  ngOnInit() {
    this.configuracoes.propagadorLucroObservavel.subscribe(
      (valor) => this.lucroAcima = valor
    );
    this.configuracoes.propagadorPorcentagemLucroObservavel.subscribe(
      (valor) => this.porcentagemLucro = valor
    );
  }

  mudarLucro() {
    this.configuracoes.mudarFiltroLucroAcima(this.lucroAcima);
  }

  mudarPorcentagemLucro() {
    this.configuracoes.mudarFiltroPorcentagemLucroAcima(this.porcentagemLucro);
  }
}
