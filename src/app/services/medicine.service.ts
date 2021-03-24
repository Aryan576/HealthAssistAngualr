import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) { }

  addMedicine(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addMedicine`,model);
  }

  listMedicine():Promise<any>{
    return this.http.get(`${environment.base_URL}listMedicine`).toPromise();
  }

  getMedicineById(medicineId:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getMedicineById/${medicineId}`).toPromise();
  }

  updateMedicine(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateMedicine`,model);
  }

  deleteMedicine(medicineId:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteMedicine/${medicineId}`);
  }
}
