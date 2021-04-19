import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Pathology } from 'src/app/interface/pathology';
import { PathologyService } from 'src/app/services/pathology.service';

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css'],
})
export class PathologyComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listPathology: {};
  AssignUserPathology: {};
  AssignUserPathologyForm: FormGroup;
  PathologyData: Pathology;
  id = 0;

  constructor(
    private pathologyService: PathologyService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private rout: Router
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.id = this.route.snapshot.params.pathologyId;
    console.log(this.id);

    this.pathologyService.getPathologyById(this.id).then((res) => {
      this.PathologyData = res.data;

      console.log('AssignUserPathology.... ', this.id);

      this.AssignUserPathologyForm = new FormGroup({
        pathologyId: new FormControl(
          this.PathologyData.pathologyId,
          Validators.required
        ),
        userId: new FormControl('', Validators.required),
      });
    });

    this.pathologyService.listPathology().then((res) => {
      this.listPathology = res.data;
    });

    this.pathologyService.listAssignUserPathologyById().then((res) => {
      this.AssignUserPathology = res.data;
      console.log('D' + res.data);
    });
  }

  submit() {
    this.pathologyService
      .addUserPathology(this.AssignUserPathologyForm.value)
      .subscribe((res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.msg,
        });
      });
    console.log(this.AssignUserPathologyForm.value);
  }

  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.pathologyService.deletePathology(value).subscribe((res) => {
          console.log('Pathology deleted!!');
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
