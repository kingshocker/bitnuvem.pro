import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';

import { ConfiguracoesService } from './configuracoes.service';
import { Corretora } from '../corretora/corretora';
import { CorretoraService } from '../corretora/corretora.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  lucroAcima: number;
  porcentagemLucro: number;
  investimentoMaximo: number;
  permitirNotificar: boolean;
  corretoras: Array<{corretora: Corretora, habilitada: boolean}>;
  tempoEntreNotificacoes: number;

  constructor(
    private configuracoes: ConfiguracoesService,
    private platform: Platform,
    private corretoraService: CorretoraService,
  ) {}

  ngOnInit() {
    this.configuracoes.propagadorLucroObservavel.subscribe(
      (valor) => this.lucroAcima = valor
    );
    this.configuracoes.propagadorPorcentagemLucroObservavel.subscribe(
      (valor) => this.porcentagemLucro = valor
    );
    this.configuracoes.propagadorInvestimentoMaximoObservavel.subscribe(
      (valor) => this.investimentoMaximo = valor
    );
    this.configuracoes.propagadorNotificarObservavel.subscribe(
      (valor) => this.permitirNotificar = valor
    );
    this.corretoras = [];
    this.corretoraService.corretoras.forEach((corretora) => {
      const corretoraHabilitada = {corretora, habilitada: null};
      this.corretoras.push(corretoraHabilitada);
      this
        .configuracoes
        .propagadoresCorretorasHabilitadasObservaveis[corretora.id]
        .subscribe(
          (valor) => corretoraHabilitada.habilitada = valor
        );
    });
  }

  mudarLucro() {
    this.configuracoes.mudarFiltroLucroAcima(this.lucroAcima);
  }

  mudarPorcentagemLucro() {
    this.configuracoes.mudarFiltroPorcentagemLucroAcima(this.porcentagemLucro);
  }

  mudarInvestimentoMaximo() {
    this.configuracoes.mudarInvestimentoMaximo(this.investimentoMaximo);
  }

  mudarPermitirNotificar() {
    if (
      (this.permitirNotificar)
      && (typeof Notification !== typeof undefined)
      && (!this.platform.is('cordova'))
      && (!this.platform.is('capacitor'))
    ) {
      Notification.requestPermission();
    }
    this.configuracoes.mudarPermitirNotificar(this.permitirNotificar);
  }

  mudarCorretoraHabilitada(idCorretora: string) {
    this.corretoras.forEach((corretora) => {
      if (corretora.corretora.id === idCorretora) {
        this.configuracoes.mudarFiltroCorretoraHabilitada(
          idCorretora,
          corretora.habilitada
        );
      }
    });
  }
}
