import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicService } from 'src/app/services/clinic.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PathologyService } from 'src/app/services/pathology.service';
import { PatientService } from 'src/app/services/patient.service';
import { PharmacyService } from 'src/app/services/pharmacy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  doctorCount: number = 0;
  patientCount: number = 0;
  pathologyCount: number = 0;
  pharmacyCount: number = 0;
  clinicCount: number = 0;

  constructor(
    public router: Router,
    private doctorService: DoctorService,
    private patientService: PatientService,
    private pathologyService: PathologyService,
    private pharmacyService: PharmacyService,
    private clinicService:ClinicService
  ) {}

  ngOnInit(): void {
    this.doctorService.listDoctor().then((res) => {
      this.doctorCount = res.data.length;
    });

    this.patientService.listPatient().then((res) => {
      this.patientCount = res.data.length;
    });

    this.pathologyService.listPathology().then(res=>{
      this.pathologyCount = res.data.length
    })

    this.pharmacyService.listPharmacy().then(res =>{
      this.pharmacyCount = res.data.length
    })

    this.clinicService.listClinic().then(res =>{
      this.clinicCount = res.data.length
    })
  }
}
