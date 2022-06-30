import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from '../connection';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonasService {

  constructor(private connection: Connection) { }

  listar_personas():any {
    return this.connection.post("personas",{});
  }

  insertar_personas(datos:any):any {
    return this.connection.post("register",datos);
  }

  editar_personas(datos:any):any {
    return this.connection.put("persona",datos);
  }

  eliminar_personas(datos:any):any {
    return this.connection.delete("persona/"+datos);
  }
}
