import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Arbitragem } from './arbitragem';
import { ArbitragemService } from './arbitragem.service';
import { ComunicacaoService } from '../comum/comunicacao.service';

@Component({
  selector: 'app-arbitragem',
  templateUrl: './arbitragem.page.html',
  styleUrls: ['./arbitragem.page.scss'],
})
export class ArbitragemPage implements OnInit {
  titulo: string;
  arbitragem: Arbitragem;
  subscricao: Observable<any>;

  constructor(
    private comunicacao: ComunicacaoService,
    private arbitragemService: ArbitragemService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.comunicacao.propagadorObservavel.subscribe(this.carregarArbitragem());
    if (this.arbitragem) {
      const corretoraVenda = this.arbitragem.corretoraVenda;
      const corretoraCompra = this.arbitragem.corretoraCompra;
      this.titulo = `${corretoraVenda.nome} x ${corretoraCompra.nome}`;
    }
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
