import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';


@NgModule({
  declarations: [BookAppointmentComponent],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
