import { OverlayRef } from '@angular/cdk/overlay';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Physician } from '../physician';
import { PhysicianService } from '../physician.service';

@Component({
  selector: 'app-physician-detail',
  templateUrl: './physician-detail.component.html',
  styleUrls: ['./physician-detail.component.scss']
})
export class PhysicianDetailComponent implements OnDestroy {

  private readonly _destroyed: Subject<void> = new Subject();

  public physician$: BehaviorSubject<Physician> = new BehaviorSubject(null as any);

  @Output() public saved = new EventEmitter();

  public vm$ = combineLatest([
    this.physician$
  ]).pipe(
    map(([physician]) => {
      return {
        form: new FormGroup({
          physician: new FormControl(physician, [])
        })
      }
    })
  )

  constructor(
    private readonly _overlayRef: OverlayRef,
    private readonly _physicianService: PhysicianService) {     
  }

  public save(vm: { form: FormGroup}) {
    const physician = vm.form.value.physician;
    let obs$: Observable<{ physician: Physician }>;
    if(physician.physicianId) {
      obs$ = this._physicianService.update({ physician })
    }   
    else {
      obs$ = this._physicianService.create({ physician })
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
