import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysiciansComponent } from './physicians/physicians.component';
import { PhysiciansRoutingModule } from './physicians-routing.module';
import { EditPhysicianComponent } from './edit-physician/edit-physician.component';
import { PhysiciansService } from './physicians.service';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhysiciansComponent, EditPhysicianComponent],
  providers: [
    PhysiciansService
  ],
  imports: [
    CommonModule,

    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PhysiciansModule { }
