import { TestBed } from '@angular/core/testing';

import { ComunicacaoService } from './comunicacao.service';

describe('ComunicacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunicacaoService = TestBed.get(ComunicacaoService);
    expect(service).toBeTruthy();
  });
});
