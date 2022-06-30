import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioPersonasService } from '../servicio-personas.service';

@Component({
  selector: 'app-editar-personas',
  templateUrl: './editar-personas.component.html',
  styleUrls: ['./editar-personas.component.css']
})
export class EditarPersonasComponent implements OnInit {

  constructor(private service:ServicioPersonasService, private router: Router) { }

  public static persona:any;

  datos: any = { 
    "cedula": "",
    "apellidos": "",
    "nombres": "",
    "tipo_persona": 1,
    "especialidad": 1,
    "celular": "",
    "correo": "",
    "fecha_nacimiento": "",
    "genero": "",
    "ocupacion": "",
    "tipo_sangre": "",
    "ciudad": "",
    "password": ""
  };

  format_fecha_nacimiento: string="";

  ngOnInit(): void {
    this.format_fecha_nacimiento=EditarPersonasComponent.persona.fecha_nacimiento;
    this.format_fecha_nacimiento= this.format_fecha_nacimiento.substring(0,10);
    console.log(EditarPersonasComponent.persona);
    this.datos.cedula=EditarPersonasComponent.persona.cedula;
    this.datos.apellidos=EditarPersonasComponent.persona.apellidos;
    this.datos.nombres=EditarPersonasComponent.persona.nombres;
    this.datos.tipo_persona=EditarPersonasComponent.persona.tipo_persona;
    this.datos.especialidad=EditarPersonasComponent.persona.especialidad;
    this.datos.celular=EditarPersonasComponent.persona.celular;
    this.datos.correo=EditarPersonasComponent.persona.correo;
    this.datos.fecha_nacimiento= this.format_fecha_nacimiento;
    this.datos.genero=EditarPersonasComponent.persona.genero;
    this.datos.ocupacion=EditarPersonasComponent.persona.ocupacion;
    this.datos.tipo_sangre=EditarPersonasComponent.persona.tipo_sangre;
    this.datos.ciudad=EditarPersonasComponent.persona.ciudad;
    this.datos.password=EditarPersonasComponent.persona.password;
  }

  editar_persona(): void {
    if(this.datos.cedula!="" && this.datos.apellidos!="" && this.datos.tipo_persona!="" && this.datos.correo!="" 
    && this.datos.fecha_nacimiento!="" && this.datos.genero!="" && this.datos.ocupacion!="" && this.datos.tipo_sangre!="" 
    && this.datos.ciudad!="" && this.datos.password!="" && this.datos.especialidad!="" && this.datos.celular!=""){
      this.service.editar_personas(this.datos).subscribe(resp => { 
        console.log(resp);
      });
      this.router.navigateByUrl("/listar-personas");
    }
  }
}
