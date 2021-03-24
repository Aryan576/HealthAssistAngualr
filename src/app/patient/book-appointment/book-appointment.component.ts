import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  listDoctorClinic:{}
  currentDate = new Date();

  constructor() { }

  ngOnInit(): void {

  }

}
