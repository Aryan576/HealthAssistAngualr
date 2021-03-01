import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  listPatient():Promise<any>{
    return this.http.get(`${environment.base_URL}listPatientProfile`).toPromise();
  }
}
