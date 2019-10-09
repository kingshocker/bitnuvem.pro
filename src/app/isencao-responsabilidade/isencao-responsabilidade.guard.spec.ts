import { TestBed, async, inject } from '@angular/core/testing';

import { IsencaoResponsabilidadeGuard } from './isencao-responsabilidade.guard';

describe('IsencaoResponsabilidadeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsencaoResponsabilidadeGuard]
    });
  });

  it('should ...', inject([IsencaoResponsabilidadeGuard], (guard: IsencaoResponsabilidadeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
