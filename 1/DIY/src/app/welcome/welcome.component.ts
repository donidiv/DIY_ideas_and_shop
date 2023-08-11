import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { User } from '../types/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  user: User | undefined | any

  constructor(private userService: UserService) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.userService.getUserIdeas().subscribe((user) => {
      this.user = user;
      console.log({ user });
    })
  }

}
