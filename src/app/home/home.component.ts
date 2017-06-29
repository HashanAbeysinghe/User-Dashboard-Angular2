import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

import {User} from './../user';
import {Person} from './../person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[];

  constructor(private userService:UserService) { 

  }

  ngOnInit() {
    this.userService.getUser().subscribe(users=>{
      this.users = users;
    })
  }

}
