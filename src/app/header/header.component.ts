import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SignupLoginService } from '../services/signup-login.service';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLog: boolean = false;
  constructor(public userData:UserdataService,private signupLoginService:SignupLoginService,private rout:Router,private messageService: MessageService) {}

  ngOnInit(): void {
    // console.log(this.userData.user);

    if(this.userData.user.email.length != 0 && this.userData.user != null){
      this.isLog = true
    }
    else{
      this.isLog = false
    }
  }

  // get isLoggedIn() {
    // return this.signupLoginService.isLoggedIn();
  // }

  logout(){
    this.messageService.add({severity:'success', summary: 'Success', detail:'User Logout Successfully!!'});

    this.userData.user = null
    this.isLog = false
    this.rout.navigateByUrl('');
  }
}
