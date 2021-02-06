import { Injectable, Inject } from '@angular/core';
import { baseUrl } from '@core/constants';
import { HttpClient } from '@angular/common/http';
import { Role } from './role';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    @Inject(baseUrl) private _baseUrl: string,
    private _client: HttpClient
  ) { }

  public get(): Observable<Role[]> {
    return this._client.get<{ roles: Role[] }>(`${this._baseUrl}api/roles`)
      .pipe(
        map(x => x.roles)
      );
  }

  public getById(options: { roleId: string }): Observable<Role> {
    return this._client.get<{ role: Role }>(`${this._baseUrl}api/roles/${options.roleId}`)
      .pipe(
        map(x => x.role)
      );
  }

  public remove(options: { role: Role }): Observable<void> {
    return this._client.delete<void>(`${this._baseUrl}api/roles/${options.role.roleId}`);
  }

  public create(options: { role: Role }): Observable<{ role: Role }> {    
    return this._client.post<{ role: Role }>(`${this._baseUrl}api/roles`, { role: options.role });
  }
  
  public update(options: { role: Role }): Observable<{ role: Role }> {
    return this._client.put<{ role: Role }>(`${this._baseUrl}api/roles`, { role: options.role });
  }
}
