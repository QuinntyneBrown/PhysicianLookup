import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    "class": "mat-elevation-z6"
  }
})
export class HeaderComponent implements OnInit { 

  @Input() public username: string;

  ngOnInit() {

  }
}
