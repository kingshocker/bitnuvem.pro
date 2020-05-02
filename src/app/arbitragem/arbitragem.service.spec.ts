import { TestBed } from '@angular/core/testing';

import { Storage } from '@ionic/storage';

import { ArbitragemService } from './arbitragem.service';

describe('ArbitragemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
