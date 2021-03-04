import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  listCity():Promise<any>{
    return this.http.get(`${environment.base_URL}listCity`).toPromise();
  }
}
