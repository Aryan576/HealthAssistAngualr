import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  constructor(private http:HttpClient) { }

  addDiet(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addDiet`,model);
  }

  listDiet():Promise<any>{
    return this.http.get(`${environment.base_URL}listDiet`).toPromise();
  }

  getDietById(dietId:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getDietById/${dietId}`).toPromise();
  }

  updateDiet(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateDiet`,model);
  }

  deleteDiet(dietId:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteDiet/${dietId}`);
  }
}
