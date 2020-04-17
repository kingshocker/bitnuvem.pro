import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

import { HomePage } from './home.page';

import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
  ],
  declarations: [HomePage],
  providers: [BackgroundMode],
})
export class HomePageModule {}
