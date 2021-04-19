import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DiseaseService } from 'src/app/services/disease.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css'],
})
export class DiseaseComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  diseaseList: {};
  constructor(
    private diseaseService: DiseaseService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private rout: Router
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.diseaseService.listDisease().then((res) => {
      this.diseaseList = res.data;
      console.log(this.diseaseList);
    });
  }
  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.diseaseService.deleteDisease(value).subscribe((res) => {
          console.log('Disease Deleted!!');
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
