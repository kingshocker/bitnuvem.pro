import { TestBed } from '@angular/core/testing';

import { WalltimeService } from './walltime.service';

describe('WalltimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalltimeService = TestBed.get(WalltimeService);
    expect(service).toBeTruthy();
  });
});
