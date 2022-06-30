import { Injectable } from '@angular/core';
import { Connection } from '../connection';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private connection: Connection) { }

  async login(credentials: any) {
    try {
      
      let aux = await this.connection.post("login", credentials);
      
      return aux;
    } catch (error) {
      return "Error";
    }
  }
}
