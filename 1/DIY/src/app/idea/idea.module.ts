import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListIdeaComponent } from './list-idea/list-idea.component';
import { IdeaRoutingModule } from './idea-routing.module';
import { DetailsIdeaComponent } from './details-idea/details-idea.component';



@NgModule({
  declarations: [
    NewIdeaComponent,
    ListIdeaComponent,
    DetailsIdeaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IdeaRoutingModule

  ],
  
  exports: [
    // NewIdeaComponent,
    // ListIdeaComponent
  ]
})
export class IdeaModule { }
