import { Component,    OnInit,  } from '@angular/core';
import { Idea } from 'src/app/types/idea';
import { IdeaService } from '../idea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/users/user.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-details-idea',
  templateUrl: './details-idea.component.html',
  styleUrls: ['./details-idea.component.css'],

})
export class DetailsIdeaComponent implements OnInit {
  idea: Idea | undefined;
  isLiked: boolean | undefined;
  // jwtToken: string = 
  userIdCookies: string | undefined;
  isOwner: boolean | undefined;
  constructor(private ideaService: IdeaService, private cookieService: CookieService,private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {}


  

     
  //todo maybe?
  // get isLogged():boolean{
  //   return this.userService.isLogged;
  // }

  likeHandler(): void {
    const id = this.activatedRoute.snapshot.params['ideaId'];
    
           
    this.ideaService.likeIdea(id).subscribe(() => {
      this.isLiked = true;
      this.fetchIdea()
    })
   

  }

  dislikeHandler(): void {
    const id = this.activatedRoute.snapshot.params['ideaId'];
    this.ideaService.dislikeIdea(id).subscribe(() => {
      this.isLiked = false;
      this.fetchIdea()
  })
    

  }

  ngOnInit(): void {
    const cookie = this.cookieService.get('cookie')
    this.userIdCookies = JSON.parse(cookie.replace('j:', ''))._id,    
    console.log(JSON.parse(cookie.replace('j:', '')), 'cookie');
    this.fetchIdea();
        
  }

  checkOwner(): void {
    console.log(this.idea?._ownerId._id);
    console.log(this.userIdCookies);
    
    
    this.isOwner = this.idea?._ownerId._id == this.userIdCookies ?  true : false
    console.log(this.isOwner);
    
  }

  fetchIdea(): void {
    const id = this.activatedRoute.snapshot.params['ideaId'];
    console.log(id);

    
    this.ideaService.getIdea(id).subscribe((idea)=>{      
      this.idea = idea;
      console.log({idea});
      this.checkOwner()
    });
  }

  deleteIdea(): void {
    const id = this.activatedRoute.snapshot.params['ideaId'];
    this.ideaService.deleteIdea(id).subscribe((idea)=>{
      console.log(idea);
      
    });
    console.log(id);
    
    this.router.navigate(['/ideas/catalog'])
  }
}

