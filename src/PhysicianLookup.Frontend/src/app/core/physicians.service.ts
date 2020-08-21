import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Physician } from './physician';

@Injectable({
  providedIn: 'root'
})
export class PhysiciansService {

  constructor(
    @Input('BASE_URL') private baseUrl: string,
    private client: HttpClient
    ) { }

  public getNearest(options: { longitude: string, latitude: string}): Observable<Physician[]> {
    return this.client.get<Physician[]>(`${this.baseUrl}/api/physicians/nearest/${options.longitude}/${options.latitude}`);

  }
}
