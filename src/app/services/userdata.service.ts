import { Injectable } from '@angular/core';
import { SignupLogin } from '../interface/signup-login';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  user:SignupLogin={userId:0,email:"",password:"",firstName:"",lastName:"",gender:"",roleId:0,status:0,statusReason:"",otp:""}
  
}
