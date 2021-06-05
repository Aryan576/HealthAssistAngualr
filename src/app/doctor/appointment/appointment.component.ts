import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Appointment } from 'src/app/interface/appointment';
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
  RescheduleForm:FormGroup
  RejectForm:FormGroup
  appointmentData:Appointment
  statusId = 0;
  appointmentId =0
  Appointment: {};

  constructor(
    public appointmentService: AppointmentService,
    public userDataService: UserdataService,
    private rut: Router,
    private messageService: MessageService,
    private route:ActivatedRoute
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

    this.appointmentId = this.route.snapshot.params.appointmentId
    console.log("Appointment ID => ",this.appointmentId);

    this.appointmentService.getAppointmentById(this.appointmentId).then(res => {
      this.appointmentData = res.data;

      this.RescheduleForm = new FormGroup({
        appointmentId:new FormControl(this.appointmentData.appointmentId,Validators.required),
        email:new FormControl(this.appointmentData.email,Validators.required),
        statusReason:new FormControl('',Validators.required)
      })

      this.RejectForm = new FormGroup({
        appointmentId:new FormControl(this.appointmentData.appointmentId,Validators.required),
        email:new FormControl(this.appointmentData.email,Validators.required),
        statusReason:new FormControl('',Validators.required)
      })
    })


  }

  accept(value){
    console.log(value);
    this.Appointment={"appointmentId":value,"appointmentStatusId":this.statusId=1}
      this.appointmentService.acceptRejectAppointment(this.Appointment).subscribe(res => {
      console.log("stauts accpet",res);
    })
    this.appointmentService.listAppointment(this.userDataService.user.userId).then(res => {
      this.listAppointment = res.data;
      console.log(res.data);

    })
  }

  reject(value){
    console.log(value);
    this.Appointment={"appointmentId":value,"appointmentStatusId":this.statusId=2}
    this.appointmentService.acceptRejectAppointment(this.Appointment).subscribe(res => {
      console.log("stauts accpet",res);
    })
    this.appointmentService.listAppointment(this.userDataService.user.userId).then(res => {
      this.listAppointment = res.data;
      console.log(res.data);

    })
  }

  submit(){
    if(this.appointmentId){

      this.appointmentService.updateRescheduleAppointment(this.RescheduleForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      console.log("RE",this.RescheduleForm.value);

    })

    this.appointmentService.rescheduleReason(this.RescheduleForm.value).subscribe(res => {
      if(res.status == 200){
        this.messageService.add({severity:'success', summary: 'Success', detail: res.msg});
        this.rut.navigateByUrl("appointment");
      }else{
        this.messageService.add({severity:'error', summary: 'Error', detail: res.msg});
      }
    })
    this.rut.navigateByUrl('appointment')
    }
  }

  rejectSubmit(){
    if(this.appointmentId){
      this.appointmentService.updateRejectAppointment(this.RejectForm.value).subscribe(res => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: "You Have Reject Appointment"});
      console.log("rr",this.RejectForm.value);

    })

    this.appointmentService.rejectReason(this.RejectForm.value).subscribe(res => {
      if(res.status == 200){
        this.messageService.add({severity:'success', summary: 'Success', detail: res.msg});
        this.rut.navigateByUrl("appointment");
      }else{
      this.messageService.add({severity:'error', summary: 'Error', detail: res.msg});
      }
    })
    this.rut.navigateByUrl('appointment')
    }
  }
}
