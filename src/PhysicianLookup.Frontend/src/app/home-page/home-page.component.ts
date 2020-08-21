import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhysiciansService } from '../core/physicians.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { NearestPhysician } from '../core/physician';

@Component({
  selector: 'pl-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject();

  public physicians$: BehaviorSubject<NearestPhysician[]> = new BehaviorSubject([]);

  constructor(
    private physiciansService: PhysiciansService
  ) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.physiciansService.getNearest(position.coords).pipe(
        takeUntil(this.destroy$),
        map(x => this.physicians$.next(x))
      ).subscribe();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }
}
