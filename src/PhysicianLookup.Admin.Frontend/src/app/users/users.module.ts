import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersService } from './users.service';
import { SharedModule } from '../_shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, EditUserComponent],
  providers: [
    UsersService
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsersModule { }
