import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  // addpatient(model:any):Observable<any>{
  //   return this.http.post(`${environment.base_URL}addPatient`,model);
  // }

  listPatient():Promise<any>{
    return this.http.get(`${environment.base_URL}listPatientProfile`).toPromise();
  }

  addFamilyMember(model :any):Observable<any> {
    return this.http.post(`${environment.base_URL}addFamilyMember`,model);
  }

  adminAddPatientProfile(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}adminAddPatientProfile`,model);
  }

  listUserPatient(userId : any):Promise <any> {
    return this.http.get(`${environment.base_URL}listUserPatient/${userId}`).toPromise();
  }

  getPatientById(userId :any):Promise<any> {
    return this.http.get(`${environment.base_URL}getPatientProfile/${userId}`).toPromise();
  }

  getEditPatientById(patientProfileId :any):Promise<any> {
    return this.http.get(`${environment.base_URL}getEditUserPatient/${patientProfileId}`).toPromise();
  }

  updateUserProfile(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateUserProfile`,model);
  }
}
