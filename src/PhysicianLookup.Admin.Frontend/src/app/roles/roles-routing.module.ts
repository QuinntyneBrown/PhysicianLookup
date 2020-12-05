import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { EditRoleComponent } from './edit-role/edit-role.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  { path: "", component: RolesComponent },
  { path: "create", component: EditRoleComponent },
  { path: "edit/:id", component: EditRoleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule {}
