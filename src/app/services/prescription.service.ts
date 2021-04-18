import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  public appointmentStatus:any= {1:"Accept", 2:"Reject" , 3:"Hold" , 4:"Wait_For_Accept" ,5:"Reschedule" ,6:"Done"};
  constructor(private http:HttpClient) { }

  addPrescription(model : any):Observable<any> {
    return this.http.post(`${environment.base_URL}addPrescription`,model);
  }

  viewPatientAppointment(userid : any):Promise<any> {
    return this.http.get(`${environment.base_URL}viewPatientAppointment/${userid}`).toPromise();
  }

  addPrescriptioneMedicine(model : any):Observable<any> {
    return this.http.post(`${environment.base_URL}addPrescriptionMedicine`,model);
  }

  getPrescriptionById(prescriptionId :any):Promise<any> {
    return this.http.get(`${environment.base_URL}getPrescriptionById/${prescriptionId}`).toPromise();
  }

  listPrescriptionMedicine(appointmentId : any):Promise <any> {
    return this.http.get(`${environment.base_URL}listPrescriptionMedicine/${appointmentId}`).toPromise();
  }

}
