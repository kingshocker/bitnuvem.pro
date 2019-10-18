import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { IsencaoResponsabilidadeGuard } from './isencao-responsabilidade/isencao-responsabilidade.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [IsencaoResponsabilidadeGuard],
  },
  {
    path: 'isencao-responsabilidade',
    loadChildren: './isencao-responsabilidade/isencao-responsabilidade.module#IsencaoResponsabilidadePageModule'
  },
  {
    path: 'arbitragem/:corretora-venda/:corretora-compra',
    loadChildren: './arbitragem/arbitragem.module#ArbitragemPageModule',
    canActivate: [IsencaoResponsabilidadeGuard],
  },
  {
    path: 'configuracoes',
    loadChildren: './configuracoes/configuracoes.module#ConfiguracoesPageModule',
    canActivate: [IsencaoResponsabilidadeGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
