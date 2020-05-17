import { TestBed } from '@angular/core/testing';

import { AlumnosFaltasService } from './alumnos-faltas.service';

describe('AlumnosFaltasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnosFaltasService = TestBed.get(AlumnosFaltasService);
    expect(service).toBeTruthy();
  });
});
