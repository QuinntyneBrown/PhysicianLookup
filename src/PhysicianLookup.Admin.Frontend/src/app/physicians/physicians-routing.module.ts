import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PhysiciansComponent } from './physicians/physicians.component';
import { EditPhysicianComponent } from './edit-physician/edit-physician.component';


const routes: Routes = [
  { path: "", component: PhysiciansComponent },
  { path: "physicians/create", component: EditPhysicianComponent },
  { path: "physicians/edit/:id", component: EditPhysicianComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysiciansRoutingModule {}