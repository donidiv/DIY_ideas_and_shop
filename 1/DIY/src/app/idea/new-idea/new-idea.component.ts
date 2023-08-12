import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IdeaService } from '../idea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css'],
})
export class NewIdeaComponent {
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
    pieces: [,[Validators.required, Validators.min(1)]],
    price: [,[Validators.required, Validators.min(1)]],
  });

  constructor(
    private fb: FormBuilder,
    private ideaService: IdeaService,private router: Router
  ) 
  {}

  createIdea(): void {
    if (this.form.invalid) {
      console.log('invalid');

      return;
    }

    const { name, img, description, pieces, price } = this.form.value;
    
    

    this.ideaService
      .createIdea(name!, img!, description!, pieces!, price!)
      .subscribe(() => {
        this.router.navigate(['ideas/catalog'])
        console.log(this.form.value);
      });
  }
}
