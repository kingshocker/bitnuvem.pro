import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbitragem } from '../../../arbitragem/arbitragem';
import { CorretoraTest } from '../../../corretora/corretora.test';
import {
  InformacoesArbitragemComponent
} from './informacoes-arbitragem.component';

describe('InformacoesArbitragemComponent', () => {
  let component: InformacoesArbitragemComponent;
  let fixture: ComponentFixture<InformacoesArbitragemComponent>;

  function criarArbitragemTeste() {
    return new Arbitragem(
      new CorretoraTest(),
      new CorretoraTest(),
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
