import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Pharmacy } from 'src/app/interface/pharmacy';
import { PharmacyService } from 'src/app/services/pharmacy.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css'],
})
export class PharmacyComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listPharmacy: {};
  AssignUserPharmacy: {};
  AssignUserPharmacyForm: FormGroup;
  id = 0;
  pharmacyData: Pharmacy;

  constructor(
    private pharmacyService: PharmacyService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private rout: Router
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.id = this.route.snapshot.params.pharmacyId;
    console.log(this.id);

    this.pharmacyService.getPharmacyById(this.id).then((res) => {
      this.pharmacyData = res.data;

      console.log('AssignUserPharmacy.... ', this.id);

      this.AssignUserPharmacyForm = new FormGroup({
        pharmacyId: new FormControl(
          this.pharmacyData.pharmacyId,
          Validators.required
        ),
        userId: new FormControl('', Validators.required),
      });
    });

    this.pharmacyService.listPharmacy().then((res) => {
      this.listPharmacy = res.data;
    });

    this.pharmacyService.listAssignUserPharmacyById().then((res) => {
      this.AssignUserPharmacy = res.data;
      console.log('D' + res.data);
    });
  }

  submit() {
    this.pharmacyService
      .addUserPharmacy(this.AssignUserPharmacyForm.value)
      .subscribe((res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.msg,
        });
      });
    console.log(this.AssignUserPharmacyForm.value);
  }

  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.pharmacyService.deletePharmacy(value).subscribe((res) => {
          console.log('Deleted!!');
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
  }
}
