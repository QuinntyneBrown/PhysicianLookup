import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { WorkspaceComponent } from "./workspace/workspace.component";
import { PhysiciansComponent } from "./physicians/physicians/physicians.component";


const routes: Routes = [
  { 
    path: "", component: WorkspaceComponent,
    children: [
      { path: "", component: PhysiciansComponent }  
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule {}