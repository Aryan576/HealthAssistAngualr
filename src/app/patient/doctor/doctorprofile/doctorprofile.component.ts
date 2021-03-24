import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/interface/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css'],
})
export class DoctorprofileComponent implements OnInit {
  getDoctorUserId: Doctor;
  id = 0;
  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.userId;
    this.doctorService.getDoctorById(this.id).then((res) => {
      this.getDoctorUserId = res.data;
    });
  }
}
