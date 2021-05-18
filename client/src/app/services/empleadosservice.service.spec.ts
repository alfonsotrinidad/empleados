import { TestBed } from '@angular/core/testing';

import { EmpleadosserviceService } from './empleadosservice.service';

describe('EmpleadosserviceService', () => {
  let service: EmpleadosserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadosserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
