import { Component, OnInit } from '@angular/core';


interface Documento {
  id?: number;
  nombre: string;
  tipo: string;
  fechaRegistro: number;
  ruta: string;
  empleado: string;
  cliente: string;

}

const DOCUMENTO: Documento[] = [
  {
    
    nombre: 'Russia',
    tipo: 'f/f3/Flag_of_Russia.svg',
    fechaRegistro: 17075200,
    ruta:'rutaprueba',
    empleado: 'yeison',
    cliente: 'samir',
  },
  {
    nombre: 'France',
    tipo: 'c/c3/Flag_of_France.svg',
    fechaRegistro: 640679,
    ruta: 'rutaprueba',
    empleado: 'jose',
    cliente:'pedro'
  },
  {
    nombre: 'Germany',
    tipo: 'b/ba/Flag_of_Germany.svg',
    ruta: 'rutaprueba',
    fechaRegistro: 357114,
    empleado: 'maria',
    cliente: 'laura'
  },
 
];

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = DOCUMENTO.length;
  documentos = DOCUMENTO;

  constructor() {
    this.refreshCountries();
  }

  ngOnInit(){}

  refreshCountries() {
    // this.countries = COUNTRIES
    //   .map((country, i) => ({id: i + 1, ...country}))
    //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
