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
    if(this.credentials.cedula.length > 0 || this.credentials.password.length > 0){

      this.loginService.post("login", this.credentials).subscribe(res => {
        let aux: any = Object.assign({}, res);
        console.log(aux)
        if(aux.status!="success"){
          alert("Login failed");
        }else{
          sessionStorage.setItem("token_id", aux.data);
          this.route.navigate(["/dashboard"]);
        }
      }, err => {console.log(err)});
    }
    else{
      alert("LLene todos los campos")
    }

  }
}
