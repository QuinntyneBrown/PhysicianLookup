import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtInterceptor } from './jwt.interceptor';
import { HeadersInterceptor } from './headers.interceptor';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },    
    AuthService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class CoreModule { }
