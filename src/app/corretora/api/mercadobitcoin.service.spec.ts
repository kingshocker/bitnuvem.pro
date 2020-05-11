import { TestBed } from '@angular/core/testing';

import { MercadoBitcoinService } from './mercadobitcoin.service';

describe('MercadobitcoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MercadoBitcoinService = TestBed.get(MercadoBitcoinService);
    expect(service).toBeTruthy();
  });
});
