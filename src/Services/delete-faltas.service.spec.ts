import { TestBed } from '@angular/core/testing';

import { DeleteFaltasService } from './delete-faltas.service';

describe('DeleteFaltasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteFaltasService = TestBed.get(DeleteFaltasService);
    expect(service).toBeTruthy();
  });
});
