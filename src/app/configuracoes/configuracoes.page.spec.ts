import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { ConfiguracoesPage } from './configuracoes.page';

describe('ConfiguracoesPage', () => {
  let component: ConfiguracoesPage;
  let fixture: ComponentFixture<ConfiguracoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: Storage,
          useFactory: () => new Storage({})
        },
        LocalNotifications,
      ],
      imports: [
        HttpClientTestingModule,
      ],
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
