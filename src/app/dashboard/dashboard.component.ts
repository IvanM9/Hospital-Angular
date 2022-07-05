import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }
  componente:number = 0;
  ngOnInit(): void {
    console.log(sessionStorage.getItem("token_id"))
    if(sessionStorage.getItem("token_id")==undefined){
      this.route.navigate(["/login"]);
    }
  }

  cambiarComponente(componente:number){
    this.componente = componente;
  }

}
