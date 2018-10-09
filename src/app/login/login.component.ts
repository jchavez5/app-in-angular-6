import { Component, OnInit } from '@angular/core';
import {AutenticationService} from '../services/autentication.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
operation:string='login';
email:string='null';
password:string='null';
nick:string='null';
  constructor(private autenticationService: AutenticationService,
     private userService: UserService, private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.autenticationService.loginWithEmail(this.email,this.password).then(
      (data)=>{
        alert('Logeado correctamente');
        console.log(data);
        this.router.navigate(['home']);
        }).catch((error)=>{
          alert('Ocurrio un error');
          console.log(error);
          
        });
  }
  register(){
    this.autenticationService.registerWithEmail(this.email,this.password).then(
        (data)=>{
          const user={
            uid:data.user.uid,
            email:this.email,
            nick:this.nick
          };
          this.userService.createUser(user).then(
            (data2)=>{
              alert('Registrado correctamente');
              console.log(data2);              
          }).catch((error)=>{
            alert('Ocurrio un error');
            console.log(error); 
          });
        }).catch((error)=>{
          alert('Ocurrio un error');
          console.log(error);          
        });
  }
}
