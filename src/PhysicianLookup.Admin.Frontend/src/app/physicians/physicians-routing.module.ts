import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PhysiciansComponent } from './physicians/physicians.component';


const routes: Routes = [{ path: "", component: PhysiciansComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysiciansRoutingModule {}