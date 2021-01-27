import { Component, OnInit } from '@angular/core';
import { usernameKey } from '@core';
import { LocalStorageService } from '@core/local-storage.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  public get username() { return this._localStorageService.get({ name: usernameKey }); }

  constructor(
    private _localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

}
