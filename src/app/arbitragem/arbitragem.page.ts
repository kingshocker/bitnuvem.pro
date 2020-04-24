import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Arbitragem } from './arbitragem';
import { ArbitragemService } from './arbitragem.service';
import { ComunicacaoService } from '../shared/comunicacao.service';

@Component({
  selector: 'app-arbitragem',
  templateUrl: './arbitragem.page.html',
  styleUrls: ['./arbitragem.page.scss'],
})
export class ArbitragemPage implements OnInit {
  readonly FORMATO_NUMERO = 'pt-BR';
  readonly PRECISAO_REAL = '1.2-2';
  readonly PRECISAO_BITCOIN = '1.0-8';

  arbitragem: Arbitragem;
  subscricao: Observable<any>;

  constructor(
    private comunicacao: ComunicacaoService,
    private arbitragemService: ArbitragemService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.comunicacao.propagadorObservavel.subscribe(this.carregarArbitragem());
  }

  carregarArbitragemDiretamente() {
    const idCorretoraVenda = this.router.snapshot.paramMap.get(
      'idCorretoraVenda'
    );
    const idCorretoraCompra = this.router.snapshot.paramMap.get(
      'idCorretoraCompra'
    );

    this.arbitragemService.verificarOportunidadesArbitragemCorretorasPelosIds(
      idCorretoraVenda,
      idCorretoraCompra,
    ).then((arbitragem) => this.arbitragem = arbitragem);
  }

  carregarArbitragem() {
    return (arbitragem: Arbitragem) => {
      if (arbitragem !== null) {
        this.arbitragem = arbitragem;
      } else {
        this.carregarArbitragemDiretamente();
      }
    };
  }
}
