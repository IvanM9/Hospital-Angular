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

  async login() {
    if (this.credentials.cedula.length > 0 && this.credentials.password.length > 0) {
      let aux = await this.loginService.login(this.credentials);
      console.log(aux);
    } else
      alert("Ingrese los datos");
  }

}
