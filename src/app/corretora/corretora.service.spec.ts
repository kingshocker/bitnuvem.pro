import { TestBed } from '@angular/core/testing';

import { CorretoraService } from './corretora.service';

describe('CorretoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorretoraService = TestBed.get(CorretoraService);
    expect(service).toBeTruthy();
  });
});
