import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Patient } from 'src/app/interface/patient';
import { CityService } from 'src/app/services/city.service';
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
  file:any

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    public userdataservice: UserdataService,
    private rut: Router,
    private messageService: MessageService,
    private cityService:CityService
  ) {}
  ngOnInit(): void {

    this.cityService.listCity().then((res) => {
      this.listcities = res.data;
      console.log(res.data);
    });

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
        userId:new FormControl(this.userdataservice.user.userId),
        profilePic:new FormControl(this.userData.profilePic)
      })
    })
  }

  uploadFile(event:any){
    console.log(event.target.files)
    this.file = event.target.files[0];
    console.log(this.file)
    // this.doctorService.saveFile(file).subscribe(resp=>{
    //   console.log(resp);
    // })

  }


  submit(){

    // if(this.id){
      this.patientService.updateUserProfile(this.editPatientForm.value,this.file).subscribe(res => {
        console.log(res.data);

      })
    // this.Service.updateUserProfile(this.editPatientForm.value).subscribe(res => {
    // this.messageService.add({severity:'success',summary:'Updated',detail:res.msg});
    // })
    // }
    this.messageService.add({severity:'success',summary:'Updated',detail:"Patient Updated Successfully..."});
    this.rut.navigateByUrl('profile')
    console.log(this.editPatientForm.value);
  }
}
