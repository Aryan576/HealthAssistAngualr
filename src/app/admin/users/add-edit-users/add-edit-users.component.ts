import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Users } from 'src/app/interface/users';
import { RoleService } from 'src/app/services/role.service';
import { SignupLoginService } from 'src/app/services/signup-login.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-edit-users',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.css'],
})
export class AddEditUsersComponent implements OnInit {
  userForm: FormGroup;
  listRole: {};
  id=0;
  userData:Users

  constructor(
    private roleService: RoleService,
    private userService: UsersService,
    private rout: Router,
    private messageService: MessageService,
    private route:ActivatedRoute,
    public signupService:SignupLoginService
  ) {}

  ngOnInit(): void {
    this.roleService.listRole().then((res) => {
      this.listRole = res.data;
    });

    this.id = this.route.snapshot.params.userId;

    console.log("id"+this.id);

    this.userService.getUserById(this.id).then(res => {
      this.userData = res.data;

      this.userForm = new FormGroup({
        userId:new FormControl(this.userData.userId,Validators.required),
        firstName:new FormControl(this.userData.firstName,Validators.required),
        lastName:new FormControl(this.userData.lastName,Validators.required),
        email:new FormControl(this.userData.email,Validators.required),
        password:new FormControl(this.userData.password,Validators.required),
        gender:new FormControl(this.userData.gender,Validators.required),
        roleId:new FormControl(this.userData.roleId,Validators.required),
        status:new FormControl(this.userData.status,Validators.required)
      })
    })


    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      roleId: new FormControl('', Validators.required),
      status:new FormControl('',Validators.required)

    });
  }

  submit() {
    if(this.id){
      console.log("data ",this.userForm.value);

      this.userService.updateUser(this.userForm.value).subscribe(res => {
        this.messageService.add({severity: 'success',summary: 'Success',detail: 'Updated Signup!!'});
        this.rout.navigateByUrl('admin/users');

      })
    }
    else{
      if (this.userForm.valid) {
        this.userService.adminAddUsers(this.userForm.value).subscribe((res) => {
          console.log(res);
          if (res.status == 200) {
            this.messageService.add({severity: 'success',summary: 'Success',detail: 'Successfully Signup!!'});
            console.log(res.data);
            this.rout.navigateByUrl('admin/users');
          } else {
            console.log(res);
            this.messageService.add({severity:'warn', summary: 'Warn', detail: 'You have already registered!!'});
          }
        });
      } else {
        this.messageService.add({
          severity: 'info',summary: 'Info',detail: 'Please Enter All Fields!!'});
      }
    }
  }
}
