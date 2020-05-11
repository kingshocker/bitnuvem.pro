import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [CabecalhoComponent, RodapeComponent],
  declarations: [CabecalhoComponent, RodapeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComumModule { }
