import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewIdeaComponent } from "./new-idea/new-idea.component";
import { ListIdeaComponent } from "./list-idea/list-idea.component";
import { DetailsIdeaComponent } from "./details-idea/details-idea.component";
import { UpdateIdeaComponent } from "./update-idea/update-idea.component";
import { AuthActivate } from "../core/guards/auth.activate";


const routes: Routes = [
    
       
            {
                path: "catalog",
                component: ListIdeaComponent,
            },
            {
                path: "create",
                component: NewIdeaComponent,
                canActivate: [AuthActivate]
            },
            {
                path: ":ideaId/details",
                component: DetailsIdeaComponent,
                // canActivate: [AuthActivate]
            },
            {
                path: ":ideaId/update",
                component: UpdateIdeaComponent,
                canActivate: [AuthActivate]
            }
        
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IdeaRoutingModule {}