import { TestBed } from '@angular/core/testing';

import { DoctorClinicService } from './doctor-clinic.service';

describe('DoctorClinicService', () => {
  let service: DoctorClinicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorClinicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
