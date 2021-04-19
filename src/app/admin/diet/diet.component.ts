import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css'],
})
export class DietComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dietList: {};
  constructor(
    private dietService: DietService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private rout: Router
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.dietService.listDiet().then((res) => {
      this.dietList = res.data;
    });
  }
  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dietService.deleteDiet(value).subscribe((res) => {
          console.log('Diet Deleted!!');
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
