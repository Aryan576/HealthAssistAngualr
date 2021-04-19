import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupLoginService } from '../services/signup-login.service';
import { UserdataService } from '../services/userdata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private http:HttpClient,private rout:Router,private userData:UserdataService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userData.user.email.length == undefined && this.userData.user.password.length == undefined){
      this.rout.navigateByUrl('/signup-login')
      return false;
    }
    else{
      return true;
    }
  }

}
