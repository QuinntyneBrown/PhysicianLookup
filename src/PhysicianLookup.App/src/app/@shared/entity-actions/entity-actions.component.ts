import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-entity-actions',
  templateUrl: './entity-actions.component.html',
  styleUrls: ['./entity-actions.component.scss']
})
export class EntityActionsComponent {

  @Output() public save: EventEmitter<any> = new EventEmitter();

  @Output() public cancel: EventEmitter<any> = new EventEmitter();

}
