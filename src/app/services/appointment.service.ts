import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

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
}
