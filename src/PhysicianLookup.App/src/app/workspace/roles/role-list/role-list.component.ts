import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { replace } from '@core/replace';
import { DialogService } from '@shared/dialog.service';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Role } from '../role';
import { RoleDetailComponent } from '../role-detail/role-detail.component';
import { RoleService } from '../role.service';
import { pluckOut } from '@core/pluck-out';
import { ComponentStore } from '@ngrx/component-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  providers: [
    ComponentStore
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleListComponent implements OnDestroy {

  private readonly _destroyed: Subject<void> = new Subject();
  
  private readonly createRole = this._componentStore.updater((state: { roles: Role[] },role: Role) => {    
    state.roles.push(role);
    return {
      roles: state.roles
    }
  });

  private readonly updateRole = this._componentStore.updater((state: { roles: Role[] },role: Role) => {    
    return {
      roles: replace({ items: state.roles, value: role, key: "roleId" })
    }
  });

  private readonly deleteRole = this._componentStore.updater((state: { roles: Role[] },role: Role) => {    
    return {
      roles: pluckOut({ items: state.roles, value: role, key: "roleId" })
    }
  });

  public readonly vm$: Observable<{
    dataSource$: Observable<MatTableDataSource<Role>>,
    columnsToDisplay: string[]
  }> = combineLatest([
    this._roleService.get(),
    of(["name","actions"])    
  ])
  .pipe(
    map(([roles, columnsToDisplay]) => {

      this._componentStore.setState({ roles });

      return {
        dataSource$: this._componentStore.select((state) => ({
          roles: state.roles,
        })).pipe(
          map(x => new MatTableDataSource(x.roles))),
        columnsToDisplay
      }
    })
  );

  constructor(
    private readonly _roleService: RoleService,
    private readonly _dialogService: DialogService,
    private readonly _componentStore: ComponentStore<{ roles: Role[] }>,
    private readonly _router: Router
  ) { }

  public edit(role: Role) {
    const component = this._dialogService.open<RoleDetailComponent>(RoleDetailComponent);
    component.role$.next(role);    
    component.saved
    .pipe(
      takeUntil(this._destroyed),
      tap(x => this.updateRole(x))
    ).subscribe();
  }

  public create() {
    this._dialogService.open<RoleDetailComponent>(RoleDetailComponent)
    .saved
    .pipe(
      takeUntil(this._destroyed),
      tap(x => this.createRole(x))
    ).subscribe();
  }

  public delete(role: Role) {    
    this.deleteRole(role);
    this._roleService.remove({ role }).pipe(
      takeUntil(this._destroyed) 
    ).subscribe();
  }
  
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
