import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Doctor } from 'src/app/interface/doctor';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorClinicService } from 'src/app/services/doctor-clinic.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css'],
})
export class DoctorAppointmentComponent implements OnInit {
  listDoctorClinic: {};
  listDoctorClinicTiming: {};
  userId = 0;
  currentDate = new Date();
  listUserPatint: {};
  doctorAppointmentForm: FormGroup;
  myDate = new Date();
  a: string = '';
  getDoctorUserId: Doctor;

  constructor(
    private doctorClinicService: DoctorClinicService,
    private appointmentService: AppointmentService,
    private doctorService: DoctorService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private patientService: PatientService,
    private rut: Router,
    private userDataService: UserdataService,
    private messageService: MessageService
  ) {
    this.a = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');

    console.log('current date', this.a);
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.userId;

    this.patientService
      .listUserPatient(this.userDataService.user.userId)
      .then((res) => {
        this.listUserPatint = res.data;
        console.log(res.data);
      });

    this.doctorClinicService.listDoctorClinic(this.userId).then((res) => {
      this.listDoctorClinic = res.data;
      console.log(res.data);
    });

    this.doctorService.getDoctorById(this.userId).then((res) => {
      this.getDoctorUserId = res.data;

      this.doctorAppointmentForm = new FormGroup({
        doctorProfileId: new FormControl(this.getDoctorUserId.userId,Validators.required),
        clinicId: new FormControl('', Validators.required),
        patientProfileId: new FormControl('', Validators.required),
        //appointmentCreateDate: new FormControl(this.a, Validators.required),
        appointmentDate: new FormControl('', Validators.required),
        appointmentTime: new FormControl('', Validators.required),
        reference: new FormControl('', Validators.required),
        comment: new FormControl('', Validators.required),
        complain: new FormControl('', Validators.required),
      });
    });
  }

  submit() {
    this.appointmentService
      .addAppointment(this.doctorAppointmentForm.value)
      .subscribe((res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Appointment Booked Successfully...!!',
        });
      });
    console.log(this.doctorAppointmentForm.value);
  }
  getDoctClinicsByDoctId() {
    var clinicId = this.doctorAppointmentForm.value.clinicId;
    this.doctorClinicService.listDoctorClinicTiming(clinicId).then((res) => {
      this.listDoctorClinicTiming = res.data;
    });
  }
}
