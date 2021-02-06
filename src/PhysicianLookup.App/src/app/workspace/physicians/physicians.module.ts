import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicianService } from './physician.service';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddressesModule } from '../addresses/addresses.module';
import { PhysicianEditorComponent } from './physician-editor/physician-editor.component';
import { PhysicianListComponent } from './physician-list/physician-list.component';
import { PhysicianDetailComponent } from './physician-detail/physician-detail.component';

@NgModule({
  declarations: [PhysicianEditorComponent, PhysicianListComponent, PhysicianDetailComponent],
  providers: [
    PhysicianService
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
