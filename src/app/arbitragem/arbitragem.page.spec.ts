import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Storage } from '@ionic/storage';

import { ArbitragemPage } from './arbitragem.page';

describe('ArbitragemPage', () => {
  let component: ArbitragemPage;
  let fixture: ComponentFixture<ArbitragemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbitragemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: Storage,
          useFactory: () => new Storage({})
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitragemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
