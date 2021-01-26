import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupLoginService {

  constructor(private http:HttpClient) { }

  signup(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}login`,model);
  }

  role():Promise<any>{
    return this.http.get(`${environment.base_URL}listRole`).toPromise();
  }
}
