import { OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Physician } from '../physician';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.scss']
})
export class PhysicianComponent {

  public physician: Physician = {} as Physician;

  public formControl: FormControl = new FormControl(this.physician);
  
  constructor(private readonly _overlayRef: OverlayRef) {

  }
  
  public save() {

  }
}
