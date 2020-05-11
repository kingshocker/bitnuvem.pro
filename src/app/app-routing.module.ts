import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {
  IsencaoResponsabilidadeGuard
} from './isencao-responsabilidade/isencao-responsabilidade.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(
      m => m.HomePageModule
    ),
    canActivate: [IsencaoResponsabilidadeGuard],
  },
  {
    path: 'isencao-responsabilidade',
    loadChildren: () => import(
      './isencao-responsabilidade/isencao-responsabilidade.module'
    ).then(
      m => m.IsencaoResponsabilidadePageModule
    ),
  },
  {
    path: 'arbitragem/:idCorretoraVenda/:idCorretoraCompra',
    loadChildren: () => import('./arbitragem/arbitragem.module').then(
      m => m.ArbitragemPageModule
    ),
    canActivate: [IsencaoResponsabilidadeGuard],
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then(
      m => m.ConfiguracoesPageModule
    ),
    canActivate: [IsencaoResponsabilidadeGuard],
  },
  {
    path: 'corretora/:idCorretora',
    loadChildren: () => import('./corretora/corretora.module').then(
      m => m.CorretoraPageModule
    ),
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
