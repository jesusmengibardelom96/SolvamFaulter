import { TestBed } from '@angular/core/testing';

import { AlumnoMatriculaService } from './alumno-matricula.service';

describe('AlumnoMatriculaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnoMatriculaService = TestBed.get(AlumnoMatriculaService);
    expect(service).toBeTruthy();
  });
});
