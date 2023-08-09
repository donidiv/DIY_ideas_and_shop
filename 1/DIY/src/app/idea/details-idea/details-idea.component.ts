import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/types/idea';
import { IdeaService } from '../idea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-idea',
  templateUrl: './details-idea.component.html',
  styleUrls: ['./details-idea.component.css'],
})
export class DetailsIdeaComponent implements OnInit {

  form = this.fb.group({
    comment: ['', [Validators.required, Validators.minLength(10)]],
  })



  idea: Idea | undefined;
  isLiked: boolean | undefined;
  // jwtToken: string =
  userIdCookies: string | undefined;
  isOwner: boolean | undefined;

  constructor(
    private ideaService: IdeaService,
    private cookieService: CookieService,
    private activatedRoute: ActivatedRoute,
    // private userService: UserService,
    private router: Router,
    private fb: FormBuilder

  ) {}

  //todo maybe?
  // get isLogged():boolean{
  //   return this.userService.isLogged;
  // }

  likeHandler(): void {
    const id = this.activatedRoute.snapshot.params['ideaId'];

    this.ideaService.likeIdea(id).subscribe(() => {
      //this.isLiked = true;
      this.fetchIdea();
    });
  }

  dislikeHandler(): void {
    const id = this.activatedRoute.snapshot.params['ideaId'];
    this.ideaService.dislikeIdea(id).subscribe(() => {
      //this.isLiked = false;
      this.fetchIdea();
    });
  }

  ngOnInit(): void {
    this.fetchIdea();
  }

  checkOwner(cookie: any): void {
    this.userIdCookies = JSON.parse(cookie.replace('j:', ''))._id;
    console.log(JSON.parse(cookie.replace('j:', '')), 'cookie');
    console.log(this.idea?._ownerId._id);
    console.log(this.userIdCookies);

    this.isOwner = this.idea?._ownerId._id == this.userIdCookies ? true : false;
    console.log(this.isOwner);
    let arr = this.idea?.likes as [] as string[];
    console.log(arr);
    let userID = this.userIdCookies as string | never;

    this.isLiked = arr.includes(userID);
  }
  // checkLiked(cookie: any): void {
  //   this.userIdCookies = JSON.parse(cookie.replace('j:', ''))._id;
  //   console.log(JSON.parse(cookie.replace('j:', '')), 'cookie');
  //   console.log(this.idea?._ownerId._id);
  //   console.log(this.userIdCookies);
  //   console.log();
  // }

  fetchIdea(): void {
    const id = this.activatedRoute.snapshot.params['ideaId'];
    console.log(id);

    this.ideaService.getIdea(id).subscribe((idea) => {
      this.idea = idea;
      console.log({ idea });

      const cookie = this.cookieService.get('cookie');

      if (cookie) {
        this.checkOwner(cookie);
      } else {
        this.isOwner = true; //after auth REMOVE!!!! replace with isLogged type thing
      }
    });
  }

  deleteIdea(): void {
    const id = this.activatedRoute.snapshot.params['ideaId'];
    this.ideaService.deleteIdea(id).subscribe((idea) => {
      console.log(idea);
    });
    console.log(id);

    this.router.navigate(['/ideas/catalog']);
  }

  buyIdea(): void {
    const id = this.activatedRoute.snapshot.params['ideaId'];
    this.ideaService.buyIdea(id).subscribe((idea) => {
      console.log(idea);
      this.fetchIdea();
    });
    console.log(id);
  }

  commentIdea(): void {

    if(this.form.invalid){
      console.log('invalid');
      return
    }
    console.log('valid');
    
    const {comment} = this.form.value;


    const id = this.activatedRoute.snapshot.params['ideaId'];
    this.ideaService.commentIdea(id, comment as string).subscribe((idea) => {
      console.log(idea);
      this.fetchIdea();
    });
    console.log(id);
  }
}
