import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnsupportBrowserVersionComponent } from './unsupport-browser-version/unsupport-browser-version.component';

@Component({
  selector: 'pl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.dialog.open(UnsupportBrowserVersionComponent);
  }
}
