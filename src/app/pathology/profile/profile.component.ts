import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Users } from 'src/app/interface/users';
import { UserdataService } from 'src/app/services/userdata.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  isLog: boolean = false;
  pharmacyData: Users;
  id = 0;

  constructor(
    public userData: UserdataService,
    private userService: UsersService,
    private messageService: MessageService,
    private rout: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params.userId;
    console.log('id ' + this.id);

    this.userService.getUserById(this.id).then((res) => {
      this.pharmacyData = res.data;
    });

    if (this.userData.user.email.length != 0 && this.userData.user != null) {
      this.isLog = true;
    } else {
      this.isLog = false;
    }
  }

  logout() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'User Logout Successfully!!',
    });

    this.userData.user = null;
    this.isLog = false;
    this.rout.navigateByUrl('');
  }
}
