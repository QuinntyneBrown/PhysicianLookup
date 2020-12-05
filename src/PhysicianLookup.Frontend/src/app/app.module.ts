import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LandingComponent } from './landing.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UnsupportBrowserVersionComponent } from './unsupport-browser-version/unsupport-browser-version.component';
import { SharedModule } from './_shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UnsupportBrowserVersionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    GoogleMapsModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'fr-CA'
    })
  ],
  providers: [{
    provide: 'BASE_URL',
    useValue: 'https://localhost:5001/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
