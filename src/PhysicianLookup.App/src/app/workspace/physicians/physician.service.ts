import { Injectable, Inject } from '@angular/core';
import { baseUrl } from '@core/constants';
import { HttpClient } from '@angular/common/http';
import { Physician } from './physician';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhysicianPage } from './physician-page';

@Injectable({
  providedIn: 'root'
})
export class PhysicianService {

  constructor(
    @Inject(baseUrl) private _baseUrl: string,
    private _client: HttpClient
  ) { }

  public uniqueIdentifierName: string = "physicianId";

  public getNearest(options: {longitude: number, latitude: number}): Observable<Physician[]> {
    return this._client.get<{ physicians: Physician[] }>(`${this._baseUrl}api/physicians/nearest/${options.longitude}/${options.latitude}`)
      .pipe(
        map(x => x.physicians)
      );
  }

  public search(options: { query: string }): Observable<Physician[]> {
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

  public getPage(options:{ pageSize: number, pageIndex: number }): Observable<PhysicianPage> {
    return this._client.get<{ physicianPage: PhysicianPage }>(`${this._baseUrl}api/physicians/page/${options.pageSize}/${options.pageIndex}`)
      .pipe(
        map(x => x.physicianPage)
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

  public create(options: { physician: Physician }): Observable<{ physician: Physician }> {
    return this._client.post<{ physician: Physician }>(`${this._baseUrl}api/physicians`, { physician: options.physician });
  }
  
  public update(options: { physician: Physician }): Observable<{ physician: Physician }> {
    return this._client.put<{ physician: Physician }>(`${this._baseUrl}api/physicians`, { physician: options.physician });
  }  
}
