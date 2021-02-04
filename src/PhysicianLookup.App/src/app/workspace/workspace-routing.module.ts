import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { WorkspaceComponent } from "./workspace/workspace.component";
import { PhysiciansComponent } from "./physicians/physicians/physicians.component";
import { RoleListComponent } from "./roles/role-list/role-list.component";
import { UserListComponent } from "./users/user-list/user-list.component";


const routes: Routes = [
  { 
    path: "", component: WorkspaceComponent,
    children: [
      { path: "", component: PhysiciansComponent },
      { path: "users", component: UserListComponent },
      { path: "roles", component: RoleListComponent },
      { path: "physicians", component: PhysiciansComponent }  
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule {}