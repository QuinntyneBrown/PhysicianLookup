import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { accessTokenKey } from './constants';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(accessTokenKey) || '';

    return next.handle(request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    }));
  }
}
