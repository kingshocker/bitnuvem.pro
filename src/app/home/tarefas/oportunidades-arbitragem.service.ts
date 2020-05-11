import { Injectable } from '@angular/core';
import { interval, Subscription, Subject } from 'rxjs';

import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Platform } from '@ionic/angular';

import { Configuracao } from '../../configuracoes/configuracao';
import {
  ConfiguracoesService
} from '../../configuracoes/configuracoes.service';
import { Arbitragem } from '../../arbitragem/arbitragem';
import { ArbitragemService } from '../../arbitragem/arbitragem.service';
import { NotificacaoService } from '../../comum/notificacao.service';

@Injectable({
  providedIn: 'root'
})
export class OportunidadesArbitragemService {
  readonly UM_MINUTO_EM_MILISEGUNDOS = 1000 * 60;
  readonly NOTIFICACAO_TITULO = 'Oportunidade de arbitragem';
  readonly NOTIFICACAO_MENSAGEM = (
    'Há novas oportunidades de arbitragem que podem ser do seu interesse'
  );

  configuracao: Configuracao;
  tarefaVerificarOportunidadesArbitragem: Subscription;
  tempoRestanteNovaVerificacao: NodeJS.Timer;
  propagador: Subject<Array<Arbitragem>>;
  tarefaFoiExecutada: boolean;
  paginaVisivel: boolean;

  constructor(
    private oportunidades: ArbitragemService,
    private configuracoes: ConfiguracoesService,
    private notificacaoService: NotificacaoService,
    private backgroundMode: BackgroundMode,
    private platform: Platform,
  ) {
    this.configuracao = this.configuracoes.configuracao;
    this.tarefaFoiExecutada = false;
    this.paginaVisivel = false;

    this.enableBackgroundMode();
    this.propagador = new Subject<Array<Arbitragem>>();
  }

  enableBackgroundMode() {
    if (this.platform.is('cordova')) {
      this.backgroundMode.enable();
      this.backgroundMode.on('activate').subscribe(() => {
        this.recriarTarefa();
      });
      this.backgroundMode.on('deactivate').subscribe(() => {
        this.recriarTarefa();
      });
    }
  }

  criarTarefa() {
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

      if (!this.tarefaFoiExecutada) {
        this.verificarOportunidadesArbitragem();
      }
    }
  }

  pararTarefa() {
    if (this.tarefaVerificarOportunidadesArbitragem) {
      this.tarefaVerificarOportunidadesArbitragem.unsubscribe();
      this.tarefaVerificarOportunidadesArbitragem = null;
    }
  }

  recriarTarefa() {
    this.pararTarefa();
    this.criarTarefa();
  }

  async verificarOportunidadesArbitragem() {
    this.tarefaFoiExecutada = true;
    this.oportunidades.verificarOportunidadesArbitragem().then(
      (arbitragens: Array<Arbitragem>) => {
        if (
          (this.configuracao.permitirNotificar)
          && (arbitragens.length > 0)
          && (
            (!this.paginaVisivel)
            || (
              (this.platform.is('cordova'))
              && (this.backgroundMode.isActive() === true)
            )
          )
        ) {
          this.notificacaoService.notificar(
            this.NOTIFICACAO_TITULO,
            this.NOTIFICACAO_MENSAGEM,
          );

          this.pararTarefa();
          this.tempoRestanteNovaVerificacao = setTimeout(() => {
            this.criarTarefa();
          }, (
            this.UM_MINUTO_EM_MILISEGUNDOS
            * this.configuracao.tempoEntreNotificacoes
          ));
        }
        this.propagador.next(arbitragens);
      }
    );
  }

  inscrever(funcao: (arbitragens: Array<Arbitragem>) => any): Subscription {
    return this.propagador.subscribe(funcao);
  }

  observadorPaginaVisivel(): (paginaVisivel: boolean) => any {
    return ((paginaVisivel: boolean) => this.paginaVisivel = paginaVisivel);
  }

  habilitarInicioImediato() {
    this.tarefaFoiExecutada = false;
  }
}
