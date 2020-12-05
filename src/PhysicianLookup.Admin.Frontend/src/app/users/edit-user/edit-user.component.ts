import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy {

  public user: User = {} as User;
  private readonly _destroyed: Subject<void> = new Subject();

  public form = new FormGroup({     
    username: new FormControl(this.user.username, [Validators.required]),      
  });
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user.userId = this.activatedRoute.snapshot.params.id;

    if(this.user.userId) {
      this.usersService.getById({ userId: this.activatedRoute.snapshot.params.id }).pipe(
        map(x => {
          this.form.patchValue({
            username: x.username,
          });
        })
      ).subscribe();
    }
  }

  public handleSaveClick(): void {
    const user: User = {} as User;

    this.user.username = this.form.value.username;

    this.usersService.save({ user: this.user }).pipe(
      takeUntil(this._destroyed)
    ).subscribe(
      () => this.form.reset(),
      errorResponse => {
        // handle error
      }
    );

  }

  public handleCancelClick(): void {
    this.router.navigateByUrl('/users');
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
