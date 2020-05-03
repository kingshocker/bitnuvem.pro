import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [CabecalhoComponent],
  declarations: [CabecalhoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComumModule { }
