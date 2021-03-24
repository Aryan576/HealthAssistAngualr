import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {
  isLog: boolean = false;

  constructor(private messageService: MessageService,public userData:UserdataService,private rout:Router) { }

  ngOnInit(): void {
    if(this.userData.user.email.length != 0 && this.userData.user != null){
      this.isLog = true
    }
    else{
      this.isLog = false
    }
  }
  logout(){
    this.messageService.add({severity:'success', summary: 'Success', detail:'User Logout Successfully!!'});
    this.userData.user = null
    this.isLog = false
    this.rout.navigateByUrl('');
  }
}
