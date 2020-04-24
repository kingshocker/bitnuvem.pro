import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { OnPageVisible, OnPageHidden } from 'angular-page-visibility';
import { LoadingController } from '@ionic/angular';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Platform } from '@ionic/angular';

import { ArbitragemService } from '../arbitragem/arbitragem.service';
import { Arbitragem } from '../arbitragem/arbitragem';
import { ComunicacaoService } from '../shared/comunicacao.service';
import { Configuracao } from '../configuracoes/configuracao';
import { ConfiguracoesService } from '../configuracoes/configuracoes.service';
import { NotificacaoService } from '../shared/notificacao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  readonly UM_MINUTO_EM_MILISEGUNDOS = 1000 * 60;
  readonly FORMATO_NUMERO = 'pt-BR';
  readonly PRECISAO_REAL = '1.2-2';

  paginaAtiva: boolean;
  paginaVisivel: boolean;
  intervalo: Observable<number>;
  intervaloBackground: Subscription;
  intervaloVisualizacao: Subscription;
  arbitragens: Array<Arbitragem>;
  usuarioNotificado: boolean;
  configuracao: Configuracao;

  arbitragensVerificadas: boolean;
  carregamento: HTMLIonLoadingElement;

  constructor(
    private oportunidades: ArbitragemService,
    private comunicacao: ComunicacaoService,
    private router: Router,
    private configuracoes: ConfiguracoesService,
    private notificacao: NotificacaoService,
    private loadingController: LoadingController,
    private backgroundMode: BackgroundMode,
    private platform: Platform,
  ) {
    this.carregamento = null;
    this.arbitragens = [];
    this.intervaloVisualizacao = null;

    this.enableBackgroundMode();
  }

  ngOnInit() {
    this.exibirMensagemPaginaCarregando();
    this.configuracao = this.configuracoes.configuracao;
    this.verificarOportunidadesArbitragem();
    this.paginaAtiva = true;
    this.paginaVisivel = true;
    this.usuarioNotificado = false;
    if (!this.intervalo) {
      this.intervalo = interval(this.UM_MINUTO_EM_MILISEGUNDOS);
      this.intervalo.pipe(takeWhile(() => this.paginaAtiva)).subscribe(() => {
        if (
          (this.paginaVisivel)
          || (this.configuracao.permitirNotificar && (!this.usuarioNotificado))
        ) {
          this.verificarOportunidadesArbitragem();
        }
      });
    }
  }

  ngOnDestroy() {
    this.paginaAtiva = false;
    this.paginaVisivel = false;
  }

  voltarNotificarUsuario() {
    this.usuarioNotificado = false;
    if (this.intervaloVisualizacao !== null) {
      this.intervaloVisualizacao.unsubscribe();
      this.intervaloVisualizacao = null;
    }
  }

  @OnPageVisible()
  onPaginaVisivel() {
    this.paginaVisivel = true;
    this.voltarNotificarUsuario();
  }

  @OnPageHidden()
  onPaginaNaoVisivel() {
    this.paginaVisivel = false;
  }

  get existemOportunidadesAbitragem() {
    return this.arbitragens.length > 0;
  }

  enableBackgroundMode() {
    if (this.platform.is('cordova')) {
      this.backgroundMode.enable();
      this.backgroundMode.on('activate').subscribe(
        this.activateFunction.bind(this)
      );
      this.backgroundMode.on('deactivate').subscribe(
        this.deactivateFunction.bind(this)
      );
    }
  }

  activateFunction() {
    this.usuarioNotificado = false;
    this.intervaloBackground = interval(
      this.UM_MINUTO_EM_MILISEGUNDOS
    ).subscribe(() => {
      if ((this.configuracao.permitirNotificar) && (!this.usuarioNotificado)) {
        this.verificarOportunidadesArbitragem();
      }
    });
  }

  deactivateFunction() {
    this.intervaloBackground.unsubscribe();
    this.intervaloBackground = null;
  }

  async verificarOportunidadesArbitragem() {
    this.oportunidades.verificarOportunidadesArbitragem().then(
      (arbitragens) => {
        if (
          (this.configuracao.permitirNotificar)
          && (arbitragens.length > 0)
          && (
            (!this.paginaVisivel)
            || (
              (
                this.platform.is('cordova')
                || this.platform.is('capacitor')
              )
              && (this.backgroundMode.isActive() === true)
            )
          )
        ) {
          this.notificacao.notificar(
            'Oportunidade de arbitragem',
            'Há novas oportunidades de arbitragem que podem ser do seu interesse',
          );
          this.intervaloVisualizacao = interval(
            this.UM_MINUTO_EM_MILISEGUNDOS * this.configuracao.tempoEntreNotificacoes
          ).subscribe(() => {
            this.voltarNotificarUsuario();
          });
        }
        this.arbitragens = arbitragens;
        this.usuarioNotificado = true;
        this.fecharMensagemPaginaCarregando();
      }
    );
  }

  detalharOportunidadeArbitragem(indice: number) {
    this.ngOnDestroy();
    const arbitragem = this.arbitragens[indice];
    this.comunicacao.modificarObjeto(arbitragem);
    this.router.navigate([
      '/arbitragem',
      arbitragem.corretoraVenda.id,
      arbitragem.corretoraCompra.id,
    ]);
  }

  async exibirMensagemPaginaCarregando() {
    this.carregamento = await this.loadingController.create({
      message: 'Carregando...',
    });
    await this.carregamento.present();
    if (this.usuarioNotificado) {
      this.fecharMensagemPaginaCarregando();
    }
  }

  fecharMensagemPaginaCarregando() {
    if (this.carregamento !== null) {
      this.carregamento.dismiss();
      this.carregamento = null;
    }
  }
}
