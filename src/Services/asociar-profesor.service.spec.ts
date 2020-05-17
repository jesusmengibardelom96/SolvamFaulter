import { TestBed } from '@angular/core/testing';

import { AsociarProfesorService } from './asociar-profesor.service';

describe('AsociarProfesorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsociarProfesorService = TestBed.get(AsociarProfesorService);
    expect(service).toBeTruthy();
  });
});
