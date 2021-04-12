import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Pathology } from 'src/app/interface/pathology';
import { PathologyService } from 'src/app/services/pathology.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css'],
})
export class PathologyComponent implements OnInit {
  isLog: boolean = false;
  id = 0;
  listUserPathology: Pathology;

  constructor(
    public userData: UserdataService,
    private rout: Router,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private pathologyService: PathologyService,
    private rut: Router
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params.pathologyId;
    console.log("id"+this.id);

    this.pathologyService.getPathologyById(this.id).then(res => {
      this.listUserPathology = res.data;
      console.log("data"+res.data);

    })

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
