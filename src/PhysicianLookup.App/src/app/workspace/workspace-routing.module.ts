import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { WorkspaceComponent } from "./workspace/workspace.component";
import { RoleListComponent } from "./roles/role-list/role-list.component";
import { UserListComponent } from "./users/user-list/user-list.component";
import { PhysicianListComponent } from "./physicians/physician-list/physician-list.component";


const routes: Routes = [
  { 
    path: "", component: WorkspaceComponent,
    children: [
      { path: "", component: PhysicianListComponent },
      { path: "users", component: UserListComponent },
      { path: "roles", component: RoleListComponent },
      { path: "physicians", component: PhysicianListComponent }  
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule {}