import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Doctor } from 'src/app/interface/doctor';
import { ClinicService } from 'src/app/services/clinic.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  doctorClinicForm: FormGroup;
  getDoctorUserId: Doctor;
  listDoctorClinic: {};
  listClinic: {};
  id = 0

  constructor(
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private rout: Router,
    private messageService: MessageService,
    private clinicService:ClinicService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.id = this.route.snapshot.params.userId;

    this.clinicService.listClinic().then(res => {
      this.listClinic = res.data
      console.log("c"+res.data.clinicId);

      console.log("cli"+this.listClinic);

    })

    this.doctorService.listDoctorClinic(this.id).then(res => {
      this.listDoctorClinic = res.data

    })

    this.doctorService.getDoctorById(this.id).then((res) => {
      this.getDoctorUserId = res.data;
      // console.log(res);
      // console.log("id"+this.getDoctorUserId.userId);

      this.doctorClinicForm = new FormGroup({
        doctorProfileId: new FormControl(this.getDoctorUserId.userId,Validators.required),
        clinicId: new FormControl('', Validators.required),
        monday: new FormControl('', Validators.required),
        tuesday: new FormControl('', Validators.required),
        wednesday: new FormControl('', Validators.required),
        thrusday: new FormControl('', Validators.required),
        friday: new FormControl('', Validators.required),
        saturday: new FormControl('', Validators.required),
        sunday: new FormControl('', Validators.required),
        threshold: new FormControl('', Validators.required),
      });
    });
  }

  submit() {
    console.log(this.doctorClinicForm.value);

    this.doctorService.addDoctorClinic(this.doctorClinicForm.value).subscribe(res => {
      console.log(res);
      this.messageService.add({severity:'success', summary: 'Success', detail:'Successfully Updated!!'});
      // this.rout.navigateByUrl('doctor/doctor-medicine');

    })
    this.clinicService.listClinic().then(res => {
      this.listClinic = res.data

    })

  }

  delete(value) {

  }
}
