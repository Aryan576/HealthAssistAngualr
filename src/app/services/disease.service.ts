import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  constructor(private http:HttpClient) { }

  addDisease(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addDisease`,model);
  }

  listDisease():Promise<any>{
    return this.http.get(`${environment.base_URL}listDisease`).toPromise();
  }

  getDiseaseById(diseaseId:any):Observable<any>{
    return this.http.get(`${environment.base_URL}getDiseaseById/${diseaseId}`);
  }

  updateDisease(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateDisease`,model);
  }

  deleteDisease(diseaseId:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteDisease/${diseaseId}`);
  }
}
