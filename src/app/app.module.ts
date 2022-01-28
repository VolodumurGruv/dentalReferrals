import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterilasModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DentalModule } from './dental/dental.module';

@NgModule({
  declarations: [AppComponent, MainPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterilasModule,
    BrowserAnimationsModule,
    DentalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
