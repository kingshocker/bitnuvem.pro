import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

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
  lucroAcima: number;
  porcentagemLucro: number;
  investimentoMaximo: number;
  permitirNotificar: boolean;
  corretoras: Array<{corretora: Corretora, habilitada: boolean}>;
  tempoEntreNotificacoes: number;
  simularTaxaTransferencia: boolean;

  constructor(
    private configuracoes: ConfiguracoesService,
    private corretoraService: CorretoraService,
    private alertController: AlertController,
    private notificacaoService: NotificacaoService,
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
    this.configuracoes.propagadorTempoEntreNotificacoesObservavel.subscribe(
      (valor) => this.tempoEntreNotificacoes = valor
    );
    this.configuracoes.propagadorSimularTaxaTransferenciaObservavel.subscribe(
      (valor) => this.simularTaxaTransferencia = valor
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
    if (this.permitirNotificar) {
      this.notificacaoService.requisitarPermissaoNotificar();
    }
    this.configuracoes.mudarPermitirNotificar(this.permitirNotificar);
  }

  mudarTempoEntreNotificacoes() {
    this.configuracoes.mudarTempoEntreNoficacoes(this.tempoEntreNotificacoes);
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

  async mudarSimularTaxaTransferencia() {
    if (this.simularTaxaTransferencia) {
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
              this.simularTaxaTransferencia = false;
            }
          }, {
            text: 'Concordar',
            handler: () => {
              this.configuracoes.mudarSimularTaxaTransferencia(
                this.simularTaxaTransferencia
              );
            }
          }
        ]
      });

      await alert.present();
    } else {
      this.configuracoes.mudarSimularTaxaTransferencia(
        this.simularTaxaTransferencia
      );
    }
  }
}
