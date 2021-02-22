import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SignupLoginService } from 'src/app/services/signup-login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm : FormGroup
  constructor(private service:SignupLoginService,private rout:Router,private messageService:MessageService) { }

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      email: new FormControl('',Validators.required)
    })
  }

  submit(){
    if(this.resetForm.valid){
      this.service.resetPassword(this.resetForm.value.email).subscribe(res =>{
        if(res.status == 200){
          console.log(res.msg);
          this.messageService.add({severity:'success', summary: 'Success', detail:'OTP sent on your Email!!'});
          this.rout.navigateByUrl('otp-verify');
        }
        else{
          this.messageService.add({severity:'error', summary: 'Error', detail:'User Not Found!!'});
          console.log("chal");
        }
      })
    }
    else{
      this.messageService.add({severity:'info', summary: 'Info', detail: 'Please Enter Email Address!!'});

    }
  }
}
