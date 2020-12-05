import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/login-page.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './_core/auth.guard';

const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        canActivate:[AuthGuard],
        loadChildren: () => import("src/app/physicians/physicians.module").then(m => m.PhysiciansModule)
      },
      {
        path: "users",
        canActivate:[AuthGuard],
        loadChildren: () => import("src/app/users/users.module").then(m => m.UsersModule)
      },      
      {
        path: "roles",
        canActivate:[AuthGuard],
        loadChildren: () => import("src/app/roles/roles.module").then(m => m.RolesModule)
      },      
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
