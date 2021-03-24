import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Diet } from 'src/app/interface/diet';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-add-edit-diet',
  templateUrl: './add-edit-diet.component.html',
  styleUrls: ['./add-edit-diet.component.css'],
})
export class AddEditDietComponent implements OnInit {
  dietForm: FormGroup;
  dietData: Diet;
  id = 0;

  constructor(
    private dietService: DietService,
    private messageService: MessageService,
    private rout: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params.dietId;

    this.dietService.getDietById(this.id).then(res => {
      this.dietData = res.data

      this.dietForm = new FormGroup({
        dietId: new FormControl(this.dietData.dietId, Validators.required),
        dietType: new FormControl(this.dietData.dietType, Validators.required),
        dietContent: new FormControl(this.dietData.dietContent, Validators.required),
        ageGroup: new FormControl(this.dietData.ageGroup, Validators.required),
      });
    });


    this.dietForm = new FormGroup({
      dietType: new FormControl('', Validators.required),
      dietContent: new FormControl('', Validators.required),
      ageGroup: new FormControl('', Validators.required),
    });
  }

  submit() {
    if(this.id){
      this.dietService.updateDiet(this.dietForm.value).subscribe(res =>{
        this.messageService.add({severity:'success', summary: 'Success', detail:'Successfully Updated!!'});
        console.log(res);
        this.rout.navigateByUrl('dashboard/diet');
      })
    }
    else{
      if(this.dietForm.valid){
        this.dietService.addDiet(this.dietForm.value).subscribe((res) => {
          this.messageService.add({severity: 'success',summary: 'Success',detail: 'Successfully Added Diet!!',});
          console.log(res);
          this.rout.navigateByUrl('dashboard/diet');
        });
      }
      else{
        this.messageService.add({severity:'info', summary: 'Info', detail: 'Please Enter All Fields!!'});
      }
    }

  }
}
