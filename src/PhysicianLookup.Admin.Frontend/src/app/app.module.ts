import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { AppContainerComponent } from './app-container.component';
import { baseUrl } from './_core/constants';
import { SharedModule } from './_shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    SharedModule
  ],
  providers: [{
    provide: baseUrl,
    useValue: "https://localhost:5001/"

  }],
  bootstrap: [AppContainerComponent]
})
export class AppModule { }
