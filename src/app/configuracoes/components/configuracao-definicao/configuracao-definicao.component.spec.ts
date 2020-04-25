import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Storage } from '@ionic/storage';

import {
  ConfiguracaoDefinicaoComponent
} from './configuracao-definicao.component';

describe('ConfiguracaoDefinicaoComponent', () => {
  let component: ConfiguracaoDefinicaoComponent;
  let fixture: ComponentFixture<ConfiguracaoDefinicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracaoDefinicaoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: Storage,
          useFactory: () => new Storage({})
        }
      ],
      imports: [
        HttpClientTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoDefinicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
