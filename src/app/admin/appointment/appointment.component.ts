import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listAllAppointment: {};
  constructor(
    public appointmentService: AppointmentService,
    private route: ActivatedRoute,
    public userDataService: UserdataService,
    private rut: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.appointmentService.listAllAppointment().then((res) => {
      this.listAllAppointment = res.data;
    });
  }
}
