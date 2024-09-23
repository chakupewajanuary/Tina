import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedUser:any;
  constructor(private router:Router){
    const localUser=localStorage.getItem('loggeduser');
    if( localUser!=null){
      this.loggedUser=JSON.parse(localUser);
      
    }
  }

  onlogoff(){
    localStorage.removeItem('loggeduser');
    this.router.navigateByUrl('/login');
  }
}
