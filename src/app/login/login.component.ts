import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { Connection } from '../connection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: Connection, private route:Router) { }

  credentials: any = { "cedula": "", "password": "" };
  ngOnInit(): void {

  }

  login() {
    this.loginService.post("login", this.credentials).subscribe(res => {
      let aux: any = Object.assign({}, res);
      console.log(aux)
        this.route.navigate(["/especialidad"]);
    }, err => {console.log(err)});
  }
}
