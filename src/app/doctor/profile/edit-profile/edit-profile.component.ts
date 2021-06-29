import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Doctor } from 'src/app/interface/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  editProfileForm: FormGroup;
  DoctorProfileData: Doctor;
  file:any

  constructor(
    private doctorService: DoctorService,
    public userDataService: UserdataService,
    private rut: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {

    this.doctorService.getDoctorById(this.userDataService.user.userId).then(res => {
      this.DoctorProfileData = res.data;
      console.log(res.data);

      this.editProfileForm = new FormGroup({
        userId:new FormControl(this.userDataService.user.userId,Validators.required),
        firstName:new FormControl(this.DoctorProfileData.firstName,Validators.required),
        lastName:new FormControl(this.DoctorProfileData.lastName,Validators.required),
        email:new FormControl(this.DoctorProfileData.email,Validators.required),
        password:new FormControl(this.DoctorProfileData.password,Validators.required),
        gender:new FormControl(this.DoctorProfileData.gender,Validators.required),
        specialization:new FormControl(this.DoctorProfileData.specialization,Validators.required),
        qualification:new FormControl(this.DoctorProfileData.qualification,Validators.required),
        experience:new FormControl(this.DoctorProfileData.experience,Validators.required),
        about:new FormControl(this.DoctorProfileData.about,Validators.required),
        registrationNo:new FormControl(this.DoctorProfileData.registrationNo),
        profilePic:new FormControl(this.DoctorProfileData.profilePic)
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
    if(this.userDataService.user.userId){
        this.doctorService.updateDoctor(this.editProfileForm.value,this.file).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: "Profile Updated...!!"});
      })
      this.rut.navigateByUrl('/doctor/profile')
    }
  }
}
