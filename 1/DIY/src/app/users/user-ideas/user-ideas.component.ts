import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-ideas',
  templateUrl: './user-ideas.component.html',
  styleUrls: ['./user-ideas.component.css'],
})
export class UserIdeasComponent implements OnInit {
  user: User | undefined | any;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['userId'];
    console.log(id);

    this.userService.getUsersIdeas(id).subscribe((user) => {
      this.user = user;
      console.log({ user });
    });
  }
}
