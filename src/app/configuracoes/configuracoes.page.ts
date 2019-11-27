import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { Configuracao } from './configuracao';
import { ConfiguracoesService } from './configuracoes.service';
import { Corretora } from '../corretora/corretora';
import { CorretoraService } from '../corretora/corretora.service';
import { NotificacaoService } from '../shared/notificacao.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  corretoras: Array<Corretora>;
  configuracao: Configuracao;

  constructor(
    private configuracoes: ConfiguracoesService,
    private corretoraService: CorretoraService,
    private alertController: AlertController,
    private notificacaoService: NotificacaoService,
  ) {}

  ngOnInit() {
    this.configuracao = this.configuracoes.configuracao;
    this.corretoras = this.corretoraService.corretoras;
  }

  mudarLucro() {
    this.configuracoes.mudarFiltroLucroAcima(
      this.configuracao.filtroLucroAcima
    );
  }

  mudarPorcentagemLucro() {
    this.configuracoes.mudarFiltroPorcentagemLucroAcima(
      this.configuracao.filtroPorcentagemLucroAcima
    );
  }

  mudarInvestimentoMaximo() {
    this.configuracoes.mudarInvestimentoMaximo(
      this.configuracao.investimentoMaximo
    );
  }

  mudarPermitirNotificar() {
    if (this.configuracao.permitirNotificar) {
      this.notificacaoService.requisitarPermissaoNotificar().then(
        (permitido) => {
          if (permitido) {
            this.configuracoes.mudarPermitirNotificar(
              this.configuracao.permitirNotificar
            );
          } else {
            this.configuracao.permitirNotificar = false;
          }
        }
      );
    } else {
      this.configuracoes.mudarPermitirNotificar(
        this.configuracao.permitirNotificar
      );
    }
  }

  mudarTempoEntreNotificacoes() {
    this.configuracoes.mudarTempoEntreNoficacoes(
      this.configuracao.tempoEntreNotificacoes
    );
  }

  mudarCorretoraHabilitada(idCorretora: string) {
    this.configuracoes.mudarFiltroCorretoraHabilitada(
      idCorretora,
      this.configuracao.corretoras[idCorretora],
    );
  }

  async mudarSimularTaxaTransferencia() {
    if (this.configuracao.simularTaxaTransferencia) {
      const alert = await this.alertController.create({
        header: 'Confirmar',
        message: (
          'A simulação da taxa de transferência é estimativa, por isso ela '
          + 'pode conter erros. Sendo que nas corretoras que utilizam a taxa '
          + 'de mineração da rede foi fixado o valor de 0,0005 BTC para as '
          + 'simulações. Mesmo assim você concorda em habilitar a simulação da '
          + 'transferência de criptomoedas?'
        ),
        mode: 'ios',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              this.configuracao.simularTaxaTransferencia = false;
            }
          }, {
            text: 'Concordar',
            handler: () => {
              this.configuracoes.mudarSimularTaxaTransferencia(
                this.configuracao.simularTaxaTransferencia
              );
            }
          }
        ]
      });

      await alert.present();
    } else {
      this.configuracoes.mudarSimularTaxaTransferencia(
        this.configuracao.simularTaxaTransferencia
      );
    }
  }
}
