import { Component, Output, EventEmitter, Renderer2, AfterContentInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements AfterContentInit {



  public form = new FormGroup({
    username: new FormControl("quinn", [Validators.required]),
    password: new FormControl("admin", [Validators.required])
  });
  
  @Output() public tryToLogin: EventEmitter<{ username: string, password: string }> = new EventEmitter();

  constructor(private renderer: Renderer2) { }

  ngAfterContentInit(): void { this.renderer.selectRootElement('#username').focus(); }
}