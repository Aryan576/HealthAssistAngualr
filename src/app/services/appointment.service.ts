import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  public appointmentStatus:any= {1:"Accept", 2:"Reject" , 3:"Hold" , 4:"Wait_For_Accept" ,5:"Reschedule" ,6:"Done"};

  constructor(private http:HttpClient) { }

  addAppointment(model :any):Observable<any> {
    return this.http.post(`${environment.base_URL}addAppointment`,model);
  }

  listAppointment(userId : any):Promise<any> {
    return this.http.get(`${environment.base_URL}listAppointment/${userId}`).toPromise()
  }

  acceptRejectAppointment(model :any):Observable<any> {
    return this.http.put(`${environment.base_URL}acceptRejectAppointment`,model)
  }

  getAppointmentById(appointmentId :any):Promise<any> {
    return this.http.get(`${environment.base_URL}getAppointmentId/${appointmentId}`).toPromise();
  }

  pastAppointmentList(patientid : any):Promise <any> {
    return this.http.get(`${environment.base_URL}pastAppointmentList/${patientid}`).toPromise();
  }

  doneAppointment(model :any):Observable<any> {
    return this.http.put(`${environment.base_URL}doneAppointment`,model)
  }

  getPatientDetails(appointmentId :any):Promise<any> {
    return this.http.get(`${environment.base_URL}getPatientDetails/${appointmentId}`).toPromise();
  }
}
