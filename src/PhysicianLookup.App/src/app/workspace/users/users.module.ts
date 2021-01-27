import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [UsersComponent, UserEditorComponent, UserComponent],
  providers: [
    UsersService
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsersModule { }
