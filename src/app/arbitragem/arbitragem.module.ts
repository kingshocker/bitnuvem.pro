import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArbitragemPage } from './arbitragem.page';
import {
  InformacoesCorretoraComponent
} from './components/informacoes-corretora/informacoes-corretora.component';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ArbitragemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [ArbitragemPage, InformacoesCorretoraComponent]
})
export class ArbitragemPageModule {}
