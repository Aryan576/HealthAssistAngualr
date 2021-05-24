import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Appointment } from 'src/app/interface/appointment';
import { PrescriptionService } from 'src/app/services/prescription.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserdataService } from 'src/app/services/userdata.service';
import { DiseaseService } from 'src/app/services/disease.service';
import { MedicineService } from 'src/app/services/medicine.service';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  id = 0;
  appointmentStatusId = 0;

  PrescriptionData: {};
  prescriptionForm: FormGroup;
  prescriptionData: Appointment;
  listMedicine: {};
  prescriptionMedicineForm: FormGroup;
  listDisease: {};
  diseaseForm: FormGroup;
  listAppointmentDisease: {};
  listAppointment: {};
  listDiet: {};
  listDietUser:{};
  pastAppointmentList:{}
  dietUserForm: FormGroup;
  Appointment: {};
  public medicine: any[] = [{
    //id: 1,
    medicineName: '',
    frequency: '',
    duration: '',
    instructions: ''
    }];

  constructor(
    private route: ActivatedRoute,
    public userDataService: UserdataService,
    private prescriptionService: PrescriptionService,
    private appointmentService:AppointmentService,
    private diseaseService:DiseaseService,
    private medicineService:MedicineService,
    private rut: Router,
    private messageService: MessageService,
    private dietService:DietService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    // console.log("hh"+this.prescriptionData.patientName);


    this.id = this.route.snapshot.params.appointmentId;
    // console.log("appid"+this.id);

    this.appointmentService.getAppointmentById(this.id).then(res => {
      this.prescriptionData = res.data;
      console.log("App id : "+res.data);

      this.prescriptionMedicineForm = new FormGroup({
      patientProfileId: new FormControl(this.prescriptionData.patientProfileId, Validators.required),
      doctorProfileId: new FormControl(this.prescriptionData.doctorProfileId, Validators.required),
      appointmentId: new FormControl(this.id, Validators.required),
      description: new FormControl('', Validators.required),
      prescriptionDate: new FormControl('', Validators.required),
      generalAdvice: new FormControl('', Validators.required),
      followupComment: new FormControl('', Validators.required),
      prescriptionId: new FormControl('', Validators.required),
      medicineId: new FormControl('', Validators.required),
      frequency: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      instructions: new FormControl('', Validators.required)


    })

    this.dietService.listDietUser(this.prescriptionData.patientProfileId).then(res => {
      this.listDietUser = res.data;
      console.log("diet : ",res.data);

    })

    this.dietUserForm = new FormGroup({
      dietId:new FormControl('',Validators.required),
      userId:new FormControl(this.prescriptionData.patientProfileId,Validators.required)
    })

    this.appointmentService.pastAppointmentList(this.prescriptionData.patientProfileId).then(res => {
      this.pastAppointmentList = res.data;
    })

    this.diseaseForm = new FormGroup({
        appointmentId:new FormControl(this.id,Validators.required),
        patientProfileId:new FormControl(this.prescriptionData.patientProfileId,Validators.required),
        diseaseId:new FormControl('',Validators.required)
      })
    })

    this.diseaseService.listAppointmentDiseasePatient(this.id).then(res => {
      this.listAppointmentDisease = res.data;
      // console.log("List App."+this.listAppointmentDisease);
    })

    this.diseaseService.listDisease().then(res => {
      this.listDisease = res.data;
    })

    this.medicineService.listMedicine().then(res => {
      this.listMedicine = res.data;
    })

    this.dietService.listDiet().then(res => {
      this.listDiet = res.data;
    })
  }

  addMore() {
    this.medicine.push({
    //id: this.addresses.length + 1,
    medicineName: '',
    frequency: '',
    duration: '',
    instructions: ''
    });
  }

  remove(i: number) {
    this.medicine.splice(i, 1);
  }


  submit() {
    console.log(this.prescriptionMedicineForm.value);
    console.log("med",this.medicine);
    var data = {}
    this.prescriptionService.addPrescriptioneMedicine(this.prescriptionMedicineForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
    })

  }

  diseaseSubmit(){
    this.diseaseService.addAppointmentDiseasePatient(this.diseaseForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
    })
  }

  dietUserSubmit(){
    this.dietService.addDietUser(this.dietUserForm.value).subscribe(res => {
    this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
    })
  }

  submitDetails(value){
    console.log(value);
    this.Appointment={"appointmentId":value,"appointmentStatusId":this.appointmentStatusId=6}
    this.appointmentService.doneAppointment(this.Appointment).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
    })
    this.rut.navigateByUrl('appointment')
  }
}

