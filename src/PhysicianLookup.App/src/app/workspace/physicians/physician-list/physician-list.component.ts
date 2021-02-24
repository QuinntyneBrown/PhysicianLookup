import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DialogService } from '@shared/dialog.service';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Physician } from '../physician';
import { PhysicianDetailComponent } from '../physician-detail/physician-detail.component';
import { PhysicianService } from '../physician.service';
import { MatPaginator } from '@angular/material/paginator';
import { EntityDataSource } from '@shared/entity-data-source';

@Component({
  selector: 'app-physician-list',
  templateUrl: './physician-list.component.html',
  styleUrls: ['./physician-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhysicianListComponent implements OnDestroy {

  private readonly _destroyed$: Subject<void> = new Subject();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private readonly pageIndex$: BehaviorSubject<number> = new BehaviorSubject(1);
  private readonly pageSize$: BehaviorSubject<number> = new BehaviorSubject(5);
  private readonly _dataSource: EntityDataSource<Physician> = new EntityDataSource(this._physicianService);

  public readonly vm$: Observable<{
    dataSource: EntityDataSource<Physician>,
    columnsToDisplay: string[],
    length$: Observable<number>,
    pageNumber: number,
    pageSize: number
  }> = combineLatest([this.pageIndex$, this.pageSize$ ])
  .pipe(
    switchMap(([pageIndex,pageSize]) => combineLatest([
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
      map(([columnsToDisplay, pageNumber, pageSize]) => { 
        this._dataSource.getPage({ pageIndex, pageSize });
        return {
          dataSource: this._dataSource,
          columnsToDisplay,
          length$: this._dataSource.length$,
          pageSize,
          pageNumber
        }
      })
    ))
  );
  
  constructor(
    private readonly _physicianService: PhysicianService,
    private readonly _dialogService: DialogService,
  ) { }

  public edit(physician: Physician) {
    const component = this._dialogService.open<PhysicianDetailComponent>(PhysicianDetailComponent);
    component.physician$.next(physician);    
    component.saved
    .pipe(
      takeUntil(this._destroyed$),
      tap(x => this._dataSource.update(x))
    ).subscribe();
  }

  public create() {
    this._dialogService.open<PhysicianDetailComponent>(PhysicianDetailComponent)
    .saved
    .pipe(
      takeUntil(this._destroyed$),
      tap(x => this.pageSize$.next(this.pageIndex$.value))
    ).subscribe();
  }

  public delete(physician: Physician) {    
    this._physicianService.remove({ physician }).pipe(
      takeUntil(this._destroyed$),
      tap(x => this.pageSize$.next(this.pageIndex$.value))
    ).subscribe();
  }
  
  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
