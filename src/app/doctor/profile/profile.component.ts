import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/interface/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  doctorData :Doctor

  constructor(public userdata: UserdataService,private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.userdata.user.userId
    //console.log("user "+this.userdata.user.userId)

    this.doctorService.getDoctorById(this.userdata.user.userId).then(res => {
      this.doctorData = res.data
      console.log(this.doctorData.firstName);
      console.log("Res ",res.data);
    })
  }
}
