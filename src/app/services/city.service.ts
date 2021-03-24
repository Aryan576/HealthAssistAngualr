import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  addCity(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addCity`,model);
  }

  listCity():Promise<any>{
    return this.http.get(`${environment.base_URL}listCity`).toPromise();
  }

  getCityById(cityId:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getCityById/${cityId}`).toPromise();
  }

  updateCity(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateCity`,model);
  }

  deleteCity(cityId:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteCity/${cityId}`);
  }
}
