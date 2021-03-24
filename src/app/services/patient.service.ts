import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  listPatient():Promise<any>{
    return this.http.get(`${environment.base_URL}listPatientProfile`).toPromise();
  }

  adminAddPatientProfile(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}adminAddPatientProfile`,model);
  }

  
}
