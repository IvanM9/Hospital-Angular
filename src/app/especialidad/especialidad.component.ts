import { Component, OnInit } from '@angular/core';
import { Connection } from '../connection';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {

  constructor(private connection:Connection) { }

  lista:any[] = [];
  datos:any={};
  ngOnInit(): void {
    this.connection.post("especialidades",null).subscribe(res => {
      let aux: any = Object.assign({}, res);
      this.lista= Object.values(aux.data);
      console.log(this.lista)
    }, err => {console.log(err)});
    this.resetDatos();
  }

  resetDatos(){
    this.datos={"id":0,"descripcion":"", "estado":1, "nombre_especialidad":"", "fecha_registro":"", "fecha_modificacion":""};
  }
  eliminar(id:number){
    this.connection.delete("especialidad/"+id).subscribe(res => {
      console.log(res)
      this.ngOnInit();
    }, err => {console.log(err)});
  }

  seleccionar(datos:any){
    console.log(datos);
    this.datos=datos;
  }

  editar(){
    this.connection.put("especialidad",this.datos).subscribe(res => {
      console.log(res)
      this.ngOnInit();
    }, err => {console.log(err)});
    this.resetDatos();
  }

  agregar(){
    this.connection.post("crear-especialidad",this.datos).subscribe(res => {
      console.log(res)
      this.ngOnInit();
    }, err => {console.log(err)});
    this.resetDatos();
  }
}
