import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import {UserService} from '../services/user.service';
import {AutenticationService} from '../services/autentication.service';
import {Route, Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
friends:User[];
query:string='';
  constructor(private userService:UserService,
     private autenticationService:AutenticationService, private router: Router) {
    this.userService.getUsers().valueChanges().subscribe((data:User[])=>{
      this.friends=data;
    },
    (error)=>{
      console.log(error);
    });
  }
  

  ngOnInit() {
  }
  logout() {
    this.autenticationService.logOut().then(() => {
      alert('Sesioon Cerrada');
      this.router.navigate(['login']);
    }).catch((error) => {
      console.log(error);
    });
  }
}
