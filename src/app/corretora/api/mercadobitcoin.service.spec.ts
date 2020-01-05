import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MercadoBitcoinService } from './mercadobitcoin.service';

describe('MercadobitcoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
  });

  it('should be created', () => {
    const service: MercadoBitcoinService = TestBed.get(MercadoBitcoinService);
    expect(service).toBeTruthy();
  });
});
