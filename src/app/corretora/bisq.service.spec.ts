import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BisqService } from './bisq.service';

describe('BisqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
  });

  it('should be created', () => {
    const service: BisqService = TestBed.get(BisqService);
    expect(service).toBeTruthy();
  });
});
