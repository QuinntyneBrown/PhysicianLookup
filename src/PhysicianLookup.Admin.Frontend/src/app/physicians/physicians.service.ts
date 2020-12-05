import { Injectable, Inject } from '@angular/core';
import { baseUrl } from '../_core/constants';
import { HttpClient } from '@angular/common/http';
import { Physician } from './physician';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhysiciansService {

  constructor(
    @Inject(baseUrl) private _baseUrl: string,
    private _client: HttpClient
  ) { }

  public getNearest(options: {longitude: number, latitude: number}): Observable<Physician[]> {
    return this._client.get<{ physicians: Physician[] }>(`${this._baseUrl}api/physicians/nearest/${options.longitude}/${options.latitude}`)
      .pipe(
        map(x => x.physicians)
      );
  }

  public searc(options: { query: string }): Observable<Physician[]> {
    return this._client.get<{ physicians: Physician[] }>(`${this._baseUrl}api/physicians/${options.query}`)
      .pipe(
        map(x => x.physicians)
      );
  }

  public get(): Observable<Physician[]> {
    return this._client.get<{ physicians: Physician[] }>(`${this._baseUrl}api/physicians`)
      .pipe(
        map(x => x.physicians)
      );
  }

  public getById(options: { physicianId: number }): Observable<Physician> {
    return this._client.get<{ physician: Physician }>(`${this._baseUrl}api/physicians/${options.physicianId}`)
      .pipe(
        map(x => x.physician)
      );
  }

  public remove(options: { physician: Physician }): Observable<void> {
    return this._client.delete<void>(`${this._baseUrl}api/physicians/${options.physician.physicianId}`);
  }

  public save(options: { physician: Physician }): Observable<{ physicianId: number }> {
    return this._client.post<{ physicianId: number }>(`${this._baseUrl}api/physicians`, { physician: options.physician });
  }  
}
