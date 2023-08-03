import { Component, OnInit } from '@angular/core';
import {Idea} from '../../types/idea'
import{User} from '../../types/user';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-list-idea',
  templateUrl: './list-idea.component.html',
  styleUrls: ['./list-idea.component.css']
})
export class ListIdeaComponent implements OnInit{
  ideaList: Idea[] = [];
  owners: User[] = [];
  // isLoading

    constructor(private ideaService: IdeaService) {}

    // get isLogged(): boolean {
    //   return this.userService.isLogged;
    // }


  ngOnInit(): void {
    this.ideaService.getIdeas().subscribe({
      next: (ideas) => {
        console.log({ideas});
        
        this.ideaList = ideas;

        // this.isLoading = false;
      },
      error: (err) => {
        // this.isLoading = false;
        console.error(`Error: ${err}`);
        
      }
    });
  }
}
