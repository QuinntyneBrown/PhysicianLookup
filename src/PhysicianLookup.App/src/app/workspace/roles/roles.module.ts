import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { RolesService } from './roles.service';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoleEditorComponent } from './role-editor/role-editor.component';
import { RoleComponent } from './role/role.component';

@NgModule({
  declarations: [RolesComponent, EditRoleComponent, RoleEditorComponent, RoleComponent],
  providers: [
    RolesService
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RolesModule { }
