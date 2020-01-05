import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BitnuvemService } from './bitnuvem.service';

describe('BitnuvemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
  });

  it('should be created', () => {
    const service: BitnuvemService = TestBed.get(BitnuvemService);
    expect(service).toBeTruthy();
  });
});
