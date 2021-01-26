import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupLoginService } from '../signup-login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;

  list : {}
  constructor(private signupLoginService:SignupLoginService ) {
  }

  ngOnInit(): void {

    this.signupLoginService.role().then(res => {
      this.list = res.data;
      // console.log(this.list);
    })


    this.loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    })

    this.signupForm = new FormGroup({
      email:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      roleId: new FormControl('',Validators.required),
    })
  }

  submit(){

  }

  signup(){

  }
}
