import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth.service';
import { RedirectService } from '@core/redirect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy, OnInit {

  private readonly _destroyed: Subject<void> = new Subject();

  constructor(
    private authService: AuthService,
    private router: Router,
    private redirectService: RedirectService
  ) { }

  ngOnInit() {
    this.authService.logout();
  }
  
  public handleTryToLogin($event: { username: string, password: string }) {
    this.authService
    .tryToLogin({
      username: $event.username,
      password: $event.password
    })
    .pipe(
      takeUntil(this._destroyed),
    )
    .subscribe(
      () => {
        this.redirectService.redirectPreLogin();
      },
      errorResponse => {
        // handle error response
      }
    );  
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}