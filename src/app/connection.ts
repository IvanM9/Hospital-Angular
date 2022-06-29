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
            
            this.clientHttp.post(this.api + route, data).subscribe(resp => { this.aux = resp; });
            return this.aux;
        } catch (error) {
            return null;
        }
    }

    put(route: string, data: any) {
        try {
            
            this.clientHttp.put(this.api + route, data).subscribe(resp => { this.aux = resp; });
            return this.aux;
        } catch (error) {
            return null;
        }
    }

    delete(route: string) {
        try {
            
            this.clientHttp.delete(this.api + route).subscribe(resp => { this.aux = resp; });
            return this.aux;
        } catch (error) {
            return null;
        }
    }
}
