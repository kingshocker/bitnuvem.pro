import { Injectable } from '@angular/core';

import { Corretora } from './corretora';
import { BisqService } from './api/bisq.service';
import { BraziliexService } from './api/braziliex.service';
import { CoinextService } from './api/coinext.service';
import { BitcoinTradeService } from './api/bitcointrade.service';
import { MercadoBitcoinService } from './api/mercadobitcoin.service';
import { BitnuvemService } from './api/bitnuvem.service';
import { BrasilBitcoinService } from './api/brasilbitcoin.service';
import { BitCambioService } from './api/bitcambio.service';

@Injectable({
  providedIn: 'root'
})
export class CorretoraService {
  corretoras: Array<Corretora>;

  constructor(
    private bisq: BisqService,
    private braziliex: BraziliexService,
    private coinext: CoinextService,
    private bitcoinTrade: BitcoinTradeService,
    private mercadoBitcoin: MercadoBitcoinService,
    private bitnuvemService: BitnuvemService,
    private brasilBitcoinService: BrasilBitcoinService,
    private bitCambioService: BitCambioService,
  ) {
    this.corretoras = [
      this.bisq,
      this.braziliex,
      this.coinext,
      this.bitcoinTrade,
      this.mercadoBitcoin,
      this.bitnuvemService,
      this.brasilBitcoinService,
      this.bitCambioService,
    ];
  }

  corretoraPeloId(idCorretora: string): Corretora {
    let corretoraEncontrada: Corretora = null;
    this.corretoras.forEach((corretora) => {
      if (corretora.id === idCorretora) {
        corretoraEncontrada = corretora;
      }
    });
    return corretoraEncontrada;
  }
}
