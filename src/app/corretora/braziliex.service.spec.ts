import { TestBed } from '@angular/core/testing';

import { BraziliexService } from './braziliex.service';

describe('BraziliexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BraziliexService = TestBed.get(BraziliexService);
    expect(service).toBeTruthy();
  });
});
