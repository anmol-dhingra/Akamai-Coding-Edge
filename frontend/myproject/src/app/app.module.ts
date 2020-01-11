import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HotelDashboardComponent } from './hotel-dashboard/hotel-dashboard.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HotelDashboardComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
