import { TestBed } from '@angular/core/testing';

import { InsertarFaltasService } from './insertar-faltas.service';

describe('InsertarFaltasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertarFaltasService = TestBed.get(InsertarFaltasService);
    expect(service).toBeTruthy();
  });
});
