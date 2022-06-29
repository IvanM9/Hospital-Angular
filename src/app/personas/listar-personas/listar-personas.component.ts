import { Component, OnInit } from '@angular/core';
import { ServicioPersonasService } from '../servicio-personas.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css'],
})
export class ListarPersonasComponent implements OnInit {
  constructor(private serv_person: ServicioPersonasService) {}

  Personas: any;
  ngOnInit(): void {
    this.serv_person.listar_personas()?.subscribe(response => {
      this.Personas = response;
    });
  }

  editapersona(cedula: any) {}

  borrarregistro(cedula: any) {}
}
