import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CorretoraPage } from './corretora.page';
import { CorretoraService } from './corretora.service';
import { Corretora } from './corretora';
import { CorretoraTest } from './corretora.test';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private subject = {};

  constructor() {}

  /** The mock paramMap observable */
  readonly paramMap = {
    get: (key) => this.subject[key]
  };
  readonly snapshot = {paramMap: this.paramMap};

  /** Set the paramMap observables's next value */
  setParam(key: string, value: any) {
    this.subject[key] = value;
  }
}

class CorretoraServiceTest {
  corretoraPeloId(idCorretora: string): Corretora {
    return new CorretoraTest();
  }
}

describe('CorretoraPage', () => {
  let component: CorretoraPage;
  let fixture: ComponentFixture<CorretoraPage>;
  const activatedRoute = new ActivatedRouteStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CorretoraPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: CorretoraService, useValue: new CorretoraServiceTest()},
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
