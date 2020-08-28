import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/login-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("src/app/physicians/physicians.module").then(m => m.PhysiciansModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
