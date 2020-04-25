import { Component, OnInit } from '@angular/core';

import { Configuracao } from '../../configuracao';
import { ConfiguracoesService } from '../../configuracoes.service';
import { Corretora } from '../../../corretora/corretora';
import { CorretoraService } from '../../../corretora/corretora.service';

@Component({
  selector: 'app-configuracao-filtro',
  templateUrl: './configuracao-filtro.component.html',
  styleUrls: ['./configuracao-filtro.component.scss'],
})
export class ConfiguracaoFiltroComponent implements OnInit {
  corretoras: Array<Corretora>;
  configuracao: Configuracao;

  constructor(
    private configuracoes: ConfiguracoesService,
    private corretoraService: CorretoraService,
  ) {}

  ngOnInit() {
    this.configuracao = this.configuracoes.configuracao;
    this.corretoras = this.corretoraService.corretoras;
  }

  mudarLucro() {
    this.configuracoes.mudarFiltroLucroAcima();
  }

  mudarPorcentagemLucro() {
    this.configuracoes.mudarFiltroPorcentagemLucroAcima();
  }

  mudarCorretoraHabilitada(idCorretora: string) {
    this.configuracoes.mudarFiltroCorretoraHabilitada(idCorretora);
  }
}
