import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CorretoraService } from './corretora.service';

describe('CorretoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
  });

  it('should be created', () => {
    const service: CorretoraService = TestBed.get(CorretoraService);
    expect(service).toBeTruthy();
  });
});
