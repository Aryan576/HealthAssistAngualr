import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Patient } from 'src/app/interface/patient';
import { PatientService } from 'src/app/services/patient.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
})
export class EditprofileComponent implements OnInit {
  editPatientForm: FormGroup;
  id = 0;
  userData: Patient;
  listcities: {};
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    public userdataservice: UserdataService,
    private rut: Router,
    private messageService: MessageService,
  ) {}
  ngOnInit(): void {

    this.id = this.route.snapshot.params.patientProfileId;
    this.patientService.getEditPatientById(this.id).then(res => {
      this.userData = res.data;

      console.log("First Name : ",this.userData.firstName);


      this.editPatientForm = new FormGroup({
        patientProfileId:new FormControl(this.userData.patientProfileId,Validators.required),
        firstName:new FormControl(this.userData.firstName,Validators.required),
        lastName:new FormControl(this.userData.lastName,Validators.required),
        email:new FormControl(this.userData.email,Validators.required),
        password:new FormControl(this.userData.password,Validators.required),
        gender:new FormControl(this.userData.gender,Validators.required),
        //patientname:new FormControl('',Validators.required),
        phoneNo: new FormControl(this.userData.phoneNo,Validators.required),
        age:new FormControl(this.userData.age,Validators.required),
        pincode:new FormControl(this.userData.pincode,Validators.required),
        cityId:new FormControl(this.userData.cityId,Validators.required),
        //roleid: new FormControl(2,Validators.required)
      })
    })
  }
  submit(){

    // if(this.id){

    // this.Service.updateUserProfile(this.editPatientForm.value).subscribe(res => {
    // this.messageService.add({severity:'success',summary:'Updated',detail:res.msg});
    // })
    // }
    this.messageService.add({severity:'success',summary:'Updated',detail:"Patient Updated Successfully..."});
    this.rut.navigateByUrl('profile')
    console.log(this.editPatientForm.value);
  }
}
