import { TestBed } from '@angular/core/testing';

import { UploadCSVService } from './upload-csv.service';

describe('UploadCSVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadCSVService = TestBed.get(UploadCSVService);
    expect(service).toBeTruthy();
  });
});
