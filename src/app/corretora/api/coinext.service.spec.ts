import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoinextService } from './coinext.service';

describe('CoinextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
  });

  it('should be created', () => {
    const service: CoinextService = TestBed.get(CoinextService);
    expect(service).toBeTruthy();
  });
});
