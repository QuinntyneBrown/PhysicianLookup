import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Physician } from '../physician';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.scss']
})
export class PhysicianComponent implements OnInit {

  public physicianControl: FormControl = new FormControl();
  
  public physician: Physician = {} as Physician;
  constructor() { }

  ngOnInit(): void {
  }

}
