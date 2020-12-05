import { Component, OnDestroy, OnInit } from '@angular/core';
import { RolesService } from '../roles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Role } from '../role';
import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit, OnDestroy {

  public role: Role = {} as Role;
  private readonly _destroyed: Subject<void> = new Subject();

  public form = new FormGroup({     
    name: new FormControl(this.role.name, [Validators.required]),      
  });
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private rolesService: RolesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.role.roleId = this.activatedRoute.snapshot.params.id;

    if(this.role.roleId) {
      this.rolesService.getById({ roleId: this.activatedRoute.snapshot.params.id }).pipe(
        map(x => {
          this.form.patchValue({
            title: x.name,
          });
        })
      ).subscribe();
    }
  }

  public handleSaveClick(): void {
    const role: Role = {} as Role;

    this.role.name = this.form.value.name;

    this.rolesService.save({ role: this.role }).pipe(
      takeUntil(this._destroyed)
    ).subscribe(
      () => this.form.reset(),
      errorResponse => {
        // handle error
      }
    );

  }

  public handleCancelClick(): void {
    this.router.navigateByUrl('/roles');
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
