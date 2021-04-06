import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  listAppointment: {};
  dtOptions: DataTables.Settings = {};
  statusId = 0;
  Appointment: {};

  constructor(
    private appointmentService: AppointmentService,
    public userDataService: UserdataService,
    private rut: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
      };

    console.log(this.userDataService.user.userId);

    this.appointmentService.listAppointment(this.userDataService.user.userId).then(res => {
      this.listAppointment = res.data;
      console.log(res.data);
    })
  }

  accept(value){
    console.log(value);
    this.Appointment={"appointmentId":value,"appointmentStatusId":this.statusId=1}
      this.appointmentService.acceptRejectAppointment(this.Appointment).subscribe(res => {
      console.log("stauts accpet",res);
    })

  }
  reject(value){
    console.log(value);
    this.Appointment={"appointmentId":value,"appointmentStatusId":this.statusId=2}
    this.appointmentService.acceptRejectAppointment(this.Appointment).subscribe(res => {
      console.log("stauts accpet",res);
    })
  }
}
