import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { OnPageVisible, OnPageHidden } from 'angular-page-visibility';
import { LoadingController } from '@ionic/angular';

import { Arbitragem } from '../arbitragem/arbitragem';
import { ComunicacaoService } from '../shared/comunicacao.service';
import {
  OportunidadesArbitragemService
} from './tarefas/oportunidades-arbitragem.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  readonly PRECISAO_REAL = '1.2-2';

  paginaAtiva: boolean;
  arbitragens: Array<Arbitragem>;
  arbitragensVerificadas: boolean;
  carregamento: HTMLIonLoadingElement;
  propagadorPaginaVisivel: BehaviorSubject<boolean>;

  constructor(
    private comunicacao: ComunicacaoService,
    private router: Router,
    private loadingController: LoadingController,
    private changeDetectorRef: ChangeDetectorRef,
    private oportunidadesArbitragemService: OportunidadesArbitragemService,
  ) {
    this.carregamento = null;
    this.paginaAtiva = false;
    this.arbitragens = [];

    this.iniciarTarefaVerificarOportunidadesArbitragem();
  }

  ngOnInit() {
    if (this.paginaAtiva) {
      return ;
    }

    this.paginaAtiva = true;
    this.exibirMensagemPaginaCarregando();
    this.propagadorPaginaVisivel.next(true);
    this.oportunidadesArbitragemService.criarTarefa();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.paginaAtiva = false;
    this.arbitragensVerificadas = false;
    this.propagadorPaginaVisivel.next(false);

    this.oportunidadesArbitragemService.pararTarefa();
  }

  ionViewWillLeave() {
    this.ngOnDestroy();
  }

  @OnPageVisible()
  onPaginaVisivel() {
    this.propagadorPaginaVisivel.next(true);
  }

  @OnPageHidden()
  onPaginaNaoVisivel() {
    this.propagadorPaginaVisivel.next(false);
  }

  iniciarTarefaVerificarOportunidadesArbitragem() {
    this.propagadorPaginaVisivel = new BehaviorSubject<boolean>(true);
    this.propagadorPaginaVisivel.subscribe(
      this.oportunidadesArbitragemService.observadorPaginaVisivel()
    );

    this.oportunidadesArbitragemService.inscrever(
      (arbitragens: Array<Arbitragem>) => {
        this.arbitragens = arbitragens;
        this.arbitragensVerificadas = true;
        this.fecharMensagemPaginaCarregando();
        this.changeDetectorRef.detectChanges();
      }
    );
  }

  async exibirMensagemPaginaCarregando() {
    this.carregamento = await this.loadingController.create({
      message: 'Carregando...',
    });
    await this.carregamento.present();
    if (this.arbitragensVerificadas) {
      this.fecharMensagemPaginaCarregando();
    }
  }

  fecharMensagemPaginaCarregando() {
    if (this.carregamento) {
      this.carregamento.dismiss();
      this.carregamento = null;
    }
  }

  get existemOportunidadesAbitragem(): boolean {
    return this.arbitragens.length > 0;
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
}
