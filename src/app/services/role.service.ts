import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  listRole():Promise<any>{
    return this.http.get(`${environment.base_URL}listRole`).toPromise();
  }

}
