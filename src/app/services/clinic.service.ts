import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  constructor(private http: HttpClient) {}

  listClinic(): Promise<any> {
    return this.http.get(`${environment.base_URL}listClinic`).toPromise();
  }

  addClinic(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}addClinic`, model);
  }

  getClinicById(clinicId:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getClinicById/${clinicId}`).toPromise();
  }

  updateClinic(model: any) {
    return this.http.put(`${environment.base_URL}updateClinic`, model);
  }

  deleteClinic(clinicId:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteClinic/${clinicId}`);
  }
}
