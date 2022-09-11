import { Component, OnInit } from '@angular/core';
import {Cliente, ClientesService} from '../../servicios/clientes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

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

  constructor(private ClientesService:ClientesService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.cliente.id_cliente;
    this.ClientesService.addCliente(this.cliente).subscribe();
    this.router.navigate(['/clientes']);
  }

}
