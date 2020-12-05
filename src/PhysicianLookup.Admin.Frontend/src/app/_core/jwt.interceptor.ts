import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { accessTokenKey, baseUrl, refreshTokenKey } from './constants';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    @Inject(baseUrl) private _baseUrl: string,
    private router: Router,
    private client: HttpClient
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError( error => {        
        if (error instanceof HttpErrorResponse && error.status === 401 && error.headers.get("token-expired")) { 
          return this.handleTokenExpired(request, next);     
        }

        if (error instanceof HttpErrorResponse && error.status === 401 && !error.headers.get("token-expired")) { 
          localStorage.setItem(accessTokenKey, null);
          localStorage.setItem(refreshTokenKey, null);   
          this.router.navigateByUrl("/login"); 
        }

        throwError(error);
    }))
  }

  handleTokenExpired(request: HttpRequest<any>, next: HttpHandler) {

    return this.getRefreshToken().pipe(
      switchMap(x => {
        return next.handle(request.clone({
          headers: request.headers.set('Authorization', `Bearer ${x.accessToken}`)
        }))
      })
    )
  }

  getRefreshToken(): Observable<any> {
    const accessToken = localStorage.getItem(accessTokenKey);
    const refreshToken = localStorage.getItem(refreshTokenKey);

    return this.client.post(`${this._baseUrl}api/users/refresh`,{
      accessToken,
      refreshToken
    }).pipe(
      tap(x => {
        console.log('REFRESH');
        console.log(x);
        localStorage.setItem(accessTokenKey, x.accessToken);
        localStorage.setItem(refreshTokenKey, x.refreshToken);
      })
    )
  }
}
