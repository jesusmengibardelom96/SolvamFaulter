import { TestBed } from '@angular/core/testing';

import { UsauriosService } from './usaurios.service';

describe('UsauriosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsauriosService = TestBed.get(UsauriosService);
    expect(service).toBeTruthy();
  });
});
