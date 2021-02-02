import { OverlayRef } from '@angular/cdk/overlay';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Physician } from '../physician';
import { PhysiciansService } from '../physicians.service';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.scss']
})
export class PhysicianComponent {


  private readonly _destroyed: Subject<void> = new Subject();

  public physician$: BehaviorSubject<Physician> = new BehaviorSubject(undefined);

  public saved: EventEmitter<Physician> = new EventEmitter();

  public formControl: FormControl = new FormControl();
 
  public vm$ = combineLatest([
    this.physician$
  ]).pipe(
    map(([toDo]) => {
      return {
        formControl: new FormControl()
      }
    })
  )
    
  constructor(
    private readonly _overlayRef: OverlayRef, 
    private _physicianService: PhysiciansService) {

  }
  
  public save(vm: { formControl: FormControl}) {
    const physician = vm.formControl.value;

    let obs$: Observable<{physician: Physician }>;
    
    if(physician.physicianId) {
      obs$ = this._physicianService.update({ physician: physician })
    }   
    else {
      obs$ = this._physicianService.create({ physician: physician })
    } 

    obs$.pipe(
      takeUntil(this._destroyed),      
      tap(x => {
        this.saved.next(x.physician);
        this._overlayRef.dispose();
      })
    ).subscribe();
  }

  public cancel() {
    this._overlayRef.dispose();
  }

  ngOnDestroy() {
    this._destroyed.complete();
    this._destroyed.next();
  }
}
