import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
})
export class DoctorDashboardComponent implements OnInit {
  todayAppointmentCount: number = 0;
  waitForAcceptCount: number = 0;
  acceptCount: number = 0;
  rescheduleCount: number = 0;
  doneCount: number = 0;
  userId = 0;
  listDoctClinic: number = 0;
  constructor(
    private appointmentService: AppointmentService,
    public userDataService: UserdataService,
    private rut: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.userId = this.userDataService.user.userId;

    this.appointmentService.todayAppointment(this.userId).then((res) => {
      this.todayAppointmentCount = res.data.length;
    });

    this.appointmentService.waitForAcceptAppointment(this.userId).then((res) => {
      this.waitForAcceptCount = res.data.length;
    });

    this.appointmentService.acceptAppointment(this.userId).then((res) => {
      this.acceptCount = res.data.length;
    });

    this.appointmentService.rescheduleAppointment(this.userId).then((res) => {
      this.rescheduleCount = res.data.length;
    });

    this.appointmentService.doneAppointmentByUserId(this.userId).then((res) => {
      this.doneCount = res.data.length;
    });

    this.appointmentService.listDoctClinic(this.userId).then((res) => {
      this.listDoctClinic = res.data.length;
    });
  }
}
