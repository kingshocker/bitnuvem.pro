import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

import { ConcordaIsencaoResponsabilidade } from './concorda-isencao-responsabilidade.enum';

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
    private storage: Storage,
    private router: Router
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
      ConcordaIsencaoResponsabilidade.PERDAS_GANHOS,
      this.concordaIsencaoPerdasGanhos.toString()
    );
    this.storage.set(
      ConcordaIsencaoResponsabilidade.CORRETORAS,
      this.concordaIsencaoCorretoras.toString()
    );
  }

  redicionarPaginaInicial() {
    this.router.navigate(['/']);
  }

  concordarTermosUso() {
    if (!(this.concordaIsencaoPerdasGanhos && this.concordaIsencaoCorretoras)) {
      this.informarItensNaoMarcados();
    } else {
      this.salvarConcordaIsencaoResponsabilidade();
      this.redicionarPaginaInicial();
    }
  }
}
