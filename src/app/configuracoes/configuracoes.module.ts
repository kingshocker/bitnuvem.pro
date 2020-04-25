import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfiguracoesPage } from './configuracoes.page';
import {
  ConfiguracaoDefinicaoComponent
} from './components/configuracao-definicao/configuracao-definicao.component';
import {
  ConfiguracaoFiltroComponent
} from './components/configuracao-filtro/configuracao-filtro.component';
import {
  ConfiguracaoNotificarComponent
} from './components/configuracao-notificar/configuracao-notificar.component';
import {
  ConfiguracaoOrdenacaoComponent
} from './components/configuracao-ordenacao/configuracao-ordenacao.component';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ConfiguracoesPage,
    ConfiguracaoDefinicaoComponent,
    ConfiguracaoFiltroComponent,
    ConfiguracaoNotificarComponent,
    ConfiguracaoOrdenacaoComponent,
  ],
})
export class ConfiguracoesPageModule {}
