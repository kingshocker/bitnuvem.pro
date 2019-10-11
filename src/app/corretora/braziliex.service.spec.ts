import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BraziliexService } from './braziliex.service';

describe('BraziliexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
  });

  it('should be created', () => {
    const service: BraziliexService = TestBed.get(BraziliexService);
    expect(service).toBeTruthy();
  });
});
