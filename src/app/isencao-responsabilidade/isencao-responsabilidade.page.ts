import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-isencao-responsabilidade',
  templateUrl: './isencao-responsabilidade.page.html',
  styleUrls: ['./isencao-responsabilidade.page.scss'],
})
export class IsencaoResponsabilidadePage {

  concordaIsencaoPerdasGanhos: boolean;
  concordaIsencaoCorretoras: boolean;

  constructor(
    private toastController: ToastController,
    private storage: Storage
  ) {}

  async informarItensNaoMarcados() {
    const toast = await this.toastController.create({
      message: 'É necessário concordar com todos os itens para utilizar o software.',
      duration: 5000
    });
    toast.present();
  }

  async salvarConcordaIsencaoResponsabilidade() {
    this.storage.set(
      'concorda-isencao-responsabilidade-perdas-ganhos',
      this.concordaIsencaoPerdasGanhos.toString()
    );
    this.storage.set(
      'concorda-isencao-responsabilidade-corretoras',
      this.concordaIsencaoCorretoras.toString()
    );
  }

  concordarTermosUso() {
    if (!(this.concordaIsencaoPerdasGanhos && this.concordaIsencaoCorretoras)) {
      this.informarItensNaoMarcados();
    } else {
      this.salvarConcordaIsencaoResponsabilidade();
    }
  }
}
