import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  listDoctor : {}
  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.doctorService.listDoctor().then(res => {
      this.listDoctor = res.data
      console.log(this.listDoctor);

    })
  }

}
