import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleEditorComponent } from './role-editor/role-editor.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RoleEditorComponent, RoleListComponent, RoleDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RolesModule { }
