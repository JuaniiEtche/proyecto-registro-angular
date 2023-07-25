import { TestBed } from '@angular/core/testing';

import { RegistroLinsiService } from './registro-linsi.service';

describe('RegistroLinsiService', () => {
  let service: RegistroLinsiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroLinsiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
