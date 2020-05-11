import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CorretoraPage } from './corretora.page';
import { ComumModule } from '../comum/comum.module';

const routes: Routes = [
  {
    path: '',
    component: CorretoraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComumModule,
  ],
  declarations: [CorretoraPage],
})
export class CorretoraPageModule {}
