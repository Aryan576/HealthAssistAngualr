import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
})
export class MedicineComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  medicineList: {};
  constructor(
    private medicineService: MedicineService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private rout: Router
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.medicineService.listMedicine().then((res) => {
      this.medicineList = res.data;
    });
  }

  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.medicineService.deleteMedicine(value).subscribe((res) => {
          console.log('Medicine Deleted!!');
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
