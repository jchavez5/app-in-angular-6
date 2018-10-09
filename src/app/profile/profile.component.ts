import { AutenticationService } from './../services/autentication.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  constructor(private userService:UserService,
              private autenticationService:AutenticationService) {
                this.autenticationService.getStatus().subscribe(
                  (status)=>{
                    this.userService.getUserById(status.uid).valueChanges().subscribe(
                      (data:User)=>{
                        this.user=data;
                        console.log(this.user);
                      },(error)=>{
                        console.log(error);
                      }
                    )
                  },
                  (error)=>{
                    console.log(error);
                    
                  }
                );
   }

  ngOnInit() {
  }
  saveSettings(){
    this.userService.editUser(this.user).then(()=>{
      alert('cambios guardados!');
    }).catch((error)=>{
      alert('Hubo un error');
      console.log(error);
      
    });
  }
}
