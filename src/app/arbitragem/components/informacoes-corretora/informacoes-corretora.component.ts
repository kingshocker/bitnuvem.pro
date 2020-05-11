import { Component, Input, HostBinding } from '@angular/core';

import { Corretora } from '../../../corretora/corretora';

@Component({
  selector: 'app-informacoes-corretora',
  templateUrl: './informacoes-corretora.component.html',
  styleUrls: ['./informacoes-corretora.component.scss'],
})
export class InformacoesCorretoraComponent {
  readonly FORMATO_DATA = 'dd/MM/yyyy HH:mm:ss (z)';

  @HostBinding('class')
  cssClass = 'col';

  @Input()
  corretora: Corretora;

  @Input()
  rotulo: string;
}
