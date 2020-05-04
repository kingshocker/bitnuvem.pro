import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  InformacoesCorretoraComponent
} from './informacoes-corretora.component';
import { CorretoraTest } from '../../../corretora/corretora.test';

describe('InformacoesCorretoraComponent', () => {
  let component: InformacoesCorretoraComponent;
  let fixture: ComponentFixture<InformacoesCorretoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InformacoesCorretoraComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesCorretoraComponent);
    component = fixture.componentInstance;
    component.corretora = new CorretoraTest();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
