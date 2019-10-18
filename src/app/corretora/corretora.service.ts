import { Injectable } from '@angular/core';

import { Corretora } from './corretora';
import { BisqService } from './bisq.service';
import { BraziliexService } from './braziliex.service';
import { CoinextService } from './coinext.service';

@Injectable({
  providedIn: 'root'
})
export class CorretoraService {
  corretoras: Array<Corretora>;

  constructor(
    private bisq: BisqService,
    private braziliex: BraziliexService,
    private coinext: CoinextService,
  ) {
    this.corretoras = [this.bisq, this.braziliex, this.coinext];
  }
}
