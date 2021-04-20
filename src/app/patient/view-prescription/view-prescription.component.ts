import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DietComponent } from 'src/app/admin/diet/diet.component';
import { DiseaseComponent } from 'src/app/admin/disease/disease.component';
import { Appointment } from 'src/app/interface/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DietService } from 'src/app/services/diet.service';
import { DiseaseService } from 'src/app/services/disease.service';
import { PrescriptionService } from 'src/app/services/prescription.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.css'],
})
export class ViewPrescriptionComponent implements OnInit {
  id = 0;
  patientData: Appointment;
  listPatientDisease: {};
  listDietUser: {};
  listPrescriptionMedicine: {};
  pastAppointmentList: {};
  constructor(
    private route: ActivatedRoute,
    private prescriptionService: PrescriptionService,
    private appointmentService:AppointmentService,
    private dietService:DietService,
    private diseaseService:DiseaseService,
    private rut: Router,
    private userdataservice: UserdataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params.appointmentId;
    console.log("app :"+this.id);

    this.appointmentService.getPatientDetails(this.id).then(res => {
      this.patientData = res.data;
      console.log(res.data);

      this.dietService.listDietUser(this.patientData.patientProfileId).then(res => {
        this.listDietUser = res.data;
      })

      this.appointmentService.pastAppointmentList(this.patientData.patientProfileId).then(res => {
        this.pastAppointmentList = res.data;
      })

      this.diseaseService.listAppointmentDiseasePatient(this.patientData.patientProfileId).then(res => {
        this.listPatientDisease = res.data;
      })
    })

    this.prescriptionService.listPrescriptionMedicine(this.id).then(res => {
      this.listPrescriptionMedicine = res.data;
      console.log("lis",this.listPrescriptionMedicine);

    })
  }
}
