import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cooperativa';

  accessLogin = false;

  constructor(){
    
    this.accessLogin = localStorage.getItem('token') ? true : false;
    console.log(this.accessLogin);
  }
  
}
