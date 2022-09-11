import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioModel } from '../models/usuario.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = '';
  private apikey = '';

  userToken: string;

  constructor( private http: HttpClient ) {
    this.userToken = '';
    this.leerToken();
    
  }


  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: usuarioModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }/login${ this.apikey }`,
      authData
    ).pipe(
      map( (resp:any)  => {
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );

  }

  nuevoUsuario( usuario: usuarioModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/registro${ this.apikey }`,
      authData
    ).pipe(
      map( (resp: any) => {
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );

  }


  private guardarToken( idToken: string ) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString() );


  }

  leerToken() {

    if ( localStorage.getItem('token') ) {
      this.userToken = JSON.stringify(localStorage.getItem('token'));
    } else {
      this.userToken = '';
    }

    return this.userToken;

  }


  estaAutenticado(): boolean {

    if ( this.userToken.length < 2 ) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }


  }


}
