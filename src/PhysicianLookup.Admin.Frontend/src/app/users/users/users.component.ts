import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable, Subject } from 'rxjs';
import { User } from '../user';
import { MatTableDataSource } from '@angular/material/table';
import { map, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy {

  private readonly _destroyed: Subject<void> = new Subject();
  
  public columnsToDisplay: string[] = [
    'username',
    'edit'
  ];

  public dataSource$ = this.usersService.get().pipe(
    takeUntil(this._destroyed),
    map(x => new MatTableDataSource(x))
  );

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  public handleEditClick(user: User): void {
    this.router.navigateByUrl(`users/edit/${user.userId}`);
  }

  public handleCreateClick(): void {
    this.router.navigateByUrl('users/create');
  }
  
  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
