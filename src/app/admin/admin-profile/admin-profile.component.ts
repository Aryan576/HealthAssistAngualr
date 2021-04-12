import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/interface/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  adminData : Users
  id=0
  constructor(private route: ActivatedRoute,private userService:UsersService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.userId;
    console.log("id "+this.id);

    this.userService.getUserById(this.id).then(res => {
      this.adminData = res.data
    })
  }

}
