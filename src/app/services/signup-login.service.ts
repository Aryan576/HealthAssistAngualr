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

  public status:any= {1:"Active", 2:"Pending" , 3:"Disable" , 4:"Pause" ,5:"KYC_DOCTOR"};

  constructor(private http:HttpClient,private rout:Router,private userData:UserdataService) { }

  signup(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}signup`,model);
  }

  login(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}login`,model);
  }

  resetPassword(model:any):Observable<any>{
    return this.http.get(`${environment.base_URL}resetPassword/`+model);
  }

  setNewPassword(data:any):Observable<any>{
    return this.http.get(`${environment.base_URL}setNewPassword/`+data.otp+"/"+data.newpassword+"/"+data.email);
  }

  verifyUser(data:any):Observable<any>{
    return this.http.get(`${environment.base_URL}verifyUser/`+data.otp+"/"+data.email);
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
