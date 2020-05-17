import { TestBed } from '@angular/core/testing';

import { InsertarProfesorService } from './insertar-profesor.service';

describe('InsertarProfesorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertarProfesorService = TestBed.get(InsertarProfesorService);
    expect(service).toBeTruthy();
  });
});
