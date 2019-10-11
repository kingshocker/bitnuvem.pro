import { Component } from '@angular/core';

import { ArbitragemService } from '../arbitragem/arbitragem.service';
import { Arbitragem } from '../arbitragem/arbitragem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arbitragens: Array<Arbitragem>;

  constructor(private oportunidades: ArbitragemService) {
    this.verificarOportunidadesArbitragem();
  }

  async verificarOportunidadesArbitragem() {
    this.oportunidades.verificarOportunidadesArbitragem().then(
      (arbitragens) => {
        this.arbitragens = arbitragens;
      }
    );
  }

}
