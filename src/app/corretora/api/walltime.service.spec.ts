import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WalltimeService } from './walltime.service';

describe('WalltimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
  });

  it('should be created', () => {
    const service: WalltimeService = TestBed.get(WalltimeService);
    expect(service).toBeTruthy();
  });
});
