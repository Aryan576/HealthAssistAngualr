import { Component } from '@angular/core';
import { SignupLogin } from './interface/signup-login';
import { SignupLoginService } from './services/signup-login.service';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HealthAssist';

  constructor(public userData:UserdataService){}

  ngOnInit(){

  }
  
}
