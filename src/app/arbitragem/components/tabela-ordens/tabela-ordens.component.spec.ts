import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaOrdensComponent } from './tabela-ordens.component';
import { CorretoraTest } from '../../../corretora/corretora.test';

describe('TabelaOrdensComponent', () => {
  let component: TabelaOrdensComponent;
  let fixture: ComponentFixture<TabelaOrdensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaOrdensComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaOrdensComponent);
    component = fixture.componentInstance;

    component.corretora = new CorretoraTest();
    component.ordens = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
