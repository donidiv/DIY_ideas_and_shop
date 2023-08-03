import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListIdeaComponent } from './list-idea/list-idea.component';



@NgModule({
  declarations: [
    NewIdeaComponent,
    ListIdeaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [
    NewIdeaComponent,
    ListIdeaComponent
  ]
})
export class IdeaModule { }
