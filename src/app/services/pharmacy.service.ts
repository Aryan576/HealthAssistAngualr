import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private http:HttpClient) { }

  listPharmacy():Promise<any>{
    return this.http.get(`${environment.base_URL}listPharmacy`).toPromise();
  }

  addPharmacy(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addPharmacy`,model);
  }

  getPharmacyById(pharmacyId:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getPharmacyById/${pharmacyId}`).toPromise();
  }

  updatePharmacy(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updatePharmacy`,model);
  }

  deletePharmacy(pharmacyId:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deletePharmacy/${pharmacyId}`);
  }

  listAssignUserPharmacyById():Promise<any> {
    return this.http.get(`${environment.base_URL}listAssignUserPharmacy`).toPromise();
  }

  addUserPharmacy(model :any):Observable<any> {
    return this.http.post(`${environment.base_URL}addUserPharmacy`,model);
  }

}
