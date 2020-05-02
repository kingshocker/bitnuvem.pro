import { TestBed } from '@angular/core/testing';

import { BitcoinTradeService } from './bitcointrade.service';

describe('BitcointradeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitcoinTradeService = TestBed.get(BitcoinTradeService);
    expect(service).toBeTruthy();
  });
});
