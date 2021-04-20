import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicService } from 'src/app/services/clinic.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PathologyService } from 'src/app/services/pathology.service';
import { PatientService } from 'src/app/services/patient.service';
import { PharmacyService } from 'src/app/services/pharmacy.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  doctorCount: number = 0;
  patientCount: number = 0;
  pathologyCount: number = 0;
  pharmacyCount: number = 0;
  clinicCount: number = 0;
  doneAppointmentForAllDoctor:number=0;
  public single = [];

  constructor(
    public router: Router,
    private doctorService: DoctorService,
    private patientService: PatientService,
    private pathologyService: PathologyService,
    private pharmacyService: PharmacyService,
    private clinicService: ClinicService,
    private httpService: HttpClient
  ) { }

  ngOnInit(): void {

    this.doctorService.doneAppointmentForAllDoctor().then(res => {
      this.doneAppointmentForAllDoctor = res.data.length;
    })

    this.doctorService.listDoctor().then((res) => {
      this.doctorCount = res.data.length;
    });

    this.patientService.listPatient().then((res) => {
      this.patientCount = res.data.length;
    });

    this.pathologyService.listPathology().then((res) => {
      this.pathologyCount = res.data.length;
    });

    this.pharmacyService.listPharmacy().then((res) => {
      this.pharmacyCount = res.data.length;
    });

    this.clinicService.listClinic().then((res) => {
      this.clinicCount = res.data.length;
    });

    this.getInfo();
  }

  getInfo() {
    let info;
    info = this.httpService.get(
      'https://healthassists.herokuapp.com/listDoctor'
    );
    info.subscribe((res) => {
      console.log(res.data.summary);

      // this.memoryapi = res.data.summary
      // console.log("Hello " + this.memoryapi);

      this.single = [
        {
          name: 'Doctor',
          value: this.doctorCount,
        },
        {
          name: 'Patient',
          value: this.patientCount,
        },
        {
          name: 'Pathology',
          value: this.pathologyCount,
        },
        {
          name: 'Pharmacy',
          value: this.pharmacyCount,
        },
        {
          name: 'Clinic',
          value: this.clinicCount,
        },
        // {
        // "name": "confirmedButLocationUnidentified",
        // "value": this.memoryapi.confirmedButLocationUnidentified
      ];
    });
  }
  title = 'Angular Charts';
  view: any[] = [600, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Fields';
  showYAxisLabel = true;
  yAxisLabel = 'Total';
  timeline = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  };
  showLabels = true;
}
