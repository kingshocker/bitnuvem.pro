import { Component, Input } from '@angular/core';

import { Corretora, Ordens } from '../../../corretora/corretora';

@Component({
  selector: 'app-tabela-ordens',
  templateUrl: './tabela-ordens.component.html',
  styleUrls: ['./tabela-ordens.component.scss'],
})
export class TabelaOrdensComponent {
  readonly FORMATO_NUMERO = 'pt-BR';
  readonly PRECISAO_REAL = '1.2-2';
  readonly PRECISAO_BITCOIN = '1.0-8';

  @Input()
  tipo: string;

  @Input()
  corretora: Corretora;

  @Input()
  ordens: Ordens;
}
