import { Component, forwardRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Physician } from '../physician';

@Component({
  selector: 'app-physician-editor',
  templateUrl: './physician-editor.component.html',
  styleUrls: ['./physician-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhysicianEditorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhysicianEditorComponent),
      multi: true
    }       
  ]
})
export class PhysicianEditorComponent implements ControlValueAccessor,  Validator  {
  validate(control: AbstractControl): ValidationErrors {
    const error = { validate: true };
      
    if (!control.value && !control.pristine) {
      return error;
    }
    
    return null as any;
  }
  
  public form = new FormGroup({
    physicianId: new FormControl(null, []),
    title: new FormControl(null, []),
    firstname: new FormControl(null, []),
    lastname: new FormControl(null, []),
    phoneNumber: new FormControl(null, []),
    emailAddress: new FormControl(null, []),
    website: new FormControl(null, []),
    address: new FormControl(null,[])
  });
  
  writeValue(physician: Physician): void {   
    this.form.patchValue({
      physicianId: physician.physicianId,
    }, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }
  
  onTouched = () => {
  
  };

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }
}
