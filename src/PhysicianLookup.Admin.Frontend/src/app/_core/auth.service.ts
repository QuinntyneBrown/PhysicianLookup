import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { accessTokenKey, baseUrl, storageKey, refreshTokenKey } from './constants';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    @Inject(baseUrl) private _baseUrl: string,
    private _httpClient: HttpClient
  ) {}

  public logout() {
    localStorage.setItem(accessTokenKey, null);
  }

  public tryToLogin(options: { username: string; password: string }) {
    return this._httpClient.post<{ accessToken: string, refreshToken: string }>(`${this._baseUrl}api/users/token`, options).pipe(
      map(response => {
        localStorage.setItem(accessTokenKey, response.accessToken);
        localStorage.setItem(refreshTokenKey, response.refreshToken)
        return response.accessToken;
      })
    );
  }
}