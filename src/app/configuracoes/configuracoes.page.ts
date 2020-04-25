import { Component, OnInit, ViewChild } from '@angular/core';

import { IonReorderGroup } from '@ionic/angular';

import { Configuracao } from './configuracao';
import { ConfiguracoesService } from './configuracoes.service';
import { Ordenacao } from './ordenacao';
import { Corretora } from '../corretora/corretora';
import { CorretoraService } from '../corretora/corretora.service';
import { NotificacaoService } from '../shared/notificacao.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  @ViewChild(IonReorderGroup, {static: false})
  reorderGroup: IonReorderGroup;

  corretoras: Array<Corretora>;
  configuracao: Configuracao;

  constructor(
    private configuracoes: ConfiguracoesService,
    private corretoraService: CorretoraService,
    private notificacaoService: NotificacaoService,
  ) {}

  ngOnInit() {
    this.configuracao = this.configuracoes.configuracao;
    this.corretoras = this.corretoraService.corretoras;
  }

  mudarLucro() {
    this.configuracoes.mudarFiltroLucroAcima();
  }

  mudarPorcentagemLucro() {
    this.configuracoes.mudarFiltroPorcentagemLucroAcima();
  }

  mudarPermitirNotificar() {
    if (this.configuracao.permitirNotificar) {
      this.notificacaoService.requisitarPermissaoNotificar().then(
        (permitido) => {
          if (permitido) {
            this.configuracoes.mudarPermitirNotificar();
          } else {
            this.configuracao.permitirNotificar = false;
          }
        }
      );
    } else {
      this.configuracoes.mudarPermitirNotificar();
    }
  }

  mudarTempoEntreNotificacoes() {
    this.configuracoes.mudarTempoEntreNoficacoes();
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
