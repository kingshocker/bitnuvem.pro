import { TestBed } from '@angular/core/testing';

import { BitCambioService } from './bitcambio.service';

describe('BitCambioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitCambioService = TestBed.get(BitCambioService);
    expect(service).toBeTruthy();
  });
});
