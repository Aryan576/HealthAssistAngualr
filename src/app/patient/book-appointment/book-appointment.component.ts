import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { DoctorClinicService } from 'src/app/services/doctor-clinic.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
})
export class BookAppointmentComponent implements OnInit {
  listDoctor: {};
  appointmentForm: FormGroup;
  currentDate = new Date();
  listClinic: {};
  today: number = Date.now();
  myDate = new Date();
  listUserPatint: {};
  a: string = '';
  listDoctorClinic: {};
  listDoctorClinicTiming :{};
  todaysdate = new Date()

  constructor(
    private datePipe: DatePipe,
    private patientService: PatientService,
    private doctorClinicService:DoctorClinicService,
    private appointmentService:AppointmentService,
    private doctorService:DoctorService,
    private clinicService:ClinicService,
    private rut: Router,
    private userDataService: UserdataService,
    private messageService: MessageService
  ) {
    this.a = this.datePipe.transform(this.myDate, 'mediumDate');
    console.log(this.a);

  }

  ngOnInit(): void {
    console.log("date , ",this.todaysdate)
    this.doctorClinicService.listDoctorClinic(this.userDataService.user.userId).then(res => {
      this.listDoctorClinic = res.data;
    })

    this.patientService.listUserPatient(this.userDataService.user.userId).then(res => {
      this.listUserPatint = res.data;
    })

    this.clinicService.listClinic().then(res => {
      this.listClinic = res.data;
      console.log("ListClinic......",res.data);

    })
    this.doctorService.listDoctor().then(res => {
      this.listDoctor = res.data;
    })

    this.appointmentForm= new FormGroup({
      //patienid:new FormControl(this.userdataservice.user.userId,Validators.required),
      doctorProfileId:new FormControl('',Validators.required),
      clinicId:new FormControl('',Validators.required),
      //appointmentCreateDate:new FormControl(this.a,Validators.required),
      appointmentDate:new FormControl('',Validators.required),
      appointmentTime:new FormControl('',Validators.required),
      reference:new FormControl('',Validators.required),
      comment:new FormControl('',Validators.required),
      complain:new FormControl('',Validators.required),
      patientProfileId:new FormControl('',Validators.required)
    })
  }

  submit() {
    this.appointmentService.addAppointment(this.appointmentForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Appointment Booked Successfully...!!"});
    })
    console.log(this.appointmentForm.value);
  }

  getDoctorClinicsByDoctorId(){
    var clinicId = this.appointmentForm.value.clinicId
    console.log(this.appointmentForm.value.clinicId);
    this.doctorClinicService.listDoctorClinicTiming(clinicId).then(res => {
      this.listDoctorClinicTiming = res.data;
      console.log("list app time"+res.data);
    })
  }

  getClinicsByDoctId(){
    var docProfileId = this.appointmentForm.value.doctorProfileId
    console.log(this.appointmentForm.value.doctorProfileId);
    //api - boot -> clinics
    this.doctorClinicService.listDoctorClinic(docProfileId).then(res => {
      this.listClinic = res.data;
      console.log("fghjkfdgshjklgdhjkl",res.data);
    })
    console.log(" lets get all clinic ",docProfileId);
  }

}
