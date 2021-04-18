import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Appointment } from 'src/app/interface/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PrescriptionService } from 'src/app/services/prescription.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css'],
})
export class ViewAppointmentComponent implements OnInit {
  listAppointment: {};
  statusid = 0;
  Appointment: {};
  userId = 0;
  RescheduleForm: FormGroup;
  appointmentData: Appointment;
  appointmentid = 0;
  dtOptions: DataTables.Settings = {};
  constructor(
    private route: ActivatedRoute,
    private prescriptionService: PrescriptionService,
    public apponintmentService:AppointmentService,
    private rut: Router,
    private userDataService: UserdataService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.userId = this.userDataService.user.userId
    this.prescriptionService.viewPatientAppointment(this.userId).then(res => {
      this.listAppointment = res.data;
      console.log(res.data);
    })

    this.appointmentid = this.route.snapshot.params.appointmentid

    this.apponintmentService.getAppointmentById(this.appointmentid).then(res => {
      this.appointmentData = res.data;

      // this.viewAppointmentService.listDoctClinicTiming(this.appointmentData.clinicid).then(res => {
      // this.listDoctClinicTiming = res.data
      // })
    })
  }
}
