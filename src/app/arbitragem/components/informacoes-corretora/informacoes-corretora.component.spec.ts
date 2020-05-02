import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  InformacoesCorretoraComponent
} from './informacoes-corretora.component';
import { CoinextService } from '../../../corretora/api/coinext.service';

describe('InformacoesCorretoraComponent', () => {
  let component: InformacoesCorretoraComponent;
  let fixture: ComponentFixture<InformacoesCorretoraComponent>;

  function criarCorretoraTeste() {
    const corretora = new CoinextService();
    const livroOrdens = {
      venda: [],
      compra: [],
      dataRequisicao: new Date(),
      dataResposta: new Date(),
    };
    corretora.livroOrdens = livroOrdens;
    return corretora;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesCorretoraComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesCorretoraComponent);
    component = fixture.componentInstance;
    component.corretora = criarCorretoraTeste();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
