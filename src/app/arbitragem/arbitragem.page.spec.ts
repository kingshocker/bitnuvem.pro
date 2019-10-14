import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitragemPage } from './arbitragem.page';

describe('ArbitragemPage', () => {
  let component: ArbitragemPage;
  let fixture: ComponentFixture<ArbitragemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbitragemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
