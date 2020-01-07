import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BrasilBitcoinService } from './brasilbitcoin.service';

describe('BrasilBitcoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
  });

  it('should be created', () => {
    const service: BrasilBitcoinService = TestBed.get(BrasilBitcoinService);
    expect(service).toBeTruthy();
  });
});
