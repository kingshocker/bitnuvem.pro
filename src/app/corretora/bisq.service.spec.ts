import { TestBed } from '@angular/core/testing';

import { BisqService } from './bisq.service';

describe('BisqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BisqService = TestBed.get(BisqService);
    expect(service).toBeTruthy();
  });
});
