import { Injectable } from '@angular/core';
import { Connection } from '../connection';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonasService {

  constructor(private connection: Connection) { }

  listar_personas() {
    return this.connection.get("api/personas/listar");
  }
}
