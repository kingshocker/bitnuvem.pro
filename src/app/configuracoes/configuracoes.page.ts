import { Component, OnInit, ViewChild } from '@angular/core';

import { AlertController, IonReorderGroup } from '@ionic/angular';

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
  corretorasConveniosBancos: Array<Corretora>;
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
    this.corretorasConveniosBancos = this.corretoras.filter(
      (corretora: Corretora) => corretora.POSSUI_CONVENIOS_BANCOS
    );
  }

  mudarLucro() {
    this.configuracoes.mudarFiltroLucroAcima();
  }

  mudarPorcentagemLucro() {
    this.configuracoes.mudarFiltroPorcentagemLucroAcima();
  }

  mudarInvestimentoMaximo() {
    this.configuracoes.mudarInvestimentoMaximo();
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

  mudarCorretoraHabilitada(idCorretora: string) {
    this.configuracoes.mudarFiltroCorretoraHabilitada(idCorretora);
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
              this.configuracoes.mudarSimularTaxaTransferencia();
            }
          }
        ]
      });

      await alert.present();
    } else {
      this.configuracoes.mudarSimularTaxaTransferencia();
    }
  }

  async mudarSimularTaxaSaque() {
    if (this.configuracao.simularTaxaSaque) {
      const alert = await this.alertController.create({
        header: 'Confirmar',
        message: (
          'A simulação da taxa de saque em reais é estimativa, por isso ela '
          + 'pode conter erros. Mesmo assim você concorda em habilitar a '
          + 'simulação da taxa de saque em reais?'
        ),
        mode: 'ios',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              this.configuracao.simularTaxaSaque = false;
            }
          }, {
            text: 'Concordar',
            handler: () => {
              this.configuracoes.mudarSimularTaxaSaque();
            }
          }
        ]
      });

      await alert.present();
    } else {
      this.configuracoes.mudarSimularTaxaSaque();
    }
  }
}
