import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService:AuthService) {}

  canActivate(): boolean  {
    if ( localStorage.getItem('token') ) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
 
  }

}