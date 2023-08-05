import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/types/idea';
import { IdeaService } from '../idea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/users/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-idea',
  templateUrl: './update-idea.component.html',
  styleUrls: ['./update-idea.component.css']
})
export class UpdateIdeaComponent implements OnInit {

  
  idea: Idea | undefined;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required, Validators.minLength(15)]],
    img: [
      '',
      [
        Validators.required,
        Validators.pattern('^(https://www.|http://www.|https://|http://)?.*'),
      ],
    ],
    pieces: [0,[Validators.required, Validators.min(1)]],
    price: [0,[Validators.required, Validators.min(1)]],
  });

  constructor(private ideaService: IdeaService, private activatedRoute: ActivatedRoute, private userService: UserService, private fb: FormBuilder, private router: Router) {}

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
      this.idea = {... idea};

      const {name, description, img, pieces, price} = {...idea}
      console.log({name, description, img, pieces, price});
     this.form.setValue({name, description, img, pieces, price})
      
    });

  }

  editIdea(): void {
    if (this.form.invalid) {
      console.log('invalid');

      return;
    }
   
    this.ideaService
      .editIdea(this.idea?._id as string, this.form.value)
      .subscribe(() => {
        // todo navigate
        console.log(this.form.value);
      });
  }

  

}
