import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listPatient : {}
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.patientService.listPatient().then(res => {
      this.listPatient = res.data
    })
  }

  delete(value){
    
  }
}
