import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhysiciansService } from '../physicians.service';
import { Observable, Subject } from 'rxjs';
import { Physician } from '../physician';
import { MatTableDataSource } from '@angular/material/table';
import { map, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'pl-physicians',
  templateUrl: './physicians.component.html',
  styleUrls: ['./physicians.component.scss']
})
export class PhysiciansComponent implements OnDestroy {

  private readonly _destroyed: Subject<void> = new Subject();
  
  public columnsToDisplay: string[] = [
    'firstname',
    'lastname',
    'street',
    'emailAddress',
    'phoneNumber',
    'edit'
  ];

  public dataSource$ = this.physiciansService.get().pipe(
    takeUntil(this._destroyed),
    map(x => new MatTableDataSource(x))
  );

  constructor(
    private physiciansService: PhysiciansService,
    private router: Router
  ) { }

  public handleEditClick(physician: Physician): void {
    this.router.navigateByUrl(`physicians/edit/${physician.physicianId}`);
  }

  public handleCreateClick(): void {
    this.router.navigateByUrl('physicians/create');
  }
  
  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
