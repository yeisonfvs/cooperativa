import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  login(usuario: any): Observable<any> {
    return this.http.post("http://localhost:3001/api/login", usuario);
  }

  register(data: any): Observable<any> {
    return this.http.post("http://localhost:3001/api/registro", data);
  }

 
}
