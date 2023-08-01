import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewIdeaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [
    NewIdeaComponent
  ]
})
export class IdeaModule { }
