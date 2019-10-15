import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Storage } from '@ionic/storage';

import { ArbitragemService } from './arbitragem.service';

describe('ArbitragemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: Storage,
          useFactory: () => new Storage({})
        }
      ],
    });
  });

  it('should be created', () => {
    const service: ArbitragemService = TestBed.get(ArbitragemService);
    expect(service).toBeTruthy();
  });
});
