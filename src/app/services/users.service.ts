import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  adminAddUsers(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}adminAddUsers`,model);
  }

  listSignup():Promise<any>{
    return this.http.get(`${environment.base_URL}listSignup`).toPromise();
  }

  getUserById(userId :any):Promise<any> {
    return this.http.get(`${environment.base_URL}getUserById/${userId}`).toPromise();
  }

  updateUser(model : any):Observable<any> {
    return this.http.put(`${environment.base_URL}updateSignup`,model);
  }

  deleteUser(userId : any):Observable<any> {
    return this.http.delete(`${environment.base_URL}deleteSignup/${userId}`);
  }
}
