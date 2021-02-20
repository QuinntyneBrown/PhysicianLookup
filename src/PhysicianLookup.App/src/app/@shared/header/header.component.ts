import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    "class": "mat-elevation-z6"
  }
})
export class HeaderComponent{ 
  @Input() public username: string;
}
