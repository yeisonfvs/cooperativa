import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { usuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../servicios/auth.service';
import { UsuarioService } from '../../servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  
  usuario: usuarioModel = new usuarioModel();
  recordarme = false;

  public formLogin!: FormGroup;

  constructor( private auth: AuthService,private router: Router, private usuarioService:UsuarioService, private formBuilder:FormBuilder) { 
    this.formLogin = this.formBuilder.group({
      nombreUsuario:['yeisonfvs',[Validators.required]],
      contrasenia:['543219',[Validators.required]]
    })
  }
  
  ngOnInit(): void {
    if ( localStorage.getItem('nombreUsuario') ) {
      this.usuario.nombreUsuario = JSON.stringify(localStorage.getItem('nombreUsuario'));
      this.recordarme = true;
    }

  }

   onSubmit( formLogin: FormGroup ) {

    console.log(this.formLogin.value)

    if ( this.formLogin.invalid ) { 
      alert('Ingrese los datos solicitados');
      return ;
    }
    this.usuarioService.login( this.formLogin.value )
      .subscribe( (resp: any) => {
        console.log(resp);
        if(resp.status){
          localStorage.setItem('token',resp.token)
          window.location.reload();
          this.router.navigate(['/'])
        } else {
          alert(resp.message)
        }
      }
    );


  

    this.auth.login( this.usuario )
      .subscribe( resp => {

        console.log(resp);
        

        if ( this.recordarme ) {
          localStorage.setItem('nombreUsuario', this.usuario.nombreUsuario);
        }


        this.router.navigateByUrl('/');

      }, (err) => {

        console.log(err.error.error.message);
        // Swal.fire({
        //   type: 'error',
        //   title: 'Error al autenticar',
        //   text: err.error.error.message
        // });
      });

  }
}



 
 

