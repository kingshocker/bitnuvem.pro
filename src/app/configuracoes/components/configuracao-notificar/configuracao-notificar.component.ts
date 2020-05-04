import { Component, OnInit } from '@angular/core';

import { Configuracao } from '../../configuracao';
import { ConfiguracoesService } from '../../configuracoes.service';
import { NotificacaoService } from '../../../comum/notificacao.service';

@Component({
  selector: 'app-configuracao-notificar',
  templateUrl: './configuracao-notificar.component.html',
  styleUrls: ['./configuracao-notificar.component.scss'],
})
export class ConfiguracaoNotificarComponent implements OnInit {
  configuracao: Configuracao;

  constructor(
    private configuracoes: ConfiguracoesService,
    private notificacaoService: NotificacaoService,
  ) {}

  ngOnInit() {
    this.configuracao = this.configuracoes.configuracao;
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
}
