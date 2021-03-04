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

  listDoctor():Promise<any>{
    return this.http.get(`${environment.base_URL}listDoctor`).toPromise();
  }

  addDoctor(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}doctorSignup`,model);
  }

  getDoctorById(userId:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getDoctorById/${userId}`).toPromise();
  }

  updateDoctor(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateDoctor`,model);
  }


}
