import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Patient } from 'src/app/interface/patient';
import { PatientService } from 'src/app/services/patient.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  listUserPatient: {};
  dtOptions: DataTables.Settings = {};
  patientForm: FormGroup;
  listcities: {};
  id = 0;
  getpatientUserId: Patient;
  phoneno: String;
  cityid: number;
  pincode: number;
  patientProfileId = 0
  getFamilyMemberId : Patient

  constructor(
    public userDataService: UserdataService,
    private route: ActivatedRoute,
    public patientService: PatientService,
    private rut: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };


    // this.userDataService.user.userId;
    this.patientProfileId = this.route.snapshot.params.patientid
    console.log(this.patientProfileId);

    this.patientService.getFamilyMember(this.patientProfileId).then(res => {

      this.getFamilyMemberId= res.data;
      console.log("fam",this.getFamilyMemberId);

      this.patientForm = new FormGroup({
        patientProfileId:new FormControl(this.getFamilyMemberId.patientProfileId,Validators.required),
        patientName:new FormControl(this.getFamilyMemberId.patientName,Validators.required),
        gender:new FormControl(this.getFamilyMemberId.gender,Validators.required),
        phoneNo: new FormControl(this.getFamilyMemberId.phoneNo,Validators.required),
        email:new FormControl(this.getFamilyMemberId.email,Validators.required),
        age:new FormControl(this.getFamilyMemberId.age,Validators.required),
        userId:new FormControl(this.userDataService.user.userId,Validators.required),
      })

    })



    this.patientService.listUserPatient(this.userDataService.user.userId).then(res => {
      this.listUserPatient = res.data;
      console.log("List User Patient ==>  ",res.data);
       console.log("=======>>",res.data);

      for(let i=0;i<res.data.length;i++){
        if(res.data[i].email == this.userDataService.user.email){
          this.getpatientUserId = res.data[i];
        }
      }
      this.cityid = this.getpatientUserId.cityId

      this.patientForm = new FormGroup({
        patientName:new FormControl('',Validators.required),
        gender:new FormControl('',Validators.required),
        phoneNo: new FormControl('',Validators.required),
        email:new FormControl('',Validators.required),
        age:new FormControl('',Validators.required),
        cityId:new FormControl(this.cityid,Validators.required),
        pincode:new FormControl(this.getpatientUserId.pincode,Validators.required),
        userId:new FormControl(this.userDataService.user.userId,Validators.required),
        // roleid: new FormControl(2,Validators.required)
      })
    })

    this.patientService.listUserPatient(this.userDataService.user.userId).then(res => {
      this.listUserPatient = res.data;
      console.log("List User Patient ==>  ",res.data);
    })
  }

  submit(){
    if(this.patientProfileId){
      this.patientService.updateFamilyMember(this.patientForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
      })
    }
    else{
      this.patientService.addFamilyMember(this.patientForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
      })
      console.log(this.patientForm.value);
    }

  }
}
