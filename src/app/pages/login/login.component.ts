import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { debounce } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   //object for active vissible
   isSignDivVisible: boolean = true;

   constructor(private router:Router){}

   //object
   sigUpObj: SignUpModel = new SignUpModel();
   loginObj: LoginModel = new LoginModel();

   //functions or methods for storing the data in the local storage
   onRegister(){
    debugger;
    //first read the data in the storage
    const localusers=localStorage.getItem('serverSample');
    if(localusers!=null){
      //convert array into string
      const users=JSON.parse(localusers);
      //then push the user to the sorage
      users.push(this.sigUpObj);
      //then store the user to the localsorage
      localStorage.setItem('serverSample',JSON.stringify( users));
    }
    //for the first time youre register the users
    else{
      //create an empty array
      const users=[];
      users.push(this.sigUpObj);
      localStorage.setItem('serverSample',JSON.stringify(users));
    }
    alert('registration success');
   }
//method or function for the login
   onLogin(){
    debugger;
    //first ready the data 
    const localusers=localStorage.getItem('serverSample');
    if(localusers!=null){
      const users=JSON.parse(localusers);
      //find the user in  the serve
      const isUserPresent=users.find((user:SignUpModel)=>user.email==this.loginObj.email &&user.password==this.loginObj.password);
      if(isUserPresent!=undefined){
        alert('user Found ...');
        // storage the logged user 
        localStorage.setItem('loggeduser',JSON.stringify(isUserPresent));
        //after found allowed to navigate to another page
        this.router.navigateByUrl('/dashboard');

      }
      else{
        alert('user not Register...');
      }
    }

   }
}
export class SignUpModel {
  name: string;
  email: string;
  password: string;
  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
export class LoginModel {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}