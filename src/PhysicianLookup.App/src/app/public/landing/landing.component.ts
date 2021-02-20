import { Component, OnInit, Inject } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { baseUrl } from '@core';

@Component({
  selector: 'pl-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  private readonly _destroyed: Subject<void> = new Subject();

  public nearByPhysicians$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(
    @Inject(baseUrl) private baseUrl: string,
    private client: HttpClient
  ) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.getNearBy(position.coords).pipe(
        takeUntil(this._destroyed),
        map(x => this.nearByPhysicians$.next(x))
      ).subscribe();
    });
  }

  public getNearBy(options: { longitude: number, latitude: number}): Observable<any[]> {
    return this.client.get<{ physicians: any[] }>(`${this.baseUrl}api/physicians/nearBy/${options.longitude}/${options.latitude}`).pipe(
      map(x => x.physicians)
    );
  }

  public ngOnDestroy(): void {    
    this._destroyed.next();
    this._destroyed.complete();
  }
}
