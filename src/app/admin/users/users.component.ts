import { Component, OnInit } from '@angular/core';
import { StatusserviceService } from 'src/app/services/statusservice.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listUser:{}
  constructor(public statusService:StatusserviceService,private usersService:UsersService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.usersService.listSignup().then(res => {
      this.listUser = res.data
      console.log("Us"+this.listUser);

    })
  }

  delete(value){
    this.usersService.deleteUser(value).subscribe(res => {
      console.log("User deleted!!");

    })
  }
}
