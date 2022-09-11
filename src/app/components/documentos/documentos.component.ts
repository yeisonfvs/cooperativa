import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import {DocumentosService} from '../../servicios/documentos.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

    documentos:any;

    constructor(private DocumentosService:DocumentosService, private router:Router) {}
    //this.refreshCountries();
    ngOnInit(): void{
      this.listarDocumentos();
     
    }

    listarDocumentos()
   {
    this.DocumentosService.getDocumentos().subscribe(
      res=>{
        this.documentos = res;
        console.log(res)
      },
      err => console.log(err)
      );
    }
   
   editar(id:number){
   this.router.navigate(['documentos/editar'+id])
   }

   eliminar(id:number)
   {
    this.DocumentosService.deleteDocumento(id).subscribe(
      res=>{
        console.log('documento eliminado');
        this.listarDocumentos();
      },
      err=>console.log(err)
    );
   }
    
  

  




  //refreshCountries() {
    // this.countries = COUNTRIES
    //   .map((country, i) => ({id: i + 1, ...country}))
    //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  //}

}
