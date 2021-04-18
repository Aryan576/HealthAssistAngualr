import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/interface/doctor';
import { DoctorClinicService } from 'src/app/services/doctor-clinic.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css'],
})
export class DoctorprofileComponent implements OnInit {
  getDoctorUserId: Doctor;
  id = 0;
  listDoctClinic:{};
  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private doctorClinicService:DoctorClinicService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.userId;
    this.doctorService.getDoctorById(this.id).then((res) => {
      this.getDoctorUserId = res.data;
    });


  this.doctorClinicService.listDoctorClinic(this.id).then(res => {
    this.listDoctClinic = res.data;
    console.log(res.data);
  })
  }
}
