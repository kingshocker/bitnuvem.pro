import { Component, Input, HostBinding } from '@angular/core';

import { Arbitragem } from '../../../arbitragem/arbitragem';

@Component({
  selector: 'app-informacoes-arbitragem',
  templateUrl: './informacoes-arbitragem.component.html',
  styleUrls: ['./informacoes-arbitragem.component.scss'],
})
export class InformacoesArbitragemComponent {
  readonly PRECISAO_REAL = '1.2-2';
  readonly PRECISAO_BITCOIN = '1.0-8';

  @HostBinding('class')
  cssClass = 'row';

  @Input()
  arbitragem: Arbitragem;

  get investimento(): number {
    return this.arbitragem.investimento;
  }

  get lucro(): number {
    return this.arbitragem.lucro;
  }

  get porcentagemLucro(): number {
    return this.arbitragem.porcentagemLucro;
  }

  get possuiTaxaTransferencia(): boolean {
    return this.arbitragem.possuiTaxaTransferencia;
  }

  get taxaTransferencia(): number {
    return this.arbitragem.taxaTransferencia;
  }

  get possuiTaxaSaque(): boolean {
    return this.arbitragem.possuiTaxaSaque;
  }

  get taxaSaque(): number {
    return this.arbitragem.taxaSaque;
  }
}
