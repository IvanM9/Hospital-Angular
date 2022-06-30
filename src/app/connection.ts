import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Connection {
    api: string;
    private aux:any = {};
    constructor(private clientHttp: HttpClient) {
        this.api = environment.api;
    }

    get(route: string) {
        try {
            return this.clientHttp.get(this.api+route);
        } catch (error) {
            return null;
        }
    }

    post(route: string, data: any) {
        try {
            
            return this.clientHttp.post(this.api + route, data);
            
        } catch (error) {
            return null;
        }
    }

    put(route: string, data: any) {
        try {
            
            return this.clientHttp.put(this.api + route, data);
        } catch (error) {
            return null;
        }
    }

    delete(route: string,datos:any) {
        try {
            console.log(datos);
            return this.clientHttp.delete(this.api + route+"/"+datos);
        } catch (error) {
            return null;
        }
    }
}
