import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { usuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../servicios/auth.service';
import {UsuarioService} from '../../servicios/usuario.service'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario!: usuarioModel;
  

  public formRegistro: FormGroup 

  constructor(private usuarioservice:UsuarioService, private auth: AuthService, private router: Router, private formBuilder:FormBuilder) { 

    this.formRegistro = this.formBuilder.group({
      nombres:['',[Validators.required]],
      apellidos:['', [Validators.required]],
      identificacion:['', [ Validators.required] ],
      tipoIdentificacion:['', [ Validators.required] ],
      direccion:['', [ Validators.required] ],
      correo:['', [ Validators.required] ],
      telefono:['',[Validators.required ]],
      nombreUsuario:['',[Validators.required, ]],
      contrasena:['',  [  Validators.required ]] ,
      confirmarContrasena:['', [ Validators.required]],
     
    })
  }    
         
        
  ngOnInit(): void {
    this.usuario= new usuarioModel();

    
    
    
  }

  onSubmit( formRegistro: FormGroup ) {

    console.log(this.formRegistro.value)

    if ( this.formRegistro.invalid ) { 
      alert('Ingrese los datos solicitados');
      return ;
    }

   

    this.usuarioservice.register( this.formRegistro.value )
      .subscribe( resp => {
        console.log(resp);
        
      }
    );
      
      
  }


}



