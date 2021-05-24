import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  public doctorStatus:any= {1:"ACTIVE", 2:"PENDING" , 3:"DISABLE" , 4:"PAUSE" ,5:"KYC_DOCTOR"};

  constructor(private http:HttpClient) { }

  saveFile(file:File):Observable<any>{
    let data = {"profile":file}
    const formData = new FormData();
    formData.append('profile',file);
    return this.http.post(`${environment.base_URL}updateDoctor`,formData)
  }

  listDoctor():Promise<any>{
    return this.http.get(`${environment.base_URL}listDoctor`).toPromise();
  }

  addDoctor(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}doctorSignup`,model);
  }

  getDoctorById(userId:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getDoctorById/${userId}`).toPromise();
  }

  updateDoctor(model:any,file:any):Observable<any>{

    const formData = new FormData();
    formData.append('profile',file);
    //formData.append('data',model);
    return this.http.post(`${environment.base_URL}updateDoctor`,formData)

    // return this.http.post(`${environment.base_URL}updateDoctor`,model);
  }

  deleteDoctor(userId:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteDoctor/${userId}`);
  }

  addDoctorClinic(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addDoctorClinic`,model);
  }

  listDoctorClinic(userId:any):Promise<any>{
    return this.http.get(`${environment.base_URL}listDoctorClinic/${userId}`).toPromise();
  }

  doneAppointmentForAllDoctor():Promise<any> {
    return this.http.get(`${environment.base_URL}doneAppointmentForAllDoctor`).toPromise();
  }
}
