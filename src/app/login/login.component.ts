import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  credentials: any = { "cedula": "", "password": "" };
  ngOnInit(): void {

  }

  login() {
    if (this.credentials.ci.length > 0 && this.credentials.password.length > 0) {
      console.log(this.loginService.login(this.credentials));
    } else
      alert("Ingrese los datos");
  }

}
