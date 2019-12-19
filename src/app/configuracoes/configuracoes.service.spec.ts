import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Storage } from '@ionic/storage';

import { ConfiguracoesService } from './configuracoes.service';

describe('ConfiguracoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Storage,
          useFactory: () => new Storage({})
        }
      ],
      imports: [
        HttpClientTestingModule,
      ],
    });
  });

  it('should be created', () => {
    const service: ConfiguracoesService = TestBed.get(ConfiguracoesService);
    expect(service).toBeTruthy();
  });
});
