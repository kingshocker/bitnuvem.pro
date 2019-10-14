import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesPage } from './configuracoes.page';

describe('ConfiguracoesPage', () => {
  let component: ConfiguracoesPage;
  let fixture: ComponentFixture<ConfiguracoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
