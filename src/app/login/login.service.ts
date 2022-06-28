import { Injectable } from '@angular/core';
import { Connection } from '../connection';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private connection: Connection) { }

  login(credentials: any) {
    let aux = this.connection.post("login", credentials);
    if (!aux)
      return "Error de conexión";
    return aux;
  }
}
