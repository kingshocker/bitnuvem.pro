import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BitCambioService } from './bitcambio.service';

describe('BitCambioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
  });

  it('should be created', () => {
    const service: BitCambioService = TestBed.get(BitCambioService);
    expect(service).toBeTruthy();
  });
});
