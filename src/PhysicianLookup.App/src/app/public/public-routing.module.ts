import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PublicComponent } from "./public/public.component";
import { LandingComponent } from "./landing/landing.component";


const routes: Routes = [
  { 
    path: "", 
    component: PublicComponent,
    children: [
      { path: "", redirectTo:"home" },
      { path: "home", component: LandingComponent }
    ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}