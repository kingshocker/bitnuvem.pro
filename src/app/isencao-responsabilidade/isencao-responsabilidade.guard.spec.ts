import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Storage } from '@ionic/storage';

import { IsencaoResponsabilidadeGuard } from './isencao-responsabilidade.guard';

describe('IsencaoResponsabilidadeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        IsencaoResponsabilidadeGuard,
        {
          provide: Storage,
          useFactory: () => new Storage({})
        }
      ]
    });
  });

  it('should ...', inject([IsencaoResponsabilidadeGuard], (guard: IsencaoResponsabilidadeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
