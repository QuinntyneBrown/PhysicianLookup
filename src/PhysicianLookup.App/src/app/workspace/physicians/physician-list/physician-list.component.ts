import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { replace } from '@core/replace';
import { DialogService } from '@shared/dialog.service';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Physician } from '../physician';
import { PhysicianDetailComponent } from '../physician-detail/physician-detail.component';
import { PhysicianService } from '../physician.service';
import { pluckOut } from '@core/pluck-out';
import { ComponentStore } from '@ngrx/component-store';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-physician-list',
  templateUrl: './physician-list.component.html',
  styleUrls: ['./physician-list.component.scss'],
  providers: [
    ComponentStore
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhysicianListComponent implements OnDestroy {

  private readonly _destroyed$: Subject<void> = new Subject();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private readonly pageIndex$: BehaviorSubject<number> = new BehaviorSubject(1);
  private readonly pageSize$: BehaviorSubject<number> = new BehaviorSubject(1);

  private readonly createPhysician = this._componentStore.updater((state: { physicians: Physician[] },physician: Physician) => {    
    state.physicians.push(physician);
    return {
      physicians: state.physicians
    }
  });

  private readonly updatePhysician = this._componentStore.updater((state: { physicians: Physician[] },physician: Physician) => {    
    return {
      physicians: replace({ items: state.physicians, value: physician, key: "physicianId" })
    }
  });

  private readonly deletePhysician = this._componentStore.updater((state: { physicians: Physician[] },physician: Physician) => {    
    return {
      physicians: pluckOut({ items: state.physicians, value: physician, key: "physicianId" })
    }
  });

  public readonly vm$: Observable<{
    dataSource$: Observable<MatTableDataSource<Physician>>,
    columnsToDisplay: string[],
    length: number,
    pageNumber: number,
    pageSize: number
  }> = combineLatest([this.pageIndex$, this.pageSize$ ])
  .pipe(
    switchMap(([pageIndex,pageSize]) => combineLatest([
      this._physicianService.getPage({ pageIndex, pageSize }),
      of([
        'firstname',
        'lastname',
        'street',
        'emailAddress',
        'phoneNumber',
        'edit'
      ]),
      of(pageIndex),
      of(pageSize)  
    ])
    .pipe(
      map(([physicianPage, columnsToDisplay, pageNumber, pageSize]) => { 
        this._componentStore.setState({ physicians: physicianPage.entities });
  
        return {
          dataSource$: this._componentStore.select((state) => ({
            physicians: state.physicians
          })).pipe(map(x => new MatTableDataSource(x.physicians))),
  
          columnsToDisplay,
          length: physicianPage.length,
          pageSize,
          pageNumber
        }
      })
    ))
  );
  
  constructor(
    private readonly _physicianService: PhysicianService,
    private readonly _dialogService: DialogService,
    private readonly _componentStore: ComponentStore<{ physicians: Physician[] }>
  ) { }

  public edit(physician: Physician) {
    const component = this._dialogService.open<PhysicianDetailComponent>(PhysicianDetailComponent);
    component.physician$.next(physician);    
    component.saved
    .pipe(
      takeUntil(this._destroyed$),
      tap(x => this.updatePhysician(x))
    ).subscribe();
  }

  public create() {
    this._dialogService.open<PhysicianDetailComponent>(PhysicianDetailComponent)
    .saved
    .pipe(
      takeUntil(this._destroyed$),
      tap(x => this.createPhysician(x))
    ).subscribe();
  }

  public delete(physician: Physician) {    
    this.deletePhysician(physician);
    this._physicianService.remove({ physician }).pipe(
      takeUntil(this._destroyed$) 
    ).subscribe();
  }

  handlePage(event$) {
    this.pageIndex$.next(this.paginator.pageIndex + 1);
  }
  
  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
