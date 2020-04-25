import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaOrdensComponent } from './tabela-ordens.component';
import { CoinextService } from '../../../corretora/api/coinext.service';

describe('TabelaOrdensComponent', () => {
  let component: TabelaOrdensComponent;
  let fixture: ComponentFixture<TabelaOrdensComponent>;

  function criarCorretoraTeste() {
    const corretora = new CoinextService(null);
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
      declarations: [ TabelaOrdensComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaOrdensComponent);
    component = fixture.componentInstance;

    component.corretora = criarCorretoraTeste();
    component.ordens = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
