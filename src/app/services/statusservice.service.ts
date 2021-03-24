import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatusserviceService {
  public doctorStatus: any = {
    1: 'ACTIVE',
    2: 'PENDING',
    3: 'DISABLE',
    4: 'PAUSE',
    5: 'KYC_DOCTOR',
  };
  public userRole: any = {
    2: 'Admin',
    3: 'Doctor',
    4: 'Patient',
    5: 'Pharmacy',
    6: 'Pathology',
  };
  constructor() {}
}
