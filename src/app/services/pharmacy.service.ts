import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private http:HttpClient) { }

  listPharmacy():Promise<any>{
    return this.http.get(`${environment.base_URL}listPharmacy`).toPromise();
  }
}
