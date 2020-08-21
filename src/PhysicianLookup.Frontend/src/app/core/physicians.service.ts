import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NearestPhysician } from './physician';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhysiciansService {

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private client: HttpClient
    ) { }

  public getNearest(options: { longitude: number, latitude: number}): Observable<NearestPhysician[]> {
    return this.client.get<{ physicians: NearestPhysician[] }>(`${this.baseUrl}/api/physicians/nearest/${options.longitude}/${options.latitude}`).pipe(
      map(x => x.physicians)
    );

  }
}
