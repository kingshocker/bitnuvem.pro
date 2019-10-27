import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CorretoraService } from './corretora/corretora.service';
import { BisqService } from './corretora/bisq.service';
import { BraziliexService } from './corretora/braziliex.service';
import { CoinextService } from './corretora/coinext.service';

import { IsencaoResponsabilidadeGuard } from './isencao-responsabilidade/isencao-responsabilidade.guard';
import { ArbitragemService } from './arbitragem/arbitragem.service';
import { ComunicacaoService } from './shared/comunicacao.service';
import { ConfiguracoesService, configuracoesServiceFactory } from './configuracoes/configuracoes.service';
import { NotificacaoService } from './shared/notificacao.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IsencaoResponsabilidadeGuard,
    CorretoraService,
    BisqService,
    BraziliexService,
    CoinextService,
    ArbitragemService,
    ComunicacaoService,
    {
      provide: APP_INITIALIZER,
      useFactory: configuracoesServiceFactory,
      deps: [ConfiguracoesService],
      multi: true,
    },
    LocalNotifications,
    Platform,
    NotificacaoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

registerLocaleData(localePt, 'pt');
