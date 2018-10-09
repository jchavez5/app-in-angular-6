import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
friendId:any;
friend:User;//variable para buscar el usuario en el arreglo

  constructor(private activatedRoute:ActivatedRoute,
              private userService :UserService) {
    this.friendId=this.activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);
    this.userService.getUserById(this.friendId).valueChanges()
    .subscribe((data:User)=>{
      this.friendId=data;
    }
    ,(error)=>{
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
