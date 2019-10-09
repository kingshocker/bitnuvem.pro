import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-isencao-responsabilidade',
  templateUrl: './isencao-responsabilidade.page.html',
  styleUrls: ['./isencao-responsabilidade.page.scss'],
})
export class IsencaoResponsabilidadePage {

  concordaIsencaoPerdasGanhos: boolean;
  concordaIsencaoCorretoras: boolean;

  constructor(private toastController: ToastController) {}

  async informarItensNaoMarcados() {
    const toast = await this.toastController.create({
      message: 'É necessário concordar com todos os itens para utilizar o software.',
      duration: 5000
    });
    toast.present();
  }

  concordarTermosUso() {
    if (!(this.concordaIsencaoPerdasGanhos && this.concordaIsencaoCorretoras)) {
      this.informarItensNaoMarcados();
    }
  }
}
