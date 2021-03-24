import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  doctorlist : {}
  
  constructor(public doctorService:DoctorService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.doctorService.listDoctor().then(res => {
      this.doctorlist = res.data
    })
  }
  delete(value){
    this.doctorService.deleteDoctor(value).subscribe(res => {
      console.log("Doctor Deleted!!");

    })
  }
}
