import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SignupLoginService } from 'src/app/services/signup-login.service';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css'],
})
export class OtpVerifyComponent implements OnInit {
  otpForm: FormGroup;

  constructor(private service:SignupLoginService,private rout:Router,private messageService:MessageService) {}

  ngOnInit(): void {
    this.otpForm = new FormGroup({
      otp: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      newpassword: new FormControl('', Validators.required),
    });
  }

  submit(){
    if(this.otpForm.valid){
      this.service.setNewPassword(this.otpForm.value).subscribe(res => {
        if(res.status == 200){
          console.log("successfull");
          this.messageService.add({severity:'success', summary: 'Success', detail:'Successfully!!'});
          this.rout.navigateByUrl('signup-login');
        }
        else{
          console.log("nikal");
          this.messageService.add({severity:'error', summary: 'Error', detail:'User Not Found!!'});
        }
      })
    }
    else{
      this.messageService.add({severity:'info', summary: 'Info', detail: 'Please Enter All Details!!'});
    }
  }
}
