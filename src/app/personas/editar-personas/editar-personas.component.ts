import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioPersonasService } from '../servicio-personas.service';

@Component({
  selector: 'app-editar-personas',
  templateUrl: './editar-personas.component.html',
  styleUrls: ['./editar-personas.component.css']
})
export class EditarPersonasComponent implements OnInit {

  constructor(private service:ServicioPersonasService, private router: Router) { }

  @Input() persona:any;

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
    console.log(this.persona);
    this.format_fecha_nacimiento=this.persona.fecha_nacimiento;
    this.format_fecha_nacimiento= this.format_fecha_nacimiento.substring(0,10);
    this.datos.cedula=this.persona.cedula;
    this.datos.apellidos=this.persona.apellidos;
    this.datos.nombres=this.persona.nombres;
    this.datos.tipo_persona=this.persona.tipo_persona;
    this.datos.especialidad=this.persona.especialidad;
    this.datos.celular=this.persona.celular;
    this.datos.correo=this.persona.correo;
    this.datos.fecha_nacimiento= this.format_fecha_nacimiento;
    this.datos.genero=this.persona.genero;
    this.datos.ocupacion=this.persona.ocupacion;
    this.datos.tipo_sangre=this.persona.tipo_sangre;
    this.datos.ciudad=this.persona.ciudad;
    this.datos.password=this.persona.password;
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
