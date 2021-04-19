import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { StatusserviceService } from 'src/app/services/statusservice.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listUser: {};
  constructor(
    public statusService: StatusserviceService,
    private usersService: UsersService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private rout: Router
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };

    this.usersService.listSignup().then((res) => {
      this.listUser = res.data;
      console.log('Us' + this.listUser);
    });
  }

  delete(value) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersService.deleteUser(value).subscribe((res) => {
          console.log('User deleted!!');
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
