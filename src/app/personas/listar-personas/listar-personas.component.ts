import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditarPersonasComponent } from '../editar-personas/editar-personas.component';
import { ServicioPersonasService } from '../servicio-personas.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css'],
})
export class ListarPersonasComponent implements OnInit {
  constructor(private serv_person: ServicioPersonasService, private router: Router) {}

  Personas: any;
  fecha_format:any;
  ngOnInit(): void {
    this.serv_person.listar_personas()?.subscribe(response => {
      for (let i = 0; i < response.data.length; i++) {
        let fecha:string=response.data[i].fecha_nacimiento;
        response.data[i].fecha_nacimiento=fecha.substring(0,10);
      }      
      this.Personas = response.data;
    });
  }

  edit: any;
  cargado: boolean = false;
  editapersona(datos: any) {
    this.cargado = true;
    this.edit = datos;
    // console.log(this.edit);
  }
  cerrarEdicion(){
    this.cargado=false;
    this.edit=null;
  }
  

  borrarregistro(cedula: any) {
    this.serv_person.eliminar_personas(cedula).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    });
  }
}
