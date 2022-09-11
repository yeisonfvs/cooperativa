import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../servicios/clientes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  clientes:any;

  constructor(private ClientesService:ClientesService, private router:Router) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes()
   {
    this.ClientesService.getClientes().subscribe(
      res=>{
        this.clientes = res;
        console.log(res)
      },
      err => console.log(err)
      );
    }
   
   editar(id:number){
   this.router.navigate(['clientes/editar'+id])
   }

   eliminar(id:number)
   {
    this.ClientesService.deleteCliente(id).subscribe(
      res=>{
        console.log('cliente eliminado');
        this.listarClientes();
      },
      err=>console.log(err)
    );
   }
    

}
