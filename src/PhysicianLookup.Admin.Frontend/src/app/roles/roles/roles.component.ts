import { Component, OnInit, OnDestroy } from '@angular/core';
import { RolesService } from '../roles.service';
import { Observable, Subject } from 'rxjs';
import { Role } from '../role';
import { MatTableDataSource } from '@angular/material/table';
import { map, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnDestroy {

  private readonly _destroyed: Subject<void> = new Subject();
  
  public columnsToDisplay: string[] = [
    'name',
    'edit'
  ];

  public dataSource$ = this.rolesService.get().pipe(
    takeUntil(this._destroyed),
    map(x => new MatTableDataSource(x))
  );

  constructor(
    private rolesService: RolesService,
    private router: Router
  ) { }

  public handleEditClick(role: Role): void {
    this.router.navigateByUrl(`roles/edit/${role.roleId}`);
  }

  public handleCreateClick(): void {
    this.router.navigateByUrl('roles/create');
  }
  
  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
