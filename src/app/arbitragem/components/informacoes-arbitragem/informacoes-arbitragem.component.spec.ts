import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbitragem } from '../../../arbitragem/arbitragem';
import { CoinextService } from '../../../corretora/api/coinext.service';
import {
  InformacoesArbitragemComponent
} from './informacoes-arbitragem.component';

describe('InformacoesArbitragemComponent', () => {
  let component: InformacoesArbitragemComponent;
  let fixture: ComponentFixture<InformacoesArbitragemComponent>;

  function criarCorretoraTeste() {
    const corretora = new CoinextService(null);
    const livroOrdens = {
      venda: [{preco: 0, quantidade: 0}],
      compra: [{preco: 0, quantidade: 0}],
      dataRequisicao: new Date(),
      dataResposta: new Date(),
    };
    corretora.livroOrdens = livroOrdens;
    return corretora;
  }

  function criarArbitragemTeste() {
    const corretora = criarCorretoraTeste();
    return new Arbitragem(
      corretora,
      corretora,
      0,
      0,
      false,
      false,
      false
    );
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesArbitragemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesArbitragemComponent);
    component = fixture.componentInstance;

    component.arbitragem = criarArbitragemTeste();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
