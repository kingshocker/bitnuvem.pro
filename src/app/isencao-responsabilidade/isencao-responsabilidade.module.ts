import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IsencaoResponsabilidadePage } from './isencao-responsabilidade.page';

const routes: Routes = [
  {
    path: '',
    component: IsencaoResponsabilidadePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IsencaoResponsabilidadePage]
})
export class IsencaoResponsabilidadePageModule {}
