import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http:HttpClient) { }

  addPrescription(model : any):Observable<any> {
    return this.http.post(`${environment.base_URL}addPrescription`,model);
  }

  addPrescriptioneMedicine(model : any):Observable<any> {
    return this.http.post(`${environment.base_URL}addPrescriptionMedicine`,model);
  }

  getPrescriptionById(prescriptionId :any):Promise<any> {
    return this.http.get(`${environment.base_URL}getPrescriptionById/${prescriptionId}`).toPromise();
  }

}
