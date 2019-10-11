import { TestBed } from '@angular/core/testing';

import { ArbitragemService } from './arbitragem.service';

describe('ArbitragemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArbitragemService = TestBed.get(ArbitragemService);
    expect(service).toBeTruthy();
  });
});
