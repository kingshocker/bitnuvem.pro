import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent {
  @Input()
  titulo: string;

  @Input()
  permiteVoltar = true;

  @Input()
  permiteNavegarConfiguracoes = true;
}
