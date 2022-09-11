import { Component, OnInit } from '@angular/core';
import {Cliente, ClientesService} from '../../servicios/clientes.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = {
    id_cliente: 0,
    nombres:'' , 
    apellidos: '',
    documento:0,
    telefono: 0,
    direccion: '',
    correo:'',
    fecha_vinculacion:0
  }; 
  
  clientes: any[] = [];

  constructor(private ClientesService:ClientesService, private router:Router, private activeRoute:ActivatedRoute) { 
    const { id } = this.activeRoute.snapshot.params;
    console.log('id de entrada:'+id);

    if(id){
      this.ClientesService.getClienteId(id).subscribe(
        res =>{
          this.clientes = res;
          console.log(res);
        },
        err=>console.log(err)
      );
    }
  }
  

  ngOnInit(): void {
  }

  editar(){}

}
