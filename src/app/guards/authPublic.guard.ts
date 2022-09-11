import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthPublicGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean  {
    if ( localStorage.getItem('token') ) {
      this.router.navigateByUrl('/');
      return false;
    } else {
      return true;
    }
 
  }

}