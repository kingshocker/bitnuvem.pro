import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { Configuracao } from '../../configuracao';
import { ConfiguracoesService } from '../../configuracoes.service';
import { Corretora } from '../../../corretora/corretora';
import { CorretoraService } from '../../../corretora/corretora.service';

@Component({
  selector: 'app-configuracao-definicao',
  templateUrl: './configuracao-definicao.component.html',
  styleUrls: ['./configuracao-definicao.component.scss'],
})
export class ConfiguracaoDefinicaoComponent implements OnInit {
  configuracao: Configuracao;
  corretorasConveniosBancos: Array<Corretora>;

  constructor(
    public configuracoes: ConfiguracoesService,
    public corretoraService: CorretoraService,
    private alertController: AlertController,
  ) {}

  ngOnInit() {
    this.configuracao = this.configuracoes.configuracao;
    this.corretorasConveniosBancos = this.corretoraService.corretoras.filter(
      (corretora: Corretora) => corretora.POSSUI_CONVENIOS_BANCOS
    );
  }

  get situacaoUsuario() {
    return this.configuracao.corretoras;
  }

  mudarInvestimentoMaximo() {
    this.configuracoes.mudarInvestimentoMaximo();
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

  mudarCorretoraHabilitada(idCorretora: string) {
    this.configuracoes.mudarFiltroCorretoraHabilitada(idCorretora);
  }
}
