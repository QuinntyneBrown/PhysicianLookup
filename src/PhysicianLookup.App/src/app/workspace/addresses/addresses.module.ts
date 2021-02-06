import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressEditorComponent } from './address-editor/address-editor.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddressEditorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    AddressEditorComponent
  ]
})
export class AddressesModule { }
