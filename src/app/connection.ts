import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Connection {
    api: string;
    constructor(private clientHttp: HttpClient) {
        this.api = environment.api;
    }

    get(route: string) {
        try {
         return this.clientHttp.get(this.api + route);

        } catch (error) {
            throw new Error("error");
        }
    }

    post(route: string, data: any) {
        try {

            return this.clientHttp.post(this.api + route, data)


        } catch (error) {
            throw new Error("error");
            
        }
    }

    put(route: string, data: any) {
        try {
            return this.clientHttp.put(this.api + route, data)

        } catch (error) {
            throw new Error("error");
        }
    }

    delete(route: string) {
        try {
            return this.clientHttp.delete(this.api + route)	

        } catch (error) {
            throw new Error("error");
        }
    }
}
