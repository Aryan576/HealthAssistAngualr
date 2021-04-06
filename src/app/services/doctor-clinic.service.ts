import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorClinicService {

  constructor(private http:HttpClient) { }

  listDoctorClinic(userId : any):Promise <any> {
    return this.http.get(`${environment.base_URL}listDoctorClinic/${userId}`).toPromise();
  }
}
