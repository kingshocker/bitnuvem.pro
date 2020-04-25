import { Component, OnInit, ViewChild } from '@angular/core';

import { IonReorderGroup } from '@ionic/angular';

import { Configuracao } from './configuracao';
import { ConfiguracoesService } from './configuracoes.service';
import { Ordenacao } from './ordenacao';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  @ViewChild(IonReorderGroup, {static: false})
  reorderGroup: IonReorderGroup;

  configuracao: Configuracao;

  constructor(private configuracoes: ConfiguracoesService) {}

  ngOnInit() {
    this.configuracao = this.configuracoes.configuracao;
  }

  mudarOrdenacao(ev: any) {
    const ordenacao: Ordenacao = this.configuracao.ordenacao;
    const from = ev.detail.from;
    const to = Math.min(ev.detail.to, ordenacao.length);

    const tempFrom = ordenacao[from];
    const tempTo = ordenacao[to];
    ordenacao[from] = tempTo;
    ordenacao[to] = tempFrom;

    this.configuracoes.mudarOrdenacao();
    ev.detail.complete(false);
  }
}
