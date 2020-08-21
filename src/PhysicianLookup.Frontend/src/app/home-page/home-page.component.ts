import { Component, OnInit } from '@angular/core';
import { PhysiciansService } from '../core/physicians.service';

@Component({
  selector: 'pl-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private physiciansService: PhysiciansService
  ) { }

  ngOnInit(): void {
  }

}
