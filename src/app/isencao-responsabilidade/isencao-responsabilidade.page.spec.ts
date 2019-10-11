import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Storage } from '@ionic/storage';

import { IsencaoResponsabilidadePage } from './isencao-responsabilidade.page';

describe('IsencaoResponsabilidadePage', () => {
  let component: IsencaoResponsabilidadePage;
  let fixture: ComponentFixture<IsencaoResponsabilidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsencaoResponsabilidadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Storage,
          useFactory: () => new Storage({})
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsencaoResponsabilidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
