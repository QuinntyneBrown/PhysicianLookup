import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public/public.component';
import { SharedModule } from '@shared/shared.module';
import { LandingComponent } from './landing/landing.component';
import { baseUrl } from '@core';

@NgModule({
  declarations: [
    PublicComponent, 
    LandingComponent
  ],
  providers:[
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }