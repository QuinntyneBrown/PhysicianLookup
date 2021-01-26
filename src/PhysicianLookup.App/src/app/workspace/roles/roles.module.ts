import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { RolesRoutingModule } from './roles-routing.module';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { RolesService } from './roles.service';
import { SharedModule } from '../_shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RolesComponent, EditRoleComponent],
  providers: [
    RolesService
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RolesModule { }
