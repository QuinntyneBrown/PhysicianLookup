import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { WorkspaceComponent } from "./workspace/workspace.component";
import { PhysiciansComponent } from "./physicians/physicians/physicians.component";
import { UsersModule } from "./users/users.module";
import { RolesComponent } from "./roles/roles/roles.component";
import { UsersComponent } from "./users/users/users.component";


const routes: Routes = [
  { 
    path: "", component: WorkspaceComponent,
    children: [
      { path: "", component: PhysiciansComponent },
      { path: "users", component: UsersComponent },
      { path: "roles", component: RolesComponent },
      { path: "physicians", component: PhysiciansComponent }  
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule {}