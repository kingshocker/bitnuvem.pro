import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ArbitragemService } from './arbitragem.service';

describe('ArbitragemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
  });

  it('should be created', () => {
    const service: ArbitragemService = TestBed.get(ArbitragemService);
    expect(service).toBeTruthy();
  });
});
