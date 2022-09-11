import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = 'http://localhost:3001/api/clientes'
  constructor(private http: HttpClient) { }

  //get clientes
  getClientes()
  {
    return this.http.get(this.url);
  }


 //get un cliente
 getClienteId(id:number): Observable<any>{
  return this.http.get(this.url+'/'+id);
 }
 //addcliente
 addCliente(cliente:Cliente){
  return this.http.post(this.url, cliente)
 }

 //eliminar
 deleteCliente(id:number){
  return this.http.delete(this.url+'/'+id);
 }

 //modificar
 editCliente(id: number, cliente:Cliente) : Observable<any>{
  return this.http.put(this.url+'/'+id, cliente);
 }
}

export interface Cliente{
 
  
  id_cliente?: number;
  nombres: string; 
  apellidos: string;
  documento: number;
  telefono: number;
  direccion: string;
  correo: string;
  fecha_vinculacion: number;
  
  
}
