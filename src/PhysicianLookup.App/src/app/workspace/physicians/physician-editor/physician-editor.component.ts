import { Component, ElementRef, forwardRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
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
export class PhysicianEditorComponent implements ControlValueAccessor,  Validator, OnDestroy  {
  private readonly _destroyed$: Subject<void> = new Subject();

  constructor(private readonly _elementRef: ElementRef) { }
  
  validate(control: AbstractControl): ValidationErrors {
    return this.form.valid
      ? null
      : Object.keys(this.form.controls).reduce(
          (accumulatedErrors, formControlName) => {
            const errors = { ...accumulatedErrors };

            const controlErrors = this.form.controls[formControlName].errors;

            if (controlErrors) {
              errors[formControlName] = controlErrors;
            }

            return errors;
          },
          {}
        );
  }
  
  public form = new FormGroup({
    physicianId: new FormControl(null, []),
    title: new FormControl(null, []),
    firstname: new FormControl(null, []),
    lastname: new FormControl(null, []),
    phoneNumber: new FormControl(null, []),
    email: new FormControl(null, []),
    website: new FormControl(null, []),
    address: new FormControl(null,[])
  });
  
  writeValue(physician: Physician): void {       
    if(physician) {
      this.form.patchValue(physician, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.form
    .valueChanges
    .pipe(
      takeUntil(this._destroyed$)
    )
    .subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this._elementRef.nativeElement
      .querySelectorAll("*")
      .forEach((element: HTMLElement) => {
        fromEvent(element, "blur")
          .pipe(
            takeUntil(this._destroyed$),
            tap(x => fn())
          )
          .subscribe();
      });
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
