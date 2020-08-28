import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysiciansComponent } from './physicians/physicians.component';
import { PhysiciansRoutingModule } from './physicians-routing.module';


@NgModule({
  declarations: [PhysiciansComponent],
  imports: [
    CommonModule,
    PhysiciansRoutingModule
  ]
})
export class PhysiciansModule { }
