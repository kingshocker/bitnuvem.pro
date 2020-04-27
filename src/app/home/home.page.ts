import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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
  readonly PRECISAO_REAL = '1.2-2';

  paginaAtiva: boolean;
  paginaVisivel: boolean;
  tempoRestanteNovaVerificacao: NodeJS.Timer;
  tarefaVerificarOportunidadesArbitragem: Subscription;
  arbitragens: Array<Arbitragem>;
  oportunidadesCarregadas: boolean;
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
    this.paginaAtiva = false;

    this.enableBackgroundMode();
  }

  ngOnInit() {
    if (this.paginaAtiva) {
      return ;
    }

    this.paginaAtiva = true;
    this.exibirMensagemPaginaCarregando();
    this.configuracao = this.configuracoes.configuracao;
    this.verificarOportunidadesArbitragem();
    this.paginaVisivel = true;
    this.oportunidadesCarregadas = false;
    this.criarTarefaVerificarOportunidadesArbitragem();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.paginaAtiva = false;
    this.paginaVisivel = false;

    this.pararTarefaVerificarOportunidadesArbitragem();
  }

  ionViewWillLeave() {
    this.ngOnDestroy();
  }

  @OnPageVisible()
  onPaginaVisivel() {
    this.paginaVisivel = true;
    this.recriarTarefaVerificarOportunidadesArbitragem();
  }

  @OnPageHidden()
  onPaginaNaoVisivel() {
    this.paginaVisivel = false;
  }

  enableBackgroundMode() {
    if (this.platform.is('cordova')) {
      this.backgroundMode.enable();
      this.backgroundMode.on('activate').subscribe(() => {
        this.recriarTarefaVerificarOportunidadesArbitragem();
      });
      this.backgroundMode.on('deactivate').subscribe(() => {
        this.recriarTarefaVerificarOportunidadesArbitragem();
      });
    }
  }

  get existemOportunidadesAbitragem() {
    return this.arbitragens.length > 0;
  }

  criarTarefaVerificarOportunidadesArbitragem() {
    if (this.tempoRestanteNovaVerificacao) {
      clearTimeout(this.tempoRestanteNovaVerificacao);
      this.tempoRestanteNovaVerificacao = null;
    }
    if (!this.tarefaVerificarOportunidadesArbitragem) {
      this.tarefaVerificarOportunidadesArbitragem = interval(
        this.UM_MINUTO_EM_MILISEGUNDOS
      ).subscribe(() => {
        if (this.paginaVisivel || this.configuracao.permitirNotificar) {
          this.verificarOportunidadesArbitragem();
        }
      });
    }
  }

  pararTarefaVerificarOportunidadesArbitragem() {
    if (this.tarefaVerificarOportunidadesArbitragem) {
      this.tarefaVerificarOportunidadesArbitragem.unsubscribe();
      this.tarefaVerificarOportunidadesArbitragem = null;
    }
  }

  recriarTarefaVerificarOportunidadesArbitragem() {
    this.pararTarefaVerificarOportunidadesArbitragem();
    this.criarTarefaVerificarOportunidadesArbitragem();
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

          this.pararTarefaVerificarOportunidadesArbitragem();
          this.tempoRestanteNovaVerificacao = setTimeout(() => {
            this.criarTarefaVerificarOportunidadesArbitragem();
          }, (
            this.UM_MINUTO_EM_MILISEGUNDOS
            * this.configuracao.tempoEntreNotificacoes
          ));
        }
        this.arbitragens = arbitragens;
        this.oportunidadesCarregadas = true;
        this.fecharMensagemPaginaCarregando();
      }
    );
  }

  detalharOportunidadeArbitragem(indice: number) {
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
    if (this.oportunidadesCarregadas) {
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
