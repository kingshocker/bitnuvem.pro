import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
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
import { BraziliexService } from './corretora/api/braziliex.service';
import { CoinextService } from './corretora/api/coinext.service';
import { BitcoinTradeService } from './corretora/api/bitcointrade.service';
import { MercadoBitcoinService } from './corretora/api/mercadobitcoin.service';
import { BitnuvemService } from './corretora/api/bitnuvem.service';
import { BrasilBitcoinService } from './corretora/api/brasilbitcoin.service';
import { BitCambioService } from './corretora/api/bitcambio.service';
import { WalltimeService } from './corretora/api/walltime.service';

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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IsencaoResponsabilidadeGuard,
    CorretoraService,
    BraziliexService,
    CoinextService,
    BitcoinTradeService,
    MercadoBitcoinService,
    BitnuvemService,
    BrasilBitcoinService,
    BitCambioService,
    WalltimeService,
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
