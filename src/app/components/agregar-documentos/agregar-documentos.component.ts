import { Component, OnInit } from '@angular/core';
import {Documento, DocumentosService} from '../../servicios/documentos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar-documentos',
  templateUrl: './agregar-documentos.component.html',
  styleUrls: ['./agregar-documentos.component.css']
})
export class AgregarDocumentosComponent implements OnInit {

  documento: Documento={
    id_archivo: 0,
    fecha_registro: 0, 
    id_empleado: 0,
    tipo:'',
    nombre: '',
    ruta: '',
    id_cliente: 0
  }; 
  

  constructor(private DocumentosService:DocumentosService, private router:Router) { 


  }
 
  ngOnInit(): void {
    
  }

  agregar(){
    delete this.documento.id_archivo;
    this.DocumentosService.addDocumento(this.documento).subscribe();
    this.router.navigate(['/documentos']);
  }

}

