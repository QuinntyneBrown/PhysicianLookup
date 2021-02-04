import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace/workspace.component';
import { RouterModule } from '@angular/router';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PhysiciansModule } from './physicians/physicians.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';


@NgModule({
  declarations: [WorkspaceComponent],
  imports: [
    PhysiciansModule,
    UsersModule,
    RolesModule,
    WorkspaceRoutingModule,
    CommonModule,
    RouterModule,
    SharedModule,
  ]
})
export class WorkspaceModule { }