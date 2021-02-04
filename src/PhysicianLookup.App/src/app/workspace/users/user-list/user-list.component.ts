import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { replace } from '@core/replace';
import { DialogService } from '@shared/dialog.service';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { User } from '../user';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserService } from '../user.service';
import { pluckOut } from '@core/pluck-out';
import { ComponentStore } from '@ngrx/component-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [
    ComponentStore
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnDestroy {

  private readonly _destroyed: Subject<void> = new Subject();
  
  private readonly createUser = this._componentStore.updater((state: { users: User[] },user: User) => {    
    state.users.push(user);
    return {
      users: state.users
    }
  });

  private readonly updateUser = this._componentStore.updater((state: { users: User[] },user: User) => {    
    return {
      users: replace({ items: state.users, value: user, key: "userId" })
    }
  });

  private readonly deleteUser = this._componentStore.updater((state: { users: User[] },user: User) => {    
    return {
      users: pluckOut({ items: state.users, value: user, key: "userId" })
    }
  });

  public readonly vm$: Observable<{
    dataSource$: Observable<MatTableDataSource<User>>,
    columnsToDisplay: string[]
  }> = combineLatest([
    this._userService.get(),
    of(["name","actions"])    
  ])
  .pipe(
    map(([users, columnsToDisplay]) => {

      this._componentStore.setState({ users });

      return {
        dataSource$: this._componentStore.select((state) => ({
          users: state.users,
        })).pipe(
          map(x => new MatTableDataSource(x.users))),
        columnsToDisplay
      }
    })
  );

  constructor(
    private readonly _userService: UserService,
    private readonly _dialogService: DialogService,
    private readonly _componentStore: ComponentStore<{ users: User[] }>,
    private readonly _router: Router
  ) { }

  public edit(user: User) {
    const component = this._dialogService.open<UserDetailComponent>(UserDetailComponent);
    component.user$.next(user);    
    component.saved
    .pipe(
      takeUntil(this._destroyed),
      tap(x => this.updateUser(x))
    ).subscribe();
  }

  public create() {
    this._dialogService.open<UserDetailComponent>(UserDetailComponent)
    .saved
    .pipe(
      takeUntil(this._destroyed),
      tap(x => this.createUser(x))
    ).subscribe();
  }

  public delete(user: User) {    
    this.deleteUser(user);
    this._userService.remove({ user }).pipe(
      takeUntil(this._destroyed) 
    ).subscribe();
  }
  
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
