import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Arbitragem } from './arbitragem';
import { ComunicacaoService } from '../shared/comunicacao.service';

@Component({
  selector: 'app-arbitragem',
  templateUrl: './arbitragem.page.html',
  styleUrls: ['./arbitragem.page.scss'],
})
export class ArbitragemPage implements OnInit {
  arbitragem: Arbitragem;
  subscricao: Observable<any>;

  constructor(private comunicacao: ComunicacaoService) {}

  ngOnInit() {
    this.comunicacao.propagadorObservavel.subscribe(
      arbitragem => this.arbitragem = arbitragem
    );
  }
}
