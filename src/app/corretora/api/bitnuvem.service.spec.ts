import { TestBed } from '@angular/core/testing';

import { BitnuvemService } from './bitnuvem.service';

describe('BitnuvemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitnuvemService = TestBed.get(BitnuvemService);
    expect(service).toBeTruthy();
  });
});
