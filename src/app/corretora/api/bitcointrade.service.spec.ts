import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BitcoinTradeService } from './bitcointrade.service';

describe('BitcointradeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
  });

  it('should be created', () => {
    const service: BitcoinTradeService = TestBed.get(BitcoinTradeService);
    expect(service).toBeTruthy();
  });
});
