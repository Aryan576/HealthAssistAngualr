import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SignupLoginService } from 'src/app/services/signup-login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;

  list : {}
  constructor(private signupLoginService:SignupLoginService,private messageService:MessageService ) {
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
      gender: new FormControl('',Validators.required),
      roleId: new FormControl('',Validators.required),
    })
  }

  login(){
    if(this.loginForm.valid){
      this.signupLoginService.login(this.loginForm.value).subscribe(res => {
        if(res.status == 200){
          console.log(res);
          this.messageService.add({severity:'success', summary: 'Success', detail:'Successfully!!'});
        }
        else{
          console.log(res);
          this.messageService.add({severity:'error', summary: 'Error', detail:'User Not Found!!'});
        }
      })
    }
    else{
      this.messageService.add({severity:'info', summary: 'Info', detail: 'Please Enter Credentials!!'});
    }
  }

  signup(){
    this.signupLoginService.signup(this.signupForm.value).subscribe(res => {
      console.log(res);
    })
  }
}
