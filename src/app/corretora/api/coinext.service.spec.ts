import { TestBed } from '@angular/core/testing';

import { CoinextService } from './coinext.service';

describe('CoinextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoinextService = TestBed.get(CoinextService);
    expect(service).toBeTruthy();
  });
});
