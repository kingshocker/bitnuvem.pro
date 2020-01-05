import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CorretoraService } from './corretora/corretora.service';
import { BisqService } from './corretora/api/bisq.service';
import { BraziliexService } from './corretora/api/braziliex.service';
import { CoinextService } from './corretora/api/coinext.service';
import { BitcoinTradeService } from './corretora/api/bitcointrade.service';
import { MercadoBitcoinService } from './corretora/api/mercadobitcoin.service';
import { BitnuvemService } from './corretora/api/bitnuvem.service';

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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
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
    BitcoinTradeService,
    MercadoBitcoinService,
    BitnuvemService,
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
