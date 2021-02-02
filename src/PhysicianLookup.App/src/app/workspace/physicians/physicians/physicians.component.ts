import { Component, OnDestroy } from '@angular/core';
import { PhysiciansService } from '../physicians.service';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { Physician } from '../physician';
import { MatTableDataSource } from '@angular/material/table';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DialogService } from '@shared/dialog.service';
import { PhysicianComponent } from '../physician/physician.component';
import { ComponentStore } from '@ngrx/component-store';
import { pluckOut } from '@core/pluck-out';
import { replace } from '@core/replace';

@Component({
  selector: 'pl-physicians',
  templateUrl: './physicians.component.html',
  styleUrls: ['./physicians.component.scss'],
  providers: [
    ComponentStore
  ]
})
export class PhysiciansComponent implements OnDestroy {

  private readonly _destroyed: Subject<void> = new Subject();
  
  public readonly vm$: Observable<{
    dataSource$: Observable<MatTableDataSource<Physician>>,
    columnsToDisplay: string[]
  }> = combineLatest([
    this.physiciansService.get(),
    of([
      'firstname',
      'lastname',
      'street',
      'emailAddress',
      'phoneNumber',
      'edit'
    ])    
  ])
  .pipe(
    map(([physicians, columnsToDisplay]) => {

      this._componentStore.setState({ physicians });

      return {
        dataSource$: this._componentStore.select((state) => ({
          physicians: state.physicians,
        })).pipe(
          map(x => new MatTableDataSource(x.physicians))),
        columnsToDisplay
      }
    })
  );

  public columnsToDisplay: string[] = [
    'firstname',
    'lastname',
    'street',
    'emailAddress',
    'phoneNumber',
    'edit'
  ];

  constructor(
    private physiciansService: PhysiciansService,
    private router: Router,
    private readonly _dialogService: DialogService,
    private readonly _componentStore: ComponentStore<{ physicians: Physician[] }>
  ) { }

  private readonly createPhysician = this._componentStore.updater((state: { physicians: Physician[] }, physician: Physician) => {    
    state.physicians.push(physician);
    return {
      physicians: state.physicians
    }
  });

  private readonly updatePhysician = this._componentStore.updater((state: { physicians: Physician[] }, physician: Physician) => {    
    return {
      physicians: replace({ items: state.physicians, value: physician, key: "physicianId" })
    }
  });

  private readonly deletePhysician = this._componentStore.updater((state: { physicians: Physician[] }, physician: Physician) => {    
    return {
      physicians: pluckOut({ items: state.physicians, value: physician, key: "physicianId" })
    }
  });

  public edit(physician: Physician) {
    const component = this._dialogService.open<PhysicianComponent>(PhysicianComponent);
    component.physician$.next(physician);    
    component.saved
    .pipe(
      takeUntil(this._destroyed),
      tap(x => this.updatePhysician(x))
    ).subscribe();
  }

  public create() {
    this._dialogService.open<PhysicianComponent>(PhysicianComponent)
    .saved
    .pipe(
      takeUntil(this._destroyed),
      tap(x => this.createPhysician(x))
    ).subscribe();
  }

  public delete(physician: Physician) {    
    this.deletePhysician(physician);
    this.physiciansService.remove({ physician: physician }).pipe(
      takeUntil(this._destroyed) 
    ).subscribe();
  }
  
  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
