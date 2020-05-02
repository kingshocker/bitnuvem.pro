import { TestBed } from '@angular/core/testing';

import { BrasilBitcoinService } from './brasilbitcoin.service';

describe('BrasilBitcoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrasilBitcoinService = TestBed.get(BrasilBitcoinService);
    expect(service).toBeTruthy();
  });
});
