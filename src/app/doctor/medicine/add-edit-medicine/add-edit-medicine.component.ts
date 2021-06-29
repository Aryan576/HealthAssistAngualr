import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Medicine } from 'src/app/interface/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-add-edit-medicine',
  templateUrl: './add-edit-medicine.component.html',
  styleUrls: ['./add-edit-medicine.component.css']
})
export class AddEditMedicineComponent implements OnInit {

  medicineForm:FormGroup
  medicineData:Medicine
  id=0

  constructor(
    private medicineService:MedicineService,
    private messageService: MessageService,
    private rout: Router,
    private router: ActivatedRoute

  ) { }

  ngOnInit(): void {

    this.id = this.router.snapshot.params.medicineId

    this.medicineService.getMedicineById(this.id).then(res => {
      this.medicineData = res.data

      this.medicineForm = new FormGroup({
        medicineId:new FormControl(this.medicineData.medicineId,Validators.required),
        medicineName:new FormControl(this.medicineData.medicineName,Validators.required),
        type:new FormControl(this.medicineData.type,Validators.required)
      })
    })

    this.medicineForm = new FormGroup({
      medicineName:new FormControl('',Validators.required),
      type:new FormControl('',Validators.required)
    })
  }

  submit(){
    if(this.id){
      this.medicineService.updateMedicine(this.medicineForm.value).subscribe(res =>{
        console.log("Medicine Updated!!");
        this.messageService.add({severity:'success', summary: 'Success', detail:'Successfully Updated!!'});
        this.rout.navigateByUrl('doctor/doctor-medicine');
      })
    }
    else{
      if(this.medicineForm.valid){
        this.medicineService.addMedicine(this.medicineForm.value).subscribe(res => {
          this.messageService.add({severity: 'success',summary: 'Success',detail: 'Successfully Added Medicine!!',});
          console.log(res);
          this.rout.navigateByUrl('doctor/doctor-medicine');
        })
      }
      else{
        this.messageService.add({severity:'info', summary: 'Info', detail: 'Please Enter All Fields!!'});
      }
    }
  }
}
