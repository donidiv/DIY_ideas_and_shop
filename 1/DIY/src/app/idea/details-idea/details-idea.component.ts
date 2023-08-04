import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/types/idea';
import { IdeaService } from '../idea.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-details-idea',
  templateUrl: './details-idea.component.html',
  styleUrls: ['./details-idea.component.css']
})
export class DetailsIdeaComponent implements OnInit {
  idea: Idea | undefined;

  constructor(private ideaService: IdeaService, private activatedRoute: ActivatedRoute, private userService: UserService) {}

  //todo maybe?
  // get isLogged():boolean{
  //   return this.userService.isLogged;
  // }

  ngOnInit(): void {
    this.fetchIdea()
    
  }
  fetchIdea(): void {
    const id = this.activatedRoute.snapshot.params['ideaId'];
    console.log(id);
    
    this.ideaService.getIdea(id).subscribe((idea)=>{      
      this.idea = idea;
      console.log({idea});
      
    });
  }
}
