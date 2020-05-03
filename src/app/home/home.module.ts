import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

import { HomePage } from './home.page';
import { ComumModule } from '../comum/comum.module';
import { SharedModule } from '../shared/shared.module';
import {
  OportunidadesArbitragemService
} from './tarefas/oportunidades-arbitragem.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    ComumModule,
    SharedModule,
  ],
  declarations: [HomePage],
  providers: [BackgroundMode, OportunidadesArbitragemService],
})
export class HomePageModule {}
