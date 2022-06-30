import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioPersonasService } from '../servicio-personas.service';

@Component({
  selector: 'app-agrega-persona',
  templateUrl: './agrega-persona.component.html',
  styleUrls: ['./agrega-persona.component.css']
})
export class AgregaPersonaComponent implements OnInit {

  constructor(private service: ServicioPersonasService, private router: Router) { }

  datos: any = { 
    "cedula": "",
    "apellidos": "",
    "nombres": "",
    "tipo_persona": "",
    "especialidad": "",
    "celular": "",
    "correo": "",
    "fecha_nacimiento": "",
    "genero": "",
    "ocupacion": "",
    "tipo_sangre": "",
    "ciudad": "",
    "password": ""
  };

  ngOnInit(): void {
  }

  agregar_persona(): void {
    console.log(this.datos);
    if(this.datos.cedula!="" && this.datos.apellidos!="" && this.datos.tipo_persona!="" && this.datos.correo!="" 
    && this.datos.fecha_nacimiento!="" && this.datos.genero!="" && this.datos.ocupacion!="" && this.datos.tipo_sangre!="" 
    && this.datos.ciudad!="" && this.datos.password!="" && this.datos.especialidad!="" && this.datos.celular!=""){
      this.service.insertar_personas(this.datos).subscribe(resp => { 
        console.log(resp);
      });
      this.router.navigateByUrl("/listar-personas");
    }
  }

}
