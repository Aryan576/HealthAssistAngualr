import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignupLogin } from '../interface/signup-login';
import { UserdataService } from './userdata.service';

@Injectable({
  providedIn: 'root'
})
export class SignupLoginService {

  constructor(private http:HttpClient,private rout:Router,private userData:UserdataService) { }

  signup(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}signup`,model);
  }

  login(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}login`,model);
  }

  role():Promise<any>{
    return this.http.get(`${environment.base_URL}listRole`).toPromise();
  }

  resetPassword(model:any):Observable<any>{
    return this.http.get(`${environment.base_URL}resetPassword/`+model);
  }

  setNewPassword(data:any):Observable<any>{
    return this.http.get(`${environment.base_URL}setNewPassword/`+data.otp+"/"+data.newpassword+"/"+data.email);
  }

  isLoggedIn(){
    if(this.userData.user.email.length == 0 && this.userData.user.password.length == 0){
      console.log(this.userData.user.email)
      this.rout.navigateByUrl('/signup-login')
      return false
    }
    else{
      console.log("bol");
      return true
    }
  }
}
