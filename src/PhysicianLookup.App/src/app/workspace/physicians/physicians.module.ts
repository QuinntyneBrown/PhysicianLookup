import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysiciansComponent } from './physicians/physicians.component';
import { PhysiciansService } from './physicians.service';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddressesModule } from '../addresses/addresses.module';
import { PhysicianEditorComponent } from './physician-editor/physician-editor.component';
import { PhysicianComponent } from './physician/physician.component';

@NgModule({
  declarations: [PhysiciansComponent, PhysicianEditorComponent, PhysicianComponent],
  providers: [
    PhysiciansService
  ],
  imports: [
    AddressesModule,
    CommonModule,

    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PhysiciansModule { }
