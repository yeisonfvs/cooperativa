import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  url = 'http://localhost:3001/api/documentos'
  constructor(private http: HttpClient) { }

  //get documentos
  getDocumentos()
  {
    return this.http.get(this.url);
  }


 //get un documento
 getDocumentoId(id:number): Observable<any>{
  return this.http.get(this.url+'/editar'+id);
 }
 //addDocumento
 addDocumento(documento:Documento){
  return this.http.post(this.url, documento)
 }

 //eliminar
 deleteDocumento(id:number){
  return this.http.delete(this.url+'/'+id);
 }

 //modificar
 editDocumento(id: number, data: any ) : Observable<any>{
  return this.http.put(this.url+'/editar/:id'+id, data);
 }
}

export interface Documento{
 
  
  id_archivo?: number;
  fecha_registro: number; 
  id_empleado: number;
  tipo: string;
  nombre: string;
  ruta: string;
  id_cliente: number;
  
  
  
}