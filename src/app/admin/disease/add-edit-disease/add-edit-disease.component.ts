import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Disease } from 'src/app/interface/disease';
import { DiseaseService } from 'src/app/services/disease.service';

@Component({
  selector: 'app-add-edit-disease',
  templateUrl: './add-edit-disease.component.html',
  styleUrls: ['./add-edit-disease.component.css'],
})
export class AddEditDiseaseComponent implements OnInit {
  diseaseForm: FormGroup;
  diseaseData:Disease
  id = 0
  constructor(
    private diseaseService: DiseaseService,
    private messageService: MessageService,
    private rout: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params.diseaseId

    this.diseaseService.getDiseaseById(this.id).subscribe(res => {
      this.diseaseData = res.data

      this.diseaseForm = new FormGroup({
        diseaseId: new FormControl(this.diseaseData.diseaseId, Validators.required),
        diseaseName: new FormControl(this.diseaseData.diseaseName, Validators.required),
      });
    })
    this.diseaseForm = new FormGroup({
      diseaseName: new FormControl('', Validators.required),
    });
  }

  submit() {
    if(this.id){
      this.diseaseService.updateDisease(this.diseaseForm.value).subscribe(res =>{
        this.messageService.add({severity:'success', summary: 'Success', detail:'Successfully Updated!!'});
        console.log("Disease Updated");
        this.rout.navigateByUrl('admin/disease');
      })
    }
    else{
      if(this.diseaseForm.valid){
        this.diseaseService.addDisease(this.diseaseForm.value).subscribe(res =>{
          this.messageService.add({severity: 'success',summary: 'Success',detail: 'Successfully Added disease!!',});
          console.log(res);
          this.rout.navigateByUrl('admin/disease');
        })
      }
      else{
        this.messageService.add({severity:'info', summary: 'Info', detail: 'Please Enter All Fields!!'});

      }
    }
  }
}
