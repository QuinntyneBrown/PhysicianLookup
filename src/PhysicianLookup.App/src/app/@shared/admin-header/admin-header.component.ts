import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalStorageService } from '@core/local-storage.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
  host: {
    "class": "mat-elevation-z6"
  }
})
export class AdminHeaderComponent {

  @Output() public menuClick: EventEmitter<any> = new EventEmitter();

  @Input() public username;   
}
