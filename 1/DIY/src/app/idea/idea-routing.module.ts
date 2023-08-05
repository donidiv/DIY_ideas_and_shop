import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewIdeaComponent } from "./new-idea/new-idea.component";
import { ListIdeaComponent } from "./list-idea/list-idea.component";
import { DetailsIdeaComponent } from "./details-idea/details-idea.component";
import { UpdateIdeaComponent } from "./update-idea/update-idea.component";


const routes: Routes = [
    {
        path: "ideas",
        children: [
            {
                path: "catalog",
                component: ListIdeaComponent,
            },
            {
                path: "create",
                component: NewIdeaComponent,
                //todo canActivate??
            },
            {
                path: ":ideaId/details",
                component: DetailsIdeaComponent
            },
            {
                path: ":ideaId/update",
                component: UpdateIdeaComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IdeaRoutingModule {}